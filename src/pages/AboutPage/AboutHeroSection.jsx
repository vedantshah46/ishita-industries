import { useRef } from 'react'
import './AboutHeroSection.css'
import factoryImage from '../../Images/about-us-hero-section.png'
import chairmanImage from '../../Images/bhavesh.png'
import useScrollAnimation from '../../hooks/useScrollAnimation'
import useCurtainReveal   from '../../hooks/useCurtainReveal'

function AboutHeroSection() {
  // Curtain word-reveal on the main h1
  const titleRef = useCurtainReveal({ stagger: 0.065 })

  // Scroll fade-up for subsequent blocks
  const animRefs = useRef([])
  useScrollAnimation(animRefs)

  return (
    <section className="about-hero-section">
      <div className="container about-hero-shell">

        <header className="about-hero-top">
          <h1 className="about-hero-title mb-0" ref={titleRef}>
            Manufacturing
            <span className="d-block">Relationships.</span>
            <span className="about-hero-title-light d-block">Distributing Quality.</span>
          </h1>
        </header>

        <div
          className="about-hero-meta"
          ref={(el) => (animRefs.current[0] = el)}
        >
          <p className="about-hero-copy mb-0">
            Precision non-ferrous components since 1994, Jamnagar, India. A legacy built on
            engineering excellence and a trusted reputation for high-quality brass components.
          </p>
          <div className="about-hero-line-block" aria-hidden="true">
            <span className="about-hero-line" />
            <span className="about-hero-est">EST. / 1994 / ISO 9001:2015</span>
          </div>
        </div>

        <div
          className="about-hero-factory-frame"
          ref={(el) => (animRefs.current[1] = el)}
        >
          <img src={factoryImage} alt="Factory interior" className="about-hero-factory-image" />
        </div>

        <div
          className="about-chairman-intro"
          ref={(el) => (animRefs.current[2] = el)}
        >
          <div>
            <p className="about-chairman-kicker mb-0">FROM LEADERSHIP VISION</p>
            <h2 className="about-chairman-title mb-0">
              MESSAGE FROM <br />THE CHAIRMAN.
            </h2>
          </div>
          <p className="about-chairman-summary mb-0">
            A reflection of our journey, values, and commitment to excellence driving innovation,
            empowering people, and building a globally trusted manufacturing legacy.
          </p>
        </div>

        <section
          className="about-chairman-card"
          ref={(el) => (animRefs.current[3] = el)}
        >
          <div className="about-chairman-copy-block">
            <h3 className="about-chairman-card-title mb-0">Message from Chairman</h3>
            <p className="about-chairman-card-text mb-0">
              We started this company with no money, knowledge, or network only strong vision
              and belief. That vision helped us grow into a globally connected business. Driven by
              customer trust and satisfaction, we continue to improve our workforce and
              infrastructure to meet changing market demands. Our goal is to become a leading
              global precision brass components company, connecting India with the world.
            </p>
            <p className="about-chairman-card-text about-chairman-card-text-quote mb-0">
              "I am extremely thankful for this opportunity to introduce Ishita Brass to all of you
              taking an interest in our company"
            </p>
            <div className="about-chairman-signoff">
              <p className="about-chairman-name mb-0">BHAVESH AJUDIYA</p>
              <p className="about-chairman-role mb-0">Chairman, Ishita Brass</p>
            </div>
          </div>
          <div className="about-chairman-photo-wrap">
            <img src={chairmanImage} alt="Chairman portrait" className="about-chairman-photo" />
          </div>
        </section>

      </div>
    </section>
  )
}

export default AboutHeroSection
