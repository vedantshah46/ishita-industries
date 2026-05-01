import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import './HeroSection.css'
import heroMainImage from '../../Images/homepage-herosection-image.png'
import heroMobileImage from '../../Images/homepage-hero-section-mobile.png'
import videoImage from '../../Images/hero-section-video-image.png'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 70, damping: 20 } 
  },
}

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95, filter: "blur(10px)" },
  visible: { 
    opacity: 1, 
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 } 
  },
}

function HeroSection() {
  const { t } = useTranslation()

  return (
    <div className="hero-scroll-wrapper">
      <section className="hero-section">
        <div className="container hero-shell">
          <div className="row align-items-center g-4 hero-row">
            <motion.div 
              className="col-12 col-xl-6 hero-copy-col"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="hero-content">
                <motion.p variants={itemVariants} className="hero-kicker mb-0">{t('hero.kicker')}</motion.p>
                <motion.h1 variants={itemVariants} className="hero-title mb-0">
                  {t('hero.title1')}
                  <span className="hero-title-thin d-block">{t('hero.title2')}</span>
                </motion.h1>

                <motion.div variants={itemVariants}>
                  <Link to="/about" className="hero-cta-btn">
                    {t('hero.cta')}
                    <span className="hero-cta-icon" aria-hidden="true">&rarr;</span>
                  </Link>
                </motion.div>

                <motion.div variants={itemVariants} className="hero-story d-flex">
                  <div className="hero-story-thumb-wrap">
                    <img src={videoImage} alt="Manufacturing preview" className="hero-story-thumb" />
                    <span className="hero-play-btn" aria-hidden="true">&#9654;</span>
                  </div>
                  <p className="hero-story-text mb-0">
                    {t('hero.story_title')} {t('hero.story_desc')}
                  </p>
                </motion.div>

                <motion.p variants={itemVariants} className="hero-footnote mb-0">{t('hero.footnote')}</motion.p>
              </div>
            </motion.div>

            <div className="col-12 col-xl-6 hero-media-col">
              <motion.div 
                className="hero-media-wrap"
                variants={imageVariants}
                initial="hidden"
                animate="visible"
              >
                <picture>
                  <source srcSet={heroMainImage} media="(min-width: 1200px)" />
                  <img src={heroMobileImage} alt="Precision brass components" className="hero-media" />
                </picture>
              </motion.div>
              <motion.p 
                className="hero-caption mb-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              >
                {t('hero.caption')}
              </motion.p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HeroSection
