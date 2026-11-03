import React from 'react';
import { Users, ArrowRight, Info, Check } from 'lucide-react';
import { Language } from '../types';
import { PageRoute } from '../types/routes';
import { translations } from '../data/translations';

interface PageProps {
  currentLang: Language;
  onNavigate: (route: PageRoute) => void;
}

export const ManagingCommitteePage: React.FC<PageProps> = ({ currentLang, onNavigate }) => {
  const t = translations[currentLang];

  return (
    <div className="inner-page-wrapper">
      <section className="page-header-banner">
        <div className="container">
          <span className="page-header-badge">{t.managingCommittee.sectionBadge}</span>
          <h1 className="page-header-title">{t.managingCommittee.title}</h1>
          <p className="page-header-sub">{t.managingCommittee.subtitle}</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          {/* Official Verification Notice */}
          <div className="committee-notice-box">
            <Info size={20} className="notice-icon" />
            <p className="notice-text">{t.managingCommittee.notice}</p>
          </div>

          {/* Members Profile Grid */}
          <div className="committee-grid">
            {t.managingCommittee.members.map((member, index) => (
              <div key={member.id} className="member-card">
                {member.photoUrl ? (
                  <div className="member-photo-frame">
                    <img
                      src={member.photoUrl}
                      alt={member.name}
                      className="member-photo-img"
                      loading="lazy"
                    />
                    <div className="member-rank-badge photo-rank-badge">
                      <span>#{index + 1}</span>
                    </div>
                  </div>
                ) : (
                  <div className="member-card-header">
                    {/* Executive Avatar Initials Badge */}
                    <div className="member-avatar-box">
                      <span className="avatar-initials">{member.initials}</span>
                    </div>
                    <div className="member-rank-badge">
                      <span>#{index + 1}</span>
                    </div>
                  </div>
                )}

                <div className="member-body">
                  <h2 className="member-name">{member.name}</h2>
                  <div className="member-position-pill">
                    <Users size={14} />
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
                    <span>{currentLang === 'mr' ? 'अधिकृत नोंदणीकृत पद' : 'Verified Registered Officer'}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Cross navigation to Advisory Committee */}
          <div className="cross-nav-card" style={{ marginTop: '3.5rem' }}>
            <div className="cross-nav-content">
              <h3>
                {currentLang === 'mr'
                  ? 'सल्लागार समितीची माहिती पाहू इच्छिता?'
                  : 'Looking for the Advisory Committee?'}
              </h3>
              <p>
                {currentLang === 'mr'
                  ? 'उद्योग, सनदी लेखापाल (CA), क्रीडा आणि कायदा क्षेत्रातील मान्यवर सल्लागारांची माहिती येथे उपलब्ध आहे.'
                  : 'Explore our distinguished advisors across Business, Chartered Accountancy, Sports, and Law.'}
              </p>
            </div>
            <button
              onClick={() => onNavigate('advisory-committee')}
              className="btn btn-primary"
            >
              <span>{t.nav.advisoryCommittee}</span>
              <ArrowRight size={16} className="btn-icon-right" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
