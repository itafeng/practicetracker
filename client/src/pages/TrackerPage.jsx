import { useState, useEffect } from 'react'
import ProblemItem from '../components/ProblemItem'

function TrackerPage() {
  const [problems, setProblems] = useState({})
  const [loading, setLoading] = useState(true)
  const [selectedProblem, setSelectedProblem] = useState(null)
  const [collapsedCategories, setCollapsedCategories] = useState({})
  const [collapsedSubcategories, setCollapsedSubcategories] = useState({})
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    fetchProblems()
  }, [])

  const fetchProblems = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/problems')
      const data = await response.json()
      setProblems(data)
      setLoading(false)
    } catch (error) {
      console.error('Error fetching problems:', error)
      setLoading(false)
    }
  }

  const handlePracticeSubmit = () => {
    fetchProblems()
    setSelectedProblem(null)
  }

  // Toggle category collapse
  const toggleCategory = (categoryName) => {
    setCollapsedCategories(prev => ({
      ...prev,
      [categoryName]: !prev[categoryName]
    }))
  }

  // Toggle subcategory collapse
  const toggleSubcategory = (categoryName, subcategoryName) => {
    const key = `${categoryName}::${subcategoryName}`
    setCollapsedSubcategories(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  // Count total problems in a category
  const getCategoryProblemCount = (subcategories) => {
    return Object.values(subcategories).reduce((total, problemList) => total + problemList.length, 0)
  }

  // Filter problems based on search query
  const getFilteredProblems = () => {
    if (!searchQuery.trim()) {
      return problems
    }

    const query = searchQuery.toLowerCase().trim()
    const filtered = {}

    Object.entries(problems).forEach(([categoryName, subcategories]) => {
      const filteredSubcategories = {}
      
      Object.entries(subcategories).forEach(([subcategoryName, problemList]) => {
        const filteredProblems = problemList.filter(problem => 
          problem.title.toLowerCase().includes(query)
        )
        
        if (filteredProblems.length > 0) {
          filteredSubcategories[subcategoryName] = filteredProblems
        }
      })

      if (Object.keys(filteredSubcategories).length > 0) {
        filtered[categoryName] = filteredSubcategories
      }
    })

    return filtered
  }

  const filteredProblems = getFilteredProblems()

  if (loading) {
    return <div className="loading">Loading problems...</div>
  }

  return (
    <div className="tracker-page">
      <div className="page-header">
        <h1 className="page-title">
          <span className="title-icon">📚</span>
          Problem Tracker
        </h1>
        <p className="page-description">
          Browse and practice coding problems organized by algorithmic patterns.
        </p>
      </div>

      <div className="search-container">
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
        {searchQuery && (
          <div className="search-results-count">
            {Object.values(filteredProblems).reduce((total, subcats) => 
              total + Object.values(subcats).reduce((sum, list) => sum + list.length, 0), 0
            )} results found
          </div>
        )}
      </div>

      <div className="categories-grid">
        {Object.entries(filteredProblems).map(([categoryName, subcategories]) => (
          <div key={categoryName} className={`category-card ${collapsedCategories[categoryName] ? 'collapsed' : ''}`}>
            <div 
              className="category-card-header"
              onClick={() => toggleCategory(categoryName)}
            >
              <div className="category-header-left">
                <span className={`collapse-icon ${collapsedCategories[categoryName] ? 'collapsed' : ''}`}>▼</span>
                <h2 className="category-card-title">{categoryName}</h2>
              </div>
              <span className="category-item-count">
                {getCategoryProblemCount(subcategories)} Items
              </span>
            </div>

            {!collapsedCategories[categoryName] && (
              <div className="category-card-content">
                {Object.entries(subcategories).map(([subcategoryName, problemList]) => {
                  const subcategoryKey = `${categoryName}::${subcategoryName}`
                  const isSubcategoryCollapsed = collapsedSubcategories[subcategoryKey]
                  const showSubcategoryLabel = subcategoryName !== 'General' && subcategoryName !== categoryName
                  
                  return (
                    <div key={subcategoryName} className="subcategory-section">
                      {showSubcategoryLabel && (
                        <div 
                          className="subcategory-label clickable"
                          onClick={() => toggleSubcategory(categoryName, subcategoryName)}
                        >
                          <span className={`collapse-icon small ${isSubcategoryCollapsed ? 'collapsed' : ''}`}>▼</span>
                          {subcategoryName}
                        </div>
                      )}
                      {!isSubcategoryCollapsed && (
                        <div className="problems-list">
                          {problemList.map((problem) => (
                            <ProblemItem
                              key={problem.id}
                              problem={problem}
                              isSelected={selectedProblem === problem.id}
                              onSelect={() => setSelectedProblem(selectedProblem === problem.id ? null : problem.id)}
                              onPracticeSubmit={handlePracticeSubmit}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default TrackerPage