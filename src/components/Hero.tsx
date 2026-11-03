import React from 'react';
import { Heart, Activity, Users, ArrowRight, ShieldCheck, Award } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { ImageWithFallback } from './ImageWithFallback';

interface HeroProps {
  currentLang: Language;
}

export const Hero: React.FC<HeroProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  return (
    <section className="hero-section" id="hero">
      <div className="hero-bg-decoration">
        <div className="hero-glow hero-glow-1"></div>
        <div className="hero-glow hero-glow-2"></div>
      </div>

      <div className="container hero-container">
        <div className="hero-grid">
          {/* Hero text column */}
          <div className="hero-content">
            <div className="hero-badge">
              <ShieldCheck size={16} className="badge-icon" />
              <span>{t.hero.badge}</span>
            </div>

            <h1 className="hero-headline">
              {t.hero.headline}
            </h1>

            <p className="hero-subheadline">
              {t.hero.subheadline}
            </p>

            {/* Official Sanskrit/Marathi creed banner */}
            <div className="hero-motto-box">
              <span className="motto-symbol">🌿</span>
              <span className="motto-text">{t.hero.mottoBanner}</span>
            </div>

            {/* CTA buttons */}
            <div className="hero-cta-group">
              <a href="#donation" className="btn btn-primary btn-lg">
                <Heart size={20} className="btn-icon" />
                <span>{t.hero.donateBtn}</span>
              </a>
              <a href="#activities" className="btn btn-outline btn-lg">
                <span>{t.hero.exploreBtn}</span>
                <ArrowRight size={18} className="btn-icon-right" />
              </a>
            </div>

            {/* Micro proof tags */}
            <div className="hero-trust-bar">
              <div className="trust-item">
                <Activity size={18} className="trust-icon" />
                <span>{currentLang === 'mr' ? 'मोफत आरोग्य शिबिरे' : 'Free Medical Camps'}</span>
              </div>
              <div className="trust-item">
                <Heart size={18} className="trust-icon" />
                <span>{currentLang === 'mr' ? 'जीवनदायी रक्तदान' : 'Blood Donation Drives'}</span>
              </div>
              <div className="trust-item">
                <Users size={18} className="trust-icon" />
                <span>{currentLang === 'mr' ? 'भवानी पेठ, सोलापूर' : 'Bhavani Peth, Solapur'}</span>
              </div>
            </div>
          </div>

          {/* Hero image visual showcase */}
          <div className="hero-visual">
            <div className="hero-card-stack">
              {/* Main activity preview photo */}
              <div className="hero-main-card">
                <ImageWithFallback
                  src="./assets/foundation-activity-1.jpg"
                  alt="Geetganga Social Foundation Solapur Banner"
                  className="hero-image"
                  fallbackText="गीतगंगा सोशल फाऊंडेशन सोलापूर"
                />
                <div className="hero-card-overlay">
                  <div className="overlay-badge">
                    <Award size={16} className="badge-icon" />
                    <span>{currentLang === 'mr' ? 'लोकसेवा हेच कार्य' : 'Grassroots NGO Solapur'}</span>
                  </div>
                  <h3 className="overlay-title">
                    {currentLang === 'mr'
                      ? 'आरोग्य, रक्तदान व सामाजिक सेवा कार्य'
                      : 'Healthcare, Blood Donation & Community Welfare'}
                  </h3>
                  <p className="overlay-desc">
                    {currentLang === 'mr'
                      ? 'सोलापूर शहरातील भवानी पेठ व परिसरातील प्रत्येक नागरिकाच्या सेवेसाठी सदैव तत्पर.'
                      : 'Serving every citizen across Bhavani Peth and greater Solapur with compassion.'}
                  </p>
                </div>
              </div>

              {/* Floating secondary badge */}
              <div className="floating-stat-card">
                <div className="floating-stat-icon">
                  <Heart size={24} color="#E11D48" />
                </div>
                <div className="floating-stat-info">
                  <span className="stat-label">
                    {currentLang === 'mr' ? 'आरोग्यम् धनसंपदा' : 'Arogyam Dhansampada'}
                  </span>
                  <span className="stat-sub">
                    {currentLang === 'mr' ? 'स्वास्थ्य हीच खरी संपदा' : 'Health is Supreme Wealth'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
