import "./FreeToContactUsSection.css";
import contactlogo from '../../Images/homepage-contact-us-logo.png';
import arrow from '../../Images/arrow-vector.png'

const contactLinksData = [
  { text: "Get Company Brochure", href: "#" },
  { text: "info@ishitabrass.com", href: "mailto:info@ishitabrass.com" },
  { text: "Explore Material Grades", href: "#" },
];

function FreeToContactUsSection() {
  return (
    <section className="free-to-contact-us-section">
      <div className="container contactus-shell">
        <div className="contactus-cta-block">
          <div className="contactus-card">
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
                <button className="contactus-btn">
                  Contact now <span className="contactus-btn-arrow">&rarr;</span>
                </button>
              </div>
            </div>
          </div>

          <div className="contactus-links-grid">
            {contactLinksData.map((link, index) => (
              <a key={index} href={link.href} className="contactus-link-card">
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
