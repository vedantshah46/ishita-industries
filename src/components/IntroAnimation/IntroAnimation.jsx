import { useState, useEffect } from 'react'
import './IntroAnimation.css'
import companyLogo from '../../Images/ishita-navbar-logo.png'

function IntroAnimation({ onComplete }) {
  const [isExiting, setIsExiting] = useState(false)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Lock scroll while intro plays
    document.body.classList.add('intro-active')

    // Begin exit animation after intro sequence completes
    const exitTimer = setTimeout(() => {
      setIsExiting(true)
    }, 3000)

    // Remove overlay after exit animation finishes
    const removeTimer = setTimeout(() => {
      setIsVisible(false)
      document.body.classList.remove('intro-active')
      if (onComplete) onComplete()
    }, 3900)

    return () => {
      clearTimeout(exitTimer)
      clearTimeout(removeTimer)
      document.body.classList.remove('intro-active')
    }
  }, [onComplete])

  if (!isVisible) return null

  return (
    <div className={`intro-overlay ${isExiting ? 'exit' : ''}`}>
      {/* Floating particles */}
      <span className="intro-particle" aria-hidden="true" />
      <span className="intro-particle" aria-hidden="true" />
      <span className="intro-particle" aria-hidden="true" />
      <span className="intro-particle" aria-hidden="true" />
      <span className="intro-particle" aria-hidden="true" />

      {/* Expanding pulse ring */}
      <div className="intro-pulse-ring" aria-hidden="true" />

      {/* Horizontal shimmer sweep */}
      <div className="intro-shimmer-line" aria-hidden="true" />

      {/* Corner accent marks */}
      <span className="intro-corner intro-corner--tl" aria-hidden="true" />
      <span className="intro-corner intro-corner--tr" aria-hidden="true" />
      <span className="intro-corner intro-corner--bl" aria-hidden="true" />
      <span className="intro-corner intro-corner--br" aria-hidden="true" />

      {/* Logo and text reveal */}
      <div className="intro-logo-container">
        <img
          src={companyLogo}
          alt="Ishita Industries"
          className="intro-logo"
        />
        <span className="intro-company-name">Ishita Industries</span>
        <span className="intro-tagline">Precision · Reliability · Performance</span>
      </div>

      {/* Progress bar */}
      <div className="intro-progress-track" aria-hidden="true">
        <div className="intro-progress-fill" />
      </div>
    </div>
  )
}

export default IntroAnimation
