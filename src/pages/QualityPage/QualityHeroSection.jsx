import { useEffect, useRef } from 'react'
import './QualityHeroSection.css'
import heroImage from '../../Images/quality-page-hero-section.png'
import anime from 'animejs'
import SplitType from 'split-type'

function QualityHeroSection() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const text = new SplitType(titleRef.current, { types: 'chars' })
    
    const triggerAnimation = () => {
      if (hasAnimated.current || !sectionRef.current) return
      hasAnimated.current = true

      const tl = anime.timeline({
        easing: 'easeOutExpo',
      })

      const meta = sectionRef.current.querySelector('.quality-hero-meta')
      const factoryFrame = sectionRef.current.querySelector('.quality-hero-factory-frame')

      tl.add({
        targets: text.chars,
        translateY: [40, 0],
        rotateX: [-90, 0],
        opacity: [0, 1],
        delay: anime.stagger(20),
        duration: 800
      })
      .add({
        targets: meta,
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 800
      }, '-=600')
      .add({
        targets: factoryFrame,
        opacity: [0, 1],
        scale: [1.05, 1],
        translateY: [30, 0],
        duration: 1000
      }, '-=800')
    }

    const timer = setTimeout(() => {
      if (!hasAnimated.current) triggerAnimation()
    }, 100)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            triggerAnimation()
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.05 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)

    return () => {
      clearTimeout(timer)
      observer.disconnect()
      text.revert()
    }
  }, [])

  return (
    <section className="quality-hero-section" ref={sectionRef}>
      <div className="container quality-hero-shell">
        <header className="quality-hero-top">
          <h1 className="quality-hero-title mb-0" ref={titleRef}>
            Quality Assurance.
            <span className="quality-hero-title-light d-block">Delivering Precision.</span>
          </h1>
        </header>

        <div className="quality-hero-meta">
          <p className="quality-hero-copy mb-0">
            Committed to excellence at every stage, we ensure consistent quality through advanced testing, strict control processes, and continuous improvement. Our focus is to deliver reliable, high-performance components that meet global standards and exceed customer expectations.
          </p>
          <div className="quality-hero-line-block" aria-hidden="true">
            <span className="quality-hero-line" />
            <span className="quality-hero-est">EST. / 1994 / ISO 9001:2015</span>
          </div>
        </div>

        <div className="quality-hero-factory-frame">
          <img src={heroImage} alt="Quality inspection laboratory" className="quality-hero-factory-image" />
        </div>
      </div>
    </section>
  )
}

export default QualityHeroSection
