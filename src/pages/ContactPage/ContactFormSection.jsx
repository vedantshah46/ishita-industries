import React, { useRef } from 'react';
import './ContactFormSection.css';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const ContactFormSection = () => {
  const animRefs = useRef([]);
  useScrollAnimation(animRefs);

  return (
    <section className="contact-form-section" id="contact-form-section">
      <div 
        className="contact-form-container"
        ref={(el) => (animRefs.current[0] = el)}
      >
        <div className="contact-form-header">
          <span className="contact-subheading">GET IN TOUCH</span>
          <h2 className="contact-heading">Send us a message</h2>
        </div>
        
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input type="text" id="firstName" name="firstName" required />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" name="lastName" required />
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" name="phone" />
            </div>
          </div>
          
          <div className="form-group full-width">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          
          <div className="form-submit">
            <button type="submit" className="submit-btn">Submit</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactFormSection;
