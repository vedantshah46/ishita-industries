import { useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import './CertificationSection.css'
import certiOne   from '../../Images/certificate-one.png'
import certiTwo   from '../../Images/certificate-two.png'
import certiThree from '../../Images/certificate-three.png'
import certiFour  from '../../Images/certificate-four.png'
import certiFive  from '../../Images/certificate-five.png'
import certiSix   from '../../Images/certificate-six.png'
import anime from 'animejs'

const certImages = [certiOne, certiTwo, certiThree, certiFour, certiFive, certiSix]
const certKeys   = ['certs.cert_1', 'certs.cert_2', 'certs.cert_3', 'certs.cert_4', 'certs.cert_5', 'certs.cert_6']

function CertificationSection() {
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
          targets: '.cert-header > *',
          translateY: [30, 0],
          opacity: [0, 1],
          duration: 800,
          delay: anime.stagger(150)
        })
        .add({
          targets: '.cert-card-wrapper',
          scale: [0.92, 1],
          opacity: [0, 1],
          duration: 1000,
          delay: anime.stagger(100),
          easing: 'easeOutBack(1, .8)'
        }, '-=400')

        observer.disconnect()
      }
    }, { threshold: 0.1 })

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="certification-section" ref={sectionRef}>
      <div className="container cert-shell">
        <div className="cert-header">
          <div>
            <p className="cert-kicker mb-0">{t('certs.kicker')}</p>
            <h2 className="cert-title mb-0">{t('certs.title')}</h2>
          </div>
        </div>

        <div className="cert-grid">
          {certKeys.map((key, index) => (
            <div
              key={key}
              className="cert-card-wrapper"
            >
              <img src={certImages[index]} alt={t(key)} className="cert-image" />
              <h3 className="cert-name mb-0">{t(key)}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CertificationSection
