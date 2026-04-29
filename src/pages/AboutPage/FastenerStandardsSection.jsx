import { useRef } from 'react'
import './FastenerStandardsSection.css'
import fsOne from '../../Images/fastner-standard-one.png'
import fsTwo from '../../Images/fastner-standard-two.png'
import fsThree from '../../Images/fastner-standard-three.png'
import fsFour from '../../Images/fastner-standard-four.png'
import fsFive from '../../Images/fastner-standard-five.png'
import fsSix from '../../Images/fastner-standard-six.png'
import useScrollAnimation from '../../hooks/useScrollAnimation'

const standardsData = [
  {
    id: 'din',
    label: 'DIN Standard',
    image: fsOne,
    alt: 'DIN Standard logo',
  },
  {
    id: 'astm',
    label: 'ASTM Standard',
    image: fsTwo,
    alt: 'ASTM Standard logo',
  },
  {
    id: 'bs',
    label: 'BS Standard',
    image: fsThree,
    alt: 'BS Standard logo',
  },
  {
    id: 'jis',
    label: 'JIS Standard',
    image: fsFour,
    alt: 'JIS Standard logo',
  },
  {
    id: 'ansi',
    label: 'ANSI Standard',
    image: fsFive,
    alt: 'ANSI Standard logo',
  },
  {
    id: 'gb',
    label: 'GB Standard',
    image: fsSix,
    alt: 'GB Standard logo',
  },
]

function FastenerStandardsSection() {
  const animRefs = useRef([])
  useScrollAnimation(animRefs)

  return (
    <section className="fastener-standards-section">
      <div className="container fastener-shell">
        <div 
          className="fastener-header"
          ref={(el) => (animRefs.current[0] = el)}
        >
          <div>
            <p className="fastener-kicker mb-0">ENGINEERED FOR PRECISION</p>
            <h2 className="fastener-title mb-0">FASTENER STANDARDS.</h2>
          </div>
        </div>

        <div className="fastener-table-container">
          <div className="fastener-grid">
            {standardsData.map((item, index) => (
              <article 
                key={item.id} 
                className="fastener-card"
                ref={(el) => (animRefs.current[1 + index] = el)}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="fastener-card-logo">
                  <img src={item.image} alt={item.alt} />
                </div>
                <span className="fastener-card-label">{item.label}</span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FastenerStandardsSection