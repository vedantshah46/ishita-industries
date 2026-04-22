import { useRef } from 'react'
import './IndustrialComponentsSection.css'
import electrical from '../../Images/industrial-electrical.png'
import automative  from '../../Images/industrial-automotive.png'
import fastener    from '../../Images/industrial-fastener.png'
import engineer    from '../../Images/industrial-Engineered.png'
import cpvcppr     from '../../Images/industrial-CPVC-PPR.png'
import useScrollAnimation from '../../hooks/useScrollAnimation'
import useCurtainReveal   from '../../hooks/useCurtainReveal'

const industrialData = [
  {
    title: 'Electrical',
    badges: [
      'Electric Pin', 'Transformer Parts', 'Neutral Link', 'Lugs',
      'Electrical Accesories & Contac Parts', 'Electrical Fues Parts',
      'Electrical Meter Parts', 'Electrical Terminal Block & Bar',
      'Electric Parts', 'Electrical Switch Gear Parts',
    ],
    image: electrical,
  },
  {
    title: 'Automotive',
    badges: [
      'Electric Pin', 'Transformer Parts', 'Neutral Link', 'Lugs',
      'Electrical Accesories & Contac Parts', 'Electrical Fues Parts',
      'Electrical Meter Parts', 'Electrical Terminal Block & Bar',
      'Electric Parts', 'Electrical Switch Gear Parts',
    ],
    image: automative,
  },
  {
    title: 'Fastener',
    badges: [
      'Electric Pin', 'Transformer Parts', 'Neutral Link', 'Lugs',
      'Electrical Accesories & Contac Parts', 'Electrical Fues Parts',
      'Electrical Meter Parts', 'Electrical Terminal Block & Bar',
      'Electric Parts', 'Electrical Switch Gear Parts',
    ],
    image: fastener,
  },
  {
    title: 'Engineered',
    badges: [
      'Electric Pin', 'Transformer Parts', 'Neutral Link', 'Lugs',
      'Electrical Accesories & Contac Parts', 'Electrical Fues Parts',
      'Electrical Meter Parts', 'Electrical Terminal Block & Bar',
      'Electric Parts', 'Electrical Switch Gear Parts',
    ],
    image: engineer,
  },
  {
    title: 'CPVC PPR',
    badges: [
      'Electric Pin', 'Transformer Parts', 'Neutral Link', 'Lugs',
      'Electrical Accesories & Contac Parts', 'Electrical Fues Parts',
      'Electrical Meter Parts', 'Electrical Terminal Block & Bar',
      'Electric Parts', 'Electrical Switch Gear Parts',
    ],
    image: cpvcppr,
  },
]

const chunkArray = (array, size) => {
  const result = []
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size))
  }
  return result
}

function IndustrialComponentsSection() {
  // GSAP curtain reveal on the section heading
  const titleRef = useCurtainReveal({ stagger: 0.07 })

  // Shared hook for row fade-ups
  const rowRefs = useRef([])
  useScrollAnimation(rowRefs)

  return (
    <section className="industrial-components-section">
      <div className="container industrial-components-shell">
        <div className="industrial-components-header">
          <div>
            <p className="industrial-components-kicker mb-0">BUILT FOR PERFORMANCE</p>
            <h2 className="industrial-components-title mb-0" ref={titleRef}>
              INDUSTRIAL COMPONENTS.
            </h2>
          </div>
        </div>

        <div className="industrial-components-list">
          {industrialData.map((item, index) => (
            <article
              key={item.title}
              className="industrial-components-row"
              ref={(el) => (rowRefs.current[index] = el)}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <h3 className="industrial-components-row-title mb-0">{item.title}</h3>

              <div className="industrial-components-badges">
                {item.badges.map((badge, idx) => (
                  <span key={idx} className="industrial-components-badge">
                    {badge}
                  </span>
                ))}
              </div>

              <div className="industrial-components-visual">
                <img
                  src={item.image}
                  alt={item.title}
                  className="industrial-components-image"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default IndustrialComponentsSection
