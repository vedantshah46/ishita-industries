import './GlobalReachSection.css'
import waterImage from '../../Images/about-us-international-one.png'
import boatImage from '../../Images/about-us-international-two.png'
import map from '../../Images/about-us-international-map.png'
import ausFlag from '../../Images/aus-flag.png'
import canadaFlag from '../../Images/canada-flag.png'
import franceFlag from '../../Images/france-flag.png'
import saudiArabiaFlag from '../../Images/saudi-arabia-flag.png'
import southAfricaFlag from '../../Images/south-africa-flag.png'
import starFlag from '../../Images/star-flag.png'
import usFlag from '../../Images/us-flag.png'
import ukFlag from '../../Images/uk-flag.png'
import uaeFlag from '../../Images/uae-flag.png'
import thaiLandFlag from '../../Images/thailand-flag.png'

const shipStats = [
  {
    id: 1,
    value: '10%',
    title: 'First National Employement',
    desc: 'Decades of industry knowledge enabling efficient production planning, material optimization, and reliable execution.'
  },
  {
    id: 2,
    value: '26+',
    title: 'Client Nationally',
    desc: 'A proven portfolio of precision-engineered components delivered across electrical, automotive, industrial, and infrastructure sectors.'
  },
  {
    id: 3,
    value: '100k+',
    title: 'Tonnes of material Transported Yearly',
    desc: 'A modern production space equipped to support scalable machining, second operations, inspection, and export-ready packaging.'
  }
]

const flagsData = [
  { id: 0, image: usFlag,          alt: 'USA' },
  { id: 1, image: ukFlag,          alt: 'UK' },
  { id: 2, image: thaiLandFlag,    alt: 'Thailand' },
  { id: 3, image: canadaFlag,      alt: 'Canada' },
  { id: 4, image: uaeFlag,         alt: 'UAE' },
  { id: 5, image: ausFlag,         alt: 'Australia' },
  { id: 6, image: southAfricaFlag, alt: 'South Africa' },
  { id: 7, image: starFlag,        alt: 'Star' },
  { id: 8, image: saudiArabiaFlag, alt: 'Saudi Arabia' },
  { id: 9, image: franceFlag,      alt: 'France' },
]

function GlobalReachSection() {
  return (
    <section className="global-reach-section">
      <div className="container global-reach-shell">

        {/* ── Header ── */}
        <div className="global-reach-header">
          <div>
            <p className="global-reach-kicker mb-0">CONNECTING MARKETS WORLDWIDE</p>
            <h2 className="global-reach-title mb-0">
              INTERNATIONAL
              <span className="d-block">REACH.</span>
            </h2>
          </div>
          <p className="global-reach-intro mb-0">
            Expanding across global markets with trusted partnerships, delivering quality
            products that meet international standards and diverse industry needs.
          </p>
        </div>

        {/* ── Banner ── */}
        <div className="global-reach-banner-container">

          {/* Water background — fills entire container */}
          <div className="global-reach-water-bg">
            <img src={waterImage} alt="" className="global-reach-water-image" />
          </div>

          {/* Boat image — sits on top of water, positioned center-top */}
          <div className="global-reach-boat-wrap">
            <img src={boatImage} alt="Cargo Ship" className="global-reach-boat-image" />
          </div>

          {/* Dark overlay for stats readability */}
          <div className="global-reach-banner-overlay"></div>

          {/*  Stats at bottom */}
          <div className="global-reach-banner-stats">
            {shipStats.map((stat) => (
              <article key={stat.id} className="global-reach-stat-card">
                <h3 className="global-reach-stat-value mb-3">{stat.value}</h3>
                <h4 className="global-reach-stat-title mb-3">{stat.title}</h4>
                <p className="global-reach-stat-desc mb-0">{stat.desc}</p>
              </article>
            ))}
          </div>
        </div>

        {/* ── World map + flags ── */}
        <div className="global-reach-world-container">
          <div className="global-reach-map">
            <img src={map} alt="World Map" className="global-reach-map-image" />
          </div>

          <div className="global-reach-world-content">
            <h3 className="global-reach-world-title mb-0">
              We Spread Around<br />
              <strong>The World</strong>
            </h3>
            <div className="global-reach-flags-grid">
              {flagsData.map((flag) => (
                <div key={flag.id} className="global-reach-flag-item">
                  <img src={flag.image} alt={flag.alt} className="global-reach-flag-image" />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default GlobalReachSection