import { useEffect, useRef } from 'react'
import './PrecisionExpertiseSection.css'
import precisionMmachineExpertiseOne from '../../Images/precision-machine-expertise-one.png'
import precisionMachineExpertiseTwo from '../../Images/precision-machine-expertise-two.png'

function PrecisionExpertiseSection() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

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
        threshold: 0.15,
        rootMargin: '0px 0px -60px 0px',
      }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="precision-section" ref={sectionRef}>
      <div className="container precision-shell">
        <div className="precision-header">
          <div>
            <p className="precision-kicker mb-0">ALL KINDS OF PRECISION</p>
            <h2 className="precision-title mb-0">
              PRECISION MACHINING
              <span className="d-block">EXPERTISE.</span>
            </h2>
          </div>
          <p className="precision-intro mb-0">
            Delivering accuracy, consistency, and high-performance machining solutions.
          </p>
        </div>

        <div className="precision-grid">
          <article className="precision-card precision-card--left">
            <div className="precision-visual precision-visual-brass" aria-hidden="true">
              <img src={precisionMmachineExpertiseOne}/>
            </div>
            <p className="precision-caption mb-0">
              Copper &amp; Brass Extruded Rods, Profiles &amp; Sections
            </p>
          </article>

          <article className="precision-card precision-card--right">
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

