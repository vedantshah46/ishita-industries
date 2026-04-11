import './ManufacturingInfrastructureSection.css'
import infrastructureImage from '../../Images/about-manufacturing-infrastructure.png'
import contactUsLogo from '../../Images/homepage-contact-us-logo.png'
import checkbox from '../../Images/about-manufacture-checkbox.png'


const machineList = [
  'CNC Sliding Head Machines',
  'CNC Turning Machines',
  'Automatic Turning Machine',
  'Automatic Trobe Type Machine',
  'Drilling Machines',
  'Threading Machines',
  'Cutting Machines',
  'Milling',
  'Marking Machine',
]

const infrastructureStats = [
  { value: '22,000+', label: 'Land Area' },
  { value: '16,000+', label: 'Build Area' },
  { value: '10,000+', label: 'Workshop' },
  { value: '1000+', label: 'Quality Control' },
]

function ManufacturingInfrastructureSection() {
  return (
    <section className="about-infra-section">
      <div className="container about-infra-shell">
        <div className="about-infra-header">
          <div>
            <p className="about-infra-kicker mb-0">POWERING PRECISION</p>
            <h2 className="about-infra-title mb-0">
              MANUFACTURING
              <span className="d-block">INFRASTRUCTURE.</span>
            </h2>
          </div>

          <p className="about-infra-copy mb-0">
            Built with advanced facilities and modern technology to ensure efficiency,
            consistency, and superior production quality.
          </p>
        </div>

        <div className="about-infra-visual-card">
          <img
            src={infrastructureImage}
            alt="Manufacturing infrastructure"
            className="about-infra-image"
          />

          <div className="about-infra-overlay">
            <div aria-hidden="true">
              <img src={contactUsLogo}/>
            </div>

            <ul className="about-infra-list">
              {machineList.map((item) => (
                <li key={item} className="about-infra-list-item">
                  <span className="about-infra-check" aria-hidden="true">
                    &#10003;
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="about-infra-stats">
          {infrastructureStats.map((stat) => (
            <article key={stat.label} className="about-infra-stat-card">
              <p className="about-infra-stat-value mb-0">{stat.value}</p>
              <p className="about-infra-stat-label mb-0">{stat.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ManufacturingInfrastructureSection
