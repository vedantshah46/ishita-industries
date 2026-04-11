import './HeroSection.css'
import heroTiltImage from '../../Images/hero-section-tilt-image.svg'
import heroStraightImage from '../../Images/hero-section-image.svg'


function HeroSection() {
  return (
    <section className="hero-section">
      <div className="container hero-shell">
        <div className="row align-items-center g-4 hero-row">
          <div className="col-12 col-lg-6 hero-copy-col">
            <div className="hero-content">
              <p className="hero-kicker mb-0">450+Customized Precision Components Delivered</p>
              <h1 className="hero-title mb-0">
                EVERY METAL, EVERY PROCESS,
                <span className="hero-title-thin d-block">ONE PRECISION PARTNER</span>
              </h1>

              <button type="button" className="hero-cta-btn">
                Explore more
                <span className="hero-cta-icon" aria-hidden="true">
                  &rarr;
                </span>
              </button>

              <div className="hero-story d-flex">
                <div className="hero-story-thumb-wrap">
                  <img
                    src="https://via.placeholder.com/104x104/6D6F73/FFFFFF?text=Video"
                    alt="Manufacturing preview"
                    className="hero-story-thumb"
                  />
                  <span className="hero-play-btn" aria-hidden="true">
                    &#9654;
                  </span>
                </div>
                <p className="hero-story-text mb-0">
                  Since 1994, defining the benchmark in precision brass manufacturing. We don&apos;t
                  just machine metal; we engineer trust for global industries.
                </p>
              </div>

              <p className="hero-footnote mb-0">WE ARE MANUFACTURER</p>
            </div>
          </div>

          <div className="col-12 col-lg-6 hero-media-col">
            <div className="hero-media-wrap">
              <img
                src={heroStraightImage}
                alt="Straight precision brass component"
                className="hero-media hero-media-straight"
              />
              <img
                src={heroTiltImage}
                alt="Tilted precision brass component"
                className="hero-media hero-media-tilt"
              />
            </div>
            <p className="hero-caption mb-0">Precision , Reliability , Performance</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
