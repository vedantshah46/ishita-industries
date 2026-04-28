import { useRef } from 'react'
import './ProductExtrusionSection.css'
import extrusionImage from '../../Images/ProductExtrusion-Brass Extrusion Rods.png'
import hollowImage from '../../Images/ProductExtrusion-Brass Hollow Rods.png'
import profileImage from '../../Images/ProductExtrusion-Brass Profile & Section Rods.png'
import arrowVector from '../../Images/arrow-vector.png'
import useScrollAnimation from '../../hooks/useScrollAnimation'

const componentCards = [
  {
    title: 'Brass Extrusion Rods',
    image: extrusionImage,
  },
  {
    title: 'Brass Hollow Rods',
    image: hollowImage,
  },
  {
    title: 'Brass Profile & Section Rods',
    image: profileImage,
  },
]

function ProductExtrusionSection() {
  const animRefs = useRef([])
  useScrollAnimation(animRefs)

  return (
    <section className="product-extrusion-section">
      <div className="product-extrusion-shell">
        <div 
          className="product-extrusion-header-container"
          ref={(el) => (animRefs.current[0] = el)}
        >
          <p className="product-extrusion-kicker mb-0">All kind of Precision</p>
          <h2 className="product-extrusion-title mb-0">
            Extrusion Products
          </h2>
        </div>

        <div className="product-extrusion-grid">
          {componentCards.map((card, index) => (
            <article 
              key={card.title} 
              className="product-extrusion-card"
              ref={(el) => (animRefs.current[1 + index] = el)}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="product-extrusion-visual">
                <img src={card.image} alt={card.title} className="product-extrusion-image" />
              </div>

              <div className="product-extrusion-caption-row">
                <p className="product-extrusion-caption mb-0">{card.title}</p>
                <img src={arrowVector} alt="" className="product-extrusion-arrow" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductExtrusionSection
