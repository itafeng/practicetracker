import { useState } from 'react'

function ProblemItem({ problem, isSelected, onSelect, onPracticeSubmit }) {
  const [rating, setRating] = useState(0)
  const [notes, setNotes] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const isCompleted = problem.history && problem.history.length > 0

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (rating === 0) {
      alert('Please select a rating')
      return
    }

    setSubmitting(true)
    try {
      const response = await fetch('http://localhost:3001/api/practice', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          problem_id: problem.id,
          rating,
          notes,
        }),
      })

      if (response.ok) {
        setRating(0)
        setNotes('')
        onPracticeSubmit()
      } else {
        alert('Failed to submit practice')
      }
    } catch (error) {
      console.error('Error submitting practice:', error)
      alert('Failed to submit practice')
    } finally {
      setSubmitting(false)
    }
  }

  const handleCancel = (e) => {
    e.stopPropagation()
    setRating(0)
    setNotes('')
    onSelect()
  }

  const renderStars = () => {
    return [1, 2, 3, 4, 5].map((star) => (
      <span
        key={star}
        className={`star ${star <= rating ? 'filled' : 'empty'}`}
        onClick={(e) => {
          e.stopPropagation()
          setRating(star)
        }}
      >
        ★
      </span>
    ))
  }

  const getDifficultyLabel = (difficulty) => {
    if (difficulty === 'Easy') return 'EASY'
    if (difficulty === 'Medium') return 'MED'
    if (difficulty === 'Hard') return 'HARD'
    return difficulty?.toUpperCase()
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
    })
  }

  // Sort history by timestamp descending (most recent first)
  const getSortedHistory = () => {
    if (!problem.history) return []
    return [...problem.history].sort((a, b) => 
      new Date(b.completed_at) - new Date(a.completed_at)
    )
  }

  return (
    <div className={`problem-item ${isSelected ? 'selected' : ''}`}>
      <div className="problem-item-row" onClick={onSelect}>
        <div className="problem-item-left">
          <span className={`completion-indicator ${isCompleted ? 'completed' : ''}`}>
            {isCompleted ? '✓' : '▸'}
          </span>
          <a
            href={problem.leetcode_url}
            target="_blank"
            rel="noopener noreferrer"
            className="problem-item-title"
            onClick={(e) => e.stopPropagation()}
          >
            {problem.title}
          </a>
        </div>
        <span className={`difficulty-pill difficulty-${problem.difficulty}`}>
          {getDifficultyLabel(problem.difficulty)}
        </span>
      </div>

      {isSelected && (
        <div className="problem-item-expanded">
          <form className="inline-practice-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <span className="rating-label">Rate:</span>
              <div className="star-rating">{renderStars()}</div>
              <input
                type="text"
                className="inline-notes-input"
                placeholder="Notes (optional)"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                onClick={(e) => e.stopPropagation()}
              />
              <button
                type="submit"
                className="inline-submit-btn"
                disabled={submitting || rating === 0}
                onClick={(e) => e.stopPropagation()}
              >
                {submitting ? '...' : 'Done'}
              </button>
              <button
                type="button"
                className="inline-cancel-btn"
                onClick={handleCancel}
                disabled={submitting}
              >
                ✕
              </button>
            </div>
          </form>

          {problem.history && problem.history.length > 0 && (
            <div className="attempt-history">
              <div className="history-header">
                {problem.history.length} attempt{problem.history.length > 1 ? 's' : ''}
              </div>
              <div className="history-entries">
                {getSortedHistory().map((entry, index) => (
                  <div key={entry.id || index} className="history-entry">
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
}

export default ProblemItem
