import React, { useEffect, useRef } from 'react'
import './FactsSection.css'
import useCurtainReveal from '../../hooks/useCurtainReveal'

/**
 * factsData — split into rawNumber + suffix for counter animation.
 */
const factsData = [
  { number: '34+',       rawNumber: 34,    suffix: '+',    label: 'Years Of Experience' },
  { number: '8500+',     rawNumber: 8500,  suffix: '+',    label: 'Customised Components Developed' },
  { number: '6+',        rawNumber: 6,     suffix: '+',    label: 'Country Export' },
  { number: '22000ft +', rawNumber: 22000, suffix: 'ft +', label: 'Of Infrastructure' },
  { number: '5+',        rawNumber: 5,     suffix: '+',    label: 'Skilled Engineered' },
  { number: '60+',       rawNumber: 60,    suffix: '+',    label: 'Employees' },
]

/**
 * animateCounter — counts a DOM element from 0 to `target` at 60fps.
 * Uses ease-out cubic for natural deceleration.
 */
function animateCounter(element, target, suffix, duration = 1600) {
  const startTime = performance.now()
  const tick = (now) => {
    const elapsed  = now - startTime
    const progress = Math.min(elapsed / duration, 1)
    const eased    = 1 - Math.pow(1 - progress, 3) // ease-out cubic
    element.textContent = Math.floor(eased * target).toLocaleString() + suffix
    if (progress < 1) requestAnimationFrame(tick)
  }
  requestAnimationFrame(tick)
}

function FactsSection() {
  // GSAP curtain reveal on the section heading
  const titleRef = useCurtainReveal({ stagger: 0.09, duration: 1 })

  const cardRefs   = useRef([]) // trigger for card fade-up + counter
  const numberRefs = useRef([]) // counter animation target

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')

            const index = cardRefs.current.indexOf(entry.target)
            if (index !== -1 && numberRefs.current[index]) {
              const { rawNumber, suffix } = factsData[index]
              animateCounter(numberRefs.current[index], rawNumber, suffix)
            }

            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
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
            <h2 className="facts-title mb-0" ref={titleRef}>
              FACTS &amp; <span className="d-block">FIGURES.</span>
            </h2>
          </div>
        </div>

        <div className="facts-grid">
          {factsData.map((fact, index) => (
            <div
              key={index}
              className="facts-card"
              ref={(el) => (cardRefs.current[index] = el)}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <h3
                className="facts-card-number mb-0"
                ref={(el) => (numberRefs.current[index] = el)}
              >
                {fact.number}
              </h3>
              <p className="facts-card-label mb-0">{fact.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FactsSection
