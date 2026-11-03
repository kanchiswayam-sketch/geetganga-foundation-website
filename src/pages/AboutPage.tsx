import React, { useState } from 'react';
import { Heart, Shield, Sparkles, Users, MapPin, ArrowRight, FileText, CheckCircle2, Eye, X, ZoomIn } from 'lucide-react';
import { Language } from '../types';
import { PageRoute } from '../types/routes';
import { translations } from '../data/translations';
import { ImageWithFallback } from '../components/ImageWithFallback';

interface PageProps {
  currentLang: Language;
  onNavigate: (route: PageRoute) => void;
}

export const AboutPage: React.FC<PageProps> = ({ currentLang, onNavigate }) => {
  const t = translations[currentLang];
  const [certModalOpen, setCertModalOpen] = useState(false);

  const pillarIcons = [
    <Heart key="heart" size={26} className="pillar-icon" />,
    <Sparkles key="sparkles" size={26} className="pillar-icon" />,
    <Users key="users" size={26} className="pillar-icon" />,
    <Shield key="shield" size={26} className="pillar-icon" />
  ];

  return (
    <div className="inner-page-wrapper">
      {/* Page Header Banner */}
      <section className="page-header-banner">
        <div className="container">
          <span className="page-header-badge">{t.about.sectionBadge}</span>
          <h1 className="page-header-title">{t.about.title}</h1>
          <p className="page-header-sub">{t.about.subtitle}</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container">
          <div className="about-grid">
            <div className="about-text-col">
              <div className="about-intro-box">
                <p className="lead-paragraph">{t.about.p1}</p>
                <p className="body-paragraph">{t.about.p2}</p>
                <p className="body-paragraph">{t.about.p3}</p>
              </div>

              <div className="about-location-pill">
                <MapPin size={20} className="location-icon" />
                <span>
                  {currentLang === 'mr'
                    ? 'मुख्यालय: १०२ सी ७३, भवानी पेठ, सोलापूर — महाराष्ट्र (४१३००२)'
                    : 'Registered Office: 102 C 73, Bhawani Peth, Solapur — Maharashtra (413002)'}
                </span>
              </div>

              {/* Guiding Pillars */}
              <div className="about-pillars">
                <h2 className="pillars-heading">{t.about.pillarsTitle}</h2>
                <div className="pillars-grid">
                  {t.about.pillars.map((pillar, index) => (
                    <div key={index} className="pillar-card">
                      <div className="pillar-icon-box">{pillarIcons[index]}</div>
                      <div className="pillar-content">
                        <h3 className="pillar-title">{pillar.title}</h3>
                        <p className="pillar-desc">{pillar.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="page-nav-actions" style={{ marginTop: '2.5rem' }}>
                <button
                  onClick={() => onNavigate('mission-vision')}
                  className="btn btn-primary"
                >
                  <span>{t.nav.mission}</span>
                  <ArrowRight size={16} className="btn-icon-right" />
                </button>
                <button
                  onClick={() => onNavigate('managing-committee')}
                  className="btn btn-outline"
                >
                  <span>{t.nav.managingCommittee}</span>
                </button>
              </div>
            </div>

            {/* Right Media */}
            <div className="about-media-col">
              <div className="about-image-card">
                <ImageWithFallback
                  src="./assets/foundation-activity-1.jpg"
                  alt="Geetganga Social Foundation Banner in Solapur"
                  className="about-image"
                  fallbackText="गीतगंगा अधिकृत केंद्र"
                />
                <div className="about-image-caption">
                  <span className="caption-tag">
                    {currentLang === 'mr' ? 'अधिकृत केंद्र — भवानी पेठ' : 'Official Centre — Bhawani Peth'}
                  </span>
                  <p className="caption-text">
                    {currentLang === 'mr'
                      ? 'संस्थेचे अधिकृत फलक व संपर्क केंद्र, जेथून सोलापूर शहर व परिसरातील सामाजिक उपक्रम समन्वित केले जातात.'
                      : 'The registered focal hub in Bhawani Peth, Solapur coordinating healthcare drives and civic welfare.'}
                  </p>
                </div>
              </div>

              <div className="about-image-card" style={{ marginTop: '2rem' }}>
                <ImageWithFallback
                  src="./assets/foundation-activity-2.jpg"
                  alt="Geetganga Social Foundation members"
                  className="about-image"
                  fallbackText="संस्था सदस्य"
                />
                <div className="about-image-caption">
                  <span className="caption-tag">
                    {currentLang === 'mr' ? 'विश्वस्त व कार्यकर्ते' : 'Trustees & Dedicated Team'}
                  </span>
                  <p className="caption-text">
                    {currentLang === 'mr'
                      ? 'संस्थेचे सर्व पदाधिकारी आणि स्थानिक नागरिकांच्या सहभागातून समाजसेवेचा अखंड वसा.'
                      : 'United dedication towards social welfare and community health empowerment.'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Official Registration & Legal Standing Section */}
          <div className="registration-certificate-section" style={{ marginTop: '4rem' }}>
            <div className="reg-cert-card">
              <div className="reg-cert-grid">
                <div className="reg-cert-media" onClick={() => setCertModalOpen(true)} role="button" tabIndex={0}>
                  <div className="reg-cert-img-wrapper">
                    <img
                      src="./assets/registration.jpg"
                      alt="Geetganga Social Foundation Official Registration Certificate & Objectives"
                      className="reg-cert-img"
                    />
                    <div className="reg-cert-hover-overlay">
                      <ZoomIn size={32} />
                      <span>{currentLang === 'mr' ? 'मोठे करून पहा' : 'Click to View Full Size'}</span>
                    </div>
                  </div>
                  <span className="reg-cert-preview-badge">
                    <FileText size={14} />
                    <span>{currentLang === 'mr' ? 'संस्था उद्देश व नोंदणी कागदपत्र' : 'Official Registration Document'}</span>
                  </span>
                </div>

                <div className="reg-cert-details">
                  <div className="reg-badge-pill">
                    <CheckCircle2 size={16} />
                    <span>{currentLang === 'mr' ? 'अधिकृत व शासनमान्य सामाजिक संस्था' : 'Officially Registered Social Foundation'}</span>
                  </div>
                  <h3 className="reg-cert-title">
                    {currentLang === 'mr'
                      ? 'संस्था नोंदणी व वैधानिक अधिष्ठान'
                      : 'Institutional Registration & Legal Mandate'}
                  </h3>
                  <p className="reg-cert-description">
                    {currentLang === 'mr'
                      ? 'गीतगंगा सोशल फाऊंडेशन सोलापूर ही अधिकृत संस्था नोंदणी कायद्यांतर्गत पंजीकृत सामाजिक संस्था असून संस्थेचे सर्व उपक्रम, आरोग्य शिबिरे व आर्थिक व्यवहार पूर्णतः पारदर्शक व नियमानुसार चालवले जातात.'
                      : 'Geetganga Social Foundation Solapur is a legally registered social foundation operating with full regulatory compliance, transparent governance, and verified social aims.'}
                  </p>

                  <div className="reg-points-list">
                    <div className="reg-point-item">
                      <CheckCircle2 size={18} className="point-check" />
                      <div>
                        <strong>{currentLang === 'mr' ? 'अधिकृत नाव:' : 'Registered Name:'}</strong>{' '}
                        <span>GEETGANGA SOCIAL FOUNDATION SOLAPUR</span>
                      </div>
                    </div>
                    <div className="reg-point-item">
                      <CheckCircle2 size={18} className="point-check" />
                      <div>
                        <strong>{currentLang === 'mr' ? 'नोंदणीकृत कार्यालय:' : 'Registered Address:'}</strong>{' '}
                        <span>102 C 73, Bhawani Peth, Solapur, Maharashtra - 413002</span>
                      </div>
                    </div>
                    <div className="reg-point-item">
                      <CheckCircle2 size={18} className="point-check" />
                      <div>
                        <strong>{currentLang === 'mr' ? 'मान्य उद्दिष्टे:' : 'Approved Mandate:'}</strong>{' '}
                        <span>{currentLang === 'mr' ? 'मोफत आरोग्य शिबिरे, रक्तदान, शिक्षण सहाय्य, क्रीडा विकास व समाजसेवा' : 'Free Health Camps, Blood Donation, Education Support, Sports & Social Welfare'}</span>
                      </div>
                    </div>
                  </div>

                  <div className="reg-cert-actions">
                    <button
                      onClick={() => setCertModalOpen(true)}
                      className="btn btn-primary"
                    >
                      <Eye size={18} className="btn-icon" />
                      <span>{currentLang === 'mr' ? 'नोंदणी प्रमाणपत्र पहा' : 'View Registration Certificate'}</span>
                    </button>
                    <button
                      onClick={() => onNavigate('managing-committee')}
                      className="btn btn-outline"
                    >
                      <Users size={18} className="btn-icon" />
                      <span>{currentLang === 'mr' ? 'व्यवस्थापकीय समिती' : 'Managing Committee'}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Certificate Lightbox Modal */}
      {certModalOpen && (
        <div className="cert-lightbox-modal" onClick={() => setCertModalOpen(false)}>
          <div className="cert-lightbox-container" onClick={(e) => e.stopPropagation()}>
            <div className="cert-lightbox-header">
              <div className="cert-header-info">
                <FileText size={20} className="cert-icon" />
                <h4>
                  {currentLang === 'mr'
                    ? 'गीतगंगा सोशल फाऊंडेशन सोलापूर — अधिकृत नोंदणी कागदपत्र'
                    : 'Geetganga Social Foundation Solapur — Official Registration Document'}
                </h4>
              </div>
              <button
                className="cert-lightbox-close"
                onClick={() => setCertModalOpen(false)}
                aria-label="Close"
              >
                <X size={24} />
              </button>
            </div>
            <div className="cert-lightbox-body">
              <img
                src="./assets/registration.jpg"
                alt="Geetganga Social Foundation Official Registration Paper"
                className="cert-full-image"
              />
            </div>
            <div className="cert-lightbox-footer">
              <span className="cert-footer-caption">
                {currentLang === 'mr'
                  ? '१०२ सी ७३, भवानी पेठ, सोलापूर — अधिकृत नोंदणीकृत उद्देश व संस्था दस्तावेज.'
                  : '102 C 73, Bhawani Peth, Solapur — Official Registered Charter & Legal Mandate.'}
              </span>
              <button
                onClick={() => setCertModalOpen(false)}
                className="btn btn-outline btn-sm"
              >
                {currentLang === 'mr' ? 'बंद करा' : 'Close'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
