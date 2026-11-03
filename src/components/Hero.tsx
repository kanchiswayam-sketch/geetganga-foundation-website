import React from 'react';
import { Heart, Activity, Users, ArrowRight, ShieldCheck, Calendar, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { PageRoute } from '../types/routes';
import { translations } from '../data/translations';

interface HeroProps {
  currentLang: Language;
  onNavigate: (route: PageRoute) => void;
}

export const Hero: React.FC<HeroProps> = ({ currentLang, onNavigate }) => {
  const t = translations[currentLang];

  return (
    <section className="hero-section hero-photographic" id="hero">
      {/* Actual foundation photograph background with dark overlay */}
      <div className="hero-photo-backdrop" aria-hidden="true">
        <img
          src="./assets/banner.jpeg"
          alt="Geetganga Social Foundation Solapur Banner"
          className="hero-backdrop-img"
        />
        <div className="hero-dark-overlay"></div>
      </div>

      <div className="container hero-container">
        <div className="hero-grid">
          {/* Hero text column */}
          <div className="hero-content hero-dark-text">
            <div className="hero-badge hero-badge-dark">
              <ShieldCheck size={16} className="badge-icon" />
              <span>{t.hero.badge}</span>
            </div>

            <h1 className="hero-headline hero-title-glow">
              {t.hero.headline}
            </h1>

            <p className="hero-subheadline hero-sub-light">
              {t.hero.subheadline}
            </p>

            {/* Official Sanskrit/Marathi creed banner */}
            <div className="hero-motto-box hero-motto-dark">
              <Sparkles size={18} className="motto-symbol-icon" />
              <span className="motto-text">{t.hero.mottoBanner}</span>
            </div>

            {/* CTA buttons */}
            <div className="hero-cta-group">
              <button
                onClick={() => onNavigate('donate')}
                className="btn btn-primary btn-lg"
              >
                <Heart size={20} className="btn-icon" />
                <span>{t.hero.donateBtn}</span>
              </button>
              <button
                onClick={() => onNavigate('health-camps')}
                className="btn btn-outline-white btn-lg"
              >
                <span>{t.hero.exploreBtn}</span>
                <ArrowRight size={18} className="btn-icon-right" />
              </button>
              <button
                onClick={() => onNavigate('events')}
                className="btn btn-glass btn-lg"
              >
                <Calendar size={18} className="btn-icon" />
                <span>{t.hero.eventsBtn}</span>
              </button>
            </div>

            {/* Micro proof tags */}
            <div className="hero-trust-bar hero-trust-dark">
              <div
                className="trust-item trust-clickable"
                onClick={() => onNavigate('health-camps')}
                role="button"
                tabIndex={0}
              >
                <Activity size={18} className="trust-icon" />
                <span>{currentLang === 'mr' ? 'मोफत आरोग्य शिबिरे' : 'Free Medical Camps'}</span>
              </div>
              <div
                className="trust-item trust-clickable"
                onClick={() => onNavigate('blood-donation')}
                role="button"
                tabIndex={0}
              >
                <Heart size={18} className="trust-icon" />
                <span>{currentLang === 'mr' ? 'जीवनदायी रक्तदान' : 'Blood Donation Drives'}</span>
              </div>
              <div
                className="trust-item trust-clickable"
                onClick={() => onNavigate('contact')}
                role="button"
                tabIndex={0}
              >
                <Users size={18} className="trust-icon" />
                <span>{currentLang === 'mr' ? 'भवानी पेठ, सोलापूर' : 'Bhawani Peth, Solapur'}</span>
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};
