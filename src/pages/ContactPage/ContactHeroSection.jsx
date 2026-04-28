import React from 'react';
import './ContactHeroSection.css';
import useCurtainReveal from '../../hooks/useCurtainReveal';

const ContactHeroSection = () => {
  const titleRef = useCurtainReveal({ stagger: 0.065 });

  return (
    <section className="contact-hero-section">
      <div className="container contact-hero-container">
        <h1 className="contact-hero-title" ref={titleRef}>
          We offer products
          100% from <span className="contact-hero-highlight">extruded rods, profiles & section</span>
        </h1>
        <p className="contact-hero-subtitle">
          Connect with our team for tailored solutions, product inquiries, or business collaborations. We ensure prompt communication and dedicated support at every step.
        </p>
      </div>
    </section>
  );
};

export default ContactHeroSection;
