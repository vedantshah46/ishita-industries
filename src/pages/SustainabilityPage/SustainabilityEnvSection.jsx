import { motion } from 'motion/react'
import './SustainabilityEnvSection.css'
import waterImg from '../../Images/Water Recycling_Environmental Responsibility.png'
import energyImg from '../../Images/Energy Efficiency_Environmental Responsibility.png'
import wasteImg from '../../Images/Waste Management_Environmental Responsibility.png'

const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
}

function SustainabilityEnvSection() {
  return (
    <section className="sust-env-section">
      <div className="container sust-env-shell">
        
        {/* Header Block */}
        <motion.div 
          className="sust-env-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={headerVariants}
        >
          <p className="sust-env-kicker">RESOURCE MANAGEMENT</p>
          <h2 className="sust-env-title">Environmental Responsibility</h2>
          
          <div className="sust-env-header-row">
            <p className="sust-env-copy">
              Our environmental strategy focuses on three critical pillars: Water Recycling, Energy
              Efficiency, and Waste Management. We leverage technical innovation to minimize our
              ecological footprint.
            </p>
            <button className="sust-env-btn">DOWNLOAD ESG REPORT</button>
          </div>
        </motion.div>

        {/* Grid Block */}
        <div className="sust-env-grid">
          
          {/* Left Column: Water Recycling */}
          <motion.div 
            className="sust-env-card sust-env-card-water"
            style={{ backgroundImage: `url("${waterImg}")` }}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 60, damping: 15 }}
          >
            <div className="sust-env-card-content">
              <h3>Water Recycling</h3>
              <p>Closed-loop systems reclaiming 90% of industrial wastewater.</p>
            </div>
          </motion.div>

          {/* Right Column */}
          <div className="sust-env-grid-right">
            
            {/* Top: Energy Efficiency */}
            <motion.div 
              className="sust-env-card sust-env-card-energy"
              style={{ backgroundImage: `url("${energyImg}")` }}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ type: "spring", stiffness: 60, damping: 15, delay: 0.1 }}
            >
              <div className="sust-env-card-content">
                <h3>Energy Efficiency</h3>
                <p>Smart grid integration and renewable energy adoption.</p>
              </div>
            </motion.div>

            {/* Bottom Left: Waste Management */}
            <motion.div 
              className="sust-env-card sust-env-card-waste"
              style={{ backgroundImage: `url("${wasteImg}")` }}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ type: "spring", stiffness: 60, damping: 15, delay: 0.2 }}
            >
              <div className="sust-env-card-content">
                <h3>Waste Management</h3>
                <p>GOAL</p>
              </div>
            </motion.div>

            {/* Bottom Right: Sustainability DNA */}
            <motion.div 
              className="sust-env-card sust-env-card-dna"
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ type: "spring", stiffness: 60, damping: 15, delay: 0.3 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="sust-dna-icon">
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
                <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
              </svg>
              <div className="sust-env-card-content-center">
                <h3>Sustainability DNA</h3>
                <p>COMMITTED TO NET ZERO 2040</p>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default SustainabilityEnvSection
