import './Navbar.css'
import companyLogo from '../../Images/ishita-navbar-logo.png';
import companyLogoMobile from '../../Images/ishita-navbar-logo-mobile.png';
import browserLogo from '../../Images/navbar-browser-logo.png';
import downloadLogo from '../../Images/navbar-download-logo.png';
import ToggleLogo from '../../Images/navbar-menu-toggle-logo.png';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FullscreenMenu from '../FullscreenMenu/FullscreenMenu';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Product', path: '/product' },
  { name: 'Quality', path: '/quality' }
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
                <li className="nav-item" key={link.name}>
                  <Link className="nav-link" to={link.path}>{link.name}</Link>
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

              {/* Desktop-only Menu button */}
              <button type="button" className="menu-btn d-none d-lg-inline-flex" onClick={handleMenuOpen}>
                Menu
                <span className="menu-icon" aria-hidden="true">
                  <img src={ToggleLogo} alt="" />
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