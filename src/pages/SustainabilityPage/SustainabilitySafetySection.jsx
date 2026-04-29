import { useRef } from 'react'
import './SustainabilitySafetySection.css'
import useScrollAnimation from '../../hooks/useScrollAnimation'

function SustainabilitySafetySection() {
  const animRefs = useRef([])
  useScrollAnimation(animRefs)

  return (
    <section className="sust-safety-section">
      <div className="container sust-safety-shell">

        {/* Header */}
        <div className="sust-safety-header" ref={(el) => (animRefs.current[0] = el)}>
          <p className="sust-safety-kicker">ZERO HARM POLICY</p>
          <h2 className="sust-safety-title">Occupational Health & Safety</h2>
        </div>

        {/* Card */}
        <div className="sust-safety-card" ref={(el) => (animRefs.current[1] = el)}>
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
