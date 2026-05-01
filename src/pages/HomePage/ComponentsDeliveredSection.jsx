import React, { useRef, useEffect } from 'react'
import './ComponentsDeliveredSection.css'
import mapImage from '../../Images/component-part-delivered.png'
import anime from 'animejs'

function ComponentsDeliveredSection() {
  const containerRef = useRef(null)
  const numberRef = useRef(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true

          const tl = anime.timeline({
            easing: 'easeOutQuart'
          })

          const counterObj = { val: 0 }

          tl.add({
            targets: '.components-delivered-map',
            translateX: '-50%',
            translateY: '-50%',
            scale: [0.95, 1],
            opacity: [0, 1],
            duration: 1200,
            easing: 'easeOutCubic'
          })
            .add({
              targets: '.components-delivered-text-overlay',
              translateY: ['-1rem', '-2rem'],
              opacity: [0, 1],
              duration: 1000,
              easing: 'easeOutCubic'
            }, '-=800')
            .add({
              targets: counterObj,
              val: 3500,
              duration: 2000,
              easing: 'easeOutExpo',
              update: () => {
                if (numberRef.current) {
                  numberRef.current.innerText = Math.round(counterObj.val).toLocaleString() + '+'
                }
              }
            }, '-=1000')

          observer.disconnect()
        }
      },
      { threshold: 0.05 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="components-delivered-section" ref={containerRef}>
      <div className="components-delivered-shell">
        <div className="components-delivered-content">
          <img
            src={mapImage}
            alt="Global delivery map"
            className="components-delivered-map"
          />
          <div className="components-delivered-text-overlay">
            <h2 className="components-delivered-number" ref={numberRef}>0+</h2>
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
