import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import './PerformanceResultsSection.css'
import useScrollAnimation from '../../hooks/useScrollAnimation'

const resultsData = [
  { value: '10+',  labelKey: 'performance.stat1_label' },
  { value: '100%', labelKey: 'performance.stat2_label' },
  { value: '10+',  labelKey: 'performance.stat3_label' },
]

function PerformanceResultsSection() {
  const { t } = useTranslation()
  const animRefs = useRef([])
  useScrollAnimation(animRefs)

  return (
    <section className="performance-results-section">
      <div className="container results-shell">
        <div className="results-header" ref={(el) => (animRefs.current[0] = el)}>
          <div>
            <p className="results-kicker mb-0">{t('performance.kicker')}</p>
            <h2 className="results-title mb-0">{t('performance.title')}</h2>
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
              <p className="results-card-label mb-0">{t(result.labelKey)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PerformanceResultsSection
