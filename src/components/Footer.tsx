import React from 'react';
import { Heart, Globe, Phone, Mail, MapPin, Lock } from 'lucide-react';
import { Language } from '../types';
import { PageRoute } from '../types/routes';
import { translations } from '../data/translations';
import { ImageWithFallback } from './ImageWithFallback';
import { InstagramIcon, FacebookIcon } from './SocialIcons';

interface FooterProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  onNavigate: (route: PageRoute) => void;
}

export const Footer: React.FC<FooterProps> = ({
  currentLang,
  onLanguageChange,
  onNavigate
}) => {
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
            <div
              className="footer-logo-row"
              onClick={() => onNavigate('home')}
              role="button"
              tabIndex={0}
              style={{ cursor: 'pointer' }}
            >
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
                <span className="footer-brand-sub">सोलापूर, महाराष्ट्र</span>
              </div>
            </div>

            <p className="footer-desc">{t.footer.aboutDesc}</p>

            <div className="footer-motto-badge">
              <span>{t.footer.motto}</span>
            </div>

            {/* Official Social Links in Footer */}
            <div className="footer-social-box">
              <span className="footer-social-title">
                {currentLang === 'mr' ? 'सोशल मीडिया फॉलो करा:' : 'Connect With Us:'}
              </span>
              <div className="footer-social-links">
                <a
                  href="https://www.instagram.com/gsfsolapur/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-btn footer-insta-btn"
                  title="Follow us on Instagram @gsfsolapur"
                  aria-label="Instagram"
                >
                  <InstagramIcon size={18} />
                  <span>Instagram</span>
                </a>
                <a
                  href="https://www.facebook.com/share/1FWH8sPgXr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-btn footer-fb-btn"
                  title="Follow us on Facebook"
                  aria-label="Facebook"
                >
                  <FacebookIcon size={18} />
                  <span>Facebook</span>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Governance & About */}
          <div className="footer-col">
            <h4 className="footer-heading">{t.footer.governance}</h4>
            <ul className="footer-links-list">
              <li>
                <button onClick={() => onNavigate('home')} className="footer-link-btn">
                  {t.nav.home}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="footer-link-btn">
                  {t.nav.about}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('managing-committee')} className="footer-link-btn">
                  {t.nav.managingCommittee}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('advisory-committee')} className="footer-link-btn">
                  {t.nav.advisoryCommittee}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('mission-vision')} className="footer-link-btn">
                  {t.nav.mission}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('privacy-policy')} className="footer-link-btn">
                  {t.nav.privacyPolicy}
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Key Initiatives & Gallery */}
          <div className="footer-col">
            <h4 className="footer-heading">{t.footer.programmes}</h4>
            <ul className="footer-links-list">
              <li>
                <button onClick={() => onNavigate('events')} className="footer-link-btn">
                  {currentLang === 'mr' ? 'उपक्रम व छायाचित्र दालन (Events Gallery)' : 'Events & Photo Gallery'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('health-camps')} className="footer-link-btn">
                  {t.nav.healthCamps}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('blood-donation')} className="footer-link-btn">
                  {t.nav.bloodDonation}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('sports-youth')} className="footer-link-btn">
                  {t.nav.sportsYouth}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('education-social')} className="footer-link-btn">
                  {t.nav.educationSocial}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('volunteer')} className="footer-link-btn">
                  {t.nav.volunteer}
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Language Toggle */}
          <div className="footer-col footer-contact-col">
            <h4 className="footer-heading">{t.footer.contactInfo}</h4>
            <ul className="footer-contact-list">
              <li>
                <MapPin size={16} className="f-icon" />
                <span>१०२ सी ७३, भवानी पेठ, सोलापूर - ४१३००२</span>
              </li>
              <li>
                <Phone size={16} className="f-icon" />
                <a href="tel:+919970610781">+91 9970610781</a>
              </li>
              <li>
                <Mail size={16} className="f-icon" />
                <a href="mailto:geetgangasocialfoundation@gmail.com">geetgangasocialfoundation@gmail.com</a>
              </li>
            </ul>

            <div className="footer-lang-box">
              <button onClick={toggleLang} className="btn btn-sm btn-outline">
                <Globe size={14} className="btn-icon" />
                <span>भाषा बदला / Switch: {t.nav.switchLang}</span>
              </button>
            </div>

            <div className="footer-donate-btn-wrap" style={{ marginTop: '1rem' }}>
              <button
                onClick={() => onNavigate('donate')}
                className="btn btn-donate-header btn-block"
              >
                <Heart size={16} className="btn-icon" />
                <span>{t.donation.scanHeading}</span>
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
          <div className="footer-bottom-links">
            <button onClick={() => onNavigate('privacy-policy')} className="footer-link-inline">
              <Lock size={12} className="inline-icon" />
              <span>{t.nav.privacyPolicy}</span>
            </button>
            <span>•</span>
            <div className="footer-made-with">
              <span>{currentLang === 'mr' ? 'समाजसेवेसाठी समर्पित' : 'Dedicated to Social Service'}</span>
              <Heart size={14} className="heart-icon" color="#E11D48" />
              <span>सोलापूर, महाराष्ट्र</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
