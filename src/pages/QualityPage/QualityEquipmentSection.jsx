import { useEffect, useRef } from 'react'
import './QualityEquipmentSection.css'
import vernierImage from '../../Images/quality-assurance-one.png'
import visionImage from '../../Images/quality-assurance-two.png'
import sortingImage from '../../Images/quality-assurance-three.png'
import visionImageTwo from '../../Images/quality-assurance-four.png'
import pneumaticImage from '../../Images/quality-assurance-five.png'
import stressImage from '../../Images/quality-assurance-six.png'
import dimensionalImage from '../../Images/quality-assurance-seven.png'
import destructiveImage from '../../Images/quality-assurance-eight.png'
import anime from 'animejs'
import SplitType from 'split-type'

const equipmentCards = [
  { title: 'VERNIER CALIPERS & MICRO METER', image: vernierImage },
  { title: 'VISION MEASURING MACHINE', image: visionImage },
  { title: 'HARDNESS TESTING', image: sortingImage },
  { title: 'HYDROSTATIC TESTING', image: visionImageTwo },
  { title: 'PNEUMATIC TESTING', image: pneumaticImage },
  { title: 'STRESS CORROSION TESTING', image: stressImage },
  { title: 'DIMENSIONAL INSPECTION', image: dimensionalImage },
  { title: 'DESTRUCTIVE TESTING', image: destructiveImage },
]

function QualityEquipmentSection() {
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

      const kicker = sectionRef.current.querySelector('.quality-equip-kicker')
      const cards = sectionRef.current.querySelectorAll('.quality-equip-card')

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
    <section className="quality-equip-section" ref={sectionRef}>
      <div className="container quality-equip-shell">
        <div className="quality-equip-header">
          <div className="quality-equip-header-content">
            <p className="quality-equip-kicker mb-0">QUALITY TESTING LAB</p>
            <h2 className="quality-equip-title mb-0" ref={titleRef}>
              Verified quality. Proven performance.
            </h2>
          </div>
        </div>

        <div className="quality-equip-grid">
          {equipmentCards.map((card, index) => (
            <article
              key={index}
              className="quality-equip-card"
            >
              <div className="quality-equip-image-wrap">
                <img
                  src={card.image}
                  alt={card.title}
                  className="quality-equip-image"
                />
              </div>
              <p className="quality-equip-label mb-0">{card.title}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default QualityEquipmentSection
