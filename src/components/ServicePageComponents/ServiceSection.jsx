import React, { useEffect, useRef } from 'react';
import './ServiceSection.css';
import anime from 'animejs';

const ServiceSection = ({ 
  kicker, 
  title, 
  services = [] 
}) => {
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const triggerAnimation = () => {
      if (hasAnimated.current || !sectionRef.current) return;
      hasAnimated.current = true;

      const tl = anime.timeline({
        easing: 'easeOutExpo',
      });

      const header = sectionRef.current.querySelector('.service-grid-header');
      const cards = sectionRef.current.querySelectorAll('.service-card');

      if (header) {
        tl.add({
          targets: header,
          opacity: [0, 1],
          translateY: [30, 0],
          duration: 1000
        });
      }

      if (cards.length > 0) {
        tl.add({
          targets: cards,
          translateY: [40, 0],
          opacity: [0, 1],
          delay: anime.stagger(100),
          duration: 1100
        }, '-=600');
      }
    };

    const timer = setTimeout(() => {
      if (!hasAnimated.current) triggerAnimation();
    }, 10000); // Fail-safe timer for visibility

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            triggerAnimation();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return (
    <section className="service-grid-section" ref={sectionRef}>
      <div className="service-shell">
        <div className="service-grid-header">
          <div>
            <p className="service-grid-kicker mb-0">{kicker}</p>
            <h2 className="service-grid-title mb-0">
              {title}
            </h2>
          </div>
        </div>

        <div className="service-grid">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="service-card"
            >
              <div className="service-card-icon">
                {service.icon}
              </div>
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-desc mb-0">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
