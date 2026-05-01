import React, { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import './ContactFormSection.css'
import anime from 'animejs'

const ContactFormSection = () => {
  const { t } = useTranslation()
  const sectionRef = useRef(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const triggerAnimation = () => {
      if (hasAnimated.current || !sectionRef.current) return
      hasAnimated.current = true

      const tl = anime.timeline({
        easing: 'easeOutExpo',
      })

      tl.add({
        targets: sectionRef.current.querySelector('.contact-form-header'),
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 800
      })
      .add({
        targets: sectionRef.current.querySelectorAll('.form-row, .form-group.full-width, .form-submit'),
        opacity: [0, 1],
        translateY: [20, 0],
        delay: anime.stagger(100),
        duration: 800
      }, '-=400')
    }

    const timer = setTimeout(() => {
      if (!hasAnimated.current) triggerAnimation()
    }, 8000)

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
    }
  }, [])

  return (
    <section className="contact-form-section" id="contact-form-section" ref={sectionRef}>
      <div className="contact-form-container">
        <div className="contact-form-header">
          <span className="contact-subheading">{t('contact_form.kicker')}</span>
          <h2 className="contact-heading">{t('contact_form.title')}</h2>
        </div>

        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">{t('contact_form.first_name')}</label>
              <input type="text" id="firstName" name="firstName" required />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">{t('contact_form.last_name')}</label>
              <input type="text" id="lastName" name="lastName" required />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">{t('contact_form.email')}</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">{t('contact_form.phone')}</label>
              <input type="tel" id="phone" name="phone" />
            </div>
          </div>

          <div className="form-group full-width">
            <label htmlFor="message">{t('contact_form.message')}</label>
            <textarea id="message" name="message" required></textarea>
          </div>

          <div className="form-submit">
            <button type="submit" className="submit-btn">{t('contact_form.submit')}</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default ContactFormSection
