import { useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import './MeetOurTeamSection.css'
import hiteshImage  from '../../Images/hitesh.png'
import raviImage    from '../../Images/ravi.png'
import chintanImage from '../../Images/chintan.png'
import rajImage     from '../../Images/raj.png'
import linkedIn from '../../Images/meet-out-team-linkedin.png'
import anime from 'animejs'

const teamMembers = [
  { name: 'Hitesh Ajudiya', roleKey: 'team.role_finance',    image: hiteshImage  },
  { name: 'Ravi Patel',     roleKey: 'team.role_marketing',  image: raviImage    },
  { name: 'Chintan Patel',  roleKey: 'team.role_quality',    image: chintanImage },
  { name: 'Raj Ajudiya',    roleKey: 'team.role_production', image: rajImage     },
]

function MeetOurTeamSection() {
  const { t } = useTranslation()
  const sectionRef = useRef(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !hasAnimated.current) {
        hasAnimated.current = true
        
        const tl = anime.timeline({
          easing: 'easeOutQuart'
        })

        tl.add({
          targets: '.meet-team-header > *',
          translateY: [30, 0],
          opacity: [0, 1],
          duration: 800,
          delay: anime.stagger(150)
        })
        .add({
          targets: '.team-card',
          translateY: [40, 0],
          opacity: [0, 1],
          scale: [0.92, 1],
          duration: 1000,
          delay: anime.stagger(120),
          easing: 'easeOutBack(1, .8)'
        }, '-=400')

        observer.disconnect()
      }
    }, { threshold: 0.1 })

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="meet-team-section" ref={sectionRef}>
      <div className="container meet-team-shell">
        <div className="meet-team-header">
          <div>
            <p className="meet-team-kicker mb-0">{t('team.kicker')}</p>
            <h2 className="meet-team-title mb-0">{t('team.title')}</h2>
          </div>
        </div>

        <div className="meet-team-grid">
          {teamMembers.map((member, index) => (
            <article
              key={member.name}
              className="team-card"
            >
              <div className="team-card-image-wrap">
                <img src={member.image} alt={member.name} className="team-card-image" />
              </div>
              <div className="team-card-overlay">
                <div>
                  <p className="team-card-name mb-0">{member.name}</p>
                  <p className="team-card-role mb-0">{t(member.roleKey)}</p>
                </div>
                <button type="button" className="team-card-link" aria-label={`${t('team.profile')} ${member.name}`}>
                  <span className="team-card-linkedin" aria-hidden="true">
                    <img src={linkedIn} />
                  </span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MeetOurTeamSection
