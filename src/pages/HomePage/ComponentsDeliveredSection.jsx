import React from 'react'
import './ComponentsDeliveredSection.css'
import mapImage from '../../Images/component-part-delivered.png'

function ComponentsDeliveredSection() {
  return (
    <section className="components-delivered-section">
      <div className="components-delivered-shell">
        <div className="components-delivered-content">
          <img 
            src={mapImage} 
            alt="Global delivery map" 
            className="components-delivered-map" 
          />
          <div className="components-delivered-text-overlay">
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
