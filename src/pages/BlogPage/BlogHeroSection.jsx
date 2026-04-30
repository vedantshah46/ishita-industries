import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import './BlogHeroSection.css'
import useScrollAnimation from '../../hooks/useScrollAnimation'
import useCurtainReveal from '../../hooks/useCurtainReveal'

function BlogHeroSection() {
  const { t } = useTranslation()
  const titleRef = useCurtainReveal({ stagger: 0.065 })
  const animRefs = useRef([])
  useScrollAnimation(animRefs)

  return (
    <div className="blog-header-content" ref={(el) => (animRefs.current[0] = el)}>
      <h1 className="blog-main-title" ref={titleRef}>
        {t('blog_hero.title1')}
        <span className="blog-sub-title">{t('blog_hero.title2')}</span>
      </h1>
      <p className="blog-description">{t('blog_hero.desc')}</p>
    </div>
  )
}

export default BlogHeroSection
