import { useRef } from 'react'
import './QualityHeroSection.css'
import heroImage from '../../Images/quality-page-hero-section.png'
import useScrollAnimation from '../../hooks/useScrollAnimation'
import useCurtainReveal from '../../hooks/useCurtainReveal'

function QualityHeroSection() {
  const titleRef = useCurtainReveal({ stagger: 0.065 })

  const animRefs = useRef([])
  useScrollAnimation(animRefs)

  return (
    <section className="quality-hero-section">
      <div className="container quality-hero-shell">

        <header className="quality-hero-top">
          <h1 className="quality-hero-title mb-0" ref={titleRef}>
            Quality Assurance.
            <span className="quality-hero-title-light d-block">Delivering Precision.</span>
          </h1>
        </header>

        <div
          className="quality-hero-meta"
          ref={(el) => (animRefs.current[0] = el)}
        >
          <p className="quality-hero-copy mb-0">
            Committed to excellence at every stage, we ensure consistent quality through advanced testing, strict control processes, and continuous improvement. Our focus is to deliver reliable, high-performance components that meet global standards and exceed customer expectations.
          </p>
          <div className="quality-hero-line-block" aria-hidden="true">
            <span className="quality-hero-line" />
            <span className="quality-hero-est">EST. / 1994 / ISO 9001:2015</span>
          </div>
        </div>

        <div
          className="quality-hero-factory-frame"
          ref={(el) => (animRefs.current[1] = el)}
        >
          <img src={heroImage} alt="Quality inspection laboratory" className="quality-hero-factory-image" />
        </div>

      </div>
    </section>
  )
}

export default QualityHeroSection
