import { useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import './InternationalReachSection.css'
import worldMap from '../../Images/world-map.png'
import anime from 'animejs'
import SplitType from 'split-type'

function InternationalReachSection() {
  const { t } = useTranslation()
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    let titleSplit = null
    if (titleRef.current) {
      titleSplit = new SplitType(titleRef.current, { types: 'chars' })
      anime.set(titleSplit.chars, { opacity: 0, translateY: 20 })
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true

          const tl = anime.timeline({
            easing: 'easeOutQuart'
          })

          tl.add({
            targets: '.reach-kicker',
            translateY: [30, 0],
            opacity: [0, 1],
            duration: 800,
          })

          if (titleSplit && titleSplit.chars) {
            tl.add({
              targets: titleSplit.chars,
              opacity: [0, 1],
              translateY: [20, 0],
              duration: 800,
              delay: anime.stagger(15),
              easing: 'spring(1, 80, 10, 0)'
            }, '-=600')
          }

          tl.add({
            targets: '.reach-map-container',
            translateY: [40, 0],
            opacity: [0, 1],
            scale: [0.98, 1],
            duration: 1200,
            easing: 'easeOutExpo'
          }, '-=600')

          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      observer.disconnect()
      if (titleSplit) titleSplit.revert()
    }
  }, [])

  return (
    <section className="international-reach-section" ref={sectionRef}>
      <div className="container reach-shell">
        <div className="reach-header">
          <div>
            <p className="reach-kicker mb-0">{t('intl_reach.kicker')}</p>
            <h2 className="reach-title mb-0" ref={titleRef}>{t('intl_reach.title')}</h2>
          </div>
        </div>
        <div className="reach-map-container">
          <img src={worldMap} alt="International Reach Map" className="reach-map-image" />
        </div>
      </div>
    </section>
  )
}

export default InternationalReachSection
