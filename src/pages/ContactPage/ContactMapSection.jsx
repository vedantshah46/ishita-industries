import React, { useRef } from 'react';
import './ContactMapSection.css';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const ContactMapSection = () => {
  const animRefs = useRef([]);
  useScrollAnimation(animRefs);

  return (
    <section className="contact-map-section">
      <div 
        className="contact-map-container"
        ref={(el) => (animRefs.current[0] = el)}
      >
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
