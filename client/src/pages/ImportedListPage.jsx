import { useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const normalizeDifficulty = (value) => {
  if (!value) return ''
  const normalized = value.trim().toLowerCase()
  if (normalized === 'easy') return 'Easy'
  if (normalized === 'medium') return 'Medium'
  if (normalized === 'hard') return 'Hard'
  return value.trim()
}

function ImportedListPage({ customLists, onRemoveList }) {
  const { listId } = useParams()
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState('')
  const [collapsedSections, setCollapsedSections] = useState({})

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

  const handleRemoveList = () => {
    if (!selectedList || typeof onRemoveList !== 'function') return

    const confirmed = window.confirm(`Remove imported list "${selectedList.name}"?`)
    if (!confirmed) return

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
                    {section.problems.map((problem) => (
                      <a
                        key={`${problem.title}-${problem.url}`}
                        href={problem.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="imported-problem-link"
                      >
                        <span className="problem-item-title">{problem.title}</span>
                        <span className="imported-row-meta">
                          <span className={`difficulty-pill difficulty-${normalizeDifficulty(problem.difficulty) || 'Unknown'}`}>
                            {normalizeDifficulty(problem.difficulty) || 'N/A'}
                          </span>
                          <span className="imported-link-pill">Open</span>
                        </span>
                      </a>
                    ))}
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
