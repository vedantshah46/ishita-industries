import './ArchitecturalLedgerSection.css'
import foundationOfModernInfra from '../../Images/foundation-of-modern-infra.png'
import backboneOfPrecision from '../../Images/backbone-of-precision.png' 
import utilityOne from '../../Images/systematic-utility-one.png'
import utilityTwo from '../../Images/systematic-utility-two.png'
import utilityThree from '../../Images/systematic-utility-three.png'
import utilityFour from '../../Images/systematic-utility-four.png'

const applicationsList = [
  { id: 1, text: 'Automated Fabrications', icon: (
  <img src={utilityOne}/>
  ) },
  { id: 2, text: 'Structural Integrity Audits', icon: (
      <img src={utilityTwo}/>

  ) },
  { id: 3, text: 'Scalable Data Pipelines', icon: (
      <img src={utilityThree}/>

  ) },
  { id: 4, text: 'Logistic Synthetics', icon: (
      <img src={utilityFour}/>

  ) }
]

const statsList = [
  { id: 1, value: '200+', label: 'Workforce', theme: 'light' },
  { id: 2, value: '30+', label: 'Years', theme: 'light' },
  { id: 3, value: '10x', label: 'Growth', theme: 'dark' }
]

const capabilitiesData = [
  { id: '01', number: '01.', title: 'INDUSTRY EXPERIENCE', desc: 'Over two decades of expertise in precision brass manufacturing.' },
  { id: '02', number: '02.', title: 'QUALITY RANGE', desc: 'Wide range of high-quality extruded brass hardware products.' },
  { id: '03', number: '03.', title: 'ETHICAL PRACTICES', desc: 'Transparent and reliable business operations built on trust.' },
  { id: '04', number: '04.', title: 'ADVANCED MANUFACTURING', desc: 'Equipped with modern production facilities and testing systems.' },
  { id: '05', number: '05.', title: 'QUALITY CONTROL', desc: 'Strict quality checks at every stage to ensure consistency.' },
  { id: '06', number: '06.', title: 'PROCESS EXCELLENCE', desc: 'Optimized workflows for efficiency, accuracy, and performance.' }
]

function ArchitecturalLedgerSection() {
  return (
    <>
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

        <div className="ledger-infrastructure">
          <div className="ledger-infrastructure-content">
            <span className="ledger-number">05 — INFRASTRUCTURE</span>
            <h3 className="ledger-infrastructure-title">THE BACKBONE OF<br />PRECISION.</h3>
            <p className="ledger-infrastructure-desc">
              Located in Jamnagar – Gujrat, our facility is well segregated into various departments such as manufacturing unit, storage unit and quality testing unit. Our manufacturing unit is stretched over a vast area of 25,000 sq. ft.
            </p>
            <p className="ledger-infrastructure-desc">
              The use of Dual Frequency induction furnace for melting and alloying, Heavy presses for extrusion assure precision in production.
            </p>
          </div>
          <div className="ledger-infrastructure-image-wrapper">
            <img src={backboneOfPrecision} alt="Infrastructure" className="ledger-infrastructure-image" />
          </div>
        </div>
      </div>
    </section>

      {/* 06 Capabilities */}
      <section className="ledger-capabilities-section">
        <div className="container ledger-shell">
          <div className="caps-header">
            <div>
              <p className="ledger-kicker mb-0">06 — OUR STRENGTHS</p>
              <h2 className="ledger-title mb-0">CORE CAPABILITIES.</h2>
            </div>
            <p className="ledger-intro mb-0">
              Our strength lies in decades of industrial experience, advanced manufacturing, and a commitment to quality that meets global standards.
            </p>
          </div>

          <div className="caps-grid">
            {capabilitiesData.map((cap) => (
              <article key={cap.id} className="caps-card">
                <span className="caps-number">{cap.number}</span>
                <h3 className="caps-title">{cap.title}</h3>
                <p className="caps-desc mb-0">{cap.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default ArchitecturalLedgerSection
