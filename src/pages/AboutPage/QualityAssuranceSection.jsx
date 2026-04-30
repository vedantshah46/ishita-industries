import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import './QualityAssuranceSection.css'
import vernierImage from '../../Images/quality-assurance-one.png'
import visionImage from '../../Images/quality-assurance-two.png'
import sortingImage from '../../Images/quality-assurance-three.png'
import hardnessImage from '../../Images/quality-assurance-four.png'
import roughnessImage from '../../Images/quality-assurance-six.png'
import threadImage from '../../Images/quality-assurance-seven.png'
import heightImage from '../../Images/quality-assurance-eight.png'
import rohsLogo from '../../Images/iso-certificate-one.svg'
import reachLogo from '../../Images/iso-certificate-two.svg'
import zegLogo from '../../Images/iso-certificate-three.svg'
import tuvLogo from '../../Images/iso-certificate-four.svg'
import ppapLogo from '../../Images/iso-certificate-five.svg'
import ipqaLogo from '../../Images/iso-certificate-seven.svg'
import sevenQcLogo from '../../Images/iso-certificate-six.svg'
import useScrollAnimation from '../../hooks/useScrollAnimation'
import useCurtainReveal from '../../hooks/useCurtainReveal'

const equipmentImages = [vernierImage, visionImage, sortingImage, visionImage, hardnessImage, roughnessImage, threadImage, heightImage]
const equipmentKeys = ['quality.tool_1', 'quality.tool_2', 'quality.tool_3', 'quality.tool_4', 'quality.tool_5', 'quality.tool_6', 'quality.tool_7', 'quality.tool_8']

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
  const { t } = useTranslation()
  const titleRef = useCurtainReveal({ stagger: 0.065 })
  const animRefs = useRef([])
  useScrollAnimation(animRefs)

  return (
    <section className="quality-assurance-section">
      <div className="container quality-assurance-shell">
        <div className="quality-assurance-header" ref={(el) => (animRefs.current[0] = el)}>
          <div>
            <p className="quality-assurance-kicker mb-0">{t('quality.kicker')}</p>
            <h2 className="quality-assurance-title mb-0" ref={titleRef}>{t('quality.title')}</h2>
          </div>
        </div>

        <div className="quality-assurance-grid">
          {equipmentKeys.map((key, index) => (
            <article
              key={key}
              className="quality-assurance-card"
              ref={(el) => (animRefs.current[1 + index] = el)}
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              <div className="quality-assurance-image-wrap">
                <img src={equipmentImages[index]} alt={t(key)} className="quality-assurance-image" />
              </div>
              <p className="quality-assurance-label mb-0">{t(key)}</p>
            </article>
          ))}
        </div>

        <div className="quality-assurance-badges" ref={(el) => (animRefs.current[9] = el)}>
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
