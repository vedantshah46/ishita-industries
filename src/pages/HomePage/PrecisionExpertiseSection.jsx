import { useRef } from 'react'
import './PrecisionExpertiseSection.css'
import precisionMmachineExpertiseOne from '../../Images/precision-machine-expertise-one.png'
import precisionMachineExpertiseTwo from '../../Images/precision-machine-expertise-two.png'
import useScrollAnimation from '../../hooks/useScrollAnimation'

function PrecisionExpertiseSection({ className = "" }) {
  const animRefs = useRef([])
  useScrollAnimation(animRefs)

  return (
    <section className={`precision-section ${className}`}>
      <div className="container precision-shell">

        <div 
          className="precision-header"
          ref={(el) => (animRefs.current[0] = el)}
        >
          <div>
            <p className="precision-kicker mb-0">ALL KINDS OF PRECISION</p>
            <h2 className="precision-title mb-0">
              Extrusion Raw products
            </h2>
          </div>
        </div>

        <div className="precision-grid">
          <article 
            className="precision-card precision-card--left"
            ref={(el) => (animRefs.current[1] = el)}
          >
            <div className="precision-visual precision-visual-brass" aria-hidden="true">
              <img src={precisionMmachineExpertiseOne}/>
            </div>
            <p className="precision-caption mb-0">
              Copper &amp; Brass Extruded Rods, Profiles &amp; Sections
            </p>
          </article>

          <article 
            className="precision-card precision-card--right"
            ref={(el) => (animRefs.current[2] = el)}
          >
            <div className="precision-visual precision-visual-alloy" aria-hidden="true">
              <img src={precisionMachineExpertiseTwo}/>
            </div>
            <p className="precision-caption mb-0">Aluminum Alloy Extrusion Products</p>
          </article>
        </div>

      </div>
    </section>
  )
}

export default PrecisionExpertiseSection
