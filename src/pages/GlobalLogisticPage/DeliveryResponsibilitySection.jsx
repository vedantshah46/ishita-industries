import React, { useRef } from 'react';
import './DeliveryResponsibilitySection.css';
import './GlobalLogisticShell.css';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import useCurtainReveal from '../../hooks/useCurtainReveal';

const DeliveryResponsibilitySection = () => {
  const titleRef = useCurtainReveal({ stagger: 0.065 });
  const animRefs = useRef([]);
  useScrollAnimation(animRefs);

  return (
    <section className="delivery-responsibility-section">
      <div className="global-logistic-shell">
        <div 
          className="delivery-header"
          ref={(el) => (animRefs.current[0] = el)}
        >
          <p className="delivery-kicker mb-0">REGULATORY DECLARATION</p>
          <h2 className="delivery-title mb-0" ref={titleRef}>
            Delivery Responsibility
          </h2>
        </div>
        
        <div className="delivery-cards-wrapper">
          <div 
            className="delivery-card light-card"
            ref={(el) => (animRefs.current[1] = el)}
            style={{ transitionDelay: '0ms' }}
          >
            <div className="card-top">
              <p className="card-kicker">STANDARD</p>
              <h3 className="card-title">FOB: Free On Board</h3>
            </div>
            <div className="card-bottom">
              <p className="card-desc">Ownership transfers at the point of origin port.</p>
            </div>
          </div>

          <div 
            className="delivery-card light-card"
            ref={(el) => (animRefs.current[2] = el)}
            style={{ transitionDelay: '100ms' }}
          >
            <div className="card-top">
              <p className="card-kicker">INSURANCE</p>
              <h3 className="card-title">CIF: Cost, Insurance &amp; Freight</h3>
            </div>
            <div className="card-bottom">
              <p className="card-desc">Freight and basic insurance covered to destination port.</p>
            </div>
          </div>

          <div 
            className="delivery-card light-card"
            ref={(el) => (animRefs.current[3] = el)}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="card-top">
              <p className="card-kicker">CUSTOMS</p>
              <h3 className="card-title">DDU : Delivered Duty Unpaid</h3>
            </div>
            <div className="card-bottom">
              <p className="card-desc">Shipped to site, but client manages local duties/taxes.</p>
            </div>
          </div>

          <div 
            className="delivery-card dark-card"
            ref={(el) => (animRefs.current[4] = el)}
            style={{ transitionDelay: '300ms' }}
          >
            <div className="card-top">
              <p className="card-kicker">PREFERRED SERVICE</p>
              <h3 className="card-title">DDP: Complete Door-to-Door Delivery</h3>
            </div>
            <div className="card-bottom">
              <p className="card-desc">Full end-to-end management by our logistics experts.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliveryResponsibilitySection;
