import { useRef } from 'react'
import './Footer.css'
import companyLogo from '../../Images/company-footer-logo.png'
import linkedin from '../../Images/footer-linkedin.png'
import facebook from '../../Images/footer-facebook.png'
import twitter from '../../Images/footer-twitter.png'
import pinterest from '../../Images/footer-pinterest.png'
import { Link } from 'react-router-dom'
import useScrollAnimation from '../../hooks/useScrollAnimation'

const footerLinks = {
  about: [
    'Our USP', 'Infrastructure', 'Manufacturing Facilities',
    'Manufacturing Process', 'Our Capabilities', 'Quality Assurance',
    'Across the Globe', 'CSR', 'Core Value & purpose',
  ],
  components: [
    'Electrical', 'Automatives', 'Fastener',
    'Engineering', 'Sanitory', 'Hardware',
  ],
  expertise: [
    'Casting', 'Extrusion', 'Turning',
    'Forging', 'Milling', 'Broachinig', 'Stamping',
  ],
  pages: [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Grades', path: '#' },
    { name: 'Products', path: '/product' },
    { name: 'Quality', path: '/quality' },
  ],
  ishita: [
    'Certificates', 'Contact', 'Export', "FAQ's", 'Process',
  ],
}

function Footer() {
  const animRefs = useRef([])
  useScrollAnimation(animRefs)

  return (
    <footer className="footer-section">
      <div className="container footer-shell">

        {/* ── Desktop top row ── */}
        <div className="footer-top-row">

          <div 
            className="footer-nav-col"
            ref={(el) => (animRefs.current[0] = el)}
          >
            <h4 className="footer-col-title">About Us</h4>
            <ul className="footer-link-list">
              {footerLinks.about.map((link) => (
                <li key={link}><a href="#">{link}</a></li>
              ))}
            </ul>
          </div>

          <div 
            className="footer-nav-col"
            ref={(el) => (animRefs.current[1] = el)}
            style={{ transitionDelay: '100ms' }}
          >
            <h4 className="footer-col-title">Industrial Components</h4>
            <ul className="footer-link-list">
              {footerLinks.components.map((link) => (
                <li key={link}><a href="#">{link}</a></li>
              ))}
            </ul>
          </div>

          <div 
            className="footer-nav-col"
            ref={(el) => (animRefs.current[2] = el)}
            style={{ transitionDelay: '200ms' }}
          >
            <h4 className="footer-col-title">Machining Expertise</h4>
            <ul className="footer-link-list">
              {footerLinks.expertise.map((link) => (
                <li key={link}><a href="#">{link}</a></li>
              ))}
            </ul>
          </div>

          <div 
            className="footer-contact-col"
            ref={(el) => (animRefs.current[3] = el)}
            style={{ transitionDelay: '300ms' }}
          >
            <div className="footer-logo">
              <img src={companyLogo} alt="Ishita Industries" />
            </div>
            <address className="footer-address">
              Plot No. 32, R. S. no. 706, Vision Industrial
              Park Lalpur Road, changa Jamnagar,
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
                <img src={linkedin} />
              </a>
              <a href="#" aria-label="Facebook" className="social-icon">
                <img src={facebook} />
              </a>
              <a href="#" aria-label="X (Twitter)" className="social-icon">
                <img src={twitter} />
              </a>
              <a href="#" aria-label="Pinterest" className="social-icon">
                <img src={pinterest} />
              </a>
            </div>
          </div>
        </div>

        {/* ── Mobile-only layout ── */}
        <div 
          className="footer-mobile-layout"
          ref={(el) => (animRefs.current[4] = el)}
        >

          {/* Logo + contact */}
          <div className="footer-mobile-contact">
            <div className="footer-logo">
              <img src={companyLogo} alt="Ishita Industries" />
            </div>
            <address className="footer-address">
              Plot No. 32, R. S. no. 706, Vision Industrial
              Park Lalpur Road, changa Jamnagar,
              Gujarat - 361012 INDIA
            </address>
            <p className="footer-phone">+91 72289 81407</p>
          </div>

          {/* Industries — full width */}
          <div className="footer-mobile-industries">
            <h4 className="footer-col-title">Industries</h4>
            <ul className="footer-link-list">
              {footerLinks.components.map((link) => (
                <li key={link}><a href="#">{link}</a></li>
              ))}
            </ul>
          </div>

          {/* Pages + Ishita — 2 columns */}
          <div className="footer-mobile-two-col">
            <div>
              <h4 className="footer-col-title">Pages</h4>
              <ul className="footer-link-list">
                {footerLinks.pages.map((link) => (
                  <li key={link.name}><Link to={link.path}>{link.name}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="footer-col-title">Ishita</h4>
              <ul className="footer-link-list">
                {footerLinks.ishita.map((link) => (
                  <li key={link}><a href="#">{link}</a></li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* ── Bottom row (shared) ── */}
        <div 
          className="footer-bottom-row"
          ref={(el) => (animRefs.current[5] = el)}
        >
          <hr className="footer-divider" />
          <div className="footer-bottom-content">
            <p className="copyright-text">Copyright 2026 - Ishita Industries All Copyrights Reserved</p>
            <p className="credit-text">
              Designed & Developed By <a href="https://codelixitsolutions.com/" target="_blank" rel="noopener noreferrer">Codelix IT Solutions Pvt. Ltd.</a>
            </p>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer