import Database from 'better-sqlite3';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const db = new Database(join(__dirname, '../database/leetcode.db'));

// Enable foreign keys
db.pragma('foreign_keys = ON');

// Initialize database schema
export function initializeDatabase() {
  console.log('Initializing database schema...');
  
  // Create tables
  db.exec(`
    CREATE TABLE IF NOT EXISTS categories (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      order_index INTEGER NOT NULL
    );

    CREATE TABLE IF NOT EXISTS subcategories (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      category_id INTEGER NOT NULL,
      name TEXT NOT NULL,
      description TEXT,
      order_index INTEGER NOT NULL,
      FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE
    );

    CREATE TABLE IF NOT EXISTS problems (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      subcategory_id INTEGER NOT NULL,
      title TEXT NOT NULL,
      leetcode_url TEXT,
      difficulty TEXT CHECK(difficulty IN ('Easy', 'Medium', 'Hard')),
      order_index INTEGER NOT NULL,
      FOREIGN KEY (subcategory_id) REFERENCES subcategories(id) ON DELETE CASCADE
    );

    CREATE TABLE IF NOT EXISTS practice_history (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      problem_id INTEGER NOT NULL,
      completed_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      rating INTEGER NOT NULL CHECK(rating >= 1 AND rating <= 5),
      notes TEXT,
      FOREIGN KEY (problem_id) REFERENCES problems(id) ON DELETE CASCADE
    );

    CREATE INDEX IF NOT EXISTS idx_practice_problem ON practice_history(problem_id);
    CREATE INDEX IF NOT EXISTS idx_practice_date ON practice_history(completed_at);
  `);

  console.log('Database initialized successfully');
}

// Query functions that prepare statements on demand
export function getAllProblemsWithDetails() {
  const stmt = db.prepare(`
    SELECT 
      p.*,
      s.name as subcategory_name,
      c.name as category_name,
      (
        SELECT json_group_array(
          json_object(
            'id', ph.id,
            'completed_at', ph.completed_at,
            'rating', ph.rating,
            'notes', ph.notes
          )
        )
        FROM practice_history ph
        WHERE ph.problem_id = p.id
        ORDER BY ph.completed_at DESC
      ) as history
    FROM problems p
    JOIN subcategories s ON p.subcategory_id = s.id
    JOIN categories c ON s.category_id = c.id
    ORDER BY c.order_index, s.order_index, p.order_index
  `);
  return stmt.all();
}

export function getProblemWithHistory(id) {
  const stmt = db.prepare(`
    SELECT 
      p.*,
      s.name as subcategory_name,
      c.name as category_name,
      (
        SELECT json_group_array(
          json_object(
            'id', ph.id,
            'completed_at', ph.completed_at,
            'rating', ph.rating,
            'notes', ph.notes
          )
        )
        FROM practice_history ph
        WHERE ph.problem_id = p.id
        ORDER BY ph.completed_at DESC
      ) as history
    FROM problems p
    JOIN subcategories s ON p.subcategory_id = s.id
    JOIN categories c ON s.category_id = c.id
    WHERE p.id = ?
  `);
  return stmt.get(id);
}

export function addPracticeHistory(problemId, rating, notes) {
  const stmt = db.prepare(`
    INSERT INTO practice_history (problem_id, rating, notes)
    VALUES (?, ?, ?)
  `);
  return stmt.run(problemId, rating, notes || '');
}

export function getProblemsForReview() {
  const stmt = db.prepare(`
    SELECT 
      p.*,
      s.name as subcategory_name,
      c.name as category_name,
      ph.last_completed,
      ph.last_rating,
      ph.practice_count,
      ph.avg_rating
    FROM problems p
    JOIN subcategories s ON p.subcategory_id = s.id
    JOIN categories c ON s.category_id = c.id
    JOIN (
      SELECT 
        problem_id,
        MAX(completed_at) as last_completed,
        (SELECT rating FROM practice_history WHERE problem_id = ph.problem_id ORDER BY completed_at DESC LIMIT 1) as last_rating,
        COUNT(*) as practice_count,
        AVG(rating) as avg_rating
      FROM practice_history ph
      GROUP BY problem_id
    ) ph ON p.id = ph.problem_id
    WHERE ph.last_rating <= 4
    ORDER BY 
      CASE 
        WHEN ph.last_rating <= 2 THEN 1
        WHEN ph.last_rating = 3 AND julianday('now') - julianday(ph.last_completed) > 1 THEN 2
        WHEN ph.last_rating = 4 AND julianday('now') - julianday(ph.last_completed) > 3 THEN 3
        ELSE 4
      END,
      ph.last_completed ASC
  `);
  return stmt.all();
}

export function getStatistics() {
  const stmt = db.prepare(`
    SELECT 
      COUNT(DISTINCT ph.problem_id) as problems_completed,
      COUNT(*) as total_practices,
      AVG(ph.rating) as avg_rating,
      (SELECT COUNT(*) FROM problems) as total_problems
    FROM practice_history ph
  `);
  return stmt.get();
}

export function getStatsByCategory() {
  const stmt = db.prepare(`
    SELECT 
      c.name as category_name,
      COUNT(DISTINCT ph.problem_id) as completed_count,
      COUNT(*) as practice_count,
      AVG(ph.rating) as avg_rating
    FROM categories c
    LEFT JOIN subcategories s ON c.id = s.category_id
    LEFT JOIN problems p ON s.id = p.subcategory_id
    LEFT JOIN practice_history ph ON p.id = ph.problem_id
    GROUP BY c.id, c.name
    ORDER BY c.order_index
  `);
  return stmt.all();
}

export function getRatingDistribution() {
  const stmt = db.prepare(`
    SELECT 
      rating,
      COUNT(*) as count
    FROM practice_history
    GROUP BY rating
    ORDER BY rating
  `);
  return stmt.all();
}

export function getPracticeActivity() {
  const stmt = db.prepare(`
    SELECT 
      DATE(completed_at) as date,
      COUNT(*) as count
    FROM practice_history
    WHERE DATE(completed_at) >= DATE('now', '-90 days')
    GROUP BY DATE(completed_at)
    ORDER BY date DESC
  `);
  return stmt.all();
}

export function getAllCategoriesWithSubcategories() {
  const stmt = db.prepare(`
    SELECT 
      c.id as category_id,
      c.name as category_name,
      c.order_index as category_order,
      s.id as subcategory_id,
      s.name as subcategory_name,
      s.description as subcategory_description,
      s.order_index as subcategory_order
    FROM categories c
    LEFT JOIN subcategories s ON c.id = s.category_id
    ORDER BY c.order_index, s.order_index
  `);
  return stmt.all();
}

// Seed data functions
export function insertCategory(name, orderIndex) {
  const stmt = db.prepare('INSERT INTO categories (name, order_index) VALUES (?, ?)');
  return stmt.run(name, orderIndex);
}

export function insertSubcategory(categoryId, name, description, orderIndex) {
  const stmt = db.prepare('INSERT INTO subcategories (category_id, name, description, order_index) VALUES (?, ?, ?, ?)');
  return stmt.run(categoryId, name, description, orderIndex);
}

export function insertProblem(subcategoryId, title, leetcodeUrl, difficulty, orderIndex) {
  const stmt = db.prepare('INSERT INTO problems (subcategory_id, title, leetcode_url, difficulty, order_index) VALUES (?, ?, ?, ?, ?)');
  return stmt.run(subcategoryId, title, leetcodeUrl, difficulty, orderIndex);
}

export default db;