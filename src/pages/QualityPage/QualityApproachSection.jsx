import { useRef } from 'react'
import './QualityApproachSection.css'
import qualityApproachImg from '../../Images/Quality-approach.png'
import useScrollAnimation from '../../hooks/useScrollAnimation'
import useCurtainReveal from '../../hooks/useCurtainReveal'

const approachCards = [
  {
    title: 'Online Quality Check',
    description:
      'Our advanced online quality monitoring systems enable real-time tracking and reporting, helping us quickly identify and resolve any issues. This proactive approach ensures consistent quality and maintains high standards throughout our entire manufacturing process.',
    image: qualityApproachImg,
  },
  {
    title: 'Machine Maintenance',
    description:
      'Regular maintenance of our machinery ensures consistent product quality and performance. Our dedicated team conducts routine inspections and timely repairs to keep equipment in optimal condition, reducing downtime and preventing defects.',
    image: qualityApproachImg,
  },
  {
    title: 'Employee Skill upgradation',
    description:
      'We continuously invest in training programs to keep our team aligned with the latest quality control methods and industry standards. Regular skill development ensures our workforce stays updated and capable of maintaining high-quality performance.',
    image: qualityApproachImg,
  },
]

function QualityApproachSection() {
  const titleRef = useCurtainReveal({ stagger: 0.065 })

  const animRefs = useRef([])
  useScrollAnimation(animRefs)

  return (
    <section className="quality-approach-section">
      <div className="container quality-approach-shell">
        <div
          className="quality-approach-header"
          ref={(el) => (animRefs.current[0] = el)}
        >
          <div className="quality-approach-header-content">
            <p className="quality-approach-kicker mb-0">QUALITY IN EVERY STEP</p>
            <h2 className="quality-approach-title mb-0" ref={titleRef}>
              OUR QUALITY APPROACH.
            </h2>
          </div>
        </div>

        <div className="quality-approach-grid">
          {approachCards.map((card, index) => (
            <article
              key={card.title}
              className="quality-approach-card"
              ref={(el) => (animRefs.current[1 + index] = el)}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="quality-approach-image-wrap">
                <img
                  src={card.image}
                  alt={card.title}
                  className="quality-approach-image"
                />
              </div>
              <h3 className="quality-approach-card-title mb-0">{card.title}</h3>
              <p className="quality-approach-card-text mb-0">
                {card.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default QualityApproachSection
