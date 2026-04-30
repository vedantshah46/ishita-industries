import './Navbar.css'
import companyLogo from '../../Images/ishita-navbar-logo.png';
import companyLogoMobile from '../../Images/ishita-navbar-logo-mobile.png';
import browserLogo from '../../Images/navbar-browser-logo.png';
import downloadLogo from '../../Images/navbar-download-logo.png';
import ToggleLogo from '../../Images/navbar-menu-toggle-logo.png';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FullscreenMenu from '../FullscreenMenu/FullscreenMenu';

const aboutSubLinks = [
  { name: 'Core Value', hash: '#core-value' },
  { name: 'Meet Our Team', hash: '' },
  { name: 'Infrastructure', hash: '#infrastructure' },
  { name: 'Our Capabilities', hash: '#our-capabilities' },
  { name: 'Quality Assurance', hash: '#quality-assurance' },
  { name: 'Our USP', hash: '#our-usp' },
  { name: 'Global Reach', hash: '#across-the-globe' },
  { name: 'CSR', hash: '#csr' },
]

const navLinks = [
  { name: 'About', path: '/about', dropdown: aboutSubLinks },
  { name: 'Mfg. Capabilities', path: '/manufacturing-process' },
  { name: 'Products', path: '/product' },
  { name: 'Service', path: '/contact' },
  { name: 'RFQ', path: '/contact' },
  { name: 'Updates', path: '/blog' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => setIsOpen(prev => !prev);
  const handleMenuOpen = () => setIsMenuOpen(true);
  const handleMenuClose = () => setIsMenuOpen(false);

  // Lock body scroll when fullscreen menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('fm-body-lock')
      if (window.__lenis) window.__lenis.stop()
    } else {
      document.body.classList.remove('fm-body-lock')
      if (window.__lenis) window.__lenis.start()
    }
    return () => {
      document.body.classList.remove('fm-body-lock')
      if (window.__lenis) window.__lenis.start()
    }
  }, [isMenuOpen])

  return (
    <header className="site-header">
      <nav className="navbar navbar-expand-lg p-0">
        <div className="container nav-shell">
          <Link className="navbar-brand brand-wrap d-flex align-items-center" to="/">
            <img src={companyLogo} className="brand-logo brand-logo--desktop" alt="Ishita Industries" />
            <img src={companyLogoMobile} className="brand-logo brand-logo--mobile" alt="Ishita Industries" />
          </Link>

          {/* Menu button — acts as toggler on mobile */}
          <button
            type="button"
            className={`menu-btn navbar-toggler border-0 shadow-none d-lg-none ${isOpen ? 'is-open' : ''}`}
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
            aria-controls="mainNavbar"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
            onClick={handleToggle}
          >
            Menu
            <span className="menu-icon" aria-hidden="true">
              <img
                src={ToggleLogo}
                alt=""
                className={`toggle-icon ${isOpen ? 'rotate' : ''}`}
              />
            </span>
          </button>

          <div className="collapse navbar-collapse justify-content-lg-between" id="mainNavbar">
            <ul className="navbar-nav mx-auto nav-links-list">
              {navLinks.map((link) => (
                <li className={`nav-item${link.dropdown ? ' has-dropdown' : ''}`} key={link.name}>
                  <Link className="nav-link" to={link.path}>{link.name}</Link>
                  {link.dropdown && (
                    <ul className="nav-dropdown">
                      {link.dropdown.map((sub) => (
                        <li key={sub.name}>
                          <Link to={`/about${sub.hash}`}>{sub.name}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>

            <div className="nav-actions d-flex align-items-center">
              <button type="button" className="icon-button" aria-label="Change language">
                <span className="icon-globe" aria-hidden="true">
                  <img src={browserLogo} alt="" />
                </span>
              </button>
              <button type="button" className="brochure-btn">
                Brochure
                <span className="brochure-icon" aria-hidden="true">
                  <img src={downloadLogo} alt="" />
                </span>
              </button>

            </div>
          </div>
        </div>
      </nav>

      {/* Fullscreen menu overlay */}
      <FullscreenMenu isOpen={isMenuOpen} onClose={handleMenuClose} />
    </header>
  )
}

export default Navbar