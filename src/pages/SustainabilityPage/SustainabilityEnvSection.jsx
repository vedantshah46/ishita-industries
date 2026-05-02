import { useEffect, useRef } from 'react'
import './SustainabilityEnvSection.css'
import waterImg from '../../Images/Water Recycling_Environmental Responsibility.png'
import energyImg from '../../Images/Energy Efficiency_Environmental Responsibility.png'
import wasteImg from '../../Images/Waste Management_Environmental Responsibility.png'
import anime from 'animejs'

function SustainabilityEnvSection() {
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
              targets: '.sust-env-header',
              opacity: [0, 1],
              translateY: [40, 0],
              duration: 1000
            })
            // 2. Cards staggered reveal
            .add({
              targets: '.sust-env-card',
              translateY: [60, 0],
              opacity: [0, 1],
              scale: [0.95, 1],
              delay: anime.stagger(150),
              duration: 1200
            }, '-=600')

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
    <section className="sust-env-section" ref={sectionRef}>
      <div className="container sust-env-shell">
        
        {/* Header Block */}
        <div className="sust-env-header">
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
            style={{ backgroundImage: `url("${waterImg}")` }}
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
              style={{ backgroundImage: `url("${energyImg}")` }}
            >
              <div className="sust-env-card-content">
                <h3>Energy Efficiency</h3>
                <p>Smart grid integration and renewable energy adoption.</p>
              </div>
            </div>

            {/* Bottom Left: Waste Management */}
            <div 
              className="sust-env-card sust-env-card-waste"
              style={{ backgroundImage: `url("${wasteImg}")` }}
            >
              <div className="sust-env-card-content">
                <h3>Waste Management</h3>
                <p>Zero-waste to landfill initiatives by 2030.</p>
              </div>
            </div>

            {/* Bottom Right: Sustainability DNA */}
            <div className="sust-env-card sust-env-card-dna">
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
