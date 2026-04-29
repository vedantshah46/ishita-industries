import { useRef } from 'react'
import './ProductExtrusionSection.css'
import arrowVector from '../../Images/arrow-vector.png'
import useScrollAnimation from '../../hooks/useScrollAnimation'
import { useProducts } from '../../hooks/useProducts'
import { extrusionProducts } from '../../data/staticProducts'

function ProductExtrusionSection() {
  const { products, loading, error } = useProducts('extrusion')
  const animRefs = useRef([])
  useScrollAnimation(animRefs, products.length)

  if (error) return null

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
          {loading
            ? Array.from({ length: 3 }).map((_, i) => (
                <article key={i} className="product-extrusion-card skeleton-card">
                  <div className="product-extrusion-visual skeleton-shimmer" />
                  <div className="product-extrusion-caption-row">
                    <div className="skeleton-text" />
                  </div>
                </article>
              ))
            : products.map((card, index) => (
                <article 
                  key={card.slug} 
                  className="product-extrusion-card"
                  ref={(el) => (animRefs.current[1 + index] = el)}
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <div className="product-extrusion-visual">
                    <img
                      src={card.image_url || (extrusionProducts.find(p => p.slug === card.slug)?.image_url) || ''}
                      alt={card.name}
                      className="product-extrusion-image"
                    />
                  </div>

                  <div className="product-extrusion-caption-row">
                    <p className="product-extrusion-caption mb-0">{card.name}</p>
                    <img src={arrowVector} alt="" className="product-extrusion-arrow" />
                  </div>
                </article>
              ))
          }
        </div>
      </div>
    </section>
  )
}

export default ProductExtrusionSection
