import { useRef } from 'react'
import './CertificationSection.css'
import certiOne   from '../../Images/certificate-one.png'
import certiTwo   from '../../Images/certificate-two.png'
import certiThree from '../../Images/certificate-three.png'
import certiFour  from '../../Images/certificate-four.png'
import certiFive  from '../../Images/certificate-five.png'
import certiSix   from '../../Images/certificate-six.png'
import useScrollAnimation from '../../hooks/useScrollAnimation'
import useCurtainReveal   from '../../hooks/useCurtainReveal'

const certificationsData = [
  { id: 1, name: 'GPCB CERTIFICATE',  image: certiOne   },
  { id: 2, name: 'FACTORY ACT',       image: certiTwo   },
  { id: 3, name: 'QMS CERTIFICATION', image: certiThree },
  { id: 4, name: 'OHS CERTIFICATION', image: certiFour  },
  { id: 5, name: 'ZED CERTIFICATION', image: certiFive  },
  { id: 6, name: 'EMS CERTIFICATION', image: certiSix   },
]

function CertificationSection() {
  const titleRef = useCurtainReveal({ stagger: 0.065 })

  // [0] = header, [1..6] = cert cards
  const animRefs = useRef([])
  useScrollAnimation(animRefs)

  return (
    <section className="certification-section">
      <div className="container cert-shell">
        <div
          className="cert-header"
          ref={(el) => (animRefs.current[0] = el)}
        >
          <div>
            <p className="cert-kicker mb-0">CERTIFIED FOR EXCELLENCE</p>
            <h2 className="cert-title mb-0" ref={titleRef}>CERTIFICATION.</h2>
          </div>
        </div>

        <div className="cert-grid">
          {certificationsData.map((cert, index) => (
            <div
              key={cert.id}
              className="cert-card-wrapper"
              ref={(el) => (animRefs.current[1 + index] = el)}
              style={{ transitionDelay: `${index * 70}ms` }}
            >
              <img src={cert.image} alt={cert.name} className="cert-image" />
              <h3 className="cert-name mb-0">{cert.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CertificationSection
