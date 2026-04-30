import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import './ManufacturingInfrastructureSection.css'
import infrastructureImage from '../../Images/about-manufacturing-infrastructure.png'
import contactUsLogo from '../../Images/homepage-contact-us-logo.png'
import checkboxIcon from '../../Images/about-manufacture-checkbox.png'
import useScrollAnimation from '../../hooks/useScrollAnimation'
import useCurtainReveal from '../../hooks/useCurtainReveal'

const machineKeys = [
  'mfg_infra.machine_1', 'mfg_infra.machine_2', 'mfg_infra.machine_3',
  'mfg_infra.machine_4', 'mfg_infra.machine_5', 'mfg_infra.machine_6',
  'mfg_infra.machine_7', 'mfg_infra.machine_8', 'mfg_infra.machine_9',
]

const infraStatValues = ['22,000+', '16,000+', '10,000+', '1000+']
const infraStatKeys   = ['mfg_infra.stat1_label', 'mfg_infra.stat2_label', 'mfg_infra.stat3_label', 'mfg_infra.stat4_label']

function ManufacturingInfrastructureSection() {
  const { t } = useTranslation()
  const titleRef = useCurtainReveal({ stagger: 0.065 })
  const animRefs = useRef([])
  useScrollAnimation(animRefs)

  return (
    <section className="about-infra-section">
      <div>
        <p className="about-infra-kicker mb-0">{t('mfg_infra.kicker')}</p>
        <h2 className="about-infra-title mb-0" ref={titleRef}>{t('mfg_infra.title')}</h2>
      </div>
      <div className="container about-infra-shell">
        <div className="about-infra-header" ref={(el) => (animRefs.current[0] = el)} />

        <div className="about-infra-visual-card" ref={(el) => (animRefs.current[1] = el)}>
          <img src={infrastructureImage} alt="Manufacturing infrastructure" className="about-infra-image" />
          <div className="about-infra-overlay">
            <div aria-hidden="true"><img src={contactUsLogo} /></div>
            <ul className="about-infra-list">
              {machineKeys.map((key) => (
                <li key={key} className="about-infra-list-item">
                  <img src={checkboxIcon} className="about-infra-check-img" alt="check" />
                  <span>{t(key)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="about-infra-stats" ref={(el) => (animRefs.current[2] = el)}>
          {infraStatValues.map((value, i) => (
            <article key={i} className="about-infra-stat-card">
              <p className="about-infra-stat-value mb-0">{value}</p>
              <p className="about-infra-stat-label mb-0">{t(infraStatKeys[i])}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ManufacturingInfrastructureSection
