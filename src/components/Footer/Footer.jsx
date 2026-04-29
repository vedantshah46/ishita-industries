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
    { name: 'Our USP', path: '/about#our-usp' },
    { name: 'Infrastructure', path: '/about#infrastructure' },
    { name: 'Manufacturing Facilities', path: '/about#manufacturing-facilities' },
    { name: 'Our Capabilities', path: '/about#our-capabilities' },
    { name: 'Quality Assurance', path: '/about#quality-assurance' },
    { name: 'Across the Globe', path: '/about#across-the-globe' },
    { name: 'CSR', path: '/about#csr' },
    { name: 'Core Value & purpose', path: '/about#core-value' },
  ],
  components: [
    'Electrical', 'Automotive', 'Fastener',
    'Engineering', 'Sanitary', 'Hardware',
  ],
  allPages: [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/product' },
    { name: 'Services', path: '/global-logistic' },
    { name: 'Import Export', path: '/import-export' },
    { name: 'Manufacturing Process', path: '/manufacturing-process' },
    { name: 'Quality', path: '/quality' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ],

}

function Footer() {
  const animRefs = useRef([])
  useScrollAnimation(animRefs, { threshold: 0.05, rootMargin: '0px' })

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
                <li key={link.name}><Link to={link.path}>{link.name}</Link></li>
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
                <li key={link}><Link to="/product/electric-pin">{link}</Link></li>
              ))}
            </ul>
          </div>

          <div
            className="footer-nav-col"
            ref={(el) => (animRefs.current[2] = el)}
            style={{ transitionDelay: '200ms' }}
          >
            <h4 className="footer-col-title">Pages</h4>
            <ul className="footer-link-list">
              {footerLinks.allPages.map((link) => (
                <li key={link.name}><Link to={link.path}>{link.name}</Link></li>
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
            <a href="https://www.google.com/maps/search/Plot+No.+32,+R.+S.+no.+706,+Vision+Industrial+Park+Lalpur+Road,+changa+Jamnagar,+Gujarat+361012+INDIA" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
              <address className="footer-address">
                Plot No. 32, R. S. no. 706, Vision Industrial
                Park Lalpur Road, changa Jamnagar,
                Gujarat - 361012 INDIA
              </address>
            </a>
            <p className="footer-phone"><a href="tel:+917228981407" style={{ textDecoration: 'none', color: 'inherit' }}>+91 72289 81407</a></p>
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
            <a href="https://www.google.com/maps/search/Plot+No.+32,+R.+S.+no.+706,+Vision+Industrial+Park+Lalpur+Road,+changa+Jamnagar,+Gujarat+361012+INDIA" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
              <address className="footer-address">
                Plot No. 32, R. S. no. 706, Vision Industrial
                Park Lalpur Road, changa Jamnagar,
                Gujarat - 361012 INDIA
              </address>
            </a>
            <p className="footer-phone"><a href="tel:+917228981407" style={{ textDecoration: 'none', color: 'inherit' }}>+91 72289 81407</a></p>
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

          {/* About Us */}
          <div className="footer-mobile-industries">
            <h4 className="footer-col-title">About Us</h4>
            <ul className="footer-link-list">
              {footerLinks.about.map((link) => (
                <li key={link.name}><Link to={link.path}>{link.name}</Link></li>
              ))}
            </ul>
          </div>

          {/* Industrial Components + Pages — 2 columns */}
          <div className="footer-mobile-two-col">
            <div>
              <h4 className="footer-col-title">Industrial Components</h4>
              <ul className="footer-link-list">
                {footerLinks.components.map((link) => (
                  <li key={link}><Link to="/product/electric-pin">{link}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="footer-col-title">Pages</h4>
              <ul className="footer-link-list">
                {footerLinks.allPages.map((link) => (
                  <li key={link.name}><Link to={link.path}>{link.name}</Link></li>
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
              Made with <span className="heart-icon">❤</span> by <a href="https://codelixitsolutions.com/" target="_blank" rel="noopener noreferrer">Codelix</a>
            </p>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer