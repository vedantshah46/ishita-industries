import { useRef } from 'react'
import './FacilityExpertiseSection.css'
import capabilitiesImg from '../../Images/about-our-capabilities.png'
import isoBg from '../../Images/about-capabilities-two.png' // Assuming this for the ISO box background
import processOne from '../../Images/about-process-we-undertake-one.png'
import processTwo from '../../Images/about-process-we-undertake-two.png'
import processThree from '../../Images/about-process-we-undertake-three.png'
import processFour from '../../Images/about-process-we-undertake-four.png'
import processFive from '../../Images/about-process-we-undertake-five.png'
import useScrollAnimation from '../../hooks/useScrollAnimation'

const processes = [
  { id: 1, name: 'Turning & Forging', icon: processOne },
  { id: 2, name: 'Stamping & Broaching', icon: processTwo },
  { id: 3, name: 'Annealing & Slot Milling', icon: processThree },
  { id: 4, name: 'Thread & Knurling', icon: processFour },
  { id: 5, name: 'Drilling', icon: processFive },
]

const metals = ['BRASS', 'COPPER', 'STEEL', 'ALUMINUM', 'BRONZE']
const finishes = ['NICKEL', 'TIN', 'ZINC', 'SILVER', 'GOLD', 'CHROME', 'LEAD', 'OXIDISING']

function FacilityExpertiseSection() {
  const animRefs = useRef([])
  useScrollAnimation(animRefs)

  return (
    <section className="facility-expertise-section">
      <div className="container">
        <div 
          className="facility-header-block"
          ref={(el) => (animRefs.current[0] = el)}
        >
          <p className="facility-main-kicker">FROM DESIGN TO DELIVERY</p>
          <h2 className="facility-main-heading">OUR CAPABILITIES.</h2>
        </div>

        <div className="facility-grid">
          {/* Left Column (Main Area) */}
          <div 
            className="facility-left-col"
            ref={(el) => (animRefs.current[1] = el)}
          >
            {/* Top Banner Card */}
            <div className="facility-banner-card">
              <img src={capabilitiesImg} alt="Machining Floor" className="facility-banner-img" />
              <div className="facility-banner-overlay">
                <p className="facility-kicker">FACILITY FOCUS</p>
                <h3 className="facility-title">Precision Machining Floor</h3>
              </div>
            </div>

            {/* Bottom Row (Process + Tech Specs) */}
            <div className="facility-bottom-row">
              {/* Process Card */}
              <div className="facility-card facility-process-card">
                <h4 className="facility-card-label">PROCESS WE UNDERTAKE</h4>
                <div className="process-divider" />
                <ul className="facility-process-list">
                  {processes.map((p) => (
                    <li key={p.id} className="facility-process-item">
                      <span className="p-name">{p.name}</span>
                      <img src={p.icon} alt="" className="p-icon" />
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technical Specs Card */}
              <div className="facility-card facility-tech-card">
                <h4 className="facility-card-label text-white">TECHNICAL SPECS</h4>
                <div className="tech-divider" />
                
                <div className="facility-tech-group">
                  <span className="tech-label">SIZE WE HANDLE</span>
                  <strong className="tech-value">1.50mm to 200mm</strong>
                  <span className="tech-sublabel">CIRCUMSCRIBED DIAMETER</span>
                </div>

                <div className="facility-tech-group">
                  <span className="tech-label">LENGTH WE HANDLE</span>
                  <strong className="tech-value">400mm</strong>
                  <span className="tech-sublabel">TURNING LENGTH</span>
                </div>

                <div className="facility-tech-group">
                  <span className="tech-label">TOLERANCE WE MAINTAIN</span>
                  <strong className="tech-value">Upto 0.01mm</strong>
                </div>

                <div className="facility-tech-group">
                  <span className="tech-label">SURFACE ROUGHNESS</span>
                  <strong className="tech-value">Upto 0.01mm</strong>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (Sidebars) */}
          <div 
            className="facility-right-col"
            ref={(el) => (animRefs.current[2] = el)}
          >
            {/* Metals Card */}
            <div className="facility-card facility-metals-card">
              <div className="facility-card-header">
                <span className="header-line" />
                <h4 className="facility-card-label">METALS</h4>
              </div>
              <div className="metals-list">
                {metals.map((m) => (
                  <h3 key={m} className="metal-name">{m}</h3>
                ))}
              </div>
              <div className="metal-divider" />
              <p className="metals-copy">
                Sourcing high-grade industrial alloys for aerospace, automotive, and heavy infrastructure applications.
              </p>
            </div>

            {/* Finishes Card */}
            <div className="facility-card facility-finishes-card">
              <div className="facility-card-header">
                <span className="header-line" />
                <h4 className="facility-card-label">FINISHES</h4>
              </div>
              <div className="finishes-grid">
                {finishes.map((f) => (
                  <span key={f} className="finish-badge">{f}</span>
                ))}
              </div>
            </div>

            {/* ISO Card */}
            <div className="facility-iso-card">
              <img src={isoBg} alt="" className="iso-bg" />
              <div className="iso-overlay">
                <span className="iso-text">CERTIFIED ISO 9001 OUTPUT</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FacilityExpertiseSection
