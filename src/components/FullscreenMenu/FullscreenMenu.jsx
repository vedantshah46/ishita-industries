import { useState, useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import anime from '../../libs/anime'
import './FullscreenMenu.css'

import menuItem1 from '../../Images/menu_item-1.svg'
import menuItem2 from '../../Images/menu_item-2.svg'
import menuItem3 from '../../Images/menu_item-3.svg'
import menuItem4 from '../../Images/menu_item-4.svg'

const menuLinks = [
  { label: 'Home', to: '/' },
  {
    label: 'About',
    to: '/about',
    subLinks: [
      { label: 'Sustainability', to: '/sustainability' },
      { label: 'Environmental', to: '/environment' }
    ]
  },
  {
    label: 'Products',
    to: '/product',
    subLinks: [
      { label: 'Brass Turned Components', to: '/product/electric-pin' },
      { label: 'Brass Forged Components', to: '/product/electric-pin' },
      { label: 'Brass Milling Components', to: '/product/electric-pin' },
      { label: 'Brass Broach Components', to: '/product/electric-pin' },
      { label: 'Brass Stamped Components', to: '/product/electric-pin' }
    ]
  },
  {
    label: 'Services',
    to: '#',
    subLinks: [
      { label: 'Global shipping & logistic', to: '/global-logistic' },
      { label: 'Custom Packaging', to: '/custom-packaging' },
      { label: 'Assembly & Kitting', to: '/assembly-kitting' }
    ]
  },
  { label: 'Manufacturing Process', to: '/manufacturing-process' },
  { label: 'Quality', to: '/quality' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
]

function FullscreenMenu({ isOpen, onClose }) {
  const [openDropdown, setOpenDropdown] = useState('About')
  const [isVisible, setIsVisible] = useState(false)

  // Reset to About open every time menu opens
  useEffect(() => {
    if (isOpen) {
      setOpenDropdown('About')
      setIsVisible(true)
    }
  }, [isOpen])

  const handleDropdownToggle = (label) => {
    setOpenDropdown(prev => prev === label ? '' : label)
  }
  const backdropRef = useRef(null)
  const contentRef = useRef(null)
  const itemsRef = useRef([])
  const imagesRef = useRef([])
  const isFirstRender = useRef(true)

  useEffect(() => {
    if (!anime) return

    // Filter refs to remove any nulls
    const navItems = (itemsRef.current || []).filter(Boolean)
    const decorImages = (imagesRef.current || []).filter(Boolean)

    // Stop any ongoing animations on these targets to prevent conflicts
    const allTargets = [backdropRef.current, contentRef.current, ...navItems, ...decorImages].filter(Boolean)
    if (allTargets.length > 0) {
      anime.remove(allTargets)
    }

    if (isOpen) {
      isFirstRender.current = false

      // ── Open Animation Timeline ──
      const tl = anime.timeline({
        easing: 'easeOutQuart',
      })

      // 1. Backdrop fade in
      if (backdropRef.current) {
        tl.add({
          targets: backdropRef.current,
          opacity: [0, 1],
          duration: 400,
        })
      }

      // 2. Content slide in from right
      if (contentRef.current) {
        tl.add({
          targets: contentRef.current,
          translateX: ['100%', 0],
          duration: 800,
          easing: 'cubicBezier(0.16, 1, 0.3, 1)',
        }, '-=300')
      }

      // 3. Staggered reveal of nav items
      if (navItems.length > 0) {
        tl.add({
          targets: navItems,
          translateX: [-20, 0],
          opacity: [0, 1],
          delay: anime.stagger(60, { start: 200 }),
          duration: 600,
          easing: 'easeOutExpo',
        }, '-=600')
      }

      // 4. Staggered reveal of images
      if (decorImages.length > 0) {
        tl.add({
          targets: decorImages,
          opacity: [0, 1],
          scale: [0.9, 1],
          delay: anime.stagger(100, { start: 300 }),
          duration: 1000,
          easing: 'easeOutQuart',
        }, '-=800')
      }

    } else {
      // Don't run close animation on mount
      if (isFirstRender.current) {
        isFirstRender.current = false
        return
      }

      // ── Close Animation Timeline ──
      const tl = anime.timeline({
        easing: 'easeInQuart',
      })

      // 1. Staggered exit of items
      if (navItems.length > 0) {
        tl.add({
          targets: navItems,
          translateX: [0, 10],
          opacity: [1, 0],
          delay: anime.stagger(30),
          duration: 200,
        })
      }

      // 2. Images fade
      if (decorImages.length > 0) {
        tl.add({
          targets: decorImages,
          opacity: [1, 0],
          duration: 200,
        }, '-=200')
      }

      // 3. Content slide out to right
      if (contentRef.current) {
        tl.add({
          targets: contentRef.current,
          translateX: [0, '100%'],
          duration: 500,
          easing: 'cubicBezier(0.7, 0, 0.84, 0)',
        }, '-=100')
      }

      // 4. Backdrop fade out
      if (backdropRef.current) {
        tl.add({
          targets: backdropRef.current,
          opacity: [1, 0],
          duration: 300,
          complete: () => setIsVisible(false),
        }, '-=300')
      }
    }
  }, [isOpen])

  return (
    <div className={`fullscreen-menu${isVisible ? ' is-open' : ''}`}>
      <div className="fm-backdrop" ref={backdropRef} onClick={onClose} />
      <div className="fm-content" ref={contentRef}>
        {/* Decorative Product Images */}
        <div className="fm-images">
          <img src={menuItem1} alt="" className="fm-img fm-img--1" ref={(el) => (imagesRef.current[0] = el)} />
          <img src={menuItem2} alt="" className="fm-img fm-img--2" ref={(el) => (imagesRef.current[1] = el)} />
          <img src={menuItem3} alt="" className="fm-img fm-img--3" ref={(el) => (imagesRef.current[2] = el)} />
          <img src={menuItem4} alt="" className="fm-img fm-img--4" ref={(el) => (imagesRef.current[3] = el)} />
        </div>

        <div className="fm-container">
          {/* Header: Back Arrow + Menu Title */}
          <div className="fm-header">
            <button className="fm-back" onClick={onClose} aria-label="Close menu">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
            </button>
            <h2 className="fm-title">Menu</h2>
          </div>

          {/* Navigation Links */}
          <ul className="fm-list">
            {menuLinks.map((link, index) => (
              <li
                className="fm-item"
                key={`${link.label}-${index}`}
                ref={(el) => (itemsRef.current[index] = el)}
              >
                <div className="fm-link-row">
                  <NavLink
                    className="fm-link"
                    to={link.to}
                    onClick={onClose}
                  >
                    {link.label}
                  </NavLink>
                  {link.subLinks && (
                    <button
                      className={`fm-chevron ${openDropdown === link.label ? 'is-rotated' : ''}`}
                      onClick={() => handleDropdownToggle(link.label)}
                      aria-label="Toggle sub-menu"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </button>
                  )}
                </div>

                {link.subLinks && (
                  <div className={`fm-sub-menu ${openDropdown === link.label ? 'is-open' : ''}`}>
                    <ul className="fm-sub-list">
                      {link.subLinks.map(sub => (
                        <li key={sub.label}>
                          <NavLink className="fm-sub-link" to={sub.to} onClick={onClose}>
                            {sub.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default FullscreenMenu
