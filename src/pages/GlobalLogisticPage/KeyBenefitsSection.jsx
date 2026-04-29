import React, { useRef } from 'react';
import './KeyBenefitsSection.css';
import './GlobalLogisticShell.css';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import useCurtainReveal from '../../hooks/useCurtainReveal';

const KeyBenefitsSection = () => {
  const titleRef = useCurtainReveal({ stagger: 0.065 });
  const animRefs = useRef([]);
  useScrollAnimation(animRefs);

  return (
    <section className="key-benefits-section">
      <div className="global-logistic-shell">
        <div
          className="key-benefits-header"
          ref={(el) => (animRefs.current[0] = el)}
        >
          <p className="key-benefits-kicker mb-0">OPERATIONAL EXCELLENCE</p>
          <h2 className="key-benefits-title mb-0" ref={titleRef}>
            Key Logistic Benefits
          </h2>
        </div>

        <div className="key-benefits-cards">
          {/* Door-to-Door Delivery */}
          <div 
            className="key-benefit-card"
            ref={(el) => (animRefs.current[1] = el)}
            style={{ transitionDelay: '0ms' }}
          >
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

          {/* Secure Packaging */}
          <div 
            className="key-benefit-card"
            ref={(el) => (animRefs.current[2] = el)}
            style={{ transitionDelay: '100ms' }}
          >
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

          {/* Global Coverage */}
          <div 
            className="key-benefit-card"
            ref={(el) => (animRefs.current[3] = el)}
            style={{ transitionDelay: '200ms' }}
          >
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
