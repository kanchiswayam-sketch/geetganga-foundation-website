import React, { useState } from 'react';
import {
  Stethoscope,
  HeartHandshake,
  Trophy,
  GraduationCap,
  Users,
  Check,
  ArrowRight
} from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface KeyActivitiesProps {
  currentLang: Language;
}

export const KeyActivities: React.FC<KeyActivitiesProps> = ({ currentLang }) => {
  const [activeTab, setActiveTab] = useState<string>('health-camps');
  const t = translations[currentLang];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Stethoscope':
        return <Stethoscope size={28} className="activity-icon" />;
      case 'HeartHandshake':
        return <HeartHandshake size={28} className="activity-icon" />;
      case 'Trophy':
        return <Trophy size={28} className="activity-icon" />;
      case 'GraduationCap':
        return <GraduationCap size={28} className="activity-icon" />;
      case 'Users':
      default:
        return <Users size={28} className="activity-icon" />;
    }
  };

  const selectedActivity =
    t.activities.items.find((item) => item.id === activeTab) || t.activities.items[0];

  return (
    <section className="section-padding activities-section" id="activities">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">{t.activities.sectionBadge}</span>
          <h2 className="section-title">{t.activities.title}</h2>
          <p className="section-subtitle">{t.activities.subtitle}</p>
        </div>

        {/* Desktop Tab Selector / Mobile Pills */}
        <div className="activity-tabs-bar" role="tablist">
          {t.activities.items.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveTab(item.id)}
                className={`activity-tab-btn ${isActive ? 'is-active' : ''}`}
              >
                <span className="tab-icon-small">{getIcon(item.icon)}</span>
                <span className="tab-label">{item.title}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Activity Feature Card */}
        <div className="activity-feature-card">
          <div className="feature-card-grid">
            <div className="feature-content-side">
              <div className="feature-icon-badge">{getIcon(selectedActivity.icon)}</div>
              <span className="feature-tagline">{selectedActivity.tagline}</span>
              <h3 className="feature-title">{selectedActivity.title}</h3>
              <p className="feature-description">{selectedActivity.description}</p>

              <div className="feature-highlights-box">
                <h4 className="highlights-title">
                  {currentLang === 'mr' ? 'प्रमुख वैशिष्ट्ये व उपक्रम:' : 'Key Highlights & Scope:'}
                </h4>
                <div className="highlights-grid">
                  {selectedActivity.highlights.map((highlight, idx) => (
                    <div key={idx} className="highlight-item">
                      <div className="highlight-check">
                        <Check size={16} />
                      </div>
                      <span className="highlight-text">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="feature-actions">
                <a href="#contact" className="btn btn-primary">
                  <span>{currentLang === 'mr' ? 'उपक्रमात सहभागी व्हा' : 'Participate in Activity'}</span>
                  <ArrowRight size={16} className="btn-icon-right" />
                </a>
                <a href="#gallery" className="btn btn-outline">
                  <span>{currentLang === 'mr' ? 'छायाचित्रे पहा' : 'View Photos'}</span>
                </a>
              </div>
            </div>

            {/* Quick Summary Grid of All 5 */}
            <div className="feature-summary-side">
              <h4 className="side-list-title">
                {currentLang === 'mr' ? 'पाच प्रमुख कार्यक्षेत्रे' : 'Our 5 Core Pillars'}
              </h4>
              <div className="activities-mini-list">
                {t.activities.items.map((item) => {
                  const isActive = activeTab === item.id;
                  return (
                    <div
                      key={item.id}
                      onClick={() => setActiveTab(item.id)}
                      className={`mini-activity-item ${isActive ? 'is-active-mini' : ''}`}
                    >
                      <div className="mini-icon">{getIcon(item.icon)}</div>
                      <div className="mini-info">
                        <h5 className="mini-title">{item.title}</h5>
                        <p className="mini-tagline">{item.tagline}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
