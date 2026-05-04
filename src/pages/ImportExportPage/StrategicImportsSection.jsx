import { useRef } from 'react'
import './StrategicImportsSection.css'
import mapImage from '../../Images/about-us-international-map.png' 
import flagUSA from '../../Images/us-flag.png'
import flagSaudi from '../../Images/saudi-arabia-flag.png'
import flagUK from '../../Images/uk-flag.png'
import flagFrance from '../../Images/france-flag.png'
import flagUAE from '../../Images/uae-flag.png'
import flagEU from '../../Images/star-flag.png'
import flagThai from '../../Images/thailand-flag.png'
import flagCanada from '../../Images/canada-flag.png'
import useScrollAnimation from '../../hooks/useScrollAnimation'

function StrategicImportsSection() {
  const flags = [flagUSA, flagSaudi, flagUK, flagFrance, flagUAE, flagEU, flagThai, flagCanada];
  const animRefs = useRef([])
  useScrollAnimation(animRefs)

  return (
    <section className="strategic-imports-section">
      <div className="container strategic-shell">
        <div>
          <h2 
            className="strategic-title"
            ref={(el) => (animRefs.current[0] = el)}
          >
            Strategic Imports
          </h2>
          <p 
            className="strategic-subtitle"
            ref={(el) => (animRefs.current[1] = el)}
          >
            Securing quality materials worldwide
          </p>
        </div>
        
        <div 
          className="strategic-map-container"
          ref={(el) => (animRefs.current[2] = el)}
          style={{ transitionDelay: '150ms' }}
        >
          <img src={mapImage} alt="World Map" className="strategic-map" />
        </div>

        <p 
          className="strategic-text"
          ref={(el) => (animRefs.current[3] = el)}
        >
          We are among the select manufacturers in Jamnagar with a dedicated in-house raw material sourcing system. Our facility directly imports premium grade, E-con (European compliant) brass scrap &amp; other non-ferrous materials from the USA, Europe, and the UK, ensuring consistent quality and reliable production standards.
        </p>
      </div>

      <div className="container spread-shell">
        <h2 
          className="spread-title"
          ref={(el) => (animRefs.current[4] = el)}
        >
          We Spread Around <strong>The World</strong>
        </h2>
        
        <div className="flags-container">
          {flags.map((flag, idx) => (
            <img 
              key={idx} 
              src={flag} 
              alt="Country Flag" 
              className="country-flag" 
              ref={(el) => (animRefs.current[5 + idx] = el)}
              style={{ transitionDelay: `${idx * 50}ms` }}
            />
          ))}
        </div>

        <p 
          className="spread-text"
          ref={(el) => (animRefs.current[5 + flags.length] = el)}
        >
          We have successfully carved for ourselves a solid place in the global marketplace and have explored various markets for our products. Backed by an in-depth understanding of the industry and its dynamics, we aim to be a supply chain partner to businesses worldwide across a wide cross-section of domains, buyers across the globe. We are ranked as a supporting Manufacturer, Exporter and Supplier in the international market delivering premium quality brass Precision Turned Components &amp; Accessories. We export Extrusion Brass Alloys, Rods, Hollow Rods &amp; Sections, Profile &amp; Sections as per International Standards like IS, BS, DIN, JIS, ASTM, GOST &amp; Other International Standards. Our targeted prospects are from the root levels, becoming synonymous with Precision globally &amp; Accessories. We export to the developed markets of the Middle East, South East Asia, U.K., U.S.A., Europe etc.
        </p>
      </div>
    </section>
  )
}

export default StrategicImportsSection
