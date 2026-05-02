import { useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import './AboutHeroSection.css'
import factoryImage  from '../../Images/about-us-hero-section.png'
import chairmanImage from '../../Images/bhavesh.png'
import anime from 'animejs'
import SplitType from 'split-type'

function AboutHeroSection() {
  const { t } = useTranslation()
  const sectionRef = useRef(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    // Split text for high-fidelity reveal
    const splitTitle = new SplitType('.about-hero-title', { types: 'lines, words, chars' })
    
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !hasAnimated.current) {
        hasAnimated.current = true
        
        const tl = anime.timeline({
          easing: 'spring(1, 80, 10, 0)'
        })

        tl.add({
          targets: splitTitle.chars,
          translateY: [40, 0],
          opacity: [0, 1],
          rotateX: [-90, 0],
          duration: 1200,
          delay: anime.stagger(15)
        })
        .add({
          targets: '.about-hero-meta > *',
          translateY: [20, 0],
          opacity: [0, 1],
          duration: 800,
          delay: anime.stagger(100),
          easing: 'easeOutQuart'
        }, '-=800')
        .add({
          targets: '.about-hero-factory-frame',
          scale: [0.95, 1],
          opacity: [0, 1],
          duration: 1200,
          easing: 'easeOutQuart'
        }, '-=800')
        .add({
          targets: '.about-chairman-intro > *',
          translateY: [30, 0],
          opacity: [0, 1],
          duration: 800,
          delay: anime.stagger(150)
        }, '-=600')
        .add({
          targets: '.about-chairman-card',
          scale: [0.95, 1],
          opacity: [0, 1],
          duration: 1000,
          easing: 'easeOutQuart'
        }, '-=800')
        .add({
          targets: '.about-chairman-photo-wrap',
          translateX: [40, 0],
          opacity: [0, 1],
          duration: 1000,
          easing: 'easeOutQuart'
        }, '-=600')
        .add({
          targets: [
            '.about-chairman-card-title',
            '.about-chairman-card-text',
            '.about-chairman-signoff'
          ],
          translateY: [30, 0],
          opacity: [0, 1],
          duration: 800,
          delay: anime.stagger(150),
          easing: 'easeOutQuart'
        }, '-=800')

        observer.disconnect()
      }
    }, { threshold: 0.1 })

    observer.observe(section)
    return () => {
      observer.disconnect()
      splitTitle.revert()
    }
  }, [])

  return (
    <section className="about-hero-section" ref={sectionRef}>
      <div className="container about-hero-shell">

        <header className="about-hero-top">
          <h1 className="about-hero-title mb-0">
            {t('about_hero.title1')}
            <span className="d-block">{t('about_hero.title2')}</span>
            <span className="about-hero-title-light d-block">{t('about_hero.title3')}</span>
          </h1>
        </header>

        <div className="about-hero-meta">
          <p className="about-hero-copy mb-0">{t('about_hero.desc')}</p>
          <div className="about-hero-line-block" aria-hidden="true">
            <span className="about-hero-line" />
            <span className="about-hero-est">{t('about_hero.badge')}</span>
          </div>
        </div>

        <div className="about-hero-factory-frame">
          <img src={factoryImage} alt="Factory interior" className="about-hero-factory-image" />
        </div>

        <div className="about-chairman-intro">
          <div>
            <p className="about-chairman-kicker mb-0">{t('about_hero.chairman_kicker')}</p>
            <h2 className="about-chairman-title mb-0">{t('about_hero.chairman_title')}</h2>
          </div>
        </div>

        <section className="about-chairman-card">
          <div className="about-chairman-copy-block">
            <h3 className="about-chairman-card-title mb-0">{t('about_hero.chairman_title')}</h3>
            <p className="about-chairman-card-text mb-0">{t('about_hero.chairman_quote')}</p>
            <p className="about-chairman-card-text about-chairman-card-text-quote mb-0">
              {t('about_hero.chairman_pull')}
            </p>
            <div className="about-chairman-signoff">
              <p className="about-chairman-name mb-0">{t('about_hero.chairman_name')}</p>
              <p className="about-chairman-role mb-0">{t('about_hero.chairman_title_role')}</p>
            </div>
          </div>
          <div className="about-chairman-photo-wrap">
            <img src={chairmanImage} alt="Chairman portrait" className="about-chairman-photo" />
          </div>
        </section>

      </div>
    </section>
  )
}

export default AboutHeroSection
