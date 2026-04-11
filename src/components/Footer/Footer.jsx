import './Footer.css'
import companyLogo from '../../Images/company-footer-logo.png'

const footerLinks = {
  about: [
    'Our USP',
    'Infrastructure',
    'Manufacturing Facilities',
    'Manufacturing Process',
    'Our Capabilities',
    'Quality Assurance',
    'Across the Globe',
    'CSR',
    'Core Value & purpose',
  ],
  components: [
    'Electrical',
    'Automatives',
    'Fastener',
    'Engineering',
    'Sanitory',
    'Hardware',
  ],
  expertise: [
    'Casting',
    'Extrusion',
    'Turning',
    'Forging',
    'Milling',
    'Broachinig',
    'Stamping',
  ],
}

function Footer() {
  return (
    <footer className="footer-section">
      <div className="container footer-shell">
        <div className="footer-top-row">
          
          <div className="footer-nav-col">
            <h4 className="footer-col-title">About Us</h4>
            <ul className="footer-link-list">
              {footerLinks.about.map((link) => (
                <li key={link}><a href="#">{link}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer-nav-col">
            <h4 className="footer-col-title">Industrial Components</h4>
            <ul className="footer-link-list">
              {footerLinks.components.map((link) => (
                <li key={link}><a href="#">{link}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer-nav-col">
            <h4 className="footer-col-title">Machining Expertise</h4>
            <ul className="footer-link-list">
              {footerLinks.expertise.map((link) => (
                <li key={link}><a href="#">{link}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer-contact-col">
            <div className="footer-logo">
              <img src={companyLogo} alt="Ishita Industries" />
            </div>
            
            <address className="footer-address">
              Plot No. 32, R. S. no. 706, Vision Industrial<br />
              Park Lalpur Road, changa Jamnagar,<br />
              Gujarat - 361012 INDIA
            </address>

            <p className="footer-phone">+91 72289 81407</p>

            <div className="footer-emails">
              <p>For Domestic :- <a href="mailto:sales@ishitabrass.com">sales@ishitabrass.com</a></p>
              <p>For Export :- <a href="mailto:export@ishitabrass.com">export@ishitabrass.com</a></p>
              <p>For General :- <a href="mailto:info@ishitabrass.com">info@ishitabrass.com</a></p>
            </div>

            <div className="footer-socials">
              <a href="#" aria-label="LinkedIn" className="social-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" aria-label="Facebook" className="social-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              <a href="#" aria-label="X (Twitter)" className="social-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" aria-label="Pinterest" className="social-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.168 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.367 18.602 0 12.017 0z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom-row">
          <hr className="footer-divider" />
          <div className="footer-bottom-content">
            <p className="copyright-text">Copyright 2026 - Ishita Industries All Copyrights Reserved</p>
            <p className="credit-text">Made with <span className="heart-icon">❤️</span> by Codelix</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
