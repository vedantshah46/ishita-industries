import { useEffect, useRef } from 'react'
import './QualityApproachSection.css'
import qualityApproachImg1 from '../../Images/Quality-approach.png'
import qualityApproachImg2 from '../../Images/Machine Maintenance.png'
import qualityApproachImg3 from '../../Images/Employee Skill upgradation.png'
import anime from 'animejs'
import SplitType from 'split-type'

const approachCards = [
  {
    title: 'Online Quality Check',
    description:
      'Our advanced online quality monitoring systems enable real-time tracking and reporting, helping us quickly identify and resolve any issues. This proactive approach ensures consistent quality and maintains high standards throughout our entire manufacturing process.',
    image: qualityApproachImg1,
  },
  {
    title: 'Machine Maintenance',
    description:
      'Regular maintenance of our machinery ensures consistent product quality and performance. Our dedicated team conducts routine inspections and timely repairs to keep equipment in optimal condition, reducing downtime and preventing defects.',
    image: qualityApproachImg2,
  },
  {
    title: 'Employee Skill upgradation',
    description:
      'We continuously invest in training programs to keep our team aligned with the latest quality control methods and industry standards. Regular skill development ensures our workforce stays updated and capable of maintaining high-quality performance.',
    image: qualityApproachImg3,
  },
]

function QualityApproachSection() {
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

      const kicker = sectionRef.current.querySelector('.quality-approach-kicker')
      const cards = sectionRef.current.querySelectorAll('.quality-approach-card')

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
        delay: anime.stagger(20),
        duration: 800
      }, '-=600')
      .add({
        targets: cards,
        opacity: [0, 1],
        translateY: [40, 0],
        delay: anime.stagger(150),
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
    <section className="quality-approach-section" ref={sectionRef}>
      <div className="container quality-approach-shell">
        <div className="quality-approach-header">
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
