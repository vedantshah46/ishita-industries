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
            <div className="footer-phones-container">
              <div className="footer-phone-item">
                <div className="footer-phone-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                  </svg>
                </div>
                <p className="footer-phone"><a href="tel:+917228981407" style={{ textDecoration: 'none', color: 'inherit' }}>+91 72289 81407</a></p>
              </div>
              <div className="footer-phone-item">
                <div className="footer-phone-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                  </svg>
                </div>
                <p className="footer-phone"><a href="tel:+919898098980" style={{ textDecoration: 'none', color: 'inherit' }}>+91 98980 98980</a></p>
              </div>
            </div>
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
            <div className="footer-phones-container">
              <div className="footer-phone-item">
                <div className="footer-phone-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                  </svg>
                </div>
                <p className="footer-phone"><a href="tel:+917228981407" style={{ textDecoration: 'none', color: 'inherit' }}>+91 72289 81407</a></p>
              </div>
              <div className="footer-phone-item">
                <div className="footer-phone-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                  </svg>
                </div>
                <p className="footer-phone"><a href="tel:+919898098980" style={{ textDecoration: 'none', color: 'inherit' }}>+91 98980 98980</a></p>
              </div>
            </div>
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