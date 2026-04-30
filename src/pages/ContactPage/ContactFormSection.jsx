import React, { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import './ContactFormSection.css'
import useScrollAnimation from '../../hooks/useScrollAnimation'

const ContactFormSection = () => {
  const { t } = useTranslation()
  const animRefs = useRef([])
  useScrollAnimation(animRefs)

  return (
    <section className="contact-form-section" id="contact-form-section">
      <div className="contact-form-container" ref={(el) => (animRefs.current[0] = el)}>
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
