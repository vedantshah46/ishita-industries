import { useRef } from 'react'
import './ProductIndustrialSection.css'
import arrowVector from '../../Images/arrow-vector.png'
import useScrollAnimation from '../../hooks/useScrollAnimation'
import { useProducts } from '../../hooks/useProducts'
import { industrialProducts } from '../../data/staticProducts'

function ProductIndustrialSection() {
  const { products, loading, error } = useProducts('industrial')
  const animRefs = useRef([])
  useScrollAnimation(animRefs, products.length)

  if (error) return null

  return (
    <section className="product-industrial-section">
      <div className="product-industrial-shell">
        <div 
          className="product-industrial-header-container"
          ref={(el) => (animRefs.current[0] = el)}
        >
          <p className="product-industrial-kicker mb-0">All kind of Precision</p>
          <h2 className="product-industrial-title mb-0">
            Industrial Components
          </h2>
        </div>

        <div className="product-industrial-grid">
          {loading
            ? Array.from({ length: 5 }).map((_, i) => (
                <article key={i} className="product-industrial-card skeleton-card">
                  <div className="product-industrial-visual skeleton-shimmer" />
                  <div className="product-industrial-caption-row">
                    <div className="skeleton-text" />
                  </div>
                </article>
              ))
            : products.map((card, index) => (
                <article 
                  key={card.slug} 
                  className="product-industrial-card"
                  ref={(el) => (animRefs.current[1 + index] = el)}
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <div className="product-industrial-visual">
                    <img
                      src={card.image_url || (industrialProducts.find(p => p.slug === card.slug)?.image_url) || ''}
                      alt={card.name}
                      className="product-industrial-image"
                    />
                  </div>

                  <div className="product-industrial-caption-row">
                    <p className="product-industrial-caption mb-0">{card.name}</p>
                    <img src={arrowVector} alt="" className="product-industrial-arrow" />
                  </div>
                </article>
              ))
          }
        </div>
      </div>
    </section>
  )
}

export default ProductIndustrialSection
