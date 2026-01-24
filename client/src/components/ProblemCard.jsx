import { useState } from 'react'

function ProblemCard({ problem, onPracticeSubmit }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [showPracticeForm, setShowPracticeForm] = useState(false)
  const [rating, setRating] = useState(0)
  const [notes, setNotes] = useState('')
  const [submitting, setSubmitting] = useState(false)

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
        setShowPracticeForm(false)
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

  const handleCancel = () => {
    setShowPracticeForm(false)
    setRating(0)
    setNotes('')
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

  const renderStars = () => {
    return [1, 2, 3, 4, 5].map((star) => (
      <span
        key={star}
        className={`star ${star <= rating ? 'filled' : 'empty'}`}
        onClick={() => setRating(star)}
      >
        ★
      </span>
    ))
  }

  return (
    <div className={`problem-card ${isExpanded ? 'expanded' : 'collapsed'}`}>
      <div className="problem-header" onClick={() => setIsExpanded(!isExpanded)}>
        <div className="problem-title-section">
          <div className="problem-title">
            <span className="expand-icon">{isExpanded ? '▼' : '▶'}</span>
            <a
              href={problem.leetcode_url}
              target="_blank"
              rel="noopener noreferrer"
              className="problem-link"
              onClick={(e) => e.stopPropagation()}
            >
              {problem.title}
            </a>
            <span className={`difficulty-badge difficulty-${problem.difficulty}`}>
              {problem.difficulty}
            </span>
            {problem.history && problem.history.length > 0 && (
              <span className="attempts-badge">
                {problem.history.length} {problem.history.length === 1 ? 'attempt' : 'attempts'}
              </span>
            )}
          </div>
        </div>
      </div>

      {isExpanded && (
        <div className="problem-details">
          <div className="practice-section">
            {!showPracticeForm ? (
              <button
                className="practice-button"
                onClick={() => setShowPracticeForm(true)}
              >
                ✓ Mark as Done
              </button>
            ) : (
              <form className="practice-form" onSubmit={handleSubmit}>
                <div className="rating-section">
                  <span className="rating-label">Rate yourself:</span>
                  <div className="star-rating">{renderStars()}</div>
                </div>

                <textarea
                  className="notes-input"
                  placeholder="Notes (optional): What did you learn? What was challenging?"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                />

                <div className="form-actions">
                  <button
                    type="submit"
                    className="submit-button"
                    disabled={submitting || rating === 0}
                  >
                    {submitting ? 'Saving...' : 'Submit'}
                  </button>
                  <button
                    type="button"
                    className="cancel-button"
                    onClick={handleCancel}
                    disabled={submitting}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}
          </div>

          {problem.history && problem.history.length > 0 && (
            <div className="practice-history">
              <div className="history-title">
                Practice History ({problem.history.length} attempt{problem.history.length > 1 ? 's' : ''})
              </div>
              <div className="history-list">
                {problem.history.slice(0, 3).map((entry) => (
                  <div key={entry.id} className="history-item">
                    <div className="history-date">{formatDate(entry.completed_at)}</div>
                    <div className="history-rating">
                      {'★'.repeat(entry.rating)}{'☆'.repeat(5 - entry.rating)}
                    </div>
                    {entry.notes && (
                      <div className="history-notes">"{entry.notes}"</div>
                    )}
                  </div>
                ))}
                {problem.history.length > 3 && (
                  <div className="history-item" style={{ fontStyle: 'italic', color: '#718096' }}>
                    + {problem.history.length - 3} more attempt{problem.history.length - 3 > 1 ? 's' : ''}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default ProblemCard