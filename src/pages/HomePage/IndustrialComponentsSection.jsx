import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './IndustrialComponentsSection.css'
import electrical from '../../Images/industrial-electrical.png'
import automative from '../../Images/automotive.png'
import fastener from '../../Images/fastner.png'
import engineer from '../../Images/engineered.png'
import cpvcppr from '../../Images/cpvc-ppr.png'
import useCurtainReveal from '../../hooks/useCurtainReveal'
import anime from 'animejs'

const industrialData = [
  {
    slug: 'electric',
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
    slug: 'automotive',
    title: 'Automotive',
    badges: ['Auto Parts'],
    image: automative,
  },
  {
    slug: 'fastner',
    title: 'Fastener',
    badges: [
      'Anchors', 'Inserts', 'Screw', 'Spacers', 'Stud', 'Nut', 'Bolt', 'Washer'
    ],
    image: fastener,
  },
  {
    slug: 'engineering',
    title: 'Engineered',
    badges: [
      'Precision Engineering Component', 'Pipe Fitting', 'Compression Fittings',
      'Garden Hose Barbs', 'Hose Barbs', 'JIC 37 Flare Fitting',
      'BS 746 Fitting LPG Regulator & Meter Parts', 'SAE 45 Flare Fitting',
      'HVAC Components', 'Air Break Hose Ends',
      'Solenoid Valve Parts', 'Agriculture Components', 'Welding Accessories & Solenoid Valve Parts'
    ],
    image: engineer,
  },
  {
    slug: 'Sanitary-Fitting',
    title: 'Sanitary Fitting',
    badges: [
      'Moduling Inserts', 'Sanitary Fitting'
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
            <Link
              to={`/product/industrial/${item.slug}`}
              key={item.title}
              className="industrial-components-row"
              ref={(el) => (rowRefs.current[index] = el)}
              style={{ textDecoration: 'none' }}
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default IndustrialComponentsSection
