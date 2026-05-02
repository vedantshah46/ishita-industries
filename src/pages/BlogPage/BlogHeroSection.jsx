import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import './BlogHeroSection.css'
import anime from 'animejs'
import SplitType from 'split-type'

function BlogHeroSection() {
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
        delay: anime.stagger(20),
        duration: 800
      })
      .add({
        targets: sectionRef.current.querySelector('.blog-description'),
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
    <div className="blog-header-content" ref={sectionRef}>
      <h1 className="blog-main-title" ref={titleRef}>
        {t('blog_hero.title1')}
        <span className="blog-sub-title">{t('blog_hero.title2')}</span>
      </h1>
      <p className="blog-description">{t('blog_hero.desc')}</p>
    </div>
  )
}

export default BlogHeroSection
