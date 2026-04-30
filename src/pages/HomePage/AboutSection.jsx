import { useRef } from 'react'
import './AboutSection.css'
import useScrollAnimation from '../../hooks/useScrollAnimation'
import useCurtainReveal from '../../hooks/useCurtainReveal'

const aboutHighlights = [
  'ISO Certified Manufacturing SET-UP',
  '34+ Years Engineering Exp.',
  'Exporting to Europe, USA, Canada & Saudi Arabia',
  'Custom OEM Manufacturing',
  'Upload Drawing - Get Quote in 24 Hours',
]

function AboutSection() {
  // GSAP curtain reveal on the section heading
  const titleRef = useCurtainReveal({ stagger: 0.06, duration: 0.95 })

  // Scroll reveal for header block, body text, highlight cards
  // Index map: [0] = header, [1] = body, [2..6] = highlight cards
  const animRefs = useRef([])
  useScrollAnimation(animRefs)

  return (
    <section className="about-section">
      <div className="container about-shell">

        <div
          className="about-header"
          ref={(el) => (animRefs.current[0] = el)}
        >
          <div className="about-header-main">
            <p className="about-kicker mb-0">OUR STORY BEGINS HERE SINCE 1944</p>
            <h2 className="about-title mb-0" ref={titleRef}>ABOUT ISHITA INDUSTRIES.</h2>
          </div>
        </div>

        <p
          className="about-body mb-0"
          ref={(el) => (animRefs.current[1] = el)}
        >
          Founded in Jamnagar the Brass City of India&apos; Ishita Industries has evolved from a local
          workshop into a global leader in custom brass component manufacturing. We don&apos;t just
          machine parts; we engineer reliability. Built on a foundation of strict quality control,
          we now serve international markets across Electrical, Automotive, and Industrial sectors.
          We bridge the gap between Indian manufacturing cost-efficiency and German-standard
          precision.
        </p>

        <div className="about-highlights" aria-label="Company highlights">
          {aboutHighlights.map((highlight, index) => (
            <div
              key={highlight}
              className="about-highlight-card"
              ref={(el) => (animRefs.current[2 + index] = el)}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <span>{highlight}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default AboutSection
