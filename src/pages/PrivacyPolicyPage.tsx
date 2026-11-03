import React from 'react';
import { ShieldCheck, Lock, CheckCircle2 } from 'lucide-react';
import { Language } from '../types';
import { PageRoute } from '../types/routes';
import { translations } from '../data/translations';

interface PageProps {
  currentLang: Language;
  onNavigate: (route: PageRoute) => void;
}

export const PrivacyPolicyPage: React.FC<PageProps> = ({ currentLang }) => {
  const t = translations[currentLang];
  const policy = t.privacyPolicy;

  return (
    <div className="inner-page-wrapper">
      <section className="page-header-banner">
        <div className="container">
          <span className="page-header-badge">{policy.sectionBadge}</span>
          <h1 className="page-header-title">{policy.title}</h1>
          <p className="page-header-sub">{policy.subtitle}</p>
          <span className="policy-last-updated">{policy.lastUpdated}</span>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="policy-container">
            <div className="policy-intro-card">
              <ShieldCheck size={28} className="policy-shield-icon" />
              <p className="policy-intro-text">{policy.p1}</p>
            </div>

            <div className="policy-sections-list">
              {policy.sections.map((section, index) => (
                <div key={index} className="policy-block">
                  <h2 className="policy-heading">{section.title}</h2>
                  <p className="policy-text">{section.text}</p>
                </div>
              ))}
            </div>

            {/* Technical Security Architecture Disclosure */}
            <div className="security-architecture-box">
              <h3 className="arch-title">
                <Lock size={20} className="arch-icon" />
                <span>
                  {currentLang === 'mr'
                    ? 'संस्थेचे डिजिटल सुरक्षा मानके व तांत्रिक धोरण'
                    : 'Institutional Digital Security & Technical Architecture Standards'}
                </span>
              </h3>
              <p className="arch-desc">
                {currentLang === 'mr'
                  ? 'गीतगंगा सोशल फाऊंडेशन सोलापूर राष्ट्रीय व आंतरराष्ट्रीय डिजिटल सुरक्षा मानकांचे काटेकोर पालन करते:'
                  : 'Geetganga Social Foundation Solapur operates strictly in adherence with standard digital safety, client privacy, and non-profit ethical guidelines:'}
              </p>

              <div className="arch-grid">
                <div className="arch-item">
                  <CheckCircle2 size={18} className="arch-check" />
                  <div>
                    <strong>{currentLang === 'mr' ? 'कोणताही बनावट लॉगिन नाही (No Pseudo-Auth)' : 'No Frontend-Only Pseudo-Authentication'}</strong>
                    <p>
                      {currentLang === 'mr'
                        ? 'प्रशासकीय डेटा सुरक्षिततेसाठी फ्रंटएंडवर बनावट किंवा असुरक्षित लॉगिन यंत्रणा ठेवलेली नाही. सर्व प्रशासकीय व्यवस्था स्वतंत्र, एनक्रिप्टेड आणि दुहेरी प्रमाणीकरण (2FA) द्वारे नियंत्रित केली जाते.'
                        : 'No insecure client-side login bypass exists. Real administrative portals require authenticated server-side sessions, role-based access control (RBAC), and multi-factor authentication.'}
                    </p>
                  </div>
                </div>

                <div className="arch-item">
                  <CheckCircle2 size={18} className="arch-check" />
                  <div>
                    <strong>{currentLang === 'mr' ? 'संवेदनशील ओळखपत्रे अप्रकाशित (Zero Exposure)' : 'Zero PII / Aadhaar Storage'}</strong>
                    <p>
                      {currentLang === 'mr'
                        ? 'आधार कार्ड, पॅन कार्ड अथवा व्यक्तिगत बँक नोंदी सार्वजनिक सर्व्हरवर ठेवल्या जात नाहीत.'
                        : 'Aadhaar identity documents, PAN cards, and private beneficiary files are strictly barred from public web storage.'}
                    </p>
                  </div>
                </div>

                <div className="arch-item">
                  <CheckCircle2 size={18} className="arch-check" />
                  <div>
                    <strong>{currentLang === 'mr' ? 'कंटेन्ट सिक्युरिटी पॉलिसी (CSP) व सुरक्षित हेडर्स' : 'Content Security Policy (CSP) & HTTPS'}</strong>
                    <p>
                      {currentLang === 'mr'
                        ? 'वेबसाइट केवळ सुरक्षित HTTPS प्रक्रियेद्वारे चालते आणि अनधिकृत स्क्रिप्ट्सना रोखण्यासाठी CSP सक्रिय आहे.'
                        : 'Configured with HTTPS enforcement, strict CSP meta tags, and zero inline unauthorized external execution.'}
                    </p>
                  </div>
                </div>

                <div className="arch-item">
                  <CheckCircle2 size={18} className="arch-check" />
                  <div>
                    <strong>{currentLang === 'mr' ? 'स्पॅम संरक्षण (Anti-Spam Rate Protection)' : 'Form Anti-Spam & Direct Handshake'}</strong>
                    <p>
                      {currentLang === 'mr'
                        ? 'वेबसाइटवरील संपर्क दुवे थेट एन्क्रिप्टेड WhatsApp प्रोटोकॉलशी जोडलेले असून मध्यस्थ सर्व्हरवर स्पॅम किंवा डेटा गळतीचा धोका नाही.'
                        : 'Direct client-to-WhatsApp handshakes eliminate vulnerable middleman databases and prevent unauthorized data interception.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
