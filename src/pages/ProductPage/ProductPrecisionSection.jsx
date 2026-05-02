import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './ProductPrecisionSection.css'
import arrowVector from '../../Images/arrow-vector.png'
import anime from 'animejs'
import { useProducts } from '../../hooks/useProducts'
import { precisionProducts } from '../../data/staticProducts'

function ProductPrecisionSection() {
  const { products, loading, error } = useProducts('precision')
  const sectionRef = useRef(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (loading || products.length === 0 || hasAnimated.current) return

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !hasAnimated.current) {
        hasAnimated.current = true
        
        const tl = anime.timeline({
          easing: 'easeOutQuart'
        })

        tl.add({
          targets: '.product-precision-header-container > *',
          translateY: [30, 0],
          opacity: [0, 1],
          duration: 800,
          delay: anime.stagger(150)
        })
        .add({
          targets: '.product-precision-card',
          translateY: [40, 0],
          opacity: [0, 1],
          scale: [0.95, 1],
          duration: 1000,
          delay: anime.stagger(100),
          easing: 'easeOutBack(1, .8)'
        }, '-=400')

        observer.disconnect()
      }
    }, { threshold: 0.1 })

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [loading, products])

  if (error) return null

  return (
    <section className="product-precision-section" ref={sectionRef}>
      <div className="product-precision-shell">
        <div
          className="product-precision-header-container"
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
              <Link 
                to="/product/electric-pin"
                key={card.slug}
                className="product-precision-card-link"
              >
                <article
                  className="product-precision-card"
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
              </Link>
            ))
          }
        </div >
      </div >
    </section >
  )
}

export default ProductPrecisionSection
