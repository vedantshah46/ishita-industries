import { useRef } from 'react'
import './ProductPrecisionSection.css'
import turnedImage from '../../Images/brass-turned-component.png'
import forgedImage from '../../Images/brass-forged-component.png'
import millingImage from '../../Images/brass-milling-component.png'
import pressedImage from '../../Images/bras-broach-component.png' // Using broach as placeholder for pressed
import stampingImage from '../../Images/brass-stamping-component.png'
import castingImage from '../../Images/brass-casting-component.png'
import arrowVector from '../../Images/arrow-vector.png'
import useScrollAnimation from '../../hooks/useScrollAnimation'

const componentCards = [
  {
    title: 'Brass Turned Component',
    image: turnedImage,
  },
  {
    title: 'Brass Forged Component',
    image: forgedImage,
  },
  {
    title: 'Brass Milling Component',
    image: millingImage,
  },
  {
    title: 'Brass Pressed Component',
    image: pressedImage,
  },
  {
    title: 'Brass Stamped Component',
    image: stampingImage,
  },
  {
    title: 'Brass Casting Component',
    image: castingImage,
  },
]

function ProductPrecisionSection() {
  const animRefs = useRef([])
  useScrollAnimation(animRefs)

  return (
    <section className="product-precision-section">
      <div className="product-precision-shell">
        <div 
          className="product-precision-header-container"
          ref={(el) => (animRefs.current[0] = el)}
        >
          <p className="product-precision-kicker mb-0">All kind of Precision</p>
          <h2 className="product-precision-title mb-0">
            Precision Machining Expertise
          </h2>
        </div>

        <div className="product-precision-grid">
          {componentCards.map((card, index) => (
            <article 
              key={card.title} 
              className="product-precision-card"
              ref={(el) => (animRefs.current[1 + index] = el)}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="product-precision-visual">
                <img src={card.image} alt={card.title} className="product-precision-image" />
              </div>

              <div className="product-precision-caption-row">
                <p className="product-precision-caption mb-0">{card.title}</p>
                <img src={arrowVector} alt="" className="product-precision-arrow" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductPrecisionSection
