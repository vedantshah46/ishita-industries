import { useState, useEffect, useRef } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import './Navbar.css'
import companyLogo from '../../Images/ishita-navbar-logo.png'
import companyLogoMobile from '../../Images/ishita-navbar-logo-mobile.png'
import browserLogo from '../../Images/navbar-browser-logo.png'
import downloadLogo from '../../Images/navbar-download-logo.png'
import ToggleLogo from '../../Images/navbar-menu-toggle-logo.png'
import FullscreenMenu from '../FullscreenMenu/FullscreenMenu'

const languages = [
  { label: 'European', code: 'eu' },
  { label: 'Italian',  code: 'it' },
  { label: 'German',   code: 'de' },
  { label: 'French',   code: 'fr' },
  { label: 'Spanish',  code: 'es' },
  { label: 'English',  code: 'en' },
]

const aboutSubLinks = [
  { key: 'about_sections.core_value',       hash: '#core-value' },
  { key: 'about_sections.meet_our_team',    hash: '' },
  { key: 'about_sections.infrastructure',   hash: '#infrastructure' },
  { key: 'about_sections.our_capabilities', hash: '#our-capabilities' },
  { key: 'about_sections.quality_assurance',hash: '#quality-assurance' },
  { key: 'about_sections.our_usp',          hash: '#our-usp' },
  { key: 'about_sections.global_reach',     hash: '#across-the-globe' },
  { key: 'about_sections.csr',              hash: '#csr' },
]

const navLinks = [
  { key: 'nav.about',            to: '/about', dropdown: aboutSubLinks },
  { key: 'nav.mfg_capabilities', to: '/manufacturing-process' },
  { key: 'nav.products',         to: '/product' },
  { key: 'nav.service',          to: '/contact' },
  { key: 'nav.rfq',              to: '/contact' },
  { key: 'nav.updates',          to: '/blog' },
]

function NavbarRouter() {
  const { t, i18n } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isLangOpen, setIsLangOpen] = useState(false)
  const langRef = useRef(null)
  const location = useLocation()

  const isImportExport    = location.pathname === '/import-export'
  const isProductPage     = location.pathname === '/product'
  const isQualityPage     = location.pathname === '/quality'
  const isLogisticPage    = location.pathname === '/global-logistic'
  const isPackagingPage   = location.pathname === '/custom-packaging'
  const isAssemblyPage    = location.pathname === '/assembly-kitting'
  const isEnvironmentPage = location.pathname === '/environment'
  const isContactPage     = location.pathname === '/contact'
  const isBlogPage        = location.pathname === '/blog'
  const isProductInnerPage = location.pathname.startsWith('/product/')

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) {
        setIsLangOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

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

  const handleToggle  = () => setIsOpen((prev) => !prev)
  const handleNavClick = () => setIsOpen(false)
  const handleMenuOpen  = () => setIsMenuOpen(true)
  const handleMenuClose = () => setIsMenuOpen(false)

  const handleLangSelect = (code) => {
    i18n.changeLanguage(code)
    setIsLangOpen(false)
  }

  const headerClass = [
    'site-header',
    isScrolled       ? 'scrolled'         : '',
    isImportExport   ? 'theme-transparent' : '',
    (isProductPage || isProductInnerPage) ? 'theme-white' : '',
    (isQualityPage || isLogisticPage || isPackagingPage || isAssemblyPage ||
     isEnvironmentPage || isContactPage || isBlogPage) ? 'theme-f9' : '',
  ].filter(Boolean).join(' ')

  return (
    <>
      <header className={headerClass}>
        <nav className="navbar navbar-expand-lg p-0">
          <div className="container nav-shell">
            <NavLink
              className="navbar-brand brand-wrap d-flex align-items-center"
              to="/"
              onClick={handleNavClick}
            >
              <img src={companyLogo} className="brand-logo brand-logo--desktop" alt="Ishita Industries" />
              <img src={companyLogoMobile} className="brand-logo brand-logo--mobile" alt="Ishita Industries" />
            </NavLink>

            {/* Mobile toggle */}
            <button
              type="button"
              className={`menu-btn navbar-toggler border-0 shadow-none d-lg-none ${isMenuOpen ? 'is-open' : ''}`}
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation"
              onClick={handleMenuOpen}
            >
              {t('nav.menu')}
              <span className="menu-icon" aria-hidden="true">
                <img src={ToggleLogo} alt="" className={`toggle-icon ${isMenuOpen ? 'rotate' : ''}`} />
              </span>
            </button>

            <div className="collapse navbar-collapse justify-content-lg-between" id="mainNavbar">
              <ul className="navbar-nav mx-auto nav-links-list">
                {navLinks.map((link) => (
                  <li className={`nav-item${link.dropdown ? ' has-dropdown' : ''}`} key={link.key}>
                    <NavLink
                      className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
                      to={link.to}
                      end={link.to === '/'}
                      onClick={handleNavClick}
                    >
                      {t(link.key)}
                    </NavLink>
                    {link.dropdown && (
                      <ul className="nav-dropdown">
                        {link.dropdown.map((sub) => (
                          <li key={sub.key}>
                            <NavLink to={`/about${sub.hash}`} onClick={handleNavClick}>
                              {t(sub.key)}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>

              <div className="nav-actions d-flex align-items-center">
                {/* Language picker */}
                <div className="lang-dropdown-wrap" ref={langRef}>
                  <button
                    type="button"
                    className="icon-button"
                    aria-label="Change language"
                    aria-expanded={isLangOpen}
                    onClick={() => setIsLangOpen((prev) => !prev)}
                  >
                    <span className="icon-globe" aria-hidden="true">
                      <img src={browserLogo} alt="" />
                    </span>
                  </button>
                  {isLangOpen && (
                    <ul className="lang-dropdown">
                      {languages.map((lang) => (
                        <li key={lang.code}>
                          <button
                            type="button"
                            className={`lang-option${i18n.language === lang.code ? ' lang-option--active' : ''}`}
                            onClick={() => handleLangSelect(lang.code)}
                          >
                            {lang.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <button type="button" className="brochure-btn">
                  {t('nav.brochure')}
                  <span className="brochure-icon" aria-hidden="true">
                    <img src={downloadLogo} alt="" />
                  </span>
                </button>

                {/* Desktop Menu button */}
                <button type="button" className="menu-btn d-none d-lg-inline-flex" onClick={handleMenuOpen}>
                  {t('nav.menu')}
                  <span className="menu-icon" aria-hidden="true">
                    <img src={ToggleLogo} alt="" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <FullscreenMenu isOpen={isMenuOpen} onClose={handleMenuClose} />
    </>
  )
}

export default NavbarRouter
