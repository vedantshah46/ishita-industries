import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import companyLogo from '../../Images/ishita-navbar-logo.png'
import companyLogoMobile from '../../Images/ishita-navbar-logo-mobile.png'
import browserLogo from '../../Images/navbar-browser-logo.png'
import downloadLogo from '../../Images/navbar-download-logo.png'
import ToggleLogo from '../../Images/navbar-menu-toggle-logo.png'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Product', to: '#' },
  { label: 'Quality', to: '#' },
]

function NavbarRouter() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      console.log('Scroll position:', window.scrollY)
      if (window.scrollY > 40) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleToggle = () => setIsOpen((prev) => !prev)
  const handleNavClick = () => setIsOpen(false)

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="navbar navbar-expand-lg p-0">
        <div className="container nav-shell">
          <NavLink
            className="navbar-brand brand-wrap d-flex align-items-center"
            to="/"
            onClick={handleNavClick}
          >
            <img
              src={companyLogo}
              className="brand-logo brand-logo--desktop"
              alt="Ishita Industries"
            />
            <img
              src={companyLogoMobile}
              className="brand-logo brand-logo--mobile"
              alt="Ishita Industries"
            />
          </NavLink>

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
              <img src={ToggleLogo} alt="" className={`toggle-icon ${isOpen ? 'rotate' : ''}`} />
            </span>
          </button>

          <div className="collapse navbar-collapse justify-content-lg-between" id="mainNavbar">
            <ul className="navbar-nav mx-auto nav-links-list">
              {navLinks.map((link) => (
                <li className="nav-item" key={link.label}>
                  {link.to === '#' ? (
                    <a className="nav-link" href="#">
                      {link.label}
                    </a>
                  ) : (
                    <NavLink
                      className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
                      to={link.to}
                      end={link.to === '/'}
                      onClick={handleNavClick}
                    >
                      {link.label}
                    </NavLink>
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

              <button type="button" className="menu-btn d-none d-lg-inline-flex">
                Menu
                <span className="menu-icon" aria-hidden="true">
                  <img src={ToggleLogo} alt="" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default NavbarRouter
