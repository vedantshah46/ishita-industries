import { useEffect, useRef, useCallback } from 'react'
import './HeroSection.css'
import heroTiltImage from '../../Images/hero-section-tilt-image.svg'
import heroStraightImage from '../../Images/hero-section-image.svg'


function HeroSection() {
  const wrapperRef = useRef(null)
  const sectionRef = useRef(null)
  const contentRef = useRef(null)
  const mediaRef = useRef(null)
  const tiltRef = useRef(null)
  const straightRef = useRef(null)
  const captionRef = useRef(null)
  const rafId = useRef(null)

  const handleScroll = useCallback(() => {
    if (rafId.current) return

    rafId.current = requestAnimationFrame(() => {
      rafId.current = null
      const wrapper = wrapperRef.current
      if (!wrapper) return

      const rect = wrapper.getBoundingClientRect()
      const wrapperHeight = wrapper.offsetHeight
      const viewportH = window.innerHeight

      // scrollDistance = how far the wrapper top has scrolled above viewport top
      const scrolled = Math.max(0, -rect.top)
      // The "runway" is wrapper height minus one viewport (the sticky portion)
      const runway = wrapperHeight - viewportH
      if (runway <= 0) return

      // progress: 0 = hero fully visible, 1 = animation complete, ready to unstick
      const progress = Math.min(scrolled / runway, 1)

      // Text content: floats up and fades out
      if (contentRef.current) {
        const yShift = progress * 120
        const opacity = 1 - progress * 2
        contentRef.current.style.transform = `translateY(-${yShift}px)`
        contentRef.current.style.opacity = Math.max(opacity, 0)
      }

      // Media wrap: scale up slightly, fade
      if (mediaRef.current) {
        const scale = 1 + progress * 0.15
        const opacity = 1 - progress * 2
        mediaRef.current.style.transform = `scale(${scale})`
        mediaRef.current.style.opacity = Math.max(opacity, 0)
      }

      // Tilt image: drifts left and rotates
      if (tiltRef.current) {
        const xDrift = progress * -60
        const rotate = progress * -8
        tiltRef.current.style.transform = `translateX(${xDrift}px) rotate(${rotate}deg)`
      }

      // Straight image: drifts right and rotates
      if (straightRef.current) {
        const xDrift = progress * 50
        const rotate = progress * 5
        straightRef.current.style.transform = `translateX(${xDrift}px) rotate(${rotate}deg)`
      }

      // Caption fades out
      if (captionRef.current) {
        captionRef.current.style.opacity = Math.max(1 - progress * 2.5, 0)
      }
    })
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (rafId.current) cancelAnimationFrame(rafId.current)
    }
  }, [handleScroll])

  return (
    <div className="hero-scroll-wrapper" ref={wrapperRef}>
      <section className="hero-section" ref={sectionRef}>
        <div className="container hero-shell">
          <div className="row align-items-center g-4 hero-row">
            <div className="col-12 col-lg-6 hero-copy-col">
              <div className="hero-content" ref={contentRef}>
                <p className="hero-kicker mb-0">450+Customized Precision Components Delivered</p>
                <h1 className="hero-title mb-0">
                  EVERY METAL, EVERY PROCESS,
                  <span className="hero-title-thin d-block">ONE PRECISION PARTNER</span>
                </h1>

                <button type="button" className="hero-cta-btn">
                  Explore more
                  <span className="hero-cta-icon" aria-hidden="true">
                    &rarr;
                  </span>
                </button>

                <div className="hero-story d-flex">
                  <div className="hero-story-thumb-wrap">
                    <img
                      src="https://via.placeholder.com/104x104/6D6F73/FFFFFF?text=Video"
                      alt="Manufacturing preview"
                      className="hero-story-thumb"
                    />
                    <span className="hero-play-btn" aria-hidden="true">
                      &#9654;
                    </span>
                  </div>
                  <p className="hero-story-text mb-0">
                    Since 1994, defining the benchmark in precision brass manufacturing. We don&apos;t
                    just machine metal; we engineer trust for global industries.
                  </p>
                </div>

                <p className="hero-footnote mb-0">WE ARE MANUFACTURER</p>
              </div>
            </div>

            <div className="col-12 col-lg-6 hero-media-col">
              <div className="hero-media-wrap" ref={mediaRef}>
                <img
                  ref={straightRef}
                  src={heroStraightImage}
                  alt="Straight precision brass component"
                  className="hero-media hero-media-straight"
                />
                <img
                  ref={tiltRef}
                  src={heroTiltImage}
                  alt="Tilted precision brass component"
                  className="hero-media hero-media-tilt"
                />
              </div>
              <p className="hero-caption mb-0" ref={captionRef}>Precision , Reliability , Performance</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HeroSection


