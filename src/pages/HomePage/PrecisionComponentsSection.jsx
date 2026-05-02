import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './PrecisionComponentsSection.css'
import turnedImage from '../../Images/brass-turned-component.png'
import forgedImage from '../../Images/brass-forged-component.png'
import millingImage from '../../Images/brass-milling-component.png'
import broachImage from '../../Images/bras-broach-component.png'
import stampingImage from '../../Images/brass-stamping-component.png'
import castingImage from '../../Images/brass-casting-component.png'
import arrowVector from '../../Images/arrow-vector.png'
import anime from 'animejs'

const componentCards = [
  {
    title: 'Brass Turned component',
    image: turnedImage,
  },
  {
    title: 'Brass Forged component',
    image: forgedImage,
  },
  {
    title: 'Brass Milling component',
    image: millingImage,
  },
  {
    title: 'Brass Broach component',
    image: broachImage,
  },
  {
    title: 'Brass Stamping component',
    image: stampingImage,
  },
  {
    title: 'Brass Casting component',
    image: castingImage,
  },
]

function PrecisionComponentsSection() {
  const sectionRef = useRef(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !hasAnimated.current) {
        hasAnimated.current = true

        const tl = anime.timeline({
          easing: 'easeOutQuart'
        })

        tl.add({
          targets: '.precision-components-header',
          translateY: [30, 0],
          opacity: [0, 1],
          duration: 800,
        })
          .add({
            targets: '.precision-components-card',
            translateY: [30, 0],
            opacity: [0, 1],
            duration: 800,
            delay: anime.stagger(100),
            easing: 'easeOutBack'
          }, '-=600')

        observer.disconnect()
      }
    }, { threshold: 0.15 })

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="precision-components-section" ref={sectionRef}>
      <div className="container precision-components-shell">
        <div className="precision-components-header">
          <div>
            <p className="precision-components-kicker mb-0">ALL KINDS OF PRECISION</p>
            <h2 className="precision-components-title mb-0">
              PRECISION MACHINING EXPERTISE.
            </h2>
          </div>
        </div>

        <div className="precision-components-grid">
          {componentCards.map((card) => (
            <Link
              to="/product/electric-pin"
              key={card.title}
              className="precision-components-card"
              style={{ textDecoration: 'none' }}
            >
              <div className="precision-components-visual">
                <img src={card.image} alt="" className="precision-components-image" />
              </div>

              <div className="precision-components-caption-row">
                <p className="precision-components-caption mb-0">{card.title}</p>
                <img src={arrowVector} alt="" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PrecisionComponentsSection
