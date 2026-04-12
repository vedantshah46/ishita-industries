import React, { useEffect, useRef } from 'react'
import './FactsSection.css'

const factsData = [
  {
    number: '34+',
    label: 'Years Of Experience',
  },
  {
    number: '8500+',
    label: 'Customised Components Developed',
  },
  {
    number: '6+',
    label: 'Country Export',
  },
  {
    number: '22000ft +',
    label: 'Of Infrastructure',
  },
  {
    number: '5+',
    label: 'Skilled Engineered',
  },
  {
    number: '60+',
    label: 'Employees',
  },
]

function FactsSection() {
  const cardRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section className="facts-section">
      <div className="container facts-shell">
        <div className="facts-header">
          <div>
            <p className="facts-kicker mb-0">NUMBERS THAT DEFINE US</p>
            <h2 className="facts-title mb-0">
              FACTS &amp;
              <span className="d-block">FIGURES.</span>
            </h2>
          </div>
          <p className="facts-intro mb-0">
            Showcasing our growth, achievements, and capabilities through key metrics that reflect our commitment to quality, scale, and performance.
          </p>
        </div>

        <div className="facts-grid">
          {factsData.map((fact, index) => (
            <div 
              key={index} 
              className="facts-card"
              ref={(el) => (cardRefs.current[index] = el)}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <h3 className="facts-card-number mb-0">{fact.number}</h3>
              <p className="facts-card-label mb-0">{fact.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FactsSection
