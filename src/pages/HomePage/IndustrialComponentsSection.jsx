import './IndustrialComponentsSection.css'
import electrical from '../../Images/industrial-electrical.png'
import automative from '../../Images/industrial-automotive.png'
import fastener from '../../Images/industrial-fastener.png'
import engineer from '../../Images/industrial-Engineered.png'
import cpvcppr from '../../Images/industrial-CPVC-PPR.png'

const industrialData = [
  {
    title: 'Electrical',
    badges: [
      'Electric Pin',
      'Transformer Parts',
      'Neutral Link',
      'Lugs',
      'Electrical Accesories & Contac Parts',
      'Electrical Fues Parts',
      'Electrical Meter Parts',
      'Electrical Terminal Block & Bar',
      'Electric Parts',
      'Electrical Switch Gear Parts',
    ],
    image: electrical,
  },
  {
    title: 'Automotive',
    badges: [
      'Electric Pin',
      'Transformer Parts',
      'Neutral Link',
      'Lugs',
      'Electrical Accesories & Contac Parts',
      'Electrical Fues Parts',
      'Electrical Meter Parts',
      'Electrical Terminal Block & Bar',
      'Electric Parts',
      'Electrical Switch Gear Parts',
    ],
    image: automative,
  },
  {
    title: 'Fastener',
    badges: [
      'Electric Pin',
      'Transformer Parts',
      'Neutral Link',
      'Lugs',
      'Electrical Accesories & Contac Parts',
      'Electrical Fues Parts',
      'Electrical Meter Parts',
      'Electrical Terminal Block & Bar',
      'Electric Parts',
      'Electrical Switch Gear Parts',
    ],
    image: fastener,
  },
  {
    title: 'Engineered',
    badges: [
      'Electric Pin',
      'Transformer Parts',
      'Neutral Link',
      'Lugs',
      'Electrical Accesories & Contac Parts',
      'Electrical Fues Parts',
      'Electrical Meter Parts',
      'Electrical Terminal Block & Bar',
      'Electric Parts',
      'Electrical Switch Gear Parts',
    ],
    image: engineer,
  },
  {
    title: 'CPVC PPR',
    badges: [
      'Electric Pin',
      'Transformer Parts',
      'Neutral Link',
      'Lugs',
      'Electrical Accesories & Contac Parts',
      'Electrical Fues Parts',
      'Electrical Meter Parts',
      'Electrical Terminal Block & Bar',
      'Electric Parts',
      'Electrical Switch Gear Parts',
    ],
    image: cpvcppr,
  }
]

// Helper function to chunk array
const chunkArray = (array, size) => {
  const result = []
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size))
  }
  return result
}

function IndustrialComponentsSection() {
  return (
    <section className="industrial-components-section">
      <div className="container industrial-components-shell">
        <div className="industrial-components-header">
          <div>
            <p className="industrial-components-kicker mb-0">BUILT FOR PERFORMANCE</p>
            <h2 className="industrial-components-title mb-0">
              INDUSTRIAL
              <span className="d-block">COMPONENTS.</span>
            </h2>
          </div>
          <p className="industrial-components-intro mb-0">
            Engineered for reliability and scalability, our components ensure precision, durability, and consistent quality for diverse industrial applications and global standards.
          </p>
        </div>

        <div className="industrial-components-list">
          {industrialData.map((item, index) => (
            <article key={item.title} className="industrial-components-row">
              <h3 className="industrial-components-row-title mb-0">{item.title}</h3>
              
              <div className="industrial-components-badges">
                {chunkArray(item.badges, 3).map((badgeRow, rowIndex) => (
                  <div key={rowIndex} className="industrial-components-badge-row">
                    {badgeRow.map((badge, idx) => (
                      <span key={idx} className="industrial-components-badge">
                        {badge}
                      </span>
                    ))}
                  </div>
                ))}
              </div>

              <div className="industrial-components-visual">
                <img src={item.image} alt={item.title} className="industrial-components-image" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default IndustrialComponentsSection
