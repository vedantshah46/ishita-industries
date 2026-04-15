import './PerformanceResultsSection.css'

const resultsData = [
  {
    value: '10+',
    label: 'Material Supported',
  },
  {
    value: '100%',
    label: 'In-House Quality Inspection',
  },
  {
    value: '10+',
    label: 'Country Reach',
  },
]

function PerformanceResultsSection() {
  return (
    <section className="performance-results-section">
      <div className="container results-shell">
        <div className="results-header">
          <div>
            <p className="results-kicker mb-0">PERFORMANCE THAT DELIVERS</p>
            <h2 className="results-title mb-0">
              RESULTS THAT MATTER.
            </h2>
          </div>
        </div>

        <div className="results-grid">
          {resultsData.map((result, index) => (
            <article key={index} className="results-card">
              <h3 className="results-card-value mb-0">{result.value}</h3>
              <p className="results-card-label mb-0">{result.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PerformanceResultsSection
