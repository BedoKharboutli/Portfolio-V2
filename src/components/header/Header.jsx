import React from 'react';
import { useState } from 'react';
import './header.css'

export default function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" }
  ]

  return (
    <header className='header'>
      <div className='header-content'>
        {/* Logo/Brand */}
        <div className='brand'>
          <span className='brand-text'>AK</span>
        </div>

        {/* Desktop Navigation */}
        <nav className='desktop-nav'>
          <ul className='nav-list'>
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href} className='nav-link'>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA Button */}
        <div className='header-cta'>
          <a href="#contact" className='btn-primary'>
            Get In Touch
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setShowMobileMenu(true)} 
          className='mobile-menu-btn'
          aria-label="Open mobile menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {showMobileMenu && (
        <div className='mobile-overlay'>
          <div className='mobile-menu'>
            <div className='mobile-menu-header'>
              <span className='brand-text'>AK</span>
              <button 
                onClick={() => setShowMobileMenu(false)}
                className='close-btn'
                aria-label="Close mobile menu"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
            </div>
            
            <nav className='mobile-nav'>
              {navItems.map((item, index) => (
                <a 
                  key={index}
                  href={item.href} 
                  className='mobile-nav-link'
                  onClick={() => setShowMobileMenu(false)}
                >
                  {item.label}
                </a>
              ))}
              <a 
                href="#contact" 
                className='btn-primary mobile-cta'
                onClick={() => setShowMobileMenu(false)}
              >
                Get In Touch
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
