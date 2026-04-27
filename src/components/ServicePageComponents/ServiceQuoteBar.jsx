import React, { useRef } from 'react';
import './ServiceQuoteBar.css';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const ServiceQuoteBar = ({ text }) => {
  const animRefs = useRef([]);
  useScrollAnimation(animRefs);

  return (
    <section
      className="service-quote-bar"
      ref={(el) => (animRefs.current[0] = el)}
    >
      <div className="service-shell">
        <div className="service-quote-bar-inner">
          <p className="service-quote-bar-text mb-0">
            {text}
          </p>
          <div className="service-quote-bar-lines" aria-hidden="true">
            <span className="service-quote-bar-line service-quote-bar-line--dark"></span>
            <span className="service-quote-bar-line service-quote-bar-line--light"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceQuoteBar;
