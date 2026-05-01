import React, { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import './FactsSection.css'
import anime from 'animejs'

const factsData = [
  { number: '34+', rawNumber: 34, suffix: '+', labelKey: 'facts.years_label' },
  { number: '8500+', rawNumber: 8500, suffix: '+', labelKey: 'facts.components_label' },
  { number: '6+', rawNumber: 6, suffix: '+', labelKey: 'facts.countries_label' },
  { number: '22000ft +', rawNumber: 22000, suffix: 'ft +', labelKey: 'facts.infra_label' },
  { number: '5+', rawNumber: 5, suffix: '+', labelKey: 'facts.engineers_label' },
  { number: '60+', rawNumber: 60, suffix: '+', labelKey: 'facts.employees_label' },
]

function FactsSection() {
  const { t } = useTranslation()
  const sectionRef = useRef(null)
  const hasAnimated = useRef(false)
  const numberRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true

          const tl = anime.timeline({
            easing: 'easeOutQuart'
          })

          // Setup counter object matching the facts length
          const counterObj = { v0: 0, v1: 0, v2: 0, v3: 0, v4: 0, v5: 0 }

          tl.add({
            targets: '.facts-header > div > *',
            translateY: [30, 0],
            opacity: [0, 1],
            duration: 800,
            delay: anime.stagger(150)
          })
            .add({
              targets: '.facts-card',
              translateY: [60, 0],
              opacity: [0, 1],
              duration: 800,
              delay: anime.stagger(100, { grid: [3, 2], from: 'center' }),
              easing: 'easeOutBack'
            }, '-=400')
            .add({
              targets: counterObj,
              v0: factsData[0].rawNumber,
              v1: factsData[1].rawNumber,
              v2: factsData[2].rawNumber,
              v3: factsData[3].rawNumber,
              v4: factsData[4].rawNumber,
              v5: factsData[5].rawNumber,
              duration: 2000,
              easing: 'easeOutExpo',
              update: () => {
                if (numberRefs.current[0]) numberRefs.current[0].innerText = Math.round(counterObj.v0).toLocaleString() + factsData[0].suffix
                if (numberRefs.current[1]) numberRefs.current[1].innerText = Math.round(counterObj.v1).toLocaleString() + factsData[1].suffix
                if (numberRefs.current[2]) numberRefs.current[2].innerText = Math.round(counterObj.v2).toLocaleString() + factsData[2].suffix
                if (numberRefs.current[3]) numberRefs.current[3].innerText = Math.round(counterObj.v3).toLocaleString() + factsData[3].suffix
                if (numberRefs.current[4]) numberRefs.current[4].innerText = Math.round(counterObj.v4).toLocaleString() + factsData[4].suffix
                if (numberRefs.current[5]) numberRefs.current[5].innerText = Math.round(counterObj.v5).toLocaleString() + factsData[5].suffix
              }
            }, '-=800')

          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="facts-section" ref={sectionRef}>
      <div className="container facts-shell">
        <div className="facts-header">
          <div>
            <p className="facts-kicker mb-0" style={{ opacity: 0, willChange: 'opacity, transform' }}>{t('facts.kicker')}</p>
            <h2 className="facts-title mb-0" style={{ opacity: 0, willChange: 'opacity, transform' }}>{t('facts.title')}</h2>
          </div>
        </div>

        <div className="facts-grid">
          {factsData.map((fact, index) => (
            <div
              key={index}
              className="facts-card"
            >
              <h3 className="facts-card-number mb-0" ref={(el) => (numberRefs.current[index] = el)}>
                0{fact.suffix}
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
