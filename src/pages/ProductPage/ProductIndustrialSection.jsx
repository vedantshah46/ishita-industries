import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './ProductIndustrialSection.css'
import arrowVector from '../../Images/arrow-vector.png'
import anime from 'animejs'
import { useProducts } from '../../hooks/useProducts'
import { industrialProducts } from '../../data/staticProducts'

function ProductIndustrialSection() {
  const { products, loading, error } = useProducts('industrial')
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
          targets: '.product-industrial-header-container > *',
          translateY: [30, 0],
          opacity: [0, 1],
          duration: 800,
          delay: anime.stagger(150)
        })
        .add({
          targets: '.product-industrial-card',
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
    <section className="product-industrial-section" ref={sectionRef}>
      <div className="product-industrial-shell">
        <div
          className="product-industrial-header-container"
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
              <Link 
                to="/product/electric-pin"
                key={card.slug}
                className="product-industrial-card-link"
              >
                <article
                  className="product-industrial-card"
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
              </Link>
            ))
          }
        </div >
      </div >
    </section >
  )
}

export default ProductIndustrialSection
