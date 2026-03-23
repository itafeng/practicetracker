# 🎯 Interview Practice Tracker

A comprehensive web application to help you practice LeetCode problems with spaced repetition and detailed progress tracking.

## ✨ Features

### 📚 Problem Tracker
- **370+ LeetCode problems** organized into 15 categories and pattern-based subcategories
- Problems include: Bitwise, Two Pointer, Sliding Window, Trees, Graphs, DP, Heaps, Backtracking, Greedy, Binary Search, Stacks, Linked Lists, Arrays, Strings, and Design patterns
- Difficulty ratings: Easy, Medium, Hard
- Click problem links to practice on LeetCode
- Mark problems as complete with ratings (1-5 stars)
- Add notes for each practice session
- View complete practice history for each problem
- Multiple attempts tracked with timestamps

### 📥 Custom List Import
- Import your own problem sets from JSON using the top navigation `Import List` action
- Imported lists appear as dedicated tabs in the top menu (before Review)
- Imported problems are grouped by Category in collapsible sections (similar to Top 150)
- Category and Difficulty are optional on each imported problem
- Missing Category defaults to `Uncategorized`
- Remove an imported list directly from its page using `Remove List`

Supported JSON format:

```json
{
   "Problem List Name": "NeetCode 150",
   "Problems": [
      {
         "Problem Name": "Walls and Gates",
         "Category": "Graphs",
         "Difficulty": "Medium",
         "Url": "https://leetcode.com/problems/walls-and-gates"
      }
   ]
}
```

Alternate supported format:

```json
{
   "Problem List Name": "My List",
   "Problems": {
      "Two Sum": "https://leetcode.com/problems/two-sum/"
   }
}
```

### 🔄 Review Schedule (Spaced Repetition)
Problems automatically categorized based on the forgetting curve:
- **🔴 Critical**: Rating 1-2, review immediately
- **🟠 High Priority**: Rating 3, review after 24 hours
- **🟡 Medium Priority**: Rating 3-4, review within 1-3 days
- **🔵 Low Priority**: Rating 4, review within 3-7 days

### 📊 Statistics & Analytics
- Overall completion rate and progress
- Total practice sessions tracked
- Average performance ratings
- Progress by category (bar chart)
- Rating distribution (pie chart)
- Recent activity timeline (line chart)
- Detailed category performance table

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm

### Installation

1. **Clone or download this repository**

2. **Install backend dependencies**
   ```bash
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   npm install --prefix client
   ```

4. **Initialize and seed the database**
   ```bash
   node data/seed.js
   ```

### Running the Application

1. **Start the backend server** (in one terminal)
   ```bash
   node server/index.js
   ```
   Server will run on `http://localhost:3001`

2. **Start the frontend** (in another terminal)
   ```bash
   npm run dev --prefix client
   ```
   Frontend will run on `http://localhost:5173`

3. **Open your browser** and navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
leetpractice/
├── client/                 # React frontend (Vite)
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   │   └── ProblemCard.jsx
│   │   ├── pages/         # Page components
│   │   │   ├── TrackerPage.jsx
│   │   │   ├── Top150Page.jsx
│   │   │   ├── ReviewPage.jsx
│   │   │   ├── ImportedListPage.jsx
│   │   │   └── StatsPage.jsx
│   │   ├── App.jsx        # Main app with routing
│   │   ├── App.css        # Styles
│   │   └── main.jsx       # Entry point
│   └── package.json
├── server/                # Backend server
│   ├── index.js          # Express API server
│   └── db.js             # SQLite database functions
├── data/                 # Seed data
│   ├── seed.js          # Main seeding script
│   ├── seed-part1.js    # Problem data (Part 1)
│   ├── seed-part2.js    # Problem data (Part 2)
│   └── seed-top150.js   # Top Interview 150 data
├── database/            # SQLite database storage
│   └── leetcode.db
└── package.json         # Backend dependencies
```

## 🗄️ Database Schema

### Tables
- **categories**: Main problem categories
- **subcategories**: Pattern-based groupings
- **problems**: Individual LeetCode problems with URLs and difficulty
- **practice_history**: Practice sessions with ratings, notes, and timestamps

## 🔌 API Endpoints

- `GET /api/problems` - Get all problems organized by category
- `GET /api/problems/:id` - Get specific problem with history
- `POST /api/practice` - Log a practice session
- `GET /api/review` - Get problems needing review (spaced repetition)
- `GET /api/stats` - Get comprehensive statistics
- `GET /api/categories` - Get all categories and subcategories
- `GET /health` - Health check

## 🎨 Technology Stack

### Frontend
- React 18
- React Router v6 (routing)
- Recharts (data visualization)
- Vite (build tool)

### Backend
- Node.js
- Express.js
- better-sqlite3 (SQLite database)
- CORS enabled

## 📝 How to Use

1. **Browse Problems**: Go to the Tracker page and expand any category to see problems
2. **Practice**: Click a problem link to open it on LeetCode
3. **Mark Complete**: After solving, click "Mark as Done"
4. **Rate Yourself**: Give yourself a rating (1-5 stars) based on confidence
5. **Add Notes**: Optionally add notes about what you learned
6. **Review**: Check the Review page to see which problems need practice
7. **Track Progress**: View your statistics on the Stats page

## 🧠 The Forgetting Curve

The app implements spaced repetition based on the forgetting curve:
- **50%** forgotten within 1 hour
- **70%** forgotten within 24 hours
- **90%** forgotten within a week

Problems with lower ratings appear more frequently in your review queue, helping you focus on areas that need improvement.

## 🎯 Problem Categories

1. **Bitwise Patterns** - Bit manipulation techniques
2. **Two Pointer Patterns** - Two pointer algorithms
3. **Sliding Window Patterns** - Window-based solutions
4. **Tree Traversal (DFS & BFS)** - Tree algorithms
5. **Graph Traversal (DFS & BFS)** - Graph algorithms
6. **Dynamic Programming** - DP patterns
7. **Heap (Priority Queue)** - Heap-based solutions
8. **Backtracking** - Backtracking algorithms
9. **Greedy** - Greedy algorithms
10. **Binary Search** - Search patterns
11. **Stack** - Stack-based solutions
12. **Linked List** - List manipulation
13. **Array/Matrix** - Array operations
14. **String Manipulation** - String algorithms
15. **Design Patterns** - System design

## 📄 License

This project is for educational purposes. LeetCode is a trademark of LeetCode LLC.

## 🤝 Contributing

Feel free to fork this project and customize it for your own practice needs!