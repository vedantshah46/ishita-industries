import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import './Navbar.css'
import companyLogo from '../../Images/ishita-navbar-logo.png'
import companyLogoMobile from '../../Images/ishita-navbar-logo-mobile.png'
import browserLogo from '../../Images/navbar-browser-logo.png'
import downloadLogo from '../../Images/navbar-download-logo.png'
import ToggleLogo from '../../Images/navbar-menu-toggle-logo.png'
import FullscreenMenu from '../FullscreenMenu/FullscreenMenu'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Product', to: '/product' },
  { label: 'Quality', to: '/quality' },
]

function NavbarRouter() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()
  const isImportExport = location.pathname === '/import-export'
  const isProductPage = location.pathname === '/product'
  const isQualityPage = location.pathname === '/quality'
  const isLogisticPage = location.pathname === '/global-logistic'
  const isPackagingPage = location.pathname === '/custom-packaging'
  const isAssemblyPage = location.pathname === '/assembly-kitting'
  const isEnvironmentPage = location.pathname === '/environment'
  const isContactPage = location.pathname === '/contact'
  const isBlogPage = location.pathname === '/blog'
  const isProductInnerPage = location.pathname.startsWith('/product/')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleToggle = () => setIsOpen((prev) => !prev)
  const handleNavClick = () => setIsOpen(false)

  const handleMenuOpen = () => setIsMenuOpen(true)
  const handleMenuClose = () => setIsMenuOpen(false)

  // Lock body scroll when fullscreen menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('fm-body-lock')
      document.documentElement.classList.add('fm-body-lock')
    } else {
      document.body.classList.remove('fm-body-lock')
      document.documentElement.classList.remove('fm-body-lock')
    }
    return () => {
      document.body.classList.remove('fm-body-lock')
      document.documentElement.classList.remove('fm-body-lock')
    }
  }, [isMenuOpen])

  return (
    <>
      <header className={`site-header${isScrolled ? ' scrolled' : ''}${isImportExport ? ' theme-transparent' : ''}${isProductPage || isProductInnerPage ? ' theme-white' : ''}${isQualityPage || isLogisticPage || isPackagingPage || isAssemblyPage || isEnvironmentPage || isContactPage || isBlogPage ? ' theme-f9' : ''}`}>
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
              className={`menu-btn navbar-toggler border-0 shadow-none d-lg-none ${isMenuOpen ? 'is-open' : ''}`}
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation"
              onClick={handleMenuOpen}
            >
              Menu
              <span className="menu-icon" aria-hidden="true">
                <img src={ToggleLogo} alt="" className={`toggle-icon ${isMenuOpen ? 'rotate' : ''}`} />
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
      </header>

      {/* Fullscreen menu overlay */}
      <FullscreenMenu isOpen={isMenuOpen} onClose={handleMenuClose} />
    </>
  )
}

export default NavbarRouter
