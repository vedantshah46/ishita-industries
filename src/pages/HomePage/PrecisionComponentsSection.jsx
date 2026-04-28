import { useRef } from 'react'
import './PrecisionComponentsSection.css'
import turnedImage from '../../Images/brass-turned-component.png'
import forgedImage from '../../Images/brass-forged-component.png'
import millingImage from '../../Images/brass-milling-component.png'
import broachImage from '../../Images/bras-broach-component.png'
import  stampingImage from '../../Images/brass-stamping-component.png'
import castingImage from '../../Images/brass-casting-component.png'
import arrowVector from '../../Images/arrow-vector.png'
import useScrollAnimation from '../../hooks/useScrollAnimation'

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
  const animRefs = useRef([])
  useScrollAnimation(animRefs)

  return (
    <section className="precision-components-section">
      <div className="container precision-components-shell">
        <div 
          className="precision-components-header"
          ref={(el) => (animRefs.current[0] = el)}
        >
          <div>
            <p className="precision-components-kicker mb-0">ALL KINDS OF PRECISION</p>
            <h2 className="precision-components-title mb-0">
              PRECISION MACHINING EXPERTISE.
            </h2>
          </div>
        </div>

        <div className="precision-components-grid">
          {componentCards.map((card, index) => (
            <article 
              key={card.title} 
              className="precision-components-card"
              ref={(el) => (animRefs.current[1 + index] = el)}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="precision-components-visual">
                <img src={card.image} alt="" className="precision-components-image" />
              </div>

              <div className="precision-components-caption-row">
                <p className="precision-components-caption mb-0">{card.title}</p>
                <img src={arrowVector} alt="" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PrecisionComponentsSection
