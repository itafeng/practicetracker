import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import TrackerPage from './pages/TrackerPage'
import ReviewPage from './pages/ReviewPage'
import StatsPage from './pages/StatsPage'
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    document.body.classList.add('dark-mode')
  }, [])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.body.classList.toggle('dark-mode', !darkMode)
  }

  return (
    <Router>
      <div className={`app ${darkMode ? 'dark' : ''}`}>
        <nav className="navbar">
          <div className="nav-container">
            <div className="nav-brand">
              <span className="brand-icon">⊞</span>
              <span className="brand-text">LeetCode Practice Tracker</span>
            </div>
            <div className="nav-right">
              <div className="nav-links">
                <NavLink to="/" className={({ isActive }) => isActive ? 'nav-pill active' : 'nav-pill'}>
                  <span className="nav-icon">⊞</span> Tracker
                </NavLink>
                <NavLink to="/review" className={({ isActive }) => isActive ? 'nav-pill active' : 'nav-pill'}>
                  <span className="nav-icon">○</span> Review
                </NavLink>
                <NavLink to="/stats" className={({ isActive }) => isActive ? 'nav-pill active' : 'nav-pill'}>
                  <span className="nav-icon">⊡</span> Stats
                </NavLink>
              </div>
              <button className="dark-mode-toggle" onClick={toggleDarkMode} aria-label="Toggle dark mode">
                {darkMode ? '☀' : '🌙'}
              </button>
            </div>
          </div>
        </nav>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<TrackerPage />} />
            <Route path="/review" element={<ReviewPage />} />
            <Route path="/stats" element={<StatsPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App