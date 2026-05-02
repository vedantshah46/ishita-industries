import React, { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import './ContactHeroSection.css'
import anime from 'animejs'
import SplitType from 'split-type'

const ContactHeroSection = () => {
  const { t } = useTranslation()
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

      tl.add({
        targets: text.chars,
        translateY: [40, 0],
        rotateX: [-90, 0],
        opacity: [0, 1],
        delay: anime.stagger(25),
        duration: 800
      })
      .add({
        targets: sectionRef.current.querySelector('.contact-hero-subtitle'),
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 800
      }, '-=600')
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
    <section className="contact-hero-section" ref={sectionRef}>
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
