import React, { useEffect, useRef } from 'react';
import './ServicePromiseSection.css';
import anime from 'animejs';

const ServicePromiseSection = ({ 
  quoteText, 
  specs = [] 
}) => {
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const triggerAnimation = () => {
      if (hasAnimated.current || !sectionRef.current) return;
      hasAnimated.current = true;

      anime({
        targets: sectionRef.current,
        opacity: [0, 1],
        translateY: [30, 0],
        easing: 'easeOutExpo',
        duration: 1000
      });
    };

    const timer = setTimeout(() => {
      if (!hasAnimated.current) triggerAnimation();
    }, 12000);

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
    <section className="service-promise-section" ref={sectionRef}>
      <div className="service-shell">
        <div className="service-promise-content">
          <div className="service-promise-icon" aria-hidden="true">
            <svg className="service-promise-icon-svg" viewBox="0 0 42 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.2769 39.4614L10.7076 33.446L3.93075 31.9614L4.59229 24.9845L0 19.7307L4.59229 14.4769L3.93075 7.49996L10.7076 6.01536L14.2769 0L20.6537 2.70768L27.0306 0L30.5999 6.01536L37.3767 7.49996L36.7152 14.4769L41.3075 19.7307L36.7152 24.9845L37.3767 31.9614L30.5999 33.446L27.0306 39.4614L20.6537 36.7537L14.2769 39.4614ZM15.5537 35.6307L20.6537 33.4691L25.8153 35.6307L28.6537 30.8307L34.1537 29.5691L33.6537 23.9307L37.3537 19.7307L33.6537 15.4691L34.1537 9.83068L28.6537 8.63068L25.7537 3.83068L20.6537 5.99221L15.4922 3.83068L12.6537 8.63068L7.15375 9.83068L7.65375 15.4691L3.95375 19.7307L7.65375 23.9307L7.15375 29.6307L12.6537 30.8307L15.5537 35.6307ZM18.5537 26.1383L29.1614 15.5307L27.0537 13.3615L18.5537 21.8615L14.2537 17.623L12.1461 19.7307L18.5537 26.1383Z" fill="currentColor"></path>
            </svg>
          </div>

          <blockquote className="service-promise-quote mb-0">
            {quoteText}
          </blockquote>

          <div className="service-promise-specs">
            {specs.map((spec, idx) => (
              <div className="service-promise-spec" key={idx}>
                <span className="service-promise-spec-label">{spec.label}</span>
                <span className="service-promise-spec-value">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicePromiseSection;
