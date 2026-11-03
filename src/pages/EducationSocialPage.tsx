import React from 'react';
import { GraduationCap, CheckCircle2, Heart } from 'lucide-react';
import { Language } from '../types';
import { PageRoute } from '../types/routes';
import { translations } from '../data/translations';
import { ImageWithFallback } from '../components/ImageWithFallback';

interface PageProps {
  currentLang: Language;
  onNavigate: (route: PageRoute) => void;
}

export const EducationSocialPage: React.FC<PageProps> = ({ currentLang, onNavigate }) => {
  const t = translations[currentLang];
  const pageData = t.activitiesPages.educationSocial;

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
                <GraduationCap size={24} className="callout-icon" />
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
                  onClick={() => onNavigate('donate')}
                  className="btn btn-primary"
                >
                  <Heart size={18} className="btn-icon" />
                  <span>{currentLang === 'mr' ? 'विद्यार्थी सहाय्यासाठी मदत करा' : 'Support a Student'}</span>
                </button>
                <button
                  onClick={() => onNavigate('volunteer')}
                  className="btn btn-outline"
                >
                  <span>{currentLang === 'mr' ? 'शिक्षण स्वयंसेवक व्हा' : 'Volunteer for Education'}</span>
                </button>
              </div>
            </div>

            <div className="programme-media-col">
              <div className="about-image-card">
                <ImageWithFallback
                  src="./assets/events/notebook-distribution-2026-1.jpg"
                  alt="Free notebook and educational aid distribution to students"
                  className="about-image"
                  fallbackText="शैक्षणिक साहित्य वाटप"
                />
                <div className="about-image-caption">
                  <span className="caption-tag">
                    {currentLang === 'mr' ? 'शालेय साहित्य वाटप उपक्रम' : 'School Notebook & Stationery Drive'}
                  </span>
                  <p className="caption-text">
                    {currentLang === 'mr'
                      ? 'गरजू व होतकरू विद्यार्थ्यांना वह्या व शैक्षणिक किटचे मोफत वितरण करताना संस्था पदाधिकारी.'
                      : 'Distributing notebooks and essential learning kits to deserving students in Solapur.'}
                  </p>
                </div>
              </div>

              <div className="about-image-card" style={{ marginTop: '2rem' }}>
                <ImageWithFallback
                  src="./assets/foundation-activity-5.jpg"
                  alt="Community social welfare contribution in Solapur"
                  className="about-image"
                  fallbackText="लोककल्याण उपक्रम"
                />
                <div className="about-image-caption">
                  <span className="caption-tag">
                    {currentLang === 'mr' ? 'लोककल्याण व महिला सक्षमीकरण' : 'Social Relief & Civic Welfare'}
                  </span>
                  <p className="caption-text">
                    {currentLang === 'mr'
                      ? 'स्थानिक कुटुंब कल्याण संस्था व गरजू भगिनींना सहकार्य करताना गीतगंगा फाउंडेशन चमू.'
                      : 'Collaborative welfare assistance provided at the FPAI Solapur branch in Bhawani Peth.'}
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
