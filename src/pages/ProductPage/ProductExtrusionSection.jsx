import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './ProductExtrusionSection.css'
import arrowVector from '../../Images/arrow-vector.png'
import anime from 'animejs'
import { useProducts } from '../../hooks/useProducts'
import { extrusionProducts } from '../../data/staticProducts'

function ProductExtrusionSection() {
  const { products, loading, error } = useProducts('extrusion')
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
          targets: '.product-extrusion-header-container > *',
          translateY: [30, 0],
          opacity: [0, 1],
          duration: 800,
          delay: anime.stagger(150)
        })
        .add({
          targets: '.product-extrusion-card',
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
    <section className="product-extrusion-section" ref={sectionRef}>
      <div className="product-extrusion-shell">
        <div
          className="product-extrusion-header-container"
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
              <Link 
                to="/product/electric-pin"
                key={card.slug}
                className="product-extrusion-card-link"
              >
                <article
                  className="product-extrusion-card"
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
              </Link>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default ProductExtrusionSection
