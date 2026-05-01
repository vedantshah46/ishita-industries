import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import './FreeToContactUsSection.css'
import contactlogo from '../../Images/homepage-contact-us-logo.png'
import arrow from '../../Images/arrow-vector.png'
import anime from 'animejs'
import SplitType from 'split-type'

function FreeToContactUsSection() {
  const { t } = useTranslation()
  const sectionRef = useRef(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const titleEl = sectionRef.current?.querySelector('.contactus-title')
    if (!titleEl) return
    
    const text = new SplitType(titleEl, { types: 'chars' })
    
    const triggerAnimation = () => {
      if (hasAnimated.current || !sectionRef.current) return
      hasAnimated.current = true

      const tl = anime.timeline({
        easing: 'easeOutExpo',
      })

      const mainCard = sectionRef.current.querySelector('.contactus-card')
      const icon = sectionRef.current.querySelector('.contactus-icon')
      const desc = sectionRef.current.querySelector('.contactus-text')
      const btn = sectionRef.current.querySelector('.contactus-btn')
      const linkCards = sectionRef.current.querySelectorAll('.contactus-link-card')

      // Main Card reveal with snap
      tl.add({
        targets: mainCard,
        opacity: [0, 1],
        scale: [0.98, 1],
        translateY: [60, 0],
        duration: 1400,
        easing: 'spring(1, 90, 20, 0)'
      })
      // Character level title reveal
      .add({
        targets: text.chars,
        translateY: [20, 0],
        opacity: [0, 1],
        rotateX: [-30, 0],
        delay: anime.stagger(15),
        duration: 800
      }, '-=1100')
      // Icon and description
      .add({
        targets: [icon, desc, btn],
        opacity: [0, 1],
        translateY: [15, 0],
        delay: anime.stagger(100),
        duration: 800
      }, '-=900')
      // Bottom links with elegant rotation
      .add({
        targets: linkCards,
        opacity: [0, 1],
        translateY: [30, 0],
        rotateX: [15, 0],
        delay: anime.stagger(120),
        duration: 1000,
        begin: (anim) => {
          sectionRef.current.querySelector('.contactus-links-grid').style.perspective = '1000px';
        }
      }, '-=800')
    }

    const timer = setTimeout(() => {
      if (!hasAnimated.current) triggerAnimation()
    }, 10000)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            triggerAnimation()
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)

    return () => {
      clearTimeout(timer)
      observer.disconnect()
      text?.revert()
    }
  }, [])

  const contactLinksData = [
    { text: t('contact_cta.btn_brochure'), href: '#' },
    { text: t('contact_cta.email'),        href: 'mailto:info@ishitabrass.com' },
    { text: t('contact_cta.btn_materials'), href: '#' },
  ]

  return (
    <section className="free-to-contact-us-section" ref={sectionRef}>
      <div className="container contactus-shell">
        <div className="contactus-cta-block">
          <div className="contactus-card">
            <div className="contactus-icon">
              <img src={contactlogo} alt="Contact Logo" />
            </div>
            <div className="contactus-content">
              <h3 className="contactus-title mb-0">
                {t('contact_cta.line1')}
                <br />
                {t('contact_cta.line2')}
              </h3>
              <p className="contactus-text mb-0">{t('contact_cta.desc')}</p>
              <div>
                <Link to="/contact#contact-form-section" className="contactus-btn">
                  {t('contact_cta.btn_contact')}
                  <span className="contactus-btn-arrow">
                    <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 6H14M14 6L9 1M14 6L9 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>

          <div className="contactus-links-grid">
            {contactLinksData.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="contactus-link-card"
              >
                <span className="contactus-link-text">{link.text}</span>
                <img src={arrow} alt="" className="contact-arrow-img-rotate" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FreeToContactUsSection
