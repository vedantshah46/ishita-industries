import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import './GlobalReachSection.css'
import waterImage      from '../../Images/about-us-international-one.png'
import boatImage       from '../../Images/about-us-international-two.png'
import map             from '../../Images/about-us-international-map.png'
import ausFlag         from '../../Images/aus-flag.png'
import canadaFlag      from '../../Images/canada-flag.png'
import franceFlag      from '../../Images/france-flag.png'
import saudiArabiaFlag from '../../Images/saudi-arabia-flag.png'
import southAfricaFlag from '../../Images/south-africa-flag.png'
import starFlag        from '../../Images/star-flag.png'
import usFlag          from '../../Images/us-flag.png'
import ukFlag          from '../../Images/uk-flag.png'
import uaeFlag         from '../../Images/uae-flag.png'
import thaiLandFlag    from '../../Images/thailand-flag.png'
import useScrollAnimation from '../../hooks/useScrollAnimation'
import useCurtainReveal   from '../../hooks/useCurtainReveal'

const shipStats = [
  { id: 1, valueKey: 'global.stat1_value', titleKey: 'global.stat1_label', descKey: 'global.stat1_desc' },
  { id: 2, valueKey: 'global.stat2_value', titleKey: 'global.stat2_label', descKey: 'global.stat2_desc' },
  { id: 3, valueKey: 'global.stat3_value', titleKey: 'global.stat3_label', descKey: 'global.stat3_desc' },
]

const flagsData = [
  { id: 0, image: usFlag,          alt: 'USA'          },
  { id: 1, image: ukFlag,          alt: 'UK'           },
  { id: 2, image: thaiLandFlag,    alt: 'Thailand'     },
  { id: 3, image: canadaFlag,      alt: 'Canada'       },
  { id: 4, image: uaeFlag,         alt: 'UAE'          },
  { id: 5, image: ausFlag,         alt: 'Australia'    },
  { id: 6, image: southAfricaFlag, alt: 'South Africa' },
  { id: 7, image: starFlag,        alt: 'Star'         },
  { id: 8, image: saudiArabiaFlag, alt: 'Saudi Arabia' },
  { id: 9, image: franceFlag,      alt: 'France'       },
]

function GlobalReachSection() {
  const { t } = useTranslation()
  const titleRef = useCurtainReveal({ stagger: 0.065 })
  const animRefs = useRef([])
  useScrollAnimation(animRefs)

  return (
    <section className="global-reach-section">
      <div className="container global-reach-shell">

        <div className="global-reach-header" ref={(el) => (animRefs.current[0] = el)}>
          <div>
            <p className="global-reach-kicker mb-0">{t('global.kicker')}</p>
            <h2 className="global-reach-title mb-0" ref={titleRef}>{t('global.title')}</h2>
          </div>
        </div>

        <div className="global-reach-banner-container" ref={(el) => (animRefs.current[1] = el)}>
          <div className="global-reach-water-bg">
            <img src={waterImage} alt="" className="global-reach-water-image" />
          </div>
          <div className="global-reach-boat-wrap">
            <img src={boatImage} alt="Cargo Ship" className="global-reach-boat-image" />
          </div>
          <div className="global-reach-banner-overlay" />
          <div className="global-reach-banner-stats">
            {shipStats.map((stat) => (
              <article key={stat.id} className="global-reach-stat-card">
                <h3 className="global-reach-stat-value mb-3">{t(stat.valueKey)}</h3>
                <h4 className="global-reach-stat-title mb-3">{t(stat.titleKey)}</h4>
                <p className="global-reach-stat-desc mb-0">{t(stat.descKey)}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="global-reach-world-container" ref={(el) => (animRefs.current[2] = el)}>
          <div className="global-reach-map">
            <img src={map} alt="World Map" className="global-reach-map-image" />
          </div>
          <div className="global-reach-world-content">
            <h3 className="global-reach-world-title mb-0">
              {t('global.spread_title')}<br />
              <strong>{t('global.spread_sub')}</strong>
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
