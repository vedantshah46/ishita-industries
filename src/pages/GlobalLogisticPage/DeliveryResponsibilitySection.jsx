import React, { useEffect, useRef } from 'react';
import './DeliveryResponsibilitySection.css';
import './GlobalLogisticShell.css';
import anime from 'animejs';

const DeliveryResponsibilitySection = () => {
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
              targets: '.delivery-header',
              opacity: [0, 1],
              translateY: [30, 0],
              duration: 1000
            })
            // 2. Cards staggered reveal
            .add({
              targets: '.delivery-card',
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
    <section className="delivery-responsibility-section" ref={sectionRef}>
      <div className="global-logistic-shell">
        <div className="delivery-header">
          <p className="delivery-kicker mb-0">REGULATORY DECLARATION</p>
          <h2 className="delivery-title mb-0">
            Delivery Responsibility
          </h2>
        </div>
        
        <div className="delivery-cards-wrapper">
          <div className="delivery-card light-card">
            <div className="card-top">
              <p className="card-kicker">STANDARD</p>
              <h3 className="card-title">FOB: Free On Board</h3>
            </div>
            <div className="card-bottom">
              <p className="card-desc">Ownership transfers at the point of origin port.</p>
            </div>
          </div>

          <div className="delivery-card light-card">
            <div className="card-top">
              <p className="card-kicker">INSURANCE</p>
              <h3 className="card-title">CIF: Cost, Insurance &amp; Freight</h3>
            </div>
            <div className="card-bottom">
              <p className="card-desc">Freight and basic insurance covered to destination port.</p>
            </div>
          </div>

          <div className="delivery-card light-card">
            <div className="card-top">
              <p className="card-kicker">CUSTOMS</p>
              <h3 className="card-title">DDU : Delivered Duty Unpaid</h3>
            </div>
            <div className="card-bottom">
              <p className="card-desc">Shipped to site, but client manages local duties/taxes.</p>
            </div>
          </div>

          <div className="delivery-card dark-card">
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
