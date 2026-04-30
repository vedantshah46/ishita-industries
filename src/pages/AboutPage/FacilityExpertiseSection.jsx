import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import './FacilityExpertiseSection.css'
import capabilitiesImg from '../../Images/about-our-capabilities.png'
import isoBg           from '../../Images/about-capabilities-two.png'
import processOne   from '../../Images/about-process-we-undertake-one.png'
import processTwo   from '../../Images/about-process-we-undertake-two.png'
import processThree from '../../Images/about-process-we-undertake-three.png'
import processFour  from '../../Images/about-process-we-undertake-four.png'
import processFive  from '../../Images/about-process-we-undertake-five.png'
import useScrollAnimation from '../../hooks/useScrollAnimation'

const processIcons = [processOne, processTwo, processThree, processFour, processFive]
const processKeys  = ['facility.proc_1','facility.proc_2','facility.proc_3','facility.proc_4','facility.proc_5']
const metalKeys    = ['facility.metal_1','facility.metal_2','facility.metal_3','facility.metal_4','facility.metal_5']
const finishKeys   = ['facility.finish_1','facility.finish_2','facility.finish_3','facility.finish_4','facility.finish_5','facility.finish_6','facility.finish_7','facility.finish_8']

function FacilityExpertiseSection() {
  const { t } = useTranslation()
  const animRefs = useRef([])
  useScrollAnimation(animRefs)

  return (
    <section className="facility-expertise-section">
      <div className="container">
        <div className="facility-header-block" ref={(el) => (animRefs.current[0] = el)}>
          <p className="facility-main-kicker">{t('facility.kicker')}</p>
          <h2 className="facility-main-heading">{t('facility.title')}</h2>
        </div>

        <div className="facility-grid">
          <div className="facility-left-col" ref={(el) => (animRefs.current[1] = el)}>
            <div className="facility-banner-card">
              <img src={capabilitiesImg} alt="Machining Floor" className="facility-banner-img" />
              <div className="facility-banner-overlay">
                <p className="facility-kicker">{t('facility.focus_label')}</p>
                <h3 className="facility-title">{t('facility.focus_title')}</h3>
              </div>
            </div>

            <div className="facility-bottom-row">
              <div className="facility-card facility-process-card">
                <h4 className="facility-card-label">{t('facility.process_label')}</h4>
                <div className="process-divider" />
                <ul className="facility-process-list">
                  {processKeys.map((key, i) => (
                    <li key={key} className="facility-process-item">
                      <span className="p-name">{t(key)}</span>
                      <img src={processIcons[i]} alt="" className="p-icon" />
                    </li>
                  ))}
                </ul>
              </div>

              <div className="facility-card facility-tech-card">
                <h4 className="facility-card-label text-white">{t('facility.specs_label')}</h4>
                <div className="tech-divider" />

                <div className="facility-tech-group">
                  <span className="tech-label">{t('facility.spec_size_label')}</span>
                  <strong className="tech-value">{t('facility.spec_size_value')}</strong>
                  <span className="tech-sublabel">{t('facility.spec_size_unit')}</span>
                </div>
                <div className="facility-tech-group">
                  <span className="tech-label">{t('facility.spec_length_label')}</span>
                  <strong className="tech-value">{t('facility.spec_length_value')}</strong>
                  <span className="tech-sublabel">{t('facility.spec_length_unit')}</span>
                </div>
                <div className="facility-tech-group">
                  <span className="tech-label">{t('facility.spec_tol_label')}</span>
                  <strong className="tech-value">{t('facility.spec_tol_value')}</strong>
                </div>
                <div className="facility-tech-group">
                  <span className="tech-label">{t('facility.spec_roughness_label')}</span>
                  <strong className="tech-value">{t('facility.spec_tol_value')}</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="facility-right-col" ref={(el) => (animRefs.current[2] = el)}>
            <div className="facility-card facility-metals-card">
              <div className="facility-card-header">
                <span className="header-line" />
                <h4 className="facility-card-label">{t('facility.metals_label')}</h4>
              </div>
              <div className="metals-list">
                {metalKeys.map((key) => (
                  <h3 key={key} className="metal-name">{t(key)}</h3>
                ))}
              </div>
              <div className="metal-divider" />
              <p className="metals-copy">{t('facility.metals_desc')}</p>
            </div>

            <div className="facility-card facility-finishes-card">
              <div className="facility-card-header">
                <span className="header-line" />
                <h4 className="facility-card-label">{t('facility.finishes_label')}</h4>
              </div>
              <div className="finishes-grid">
                {finishKeys.map((key) => (
                  <span key={key} className="finish-badge">{t(key)}</span>
                ))}
              </div>
            </div>

            <div className="facility-iso-card">
              <img src={isoBg} alt="" className="iso-bg" />
              <div className="iso-overlay">
                <span className="iso-text">{t('facility.certified')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FacilityExpertiseSection
