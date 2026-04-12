import { useEffect, useRef } from 'react'
import './PagePreloader.css'

function PagePreloader() {
  const overlayRef = useRef(null)
  const counterRef = useRef(null)

  useEffect(() => {
    const overlay = overlayRef.current
    const counter = counterRef.current
    if (!overlay || !counter) return

    // Increment counter from 0 → 100 with randomised steps for organic feel
    let count = 0
    const tick = () => {
      const remaining = 100 - count
      const step = Math.max(1, Math.floor(remaining * 0.18 + Math.random() * 6))
      count = Math.min(100, count + step)
      counter.textContent = String(count)

      if (count < 100) {
        setTimeout(tick, 55 + Math.random() * 55)
      } else {
        // Brief hold at 100, then slide up
        setTimeout(() => {
          overlay.classList.add('preloader--done')
          overlay.addEventListener('transitionend', () => {
            overlay.style.display = 'none'
          }, { once: true })
        }, 250)
      }
    }

    setTimeout(tick, 120)
  }, [])

  return (
    <div className="preloader" ref={overlayRef} aria-hidden="true">
      <p className="preloader-brand">ISHITA INDUSTRIES</p>
      <span className="preloader-counter" ref={counterRef}>0</span>
      <div className="preloader-bar">
        <span className="preloader-bar-fill" />
      </div>
    </div>
  )
}

export default PagePreloader
