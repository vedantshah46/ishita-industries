import { useRef } from 'react'
import './EnvironmentHeroSection.css'
import heroImage from '../../Images/Environment-hero-section.png'
import useScrollAnimation from '../../hooks/useScrollAnimation'
import useCurtainReveal from '../../hooks/useCurtainReveal'

function EnvironmentHeroSection() {
  const titleRef = useCurtainReveal({ stagger: 0.065 })

  const animRefs = useRef([])
  useScrollAnimation(animRefs)

  return (
    <section className="environment-hero-section">
      <div className="container environment-hero-shell">
        <div className="environment-hero-grid">
          
          {/* Left Column: Content */}
          <div className="environment-hero-content">
            <h2 className="environment-hero-kicker">INDUSTRIAL INTEGRITY</h2>
            <h1 className="environment-hero-title" ref={titleRef}>
              Safety.<br />
              Quality.<br />
              Excellence.
            </h1>
            
            <div
              className="environment-hero-meta"
              ref={(el) => (animRefs.current[0] = el)}
            >
              <p className="environment-hero-copy">
                Our commitment to the environment is verified by international standards. 
                We strictly adhere to the <strong>ISO 14001:2015</strong> Environmental Management 
                Systems certification, ensuring every kilowatt and cubic meter is accounted 
                for in our ledger of responsibility.
              </p>
              
              <button className="environment-hero-btn">
                DOWNLOAD ISO CERTIFICATION
              </button>
            </div>
          </div>

          {/* Right Column: Image */}
          <div 
            className="environment-hero-visual"
            ref={(el) => (animRefs.current[1] = el)}
          >
            <div className="environment-hero-image-wrap">
              <img 
                src={heroImage} 
                alt="Environmental Facility" 
                className="environment-hero-image" 
              />
            </div>
            
            <div className="environment-hero-status-box">
              <span className="status-kicker">FACILITY STATUS</span>
              <span className="status-value">100% COMPLIANT</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default EnvironmentHeroSection
