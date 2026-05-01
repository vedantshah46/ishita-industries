import { useRef, useEffect } from 'react'
import './CapabilitiesSection.css'
import capVisualImage from '../../Images/manufacturing-infrastructure.png'
import metalWeWork from '../../Images/metal-we-work.png'
import machineIcon from '../../Images/machining-capabilities-icon.png'
import settingBgIcon from '../../Images/setting-bg-icon.png'
import anime from 'animejs'
import SplitType from 'split-type'

const metals = [
  "Copper",
  "Brass",
  "Bronze",
  "Aluminium",
  "Zinc",
  "Mild Steel",
  "Stainless Steel",
  "Carbon Steel",
  "Alloy Steel"
]

const finishingProcesses = [
  'Electro - Plating',
  'Electrophoretic Lacquering',
  'Electro - Less Plating',
  'E-Coating',
  'Zinc Plating',
  'Passivation',
  'Oxidising',
  'Cleaning & Deburring',
]

const mainProcesses = [
  { id: '01', name: 'Casting' },
  { id: '02', name: 'Extrusion' },
  { id: '03', name: 'Turning' },
  { id: '04', name: 'Forging' },
  { id: '05', name: 'Stamping' },
  { id: '06', name: 'Broaching' },
  { id: '07', name: 'Milling' },
  { id: '08', name: 'Knuring' },
  { id: '09', name: 'Threading' },
]

function CapabilitiesSectionNew() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    let titleSplit = null;
    if (titleRef.current) {
      titleSplit = new SplitType(titleRef.current, { types: 'chars' });
      anime.set(titleSplit.chars, { opacity: 0, translateY: 20 });
    }

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !hasAnimated.current) {
        hasAnimated.current = true
        
        const tl = anime.timeline({
          easing: 'easeOutQuart'
        })

        tl.add({
          targets: '.capabilities-kicker',
          translateY: [30, 0],
          opacity: [0, 1],
          duration: 800,
        })

        if (titleSplit && titleSplit.chars) {
          tl.add({
            targets: titleRef.current,
            opacity: 1,
            duration: 1
          }, '-=800')
          .add({
            targets: titleSplit.chars,
            opacity: [0, 1],
            translateY: [20, 0],
            duration: 800,
            delay: anime.stagger(15),
            easing: 'spring(1, 80, 10, 0)'
          }, '-=800')
        }

        tl.add({
          targets: '.cap-card',
          translateY: [40, 0],
          opacity: [0, 1],
          scale: [0.98, 1],
          duration: 1000,
          delay: anime.stagger(100),
          easing: 'easeOutBack'
        }, '-=600')
        .add({
          targets: '.process-undertake-wrapper',
          opacity: [0, 1],
          translateY: [30, 0],
          duration: 800
        }, '-=600')

        observer.disconnect()
      }
    }, { threshold: 0.05 })

    if (sectionRef.current) observer.observe(sectionRef.current)

    return () => {
      observer.disconnect()
      if (titleSplit) titleSplit.revert()
    }
  }, [])

  return (
    <section className="capabilities-section" ref={sectionRef}>
      <div className="container capabilities-shell">

        <div className="capabilities-header">
          <div>
            <p className="capabilities-kicker mb-0">CORE ECOSYSTEM</p>
            <h2 className="capabilities-title mb-0" ref={titleRef}>
              Advanced Manufacturing Capabilities
            </h2>
          </div>
        </div>

        <div className="capabilities-grid">
          <div className="capabilities-row capabilities-row-top">
            <article className="cap-card cap-card-machining">
              <div className="cap-card-topline">
                <img src={machineIcon} alt="" />
                <span>UNIT 04 / OPS</span>
              </div>

              <h3 className="cap-card-title mb-0">Machining Capabilities</h3>

              <div className="cap-stats-grid">
                <div className="cap-stat">
                  <span className="cap-stat-label">SIZE WE HANDLE</span>
                  <strong className="cap-stat-value">1.50mm to 320mm</strong>
                </div>
                <div className="cap-stat">
                  <span className="cap-stat-label">SURFACE ROUGHNESS</span>
                  <strong className="cap-stat-value">Upto Ra 0.8 mm</strong>
                </div>

                <div className="cap-stats-divider" aria-hidden="true" />

                <div className="cap-stat">
                  <span className="cap-stat-label">LENGTH WE HANDLE</span>
                  <strong className="cap-stat-value">Turning Length = 300mm</strong>
                </div>
                <div className="cap-stat">
                  <span className="cap-stat-label">TOLERANCE CAPABILITY</span>
                  <strong className="cap-stat-value">Up to 0.1mm</strong>
                </div>
              </div>

              <div className="cap-card-mark" aria-hidden="true">
                <img src={settingBgIcon} alt="" />
              </div>
            </article>

            <article className="cap-card cap-card-visual">
              <div className="cap-visual-image" aria-hidden="true">
                <img src={capVisualImage} alt="Manufacturing Infrastructure" />
              </div>

              <div className="cap-visual-overlay">
                <h3 className="cap-visual-title mb-0">
                  Manufacturing
                  <span className="d-block">Infrastructure</span>
                </h3>
                <p className="cap-visual-copy mb-0">
                  Engineered for precision, optimized for efficiency, and built to meet global manufacturing standards.
                </p>
                <div className="cap-visual-meta">
                  <span>ISO 9001</span>
                  <span>24/ AUTO</span>
                </div>
              </div>
            </article>
          </div>

          <div className="capabilities-row capabilities-row-bottom">
            <article className="cap-card cap-card-metals">
              <div className="cap-card-section-label">
                <img src={metalWeWork} alt="" className='metal-we-work-img' />
                <span>METAL WE WORK</span>
              </div>

              <div className="cap-metals-grid">
                {metals.map((metal) => (
                  <div key={metal} className="cap-metal-item">
                    <span className="cap-metal-bullet" aria-hidden="true" />
                    <span>{metal}</span>
                  </div>
                ))}
              </div>
            </article>

            <article className="cap-card cap-card-finishing">
              <h3 className="cap-finishing-title mb-0">SURFACE FINISHING</h3>

              <div className="cap-finishing-list">
                {finishingProcesses.map((process, index) => (
                  <div key={process} className="cap-finishing-item">
                    <p className="cap-finishing-name mb-0">{process}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>

        {/* Process We Undertake Box */}
        <div className="process-undertake-wrapper">
          <h2 className="process-main-title">PROCESS WE UNDERTAKE</h2>
          <div className="process-grid">
            {mainProcesses.map((item) => (
              <div key={item.id} className="process-item">
                <span className="process-id">PROCESS {item.id}</span>
                <h3 className="process-name">{item.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CapabilitiesSectionNew
