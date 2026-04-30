import React, { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import './FactsSection.css'
import useCurtainReveal from '../../hooks/useCurtainReveal'

const factsData = [
  { number: '34+', rawNumber: 34, suffix: '+', labelKey: 'facts.years_label' },
  { number: '8500+', rawNumber: 8500, suffix: '+', labelKey: 'facts.components_label' },
  { number: '6+', rawNumber: 6, suffix: '+', labelKey: 'facts.countries_label' },
  { number: '22000ft +', rawNumber: 22000, suffix: 'ft +', labelKey: 'facts.infra_label' },
  { number: '5+', rawNumber: 5, suffix: '+', labelKey: 'facts.engineers_label' },
  { number: '60+', rawNumber: 60, suffix: '+', labelKey: 'facts.employees_label' },
]

function animateCounter(element, target, suffix, duration = 1600) {
  const startTime = performance.now()
  const tick = (now) => {
    const elapsed = now - startTime
    const progress = Math.min(elapsed / duration, 1)
    const eased = 1 - Math.pow(1 - progress, 3)
    element.textContent = Math.floor(eased * target).toLocaleString() + suffix
    if (progress < 1) requestAnimationFrame(tick)
  }
  requestAnimationFrame(tick)
}

function FactsSection() {
  const { t } = useTranslation()
  const titleRef = useCurtainReveal({ stagger: 0.09, duration: 1 })
  const cardRefs = useRef([])
  const numberRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            const index = cardRefs.current.indexOf(entry.target)
            if (index !== -1 && numberRefs.current[index]) {
              const { rawNumber, suffix } = factsData[index]
              const delay = (index % 3) * 100
              setTimeout(() => {
                animateCounter(numberRefs.current[index], rawNumber, suffix)
              }, delay)
            }
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )
    cardRefs.current.forEach((ref) => { if (ref) observer.observe(ref) })
    return () => observer.disconnect()
  }, [])

  return (
    <section className="facts-section">
      <div className="container facts-shell">
        <div className="facts-header">
          <div>
            <p className="facts-kicker mb-0">{t('facts.kicker')}</p>
            <h2 className="facts-title mb-0" ref={titleRef}>{t('facts.title')}</h2>
          </div>
        </div>

        <div className="facts-grid">
          {factsData.map((fact, index) => (
            <div
              key={index}
              className="facts-card"
              ref={(el) => (cardRefs.current[index] = el)}
              style={{ transitionDelay: `${(index % 3) * 100}ms` }}
            >
              <h3 className="facts-card-number mb-0" ref={(el) => (numberRefs.current[index] = el)}>
                {fact.number}
              </h3>
              <p className="facts-card-label mb-0">{t(fact.labelKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FactsSection
