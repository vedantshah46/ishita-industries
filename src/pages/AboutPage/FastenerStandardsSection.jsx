import { useRef, useEffect } from 'react'
import './FastenerStandardsSection.css'
import fsOne from '../../Images/fastner-standard-one.png'
import fsTwo from '../../Images/fastner-standard-two.png'
import fsThree from '../../Images/fastner-standard-three.png'
import fsFour from '../../Images/fastner-standard-four.png'
import fsFive from '../../Images/fastner-standard-five.png'
import fsSix from '../../Images/fastner-standard-six.png'
import anime from 'animejs'

const standardsData = [
  {
    id: 'din',
    label: 'DIN Standard',
    image: fsOne,
    alt: 'DIN Standard logo',
  },
  {
    id: 'astm',
    label: 'ASTM Standard',
    image: fsTwo,
    alt: 'ASTM Standard logo',
  },
  {
    id: 'bs',
    label: 'BS Standard',
    image: fsThree,
    alt: 'BS Standard logo',
  },
  {
    id: 'jis',
    label: 'JIS Standard',
    image: fsFour,
    alt: 'JIS Standard logo',
  },
  {
    id: 'ansi',
    label: 'ANSI Standard',
    image: fsFive,
    alt: 'ANSI Standard logo',
  },
  {
    id: 'gb',
    label: 'GB Standard',
    image: fsSix,
    alt: 'GB Standard logo',
  },
]

function FastenerStandardsSection() {
  const sectionRef = useRef(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !hasAnimated.current) {
        hasAnimated.current = true
        const tl = anime.timeline({ easing: 'easeOutQuart' })

        tl.add({
          targets: '.fastener-header > *',
          translateY: [30, 0],
          opacity: [0, 1],
          duration: 800,
          delay: anime.stagger(150)
        })
        .add({
          targets: '.fastener-card',
          scale: [0.9, 1],
          opacity: [0, 1],
          duration: 800,
          delay: anime.stagger(100),
          easing: 'easeOutBack(1.5)'
        }, '-=400')

        observer.disconnect()
      }
    }, { threshold: 0.1 })

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="fastener-standards-section" ref={sectionRef}>
      <div className="container fastener-shell">
        <div className="fastener-header">
          <div>
            <p className="fastener-kicker mb-0">ENGINEERED FOR PRECISION</p>
            <h2 className="fastener-title mb-0">FASTENER STANDARDS.</h2>
          </div>
        </div>

        <div className="fastener-table-container">
          <div className="fastener-grid">
            {standardsData.map((item) => (
              <article 
                key={item.id} 
                className="fastener-card"
              >
                <div className="fastener-card-logo">
                  <img src={item.image} alt={item.alt} />
                </div>
                <span className="fastener-card-label">{item.label}</span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FastenerStandardsSection