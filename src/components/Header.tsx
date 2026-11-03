import React, { useState, useEffect, useRef } from 'react';
import {
  Menu,
  X,
  Heart,
  Globe,
  Phone,
  ChevronDown,
  Building2,
  Users,
  Compass,
  Award,
  Stethoscope,
  HeartHandshake,
  Trophy,
  GraduationCap,
  Calendar,
  Image,
  Video,
  Bell
} from 'lucide-react';
import { Language } from '../types';
import { PageRoute } from '../types/routes';
import { translations } from '../data/translations';
import { ImageWithFallback } from './ImageWithFallback';
import { InstagramIcon, FacebookIcon } from './SocialIcons';

interface HeaderProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  currentRoute: PageRoute;
  onNavigate: (route: PageRoute) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentLang,
  onLanguageChange,
  currentRoute,
  onNavigate
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const t = translations[currentLang];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleLang = () => {
    onLanguageChange(currentLang === 'mr' ? 'en' : 'mr');
  };

  const handleNav = (route: PageRoute) => {
    onNavigate(route);
    setMobileMenuOpen(false);
    setOpenDropdown(null);
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
              <span>WhatsApp: 9970610781</span>
            </a>
            <div className="top-social-divider" aria-hidden="true">|</div>
            <a
              href="https://www.instagram.com/gsfsolapur/"
              target="_blank"
              rel="noopener noreferrer"
              className="top-social-link top-insta"
              title="Instagram @gsfsolapur"
              aria-label="Instagram"
            >
              <InstagramIcon size={14} />
              <span className="top-social-text">Instagram</span>
            </a>
            <a
              href="https://www.facebook.com/share/1FWH8sPgXr/"
              target="_blank"
              rel="noopener noreferrer"
              className="top-social-link top-fb"
              title="Facebook"
              aria-label="Facebook"
            >
              <FacebookIcon size={14} />
              <span className="top-social-text">Facebook</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main sticky navigation header */}
      <header className={`site-header ${isScrolled ? 'is-sticky' : ''}`}>
        <div className="container header-container" ref={dropdownRef}>
          {/* Brand Logo & Title */}
          <button
            onClick={() => handleNav('home')}
            className="brand-link"
            aria-label="Geetganga Social Foundation Homepage"
          >
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
          </button>

          {/* Desktop Navigation Links with Dropdowns */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            <ul className="nav-list">
              {/* Home */}
              <li className="nav-item">
                <button
                  onClick={() => handleNav('home')}
                  className={`nav-link ${currentRoute === 'home' ? 'is-active' : ''}`}
                >
                  {t.nav.home}
                </button>
              </li>

              {/* About Us Dropdown */}
              <li
                className={`nav-item dropdown-item ${openDropdown === 'about' ? 'is-open' : ''}`}
                onMouseEnter={() => setOpenDropdown('about')}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  className="nav-link dropdown-toggle"
                  onClick={() => setOpenDropdown(openDropdown === 'about' ? null : 'about')}
                  aria-expanded={openDropdown === 'about'}
                >
                  <span>{t.nav.aboutDropdown}</span>
                  <ChevronDown size={14} className="dropdown-chevron" />
                </button>
                <div className="dropdown-menu">
                  <button
                    onClick={() => handleNav('about')}
                    className={`dropdown-link ${currentRoute === 'about' ? 'is-active' : ''}`}
                  >
                    <Building2 size={16} className="dropdown-icon" />
                    <span>{t.nav.about}</span>
                  </button>
                  <button
                    onClick={() => handleNav('mission-vision')}
                    className={`dropdown-link ${currentRoute === 'mission-vision' ? 'is-active' : ''}`}
                  >
                    <Compass size={16} className="dropdown-icon" />
                    <span>{t.nav.mission}</span>
                  </button>
                  <button
                    onClick={() => handleNav('leadership')}
                    className={`dropdown-link ${currentRoute === 'leadership' ? 'is-active' : ''}`}
                  >
                    <Award size={16} className="dropdown-icon" />
                    <span>{t.nav.leadership}</span>
                  </button>
                  <button
                    onClick={() => handleNav('managing-committee')}
                    className={`dropdown-link ${currentRoute === 'managing-committee' ? 'is-active' : ''}`}
                  >
                    <Users size={16} className="dropdown-icon" />
                    <span>{t.nav.managingCommittee}</span>
                  </button>
                  <button
                    onClick={() => handleNav('advisory-committee')}
                    className={`dropdown-link ${currentRoute === 'advisory-committee' ? 'is-active' : ''}`}
                  >
                    <Users size={16} className="dropdown-icon" />
                    <span>{t.nav.advisoryCommittee}</span>
                  </button>
                </div>
              </li>

              {/* Key Programmes Dropdown */}
              <li
                className={`nav-item dropdown-item ${openDropdown === 'programmes' ? 'is-open' : ''}`}
                onMouseEnter={() => setOpenDropdown('programmes')}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  className="nav-link dropdown-toggle"
                  onClick={() => setOpenDropdown(openDropdown === 'programmes' ? null : 'programmes')}
                  aria-expanded={openDropdown === 'programmes'}
                >
                  <span>{t.nav.programmesDropdown}</span>
                  <ChevronDown size={14} className="dropdown-chevron" />
                </button>
                <div className="dropdown-menu">
                  <button
                    onClick={() => handleNav('health-camps')}
                    className={`dropdown-link ${currentRoute === 'health-camps' ? 'is-active' : ''}`}
                  >
                    <Stethoscope size={16} className="dropdown-icon" />
                    <span>{t.nav.healthCamps}</span>
                  </button>
                  <button
                    onClick={() => handleNav('blood-donation')}
                    className={`dropdown-link ${currentRoute === 'blood-donation' ? 'is-active' : ''}`}
                  >
                    <HeartHandshake size={16} className="dropdown-icon" />
                    <span>{t.nav.bloodDonation}</span>
                  </button>
                  <button
                    onClick={() => handleNav('sports-youth')}
                    className={`dropdown-link ${currentRoute === 'sports-youth' ? 'is-active' : ''}`}
                  >
                    <Trophy size={16} className="dropdown-icon" />
                    <span>{t.nav.sportsYouth}</span>
                  </button>
                  <button
                    onClick={() => handleNav('education-social')}
                    className={`dropdown-link ${currentRoute === 'education-social' ? 'is-active' : ''}`}
                  >
                    <GraduationCap size={16} className="dropdown-icon" />
                    <span>{t.nav.educationSocial}</span>
                  </button>
                </div>
              </li>

              {/* Media & Events Dropdown */}
              <li
                className={`nav-item dropdown-item ${openDropdown === 'media' ? 'is-open' : ''}`}
                onMouseEnter={() => setOpenDropdown('media')}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  className="nav-link dropdown-toggle"
                  onClick={() => setOpenDropdown(openDropdown === 'media' ? null : 'media')}
                  aria-expanded={openDropdown === 'media'}
                >
                  <span>{t.nav.mediaDropdown}</span>
                  <ChevronDown size={14} className="dropdown-chevron" />
                </button>
                <div className="dropdown-menu">
                  <button
                    onClick={() => handleNav('events')}
                    className={`dropdown-link ${currentRoute === 'events' ? 'is-active' : ''}`}
                  >
                    <Calendar size={16} className="dropdown-icon" />
                    <span>{t.nav.events}</span>
                  </button>
                  <button
                    onClick={() => handleNav('gallery')}
                    className={`dropdown-link ${currentRoute === 'gallery' ? 'is-active' : ''}`}
                  >
                    <Image size={16} className="dropdown-icon" />
                    <span>{t.nav.gallery}</span>
                  </button>
                  <button
                    onClick={() => handleNav('video-gallery')}
                    className={`dropdown-link ${currentRoute === 'video-gallery' ? 'is-active' : ''}`}
                  >
                    <Video size={16} className="dropdown-icon" />
                    <span>{t.nav.videoGallery}</span>
                  </button>
                  <button
                    onClick={() => handleNav('news')}
                    className={`dropdown-link ${currentRoute === 'news' ? 'is-active' : ''}`}
                  >
                    <Bell size={16} className="dropdown-icon" />
                    <span>{t.nav.news}</span>
                  </button>
                </div>
              </li>

              {/* Volunteer */}
              <li className="nav-item">
                <button
                  onClick={() => handleNav('volunteer')}
                  className={`nav-link ${currentRoute === 'volunteer' ? 'is-active' : ''}`}
                >
                  {t.nav.volunteer}
                </button>
              </li>

              {/* Contact */}
              <li className="nav-item">
                <button
                  onClick={() => handleNav('contact')}
                  className={`nav-link ${currentRoute === 'contact' ? 'is-active' : ''}`}
                >
                  {t.nav.contact}
                </button>
              </li>
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
            <button
              onClick={() => handleNav('donate')}
              className="btn btn-donate-header"
            >
              <Heart size={16} className="btn-icon" />
              <span>{t.nav.donateNow}</span>
            </button>

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

            <div className="mobile-nav-list">
              <button
                onClick={() => handleNav('home')}
                className={`mobile-nav-link ${currentRoute === 'home' ? 'is-active' : ''}`}
              >
                {t.nav.home}
              </button>

              {/* About Group */}
              <div className="mobile-group">
                <span className="mobile-group-title">{t.nav.aboutDropdown}</span>
                <div className="mobile-sublinks">
                  <button onClick={() => handleNav('about')} className="mobile-sublink">
                    • {t.nav.about}
                  </button>
                  <button onClick={() => handleNav('mission-vision')} className="mobile-sublink">
                    • {t.nav.mission}
                  </button>
                  <button onClick={() => handleNav('leadership')} className="mobile-sublink">
                    • {t.nav.leadership}
                  </button>
                  <button onClick={() => handleNav('managing-committee')} className="mobile-sublink">
                    • {t.nav.managingCommittee}
                  </button>
                  <button onClick={() => handleNav('advisory-committee')} className="mobile-sublink">
                    • {t.nav.advisoryCommittee}
                  </button>
                </div>
              </div>

              {/* Programmes Group */}
              <div className="mobile-group">
                <span className="mobile-group-title">{t.nav.programmesDropdown}</span>
                <div className="mobile-sublinks">
                  <button onClick={() => handleNav('health-camps')} className="mobile-sublink">
                    • {t.nav.healthCamps}
                  </button>
                  <button onClick={() => handleNav('blood-donation')} className="mobile-sublink">
                    • {t.nav.bloodDonation}
                  </button>
                  <button onClick={() => handleNav('sports-youth')} className="mobile-sublink">
                    • {t.nav.sportsYouth}
                  </button>
                  <button onClick={() => handleNav('education-social')} className="mobile-sublink">
                    • {t.nav.educationSocial}
                  </button>
                </div>
              </div>

              {/* Media Group */}
              <div className="mobile-group">
                <span className="mobile-group-title">{t.nav.mediaDropdown}</span>
                <div className="mobile-sublinks">
                  <button onClick={() => handleNav('events')} className="mobile-sublink">
                    • {t.nav.events}
                  </button>
                  <button onClick={() => handleNav('gallery')} className="mobile-sublink">
                    • {t.nav.gallery}
                  </button>
                  <button onClick={() => handleNav('video-gallery')} className="mobile-sublink">
                    • {t.nav.videoGallery}
                  </button>
                  <button onClick={() => handleNav('news')} className="mobile-sublink">
                    • {t.nav.news}
                  </button>
                </div>
              </div>

              <button onClick={() => handleNav('volunteer')} className="mobile-nav-link">
                {t.nav.volunteer}
              </button>
              <button onClick={() => handleNav('contact')} className="mobile-nav-link">
                {t.nav.contact}
              </button>
              <button onClick={() => handleNav('privacy-policy')} className="mobile-nav-link">
                {t.nav.privacyPolicy}
              </button>
            </div>

            <div className="mobile-nav-footer">
              <button
                onClick={() => handleNav('donate')}
                className="btn btn-primary btn-block"
              >
                <Heart size={18} className="btn-icon" />
                <span>{t.nav.donateNow}</span>
              </button>
              <a
                href="https://wa.me/919970610781"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-block"
              >
                <Phone size={18} className="btn-icon" />
                <span>WhatsApp: 9970610781</span>
              </a>

              <div className="mobile-social-row">
                <a
                  href="https://www.instagram.com/gsfsolapur/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mobile-social-btn mobile-insta-btn"
                  aria-label="Instagram @gsfsolapur"
                >
                  <InstagramIcon size={18} />
                  <span>Instagram</span>
                </a>
                <a
                  href="https://www.facebook.com/share/1FWH8sPgXr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mobile-social-btn mobile-fb-btn"
                  aria-label="Facebook"
                >
                  <FacebookIcon size={18} />
                  <span>Facebook</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
