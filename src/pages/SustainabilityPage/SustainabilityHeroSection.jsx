import { motion } from 'motion/react'
import './SustainabilityHeroSection.css'
import heroImage from '../../Images/Sustainability_hero_banner.png'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
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
  hidden: { opacity: 0, scale: 0.9, filter: "blur(15px)" },
  visible: { 
    opacity: 1, 
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 } 
  },
}

function SustainabilityHeroSection() {
  return (
    <section className="sust-hero-section">
      <div className="container sust-hero-shell">
        <div className="sust-hero-grid">

          {/* Left Column: Content */}
          <motion.div 
            className="sust-hero-content"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p variants={itemVariants} className="sust-hero-kicker">BUILDING A GREENER FUTURE</motion.p>
            <motion.h1 variants={itemVariants} className="sust-hero-title">
              Safety, Quality,<br />Excellence.
            </motion.h1>
            <motion.p variants={itemVariants} className="sust-hero-copy">
              Committed to responsible manufacturing, reducing environmental
              impact, and creating long-term value through sustainable practices.
            </motion.p>
          </motion.div>

          {/* Right Column: Image */}
          <motion.div
            className="sust-hero-visual"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="sust-hero-image-wrap">
              <img
                src={heroImage}
                alt="Sustainable manufacturing facility"
                className="sust-hero-image"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default SustainabilityHeroSection
