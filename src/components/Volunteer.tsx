import React from 'react';
import { Users, CheckCircle2, MessageCircle, PhoneCall, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface VolunteerProps {
  currentLang: Language;
}

export const Volunteer: React.FC<VolunteerProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  const prefilledMessage =
    currentLang === 'mr'
      ? encodeURIComponent(
          'नमस्ते गीतगंगा सोशल फाऊंडेशन, मला आपल्या संस्थेमध्ये स्वयंसेवक म्हणून सहभागी व्हायचे आहे. कृपया पुढील प्रक्रिया सांगावी.'
        )
      : encodeURIComponent(
          'Hello Geetganga Social Foundation, I would like to join your team as a volunteer. Please let me know how I can contribute.'
        );

  const whatsappVolunteerUrl = `https://wa.me/919970610781?text=${prefilledMessage}`;

  return (
    <section className="section-padding volunteer-section" id="volunteer">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">{t.volunteer.sectionBadge}</span>
          <h2 className="section-title">{t.volunteer.title}</h2>
          <p className="section-subtitle">{t.volunteer.subtitle}</p>
        </div>

        <div className="volunteer-card">
          <div className="volunteer-grid">
            {/* Left: Why Volunteer */}
            <div className="volunteer-info">
              <div className="volunteer-header-tag">
                <Sparkles size={18} className="tag-icon" />
                <span>{t.volunteer.cardTitle}</span>
              </div>

              <ul className="volunteer-benefits-list">
                {t.volunteer.benefits.map((benefit, index) => (
                  <li key={index} className="benefit-item">
                    <CheckCircle2 size={20} className="benefit-check" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Direct CTA to WhatsApp */}
            <div className="volunteer-cta-col">
              <div className="volunteer-cta-box">
                <div className="cta-icon-wrap">
                  <Users size={32} />
                </div>
                <h3 className="cta-title">{t.volunteer.ctaTitle}</h3>
                <p className="cta-desc">{t.volunteer.ctaDesc}</p>

                <div className="volunteer-actions">
                  <a
                    href={whatsappVolunteerUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp btn-lg"
                  >
                    <MessageCircle size={20} className="btn-icon" />
                    <span>{t.volunteer.whatsappBtn}</span>
                  </a>

                  <a
                    href="tel:+919970610781"
                    className="volunteer-phone-link"
                  >
                    <PhoneCall size={16} className="inline-icon" />
                    <span>{t.volunteer.orCall}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
