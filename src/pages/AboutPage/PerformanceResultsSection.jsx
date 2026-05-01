import { useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import './PerformanceResultsSection.css'
import anime from 'animejs'

const resultsData = [
  { value: '10+',  labelKey: 'performance.stat1_label' },
  { value: '100%', labelKey: 'performance.stat2_label' },
  { value: '10+',  labelKey: 'performance.stat3_label' },
]

function PerformanceResultsSection() {
  const { t } = useTranslation()
  const sectionRef = useRef(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !hasAnimated.current) {
        hasAnimated.current = true
        const tl = anime.timeline({ easing: 'easeOutQuart' })

        tl.add({
          targets: '.results-header > *',
          translateY: [30, 0],
          opacity: [0, 1],
          duration: 800,
          delay: anime.stagger(150)
        })
        .add({
          targets: '.results-card',
          scale: [0.9, 1],
          opacity: [0, 1],
          duration: 800,
          delay: anime.stagger(150),
          easing: 'easeOutBack(1.5)'
        }, '-=400')

        observer.disconnect()
      }
    }, { threshold: 0.1 })

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="performance-results-section" ref={sectionRef}>
      <div className="container results-shell">
        <div className="results-header">
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
