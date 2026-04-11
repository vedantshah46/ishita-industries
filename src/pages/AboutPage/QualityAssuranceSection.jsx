import './QualityAssuranceSection.css'
import vernierImage from '../../assets/qa-vernier.svg'
import visionImage from '../../assets/qa-vision.svg'
import sortingImage from '../../assets/qa-sorting.svg'
import hardnessImage from '../../assets/qa-hardness.svg'
import roughnessImage from '../../assets/qa-roughness.svg'
import threadImage from '../../assets/qa-thread.svg'
import heightImage from '../../assets/qa-height.svg'
import rohsLogo from '../../assets/qa-rohs.svg'
import reachLogo from '../../assets/qa-reach.svg'
import zegLogo from '../../assets/qa-zeg.svg'
import tuvLogo from '../../assets/qa-tuv.svg'
import ppapLogo from '../../assets/qa-ppap.svg'
import ipqaLogo from '../../assets/qa-ipqa.svg'
import sevenQcLogo from '../../assets/qa-7qc.svg'

const equipmentCards = [
  { title: 'VERNIER CALIPERS & MICRO METER', image: vernierImage },
  { title: 'VISION MEASURING MACHINE', image: visionImage },
  { title: 'ONE PCS AUTO SORTING MACHINE', image: sortingImage },
  { title: 'AUTO SHORTING MACHINE', image: visionImage },
  { title: 'HARDNESS TESTER', image: hardnessImage },
  { title: 'SURFACE ROUGHNESS TESTER', image: roughnessImage },
  { title: 'THREAD GAUGES', image: threadImage },
  { title: 'HEIGHT GAUGES', image: heightImage },
]

const assuranceBadges = [
  { title: 'ROHS', image: rohsLogo },
  { title: 'REACH', image: reachLogo },
  { title: 'ZED', image: zegLogo },
  { title: 'TUV', image: tuvLogo },
  { title: 'PPAP', image: ppapLogo },
  { title: '7QC', image: sevenQcLogo },
  { title: 'IPQA', image: ipqaLogo },
]

function QualityAssuranceSection() {
  return (
    <section className="quality-assurance-section">
      <div className="container quality-assurance-shell">
        <div className="quality-assurance-header">
          <div>
            <p className="quality-assurance-kicker mb-0">PRECISION YOU CAN TRUST</p>
            <h2 className="quality-assurance-title mb-0">
              QUALITY
              <span className="d-block">ASSURANCE.</span>
            </h2>
          </div>

          <p className="quality-assurance-copy mb-0">
            Ensuring excellence through strict quality checks, advanced testing, and consistent
            performance at every stage.
          </p>
        </div>

        <div className="quality-assurance-grid">
          {equipmentCards.map((card) => (
            <article key={card.title} className="quality-assurance-card">
              <div className="quality-assurance-image-wrap">
                <img src={card.image} alt={card.title} className="quality-assurance-image" />
              </div>
              <p className="quality-assurance-label mb-0">{card.title}</p>
            </article>
          ))}
        </div>

        <div className="quality-assurance-badges">
          {assuranceBadges.map((badge) => (
            <div key={badge.title} className="quality-assurance-badge">
              <img src={badge.image} alt={badge.title} className="quality-assurance-badge-image" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default QualityAssuranceSection
