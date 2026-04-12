import './FastenerStandardsSection.css'
import fsOne from '../../Images/fastner-standard-icon-one.png'
import fsTwo from '../../Images/fastner-standard-icon-two.png'
import fsThree from '../../Images/fastner-standard-icon-three.png'
import fsFour from '../../Images/fastner-standard-icon-four.png'
import fsFive from '../../Images/fastner-standard-icon-five.png'
import fsSix from '../../Images/fastner-standard-icon-six.png'
const standardsData = [
  {
    id: 'din',
    title: 'DIN',
    subtitle: 'Deutsches Institut für Normung',
    description: 'Known for strict mechanical engineering tolerances. The DIN standard remains the global benchmark for high-performance German automotive and industrial hardware.',
    buttonText: 'VIEW DOCUMENTATION',
    icon: (
      <img src={fsOne}/>
    )
  },
  {
    id: 'astm',
    title: 'ASTM',
    subtitle: 'International Testing',
    description: 'The global leader in material testing and classification. ASTM provides the foundational science for tensile strength and carbon composition across aerospace alloys.',
    buttonText: 'VIEW DOCUMENTATION',
    icon: (
           <img src={fsTwo}/>

    )
  },
  {
    id: 'bs',
    title: 'BS',
    subtitle: 'British Standards',
    description: 'Legacy of precision in aerospace and automotive fastening. British Standards maintain rigorous oversight on thread pitch accuracy and corrosive resistance.',
    buttonText: 'VIEW DOCUMENTATION',
    icon: (
            <img src={fsThree}/>

    )
  },
  {
    id: 'jis',
    title: 'JIS',
    subtitle: 'Japanese Industrial',
    description: 'High-performance standards for electronics and machinery. JIS is focused on extreme miniaturization and reliability in consumer technology and robotics.',
    buttonText: 'VIEW DOCUMENTATION',
    icon: (
          <img src={fsFour}/>

    )
  },
  {
    id: 'ansi',
    title: 'ANSI',
    subtitle: 'American National',
    description: 'Foundation of North American structural integrity. ANSI regulates the safety and dimensional standards for heavy infrastructure and construction sectors.',
    buttonText: 'VIEW DOCUMENTATION',
    icon: (
           <img src={fsFive}/>
    )
  },
  {
    id: 'gb',
    title: 'GB',
    subtitle: 'Guobiao Standard',
    description: "The primary standard for the world's largest manufacturing hub. GB facilitates massive scalability while maintaining compliance with international logistics.",
    buttonText: 'VIEW DOCUMENTATION',
    icon: (
      <img src={fsSix}/>
    
    )
  }
]

function FastenerStandardsSection() {
  return (
    <section className="fastener-standards-section">
      <div className="container fastener-shell">
        <div className="fastener-header">
          <div>
            <p className="fastener-kicker mb-0">ENGINEERED FOR PRECISION</p>
            <h2 className="fastener-title mb-0">
              FASTENER
              <span className="d-block">STANDARDS.</span>
            </h2>
          </div>
          <p className="fastener-intro mb-0">
            Built to meet global specifications with unmatched<br />accuracy and reliability.
          </p>
        </div>

        <div className="fastener-table-container">
          <div className="fastener-grid">
            {standardsData.map((item) => (
              <article key={item.id} className="fastener-card">
                <div className="fastener-card-header">
                  <h3 className="fastener-card-title mb-0">{item.title}</h3>
                  <span className="fastener-card-icon" aria-hidden="true">
                    {item.icon}
                  </span>
                </div>
                
                <h4 className="fastener-card-subtitle">{item.subtitle}</h4>
                <p className="fastener-card-desc">{item.description}</p>
                
                <a href="#" className="fastener-card-link">
                  {item.buttonText} <span className="fastener-card-arrow">&#8599;</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FastenerStandardsSection
