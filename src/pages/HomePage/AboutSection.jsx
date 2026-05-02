import { useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import './AboutSection.css'
import anime from 'animejs'
import SplitType from 'split-type'

function AboutSection() {
  const { t } = useTranslation()
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const hasAnimated = useRef(false)

  const highlights = [
    t('home_about.badge1'),
    t('home_about.badge2'),
    t('home_about.badge3'),
    t('home_about.badge4'),
    t('home_about.cta'),
  ]

  useEffect(() => {
    // We do character-level splitting for the title
    let titleSplit = null;
    if (titleRef.current) {
      titleSplit = new SplitType(titleRef.current, { types: 'chars' });
      // Initially hide characters
      anime.set(titleSplit.chars, { opacity: 0, translateY: 20 });
    }

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !hasAnimated.current) {
        hasAnimated.current = true

        const tl = anime.timeline({
          easing: 'easeOutQuart'
        })

        tl.add({
          targets: '.about-header',
          translateY: [30, 0],
          opacity: [0, 1],
          duration: 800,
        })

        if (titleSplit && titleSplit.chars) {
          tl.add({
            targets: titleSplit.chars,
            opacity: [0, 1],
            translateY: [20, 0],
            duration: 800,
            delay: anime.stagger(15),
            easing: 'spring(1, 80, 10, 0)'
          }, '-=600')
        }

        tl.add({
          targets: '.about-body',
          translateY: [16, 0],
          opacity: [0, 1],
          filter: ['blur(5px)', 'blur(0px)'],
          duration: 1000,
          easing: 'easeOutQuad'
        }, '-=800')
          .add({
            targets: '.about-highlight-card',
            translateY: [24, 0],
            opacity: [0, 1],
            duration: 800,
            delay: anime.stagger(80),
            easing: 'easeOutBack'
          }, '-=600')

        observer.disconnect()
      }
    }, { threshold: 0.15 })

    if (sectionRef.current) observer.observe(sectionRef.current)

    return () => {
      observer.disconnect()
      if (titleSplit) titleSplit.revert()
    }
  }, [])

  return (
    <section className="about-section" ref={sectionRef}>
      <div className="container about-shell">
        <div className="about-header">
          <div className="about-header-main">
            <p className="about-kicker mb-0">{t('home_about.kicker')}</p>
            <h2 className="about-title mb-0" ref={titleRef}>{t('home_about.title')}</h2>
          </div>
        </div>

        <p className="about-body mb-0">
          {t('home_about.desc')}
        </p>

        <div className="about-highlights" aria-label="Company highlights">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="about-highlight-card"
            >
              <span>{highlight}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutSection
