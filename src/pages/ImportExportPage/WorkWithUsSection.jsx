import { useRef } from 'react';
import "../HomePage/FreeToContactUsSection.css";
import "./WorkWithUsSection.css";
import contactlogo from '../../Images/homepage-contact-us-logo.png';
import arrow from '../../Images/arrow-vector.png'
import useScrollAnimation from '../../hooks/useScrollAnimation';

const contactLinksData = [
  { text: "Get Company Brochure", href: "#" },
  { text: "info@ishitabrass.com", href: "mailto:info@ishitabrass.com" },
  { text: "Explore Material Grades", href: "#" },
];

function WorkWithUsSection() {
  const animRefs = useRef([]);
  useScrollAnimation(animRefs);

  return (
    <section className="free-to-contact-us-section work-with-us-section">
      <div className="container contactus-shell">
        
        {/* The two lines added at the top */}
        <div className="work-with-us-header">
          <h2 className="work-with-us-title">
            Work With Us
          </h2>
          <p className="work-with-us-subtitle">
            Your Manufacturing Partner
          </p>
        </div>

        <div className="contactus-cta-block">
          <div 
            className="contactus-card"
            ref={(el) => (animRefs.current[0] = el)}
          >
            
            <div className="contactus-content work-with-us-content">
              <h3 className="contactus-title mb-0 work-with-us-card-title">
                Engineered for Performance.<br />Built to Scale.
              </h3>
              <p className="contactus-text mb-0 work-with-us-card-text">
                Partner with Ishita Industries to streamline your supply chain.
              </p>
              <div className="work-with-us-btn-wrap">
                <button className="contactus-btn">
                  Contact now 
                  <span className="contactus-btn-arrow">
                    <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 6H14M14 6L9 1M14 6L9 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>

          <div className="contactus-links-grid">
            {contactLinksData.map((link, index) => (
              <a 
                key={index} 
                href={link.href} 
                className="contactus-link-card"
                ref={(el) => (animRefs.current[index + 1] = el)}
              >
                <span className="contactus-link-text">{link.text}</span>
                <img src={arrow} alt="" className="contact-arrow-img-rotate"/>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkWithUsSection;
