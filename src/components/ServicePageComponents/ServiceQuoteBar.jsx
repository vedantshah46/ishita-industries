import React, { useEffect, useRef } from 'react';
import './ServiceQuoteBar.css';
import anime from 'animejs';

const ServiceQuoteBar = ({ text }) => {
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const triggerAnimation = () => {
      if (hasAnimated.current || !sectionRef.current) return;
      hasAnimated.current = true;

      anime({
        targets: sectionRef.current,
        opacity: [0, 1],
        translateY: [25, 0],
        easing: 'easeOutExpo',
        duration: 1000
      });
    };

    const timer = setTimeout(() => {
      if (!hasAnimated.current) triggerAnimation();
    }, 10000);

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
    <section className="service-quote-bar" ref={sectionRef}>
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
