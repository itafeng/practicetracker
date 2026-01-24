import { useState, useEffect } from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line
} from 'recharts'

const COLORS = ['#667eea', '#764ba2', '#f59e0b', '#48bb78', '#ed64a6']

function StatsPage() {
  const [stats, setStats] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchStats()
  }, [])

  const fetchStats = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/stats')
      const data = await response.json()
      setStats(data)
      setLoading(false)
    } catch (error) {
      console.error('Error fetching stats:', error)
      setLoading(false)
    }
  }

  if (loading) {
    return <div className="loading">Loading statistics...</div>
  }

  if (!stats) {
    return <div className="loading">No statistics available</div>
  }

  const { overall, by_category, rating_distribution, activity } = stats

  // Prepare data for rating distribution pie chart
  const ratingData = rating_distribution.map(item => ({
    name: `${item.rating} Star${item.rating > 1 ? 's' : ''}`,
    value: item.count,
    rating: item.rating
  }))

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">📊 Statistics</h1>
        <p className="page-description">
          Track your progress and analyze your performance
        </p>
      </div>

      {/* Overall Stats */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-label">Problems Completed</div>
          <div className="stat-value">{overall.problems_completed}</div>
          <div style={{ fontSize: '0.9rem', color: '#718096', marginTop: '0.5rem' }}>
            out of {overall.total_problems} total
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-label">Total Practice Sessions</div>
          <div className="stat-value">{overall.total_practices}</div>
          <div style={{ fontSize: '0.9rem', color: '#718096', marginTop: '0.5rem' }}>
            {overall.problems_completed > 0
              ? `${(overall.total_practices / overall.problems_completed).toFixed(1)} avg per problem`
              : 'Start practicing!'}
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-label">Average Rating</div>
          <div className="stat-value" style={{ color: overall.avg_rating >= 4 ? '#48bb78' : overall.avg_rating >= 3 ? '#f59e0b' : '#e53e3e' }}>
            {overall.avg_rating.toFixed(1)}
          </div>
          <div style={{ fontSize: '0.9rem', color: '#718096', marginTop: '0.5rem' }}>
            {'★'.repeat(Math.round(overall.avg_rating))}{'☆'.repeat(5 - Math.round(overall.avg_rating))}
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-label">Completion Rate</div>
          <div className="stat-value">
            {overall.total_problems > 0
              ? Math.round((overall.problems_completed / overall.total_problems) * 100)
              : 0}%
          </div>
          <div style={{ fontSize: '0.9rem', color: '#718096', marginTop: '0.5rem' }}>
            Keep going!
          </div>
        </div>
      </div>

      {/* Progress by Category */}
      {by_category && by_category.length > 0 && (
        <div className="chart-section">
          <h2 className="chart-title">Progress by Category</h2>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={by_category}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis
                dataKey="category_name"
                angle={-45}
                textAnchor="end"
                height={100}
                interval={0}
                tick={{ fontSize: 10, fill: '#718096' }}
              />
              <YAxis tick={{ fontSize: 11, fill: '#718096' }} />
              <Tooltip contentStyle={{ fontSize: '0.8125rem', borderRadius: '6px', border: '1px solid #e2e8f0' }} />
              <Legend wrapperStyle={{ fontSize: '0.8125rem' }} />
              <Bar dataKey="completed_count" fill="#4f46e5" name="Problems Completed" radius={[4, 4, 0, 0]} />
              <Bar dataKey="practice_count" fill="#7c3aed" name="Total Practices" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '1.5rem' }}>
        {/* Rating Distribution */}
        {rating_distribution && rating_distribution.length > 0 && (
          <div className="chart-section">
            <h2 className="chart-title">Rating Distribution</h2>
            <ResponsiveContainer width="100%" height={280}>
              <PieChart>
                <Pie
                  data={ratingData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={70}
                  fill="#8884d8"
                  dataKey="value"
                  style={{ fontSize: '0.75rem' }}
                >
                  {ratingData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[entry.rating - 1]} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ fontSize: '0.8125rem', borderRadius: '6px', border: '1px solid #e2e8f0' }} />
              </PieChart>
            </ResponsiveContainer>
            <div style={{ textAlign: 'center', marginTop: '0.5rem', color: '#718096', fontSize: '0.75rem' }}>
              <div>Total practice sessions: {rating_distribution.reduce((sum, item) => sum + item.count, 0)}</div>
            </div>
          </div>
        )}

        {/* Recent Activity */}
        {activity && activity.length > 0 && (
          <div className="chart-section">
            <h2 className="chart-title">Recent Activity (Last 30 Days)</h2>
            <ResponsiveContainer width="100%" height={280}>
              <LineChart data={activity.slice(-30)}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis
                  dataKey="date"
                  tick={{ fontSize: 9, fill: '#718096' }}
                  angle={-45}
                  textAnchor="end"
                  height={70}
                />
                <YAxis tick={{ fontSize: 11, fill: '#718096' }} />
                <Tooltip contentStyle={{ fontSize: '0.8125rem', borderRadius: '6px', border: '1px solid #e2e8f0' }} />
                <Legend wrapperStyle={{ fontSize: '0.8125rem' }} />
                <Line
                  type="monotone"
                  dataKey="practice_count"
                  stroke="#4f46e5"
                  strokeWidth={2}
                  name="Practices"
                  dot={{ fill: '#4f46e5', r: 3 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>

      {/* Category Details Table */}
      {by_category && by_category.length > 0 && (
        <div className="chart-section">
          <h2 className="chart-title">Category Details</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #e2e8f0' }}>
                  <th style={{ padding: '0.75rem', textAlign: 'left', color: '#4a5568' }}>Category</th>
                  <th style={{ padding: '0.75rem', textAlign: 'center', color: '#4a5568' }}>Completed</th>
                  <th style={{ padding: '0.75rem', textAlign: 'center', color: '#4a5568' }}>Total Practices</th>
                  <th style={{ padding: '0.75rem', textAlign: 'center', color: '#4a5568' }}>Avg Rating</th>
                </tr>
              </thead>
              <tbody>
                {by_category.map((category, index) => (
                  <tr
                    key={index}
                    style={{
                      borderBottom: '1px solid #e2e8f0',
                      backgroundColor: index % 2 === 0 ? '#f7fafc' : 'white'
                    }}
                  >
                    <td style={{ padding: '0.75rem' }}>{category.category_name}</td>
                    <td style={{ padding: '0.75rem', textAlign: 'center' }}>{category.completed_count}</td>
                    <td style={{ padding: '0.75rem', textAlign: 'center' }}>{category.practice_count}</td>
                    <td style={{ padding: '0.75rem', textAlign: 'center' }}>
                      <span style={{
                        color: category.avg_rating >= 4 ? '#48bb78' : category.avg_rating >= 3 ? '#f59e0b' : '#e53e3e',
                        fontWeight: 600
                      }}>
                        {category.avg_rating.toFixed(1)} ★
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}

export default StatsPage