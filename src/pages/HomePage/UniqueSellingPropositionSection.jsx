import { useEffect, useRef } from 'react'
import './UniqueSellingPropositionSection.css'

const uspItems = [
  {
    id: '01',
    title: 'Material Integrity',
    description: (
      <>
        Precision Machined <br />
        Ferrous &amp; Non-Ferrous <br />
        Components with Full <br />
        Material Traceability.
      </>
    ),
    shortLabel: 'Material Integrity',
    featureClass: 'usp-feature-material',
    icon: 'integrity',
  },
  {
    id: '02',
    title: 'Precision Engineering',
    description: (
      <>
        Advanced CNC &amp; VMC <br />
        Machining of Ferrous &amp; Non- <br />
        Ferrous Metal Components.
      </>
    ),
    shortLabel: 'Precision Engineering',
    featureClass: 'usp-feature-engineering',
    icon: 'engineering',
  },
  {
    id: '03',
    title: 'Fast RFQ Response',
    description: (
      <>
        Upload Drawing --Get <br />
        Quote in 24 Hours
      </>
    ),
    shortLabel: 'Fast RFQ Response',
    featureClass: 'usp-feature-rfq',
    icon: 'rfq',
  },
  {
    id: '04',
    title: 'Strict Quality Vaidation',
    description: (
      <>
        Multi-Stage Quality Inspection <br />
        for Consistent Precision.
      </>
    ),
    shortLabel: 'Strict Quality Validation',
    featureClass: 'usp-feature-quality',
    icon: 'quality',
  },
  {
    id: '05',
    title: 'Custom OEM Manufacturing',
    description: (
      <>
        Precision Components Manufactured <br />
        to Your Drawings &amp; Specifications.
      </>
    ),
    shortLabel: 'Custom OEM Manufacturing',
    featureClass: 'usp-feature-oem',
    icon: 'oem',
  },
  {
    id: '06',
    title: 'Long-Term Partnership',
    description: (
      <>
        Flexible Manufacturing from <br />
        Prototype to Mass Production.
      </>
    ),
    shortLabel: 'Long-Term Partnership',
    featureClass: 'usp-feature-partnership',
    icon: 'partnership',
  },
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
      {
        threshold: 0.25,
        rootMargin: '0px 0px -80px 0px',
      }
    )

    observer.observe(showcase)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="usp-section" ref={sectionRef}>
      <div className="container usp-shell">
        <div className="usp-header">
          <div>
            <p className="usp-kicker mb-0">WHAT SETS US APART</p>
            <h2 className="usp-title mb-0">
              UNIQUE SELLING
              <span className="d-block">PROPOSITION.</span>
            </h2>
          </div>
          <p className="usp-intro mb-0">
            Delivering consistent quality, precision, and reliability, building trust through every
            product, process, and long-term customer relationship.
          </p>
        </div>

        <div className="usp-showcase" ref={showcaseRef}>
          <div className="usp-wheel" aria-hidden="true">
            {uspItems.map((item, index) => (
              <div key={item.id} className={`usp-fan-card usp-fan-card-${index + 1}`}>
                <span className="usp-fan-index">{item.id}</span>
                <span className="usp-fan-label">{item.shortLabel}</span>
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
                <h3 className="usp-feature-title mb-0">{item.title}</h3>
                <p className="usp-feature-copy mb-0">{item.description}</p>
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

