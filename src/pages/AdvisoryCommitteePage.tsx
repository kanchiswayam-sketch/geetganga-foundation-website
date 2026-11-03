import React from 'react';
import { Briefcase, Calculator, Trophy, Scale, ArrowRight, Info, Check } from 'lucide-react';
import { Language } from '../types';
import { PageRoute } from '../types/routes';
import { translations } from '../data/translations';

interface PageProps {
  currentLang: Language;
  onNavigate: (route: PageRoute) => void;
}

export const AdvisoryCommitteePage: React.FC<PageProps> = ({ currentLang, onNavigate }) => {
  const t = translations[currentLang];

  const getDomainIcon = (position: string) => {
    if (position.includes('Business') || position.includes('उद्योग')) {
      return <Briefcase size={20} />;
    }
    if (position.includes('Chartered Accountant') || position.includes('लेखापाल')) {
      return <Calculator size={20} />;
    }
    if (position.includes('Sports') || position.includes('क्रीडा')) {
      return <Trophy size={20} />;
    }
    return <Scale size={20} />;
  };

  return (
    <div className="inner-page-wrapper">
      <section className="page-header-banner">
        <div className="container">
          <span className="page-header-badge">{t.advisoryCommittee.sectionBadge}</span>
          <h1 className="page-header-title">{t.advisoryCommittee.title}</h1>
          <p className="page-header-sub">{t.advisoryCommittee.subtitle}</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="committee-notice-box">
            <Info size={20} className="notice-icon" />
            <p className="notice-text">{t.advisoryCommittee.notice}</p>
          </div>

          <div className="committee-grid advisory-grid">
            {t.advisoryCommittee.members.map((member) => (
              <div key={member.id} className="member-card advisory-card">
                <div className="member-card-header">
                  <div className="member-avatar-box avatar-advisory">
                    <span className="avatar-initials">{member.initials}</span>
                  </div>
                  <div className="advisory-domain-icon">
                    {getDomainIcon(member.position)}
                  </div>
                </div>

                <div className="member-body">
                  <h2 className="member-name">{member.name}</h2>
                  <div className="member-position-pill pill-advisory">
                    <span>{member.position}</span>
                  </div>

                  {member.department && (
                    <div className="member-dept-tag">{member.department}</div>
                  )}

                  {member.bio && (
                    <p className="member-bio-text">{member.bio}</p>
                  )}

                  <div className="member-verification-status">
                    <Check size={14} className="verified-check" />
                    <span>{currentLang === 'mr' ? 'अधिकृत सल्लागार पद' : 'Official Advisory Position'}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Cross navigation to Managing Committee */}
          <div className="cross-nav-card" style={{ marginTop: '3.5rem' }}>
            <div className="cross-nav-content">
              <h3>
                {currentLang === 'mr'
                  ? 'व्यवस्थापकीय समितीचे पदाधिकारी पाहू इच्छिता?'
                  : 'Looking for the Managing Committee?'}
              </h3>
              <p>
                {currentLang === 'mr'
                  ? 'संस्थेचे अध्यक्ष, उपाध्यक्ष, सचिव, खजिनदार व संचालक मंडळाची संपूर्ण माहिती येथे उपलब्ध आहे.'
                  : 'View our Executive Officers including Chairman, Vice Chairman, Secretary, and Directors.'}
              </p>
            </div>
            <button
              onClick={() => onNavigate('managing-committee')}
              className="btn btn-primary"
            >
              <span>{t.nav.managingCommittee}</span>
              <ArrowRight size={16} className="btn-icon-right" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
