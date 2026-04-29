import React, { useRef } from 'react'
import './ComponentsDeliveredSection.css'
import mapImage from '../../Images/component-part-delivered.png'
import useScrollAnimation from '../../hooks/useScrollAnimation'

function ComponentsDeliveredSection() {
  const animRefs = useRef([])
  useScrollAnimation(animRefs)

  return (
    <section className="components-delivered-section">
      <div className="components-delivered-shell">
        <div className="components-delivered-content">
          <img 
            src={mapImage} 
            alt="Global delivery map" 
            className="components-delivered-map" 
            ref={(el) => (animRefs.current[0] = el)}
          />
          <div 
            className="components-delivered-text-overlay"
            ref={(el) => (animRefs.current[1] = el)}
          >
            <h2 className="components-delivered-number">3500+</h2>
            <p className="components-delivered-label">
              COMPONENTS &amp; PARTS DELIVERED GLOBALLY
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ComponentsDeliveredSection
