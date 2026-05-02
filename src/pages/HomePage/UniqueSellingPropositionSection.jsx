import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import './UniqueSellingPropositionSection.css'

const uspItems = [
  { id: '01', titleKey: 'usp.card1_title', descKey: 'usp.card1_desc', featureClass: 'usp-feature-material', icon: 'integrity' },
  { id: '02', titleKey: 'usp.card2_title', descKey: 'usp.card2_desc', featureClass: 'usp-feature-engineering', icon: 'engineering' },
  { id: '03', titleKey: 'usp.card3_title', descKey: 'usp.card3_desc', featureClass: 'usp-feature-rfq', icon: 'rfq' },
  { id: '04', titleKey: 'usp.card4_title', descKey: 'usp.card4_desc', featureClass: 'usp-feature-quality', icon: 'quality' },
  { id: '05', titleKey: 'usp.card5_title', descKey: 'usp.card5_desc', featureClass: 'usp-feature-oem', icon: 'oem' },
  { id: '06', titleKey: 'usp.card6_title', descKey: 'usp.card6_desc', featureClass: 'usp-feature-partnership', icon: 'partnership' },
]

function Icon({ type }) {
  const icons = {
    integrity: (
      <svg viewBox="0 0 40 40" aria-hidden="true">
        <path d="M7 27V13l7-4 7 4v14l-7 4-7-4Z" />
        <path d="M14 9v8m7-4h8m-8 8h10m-15-4h15m-9 10v-6" />
      </svg>
    ),
    engineering: (
      <svg viewBox="0 0 40 40" aria-hidden="true">
        <path d="M9 12h8v8H9zM22 12h9v6h-9zM22 23h9v8h-9zM9 24h8v7H9z" />
        <path d="M17 16h5m-5 11h5m9-5h4M5 16h4m11-10v6m0 20v4" />
      </svg>
    ),
    rfq: (
      <svg viewBox="0 0 40 40" aria-hidden="true">
        <path d="M8 10h18v20H8z" />
        <path d="M13 15h8m-8 5h11m-11 5h7m14-1 4 4m-6-7a5 5 0 1 0 0 .01" />
      </svg>
    ),
    quality: (
      <svg viewBox="0 0 40 40" aria-hidden="true">
        <path d="M10 17h20v10H10z" />
        <path d="M14 17V13a6 6 0 1 1 12 0v4M15 22h0m5 0h0m5 0h0m-12 5h0m5 0h0m5 0h0" />
      </svg>
    ),
    oem: (
      <svg viewBox="0 0 40 40" aria-hidden="true">
        <path d="M8 22h8v8H8zM16 22h8v8h-8zM24 22h8v8h-8zM11 14h18v8H11z" />
        <path d="M20 10V6m-7 8v-3m14 3v-3M8 22h24" />
      </svg>
    ),
    partnership: (
      <svg viewBox="0 0 40 40" aria-hidden="true">
        <path d="M8 16h9v11H8zM23 16h9v11h-9zM17 21h6M20 16v5" />
        <path d="M12 13a3 3 0 1 0 .01 0M28 13a3 3 0 1 0 .01 0" />
      </svg>
    ),
  }
  return <span className="usp-icon">{icons[type]}</span>
}

function UniqueSellingPropositionSection() {
  const { t } = useTranslation()
  const sectionRef = useRef(null)
  const showcaseRef = useRef(null)

  useEffect(() => {
    const showcase = showcaseRef.current
    const section = sectionRef.current
    if (!showcase || !section) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            section.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.25, rootMargin: '0px 0px -80px 0px' }
    )
    observer.observe(showcase)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="usp-section" ref={sectionRef}>
      <div className="container usp-shell">
        <div className="usp-header">
          <div>
            <p className="usp-kicker mb-0">{t('usp.kicker')}</p>
            <h2 className="usp-title mb-0">{t('usp.title')}</h2>
          </div>
        </div>

        <div className="usp-showcase" ref={showcaseRef}>
          <div className="usp-wheel" aria-hidden="true">
            {uspItems.map((item, index) => (
              <div key={item.id} className={`usp-fan-card usp-fan-card-${index + 1}`}>
                <span className="usp-fan-index">{item.id}</span>
                <span className="usp-fan-label">{t(item.titleKey)}</span>
              </div>
            ))}
            <div className="usp-center-disc">
              <p className="mb-0">UNIQUE</p>
              <h3 className="mb-0">SELLING</h3>
              <p className="mb-0 mt-1">PROPOSITION</p>
            </div>
          </div>

          {uspItems.map((item) => (
            <article key={`${item.id}-feature`} className={`usp-feature ${item.featureClass}`}>
              <div className="usp-feature-text-content">
                <h3 className="usp-feature-title mb-0">{t(item.titleKey)}</h3>
                <p className="usp-feature-copy mb-0">{t(item.descKey)}</p>
              </div>
              <Icon type={item.icon} />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default UniqueSellingPropositionSection
