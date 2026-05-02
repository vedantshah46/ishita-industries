import { useRef, useEffect } from 'react'
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
import anime from 'animejs'

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
  const sectionRef = useRef(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !hasAnimated.current) {
        hasAnimated.current = true
        
        const tl = anime.timeline({
          easing: 'easeOutQuart'
        })

        tl.add({
          targets: '.quality-assurance-header > *',
          translateY: [30, 0],
          opacity: [0, 1],
          duration: 800,
          delay: anime.stagger(150)
        })
        .add({
          targets: '.quality-assurance-card',
          translateY: [40, 0],
          opacity: [0, 1],
          scale: [0.95, 1],
          duration: 1000,
          delay: anime.stagger(100),
          easing: 'easeOutBack(1, .8)'
        }, '-=400')
        .add({
          targets: '.quality-assurance-badge',
          scale: [0.8, 1],
          opacity: [0, 1],
          duration: 800,
          delay: anime.stagger(80)
        }, '-=600')

        observer.disconnect()
      }
    }, { threshold: 0.1 })

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="quality-assurance-section" ref={sectionRef}>
      <div className="container quality-assurance-shell">
        <div className="quality-assurance-header">
          <div>
            <p className="quality-assurance-kicker mb-0">{t('quality.kicker')}</p>
            <h2 className="quality-assurance-title mb-0">{t('quality.title')}</h2>
          </div>
        </div>

        <div className="quality-assurance-grid">
          {equipmentKeys.map((key, index) => (
            <article
              key={key}
              className="quality-assurance-card"
            >
              <div className="quality-assurance-image-wrap">
                <img src={equipmentImages[index]} alt={t(key)} className="quality-assurance-image" />
              </div>
              <p className="quality-assurance-label mb-0">{t(key)}</p>
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
