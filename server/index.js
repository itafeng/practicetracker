import express from 'express';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import * as db from './db.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize database
db.initializeDatabase();

// API Routes

// Get all problems with their practice history
app.get('/api/problems', (req, res) => {
  try {
    const problems = db.getAllProblemsWithDetails();
    
    // Parse JSON strings and organize by category and subcategory
    const organized = {};
    
    problems.forEach(problem => {
      const categoryName = problem.category_name;
      const subcategoryName = problem.subcategory_name;
      
      if (!organized[categoryName]) {
        organized[categoryName] = {};
      }
      
      if (!organized[categoryName][subcategoryName]) {
        organized[categoryName][subcategoryName] = [];
      }
      
      // Parse history JSON
      let history = [];
      try {
        const parsed = JSON.parse(problem.history);
        history = parsed.filter(h => h.id !== null);
      } catch (e) {
        history = [];
      }
      
      organized[categoryName][subcategoryName].push({
        id: problem.id,
        title: problem.title,
        leetcode_url: problem.leetcode_url,
        difficulty: problem.difficulty,
        history: history
      });
    });
    
    res.json(organized);
  } catch (error) {
    console.error('Error fetching problems:', error);
    res.status(500).json({ error: 'Failed to fetch problems' });
  }
});

// Get a specific problem with full history
app.get('/api/problems/:id', (req, res) => {
  try {
    const problem = db.getProblemWithHistory(req.params.id);
    
    if (!problem) {
      return res.status(404).json({ error: 'Problem not found' });
    }
    
    // Parse history JSON
    let history = [];
    try {
      const parsed = JSON.parse(problem.history);
      history = parsed.filter(h => h.id !== null);
    } catch (e) {
      history = [];
    }
    
    res.json({
      id: problem.id,
      title: problem.title,
      leetcode_url: problem.leetcode_url,
      difficulty: problem.difficulty,
      category_name: problem.category_name,
      subcategory_name: problem.subcategory_name,
      history: history
    });
  } catch (error) {
    console.error('Error fetching problem:', error);
    res.status(500).json({ error: 'Failed to fetch problem' });
  }
});

// Add practice history for a problem
app.post('/api/practice', (req, res) => {
  try {
    const { problem_id, rating, notes } = req.body;
    
    if (!problem_id || !rating) {
      return res.status(400).json({ error: 'problem_id and rating are required' });
    }
    
    if (rating < 1 || rating > 5) {
      return res.status(400).json({ error: 'Rating must be between 1 and 5' });
    }
    
    const result = db.addPracticeHistory(problem_id, rating, notes || '');
    
    res.json({
      success: true,
      id: result.lastInsertRowid
    });
  } catch (error) {
    console.error('Error adding practice history:', error);
    res.status(500).json({ error: 'Failed to add practice history' });
  }
});

// Get problems that need review (spaced repetition)
app.get('/api/review', (req, res) => {
  try {
    const problems = db.getProblemsForReview();
    
    // Categorize by priority
    const now = new Date();
    const categorized = {
      critical: [],    // Rating 1-2, review immediately
      high: [],        // Rating 3, > 24 hours
      medium: [],      // Rating 3-4, 1-3 days
      low: []          // Rating 4, 3-7 days
    };
    
    problems.forEach(problem => {
      const lastCompleted = new Date(problem.last_completed);
      const daysSince = (now - lastCompleted) / (1000 * 60 * 60 * 24);
      
      if (problem.last_rating <= 2) {
        categorized.critical.push(problem);
      } else if (problem.last_rating === 3 && daysSince > 1) {
        categorized.high.push(problem);
      } else if ((problem.last_rating === 3 || problem.last_rating === 4) && daysSince >= 1 && daysSince <= 3) {
        categorized.medium.push(problem);
      } else if (problem.last_rating === 4 && daysSince > 3) {
        categorized.low.push(problem);
      }
    });
    
    res.json(categorized);
  } catch (error) {
    console.error('Error fetching review problems:', error);
    res.status(500).json({ error: 'Failed to fetch review problems' });
  }
});

