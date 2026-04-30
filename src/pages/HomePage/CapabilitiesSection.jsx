import './CapabilitiesSection.css'

const metals = [
  'Stainless Steel',
  'Carbon Steel',
  'Aluminum Alloys',
  'Brass & Copper',
  'Titanium',
  'Inconel',
]

const processes = [
  'Anodizing & Passivation',
  'Powder Coating & Painting',
  'Electropolishing',
]

function CapabilitiesSection() {
  return (
    <section className="capabilities-section">
      <div className="container capabilities-shell">
        <div className="capabilities-header">
          <div>
            <p className="capabilities-kicker mb-0">CORE ECOSYSTEM</p>
            <h2 className="capabilities-title mb-0">
              Advanced Manufacturing
              <span className="d-block">Capabilities</span>
            </h2>
          </div>
        </div>

        <div className="capabilities-grid">
          <article className="cap-card cap-card-machining">
            <div className="cap-card-topline">
              <span>3C</span>
              <span>UNIT 04 / OPS</span>
            </div>

            <h3 className="cap-card-title mb-0">Machining Capabilities</h3>

            <div className="cap-stats-grid">
              <div className="cap-stat">
                <span className="cap-stat-label">SIZE WE HANDLE</span>
                <strong className="cap-stat-value">1.50mm to 320mm</strong>
              </div>
              <div className="cap-stat">
                <span className="cap-stat-label">INSPECTION STATUS</span>
                <strong className="cap-stat-value">• Approved</strong>
              </div>
              <div className="cap-stat">
                <span className="cap-stat-label">LENGTH WE HANDLE</span>
                <strong className="cap-stat-value">Turning Length = 300mm</strong>
              </div>
              <div className="cap-stat">
                <span className="cap-stat-label">TOLERANCE CAPABILITY</span>
                <strong className="cap-stat-value">Up to 0.1mm</strong>
              </div>
            </div>

            <div className="cap-card-mark" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
          </article>

          <article className="cap-card cap-card-visual">
            <div className="cap-visual-image" aria-hidden="true">
              <span className="cap-visual-column cap-visual-column-left" />
              <span className="cap-visual-column cap-visual-column-center" />
              <span className="cap-visual-column cap-visual-column-right" />
              <span className="cap-visual-head" />
              <span className="cap-visual-base" />
            </div>

            <div className="cap-visual-overlay">
              <p className="cap-visual-index mb-0">01</p>
              <h3 className="cap-visual-title mb-0">
                Manufacturing
                <span className="d-block">Infrastructure</span>
              </h3>
              <p className="cap-visual-copy mb-0">
                Engineered for precision, optimized for efficiency, and built to meet global manufacturing standards.
              </p>
              <div className="cap-visual-meta">
                <span>ISO 9001</span>
                <span>24/ AUTO</span>
              </div>
            </div>
          </article>

          <article className="cap-card cap-card-metals">
            <div className="cap-card-section-label">
              <span className="cap-card-section-dot" aria-hidden="true" />
              <span>METAL WE WORK</span>
            </div>

            <div className="cap-metals-grid">
              {metals.map((metal) => (
                <div key={metal} className="cap-metal-item">
                  <span className="cap-metal-bullet" aria-hidden="true" />
                  <span>{metal}</span>
                </div>
              ))}
            </div>
          </article>

          <article className="cap-card cap-card-finishing">
            <h3 className="cap-finishing-title mb-0">SURFACE FINISHING</h3>

            <div className="cap-finishing-list">
              {processes.map((process, index) => (
                <div key={process} className="cap-finishing-item">
                  <div>
                    <span className="cap-finishing-label">PROCESS 0{index + 1}</span>
                    <p className="cap-finishing-name mb-0">{process}</p>
                  </div>
                  <span className="cap-finishing-arrow" aria-hidden="true">
                    ›
                  </span>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default CapabilitiesSection
