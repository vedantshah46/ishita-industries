import { useRef } from 'react'
import './SustainabilityEnvSection.css'
import useScrollAnimation from '../../hooks/useScrollAnimation'
import waterImg from '../../Images/Water Recycling_Environmental Responsibility.png'
import energyImg from '../../Images/Energy Efficiency_Environmental Responsibility.png'
import wasteImg from '../../Images/Waste Management_Environmental Responsibility.png'

function SustainabilityEnvSection() {
  const animRefs = useRef([])
  useScrollAnimation(animRefs)

  return (
    <section className="sust-env-section">
      <div className="container sust-env-shell">
        
        {/* Header Block */}
        <div className="sust-env-header" ref={(el) => (animRefs.current[0] = el)}>
          <p className="sust-env-kicker">RESOURCE MANAGEMENT</p>
          <h2 className="sust-env-title">Environmental Responsibility</h2>
          
          <div className="sust-env-header-row">
            <p className="sust-env-copy">
              Our environmental strategy focuses on three critical pillars: Water Recycling, Energy
              Efficiency, and Waste Management. We leverage technical innovation to minimize our
              ecological footprint.
            </p>
            <button className="sust-env-btn">DOWNLOAD ESG REPORT</button>
          </div>
        </div>

        {/* Grid Block */}
        <div className="sust-env-grid">
          
          {/* Left Column: Water Recycling */}
          <div 
            className="sust-env-card sust-env-card-water"
            style={{ backgroundImage: `url("${waterImg}")`, transitionDelay: '100ms' }}
            ref={(el) => (animRefs.current[1] = el)}
          >
            <div className="sust-env-card-content">
              <h3>Water Recycling</h3>
              <p>Closed-loop systems reclaiming 90% of industrial wastewater.</p>
            </div>
          </div>

          {/* Right Column */}
          <div className="sust-env-grid-right">
            
            {/* Top: Energy Efficiency */}
            <div 
              className="sust-env-card sust-env-card-energy"
              style={{ backgroundImage: `url("${energyImg}")`, transitionDelay: '200ms' }}
              ref={(el) => (animRefs.current[2] = el)}
            >
              <div className="sust-env-card-content">
                <h3>Energy Efficiency</h3>
                <p>Smart grid integration and renewable energy adoption.</p>
              </div>
            </div>

            {/* Bottom Left: Waste Management */}
            <div 
              className="sust-env-card sust-env-card-waste"
              style={{ backgroundImage: `url("${wasteImg}")`, transitionDelay: '300ms' }}
              ref={(el) => (animRefs.current[3] = el)}
            >
              <div className="sust-env-card-content">
                <h3>Waste Management</h3>
                <p>GOAL</p>
              </div>
            </div>

            {/* Bottom Right: Sustainability DNA */}
            <div 
              className="sust-env-card sust-env-card-dna"
              style={{ transitionDelay: '400ms' }}
              ref={(el) => (animRefs.current[4] = el)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="sust-dna-icon">
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
                <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
              </svg>
              <div className="sust-env-card-content-center">
                <h3>Sustainability DNA</h3>
                <p>COMMITTED TO NET ZERO 2040</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default SustainabilityEnvSection
