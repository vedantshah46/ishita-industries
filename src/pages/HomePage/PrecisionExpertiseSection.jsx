import { useRef, useEffect } from 'react'
import './PrecisionExpertiseSection.css'
import precisionMmachineExpertiseOne from '../../Images/precision-machine-expertise-one.png'
import precisionMachineExpertiseTwo from '../../Images/precision-machine-expertise-two.png'
import anime from 'animejs'
import SplitType from 'split-type'

function PrecisionExpertiseSection({ className = "" }) {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    let titleSplit = null;
    if (titleRef.current) {
      titleSplit = new SplitType(titleRef.current, { types: 'chars' });
      anime.set(titleSplit.chars, { opacity: 0, translateY: 20 });
    }

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !hasAnimated.current) {
        hasAnimated.current = true

        const tl = anime.timeline({
          easing: 'easeOutQuart'
        })

        tl.add({
          targets: '.precision-kicker',
          translateY: [30, 0],
          opacity: [0, 1],
          duration: 800,
        })

        if (titleSplit && titleSplit.chars) {
          tl.add({
            targets: titleRef.current,
            opacity: 1,
            duration: 1
          }, '-=800')
            .add({
              targets: titleSplit.chars,
              opacity: [0, 1],
              translateY: [20, 0],
              duration: 800,
              delay: anime.stagger(15),
              easing: 'spring(1, 80, 10, 0)'
            }, '-=800')
        }

        tl.add({
          targets: '.precision-card--left',
          translateX: [-60, 0],
          opacity: [0, 1],
          duration: 1000,
          easing: 'easeOutExpo'
        }, '-=400')
          .add({
            targets: '.precision-card--right',
            translateX: [60, 0],
            opacity: [0, 1],
            duration: 1000,
            easing: 'easeOutExpo'
          }, '-=800')

        observer.disconnect()
      }
    }, { threshold: 0.15 })

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => {
      observer.disconnect()
      if (titleSplit) titleSplit.revert()
    }
  }, [])

  return (
    <section className={`precision-section ${className}`} ref={sectionRef}>
      <div className="container precision-shell">

        <div
          className="precision-header"
        >
          <div>
            <p className="precision-kicker mb-0">ALL KINDS OF PRECISION</p>
            <h2 className="precision-title mb-0" ref={titleRef}>
              Extrusion Raw products
            </h2>
          </div>
        </div>

        <div className="precision-grid">
          <article
            className="precision-card precision-card--left"
          >
            <div className="precision-visual precision-visual-brass" aria-hidden="true">
              <img src={precisionMmachineExpertiseOne} alt="Copper and Brass Extruded Rods" />
            </div>
            <p className="precision-caption mb-0">
              Copper &amp; Brass Extruded Rods, Profiles &amp; Sections
            </p>
          </article>

          <article
            className="precision-card precision-card--right"
          >
            <div className="precision-visual precision-visual-alloy" aria-hidden="true">
              <img src={precisionMachineExpertiseTwo} alt="Aluminum Alloy Extrusion Products" />
            </div>
            <p className="precision-caption mb-0">Aluminum Alloy Extrusion Products</p>
          </article>
        </div>

      </div>
    </section>
  )
}

export default PrecisionExpertiseSection
