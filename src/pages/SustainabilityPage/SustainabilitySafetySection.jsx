import { useEffect, useRef } from 'react'
import './SustainabilitySafetySection.css'
import anime from 'animejs'

function SustainabilitySafetySection() {
  const sectionRef = useRef(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true

            const tl = anime.timeline({
              easing: 'easeOutExpo',
            })

            // 1. Header fade in
            tl.add({
              targets: '.sust-safety-header',
              opacity: [0, 1],
              translateY: [30, 0],
              duration: 1000
            })
            // 2. Card reveal
            .add({
              targets: '.sust-safety-card',
              translateY: [40, 0],
              opacity: [0, 1],
              scale: [0.98, 1],
              duration: 1200
            }, '-=600')
            // 3. Badges stagger
            .add({
              targets: '.sust-safety-badge',
              translateY: [20, 0],
              opacity: [0, 1],
              delay: anime.stagger(150),
              duration: 800
            }, '-=400')

            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="sust-safety-section" ref={sectionRef}>
      <div className="container sust-safety-shell">

        {/* Header */}
        <div className="sust-safety-header">
          <p className="sust-safety-kicker">ZERO HARM POLICY</p>
          <h2 className="sust-safety-title">Occupational Health & Safety</h2>
        </div>

        {/* Card */}
        <div className="sust-safety-card">
          <p className="sust-safety-copy">
            Safety is not just a metric; it is our culture. We maintain an uncompromising stance on Occupational<br />
            Health & Safety (OHS), ensuring every team member returns home safely. Our protocols exceed<br />
            international compliance standards, utilizing predictive analytics to mitigate risks before they manifest.
          </p>

          <div className="sust-safety-badges">
            <div className="sust-safety-badge">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
              <span>ISO 45001 CERTIFIED</span>
            </div>
            <div className="sust-safety-badge">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
              <span>REAL-TIME MONITORING</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default SustainabilitySafetySection
