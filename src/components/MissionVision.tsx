import React from 'react';
import { Target, Compass, CheckCircle2 } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface MissionVisionProps {
  currentLang: Language;
}

export const MissionVision: React.FC<MissionVisionProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  return (
    <section className="section-padding mission-section" id="mission">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">{t.missionVision.sectionBadge}</span>
          <h2 className="section-title">{t.missionVision.title}</h2>
          <p className="section-subtitle">{t.missionVision.subtitle}</p>
        </div>

        {/* Dual Cards Grid */}
        <div className="mission-grid">
          {/* Mission Card */}
          <div className="mission-card mission-box">
            <div className="card-top-header">
              <div className="icon-wrapper icon-mission">
                <Target size={28} />
              </div>
              <div>
                <span className="card-tag">
                  {currentLang === 'mr' ? 'मार्गदर्शक ध्येय' : 'Core Objective'}
                </span>
                <h3 className="card-title">{t.missionVision.missionTitle}</h3>
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
                <Compass size={28} />
              </div>
              <div>
                <span className="card-tag">
                  {currentLang === 'mr' ? 'भविष्यवेध' : 'Future Horizon'}
                </span>
                <h3 className="card-title">{t.missionVision.visionTitle}</h3>
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
      </div>
    </section>
  );
};
