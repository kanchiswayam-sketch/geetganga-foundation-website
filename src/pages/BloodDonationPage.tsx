import React from 'react';
import { HeartHandshake, CheckCircle2, Heart, Calendar } from 'lucide-react';
import { Language } from '../types';
import { PageRoute } from '../types/routes';
import { translations } from '../data/translations';
import { ImageWithFallback } from '../components/ImageWithFallback';

interface PageProps {
  currentLang: Language;
  onNavigate: (route: PageRoute) => void;
}

export const BloodDonationPage: React.FC<PageProps> = ({ currentLang, onNavigate }) => {
  const t = translations[currentLang];
  const pageData = t.activitiesPages.bloodDonation;

  return (
    <div className="inner-page-wrapper">
      <section className="page-header-banner">
        <div className="container">
          <span className="page-header-badge">{t.nav.programmesDropdown}</span>
          <h1 className="page-header-title">{pageData.title}</h1>
          <p className="page-header-sub">{pageData.subtitle}</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="programme-overview-grid">
            <div className="programme-text-col">
              <div className="programme-lead-box">
                <p className="lead-paragraph">{pageData.desc}</p>
              </div>

              <div className="programme-motto-callout callout-blood">
                <Heart size={24} className="callout-icon" color="#DC2626" />
                <span>{pageData.bannerText}</span>
              </div>

              {pageData.sections.map((sec, index) => (
                <div key={index} className="programme-section-block">
                  <h2 className="programme-section-heading">{sec.title}</h2>
                  <ul className="programme-points-list">
                    {sec.points.map((pt, i) => (
                      <li key={i} className="programme-point-item">
                        <CheckCircle2 size={18} className="point-icon check-blood" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <div className="programme-actions-row">
                <a
                  href="https://wa.me/919970610781?text=नमस्ते,%20मला%20रक्तदाते%20म्हणून%20नोंदणी%20करायची%20आहे."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                >
                  <HeartHandshake size={18} className="btn-icon" />
                  <span>{currentLang === 'mr' ? 'रक्तदाता म्हणून नोंदणी करा' : 'Register as Blood Donor'}</span>
                </a>
                <button
                  onClick={() => onNavigate('events')}
                  className="btn btn-outline"
                >
                  <Calendar size={18} className="btn-icon" />
                  <span>{currentLang === 'mr' ? 'रक्तदान शिबिर तारखा' : 'View Blood Drives'}</span>
                </button>
              </div>
            </div>

            <div className="programme-media-col">
              <div className="about-image-card">
                <ImageWithFallback
                  src="./assets/foundation-activity-3.jpg"
                  alt="Citizens donating blood at Geetganga camp"
                  className="about-image"
                  fallbackText="रक्तदान शिबिर"
                />
                <div className="about-image-caption">
                  <span className="caption-tag">
                    {currentLang === 'mr' ? 'जीवनदान मोहीम' : 'Life-Saving Blood Camp'}
                  </span>
                  <p className="caption-text">
                    {currentLang === 'mr'
                      ? 'संस्थेच्या शिबिरात स्वयंस्फूर्तीने रक्तदान करणारे तरुण व नागरिक.'
                      : 'Selfless civic donors contributing vital blood units for hospital emergency stock.'}
                  </p>
                </div>
              </div>

              <div className="about-image-card" style={{ marginTop: '2rem' }}>
                <ImageWithFallback
                  src="./assets/events/blood-camp-april-2026-1.jpeg"
                  alt="Dr. Hedgewar Blood Bank team and Geetganga organizers"
                  className="about-image"
                  fallbackText="डॉ. हेडगेवार रक्तपेढी सहकार्य"
                />
                <div className="about-image-caption">
                  <span className="caption-tag">
                    {currentLang === 'mr' ? 'डॉ. हेडगेवार रक्तपेढी सहकार्य' : 'Dr. Hedgewar Blood Bank Partnership'}
                  </span>
                  <p className="caption-text">
                    {currentLang === 'mr'
                      ? 'छत्रपती संभाजी महाराज जयंतीनिमित्त आयोजित रक्तदान शिबिरात ५१ बाटल्या रक्त संकलन.'
                      : 'Mega blood camp yielding 51 whole blood units for regional emergency healthcare.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
