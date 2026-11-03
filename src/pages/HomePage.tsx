import React, { useState } from 'react';
import { Language } from '../types';
import { PageRoute } from '../types/routes';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { MissionVision } from '../components/MissionVision';
import { KeyActivities } from '../components/KeyActivities';
import { Gallery } from '../components/Gallery';
import { Donation } from '../components/Donation';
import { Volunteer } from '../components/Volunteer';
import { Contact } from '../components/Contact';
import { translations } from '../data/translations';
import {
  Users,
  Calendar,
  Heart,
  ArrowRight,
  Award,
  Video,
  FileText,
  X,
  Eye
} from 'lucide-react';

interface HomePageProps {
  currentLang: Language;
  onNavigate: (route: PageRoute) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ currentLang, onNavigate }) => {
  const t = translations[currentLang];
  const [certModalOpen, setCertModalOpen] = useState(false);

  return (
    <div className="home-page-wrapper">
      {/* 1. Large Photographic Hero Banner */}
      <Hero currentLang={currentLang} onNavigate={onNavigate} />

      {/* Quick Action Matrix for National NGO presentation */}
      <section className="quick-matrix-strip">
        <div className="container">
          <div className="matrix-grid">
            <div
              className="matrix-card"
              onClick={() => onNavigate('events')}
              role="button"
              tabIndex={0}
            >
              <div className="matrix-icon icon-cal">
                <Calendar size={22} />
              </div>
              <div className="matrix-info">
                <h3 className="matrix-title">{t.nav.events}</h3>
                <p className="matrix-sub">
                  {currentLang === 'mr' ? 'आरोग्य व रक्तदान शिबिरे' : 'Health & Blood Camps'}
                </p>
              </div>
              <ArrowRight size={16} className="matrix-arrow" />
            </div>

            <div
              className="matrix-card"
              onClick={() => onNavigate('managing-committee')}
              role="button"
              tabIndex={0}
            >
              <div className="matrix-icon icon-users">
                <Users size={22} />
              </div>
              <div className="matrix-info">
                <h3 className="matrix-title">{t.nav.managingCommittee}</h3>
                <p className="matrix-sub">
                  {currentLang === 'mr' ? 'अधिकृत पदाधिकारी' : 'Executive Officers'}
                </p>
              </div>
              <ArrowRight size={16} className="matrix-arrow" />
            </div>

            <div
              className="matrix-card"
              onClick={() => onNavigate('video-gallery')}
              role="button"
              tabIndex={0}
            >
              <div className="matrix-icon icon-vid">
                <Video size={22} />
              </div>
              <div className="matrix-info">
                <h3 className="matrix-title">{t.nav.videoGallery}</h3>
                <p className="matrix-sub">
                  {currentLang === 'mr' ? 'शिबिर वृत्त व चलचित्रे' : 'Footage & Documentary'}
                </p>
              </div>
              <ArrowRight size={16} className="matrix-arrow" />
            </div>

            <div
              className="matrix-card"
              onClick={() => onNavigate('donate')}
              role="button"
              tabIndex={0}
            >
              <div className="matrix-icon icon-donate">
                <Heart size={22} />
              </div>
              <div className="matrix-info">
                <h3 className="matrix-title">{t.donation.scanHeading}</h3>
                <p className="matrix-sub">
                  {currentLang === 'mr' ? 'युनियन बँक UPI QR' : 'Union Bank UPI QR'}
                </p>
              </div>
              <ArrowRight size={16} className="matrix-arrow" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. About the Foundation Summary */}
      <About currentLang={currentLang} />

      {/* 3. Mission and Vision */}
      <MissionVision currentLang={currentLang} />

      {/* 4. Leadership & Committee Preview Card Banner */}
      <section className="section-padding bg-alt-subtle">
        <div className="container">
          <div className="leadership-banner-box">
            <div className="leadership-banner-content">
              <span className="section-badge">{t.leadership.sectionBadge}</span>
              <h2 className="banner-title">
                {currentLang === 'mr'
                  ? 'पारदर्शक प्रशासन व लोककल्याणकारी नेतृत्व'
                  : 'Transparent Governance & Dedicated Leadership'}
              </h2>
              <p className="banner-desc">
                {currentLang === 'mr'
                  ? 'गीतगंगा सोशल फाऊंडेशन सोलापूरचे कामकाज लोकशाही मूल्ये आणि संस्था नोंदणी कायद्याच्या चौकटीत चालवले जाते. संस्थेची व्यवस्थापकीय समिती व सल्लागार समितीची संपूर्ण माहिती उपलब्ध आहे.'
                  : 'Operating strictly under democratic non-profit society governance. Explore our verified Managing and Advisory Committees.'}
              </p>
              <div className="banner-btn-row">
                <button
                  onClick={() => onNavigate('managing-committee')}
                  className="btn btn-primary"
                >
                  <Users size={18} className="btn-icon" />
                  <span>{t.nav.managingCommittee}</span>
                </button>
                <button
                  onClick={() => onNavigate('advisory-committee')}
                  className="btn btn-outline"
                >
                  <Award size={18} className="btn-icon" />
                  <span>{t.nav.advisoryCommittee}</span>
                </button>
                <button
                  onClick={() => setCertModalOpen(true)}
                  className="btn btn-glass"
                >
                  <FileText size={18} className="btn-icon" />
                  <span>{currentLang === 'mr' ? 'नोंदणी प्रमाणपत्र' : 'Registration Paper'}</span>
                </button>
              </div>
            </div>

            <div className="leadership-banner-stats">
              <div
                className="stat-box cert-preview-trigger"
                onClick={() => setCertModalOpen(true)}
                role="button"
                tabIndex={0}
                title={currentLang === 'mr' ? 'नोंदणी कागदपत्र पहा' : 'View Registration Document'}
              >
                <div className="cert-mini-thumb-wrap">
                  <img
                    src="./assets/registration.jpg"
                    alt="Geetganga Registration Certificate thumbnail"
                    className="cert-mini-thumb"
                  />
                  <div className="cert-mini-overlay">
                    <Eye size={16} />
                  </div>
                </div>
                <span className="stat-text" style={{ fontWeight: 600, color: 'var(--brand-primary)', marginTop: '0.4rem' }}>
                  {currentLang === 'mr' ? 'नोंदणी कागदपत्र' : 'Govt Registration'}
                </span>
                <span className="cert-mini-sub">
                  {currentLang === 'mr' ? 'क्लिक करून पहा' : 'Click to inspect'}
                </span>
              </div>
              <div className="stat-box">
                <span className="stat-number">7</span>
                <span className="stat-text">{currentLang === 'mr' ? 'व्यवस्थापकीय पदाधिकारी' : 'Executive Officers'}</span>
              </div>
              <div className="stat-box">
                <span className="stat-number">4</span>
                <span className="stat-text">{currentLang === 'mr' ? 'तज्ज्ञ सल्लागार' : 'Expert Advisors'}</span>
              </div>
              <div className="stat-box">
                <span className="stat-number">5+</span>
                <span className="stat-text">{currentLang === 'mr' ? 'प्रमुख कार्यक्षेत्रे' : 'Core Verticals'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Our Key Activities (5 Pillars) */}
      <KeyActivities currentLang={currentLang} />

      {/* 6. Activities & Photo Gallery */}
      <Gallery currentLang={currentLang} />

      {/* 7. Donation Section (with QR code) */}
      <Donation currentLang={currentLang} />

      {/* 8. Volunteer Section */}
      <Volunteer currentLang={currentLang} />

      {/* 9. Contact Section */}
      <Contact currentLang={currentLang} />

      {/* Registration Certificate Lightbox Modal */}
      {certModalOpen && (
        <div className="cert-lightbox-modal" onClick={() => setCertModalOpen(false)}>
          <div className="cert-lightbox-container" onClick={(e) => e.stopPropagation()}>
            <div className="cert-lightbox-header">
              <div className="cert-header-info">
                <FileText size={20} className="cert-icon" />
                <h4>
                  {currentLang === 'mr'
                    ? 'गीतगंगा सोशल फाऊंडेशन सोलापूर — अधिकृत नोंदणी कागदपत्र'
                    : 'Geetganga Social Foundation Solapur — Official Registration Document'}
                </h4>
              </div>
              <button
                className="cert-lightbox-close"
                onClick={() => setCertModalOpen(false)}
                aria-label="Close"
              >
                <X size={24} />
              </button>
            </div>
            <div className="cert-lightbox-body">
              <img
                src="./assets/registration.jpg"
                alt="Geetganga Social Foundation Official Registration Paper"
                className="cert-full-image"
              />
            </div>
            <div className="cert-lightbox-footer">
              <span className="cert-footer-caption">
                {currentLang === 'mr'
                  ? '१०२ सी ७३, भवानी पेठ, सोलापूर — अधिकृत नोंदणीकृत उद्देश व संस्था दस्तावेज.'
                  : '102 C 73, Bhawani Peth, Solapur — Official Registered Charter & Legal Mandate.'}
              </span>
              <button
                onClick={() => setCertModalOpen(false)}
                className="btn btn-outline btn-sm"
              >
                {currentLang === 'mr' ? 'बंद करा' : 'Close'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
