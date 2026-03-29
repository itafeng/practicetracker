import { useEffect, useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const normalizeDifficulty = (value) => {
  if (!value) return ''
  const normalized = value.trim().toLowerCase()
  if (normalized === 'easy') return 'Easy'
  if (normalized === 'medium') return 'Medium'
  if (normalized === 'hard') return 'Hard'
  return value.trim()
}

const IMPORTED_HISTORY_STORAGE_KEY = 'interview-practice-imported-history'

const loadImportedHistory = () => {
  try {
    const raw = localStorage.getItem(IMPORTED_HISTORY_STORAGE_KEY)
    if (!raw) return {}
    const parsed = JSON.parse(raw)
    return parsed && typeof parsed === 'object' ? parsed : {}
  } catch (error) {
    console.error('Failed to load imported history:', error)
    return {}
  }
}

function ImportedListPage({ customLists, onRemoveList }) {
  const { listId } = useParams()
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState('')
  const [collapsedSections, setCollapsedSections] = useState({})
  const [selectedProblemKey, setSelectedProblemKey] = useState(null)
  const [rating, setRating] = useState(0)
  const [notes, setNotes] = useState('')
  const [historyByKey, setHistoryByKey] = useState(loadImportedHistory)

  const selectedList = useMemo(
    () => customLists.find((list) => list.id === listId),
    [customLists, listId]
  )

  const groupedSections = useMemo(() => {
    if (!selectedList) return []

    const query = searchQuery.trim().toLowerCase()
    const grouped = selectedList.problems.reduce((accumulator, problem) => {
      const category = problem.category || 'Uncategorized'
      if (!accumulator[category]) {
        accumulator[category] = []
      }
      accumulator[category].push(problem)
      return accumulator
    }, {})

    return Object.entries(grouped)
      .map(([name, problems]) => {
        const visibleProblems = query
          ? problems.filter((problem) => problem.title.toLowerCase().includes(query))
          : problems

        return {
          name,
          problems: visibleProblems
        }
      })
      .filter((section) => section.problems.length > 0)
      .sort((left, right) => left.name.localeCompare(right.name))
  }, [searchQuery, selectedList])

  useEffect(() => {
    localStorage.setItem(IMPORTED_HISTORY_STORAGE_KEY, JSON.stringify(historyByKey))
  }, [historyByKey])

  const totalVisibleProblems = groupedSections.reduce(
    (total, section) => total + section.problems.length,
    0
  )

  const toggleSection = (sectionName) => {
    setCollapsedSections((current) => ({
      ...current,
      [sectionName]: !current[sectionName]
    }))
  }

  const getProblemKey = (problem) => `${listId}::${problem.title}::${problem.url}`

  const getHistoryForProblem = (problem) => {
    const key = getProblemKey(problem)
    const history = historyByKey[key]
    return Array.isArray(history) ? history : []
  }

  const resetPracticeForm = () => {
    setRating(0)
    setNotes('')
  }

  const toggleProblem = (problemKey) => {
    if (selectedProblemKey === problemKey) {
      setSelectedProblemKey(null)
      resetPracticeForm()
      return
    }

    setSelectedProblemKey(problemKey)
    resetPracticeForm()
  }

  const handlePracticeSubmit = (event, problem) => {
    event.preventDefault()

    if (rating === 0) {
      alert('Please select a rating')
      return
    }

    const key = getProblemKey(problem)
    const nextEntry = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
      rating,
      notes: notes.trim(),
      completed_at: new Date().toISOString()
    }

    setHistoryByKey((current) => ({
      ...current,
      [key]: [nextEntry, ...(current[key] || [])]
    }))

    setSelectedProblemKey(null)
    resetPracticeForm()
  }

  const renderStars = () => {
    return [1, 2, 3, 4, 5].map((star) => (
      <span
        key={star}
        className={`star ${star <= rating ? 'filled' : 'empty'}`}
        onClick={(event) => {
          event.stopPropagation()
          setRating(star)
        }}
      >
        ★
      </span>
    ))
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit'
    })
  }

  const handleRemoveList = () => {
    if (!selectedList || typeof onRemoveList !== 'function') return

    const confirmed = window.confirm(`Remove imported list "${selectedList.name}"?`)
    if (!confirmed) return

    setHistoryByKey((current) => {
      const next = {}
      Object.entries(current).forEach(([key, value]) => {
        if (!key.startsWith(`${selectedList.id}::`)) {
          next[key] = value
        }
      })
      return next
    })

    onRemoveList(selectedList.id)
    navigate('/')
  }

  if (!selectedList) {
    return (
      <div className="tracker-page">
        <div className="page-header">
          <h1 className="page-title">
            <span className="title-icon">◈</span>
            Imported List
          </h1>
          <p className="page-description">
            The selected list was not found. Import a list from the top menu to get started.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="tracker-page">
      <div className="page-header">
        <h1 className="page-title">
          <span className="title-icon">◈</span>
          {selectedList.name}
        </h1>
        <p className="page-description">
          Imported custom list with {selectedList.problems.length} problems.
        </p>
        <div className="imported-header-actions">
          <button type="button" className="remove-list-btn" onClick={handleRemoveList}>
            Remove List
          </button>
        </div>
      </div>

      <div className="search-container">
        <div className="search-header">
          <div className="search-box">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              className="search-input"
              placeholder="Search imported problems..."
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
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
      </div>

      {groupedSections.length === 0 ? (
        <div className="category-card">
          <div className="category-card-content">
            <div className="empty-state imported-empty-state">
              <div className="empty-title">No matching problems</div>
              <p>Try a different search query.</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="categories-grid">
          {groupedSections.map((section) => (
            <div key={section.name} className={`category-card ${collapsedSections[section.name] ? 'collapsed' : ''}`}>
              <div className="category-card-header" onClick={() => toggleSection(section.name)}>
                <div className="category-header-left">
                  <span className={`collapse-icon ${collapsedSections[section.name] ? 'collapsed' : ''}`}>▼</span>
                  <h2 className="category-card-title">{section.name}</h2>
                </div>
                <div className="section-header-right">
                  <span className="category-item-count">{section.problems.length} Items</span>
                </div>
              </div>
              {!collapsedSections[section.name] && (
                <div className="category-card-content">
                  <div className="problems-list imported-problems-list">
                    {section.problems.map((problem) => {
                      const problemKey = getProblemKey(problem)
                      const history = getHistoryForProblem(problem)
                      const isCompleted = history.length > 0
                      const isSelected = selectedProblemKey === problemKey

                      return (
                        <div key={problemKey} className={`problem-item ${isSelected ? 'selected' : ''}`}>
                          <div className="problem-item-row" onClick={() => toggleProblem(problemKey)}>
                            <div className="problem-item-left">
                              <span className={`completion-indicator ${isCompleted ? 'completed' : ''}`}>
                                {isCompleted ? '✓' : '▸'}
                              </span>
                              <a
                                href={problem.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="problem-item-title"
                                onClick={(event) => event.stopPropagation()}
                              >
                                {problem.title}
                              </a>
                            </div>
                            <span className="imported-row-meta">
                              <span className={`difficulty-pill difficulty-${normalizeDifficulty(problem.difficulty) || 'Unknown'}`}>
                                {normalizeDifficulty(problem.difficulty) || 'N/A'}
                              </span>
                              <span className="imported-link-pill">Open</span>
                            </span>
                          </div>

                          {isSelected && (
                            <div className="problem-item-expanded">
                              <form className="inline-practice-form" onSubmit={(event) => handlePracticeSubmit(event, problem)}>
                                <div className="form-row">
                                  <span className="rating-label">Rate:</span>
                                  <div className="star-rating">{renderStars()}</div>
                                  <input
                                    type="text"
                                    className="inline-notes-input"
                                    placeholder="Notes (optional)"
                                    value={notes}
                                    onChange={(event) => setNotes(event.target.value)}
                                    onClick={(event) => event.stopPropagation()}
                                  />
                                  <button
                                    type="submit"
                                    className="inline-submit-btn"
                                    disabled={rating === 0}
                                    onClick={(event) => event.stopPropagation()}
                                  >
                                    Done
                                  </button>
                                  <button
                                    type="button"
                                    className="inline-cancel-btn"
                                    onClick={(event) => {
                                      event.stopPropagation()
                                      setSelectedProblemKey(null)
                                      resetPracticeForm()
                                    }}
                                  >
                                    ✕
                                  </button>
                                </div>
                              </form>

                              {history.length > 0 && (
                                <div className="attempt-history">
                                  <div className="history-header">
                                    {history.length} attempt{history.length > 1 ? 's' : ''}
                                  </div>
                                  <div className="history-entries">
                                    {history.map((entry) => (
                                      <div key={entry.id} className="history-entry">
                                        <div className="history-entry-main">
                                          <span className="history-entry-date">{formatDate(entry.completed_at)}</span>
                                          <span className="history-entry-rating">
                                            {'★'.repeat(entry.rating)}{'☆'.repeat(5 - entry.rating)}
                                          </span>
                                        </div>
                                        {entry.notes && (
                                          <div className="history-entry-notes">"{entry.notes}"</div>
                                        )}
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      <div className="search-results-count">
        {totalVisibleProblems} problems shown across {groupedSections.length} categories
      </div>
    </div>
  )
}

export default ImportedListPage
