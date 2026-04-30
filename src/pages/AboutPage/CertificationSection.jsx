import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import './CertificationSection.css'
import certiOne   from '../../Images/certificate-one.png'
import certiTwo   from '../../Images/certificate-two.png'
import certiThree from '../../Images/certificate-three.png'
import certiFour  from '../../Images/certificate-four.png'
import certiFive  from '../../Images/certificate-five.png'
import certiSix   from '../../Images/certificate-six.png'
import useScrollAnimation from '../../hooks/useScrollAnimation'
import useCurtainReveal   from '../../hooks/useCurtainReveal'

const certImages = [certiOne, certiTwo, certiThree, certiFour, certiFive, certiSix]
const certKeys   = ['certs.cert_1', 'certs.cert_2', 'certs.cert_3', 'certs.cert_4', 'certs.cert_5', 'certs.cert_6']

function CertificationSection() {
  const { t } = useTranslation()
  const titleRef = useCurtainReveal({ stagger: 0.065 })
  const animRefs = useRef([])
  useScrollAnimation(animRefs)

  return (
    <section className="certification-section">
      <div className="container cert-shell">
        <div className="cert-header" ref={(el) => (animRefs.current[0] = el)}>
          <div>
            <p className="cert-kicker mb-0">{t('certs.kicker')}</p>
            <h2 className="cert-title mb-0" ref={titleRef}>{t('certs.title')}</h2>
          </div>
        </div>

        <div className="cert-grid">
          {certKeys.map((key, index) => (
            <div
              key={key}
              className="cert-card-wrapper"
              ref={(el) => (animRefs.current[1 + index] = el)}
              style={{ transitionDelay: `${index * 70}ms` }}
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
