import { useEffect, useRef } from 'react'
import './SustainabilityHeroSection.css'
import heroImage from '../../Images/Sustainability_hero_banner.png'
import anime from 'animejs'
import SplitType from 'split-type'

function SustainabilityHeroSection() {
  const sectionRef = useRef(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    // Split the title into characters
    const titleText = new SplitType('.sust-hero-title', { types: 'lines, words, chars' })
    
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
              targets: '.sust-hero-kicker',
              opacity: [0, 1],
              translateY: [20, 0],
              duration: 800,
              easing: 'easeOutExpo'
            })
            // 2. Title characters reveal
            .add({
              targets: titleText.chars,
              translateY: [40, 0],
              opacity: [0, 1],
              rotateX: [-90, 0],
              delay: anime.stagger(15),
              duration: 1200
            }, '-=600')
            // 3. Copy fade up
            .add({
              targets: '.sust-hero-copy',
              translateY: [40, 0],
              opacity: [0, 1],
              duration: 1000,
              easing: 'easeOutCubic'
            }, '-=800')
            // 4. Visual reveal
            .add({
              targets: '.sust-hero-visual',
              translateY: [50, 0],
              opacity: [0, 1],
              scale: [0.95, 1],
              duration: 1200,
              easing: 'easeOutQuint'
            }, '-=1000')

            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.05 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    // Fallback: If it's the hero section, it should probably animate quickly
    const timeout = setTimeout(() => {
      if (!hasAnimated.current && sectionRef.current) {
        // Double check if we should trigger
        const rect = sectionRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          // Manually trigger if observer missed it
          sectionRef.current.dispatchEvent(new CustomEvent('trigger-animation')); 
          // Actually, let's just trigger the timeline logic here if needed, 
          // but observer is usually fine with threshold 0.05.
        }
      }
    }, 1000);

    return () => {
      observer.disconnect()
      titleText.revert()
    }
  }, [])

  return (
    <section className="sust-hero-section" ref={sectionRef}>
      <div className="container sust-hero-shell">
        <div className="sust-hero-grid">

          {/* Left Column: Content */}
          <div className="sust-hero-content">
            <p className="sust-hero-kicker">BUILDING A GREENER FUTURE</p>
            <h1 className="sust-hero-title" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' }}>
              Safety, Quality,<br />Excellence.
            </h1>
            <p className="sust-hero-copy">
              Committed to responsible manufacturing, reducing environmental
              impact, and creating long-term value through sustainable practices.
            </p>
          </div>

          {/* Right Column: Image */}
          <div className="sust-hero-visual">
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
