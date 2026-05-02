import { useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import './ManufacturingInfrastructureSection.css'
import infrastructureImage from '../../Images/about-manufacturing-infrastructure.png'
import contactUsLogo from '../../Images/homepage-contact-us-logo.png'
import checkboxIcon from '../../Images/about-manufacture-checkbox.png'
import anime from 'animejs'

const machineKeys = [
  'mfg_infra.machine_1', 'mfg_infra.machine_2', 'mfg_infra.machine_3',
  'mfg_infra.machine_4', 'mfg_infra.machine_5', 'mfg_infra.machine_6',
  'mfg_infra.machine_7', 'mfg_infra.machine_8', 'mfg_infra.machine_9',
]

const infraStatKeys   = ['mfg_infra.stat1_label', 'mfg_infra.stat2_label', 'mfg_infra.stat3_label', 'mfg_infra.stat4_label']

function ManufacturingInfrastructureSection() {
  const { t } = useTranslation()
  const sectionRef = useRef(null)
  const statRefs = useRef([])
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !hasAnimated.current) {
        hasAnimated.current = true
        
        const tl = anime.timeline({
          easing: 'easeOutQuart'
        })

        const counterObj = { val0: 0, val1: 0, val2: 0, val3: 0 }

        tl.add({
          targets: '.about-infra-header-wrap > *',
          translateY: [30, 0],
          opacity: [0, 1],
          duration: 800,
          delay: anime.stagger(150)
        })
        .add({
          targets: '.about-infra-visual-card',
          scale: [0.98, 1],
          opacity: [0, 1],
          duration: 1000,
          easing: 'easeOutExpo'
        }, '-=400')
        .add({
          targets: '.about-infra-stat-card',
          translateY: [30, 0],
          opacity: [0, 1],
          duration: 800,
          delay: anime.stagger(100),
          easing: 'easeOutQuad'
        }, '-=600')
        .add({
          targets: counterObj,
          val0: 22000,
          val1: 16000,
          val2: 10000,
          val3: 1000,
          duration: 2500,
          easing: 'easeOutExpo',
          update: () => {
            if (statRefs.current[0]) statRefs.current[0].innerText = Math.round(counterObj.val0).toLocaleString() + '+'
            if (statRefs.current[1]) statRefs.current[1].innerText = Math.round(counterObj.val1).toLocaleString() + '+'
            if (statRefs.current[2]) statRefs.current[2].innerText = Math.round(counterObj.val2).toLocaleString() + '+'
            if (statRefs.current[3]) statRefs.current[3].innerText = Math.round(counterObj.val3) + '+'
          }
        }, '-=1000')

        observer.disconnect()
      }
    }, { threshold: 0.1 })

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="about-infra-section" ref={sectionRef}>
      <div className="about-infra-header-wrap">
        <p className="about-infra-kicker mb-0">{t('mfg_infra.kicker')}</p>
        <h2 className="about-infra-title mb-0">{t('mfg_infra.title')}</h2>
      </div>
      <div className="container about-infra-shell">
        <div className="about-infra-visual-card">
          <img src={infrastructureImage} alt="Manufacturing infrastructure" className="about-infra-image" />
          <div className="about-infra-overlay">
            <div aria-hidden="true"><img src={contactUsLogo} alt="Ishita Industries Logo" /></div>
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

        <div className="about-infra-stats">
          {infraStatKeys.map((key, i) => (
            <article key={i} className="about-infra-stat-card">
              <p 
                className="about-infra-stat-value mb-0"
                ref={el => statRefs.current[i] = el}
              >
                0+
              </p>
              <p className="about-infra-stat-label mb-0">{t(key)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ManufacturingInfrastructureSection
