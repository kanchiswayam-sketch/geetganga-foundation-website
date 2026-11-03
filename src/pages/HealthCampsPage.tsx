import React from 'react';
import { Stethoscope, CheckCircle2, Calendar } from 'lucide-react';
import { Language } from '../types';
import { PageRoute } from '../types/routes';
import { translations } from '../data/translations';
import { ImageWithFallback } from '../components/ImageWithFallback';

interface PageProps {
  currentLang: Language;
  onNavigate: (route: PageRoute) => void;
}

export const HealthCampsPage: React.FC<PageProps> = ({ currentLang, onNavigate }) => {
  const t = translations[currentLang];
  const pageData = t.activitiesPages.healthCamps;

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

              <div className="programme-motto-callout">
                <Stethoscope size={24} className="callout-icon" />
                <span>{pageData.bannerText}</span>
              </div>

              {pageData.sections.map((sec, index) => (
                <div key={index} className="programme-section-block">
                  <h2 className="programme-section-heading">{sec.title}</h2>
                  <ul className="programme-points-list">
                    {sec.points.map((pt, i) => (
                      <li key={i} className="programme-point-item">
                        <CheckCircle2 size={18} className="point-icon" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <div className="programme-actions-row">
                <button
                  onClick={() => onNavigate('events')}
                  className="btn btn-primary"
                >
                  <Calendar size={18} className="btn-icon" />
                  <span>{currentLang === 'mr' ? 'आरोग्य शिबिरांची तारीख पहा' : 'View Camp Dates'}</span>
                </button>
                <button
                  onClick={() => onNavigate('contact')}
                  className="btn btn-outline"
                >
                  <span>{currentLang === 'mr' ? 'शिबिर आयोजित करण्यासाठी संपर्क' : 'Request a Health Camp'}</span>
                </button>
              </div>
            </div>

            <div className="programme-media-col">
              <div className="about-image-card">
                <ImageWithFallback
                  src="./assets/foundation-activity-6.jpg"
                  alt="Doctor consulting patients at health camp"
                  className="about-image"
                  fallbackText="वैद्यकीय तपासणी शिबिर"
                />
                <div className="about-image-caption">
                  <span className="caption-tag">
                    {currentLang === 'mr' ? 'तज्ज्ञ डॉक्टर्स व रुग्ण संवाद' : 'Physician & Patient Consultation'}
                  </span>
                  <p className="caption-text">
                    {currentLang === 'mr'
                      ? 'सोलापूर शहरातील भवानी पेठ व परिसरात मोफत आरोग्य तपासणी करताना तज्ज्ञ डॉक्टर्स आणि परिचारिका.'
                      : 'Distinguished doctors screening patients and dispensing complimentary vital medicines.'}
                  </p>
                </div>
              </div>

              <div className="about-image-card" style={{ marginTop: '2rem' }}>
                <ImageWithFallback
                  src="./assets/foundation-activity-4.jpg"
                  alt="Blood pressure and sugar testing for senior citizens"
                  className="about-image"
                  fallbackText="ज्येष्ठ नागरिक तपासणी"
                />
                <div className="about-image-caption">
                  <span className="caption-tag">
                    {currentLang === 'mr' ? 'रक्तदाब व शुगर मोफत चाचणी' : 'Free BP & Sugar Testing'}
                  </span>
                  <p className="caption-text">
                    {currentLang === 'mr'
                      ? 'घरोघरी आणि केंद्रावर ज्येष्ठ नागरिकांची प्रतिबंधात्मक आरोग्य चाचणी.'
                      : 'Door-to-door preventive health screening for elderly community members.'}
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
