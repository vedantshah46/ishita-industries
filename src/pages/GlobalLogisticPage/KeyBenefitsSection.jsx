import React, { useEffect, useRef } from 'react';
import './KeyBenefitsSection.css';
import './GlobalLogisticShell.css';
import anime from 'animejs';

const KeyBenefitsSection = () => {
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;

            const tl = anime.timeline({
              easing: 'easeOutExpo',
            });

            // 1. Header fade in
            tl.add({
              targets: '.key-benefits-header',
              opacity: [0, 1],
              translateY: [30, 0],
              duration: 1000
            })
            // 2. Cards staggered reveal
            .add({
              targets: '.key-benefit-card',
              translateY: [40, 0],
              opacity: [0, 1],
              delay: anime.stagger(150),
              duration: 1200
            }, '-=600');

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="key-benefits-section" ref={sectionRef}>
      <div className="global-logistic-shell">
        <div className="key-benefits-header">
          <p className="key-benefits-kicker mb-0">OPERATIONAL EXCELLENCE</p>
          <h2 className="key-benefits-title mb-0">
            Key Logistic Benefits
          </h2>
        </div>

        <div className="key-benefits-cards">
          <div className="key-benefit-card">
            <div className="key-benefit-icon-wrap">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2D3435" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="3" width="15" height="13"></rect>
                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                <circle cx="5.5" cy="18.5" r="2.5"></circle>
                <circle cx="18.5" cy="18.5" r="2.5"></circle>
              </svg>
            </div>
            <h3 className="key-benefit-card-title">Door-to-Door Delivery</h3>
            <p className="key-benefit-card-desc mb-0">
              Direct transit from our facility to your designated installation site anywhere in the world.
            </p>
          </div>

          <div className="key-benefit-card">
            <div className="key-benefit-icon-wrap">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2D3435" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 8V20.9932C21 21.5501 20.5552 22 20.0066 22H3.9934C3.44476 22 3 21.5501 3 20.9932V8H21ZM11 13V15H13V13H11ZM22 5V7H2V5H22ZM18 2V4H6V2H18Z"></path>
              </svg>
            </div>
            <h3 className="key-benefit-card-title">Secure Packaging</h3>
            <p className="key-benefit-card-desc mb-0">
              Reinforced, moisture-sealed industrial packaging engineered for rigorous maritime and air transit.
            </p>
          </div>

          <div className="key-benefit-card">
            <div className="key-benefit-icon-wrap">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2D3435" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                <path d="M2 12h20"></path>
              </svg>
            </div>
            <h3 className="key-benefit-card-title">Global Coverage</h3>
            <p className="key-benefit-card-desc mb-0">
              Established freight networks across North America, Europe, and the UK with full compliance support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyBenefitsSection;
