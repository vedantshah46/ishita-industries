import React, { useEffect, useRef } from 'react';
import './ContactMapSection.css';
import anime from 'animejs';

const ContactMapSection = () => {
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const triggerAnimation = () => {
      if (hasAnimated.current || !sectionRef.current) return;
      hasAnimated.current = true;

      const tl = anime.timeline({
        easing: 'easeOutExpo',
      });

      tl.add({
        targets: sectionRef.current.querySelector('.map-heading'),
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 800
      })
      .add({
        targets: sectionRef.current.querySelector('.map-wrapper'),
        opacity: [0, 1],
        scale: [0.95, 1],
        duration: 1000
      }, '-=400');
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
    <section className="contact-map-section" ref={sectionRef}>
      <div className="contact-map-container">
        <h2 className="map-heading">In Google Map</h2>
        
        <div className="map-wrapper">
          <iframe 
            src="https://maps.google.com/maps?q=Plot+No.+32,+R.+S.+no.+706,+Vision+Industrial+Park+Lalpur+Road,+changa+Jamnagar,+Gujarat+-+361012+INDIA&t=&z=14&ie=UTF8&iwloc=&output=embed" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Ishita Industries Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactMapSection;
