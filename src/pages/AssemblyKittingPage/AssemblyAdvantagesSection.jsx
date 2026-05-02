import React, { useEffect, useRef } from 'react';
import './AssemblyAdvantagesSection.css';
import anime from 'animejs';
import advantagesImage from '../../Images/Industrial Facility.png';

const AssemblyAdvantagesSection = () => {
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const triggerAnimation = () => {
      if (hasAnimated.current || !sectionRef.current) return;
      hasAnimated.current = true;

      const tl = anime.timeline({
        easing: 'easeOutExpo',
      });

      const textCol = sectionRef.current.querySelector('.advantages-text-col');
      const imageCol = sectionRef.current.querySelector('.advantages-image-col');

      if (textCol) {
        tl.add({
          targets: textCol,
          opacity: [0, 1],
          translateY: [30, 0],
          duration: 1000
        });
      }

      if (imageCol) {
        tl.add({
          targets: imageCol,
          opacity: [0, 1],
          translateY: [30, 0],
          duration: 1000
        }, '-=600');
      }
    };

    const timer = setTimeout(() => {
      if (!hasAnimated.current) triggerAnimation();
    }, 8000);

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

  const advantages = [
    "Reduced Complexity",
    "Ready-to-Use Products",
    "Consistent Quality Control",
    "Faster Installation Timelines",
    "Global Packaging Ready"
  ];

  return (
    <section className="assembly-advantages-section" ref={sectionRef}>
      <div className="service-shell">
        <div className="advantages-grid">
          <div className="advantages-text-col">
            <h2 className="advantages-title mb-0">
              Strategic Advantages
            </h2>
            <p className="advantages-subtitle">
              By outsourcing assembly and kitting to Ishita, partners eliminate logistical bottlenecks and focus on core engineering innovation.
            </p>

            <ul className="advantages-list">
              {advantages.map((item, idx) => (
                <li className="advantages-item" key={idx}>
                  <span className="advantages-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="advantages-image-col">
            <div className="advantages-image-wrapper">
              <div className="advantages-img-container">
                <img 
                  src={advantagesImage} 
                  alt="Industrial Facility at Ishita Industries" 
                  className="advantages-img" 
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssemblyAdvantagesSection;
