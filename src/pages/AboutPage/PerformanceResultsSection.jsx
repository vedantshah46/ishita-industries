import { useRef } from 'react'
import './PerformanceResultsSection.css'
import useScrollAnimation from '../../hooks/useScrollAnimation'

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
  const animRefs = useRef([])
  useScrollAnimation(animRefs)

  return (
    <section className="performance-results-section">
      <div className="container results-shell">
        <div 
          className="results-header"
          ref={(el) => (animRefs.current[0] = el)}
        >
          <div>
            <p className="results-kicker mb-0">PERFORMANCE THAT DELIVERS</p>
            <h2 className="results-title mb-0">
              RESULTS THAT MATTER.
            </h2>
          </div>
        </div>

        <div className="results-grid">
          {resultsData.map((result, index) => (
            <article 
              key={index} 
              className="results-card"
              ref={(el) => (animRefs.current[1 + index] = el)}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
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
