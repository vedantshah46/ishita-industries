import { useRef } from 'react'
import './QualityAssuranceSection.css'
import vernierImage  from '../../Images/quality-assurance-one.png'
import visionImage   from '../../Images/quality-assurance-two.png'
import sortingImage  from '../../Images/quality-assurance-three.png'
import hardnessImage from '../../Images/quality-assurance-four.png'
import roughnessImage from '../../Images/quality-assurance-six.png'
import threadImage   from '../../Images/quality-assurance-seven.png'
import heightImage   from '../../Images/quality-assurance-eight.png'
import rohsLogo      from '../../Images/iso-certificate-one.png'
import reachLogo     from '../../Images/iso-certificate-two.png'
import zegLogo       from '../../Images/iso-certificate-three.png'
import tuvLogo       from '../../Images/iso-certificate-four.png'
import ppapLogo      from '../../Images/iso-certificate-five.png'
import ipqaLogo      from '../../Images/iso-certificate-seven.png'
import sevenQcLogo   from '../../Images/iso-certificate-six.png'
import useScrollAnimation from '../../hooks/useScrollAnimation'
import useCurtainReveal   from '../../hooks/useCurtainReveal'

const equipmentCards = [
  { title: 'VERNIER CALIPERS & MICRO METER',  image: vernierImage   },
  { title: 'VISION MEASURING MACHINE',         image: visionImage    },
  { title: 'ONE PCS AUTO SORTING MACHINE',     image: sortingImage   },
  { title: 'AUTO SHORTING MACHINE',            image: visionImage    },
  { title: 'HARDNESS TESTER',                  image: hardnessImage  },
  { title: 'SURFACE ROUGHNESS TESTER',         image: roughnessImage },
  { title: 'THREAD GAUGES',                    image: threadImage    },
  { title: 'HEIGHT GAUGES',                    image: heightImage    },
]

const assuranceBadges = [
  { title: 'ROHS',  image: rohsLogo    },
  { title: 'REACH', image: reachLogo   },
  { title: 'ZED',   image: zegLogo     },
  { title: 'TUV',   image: tuvLogo     },
  { title: 'PPAP',  image: ppapLogo    },
  { title: '7QC',   image: sevenQcLogo },
  { title: 'IPQA',  image: ipqaLogo    },
]

function QualityAssuranceSection() {
  const titleRef = useCurtainReveal({ stagger: 0.065 })

  // [0] = header, [1..8] = equipment cards, [9] = badges row
  const animRefs = useRef([])
  useScrollAnimation(animRefs)

  return (
    <section className="quality-assurance-section">
      <div className="container quality-assurance-shell">
        <div
          className="quality-assurance-header"
          ref={(el) => (animRefs.current[0] = el)}
        >
          <div>
            <p className="quality-assurance-kicker mb-0">PRECISION YOU CAN TRUST</p>
            <h2 className="quality-assurance-title mb-0" ref={titleRef}>
              QUALITY
              <span className="d-block">ASSURANCE.</span>
            </h2>
          </div>
        </div>

        <div className="quality-assurance-grid">
          {equipmentCards.map((card, index) => (
            <article
              key={card.title}
              className="quality-assurance-card"
              ref={(el) => (animRefs.current[1 + index] = el)}
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              <div className="quality-assurance-image-wrap">
                <img src={card.image} alt={card.title} className="quality-assurance-image" />
              </div>
              <p className="quality-assurance-label mb-0">{card.title}</p>
            </article>
          ))}
        </div>

        <div
          className="quality-assurance-badges"
          ref={(el) => (animRefs.current[9] = el)}
        >
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
