import React from 'react';
import { Heart, Shield, Sparkles, Users, MapPin } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { ImageWithFallback } from './ImageWithFallback';

interface AboutProps {
  currentLang: Language;
}

export const About: React.FC<AboutProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  const pillarIcons = [
    <Heart key="heart" size={24} className="pillar-icon" />,
    <Sparkles key="sparkles" size={24} className="pillar-icon" />,
    <Users key="users" size={24} className="pillar-icon" />,
    <Shield key="shield" size={24} className="pillar-icon" />
  ];

  return (
    <section className="section-padding about-section" id="about">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">{t.about.sectionBadge}</span>
          <h2 className="section-title">{t.about.title}</h2>
          <p className="section-subtitle">{t.about.subtitle}</p>
        </div>

        {/* Content split grid */}
        <div className="about-grid">
          {/* Left: Foundation Story & Pillars */}
          <div className="about-text-col">
            <div className="about-intro-box">
              <p className="lead-paragraph">{t.about.p1}</p>
              <p className="body-paragraph">{t.about.p2}</p>
            </div>

            <div className="about-location-pill">
              <MapPin size={18} className="location-icon" />
              <span>
                {currentLang === 'mr'
                  ? 'मुख्यालय: १०२ सी ७३, भवानी पेठ, सोलापूर — महाराष्ट्र'
                  : 'Location: 102 C 73, Bhavani Peth, Solapur — Maharashtra'}
              </span>
            </div>

            {/* Core Pillars */}
            <div className="about-pillars">
              <h3 className="pillars-heading">{t.about.pillarsTitle}</h3>
              <div className="pillars-grid">
                {t.about.pillars.map((pillar, index) => (
                  <div key={index} className="pillar-card">
                    <div className="pillar-icon-box">{pillarIcons[index]}</div>
                    <div className="pillar-content">
                      <h4 className="pillar-title">{pillar.title}</h4>
                      <p className="pillar-desc">{pillar.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Authentic Community Photo showcase */}
          <div className="about-media-col">
            <div className="about-image-card">
              <ImageWithFallback
                src="./assets/foundation-activity-2.jpg"
                alt="Geetganga Social Foundation Solapur team and community gathering"
                className="about-image"
                fallbackText="गीतगंगा सोशल फाऊंडेशन सोलापूर"
              />
              <div className="about-image-caption">
                <span className="caption-tag">
                  {currentLang === 'mr' ? 'भवानी पेठ, सोलापूर' : 'Bhavani Peth, Solapur'}
                </span>
                <p className="caption-text">
                  {currentLang === 'mr'
                    ? 'संस्थेचे सर्व पदाधिकारी आणि स्थानिक नागरिकांच्या सहभागातून समाजसेवेचा संकल्प.'
                    : 'Dedicated foundation members and community citizens uniting for social welfare.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
