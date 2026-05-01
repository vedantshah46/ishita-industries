import { useEffect, useRef } from 'react'
import './QualityDeclarationsSection.css'
import anime from 'animejs'
import SplitType from 'split-type'

const declarations = [
  {
    title: 'ROHS',
    description:
      'Our products comply with the RoHS Directive (EU 2011/65/EU and 2015/863), which restricts the use of hazardous substances in electrical and electronic equipment. We ensure components do not exceed limits for lead (Pb), mercury (Hg), cadmium (Cd), hexavalent chromium (Cr6+), PBBs, PBDEs, DEHP, BBP, DBP and DIBP.',
  },
  {
    title: 'REACH',
    description:
      'Ishita Industry is fully aware of and supports the objectives of the European Union REACH Regulation (EC 1907/2006). We confirm that our products do not contain any Substances of Very High Concern (SVHC) above the allowed thresholds, and we continuously monitor the SVHC candidate list for updates.',
  },
  {
    title: 'TSCA',
    description:
      'At Ishita Industry, we are committed to full compliance with international environmental and chemical safety regulation including the U.S. Toxic Substances Control Act (TSCA). All products, substances and materials supplied by Ishita either conform to the requirements of TSCA or are exempt as per applicable provisions.',
  },
  {
    title: 'CONFLICT MINERALS',
    description:
      'We support the ethical sourcing of minerals and comply with the U.S. Dodd-Frank Act Section 1502. Ishita Metal certifies that our products do not contain conflict minerals (tin, tantalum, tungsten and gold) sourced from the Democratic Republic of Congo or adjoining countries unless they are certified as conflict free through recognized industry programs.',
  },
  {
    title: 'PROP 65',
    description:
      "In accordance with California's Proposition 65 (Safe Drinking Water and Toxic Enforcement Act of 1986), Balark Metal takes proactive steps to avoid the use of harmful chemicals known to cause cancer, birth defects, or other reproductive harm. If any listed substance is present in our products, it is declared and labeled appropriately.",
  },
]

function QualityDeclarationsSection() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const text = new SplitType(titleRef.current, { types: 'chars' })
    
    const triggerAnimation = () => {
      if (hasAnimated.current || !sectionRef.current) return
      hasAnimated.current = true

      const tl = anime.timeline({
        easing: 'easeOutExpo',
      })

      const kicker = sectionRef.current.querySelector('.quality-decl-kicker')
      const cards = sectionRef.current.querySelectorAll('.quality-decl-card')

      tl.add({
        targets: kicker,
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 800
      })
      .add({
        targets: text.chars,
        translateY: [30, 0],
        rotateX: [-90, 0],
        opacity: [0, 1],
        delay: anime.stagger(15),
        duration: 800
      }, '-=600')
      .add({
        targets: cards,
        opacity: [0, 1],
        translateY: [40, 0],
        delay: anime.stagger(100),
        duration: 1000
      }, '-=600')
    }

    const timer = setTimeout(() => {
      if (!hasAnimated.current) triggerAnimation()
    }, 10000)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            triggerAnimation()
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)

    return () => {
      clearTimeout(timer)
      observer.disconnect()
      text.revert()
    }
  }, [])

  return (
    <section className="quality-decl-section" ref={sectionRef}>
      <div className="container quality-decl-shell">
        <div className="quality-decl-header">
          <div className="quality-decl-header-content">
            <p className="quality-decl-kicker mb-0">REGULARTORY DECLARATION</p>
            <h2 className="quality-decl-title mb-0" ref={titleRef}>
              Environmental Declarations
            </h2>
          </div>
        </div>

        <div className="quality-decl-grid">
          {declarations.map((item, index) => (
            <div
              key={item.title}
              className="quality-decl-card"
            >
              <h3 className="quality-decl-card-title mb-0">{item.title}</h3>
              <p className="quality-decl-card-text mb-0">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default QualityDeclarationsSection
