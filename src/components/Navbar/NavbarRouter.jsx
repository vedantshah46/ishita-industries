import { useState, useEffect, useRef } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import './Navbar.css'
import companyLogo from '../../Images/ishita-navbar-logo.png'
import companyLogoMobile from '../../Images/ishita-navbar-logo.png'
import browserLogo from '../../Images/navbar-browser-logo.png'
import downloadLogo from '../../Images/navbar-download-logo.png'
import ToggleLogo from '../../Images/navbar-menu-toggle-logo.png'
import { CATEGORIES } from '../../data/categories'
import brochurePdf from '../../assets/Ishita Ind. Brochure.pdf'

const languages = [
    { label: 'English(EN)', code: 'en' },
    { label: 'German(DE)', code: 'de' },
    { label: 'French(FR)', code: 'fr' },
    { label: 'Spanish(ES)', code: 'es' },
    { label: 'Italian(IT)', code: 'it' },
    { label: 'Dutch(NL)', code: 'nl' },
    { label: 'Portuguese(PT)', code: 'pt' },
]

const aboutSubLinks = [
  { key: 'about_sections.core_value', hash: '#core-value' },
  { key: 'about_sections.meet_our_team', hash: '' },
  { key: 'about_sections.infrastructure', hash: '#infrastructure' },
  { key: 'nav.mfg_capabilities', hash: '#our-capabilities' },
  { key: 'about_sections.quality_assurance', hash: '#quality-assurance' },
  { key: 'about_sections.our_usp', hash: '#our-usp' },
  { key: 'about_sections.global_reach', hash: '#across-the-globe' },
  { key: 'about_sections.csr', hash: '#csr' },
]


const serviceSubLinks = [
  { key: 'services_dropdown.shipping', to: '/global-logistic' },
  { key: 'services_dropdown.packaging', to: '/custom-packaging' },
  { key: 'services_dropdown.assembly', to: '/assembly-kitting' },
  { key: 'services_dropdown.oem', to: '/oem-manufacturing' },
  { key: 'services_dropdown.contract', to: '/contract-manufacturing' },
]

const sustainabilitySubLinks = [
  { key: 'sustainability_dropdown.sustainability', to: '/sustainability' },
  { key: 'sustainability_dropdown.environmental', to: '/environment' },
]

const navLinks = [
  { key: 'nav.about', to: '/about', dropdown: aboutSubLinks },
  { key: 'nav.products', to: '/product', flyout: true },
  { key: 'nav.quality', to: '/quality' },
  { key: 'nav.services', to: '/contact', dropdown: serviceSubLinks },
  { key: 'nav.mfg_capabilities', to: '/manufacturing-process' },
  { key: 'nav.blog', to: '/blog' },
  { key: 'nav.contact', to: '/contact' },
]

function NavbarRouter() {
  const { t, i18n } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState('nav.about')
  const [isScrolled, setIsScrolled] = useState(false)
  const [isLangOpen, setIsLangOpen] = useState(false)
  const langRef = useRef(null)
  const location = useLocation()

  const isImportExport = location.pathname === '/import-export'
  const isProductPage = location.pathname === '/product'
  const isQualityPage = location.pathname === '/quality'
  const isLogisticPage = location.pathname === '/global-logistic'
  const isPackagingPage = location.pathname === '/custom-packaging'
  const isAssemblyPage = location.pathname === '/assembly-kitting'
  const isOEMPage = location.pathname === '/oem-manufacturing'
  const isContractPage = location.pathname === '/contract-manufacturing'
  const isEnvironmentPage = location.pathname === '/environment'
  const isContactPage = location.pathname === '/contact'
  const isBlogPage = location.pathname === '/blog'
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

  const handleToggle = () => setIsOpen((prev) => !prev)
  const handleNavClick = () => setIsOpen(false)

  useEffect(() => {
    if (isOpen) {
      setOpenDropdown('nav.about')
    }
  }, [isOpen])

  const handleLangSelect = (code) => {
    i18n.changeLanguage(code)
    setIsLangOpen(false)
  }

  const headerClass = [
    'site-header',
    isScrolled ? 'scrolled' : '',
    isImportExport ? 'theme-transparent' : '',
    (isProductPage || isProductInnerPage) ? 'theme-white' : '',
    (isQualityPage || isLogisticPage || isPackagingPage || isAssemblyPage ||
      isOEMPage || isContractPage ||
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
              className={`menu-btn navbar-toggler border-0 shadow-none d-lg-none ${isOpen ? 'is-open' : ''}`}
              data-bs-toggle="collapse"
              data-bs-target="#mainNavbar"
              aria-controls="mainNavbar"
              aria-expanded={isOpen}
              aria-label="Toggle navigation"
              onClick={handleToggle}
            >
              <span className="menu-icon" aria-hidden="true">
                <img src={ToggleLogo} alt="" className={`toggle-icon ${isOpen ? 'rotate' : ''}`} />
              </span>
            </button>

            <div className="collapse navbar-collapse justify-content-lg-between" id="mainNavbar">
              <ul className="navbar-nav mx-auto nav-links-list">
                {navLinks.map((link) => {
                  const hasAnyDropdown = link.dropdown || link.flyout
                  return (
                  <li className={`nav-item${hasAnyDropdown ? ' has-dropdown' : ''}${link.flyout ? ' has-flyout' : ''} ${openDropdown === link.key ? 'mobile-open' : ''}`} key={link.key}>
                    <div className="nav-item-wrap">
                      <NavLink
                        className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
                        to={link.to}
                        end={link.to === '/'}
                        onClick={handleNavClick}
                      >
                        {t(link.key)}
                      </NavLink>
                      {hasAnyDropdown && (
                        <button
                          type="button"
                          className={`mobile-dropdown-toggle d-lg-none ${openDropdown === link.key ? 'is-rotated' : ''}`}
                          onClick={() => setOpenDropdown(prev => prev === link.key ? '' : link.key)}
                          aria-label="Toggle Dropdown"
                        >
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="6 9 12 15 18 9"></polyline>
                          </svg>
                        </button>
                      )}
                    </div>

                    {/* Normal dropdown */}
                    {link.dropdown && (
                      <ul className="nav-dropdown">
                        {link.dropdown.map((sub) => (
                          <li key={sub.key}>
                            <NavLink
                              to={sub.to ? sub.to : `/about${sub.hash}`}
                              onClick={handleNavClick}
                            >
                              {t(sub.key)}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Two-level flyout for Products */}
                    {link.flyout && (
                      <ul className="nav-dropdown nav-dropdown--flyout">
                        {CATEGORIES.map((cat) => (
                          <li key={cat.slug} className="flyout-item">
                            <NavLink to={`/product/${cat.slug}`} onClick={handleNavClick}>
                              {cat.name}
                              <svg className="flyout-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="9 18 15 12 9 6"></polyline>
                              </svg>
                            </NavLink>
                            <ul className="flyout-submenu">
                              {cat.subcategories.map((sub) => (
                                <li key={sub.slug}>
                                  <NavLink to={`/product/${cat.slug}/${sub.slug}`} onClick={handleNavClick}>
                                    {sub.name}
                                  </NavLink>
                                </li>
                              ))}
                            </ul>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                  )
                })}
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

                <a
                  href={brochurePdf}
                  download="Ishita Ind. Brochure.pdf"
                  className="brochure-btn"
                >
                  {t('nav.brochure')}
                  <span className="brochure-icon" aria-hidden="true">
                    <img src={downloadLogo} alt="" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default NavbarRouter
