import { useState, useEffect } from 'react'
import ProblemItem from '../components/ProblemItem'

function Top150Page() {
  const [plan, setPlan] = useState(null)
  const [loading, setLoading] = useState(true)
  const [selectedProblem, setSelectedProblem] = useState(null)
  const [collapsedSections, setCollapsedSections] = useState({})
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    fetchPlan()
  }, [])

  const fetchPlan = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/lists/top-interview-150')
      if (!response.ok) throw new Error('Failed to fetch')
      const data = await response.json()
      setPlan(data)
      setLoading(false)
    } catch (error) {
      console.error('Error fetching Top 150:', error)
      setLoading(false)
    }
  }

  const handlePracticeSubmit = () => {
    fetchPlan()
    setSelectedProblem(null)
  }

  const toggleSection = (sectionName) => {
    setCollapsedSections(prev => ({
      ...prev,
      [sectionName]: !prev[sectionName]
    }))
  }

  const getFilteredSections = () => {
    if (!plan || !plan.sections) return []
    if (!searchQuery.trim()) return plan.sections

    const query = searchQuery.toLowerCase().trim()
    return plan.sections
      .map(section => ({
        ...section,
        problems: section.problems.filter(p =>
          p.title.toLowerCase().includes(query)
        )
      }))
      .filter(section => section.problems.length > 0)
  }

  const filteredSections = getFilteredSections()

  const getProgressStats = () => {
    if (!plan || !plan.sections) return { completed: 0, total: 0 }
    let completed = 0
    let total = 0
    plan.sections.forEach(section => {
      section.problems.forEach(problem => {
        total++
        if (problem.history && problem.history.length > 0) {
          completed++
        }
      })
    })
    return { completed, total }
  }

  const getSectionProgress = (section) => {
    let completed = 0
    section.problems.forEach(problem => {
      if (problem.history && problem.history.length > 0) {
        completed++
      }
    })
    return { completed, total: section.problems.length }
  }

  const stats = getProgressStats()

  if (loading) {
    return <div className="loading">Loading Top Interview 150...</div>
  }

  if (!plan) {
    return (
      <div className="tracker-page">
        <div className="page-header">
          <h1 className="page-title">
            <span className="title-icon">🏆</span>
            Top Interview 150
          </h1>
          <p className="page-description">
            Study plan not found. Run the seed script first: <code>node data/seed-top150.js</code>
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="tracker-page">
      <div className="page-header">
        <h1 className="page-title">
          <span className="title-icon">🏆</span>
          Top Interview 150
        </h1>
        <p className="page-description">
          {plan.description}
        </p>
      </div>

      <div className="top150-progress-bar">
        <div className="top150-progress-info">
          <span className="top150-progress-label">Overall Progress</span>
          <span className="top150-progress-count">{stats.completed} / {stats.total}</span>
        </div>
        <div className="top150-progress-track">
          <div
            className="top150-progress-fill"
            style={{ width: `${stats.total > 0 ? (stats.completed / stats.total) * 100 : 0}%` }}
          />
        </div>
      </div>

      <div className="search-container">
        <div className="search-header">
          <div className="search-box">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              className="search-input"
              placeholder="Search problems by title..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button
                className="search-clear"
                onClick={() => setSearchQuery('')}
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>
        </div>
        {searchQuery && (
          <div className="search-results-count">
            {filteredSections.reduce((total, s) => total + s.problems.length, 0)} results found
          </div>
        )}
      </div>

      <div className="categories-grid">
        {filteredSections.map((section) => {
          const progress = getSectionProgress(section)
          return (
            <div key={section.name} className={`category-card ${collapsedSections[section.name] ? 'collapsed' : ''}`}>
              <div
                className="category-card-header"
                onClick={() => toggleSection(section.name)}
              >
                <div className="category-header-left">
                  <span className={`collapse-icon ${collapsedSections[section.name] ? 'collapsed' : ''}`}>▼</span>
                  <h2 className="category-card-title">{section.name}</h2>
                </div>
                <div className="section-header-right">
                  <span className="section-progress-badge">
                    {progress.completed}/{progress.total}
                  </span>
                  <span className="category-item-count">
                    {section.problems.length} Items
                  </span>
                </div>
              </div>

              {!collapsedSections[section.name] && (
                <div className="category-card-content">
                  <div className="problems-list">
                    {section.problems.map((problem) => (
                      <ProblemItem
                        key={problem.id}
                        problem={problem}
                        isSelected={selectedProblem === problem.id}
                        onSelect={() => setSelectedProblem(selectedProblem === problem.id ? null : problem.id)}
                        onPracticeSubmit={handlePracticeSubmit}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Top150Page
