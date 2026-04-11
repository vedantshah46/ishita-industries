import './ArchitecturalLedgerSection.css'
import dummyImage from '../../assets/hero.png'
import foundationOfModernInfra from '../../Images/foundation-of-modern-infra.png'

const applicationsList = [
  { id: 1, text: 'Automated Fabrications', icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
    </svg>
  ) },
  { id: 2, text: 'Structural Integrity Audits', icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 3v18h18M9 9l3 3 7-7" />
    </svg>
  ) },
  { id: 3, text: 'Scalable Data Pipelines', icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M20 7h-3m3 5h-3m3 5h-3M4 7h3m-3 5h3m-3 5h3M9 4v16m6-16v16" />
    </svg>
  ) },
  { id: 4, text: 'Logistic Synthetics', icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
    </svg>
  ) }
]

const statsList = [
  { id: 1, value: '200+', label: 'Workforce', theme: 'light' },
  { id: 2, value: '30+', label: 'Years', theme: 'light' },
  { id: 3, value: '10x', label: 'Growth', theme: 'dark' }
]

function ArchitecturalLedgerSection() {
  return (
    <section className="architectural-ledger-section">
      <div className="container ledger-shell">
        <div className="ledger-header">
          <div>
            <p className="ledger-kicker mb-0">FROM VISION TO MANUFACTURING</p>
            <h2 className="ledger-title mb-0">
              THE<br />ARCHITECTURAL<br />LEDGER.
            </h2>
          </div>
          <p className="ledger-intro mb-0">
            A clinical examination of industrial growth, precision engineering, and the systematic evolution of architectural frameworks.
          </p>
        </div>

        <div className="ledger-bento">
          {/* Box 01 */}
          <article className="ledger-card ledger-card--inception">
            <div className="ledger-card-content">
              <span className="ledger-number">01 — INCEPTION</span>
              <div>

              <h3 className="ledger-inception-title">Defining the <br /> foundation of modern infrastructure.</h3>
              </div>
              <div className="ledger-inception-row">
                <p className="ledger-inception-desc mb-0">
                  Components Manufactured: Adapters, Blocks, Bolts, Bushings, Cages, Clamps, Collars, Couplings, Dowels, Electronic Connectors, Electrical Pin, Electrical socket, Earthing & Grounding Component...
                </p>
                <div className="ledger-inception-image-wrapper">
                  <img src={foundationOfModernInfra} alt="Inception Architecture" className="ledger-inception-image" />
                </div>
              </div>
            </div>
          </article>

          {/* Box 02 */}
          <article className="ledger-card ledger-card--applications">
            <span className="ledger-number ledger-number--dark">02 — APPLICATIONS</span>
            <h3 className="ledger-applications-title">Systemic Utility</h3>
            <ul className="ledger-applications-list">
              {applicationsList.map((app) => (
                <li key={app.id}>
                  <span className="app-icon" aria-hidden="true">{app.icon}</span>
                  <span className="app-text">{app.text}</span>
                </li>
              ))}
            </ul>
          </article>

          {/* Box 03 */}
          <article className="ledger-card ledger-card--saga">
            <span className="ledger-number">03 — SUCCESS SAGA</span>
            <h3 className="ledger-saga-title">The journey of growth.</h3>
            <p className="ledger-saga-desc">
              Established in 1994, the company quickly evolved into a strong industrial presence by empowering local talent through skill development and training. With a focus on building a capable workforce, it transformed into a reliable manufacturing partner driven by precision, consistency, and continuous growth.
            </p>
            <div className="ledger-saga-stats">
              {statsList.map((stat) => (
                <div key={stat.id} className={`ledger-stat-box ledger-stat-box--${stat.theme}`}>
                  <p className="stat-value mb-0">{stat.value}</p>
                  <p className="stat-label mb-0">{stat.label}</p>
                </div>
              ))}
            </div>
          </article>

          {/* Box 04 */}
          <article className="ledger-card ledger-card--satisfaction">
            <span className="ledger-number">04 — CLIENT SATISFACTION</span>
            <div className="ledger-satisfaction-content">
              <p className="ledger-quote italic mb-0">
                “Due to our client-centric approach, we have been able to build huge client base all across the Asian countries. We follow ethical business practices and are committed to provide complete satisfaction to our clients.”
              </p>
              <div className="ledger-author">
                <span className="author-line"></span>
                <span className="author-name">GLOBAL INFRASTRUCTURE CORP</span>
              </div>
            </div>
            {/* Huge watermark shape */}
            <svg className="ledger-watermark" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l2.4 2.4L18 4.1l.3 3.4 3.2 1.3-1.6 2.9.9 3.3-3.1 1.6-1.1 3.2-3.4-.6L12 21.8l-2.6-2.6-3.4.6-1.1-3.2-3.1-1.6.9-3.3-1.6-2.9 3.2-1.3.3-3.4 3.6.3L12 2zm-.9 13.6l6.4-6.4-1.4-1.4-5 5-2.6-2.6-1.4 1.4 4 4z"/>
            </svg>
          </article>
        </div>
      </div>
    </section>
  )
}

export default ArchitecturalLedgerSection
