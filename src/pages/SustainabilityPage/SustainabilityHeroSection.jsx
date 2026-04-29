import { useRef } from 'react'
import './SustainabilityHeroSection.css'
import heroImage from '../../Images/Sustainability_hero_banner.png'
import useScrollAnimation from '../../hooks/useScrollAnimation'
import useCurtainReveal from '../../hooks/useCurtainReveal'

function SustainabilityHeroSection() {
  const titleRef = useCurtainReveal({ stagger: 0.065 })

  const animRefs = useRef([])
  useScrollAnimation(animRefs)

  return (
    <section className="sust-hero-section">
      <div className="container sust-hero-shell">
        <div className="sust-hero-grid">

          {/* Left Column: Content */}
          <div className="sust-hero-content">
            <p className="sust-hero-kicker">BUILDING A GREENER FUTURE</p>
            <h1 className="sust-hero-title" ref={titleRef}>
              Safety, Quality,<br />Excellence.
            </h1>
            <p
              className="sust-hero-copy"
              ref={(el) => (animRefs.current[0] = el)}
            >
              Committed to responsible manufacturing, reducing environmental
              impact, and creating long-term value through sustainable practices.
            </p>
          </div>

          {/* Right Column: Image */}
          <div
            className="sust-hero-visual"
            ref={(el) => (animRefs.current[1] = el)}
          >
            <div className="sust-hero-image-wrap">
              <img
                src={heroImage}
                alt="Sustainable manufacturing facility"
                className="sust-hero-image"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default SustainabilityHeroSection
