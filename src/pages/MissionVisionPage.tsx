import React from 'react';
import { Target, Compass, CheckCircle2, ArrowRight } from 'lucide-react';
import { Language } from '../types';
import { PageRoute } from '../types/routes';
import { translations } from '../data/translations';

interface PageProps {
  currentLang: Language;
  onNavigate: (route: PageRoute) => void;
}

export const MissionVisionPage: React.FC<PageProps> = ({ currentLang, onNavigate }) => {
  const t = translations[currentLang];

  return (
    <div className="inner-page-wrapper">
      <section className="page-header-banner">
        <div className="container">
          <span className="page-header-badge">{t.missionVision.sectionBadge}</span>
          <h1 className="page-header-title">{t.missionVision.title}</h1>
          <p className="page-header-sub">{t.missionVision.subtitle}</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="mission-grid">
            {/* Mission Card */}
            <div className="mission-card mission-box">
              <div className="card-top-header">
                <div className="icon-wrapper icon-mission">
                  <Target size={30} />
                </div>
                <div>
                  <span className="card-tag">
                    {currentLang === 'mr' ? 'मार्गदर्शक ध्येय' : 'Core Objective'}
                  </span>
                  <h2 className="card-title">{t.missionVision.missionTitle}</h2>
                </div>
              </div>

              <p className="card-description">{t.missionVision.missionText}</p>

              <ul className="points-list">
                {t.missionVision.missionPoints.map((point, index) => (
                  <li key={index} className="point-item">
                    <CheckCircle2 size={18} className="point-check" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Vision Card */}
            <div className="mission-card vision-box">
              <div className="card-top-header">
                <div className="icon-wrapper icon-vision">
                  <Compass size={30} />
                </div>
                <div>
                  <span className="card-tag">
                    {currentLang === 'mr' ? 'भविष्यवेध' : 'Future Horizon'}
                  </span>
                  <h2 className="card-title">{t.missionVision.visionTitle}</h2>
                </div>
              </div>

              <p className="card-description">{t.missionVision.visionText}</p>

              <ul className="points-list">
                {t.missionVision.visionPoints.map((point, index) => (
                  <li key={index} className="point-item">
                    <CheckCircle2 size={18} className="point-check" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Inspirational creed callout */}
          <div className="creed-banner-callout">
            <h3 className="callout-heading">आरोग्यम् धनसंपदा — Health is Supreme Wealth</h3>
            <p className="callout-desc">
              {currentLang === 'mr'
                ? 'निरोगी नागरिक हाच समृद्ध राष्ट्राचा आधार आहे. गीतगंगा सोशल फाऊंडेशन प्रत्येक नागरिकाच्या आरोग्याची आणि सन्मानाची जपणूक करण्यासाठी कटिबद्ध आहे.'
                : 'A healthy citizen is the true cornerstone of a prosperous nation. Geetganga Social Foundation stands committed to safeguarding community wellness and human dignity.'}
            </p>
            <div className="callout-actions">
              <button onClick={() => onNavigate('health-camps')} className="btn btn-primary">
                <span>{t.nav.healthCamps}</span>
                <ArrowRight size={16} className="btn-icon-right" />
              </button>
              <button onClick={() => onNavigate('volunteer')} className="btn btn-outline">
                <span>{t.nav.volunteer}</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
