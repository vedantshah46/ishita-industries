import { useEffect, useRef } from 'react'
import './EnvironmentHeroSection.css'
import heroImage from '../../Images/Environment-hero-section.png'
import anime from 'animejs'
import SplitType from 'split-type'

function EnvironmentHeroSection() {
  const sectionRef = useRef(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    // Split the title into characters for precise animation
    const titleText = new SplitType('.environment-hero-title', { types: 'lines, words, chars' })
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true

            const tl = anime.timeline({
              easing: 'spring(1, 80, 10, 0)',
            })

            // 1. Kicker fade in
            tl.add({
              targets: '.environment-hero-kicker',
              opacity: [0, 1],
              translateY: [20, 0],
              duration: 800,
              easing: 'easeOutExpo'
            })
            // 2. Title chars spring up
            .add({
              targets: titleText.chars,
              translateY: [40, 0],
              opacity: [0, 1],
              rotateX: [-90, 0],
              delay: anime.stagger(15),
              duration: 1200
            }, '-=600')
            // 3. Meta content (paragraph and button) fade up
            .add({
              targets: '.environment-hero-meta',
              translateY: [40, 0],
              opacity: [0, 1],
              duration: 1000,
              easing: 'easeOutCubic'
            }, '-=800')
            // 4. Image slides in and scales up slightly
            .add({
              targets: '.environment-hero-visual',
              translateY: [60, 0],
              opacity: [0, 1],
              scale: [0.95, 1],
              duration: 1200,
              easing: 'easeOutQuint'
            }, '-=1000')

            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      observer.disconnect()
      titleText.revert()
    }
  }, [])

  return (
    <section className="environment-hero-section" ref={sectionRef}>
      <div className="container environment-hero-shell">
        <div className="environment-hero-grid">

          {/* Left Column: Content */}
          <div className="environment-hero-content">
            <h2 className="environment-hero-kicker">INDUSTRIAL INTEGRITY</h2>
            <h1 className="environment-hero-title" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' }}>
              Safety.<br />
              Quality.<br />
              Excellence.
            </h1>

            <div className="environment-hero-meta">
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
          <div className="environment-hero-visual">
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
