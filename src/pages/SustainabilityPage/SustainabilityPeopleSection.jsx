import { useEffect, useRef } from 'react'
import './SustainabilityPeopleSection.css'
import peopleImage from '../../Images/Sustainability_people.png'
import anime from 'animejs'

function SustainabilityPeopleSection() {
  const sectionRef = useRef(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true

            const tl = anime.timeline({
              easing: 'easeOutExpo',
            })

            // 1. Visual reveal from left
            tl.add({
              targets: '.sust-people-visual',
              translateX: [-50, 0],
              opacity: [0, 1],
              duration: 1200
            })
            // 2. Content fade up
            .add({
              targets: ['.sust-people-kicker', '.sust-people-title', '.sust-people-copy'],
              translateY: [30, 0],
              opacity: [0, 1],
              delay: anime.stagger(150),
              duration: 1000
            }, '-=800')
            // 3. Stats reveal
            .add({
              targets: '.sust-stat-item',
              translateY: [20, 0],
              opacity: [0, 1],
              delay: anime.stagger(150),
              duration: 800
            }, '-=400')

            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="sust-people-section" ref={sectionRef}>
      <div className="container sust-people-shell">
        <div className="sust-people-grid">
          
          {/* Left Column: Image */}
          <div className="sust-people-visual">
            <div className="sust-people-image-wrap">
              <img 
                src={peopleImage} 
                alt="Our People at Work" 
                className="sust-people-image" 
              />
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="sust-people-content">
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
