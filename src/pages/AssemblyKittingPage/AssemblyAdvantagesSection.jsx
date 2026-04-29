import React, { useRef } from 'react';
import './AssemblyAdvantagesSection.css';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import useCurtainReveal from '../../hooks/useCurtainReveal';
import advantagesImage from '../../Images/Industrial Facility.png';

const AssemblyAdvantagesSection = () => {
  const titleRef = useCurtainReveal({ stagger: 0.065 });
  const animRefs = useRef([]);
  useScrollAnimation(animRefs);

  const advantages = [
    "Reduced Complexity",
    "Ready-to-Use Products",
    "Consistent Quality Control",
    "Faster Installation Timelines",
    "Global Packaging Ready"
  ];

  return (
    <section className="assembly-advantages-section">
      <div className="service-shell">
        <div className="advantages-grid">
          <div 
            className="advantages-text-col"
            ref={(el) => (animRefs.current[0] = el)}
          >
            <h2 className="advantages-title mb-0" ref={titleRef}>
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

          <div 
            className="advantages-image-col"
            ref={(el) => (animRefs.current[1] = el)}
          >
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
