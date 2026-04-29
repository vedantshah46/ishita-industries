import { useRef } from 'react'
import './SustainabilityPeopleSection.css'
import peopleImage from '../../Images/Sustainability_people.png'
import useScrollAnimation from '../../hooks/useScrollAnimation'

function SustainabilityPeopleSection() {
  const animRefs = useRef([])
  useScrollAnimation(animRefs)

  return (
    <section className="sust-people-section">
      <div className="container sust-people-shell">
        <div className="sust-people-grid">
          
          {/* Left Column: Image */}
          <div 
            className="sust-people-visual"
            ref={(el) => (animRefs.current[0] = el)}
          >
            <div className="sust-people-image-wrap">
              <img 
                src={peopleImage} 
                alt="Our People at Work" 
                className="sust-people-image" 
              />
            </div>
          </div>

          {/* Right Column: Content */}
          <div 
            className="sust-people-content"
            ref={(el) => (animRefs.current[1] = el)}
          >
            <p className="sust-people-kicker">HUMAN CAPITAL</p>
            <h2 className="sust-people-title">Our People</h2>
            
            <p className="sust-people-copy">
              Our people are the foundation of our success. We focus on 
              developing talent, providing equal opportunities, and creating a fair, 
              inclusive workplace. Through continuous training, open 
              communication, and modern practices, we empower our team to 
              grow while driving sustainable development and long-term success.
            </p>

            <div className="sust-people-stats">
              <div className="sust-stat-item">
                <span className="stat-value">45%</span>
                <span className="stat-label">DIVERSITY RATIO</span>
              </div>
              <div className="sust-stat-item">
                <span className="stat-value">12k+</span>
                <span className="stat-label">TRAINING HOURS</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default SustainabilityPeopleSection