// Get overall statistics
app.get('/api/stats', (req, res) => {
  try {
    const overall = db.getStatistics();
    const byCategory = db.getStatsByCategory();
    const ratingDist = db.getRatingDistribution();
    const activity = db.getPracticeActivity();
    
    res.json({
      overall: {
        problems_completed: overall.problems_completed || 0,
        total_practices: overall.total_practices || 0,
        avg_rating: overall.avg_rating ? Number(overall.avg_rating.toFixed(2)) : 0,
        total_problems: overall.total_problems || 0
      },
      by_category: byCategory.map(cat => ({
        category_name: cat.category_name,
        completed_count: cat.completed_count || 0,
        practice_count: cat.practice_count || 0,
        avg_rating: cat.avg_rating ? Number(cat.avg_rating.toFixed(2)) : 0
      })),
      rating_distribution: ratingDist,
      activity: activity
    });
  } catch (error) {
    console.error('Error fetching statistics:', error);
    res.status(500).json({ error: 'Failed to fetch statistics' });
  }
});

// Get all categories with subcategories
app.get('/api/categories', (req, res) => {
  try {
    const rows = db.getAllCategoriesWithSubcategories();
    
    // Organize into nested structure
    const categories = {};
    
    rows.forEach(row => {
      if (!categories[row.category_id]) {
        categories[row.category_id] = {
          id: row.category_id,
          name: row.category_name,
          order_index: row.category_order,
          subcategories: []
        };
      }
      
      if (row.subcategory_id) {
        categories[row.category_id].subcategories.push({
          id: row.subcategory_id,
          name: row.subcategory_name,
          description: row.subcategory_description,
          order_index: row.subcategory_order
        });
      }
    });
    
    res.json(Object.values(categories));
  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).json({ error: 'Failed to fetch categories' });
  }
});

// Add a new problem (with optional new category/subcategory)
app.post('/api/problems', (req, res) => {
  try {
    const {
      title,
      leetcode_url,
      difficulty,
      category_id,
      category_name,
      subcategory_id,
      subcategory_name
    } = req.body;

    const trimmedTitle = title?.trim();
    if (!trimmedTitle) {
      return res.status(400).json({ error: 'title is required' });
    }

    const normalizedDifficulty = difficulty?.trim();
    const allowedDifficulties = ['Easy', 'Medium', 'Hard'];
    if (!allowedDifficulties.includes(normalizedDifficulty)) {
      return res.status(400).json({ error: 'difficulty must be Easy, Medium, or Hard' });
    }

    const resolvedCategoryName = category_name?.trim();
    if (!category_id && !resolvedCategoryName) {
      return res.status(400).json({ error: 'category_id or category_name is required' });
    }

    const resolvedSubcategoryName = (subcategory_name && subcategory_name.trim()) || 'General';

    const result = db.addProblemWithPlacement({
      title: trimmedTitle,
      leetcodeUrl: leetcode_url?.trim() || null,
      difficulty: normalizedDifficulty,
      categoryId: category_id || null,
      categoryName: resolvedCategoryName || null,
      subcategoryId: subcategory_id || null,
      subcategoryName: resolvedSubcategoryName
    });

    res.status(result.existing ? 200 : 201).json({
      id: result.id,
      category_id: result.category_id,
      subcategory_id: result.subcategory_id,
      existing: result.existing
    });
  } catch (error) {
    console.error('Error adding problem:', error);
    res.status(500).json({ error: 'Failed to add problem' });
  }
});

// Get a study plan by slug (e.g., top-interview-150)
app.get('/api/lists/:slug', (req, res) => {
  try {
    const plan = db.getStudyPlan(req.params.slug);
    if (!plan) {
      return res.status(404).json({ error: 'Study plan not found' });
    }

    const rows = db.getStudyPlanProblems(plan.id);

    const sections = {};
    rows.forEach(row => {
      if (!sections[row.section_name]) {
        sections[row.section_name] = {
          name: row.section_name,
          order: row.section_order,
          problems: []
        };
      }

      let history = [];
      try {
        const parsed = JSON.parse(row.history);
        history = parsed.filter(h => h.id !== null);
      } catch (e) {
        history = [];
      }

      sections[row.section_name].problems.push({
        id: row.id,
        title: row.title,
        leetcode_url: row.leetcode_url,
        difficulty: row.difficulty,
        history: history
      });
    });

    const sortedSections = Object.values(sections).sort((a, b) => a.order - b.order);

    res.json({
      name: plan.name,
      slug: plan.slug,
      description: plan.description,
      sections: sortedSections
    });
  } catch (error) {
    console.error('Error fetching study plan:', error);
    res.status(500).json({ error: 'Failed to fetch study plan' });
  }
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
