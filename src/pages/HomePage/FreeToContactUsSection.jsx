import { Link } from "react-router-dom";
import { useRef } from "react";
import "./FreeToContactUsSection.css";
import contactlogo from '../../Images/homepage-contact-us-logo.png';
import arrow from '../../Images/arrow-vector.png'
import useScrollAnimation from "../../hooks/useScrollAnimation";

const contactLinksData = [
  { text: "Get Company Brochure", href: "#" },
  { text: "info@ishitabrass.com", href: "mailto:info@ishitabrass.com" },
  { text: "Explore Material Grades", href: "#" },
];

function FreeToContactUsSection() {
  const animRefs = useRef([]);
  useScrollAnimation(animRefs);

  return (
    <section className="free-to-contact-us-section">
      <div className="container contactus-shell">
        <div className="contactus-cta-block">
          <div 
            className="contactus-card"
            ref={(el) => (animRefs.current[0] = el)}
          >
            <div className="contactus-icon">
              <img src={contactlogo} alt="Contact Logo" />          
            </div>

            <div className="contactus-content">
              <h3 className="contactus-title mb-0">
                We respect your privacy feel
                <br />
                free to contact us
              </h3>
              <p className="contactus-text mb-0">
                If you require any product developed exclusively, not found in
                our selection, or if you want any product to be modified as per
                your Specifications &amp; Finish, we have a team of work force
                capable to fulfill your requirement.
              </p>
              <div>
                <Link to="/contact#contact-form-section" className="contactus-btn">
                  Contact now 
                  <span className="contactus-btn-arrow">
                    <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 6H14M14 6L9 1M14 6L9 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </Link>
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

export default FreeToContactUsSection;
