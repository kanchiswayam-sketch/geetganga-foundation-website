import React from 'react';
import { Heart, Globe, Phone, Mail, MapPin } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { ImageWithFallback } from './ImageWithFallback';

interface FooterProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

export const Footer: React.FC<FooterProps> = ({ currentLang, onLanguageChange }) => {
  const t = translations[currentLang];

  const toggleLang = () => {
    onLanguageChange(currentLang === 'mr' ? 'en' : 'mr');
  };

  return (
    <footer className="site-footer">
      <div className="container footer-container">
        {/* Top 4-column footer grid */}
        <div className="footer-grid">
          {/* Column 1: Brand Info */}
          <div className="footer-col footer-brand-col">
            <div className="footer-logo-row">
              <div className="footer-logo-wrap">
                <ImageWithFallback
                  src="./assets/logo.png"
                  alt="Geetganga Social Foundation Solapur Logo"
                  className="footer-logo-img"
                  fallbackText="गीतगंगा"
                />
              </div>
              <div>
                <h3 className="footer-brand-title">{t.footer.aboutTitle}</h3>
                <span className="footer-brand-sub">सोलापूर (महाराष्ट्र)</span>
              </div>
            </div>

            <p className="footer-desc">{t.footer.aboutDesc}</p>

            <div className="footer-motto-badge">
              <span>{t.footer.motto}</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h4 className="footer-heading">{t.footer.quickLinks}</h4>
            <ul className="footer-links-list">
              <li>
                <a href="#about">{t.nav.about}</a>
              </li>
              <li>
                <a href="#mission">{t.nav.mission}</a>
              </li>
              <li>
                <a href="#activities">{t.nav.activities}</a>
              </li>
              <li>
                <a href="#gallery">{t.nav.gallery}</a>
              </li>
              <li>
                <a href="#donation">{t.nav.donate}</a>
              </li>
              <li>
                <a href="#volunteer">{t.nav.volunteer}</a>
              </li>
              <li>
                <a href="#contact">{t.nav.contact}</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Key Activities */}
          <div className="footer-col">
            <h4 className="footer-heading">{t.footer.activities}</h4>
            <ul className="footer-links-list">
              <li>
                <a href="#activities">
                  {currentLang === 'mr' ? 'आरोग्य व वैद्यकीय शिबिरे' : 'Health & Medical Camps'}
                </a>
              </li>
              <li>
                <a href="#activities">
                  {currentLang === 'mr' ? 'रक्तदान व जनजागृती' : 'Blood Donation Drives'}
                </a>
              </li>
              <li>
                <a href="#activities">
                  {currentLang === 'mr' ? 'क्रीडा व युवा विकास' : 'Sports & Youth Development'}
                </a>
              </li>
              <li>
                <a href="#activities">
                  {currentLang === 'mr' ? 'शिक्षण व विद्यार्थी सहाय्य' : 'Education Support'}
                </a>
              </li>
              <li>
                <a href="#activities">
                  {currentLang === 'mr' ? 'समाजसेवा व लोककल्याण' : 'Social Service & Welfare'}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Language Toggle */}
          <div className="footer-col footer-contact-col">
            <h4 className="footer-heading">{t.footer.contactInfo}</h4>
            <ul className="footer-contact-list">
              <li>
                <MapPin size={16} className="f-icon" />
                <span>१०२ सी ७३, भवानी पेठ, सोलापूर</span>
              </li>
              <li>
                <Phone size={16} className="f-icon" />
                <a href="tel:+919970610781">+91 9970610781</a>
              </li>
              <li>
                <Mail size={16} className="f-icon" />
                <a href="mailto:gitgangafoundation@gmail.com">gitgangafoundation@gmail.com</a>
              </li>
            </ul>

            <div className="footer-lang-box">
              <button onClick={toggleLang} className="btn btn-sm btn-outline">
                <Globe size={14} className="btn-icon" />
                <span>भाषा बदला: {t.nav.switchLang}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Disclaimer Bar */}
        <div className="footer-disclaimer-bar">
          <p>{t.footer.disclaimer}</p>
        </div>

        {/* Copyright & Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">
            © {new Date().getFullYear()} {t.footer.copyright}
          </p>
          <div className="footer-made-with">
            <span>
              {currentLang === 'mr' ? 'समाजसेवेसाठी समर्पित' : 'Dedicated to Community Welfare'}
            </span>
            <Heart size={14} className="heart-icon" color="#E11D48" />
            <span>सोलापूर, महाराष्ट्र</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
