import { useRef } from 'react'
import './ProductPrecisionSection.css'
import arrowVector from '../../Images/arrow-vector.png'
import useScrollAnimation from '../../hooks/useScrollAnimation'
import { useProducts } from '../../hooks/useProducts'
import { precisionProducts } from '../../data/staticProducts'

function ProductPrecisionSection() {
  const { products, loading, error } = useProducts('precision')
  const animRefs = useRef([])
  useScrollAnimation(animRefs, products.length)

  if (error) return null

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
          {loading
            ? Array.from({ length: 6 }).map((_, i) => (
                <article key={i} className="product-precision-card skeleton-card">
                  <div className="product-precision-visual skeleton-shimmer" />
                  <div className="product-precision-caption-row">
                    <div className="skeleton-text" />
                  </div>
                </article>
              ))
            : products.map((card, index) => (
                <article 
                  key={card.slug} 
                  className="product-precision-card"
                  ref={(el) => (animRefs.current[1 + index] = el)}
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <div className="product-precision-visual">
                    <img
                      src={card.image_url || (precisionProducts.find(p => p.slug === card.slug)?.image_url) || ''}
                      alt={card.name}
                      className="product-precision-image"
                    />
                  </div>

                  <div className="product-precision-caption-row">
                    <p className="product-precision-caption mb-0">{card.name}</p>
                    <img src={arrowVector} alt="" className="product-precision-arrow" />
                  </div>
                </article>
              ))
          }
        </div>
      </div>
    </section>
  )
}

export default ProductPrecisionSection
