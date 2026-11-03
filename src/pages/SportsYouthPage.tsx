import React from 'react';
import { Trophy, CheckCircle2, Activity, Users } from 'lucide-react';
import { Language } from '../types';
import { PageRoute } from '../types/routes';
import { translations } from '../data/translations';
import { ImageWithFallback } from '../components/ImageWithFallback';

interface PageProps {
  currentLang: Language;
  onNavigate: (route: PageRoute) => void;
}

export const SportsYouthPage: React.FC<PageProps> = ({ currentLang, onNavigate }) => {
  const t = translations[currentLang];
  const pageData = t.activitiesPages.sportsYouth;

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
                <Trophy size={24} className="callout-icon" />
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
                  onClick={() => onNavigate('volunteer')}
                  className="btn btn-primary"
                >
                  <Users size={18} className="btn-icon" />
                  <span>{currentLang === 'mr' ? 'क्रीडा स्वयंसेवक म्हणून जुळा' : 'Join as Sports Volunteer'}</span>
                </button>
                <button
                  onClick={() => onNavigate('contact')}
                  className="btn btn-outline"
                >
                  <span>{currentLang === 'mr' ? 'संस्थेशी संपर्क साधा' : 'Contact Us'}</span>
                </button>
              </div>
            </div>

            <div className="programme-media-col">
              <div className="about-image-card">
                <ImageWithFallback
                  src="./assets/events/fpai-niramay-may-2026-1.jpeg"
                  alt="Youth and community health fitness gathering in Solapur"
                  className="about-image"
                  fallbackText="युवक क्रीडा व आरोग्य"
                />
                <div className="about-image-caption">
                  <span className="caption-tag">
                    {currentLang === 'mr' ? 'युवक सहभाग व शारीरिक सुदृढता' : 'Youth Participation & Fitness'}
                  </span>
                  <p className="caption-text">
                    {currentLang === 'mr'
                      ? 'सोलापूर शहरातील तरुणांना निरोगी जीवनशैली व क्रीडा विकासासाठी मार्गदर्शन.'
                      : 'Guiding local youth towards physical fitness, disciplined athletics, and community service.'}
                  </p>
                </div>
              </div>

              <div className="creed-card-highlight" style={{ marginTop: '2rem' }}>
                <div className="highlight-icon-wrap">
                  <Activity size={36} />
                </div>
                <h3>{currentLang === 'mr' ? 'निरोगी युवा, सक्षम भारत' : 'Healthy Youth, Strong Nation'}</h3>
                <p>
                  {currentLang === 'mr'
                    ? 'मैदानी खेळ आणि शारीरिक सुदृढतेमुळे तरुणांमध्ये अनुशासन, संयम आणि नेतृत्वाचे गुण विकसित होतात.'
                    : 'Physical fitness and outdoor athletics foster discipline, perseverance, and civic leadership.'}
                </p>
                <div className="creed-points">
                  <div className="c-point">• व्यसनमुक्ती जनजागृती अभियान</div>
                  <div className="c-point">• स्थानिक क्रीडा स्पर्धा प्रोत्साहन</div>
                  <div className="c-point">• युवा नेतृत्व व समाजसहभाग</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
