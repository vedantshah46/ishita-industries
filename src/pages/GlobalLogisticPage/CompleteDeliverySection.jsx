import React, { useRef } from 'react';
import './CompleteDeliverySection.css';
import './GlobalLogisticShell.css';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import useCurtainReveal from '../../hooks/useCurtainReveal';

const CompleteDeliverySection = () => {
  const titleRef = useCurtainReveal({ stagger: 0.065 });
  const animRefs = useRef([]);
  useScrollAnimation(animRefs);

  return (
    <section className="complete-delivery-section">
      <div className="global-logistic-shell">
        <div 
          className="complete-delivery-header"
          ref={(el) => (animRefs.current[0] = el)}
        >
          <p className="complete-delivery-kicker mb-0">SERVICE CLASSIFICATION : INCOTERM 2020</p>
          <h2 className="complete-delivery-title mb-0" ref={titleRef}>
            Complete Delivery Responsibility
          </h2>
        </div>
        
        <div 
          className="complete-delivery-content"
          ref={(el) => (animRefs.current[1] = el)}
        >
          <div className="ddp-top-row">
            <div className="ddp-text-col">
              <h3 className="ddp-title">DDP - Complete Delivery<br />Responsibility</h3>
              <p className="ddp-desc">
                For customers who prefer a hassle-free purchasing experience, we offer DDP (Delivered Duty Paid) shipping. Under this arrangement, Ishita Industries manages the entire logistics process, including freight, export documentation, customs clearance, import duties, and final delivery directly to the customer's location.
              </p>
              <p className="ddp-desc">
                This allows our international clients in USA, Europe, and the UK to receive goods without worrying about shipping procedures, customs handling, or additional logistics coordination.
              </p>
            </div>
            <div className="ddp-badge-col">
              <div className="ddp-badge">
                <h4 className="ddp-badge-title">
                  <span>Delivered</span>
                  <span>Duty</span>
                  <span>Paid</span>
                </h4>
                <div className="ddp-badge-kicker">
                  <span className="line"></span>
                  <span>STANDARD OFFERING</span>
                </div>
              </div>
            </div>
          </div>

          <div className="specialization-header">
            <p className="logistic-spec-kicker">MARKET SPECIALIZATION</p>
            <div className="logistic-spec-line"></div>
            <p className="logistic-spec-kicker-right">OPERATIONAL CORRIDORS 2024</p>
          </div>

          <div className="logistic-spec-cards-wrapper">
            <div 
              className="logistic-spec-card"
              ref={(el) => (animRefs.current[2] = el)}
              style={{ transitionDelay: '0ms' }}
            >
              <div className="logistic-spec-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2D3435" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path><path d="M2 12h20"></path></svg>
              </div>
              <h4 className="logistic-spec-card-title">USA</h4>
              <p className="logistic-spec-card-desc">
                Direct DDP coverage across all 50 states with integrated customs filing at all major US ports of entry.
              </p>
              <p className="logistic-spec-card-kicker">ACTIVE NETWORK</p>
            </div>

            <div 
              className="logistic-spec-card"
              ref={(el) => (animRefs.current[3] = el)}
              style={{ transitionDelay: '150ms' }}
            >
              <div className="logistic-spec-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2D3435" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 10h12"></path><path d="M4 14h9"></path><path d="M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2"></path></svg>
              </div>
              <h4 className="logistic-spec-card-title">EUROPE</h4>
              <p className="logistic-spec-card-desc">
                Simplified VAT deferment and fiscal representation across the EU-27 single market territories.
              </p>
              <p className="logistic-spec-card-kicker">SCHENGEN OPTIMIZED</p>
            </div>

            <div 
              className="logistic-spec-card"
              ref={(el) => (animRefs.current[4] = el)}
              style={{ transitionDelay: '300ms' }}
            >
              <div className="logistic-spec-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2D3435" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg>
              </div>
              <h4 className="logistic-spec-card-title">UNITED KINGDOM</h4>
              <p className="logistic-spec-card-desc">
                Specialized post-Brexit customs handling and documentation management for LHR and major UK hubs.
              </p>
              <p className="logistic-spec-card-kicker">DIRECT LHR-TERMINAL</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompleteDeliverySection;
