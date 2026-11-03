import React from 'react';
import { Users, Shield, ArrowRight, Award, CheckCircle2 } from 'lucide-react';
import { Language } from '../types';
import { PageRoute } from '../types/routes';
import { translations } from '../data/translations';

interface PageProps {
  currentLang: Language;
  onNavigate: (route: PageRoute) => void;
}

export const LeadershipPage: React.FC<PageProps> = ({ currentLang, onNavigate }) => {
  const t = translations[currentLang];

  return (
    <div className="inner-page-wrapper">
      <section className="page-header-banner">
        <div className="container">
          <span className="page-header-badge">{t.leadership.sectionBadge}</span>
          <h1 className="page-header-title">{t.leadership.title}</h1>
          <p className="page-header-sub">{t.leadership.subtitle}</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="lead-intro-box">
            <p className="lead-text">{t.leadership.intro}</p>
          </div>

          <div className="leadership-cards-grid">
            {/* Managing Committee Card */}
            <div className="leadership-overview-card">
              <div className="card-top-icon-row">
                <div className="overview-icon-box icon-managing">
                  <Users size={28} />
                </div>
                <span className="card-badge">७ सन्माननीय पदाधिकारी</span>
              </div>
              <h2 className="overview-title">{t.leadership.managingTitle}</h2>
              <p className="overview-desc">{t.leadership.managingDesc}</p>

              <div className="overview-roles-preview">
                <div className="role-chip">Chairman / अध्यक्ष</div>
                <div className="role-chip">Vice Chairman / उपाध्यक्ष</div>
                <div className="role-chip">Secretary / सचिव</div>
                <div className="role-chip">Treasurer / खजिनदार</div>
                <div className="role-chip">Directors / संचालक</div>
              </div>

              <button
                onClick={() => onNavigate('managing-committee')}
                className="btn btn-primary btn-block"
              >
                <span>{t.leadership.viewManagingBtn}</span>
                <ArrowRight size={16} className="btn-icon-right" />
              </button>
            </div>

            {/* Advisory Committee Card */}
            <div className="leadership-overview-card">
              <div className="card-top-icon-row">
                <div className="overview-icon-box icon-advisory">
                  <Award size={28} />
                </div>
                <span className="card-badge">४ ज्येष्ठ तज्ज्ञ सल्लागार</span>
              </div>
              <h2 className="overview-title">{t.leadership.advisoryTitle}</h2>
              <p className="overview-desc">{t.leadership.advisoryDesc}</p>

              <div className="overview-roles-preview">
                <div className="role-chip">Business / उद्योग</div>
                <div className="role-chip">Chartered Accountant / सनदी लेखापाल</div>
                <div className="role-chip">Sports / क्रीडा</div>
                <div className="role-chip">Law / विधी व कायदा</div>
              </div>

              <button
                onClick={() => onNavigate('advisory-committee')}
                className="btn btn-primary btn-block"
              >
                <span>{t.leadership.viewAdvisoryBtn}</span>
                <ArrowRight size={16} className="btn-icon-right" />
              </button>
            </div>
          </div>

          {/* Governance Standards Box */}
          <div className="governance-standards-box">
            <h3 className="standards-title">
              <Shield size={22} className="standards-icon" />
              <span>
                {currentLang === 'mr' ? 'संस्थात्मक सुशासन व पारदर्शकता' : 'Institutional Governance & Transparency'}
              </span>
            </h3>
            <div className="standards-grid">
              <div className="standard-item">
                <CheckCircle2 size={18} className="check-icon" />
                <span>
                  {currentLang === 'mr'
                    ? 'संस्था नोंदणी अधिनियम, १८६० अंतर्गत नोंदणीकृत सामाजिक संस्था.'
                    : 'Registered Non-Profit Society under the Societies Registration Act, 1860.'}
                </span>
              </div>
              <div className="standard-item">
                <CheckCircle2 size={18} className="check-icon" />
                <span>
                  {currentLang === 'mr'
                    ? 'सनदी लेखापाल (CA) यांच्या मार्गदर्शनाखाली नियमित वित्तीय लेखापरीक्षण (Audit).'
                    : 'Regular statutory audits conducted under Chartered Accountant supervision.'}
                </span>
              </div>
              <div className="standard-item">
                <CheckCircle2 size={18} className="check-icon" />
                <span>
                  {currentLang === 'mr'
                    ? 'सर्व देणग्या अधिकृत युनियन बँक खात्यातच स्वीकारल्या जातात.'
                    : 'All donations received strictly in the official non-profit Union Bank account.'}
                </span>
              </div>
              <div className="standard-item">
                <CheckCircle2 size={18} className="check-icon" />
                <span>
                  {currentLang === 'mr'
                    ? 'नागरिकांच्या वैयक्तिक व आरोग्य गोपनीयतेचे संपूर्ण संरक्षण.'
                    : 'Uncompromising protection of personal, health, and identity data.'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
