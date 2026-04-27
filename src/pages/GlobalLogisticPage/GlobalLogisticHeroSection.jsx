import React, { useRef } from 'react';
import './GlobalLogisticHeroSection.css';
import './GlobalLogisticShell.css';
import heroBanner from '../../Images/global_logistic_hero-banner.png';
import useCurtainReveal from '../../hooks/useCurtainReveal';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const GlobalLogisticHeroSection = () => {
  const titleRef = useCurtainReveal({ stagger: 0.065 });
  const animRefs = useRef([]);
  useScrollAnimation(animRefs);

  return (
    <section className="global-logistic-hero">
      <div className="global-logistic-shell">
        <header className="global-hero-top">
          <h1 className="global-hero-title mb-0" ref={titleRef}>
            Global Shipping &amp;
            <span className="d-block">Logistics.</span>
            <span className="global-hero-title-light d-block">Delivering Worldwide.</span>
          </h1>
        </header>
        
        <div className="global-logistic-hero-content">
          <div className="hero-text-wrapper">
            <p className="global-hero-copy mb-0">
              Ensuring safe, efficient, and timely delivery across global markets, we manage every
              step of the logistics process with precision. From secure packaging to smooth freight
              handling and customs clearance, our system is designed to provide reliable, hassle-
              free international shipping.
            </p>
          </div>
        </div>
        <div 
          className="hero-image-wrapper"
          ref={(el) => (animRefs.current[0] = el)}
        >
          <img src={heroBanner} alt="Global Logistics" className="hero-banner-img" />
        </div>
      </div>
    </section>
  );
};

export default GlobalLogisticHeroSection;
