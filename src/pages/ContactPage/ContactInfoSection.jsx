import React, { useEffect, useRef } from 'react';
import './ContactInfoSection.css';
import anime from 'animejs';

const ContactInfoSection = () => {
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const triggerAnimation = () => {
      if (hasAnimated.current || !sectionRef.current) return;
      hasAnimated.current = true;

      const tl = anime.timeline({
        easing: 'easeOutExpo',
      });

      const cards = sectionRef.current.querySelectorAll('.info-card');
      const icons = sectionRef.current.querySelectorAll('.info-icon');
      const titles = sectionRef.current.querySelectorAll('.info-title');
      const contents = sectionRef.current.querySelectorAll('.info-list li, .info-text');

      tl.add({
        targets: cards,
        opacity: [0, 1],
        translateY: [60, 0],
        rotateX: [-15, 0],
        delay: anime.stagger(200),
        duration: 1200,
        begin: (anim) => {
          sectionRef.current.style.perspective = '1000px';
        }
      })
      .add({
        targets: icons,
        scale: [0, 1],
        opacity: [0, 1],
        duration: 800,
        delay: anime.stagger(100)
      }, '-=1000')
      .add({
        targets: [titles, contents],
        opacity: [0, 1],
        translateY: [20, 0],
        delay: anime.stagger(50),
        duration: 800
      }, '-=800');
    };

    const timer = setTimeout(() => {
      if (!hasAnimated.current) triggerAnimation();
    }, 6000);

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
    <section className="contact-info-section" ref={sectionRef}>
      <div className="contact-info-container">
        <div className="contact-cards-wrapper">

          {/* Left Column: Email */}
          <div className="info-card email-card">
            <div className="info-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#343434" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="5" width="18" height="14" rx="2" ry="2"></rect>
                <polyline points="3 7 12 13 21 7"></polyline>
              </svg>
            </div>
            <h3 className="info-title">E-mail</h3>
            <ul className="info-list">
              <li>sales@ishitabrass.com <span>(Domestic Sales)</span></li>
              <li>Export@ishitabrass.com <span>(International Sales)</span></li>
              <li>Import@ishitabrass.com <span>(Raw Material / Brass)</span></li>
              <li>Info@ishitabrass.com <span>(Other / General)</span></li>
              <li>contact@ishitabrass.com <span>(Contact / General)</span></li>
            </ul>
          </div>

          {/* Right Column: Address & Contact */}
          <div className="right-cards">

            {/* Address */}
            <div className="info-card address-card">
              <div className="info-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#343434" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <h3 className="info-title">Address</h3>
              <p className="info-text">
                Plot No – 32, R.S No – 706, Vision Industrial Park, Lalpur Road, Changa, Jamnagar – 361012, Gujarat, India.
              </p>
            </div>

            {/* Contact */}
            <div className="info-card contact-card">
              <div className="info-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#343434" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <h3 className="info-title">Contact</h3>
              <p className="info-text">
                +91 932 799 2077<br />
                +91 982 569 2077
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfoSection;
