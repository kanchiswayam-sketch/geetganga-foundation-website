import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Send,
  ExternalLink,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { InstagramIcon, FacebookIcon } from './SocialIcons';

interface ContactProps {
  currentLang: Language;
}

export const Contact: React.FC<ContactProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: '',
    message: '',
    _honeypot: '' // Anti-bot trap field
  });

  const [formStartTime] = useState<number>(Date.now());
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    if (errorMessage) setErrorMessage(null);
  };

  const sanitizeInput = (str: string): string => {
    return str.replace(/<[^>]*>?/gm, '').trim();
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Anti-bot honeypot check
    if (formData._honeypot) {
      console.warn('Bot detected via honeypot.');
      return;
    }

    // 2. Client submission speed check (prevent automated script bursts)
    const timeSpent = (Date.now() - formStartTime) / 1000;
    if (timeSpent < 1.5) {
      setErrorMessage(
        currentLang === 'mr'
          ? 'कृपया फॉर्म भरण्यासाठी काही सेकंद थांबा.'
          : 'Please take a moment before submitting.'
      );
      return;
    }

    // 3. Validation & Sanitization
    const sanitizedName = sanitizeInput(formData.name);
    const sanitizedPhone = sanitizeInput(formData.phone);
    const sanitizedSubject = sanitizeInput(formData.subject);
    const sanitizedMessage = sanitizeInput(formData.message);

    if (!sanitizedName || !sanitizedPhone || !sanitizedMessage) {
      setErrorMessage(
        currentLang === 'mr'
          ? 'कृपया सर्व आवश्यक माहिती भरा.'
          : 'Please fill in all required fields.'
      );
      return;
    }

    // Phone validation (at least 10 digits)
    const phoneDigits = sanitizedPhone.replace(/\D/g, '');
    if (phoneDigits.length < 10) {
      setErrorMessage(
        currentLang === 'mr'
          ? 'कृपया वैध १० अंकी मोबाईल क्रमांक टाका.'
          : 'Please enter a valid 10-digit mobile number.'
      );
      return;
    }

    const formattedText = `*गीतगंगा सोशल फाऊंडेशन सोलापूर — अधिकृत संपर्क*\n\n*नाव:* ${sanitizedName}\n*मोबाईल:* ${sanitizedPhone}\n*विषय:* ${sanitizedSubject || 'सामान्य चौकशी'}\n*संदेश:* ${sanitizedMessage}`;
    const whatsappUrl = `https://wa.me/919970610781?text=${encodeURIComponent(formattedText)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="section-padding contact-section" id="contact">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">{t.contact.sectionBadge}</span>
          <h2 className="section-title">{t.contact.title}</h2>
          <p className="section-subtitle">{t.contact.subtitle}</p>
        </div>

        <div className="contact-grid">
          {/* Contact Details Card */}
          <div className="contact-info-col">
            <div className="contact-card">
              <h3 className="card-headline">{t.contact.detailsTitle}</h3>

              <div className="contact-items-list">
                {/* Address */}
                <div className="contact-row">
                  <div className="contact-icon-box">
                    <MapPin size={22} />
                  </div>
                  <div className="contact-row-info">
                    <span className="row-label">{t.contact.addressLabel}</span>
                    <p className="row-value">{t.contact.addressValue}</p>
                    <a
                      href="https://maps.google.com/?q=Bhavani+Peth+Solapur+Maharashtra+413002"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="map-link"
                    >
                      <span>{t.contact.mapHint}</span>
                      <ExternalLink size={14} className="inline-icon" />
                    </a>
                  </div>
                </div>

                {/* Phone & WhatsApp */}
                <div className="contact-row">
                  <div className="contact-icon-box">
                    <Phone size={22} />
                  </div>
                  <div className="contact-row-info">
                    <span className="row-label">{t.contact.phoneLabel}</span>
                    <a href="tel:+919970610781" className="row-value link-highlight">
                      +91 9970610781
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="contact-row">
                  <div className="contact-icon-box">
                    <Mail size={22} />
                  </div>
                  <div className="contact-row-info">
                    <span className="row-label">{t.contact.emailLabel}</span>
                    <a
                      href="mailto:geetgangasocialfoundation@gmail.com"
                      className="row-value link-highlight"
                    >
                      geetgangasocialfoundation@gmail.com
                    </a>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="contact-row">
                  <div className="contact-icon-box">
                    <Clock size={22} />
                  </div>
                  <div className="contact-row-info">
                    <span className="row-label">{t.contact.timingLabel}</span>
                    <p className="row-value">{t.contact.timingValue}</p>
                  </div>
                </div>
              </div>

              {/* Direct Quick Action Buttons */}
              <div className="contact-quick-actions">
                <a
                  href="https://wa.me/919970610781"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp btn-block"
                >
                  <MessageCircle size={18} className="btn-icon" />
                  <span>WhatsApp: 9970610781</span>
                </a>
                <a
                  href="mailto:geetgangasocialfoundation@gmail.com"
                  className="btn btn-outline btn-block"
                  style={{ marginTop: '0.65rem' }}
                >
                  <Mail size={16} className="btn-icon" />
                  <span>ईमेल पाठवा / Send Email</span>
                </a>
              </div>

              {/* Official Social Media Follow Card */}
              <div className="contact-social-card">
                <span className="contact-social-title">
                  {currentLang === 'mr' ? 'अधिकृत सोशल मीडियावर जुळा:' : 'Follow Official Channels:'}
                </span>
                <div className="contact-social-grid">
                  <a
                    href="https://www.instagram.com/gsfsolapur/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-box insta-box"
                  >
                    <div className="social-icon-wrapper">
                      <InstagramIcon size={20} />
                    </div>
                    <div className="social-box-text">
                      <strong>Instagram</strong>
                      <span>@gsfsolapur</span>
                    </div>
                  </a>
                  <a
                    href="https://www.facebook.com/share/1FWH8sPgXr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-box fb-box"
                  >
                    <div className="social-icon-wrapper">
                      <FacebookIcon size={20} />
                    </div>
                    <div className="social-box-text">
                      <strong>Facebook</strong>
                      <span>@share/1FWH8sPgXr</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Message Form with Anti-Spam & Direct WhatsApp Dispatch */}
          <div className="contact-form-col">
            <div className="contact-form-card">
              <h3 className="card-headline">{t.contact.formTitle}</h3>
              <p className="form-subtext">{t.contact.formDesc}</p>

              {errorMessage && (
                <div className="form-error-banner" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem', backgroundColor: '#FEE2E2', color: '#991B1B', borderRadius: '8px', marginBottom: '1rem', fontSize: '0.9rem' }}>
                  <AlertCircle size={18} />
                  <span>{errorMessage}</span>
                </div>
              )}

              <form onSubmit={handleFormSubmit} className="contact-form">
                {/* Honeypot field (hidden from humans, filled by bots) */}
                <input
                  type="text"
                  name="_honeypot"
                  value={formData._honeypot}
                  onChange={handleChange}
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    {currentLang === 'mr' ? 'नाव *:' : 'Full Name *:'}
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    maxLength={100}
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t.contact.namePlaceholder}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone" className="form-label">
                    {currentLang === 'mr' ? 'मोबाईल क्रमांक *:' : 'Mobile Number *:'}
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    maxLength={15}
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={t.contact.phonePlaceholder}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">
                    {currentLang === 'mr' ? 'विषय:' : 'Subject:'}
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    maxLength={150}
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder={t.contact.subjectPlaceholder}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    {currentLang === 'mr' ? 'संदेश *:' : 'Message *:'}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    maxLength={1000}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t.contact.messagePlaceholder}
                    className="form-textarea"
                  ></textarea>
                </div>

                <div className="form-security-note" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.78rem', color: '#64748B', marginBottom: '0.5rem' }}>
                  <ShieldCheck size={14} color="#059669" />
                  <span>
                    {currentLang === 'mr'
                      ? 'स्पॅम-मुक्त व थेट एन्क्रिप्टेड WhatsApp प्रेषण. कोणताही डेटा असुरक्षित साठवला जात नाही.'
                      : 'Spam-protected direct encrypted WhatsApp dispatch. No private data is logged on public servers.'}
                  </span>
                </div>

                <button type="submit" className="btn btn-primary btn-block">
                  <Send size={18} className="btn-icon" />
                  <span>{t.contact.sendBtn}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
