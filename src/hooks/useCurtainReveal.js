import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { curtainReveal } from '../utils/gsapAnimations'

/**
 * useCurtainReveal
 * -----------------
 * Drop-in hook for the "words rising up" heading reveal.
 * Attach the returned ref to any <h1> / <h2> / <h3>.
 *
 * Usage:
 *   const titleRef = useCurtainReveal()
 *   return <h2 ref={titleRef}>PRECISION MACHINING EXPERTISE.</h2>
 *
 * The hook:
 *   - Splits the heading text into individual word spans
 *   - Registers a GSAP ScrollTrigger that plays the curtain effect
 *     once the heading enters the viewport
 *   - Fully cleans up on unmount (handles StrictMode double-invoke)
 *
 * @param {object} opts  — forwarded to curtainReveal()
 */
function useCurtainReveal(opts = {}) {
  const ref = useRef(null)

  useEffect(() => {
    // curtainReveal returns its own cleanup (kills trigger + restores DOM)
    const cleanup = curtainReveal(ref.current, opts)
    return cleanup
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return ref
}

export default useCurtainReveal
