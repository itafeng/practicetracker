import { useState, useEffect } from 'react'
import ProblemItem from '../components/ProblemItem'

function TrackerPage() {
  const [problems, setProblems] = useState({})
  const [loading, setLoading] = useState(true)
  const [selectedProblem, setSelectedProblem] = useState(null)
  const [collapsedCategories, setCollapsedCategories] = useState({})
  const [collapsedSubcategories, setCollapsedSubcategories] = useState({})
  const [searchQuery, setSearchQuery] = useState('')
  const [showAddForm, setShowAddForm] = useState(false)
  const [adding, setAdding] = useState(false)
  const [addError, setAddError] = useState('')
  const [addForm, setAddForm] = useState({
    title: '',
    url: '',
    difficulty: 'Medium',
    category: '',
    subcategory: '',
    newCategory: '',
    newSubcategory: ''
  })
  const [inlineAddTarget, setInlineAddTarget] = useState(null)
  const [inlineAddForm, setInlineAddForm] = useState({
    title: '',
    url: '',
    difficulty: 'Medium'
  })
  const [inlineAddError, setInlineAddError] = useState('')
  const [inlineAdding, setInlineAdding] = useState(false)

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

  const resetAddForm = () => {
    setAddForm({
      title: '',
      url: '',
      difficulty: 'Medium',
      category: '',
      subcategory: '',
      newCategory: '',
      newSubcategory: ''
    })
    setAddError('')
  }

  const startInlineAdd = (categoryName, subcategoryName) => {
    setInlineAddTarget({ categoryName, subcategoryName })
    setInlineAddForm({ title: '', url: '', difficulty: 'Medium' })
    setInlineAddError('')
  }

  const cancelInlineAdd = () => {
    setInlineAddTarget(null)
    setInlineAddForm({ title: '', url: '', difficulty: 'Medium' })
    setInlineAddError('')
  }

  const handleAddSubmit = async (e) => {
    e.preventDefault()
    setAddError('')

    const trimmedTitle = addForm.title.trim()
    if (!trimmedTitle) {
      setAddError('Title is required')
      return
    }

    const isNewCategory = addForm.category === '__new__'
    const isNewSubcategory = addForm.subcategory === '__new__'
    const categoryName = isNewCategory ? addForm.newCategory.trim() : addForm.category
    const subcategoryName = isNewSubcategory ? addForm.newSubcategory.trim() : addForm.subcategory

    if (!categoryName) {
      setAddError('Category is required')
      return
    }

    const payload = {
      title: trimmedTitle,
      leetcode_url: addForm.url.trim() || null,
      difficulty: addForm.difficulty,
      category_name: categoryName,
      subcategory_name: subcategoryName || 'General'
    }

    setAdding(true)
    try {
      const response = await fetch('http://localhost:3001/api/problems', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        setAddError(errorData.error || 'Failed to add problem')
        return
      }

      await fetchProblems()
      resetAddForm()
      setShowAddForm(false)
    } catch (error) {
      console.error('Error adding problem:', error)
      setAddError('Failed to add problem')
    } finally {
      setAdding(false)
    }
  }

  const handleInlineAddSubmit = async (e) => {
    e.preventDefault()
    if (!inlineAddTarget) return

    setInlineAddError('')
    const trimmedTitle = inlineAddForm.title.trim()
    if (!trimmedTitle) {
      setInlineAddError('Title is required')
      return
    }

    const payload = {
      title: trimmedTitle,
      leetcode_url: inlineAddForm.url.trim() || null,
      difficulty: inlineAddForm.difficulty,
      category_name: inlineAddTarget.categoryName,
      subcategory_name: inlineAddTarget.subcategoryName
    }

    setInlineAdding(true)
    try {
      const response = await fetch('http://localhost:3001/api/problems', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        setInlineAddError(errorData.error || 'Failed to add problem')
        return
      }

      await fetchProblems()
      cancelInlineAdd()
    } catch (error) {
      console.error('Error adding problem:', error)
      setInlineAddError('Failed to add problem')
    } finally {
      setInlineAdding(false)
    }
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
  const categoryOptions = Object.keys(problems)
  const subcategoryOptions = addForm.category && addForm.category !== '__new__'
    ? Object.keys(problems[addForm.category] || {})
    : []

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
          <button
            type="button"
            className="add-problem-toggle"
            onClick={() => {
              setShowAddForm(!showAddForm)
              if (showAddForm) {
                resetAddForm()
              }
            }}
          >
            {showAddForm ? 'Close' : '+ Add a Problem'}
          </button>
        </div>
        {searchQuery && (
          <div className="search-results-count">
            {Object.values(filteredProblems).reduce((total, subcats) => 
              total + Object.values(subcats).reduce((sum, list) => sum + list.length, 0), 0
            )} results found
          </div>
        )}
      </div>

      {showAddForm && (
        <form className="add-problem-form" onSubmit={handleAddSubmit}>
          <div className="add-form-row">
            <input
              type="text"
              className="add-input"
              placeholder="Problem title"
              value={addForm.title}
              onChange={(e) => setAddForm(prev => ({ ...prev, title: e.target.value }))}
            />
            <input
              type="text"
              className="add-input"
              placeholder="LeetCode URL (optional)"
              value={addForm.url}
              onChange={(e) => setAddForm(prev => ({ ...prev, url: e.target.value }))}
            />
            <select
              className="add-select"
              value={addForm.difficulty}
              onChange={(e) => setAddForm(prev => ({ ...prev, difficulty: e.target.value }))}
            >
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>

          <div className="add-form-row">
            <select
              className="add-select"
              value={addForm.category}
              onChange={(e) => {
                const value = e.target.value
                setAddForm(prev => ({
                  ...prev,
                  category: value,
                  subcategory: '',
                  newSubcategory: '',
                  newCategory: value === '__new__' ? prev.newCategory : ''
                }))
              }}
            >
              <option value="">Select category</option>
              {categoryOptions.map((name) => (
                <option key={name} value={name}>{name}</option>
              ))}
              <option value="__new__">+ New category</option>
            </select>

            {addForm.category === '__new__' && (
              <input
                type="text"
                className="add-input"
                placeholder="New category name"
                value={addForm.newCategory}
                onChange={(e) => setAddForm(prev => ({ ...prev, newCategory: e.target.value }))}
              />
            )}

            {addForm.category && addForm.category !== '__new__' && (
              <select
                className="add-select"
                value={addForm.subcategory}
                onChange={(e) => setAddForm(prev => ({ ...prev, subcategory: e.target.value }))}
              >
                <option value="">Select subcategory (optional)</option>
                {subcategoryOptions.map((name) => (
                  <option key={name} value={name}>{name}</option>
                ))}
                <option value="__new__">+ New subcategory</option>
              </select>
            )}

            {(addForm.subcategory === '__new__' || addForm.category === '__new__') && (
              <input
                type="text"
                className="add-input"
                placeholder="New subcategory name (defaults to General)"
                value={addForm.newSubcategory}
                onChange={(e) => setAddForm(prev => ({ ...prev, newSubcategory: e.target.value }))}
              />
            )}
          </div>

          {addError && <div className="add-error">{addError}</div>}

          <div className="add-form-actions">
            <button className="add-submit" type="submit" disabled={adding}>
              {adding ? 'Adding...' : 'Add problem'}
            </button>
            <button
              className="add-cancel"
              type="button"
              onClick={() => {
                resetAddForm()
                setShowAddForm(false)
              }}
              disabled={adding}
            >
              Cancel
            </button>
          </div>
        </form>
      )}

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
                  const isInlineOpen =
                    inlineAddTarget?.categoryName === categoryName &&
                    inlineAddTarget?.subcategoryName === subcategoryName
                   
                  return (
                    <div key={subcategoryName} className="subcategory-section">
                      <div className="subcategory-header">
                        {showSubcategoryLabel ? (
                          <div 
                            className="subcategory-label clickable"
                            onClick={() => toggleSubcategory(categoryName, subcategoryName)}
                          >
                            <span className={`collapse-icon small ${isSubcategoryCollapsed ? 'collapsed' : ''}`}>▼</span>
                            {subcategoryName}
                          </div>
                        ) : (
                          <div className="subcategory-label">General</div>
                        )}
                        <div className="subcategory-actions">
                          <button
                            type="button"
                            className="subcategory-add-button"
                            onClick={(e) => {
                              e.stopPropagation()
                              if (isInlineOpen) {
                                cancelInlineAdd()
                              } else {
                                startInlineAdd(categoryName, subcategoryName)
                              }
                            }}
                          >
                            {isInlineOpen ? 'Close' : '+ Add problem'}
                          </button>
                        </div>
                      </div>
                      {isInlineOpen && (
                        <form className="inline-add-form" onSubmit={handleInlineAddSubmit}>
                          <div className="inline-add-row">
                            <input
                              type="text"
                              className="add-input"
                              placeholder="Problem title"
                              value={inlineAddForm.title}
                              onChange={(e) => setInlineAddForm(prev => ({ ...prev, title: e.target.value }))}
                            />
                            <input
                              type="text"
                              className="add-input"
                              placeholder="LeetCode URL (optional)"
                              value={inlineAddForm.url}
                              onChange={(e) => setInlineAddForm(prev => ({ ...prev, url: e.target.value }))}
                            />
                            <select
                              className="add-select"
                              value={inlineAddForm.difficulty}
                              onChange={(e) => setInlineAddForm(prev => ({ ...prev, difficulty: e.target.value }))}
                            >
                              <option value="Easy">Easy</option>
                              <option value="Medium">Medium</option>
                              <option value="Hard">Hard</option>
                            </select>
                          </div>
                          {inlineAddError && <div className="inline-add-error">{inlineAddError}</div>}
                          <div className="inline-add-actions">
                            <button className="add-submit" type="submit" disabled={inlineAdding}>
                              {inlineAdding ? 'Adding...' : 'Add'}
                            </button>
                            <button
                              className="add-cancel"
                              type="button"
                              onClick={cancelInlineAdd}
                              disabled={inlineAdding}
                            >
                              Cancel
                            </button>
                          </div>
                        </form>
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
