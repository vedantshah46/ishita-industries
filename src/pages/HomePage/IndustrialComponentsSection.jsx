import { useRef, useEffect } from 'react'
import './IndustrialComponentsSection.css'
import electrical from '../../Images/industrial-electrical.png'
import automative from '../../Images/industrial-automotive.png'
import fastener from '../../Images/industrial-fastener.png'
import engineer from '../../Images/industrial-Engineered.png'
import cpvcppr from '../../Images/industrial-CPVC-PPR.png'
import useCurtainReveal from '../../hooks/useCurtainReveal'
import anime from 'animejs'

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

function IndustrialComponentsSection() {
  const titleRef = useCurtainReveal({ stagger: 0.07 })
  const rowRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target

            // Unobserve to run only once
            observer.unobserve(el)

            const imgEl = el.querySelector('.industrial-components-image')

            // Row slide up
            anime({
              targets: el,
              translateY: [60, 0],
              opacity: [0, 1],
              duration: 800,
              easing: 'easeOutQuart'
            })

            // Image scale down parallax-like entry
            if (imgEl) {
              anime({
                targets: imgEl,
                scale: [1.2, 1],
                duration: 1200,
                easing: 'easeOutCubic'
              })
            }
          }
        })
      },
      { threshold: 0.15 }
    )

    rowRefs.current.forEach((row) => {
      if (row) observer.observe(row)
    })

    return () => observer.disconnect()
  }, [])

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
            >
              <h3 className="industrial-components-row-title mb-0">{item.title}</h3>

              <div className="industrial-components-badges">
                {item.badges.map((badge, idx) => (
                  <span key={idx} className="industrial-components-badge">
                    {badge}
                  </span>
                ))}
              </div>

              <div className="industrial-components-visual" style={{ overflow: 'hidden' }}>
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
