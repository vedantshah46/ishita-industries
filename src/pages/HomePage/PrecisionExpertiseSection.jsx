import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import './PrecisionExpertiseSection.css'
import precisionMmachineExpertiseOne from '../../Images/precision-machine-expertise-one.png'
import precisionMachineExpertiseTwo  from '../../Images/precision-machine-expertise-two.png'
import useCurtainReveal    from '../../hooks/useCurtainReveal'
import useScrollAnimation  from '../../hooks/useScrollAnimation'
import { clipRevealFromLeft } from '../../utils/gsapAnimations'

function PrecisionExpertiseSection() {
  // GSAP curtain reveal on the heading
  const titleRef = useCurtainReveal({ stagger: 0.06 })

  // Scroll reveal for header block and card containers
  // [0] = header, [1] = left card, [2] = right card
  const animRefs = useRef([])
  useScrollAnimation(animRefs)

  // Refs for the image wrappers that get clip-path reveals
  const imgLeftRef  = useRef(null)
  const imgRightRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Left image reveals first, right image 0.2s later
      const cleanupLeft  = clipRevealFromLeft(imgLeftRef.current,  { delay: 0 })
      const cleanupRight = clipRevealFromLeft(imgRightRef.current, { delay: 0.2 })
      return () => {
        cleanupLeft()
        cleanupRight()
      }
    })
    return () => ctx.revert()
  }, [])

  return (
    <section className="precision-section">
      <div className="container precision-shell">

        <div
          className="precision-header"
          ref={(el) => (animRefs.current[0] = el)}
        >
          <div>
            <p className="precision-kicker mb-0">ALL KINDS OF PRECISION</p>
            <h2 className="precision-title mb-0" ref={titleRef}>
              PRECISION MACHINING EXPERTISE.
            </h2>
          </div>
          <p className="precision-intro mb-0">
            Delivering accuracy, consistency, and high-performance machining solutions.
          </p>
        </div>

        <div className="precision-grid">
          <article
            className="precision-card precision-card-left"
            ref={(el) => (animRefs.current[1] = el)}
          >
            {/* Image wrapper gets clip-path reveal */}
            <div
              className="precision-visual precision-visual-brass"
              aria-hidden="true"
              ref={imgLeftRef}
            >
              <img src={precisionMmachineExpertiseOne} />
            </div>
            <p className="precision-caption mb-0">
              Copper &amp; Brass Extruded Rods, Profiles &amp; Sections
            </p>
          </article>

          <article
            className="precision-card precision-card-right"
            ref={(el) => (animRefs.current[2] = el)}
          >
            <div
              className="precision-visual precision-visual-alloy"
              aria-hidden="true"
              ref={imgRightRef}
            >
              <img src={precisionMachineExpertiseTwo} />
            </div>
            <p className="precision-caption mb-0">Aluminum Alloy Extrusion Products</p>
          </article>
        </div>

      </div>
    </section>
  )
}

export default PrecisionExpertiseSection
