import React from 'react'
import { useTranslation } from 'react-i18next'
import './ContactHeroSection.css'
import useCurtainReveal from '../../hooks/useCurtainReveal'

const ContactHeroSection = () => {
  const { t } = useTranslation()
  const titleRef = useCurtainReveal({ stagger: 0.065 })

  return (
    <section className="contact-hero-section">
      <div className="container contact-hero-container">
        <h1 className="contact-hero-title" ref={titleRef}>
          {t('contact_hero.line1')} {t('contact_hero.line2')}{' '}
          <span className="contact-hero-highlight">{t('contact_hero.line3')}</span>
        </h1>
        <p className="contact-hero-subtitle">{t('contact_hero.desc')}</p>
      </div>
    </section>
  )
}

export default ContactHeroSection
