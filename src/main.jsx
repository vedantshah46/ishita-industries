import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './index.css'
import './i18n/index.js'
import App from './App.jsx'

// ── GSAP plugin registration ──────────────────────────────────────
gsap.registerPlugin(ScrollTrigger)

// ── Lenis smooth scroll ───────────────────────────────────────────
// Lenis replaces the browser's default scroll with inertia-based
// smooth scrolling — the single biggest "feel" improvement.
// We drive it through GSAP's ticker so ScrollTrigger stays in sync.

const lenis = new Lenis({
  duration: 1.5, // Slower, more luxurious scroll
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smoother deceleration
  direction: 'vertical',
  gestureDirection: 'vertical',
  smoothWheel: true,
  wheelMultiplier: 1,
  touchMultiplier: 2,
  infinite: false,
})

// Tell GSAP ScrollTrigger about every Lenis scroll event
lenis.on('scroll', ScrollTrigger.update)

// Use GSAP's own ticker as the animation frame driver.
// This avoids double RAF and keeps Lenis + ScrollTrigger perfectly synced.
gsap.ticker.add((time) => {
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)

// Expose lenis globally so any component can call lenis.stop()/start()
window.__lenis = lenis

// ── React render ──────────────────────────────────────────────────
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
