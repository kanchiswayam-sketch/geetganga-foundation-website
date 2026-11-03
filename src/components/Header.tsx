import React, { useState, useEffect } from 'react';
import { Menu, X, Heart, Globe, Phone } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { ImageWithFallback } from './ImageWithFallback';

interface HeaderProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentLang, onLanguageChange }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[currentLang];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: t.nav.about },
    { href: '#mission', label: t.nav.mission },
    { href: '#activities', label: t.nav.activities },
    { href: '#gallery', label: t.nav.gallery },
    { href: '#donation', label: t.nav.donate },
    { href: '#volunteer', label: t.nav.volunteer },
    { href: '#contact', label: t.nav.contact }
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  const toggleLang = () => {
    onLanguageChange(currentLang === 'mr' ? 'en' : 'mr');
  };

  return (
    <>
      {/* Top emergency announcement & quick WhatsApp strip */}
      <div className="top-banner-strip">
        <div className="container top-banner-content">
          <div className="top-banner-left">
            <span className="top-badge">सोलापूर</span>
            <span className="top-motto">{t.meta.motto}</span>
          </div>
          <div className="top-banner-right">
            <a
              href="https://wa.me/919970610781"
              target="_blank"
              rel="noopener noreferrer"
              className="top-phone-link"
              title="Chat on WhatsApp: 9970610781"
            >
              <Phone size={13} className="inline-icon" />
              <span>हेल्पलाइन / WhatsApp: 9970610781</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main sticky navigation header */}
      <header className={`site-header ${isScrolled ? 'is-sticky' : ''}`}>
        <div className="container header-container">
          {/* Brand Logo & Title */}
          <a href="#" className="brand-link" aria-label="Geetganga Social Foundation Homepage">
            <div className="brand-logo-wrap">
              <ImageWithFallback
                src="./assets/logo.png"
                alt="Geetganga Social Foundation Solapur Logo"
                className="brand-logo-img"
                fallbackText="गीतगंगा"
              />
            </div>
            <div className="brand-text">
              <span className="brand-title">
                {currentLang === 'mr' ? 'गीतगंगा सोशल फाऊंडेशन' : 'GEETGANGA SOCIAL FOUNDATION'}
              </span>
              <span className="brand-subtitle">
                {currentLang === 'mr' ? 'सोलापूर (महाराष्ट्र)' : 'SOLAPUR (MAHARASHTRA)'}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            <ul className="nav-list">
              {navLinks.map((link) => (
                <li key={link.href} className="nav-item">
                  <a href={link.href} className="nav-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Action buttons (Language Switch & Donate) */}
          <div className="header-actions">
            {/* Language Switcher */}
            <button
              onClick={toggleLang}
              className="lang-switch-btn"
              aria-label={`Switch language to ${t.nav.switchLang}`}
              title={`Switch language to ${t.nav.switchLang}`}
            >
              <Globe size={16} />
              <span className="lang-text">{t.nav.switchLang}</span>
            </button>

            {/* Donate CTA button */}
            <a href="#donation" className="btn btn-donate-header">
              <Heart size={16} className="btn-icon" />
              <span>{t.nav.donateNow}</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-menu-toggle"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'is-open' : ''}`}>
          <div className="mobile-nav-inner">
            <div className="mobile-nav-header">
              <span className="mobile-nav-title">
                {currentLang === 'mr' ? 'मेनू' : 'Navigation Menu'}
              </span>
              <button
                onClick={toggleLang}
                className="lang-switch-btn mobile-lang-btn"
              >
                <Globe size={16} />
                <span>{t.nav.switchLang}</span>
              </button>
            </div>
            <ul className="mobile-nav-list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={handleLinkClick}
                    className="mobile-nav-link"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mobile-nav-footer">
              <a
                href="#donation"
                onClick={handleLinkClick}
                className="btn btn-primary btn-block"
              >
                <Heart size={18} className="btn-icon" />
                <span>{t.nav.donateNow}</span>
              </a>
              <a
                href="https://wa.me/919970610781"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-block"
              >
                <Phone size={18} className="btn-icon" />
                <span>WhatsApp: 9970610781</span>
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
