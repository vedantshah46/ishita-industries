import React, { useRef, useState, useEffect } from 'react'
import './ComponentsDeliveredSection.css'
import mapImage from '../../Images/component-part-delivered.png'
import useScrollAnimation from '../../hooks/useScrollAnimation'

function ComponentsDeliveredSection() {
  const animRefs = useRef([])
  useScrollAnimation(animRefs)
  const [count, setCount] = useState(0)
  const [hasCounted, setHasCounted] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasCounted) {
          setHasCounted(true)
          let start = 0
          const end = 3500
          const duration = 2000 // 2 seconds
          const increment = end / (duration / 16) // 60fps
          
          const timer = setInterval(() => {
            start += increment
            if (start >= end) {
              setCount(end)
              clearInterval(timer)
            } else {
              setCount(Math.ceil(start))
            }
          }, 16)
        }
      },
      { threshold: 0.5 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [hasCounted])

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
            ref={(el) => {
              animRefs.current[1] = el
              containerRef.current = el
            }}
          >
            <h2 className="components-delivered-number">{count}+</h2>
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
