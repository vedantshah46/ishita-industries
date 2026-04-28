import React, { useRef } from 'react';
import './CertificationQualitySection.css';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import useCurtainReveal from '../../hooks/useCurtainReveal';

// Assets
import certDocument from '../../Images/CertificationQuality.png';
import logo1 from '../../Images/CertificationQuality_logo-1.png';
import logo2 from '../../Images/CertificationQuality_logo-2.png';
import logo3 from '../../Images/CertificationQuality_logo-3.png';
import logo4 from '../../Images/CertificationQuality_logo-4.png';
import logo5 from '../../Images/CertificationQuality_logo-5.png';
import arrowVector from '../../Images/arrow-vector.png';

const CertificationQualitySection = () => {
  const titleRef = useCurtainReveal({ stagger: 0.065 });
  const animRefs = useRef([]);
  useScrollAnimation(animRefs);

  const logos = [
    { src: logo1, alt: "IAF Accreditation" },
    { src: logo2, alt: "ISO 14001" },
    { src: logo3, alt: "OHSAS 18001" },
    { src: logo4, alt: "IAS Accredited" },
    { src: logo5, alt: "ISO 9001:2015" }
  ];

  return (
    <section className="cert-quality-section">
      <div className="container cert-quality-shell">
        
        {/* Centered Header */}
        <div 
          className="cert-quality-header-container"
          ref={(el) => (animRefs.current[0] = el)}
        >
          <span className="cert-quality-kicker">TRUSTED & VERIFIED</span>
          <h2 className="cert-quality-title" ref={titleRef}>CERTIFICATION</h2>
        </div>

        <div className="cert-quality-content">
          {/* Left Column: Logos Grid */}
          <div className="cert-quality-left">
            <div className="cert-quality-logo-grid">
              {logos.map((logo, idx) => (
                <div 
                  key={idx} 
                  className={`cert-quality-logo-item logo-item-${idx + 1}`}
                  ref={(el) => (animRefs.current[idx + 2] = el)}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <img src={logo.src} alt={logo.alt} />
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Main Certificate */}
          <div 
            className="cert-quality-right"
            ref={(el) => (animRefs.current[1] = el)}
          >
            <div className="cert-document-frame">
              <img src={certDocument} alt="ISO 9001:2015 Certificate" className="cert-document-img" />
            </div>
            
            <div className="cert-document-caption">
              <div className="cert-caption-left">
                <span className="cert-dot"></span>
                <span className="cert-caption-text">ISO 9001 : 2015</span>
              </div>
              <img src={arrowVector} alt="arrow" className="cert-arrow" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CertificationQualitySection;
