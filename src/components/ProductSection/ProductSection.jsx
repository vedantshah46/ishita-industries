import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './ProductSection.css'
import arrowVector from '../../Images/arrow-vector.png'
import anime from 'animejs'

/**
 * Reusable product grid section.
 *
 * Props:
 *   kicker       — small top label (optional)
 *   title        — heading below kicker (optional)
 *   breadcrumbs  — array of { label, to? } — shown above header (optional)
 *   items        — array of { slug, name, image_url }
 *   loading      — show skeleton cards while true
 *   skeletonCount — number of skeleton cards (default 6)
 *   basePath     — URL prefix; each card links to `${basePath}/${item.slug}`
 *   emptyMessage — text shown when items is empty and not loading
 */
function ProductSection({
  kicker,
  title,
  breadcrumbs,
  items = [],
  loading = false,
  skeletonCount = 6,
  basePath = '',
  emptyMessage = 'No products found.',
}) {
  const sectionRef  = useRef(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (loading || items.length === 0 || hasAnimated.current) return

    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver((entries) => {
      if (!entries[0].isIntersecting || hasAnimated.current) return
      hasAnimated.current = true

      const tl     = anime.timeline({ easing: 'easeOutQuart' })
      const header = section.querySelector('.pcat-header')
      const cards  = section.querySelectorAll('.pcat-card')

      if (header) {
        tl.add({
          targets: Array.from(header.children),
          translateY: [30, 0],
          opacity:    [0, 1],
          duration:   800,
          delay:      anime.stagger(150),
        })
      }

      tl.add({
        targets:  cards,
        translateY: [40, 0],
        opacity:    [0, 1],
        scale:      [0.95, 1],
        duration:   1000,
        delay:      anime.stagger(100),
        easing:     'easeOutBack(1, .8)',
      }, header ? '-=400' : '0')

      observer.disconnect()
    }, { threshold: 0.1 })

    observer.observe(section)
    return () => observer.disconnect()
  }, [loading, items])

  const showHeader = kicker || title

  return (
    <section className="pcat-section" ref={sectionRef}>
      <div className="pcat-shell">

        {/* Breadcrumb */}
        {breadcrumbs?.length > 0 && (
          <nav className="pcat-breadcrumb">
            {breadcrumbs.map((crumb, i) => (
              <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                {i > 0 && <span className="pcat-breadcrumb-sep">/</span>}
                {crumb.to
                  ? <Link to={crumb.to}>{crumb.label}</Link>
                  : <span className="pcat-breadcrumb-current">{crumb.label}</span>
                }
              </span>
            ))}
          </nav>
        )}

        {/* Header */}
        {showHeader && (
          <div className="pcat-header">
            {kicker && <p className="pcat-kicker mb-0">{kicker}</p>}
            {title  && <h2 className="pcat-title mb-0">{title}</h2>}
          </div>
        )}

        {/* Grid */}
        <div className="pcat-grid">
          {loading
            ? Array.from({ length: skeletonCount }).map((_, i) => (
                <article key={i} className="pcat-card skeleton-card" style={{ opacity: 1 }}>
                  <div className="pcat-skeleton-visual skeleton-shimmer" />
                  <div className="pcat-caption-row">
                    <div className="pcat-skeleton-label skeleton-shimmer" />
                  </div>
                </article>
              ))
            : items.length === 0
            ? <p className="pcat-empty">{emptyMessage}</p>
            : items.map(item => (
                <Link
                  to={`${basePath}/${item.slug}`}
                  key={item.slug}
                  className="pcat-card-link"
                >
                  <article className="pcat-card">
                    <div className="pcat-visual">
                      <img
                        src={item.image_url}
                        alt={item.name}
                        className="pcat-image"
                      />
                    </div>
                    <div className="pcat-caption-row">
                      <p className="pcat-caption mb-0">{item.name}</p>
                      <img src={arrowVector} alt="" className="pcat-arrow" />
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

export default ProductSection
