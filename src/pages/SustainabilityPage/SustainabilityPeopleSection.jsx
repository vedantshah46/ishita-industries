import { motion } from 'motion/react'
import './SustainabilityPeopleSection.css'
import peopleImage from '../../Images/Sustainability_people.png'

const imageVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
}

const contentVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { 
      staggerChildren: 0.15,
      delayChildren: 0.2
    } 
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

function SustainabilityPeopleSection() {
  return (
    <section className="sust-people-section">
      <div className="container sust-people-shell">
        <div className="sust-people-grid">
          
          {/* Left Column: Image */}
          <motion.div 
            className="sust-people-visual"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={imageVariants}
          >
            <div className="sust-people-image-wrap">
              <img 
                src={peopleImage} 
                alt="Our People at Work" 
                className="sust-people-image" 
              />
            </div>
          </motion.div>

          {/* Right Column: Content */}
          <motion.div 
            className="sust-people-content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={contentVariants}
          >
            <motion.p variants={itemVariants} className="sust-people-kicker">HUMAN CAPITAL</motion.p>
            <motion.h2 variants={itemVariants} className="sust-people-title">Our People</motion.h2>
            
            <motion.p variants={itemVariants} className="sust-people-copy">
              Our people are the foundation of our success. We focus on 
              developing talent, providing equal opportunities, and creating a fair, 
              inclusive workplace. Through continuous training, open 
              communication, and modern practices, we empower our team to 
              grow while driving sustainable development and long-term success.
            </motion.p>

            <motion.div variants={itemVariants} className="sust-people-stats">
              <div className="sust-stat-item">
                <span className="stat-value">45%</span>
                <span className="stat-label">DIVERSITY RATIO</span>
              </div>
              <div className="sust-stat-item">
                <span className="stat-value">12k+</span>
                <span className="stat-label">TRAINING HOURS</span>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default SustainabilityPeopleSection
