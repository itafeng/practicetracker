import { useState, useEffect } from 'react'
import ProblemCard from '../components/ProblemCard'

function ReviewPage() {
  const [reviewProblems, setReviewProblems] = useState({
    critical: [],
    high: [],
    medium: [],
    low: []
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchReviewProblems()
  }, [])

  const fetchReviewProblems = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/review')
      const data = await response.json()
      setReviewProblems(data)
      setLoading(false)
    } catch (error) {
      console.error('Error fetching review problems:', error)
      setLoading(false)
    }
  }

  const handlePracticeSubmit = () => {
    fetchReviewProblems()
  }

  const totalProblems = Object.values(reviewProblems).reduce(
    (sum, arr) => sum + arr.length,
    0
  )

  if (loading) {
    return <div className="loading">Loading review problems...</div>
  }

  if (totalProblems === 0) {
    return (
      <div>
        <div className="page-header">
          <h1 className="page-title">🔄 Review Schedule</h1>
          <p className="page-description">
            Based on the forgetting curve - practice problems when you need them most
          </p>
        </div>
        
        <div className="empty-state">
          <div className="empty-icon">🎉</div>
          <div className="empty-title">All Caught Up!</div>
          <p>You don't have any problems that need review right now.</p>
          <p style={{ marginTop: '0.5rem' }}>
            Keep practicing problems in the Tracker to build your review queue.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">🔄 Review Schedule</h1>
        <p className="page-description">
          Based on the forgetting curve - practice problems when you need them most
        </p>
      </div>

      {reviewProblems.critical.length > 0 && (
        <div className="review-section">
          <div className="review-header">
            <span className="priority-badge priority-critical">🔴 CRITICAL</span>
            <h2 className="review-title">Review Immediately</h2>
            <span className="problem-count">
              {reviewProblems.critical.length} problem{reviewProblems.critical.length > 1 ? 's' : ''}
            </span>
          </div>
          <p style={{ marginBottom: '0.75rem', color: '#718096', fontSize: '0.8125rem' }}>
            These problems had low ratings (1-2). Review them now to strengthen your understanding.
          </p>
          <div className="problem-list">
            {reviewProblems.critical.map((problem) => (
              <ProblemCard
                key={problem.id}
                problem={problem}
                onPracticeSubmit={handlePracticeSubmit}
              />
            ))}
          </div>
        </div>
      )}

      {reviewProblems.high.length > 0 && (
        <div className="review-section">
          <div className="review-header">
            <span className="priority-badge priority-high">🟠 HIGH PRIORITY</span>
            <h2 className="review-title">Review Soon</h2>
            <span className="problem-count">
              {reviewProblems.high.length} problem{reviewProblems.high.length > 1 ? 's' : ''}
            </span>
          </div>
          <p style={{ marginBottom: '0.75rem', color: '#718096', fontSize: '0.8125rem' }}>
            Medium confidence (rating 3) problems that haven't been reviewed in over 24 hours.
          </p>
          <div className="problem-list">
            {reviewProblems.high.map((problem) => (
              <ProblemCard
                key={problem.id}
                problem={problem}
                onPracticeSubmit={handlePracticeSubmit}
              />
            ))}
          </div>
        </div>
      )}

      {reviewProblems.medium.length > 0 && (
        <div className="review-section">
          <div className="review-header">
            <span className="priority-badge priority-medium">🟡 MEDIUM PRIORITY</span>
            <h2 className="review-title">Review This Week</h2>
            <span className="problem-count">
              {reviewProblems.medium.length} problem{reviewProblems.medium.length > 1 ? 's' : ''}
            </span>
          </div>
          <p style={{ marginBottom: '0.75rem', color: '#718096', fontSize: '0.8125rem' }}>
            Problems with ratings 3-4 that should be reviewed within 1-3 days.
          </p>
          <div className="problem-list">
            {reviewProblems.medium.map((problem) => (
              <ProblemCard
                key={problem.id}
                problem={problem}
                onPracticeSubmit={handlePracticeSubmit}
              />
            ))}
          </div>
        </div>
      )}

      {reviewProblems.low.length > 0 && (
        <div className="review-section">
          <div className="review-header">
            <span className="priority-badge priority-low">🔵 LOW PRIORITY</span>
            <h2 className="review-title">Review Next Week</h2>
            <span className="problem-count">
              {reviewProblems.low.length} problem{reviewProblems.low.length > 1 ? 's' : ''}
            </span>
          </div>
          <p style={{ marginBottom: '0.75rem', color: '#718096', fontSize: '0.8125rem' }}>
            Problems with rating 4 that can be reviewed within 3-7 days.
          </p>
          <div className="problem-list">
            {reviewProblems.low.map((problem) => (
              <ProblemCard
                key={problem.id}
                problem={problem}
                onPracticeSubmit={handlePracticeSubmit}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default ReviewPage