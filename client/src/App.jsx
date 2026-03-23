import { useEffect, useRef, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, NavLink, useLocation } from 'react-router-dom'
import TrackerPage from './pages/TrackerPage'
import Top150Page from './pages/Top150Page'
import ReviewPage from './pages/ReviewPage'
import StatsPage from './pages/StatsPage'
import ImportedListPage from './pages/ImportedListPage'
import './App.css'

const CUSTOM_LISTS_STORAGE_KEY = 'interview-practice-custom-lists'

const slugify = (value) => {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

const normalizeListRecord = (record) => {
  if (!record || typeof record !== 'object') return null
  const list = record
  if (typeof list.id !== 'string' || !list.id.trim()) return null
  if (typeof list.name !== 'string' || !list.name.trim()) return null
  if (!Array.isArray(list.problems)) return null

  const normalizedProblems = list.problems
    .map((problem) => {
      if (!problem || typeof problem !== 'object') return null
      const entry = problem
      const title = typeof entry.title === 'string' ? entry.title.trim() : ''
      const url = typeof entry.url === 'string' ? entry.url.trim() : ''
      const category = typeof entry.category === 'string' && entry.category.trim()
        ? entry.category.trim()
        : 'Uncategorized'
      const difficulty = typeof entry.difficulty === 'string' && entry.difficulty.trim()
        ? entry.difficulty.trim()
        : ''
      if (!title || !url) return null
      return { title, url, category, difficulty }
    })
    .filter(Boolean)

  return {
    id: list.id,
    name: list.name.trim(),
    problems: normalizedProblems
  }
}

const loadCustomLists = () => {
  try {
    const rawValue = localStorage.getItem(CUSTOM_LISTS_STORAGE_KEY)
    if (!rawValue) return []
    const parsed = JSON.parse(rawValue)
    if (!Array.isArray(parsed)) return []
    return parsed.map(normalizeListRecord).filter(Boolean)
  } catch (error) {
    console.error('Failed to load custom lists from storage:', error)
    return []
  }
}

const parseProblemEntry = (entry) => {
  if (!entry || typeof entry !== 'object') return null
  const value = entry

  const titled = typeof value['Problem Name'] === 'string' ? value['Problem Name'].trim() : ''
  const directTitle = typeof value.title === 'string' ? value.title.trim() : ''
  const upperUrl = typeof value.Url === 'string' ? value.Url.trim() : ''
  const allCapsUrl = typeof value.URL === 'string' ? value.URL.trim() : ''
  const categoryTitle = typeof value.Category === 'string' ? value.Category.trim() : ''
  const categoryLower = typeof value.category === 'string' ? value.category.trim() : ''
  const difficultyTitle = typeof value.Difficulty === 'string' ? value.Difficulty.trim() : ''
  const difficultyLower = typeof value.difficulty === 'string' ? value.difficulty.trim() : ''
  const url = typeof value.url === 'string'
    ? value.url.trim()
    : typeof value.link === 'string'
      ? value.link.trim()
      : ''
  const finalUrl = url || upperUrl || allCapsUrl
  const finalCategory = categoryTitle || categoryLower || 'Uncategorized'
  const finalDifficulty = difficultyTitle || difficultyLower || ''

  if (finalUrl && (titled || directTitle)) {
    return {
      title: titled || directTitle,
      url: finalUrl,
      category: finalCategory,
      difficulty: finalDifficulty
    }
  }

  const keys = Object.keys(value)
  if (keys.length === 1) {
    const key = keys[0]
    const keyValue = value[key]
    if (typeof key === 'string' && typeof keyValue === 'string' && key.trim() && keyValue.trim()) {
      return { title: key.trim(), url: keyValue.trim() }
    }
  }

  return null
}

const parseImportedList = (payload) => {
  if (!payload || typeof payload !== 'object' || Array.isArray(payload)) {
    throw new Error('JSON must be an object')
  }

  const source = payload

  const listNameEntry = Object.entries(source).find(
    ([key, value]) => typeof value === 'string' && key.trim().toLowerCase() === 'problem list name'
  )
  const listName = listNameEntry ? listNameEntry[1].trim() : ''

  if (!listName) {
    throw new Error('Missing "Problem List Name"')
  }

  const problemsEntry = Object.entries(source).find(
    ([key]) => key.trim().toLowerCase() === 'problems'
  )
  const rawProblems = problemsEntry ? problemsEntry[1] : undefined

  let parsedProblems = []

  if (Array.isArray(rawProblems)) {
    parsedProblems = rawProblems.map(parseProblemEntry).filter(Boolean)
  } else if (rawProblems && typeof rawProblems === 'object') {
    parsedProblems = Object.entries(rawProblems)
      .filter(([, url]) => typeof url === 'string' && url.trim())
      .map(([title, url]) => ({
        title: title.trim(),
        url: url.trim(),
        category: 'Uncategorized',
        difficulty: ''
      }))
      .filter((problem) => problem.title)
  }

  if (parsedProblems.length === 0) {
    throw new Error('No valid problems found. Use "Problems" with Problem Name -> url entries.')
  }

  const deduped = []
  const seen = new Set()
  parsedProblems.forEach((problem) => {
    const key = `${problem.title.toLowerCase()}::${problem.url}`
    if (seen.has(key)) return
    seen.add(key)
    deduped.push(problem)
  })

  return {
    name: listName,
    problems: deduped
  }
}

const buildListId = (name, existingLists, replaceId = null) => {
  if (replaceId) return replaceId
  const base = slugify(name) || 'custom-list'
  let nextId = base
  let suffix = 2
  const usedIds = new Set(existingLists.map((list) => list.id))
  while (usedIds.has(nextId)) {
    nextId = `${base}-${suffix}`
    suffix += 1
  }
  return nextId
}

function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [customLists, setCustomLists] = useState(loadCustomLists)
  const [importFeedback, setImportFeedback] = useState('')
  const [importError, setImportError] = useState(false)
  const [feedbackRoute, setFeedbackRoute] = useState('')
  const fileInputRef = useRef(null)

  useEffect(() => {
    document.body.classList.add('dark-mode')
  }, [])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.body.classList.toggle('dark-mode', !darkMode)
  }

  useEffect(() => {
    localStorage.setItem(CUSTOM_LISTS_STORAGE_KEY, JSON.stringify(customLists))
  }, [customLists])

  const handleImportClick = () => {
    const shouldContinue = window.confirm(
      'Import JSON format:\n\nPreferred:\n{\n  "Problem List Name": "Your List Name",\n  "Problems": [\n    { "Problem Name": "Two Sum", "Category": "Arrays", "Difficulty": "Easy", "url": "https://leetcode.com/problems/two-sum/" }\n  ]\n}\n\nNote: "Category" and "Difficulty" are optional. Missing category defaults to "Uncategorized".\n\nAlso supported:\n{\n  "Problem List Name": "Your List Name",\n  "Problems": {\n    "Two Sum": "https://leetcode.com/problems/two-sum/"\n  }\n}\n\nClick OK to choose a JSON file.'
    )

    if (!shouldContinue) {
      return
    }

    fileInputRef.current?.click()
  }

  const handleImportChange = async (event) => {
    const selectedFile = event.target.files?.[0]
    if (!selectedFile) return

    try {
      const fileContents = await selectedFile.text()
      const json = JSON.parse(fileContents)
      const imported = parseImportedList(json)

      setCustomLists((current) => {
        const existing = current.find(
          (item) => item.name.toLowerCase() === imported.name.toLowerCase()
        )
        const listRecord = {
          id: buildListId(imported.name, current, existing?.id),
          name: imported.name,
          problems: imported.problems
        }

        const withoutExisting = existing
          ? current.filter((item) => item.id !== existing.id)
          : current

        return [...withoutExisting, listRecord]
      })

      setImportError(false)
      setImportFeedback(`Imported ${imported.name} (${imported.problems.length} problems).`)
      setFeedbackRoute(window.location.pathname)
    } catch (error) {
      setImportError(true)
      setImportFeedback(error instanceof Error ? error.message : 'Failed to import list.')
      setFeedbackRoute(window.location.pathname)
    } finally {
      event.target.value = ''
    }
  }

  const handleRemoveCustomList = (listId) => {
    let removedName = ''
    setCustomLists((current) => {
      const target = current.find((item) => item.id === listId)
      removedName = target ? target.name : ''
      return current.filter((item) => item.id !== listId)
    })

    if (removedName) {
      setImportError(false)
      setImportFeedback(`Removed ${removedName}.`)
      setFeedbackRoute(window.location.pathname)
    }
  }

  const AppShell = () => {
    const location = useLocation()
    const shouldShowFeedback = importFeedback && feedbackRoute === location.pathname

    return (
      <div className={`app ${darkMode ? 'dark' : ''}`}>
        <nav className="navbar">
          <div className="nav-container">
            <div className="nav-brand">
              <span className="brand-icon">⊞</span>
              <span className="brand-text">Interview Practice Tracker</span>
            </div>
            <div className="nav-right">
              <div className="nav-links">
                <NavLink to="/" className={({ isActive }) => isActive ? 'nav-pill active' : 'nav-pill'}>
                  <span className="nav-icon">⊞</span> Tracker
                </NavLink>
                <NavLink to="/top-150" className={({ isActive }) => isActive ? 'nav-pill active' : 'nav-pill'}>
                  <span className="nav-icon">🏆</span> Top 150
                </NavLink>
                {customLists.map((list) => (
                  <NavLink
                    key={list.id}
                    to={`/lists/${list.id}`}
                    className={({ isActive }) => isActive ? 'nav-pill active custom-list-pill' : 'nav-pill custom-list-pill'}
                    title={list.name}
                  >
                    <span className="nav-icon">◈</span> {list.name}
                  </NavLink>
                ))}
                <NavLink to="/review" className={({ isActive }) => isActive ? 'nav-pill active' : 'nav-pill'}>
                  <span className="nav-icon">○</span> Review
                </NavLink>
                <NavLink to="/stats" className={({ isActive }) => isActive ? 'nav-pill active' : 'nav-pill'}>
                  <span className="nav-icon">⊡</span> Stats
                </NavLink>
              </div>
              <button className="import-list-btn" onClick={handleImportClick} type="button">
                Import List
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept="application/json,.json"
                onChange={handleImportChange}
                className="hidden-file-input"
              />
              <button className="dark-mode-toggle" onClick={toggleDarkMode} aria-label="Toggle dark mode">
                {darkMode ? '☀' : '🌙'}
              </button>
            </div>
          </div>
          {shouldShowFeedback && (
            <div className={`nav-feedback ${importError ? 'error' : 'success'}`}>
              {importFeedback}
            </div>
          )}
        </nav>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<TrackerPage />} />
            <Route path="/top-150" element={<Top150Page />} />
            <Route path="/review" element={<ReviewPage />} />
            <Route path="/stats" element={<StatsPage />} />
            <Route
              path="/lists/:listId"
              element={<ImportedListPage customLists={customLists} onRemoveList={handleRemoveCustomList} />}
            />
          </Routes>
        </main>
      </div>
    )
  }

  return (
    <Router>
      <AppShell />
    </Router>
  )
}

export default App