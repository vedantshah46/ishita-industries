import { useEffect, useState } from 'react'
import './ScrollProgressBar.css'

/**
 * ScrollProgressBar
 * ------------------
 * A fixed 2px bar at the very top of the page that fills
 * as the user scrolls. Purely cosmetic — does not affect layout.
 *
 * Mounted once in App.jsx so it persists across all routes.
 */
function ScrollProgressBar() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement
      const scrollable = scrollHeight - clientHeight
      const scrolled = scrollable > 0 ? (scrollTop / scrollable) * 100 : 0
      setProgress(scrolled)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className="scroll-progress-bar"
      style={{ transform: `scaleX(${progress / 100})` }}
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Page scroll progress"
    />
  )
}

export default ScrollProgressBar
