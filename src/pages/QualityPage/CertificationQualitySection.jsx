import React, { useEffect, useRef } from 'react';
import './CertificationQualitySection.css';
import anime from 'animejs';
import SplitType from 'split-type';

// Assets
import certDocument from '../../Images/CertificationQuality.png';
import logo1 from '../../Images/CertificationQuality_logo-1.png';
import logo2 from '../../Images/CertificationQuality_logo-2.png';
import logo3 from '../../Images/CertificationQuality_logo-3.png';
import logo4 from '../../Images/CertificationQuality_logo-4.png';
import logo5 from '../../Images/CertificationQuality_logo-5.png';
import arrowVector from '../../Images/arrow-vector.png';

const CertificationQualitySection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const hasAnimated = useRef(false);

  const logos = [
    { src: logo1, alt: "IAF Accreditation" },
    { src: logo2, alt: "ISO 14001" },
    { src: logo3, alt: "OHSAS 18001" },
    { src: logo4, alt: "IAS Accredited" },
    { src: logo5, alt: "ISO 9001:2015" }
  ];

  useEffect(() => {
    const text = new SplitType(titleRef.current, { types: 'chars' });
    
    const triggerAnimation = () => {
      if (hasAnimated.current || !sectionRef.current) return;
      hasAnimated.current = true;

      const tl = anime.timeline({
        easing: 'easeOutExpo',
      });

      const kicker = sectionRef.current.querySelector('.cert-quality-kicker');
      const logosList = sectionRef.current.querySelectorAll('.cert-quality-logo-item');
      const certRight = sectionRef.current.querySelector('.cert-quality-right');

      tl.add({
        targets: kicker,
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 800
      })
      .add({
        targets: text.chars,
        translateY: [30, 0],
        rotateX: [-90, 0],
        opacity: [0, 1],
        delay: anime.stagger(20),
        duration: 800
      }, '-=600')
      .add({
        targets: logosList,
        opacity: [0, 1],
        scale: [0.8, 1],
        translateY: [30, 0],
        delay: anime.stagger(100),
        duration: 800
      }, '-=600')
      .add({
        targets: certRight,
        opacity: [0, 1],
        translateX: [40, 0],
        duration: 1000
      }, '-=1000');
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
      text.revert();
    };
  }, []);

  return (
    <section className="cert-quality-section" ref={sectionRef}>
      <div className="container cert-quality-shell">
        
        {/* Centered Header */}
        <div className="cert-quality-header-container">
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
                >
                  <img src={logo.src} alt={logo.alt} />
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Main Certificate */}
          <div className="cert-quality-right">
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
