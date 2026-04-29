import React, { useRef } from 'react';
import './ServiceHeroSection.css';
import './ServiceShell.css';
import useCurtainReveal from '../../hooks/useCurtainReveal';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const ServiceHeroSection = ({ 
  titleMain, 
  titleLight, 
  tagline, 
  splitTitle, 
  splitDesc, 
  heroImage, 
  imageAlt 
}) => {
  const titleRef = useCurtainReveal({ stagger: 0.065 });
  const animRefs = useRef([]);
  useScrollAnimation(animRefs);

  return (
    <section className="service-hero">
      <div className="service-shell">
        <header className="service-hero-top">
          <h1 className="service-hero-title mb-0" ref={titleRef}>
            {titleMain}
            <span className="service-hero-title-light d-block">{titleLight}</span>
          </h1>
          <p className="service-hero-tagline mb-0">
            {tagline}
          </p>
        </header>
      </div>

      <div
        className="service-hero-split"
        ref={(el) => (animRefs.current[0] = el)}
      >
        <div className="service-hero-split-text">
          <div className="service-hero-split-text-inner">
            <h2 className="service-hero-split-title">{splitTitle}</h2>
            <p className="service-hero-split-desc mb-0">
              {splitDesc}
            </p>
            <div className="service-hero-split-line" aria-hidden="true"></div>
          </div>
        </div>
        <div className="service-hero-split-image">
          <img src={heroImage} alt={imageAlt} className="service-hero-banner-img" />
        </div>
      </div>
    </section>
  );
};

export default ServiceHeroSection;
