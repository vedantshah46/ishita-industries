import React, { useRef } from 'react';
import './ServiceSection.css';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const ServiceSection = ({ 
  kicker, 
  title, 
  services = [] 
}) => {
  const animRefs = useRef([]);
  useScrollAnimation(animRefs);

  return (
    <section className="service-grid-section">
      <div className="service-shell">
        <div 
          className="service-grid-header"
          ref={(el) => (animRefs.current[0] = el)}
        >
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
              ref={(el) => (animRefs.current[idx + 1] = el)}
              style={{ transitionDelay: `${idx * 100}ms` }}
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
