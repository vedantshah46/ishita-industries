import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import './MeetOurTeamSection.css'
import hiteshImage  from '../../Images/hitesh.png'
import raviImage    from '../../Images/ravi.png'
import chintanImage from '../../Images/chintan.png'
import rajImage     from '../../Images/raj.png'
import linkedIn from '../../Images/meet-out-team-linkedin.png'
import useScrollAnimation from '../../hooks/useScrollAnimation'
import useCurtainReveal   from '../../hooks/useCurtainReveal'

const teamMembers = [
  { name: 'Hitesh Ajudiya', roleKey: 'team.role_finance',    image: hiteshImage  },
  { name: 'Ravi Patel',     roleKey: 'team.role_marketing',  image: raviImage    },
  { name: 'Chintan Patel',  roleKey: 'team.role_quality',    image: chintanImage },
  { name: 'Raj Ajudiya',    roleKey: 'team.role_production', image: rajImage     },
]

function MeetOurTeamSection() {
  const { t } = useTranslation()
  const titleRef = useCurtainReveal({ stagger: 0.065 })
  const animRefs = useRef([])
  useScrollAnimation(animRefs)

  return (
    <section className="meet-team-section">
      <div className="container meet-team-shell">
        <div className="meet-team-header" ref={(el) => (animRefs.current[0] = el)}>
          <div>
            <p className="meet-team-kicker mb-0">{t('team.kicker')}</p>
            <h2 className="meet-team-title mb-0" ref={titleRef}>{t('team.title')}</h2>
          </div>
        </div>

        <div className="meet-team-grid">
          {teamMembers.map((member, index) => (
            <article
              key={member.name}
              className="team-card"
              ref={(el) => (animRefs.current[1 + index] = el)}
              style={{ transitionDelay: `${index * 80}ms` }}
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
