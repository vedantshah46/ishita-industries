import './UniqueSellingPropositionSection.css'

const uspItems = [
  {
    id: '01',
    title: 'Material Integrity',
    description:
      'Precision machined ferrous and non-ferrous components with full material traceability.',
    shortLabel: 'Material Integrity',
    featureClass: 'usp-feature-material',
    icon: 'integrity',
  },
  {
    id: '02',
    title: 'Precision Engineering',
    description:
      'Advanced CNC and VMC machining of ferrous and non-ferrous metal components.',
    shortLabel: 'Precision Engineering',
    featureClass: 'usp-feature-engineering',
    icon: 'engineering',
  },
  {
    id: '03',
    title: 'Fast RFQ Response',
    description: 'Upload drawing, get quote in 24 hours.',
    shortLabel: 'Fast RFQ Response',
    featureClass: 'usp-feature-rfq',
    icon: 'rfq',
  },
  {
    id: '04',
    title: 'Strict Quality Validation',
    description: 'Multi-stage quality inspection for consistent precision.',
    shortLabel: 'Strict Quality Validation',
    featureClass: 'usp-feature-quality',
    icon: 'quality',
  },
  {
    id: '05',
    title: 'Custom OEM Manufacturing',
    description: 'Precision components manufactured to your drawings and specifications.',
    shortLabel: 'Custom OEM Manufacturing',
    featureClass: 'usp-feature-oem',
    icon: 'oem',
  },
  {
    id: '06',
    title: 'Long-Term Partnership',
    description: 'Flexible manufacturing from prototype to mass production.',
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
  return (
    <section className="usp-section">
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

        <div className="usp-showcase">
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
              <p className="mb-0">PROPOSITION</p>
            </div>
          </div>

          {uspItems.map((item) => (
            <article key={`${item.id}-feature`} className={`usp-feature ${item.featureClass}`}>
              <div>
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
