import { useRef } from 'react'
import './QualityEquipmentSection.css'
import vernierImage from '../../Images/quality-assurance-one.png'
import visionImage from '../../Images/quality-assurance-two.png'
import sortingImage from '../../Images/quality-assurance-three.png'
import visionImageTwo from '../../Images/quality-assurance-four.png'
import pneumaticImage from '../../Images/quality-assurance-five.png'
import stressImage from '../../Images/quality-assurance-six.png'
import dimensionalImage from '../../Images/quality-assurance-seven.png'
import destructiveImage from '../../Images/quality-assurance-eight.png'
import useScrollAnimation from '../../hooks/useScrollAnimation'
import useCurtainReveal from '../../hooks/useCurtainReveal'

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
  const titleRef = useCurtainReveal({ stagger: 0.065 })

  const animRefs = useRef([])
  useScrollAnimation(animRefs)

  return (
    <section className="quality-equip-section">
      <div className="container quality-equip-shell">
        <div
          className="quality-equip-header"
          ref={(el) => (animRefs.current[0] = el)}
        >
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
              ref={(el) => (animRefs.current[1 + index] = el)}
              style={{ transitionDelay: `${index * 60}ms` }}
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
