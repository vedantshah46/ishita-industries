import { useRef } from 'react'
import './MeetOurTeamSection.css'
import hiteshImage  from '../../Images/hitesh.png'
import raviImage    from '../../Images/ravi.png'
import chintanImage from '../../Images/chintan.png'
import rajImage     from '../../Images/raj.png'
import useScrollAnimation from '../../hooks/useScrollAnimation'
import useCurtainReveal   from '../../hooks/useCurtainReveal'

const teamMembers = [
  { name: 'Hitesh Ajudiya', role: 'Director Finance',    image: hiteshImage  },
  { name: 'Ravi Patel',     role: 'Director Marketing',  image: raviImage    },
  { name: 'Chintan Patel',  role: 'Director Quality',    image: chintanImage },
  { name: 'Raj Ajudiya',    role: 'Director Production', image: rajImage     },
]

function MeetOurTeamSection() {
  const titleRef = useCurtainReveal({ stagger: 0.065 })

  // [0] = header, [1..4] = team cards
  const animRefs = useRef([])
  useScrollAnimation(animRefs)

  return (
    <section className="meet-team-section">
      <div className="container meet-team-shell">
        <div
          className="meet-team-header"
          ref={(el) => (animRefs.current[0] = el)}
        >
          <div>
            <p className="meet-team-kicker mb-0">THE PEOPLE BEHIND THE PROCESS</p>
            <h2 className="meet-team-title mb-0" ref={titleRef}>
              MEET OUR
              <span className="d-block">TEAM.</span>
            </h2>
          </div>

          <p className="meet-team-copy mb-0">
            A dedicated group of professionals driving innovation, precision, and excellence
            working together to build a strong and trusted manufacturing future.
          </p>
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
                  <p className="team-card-role mb-0">{member.role}</p>
                </div>

                <button type="button" className="team-card-link" aria-label={`Open ${member.name} profile`}>
                  <span className="team-card-linkedin" aria-hidden="true">
                    in
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
