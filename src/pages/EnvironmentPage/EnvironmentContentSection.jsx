import { useRef } from 'react'
import './EnvironmentContentSection.css'
import useScrollAnimation from '../../hooks/useScrollAnimation'

function EnvironmentContentSection() {
  const animRefs = useRef([])
  useScrollAnimation(animRefs)

  return (
    <section className="environment-content-section">
      <div className="container environment-content-shell">
        
        <header 
          className="environment-content-header-new"
          ref={(el) => (animRefs.current[0] = el)}
        >
          <div className="vertical-bar"></div>
          <h2 className="header-kicker-text">TECHNICAL BREAKDOWN OF RESPONSIBILITY</h2>
        </header>

        <div className="environment-content-grid-new">
          {/* Card 1: Water */}
          <div 
            className="env-card-new"
            ref={(el) => (animRefs.current[1] = el)}
            style={{ transitionDelay: '0ms' }}
          >
            <div className="env-card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"></path>
              </svg>
            </div>
            <h4 className="env-card-title">WATER</h4>
            <p className="env-card-text">
              Closed-loop recycling systems designed to eliminate wastewater discharge and maximize resource longevity.
            </p>
          </div>

          {/* Card 2: Energy */}
          <div 
            className="env-card-new"
            ref={(el) => (animRefs.current[2] = el)}
            style={{ transitionDelay: '100ms' }}
          >
            <div className="env-card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
              </svg>
            </div>
            <h4 className="env-card-title">ENERGY</h4>
            <p className="env-card-text">
              Precision reactive and non-reactive power loss control systems to maintain ultra- lean energy expenditure.
            </p>
          </div>

          {/* Card 3: Air */}
          <div 
            className="env-card-new"
            ref={(el) => (animRefs.current[3] = el)}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="env-card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12.8 19.6A2 2 0 1 0 14 16H2"/>
                <path d="M17.5 8a2.5 2.5 0 1 1 2 4H2"/>
                <path d="M9.8 4.4A2 2 0 1 1 11 8H2"/>
              </svg>
            </div>
            <h4 className="env-card-title">AIR</h4>
            <p className="env-card-text">
              Multi-stage exhaust gas filtration and bag house management protocols ensuring zero harmful atmospheric emissions.
            </p>
          </div>

          {/* Card 4: Other Wastes */}
          <div 
            className="env-card-new"
            ref={(el) => (animRefs.current[4] = el)}
            style={{ transitionDelay: '300ms' }}
          >
            <div className="env-card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                <line x1="10" y1="11" x2="10" y2="17"></line>
                <line x1="14" y1="11" x2="14" y2="17"></line>
              </svg>
            </div>
            <h4 className="env-card-title">OTHER WASTES</h4>
            <p className="env-card-text">
              Rigorous industrial waste management protocols with a strict 'Sort-at-Source' policy for 100% secondary utilization.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default EnvironmentContentSection
