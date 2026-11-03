import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Send,
  ExternalLink
} from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface ContactProps {
  currentLang: Language;
}

export const Contact: React.FC<ContactProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedText = `*गीतगंगा सोशल फाऊंडेशन सोलापूर — संपर्क संदेश*\n\n*नाव:* ${formData.name || 'नाही दिले'}\n*फोन:* ${formData.phone || 'नाही दिले'}\n*विषय:* ${formData.subject || 'सामान्य चौकशी'}\n*संदेश:* ${formData.message || 'काही नाही'}`;
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
                      href="mailto:gitgangafoundation@gmail.com"
                      className="row-value link-highlight"
                    >
                      gitgangafoundation@gmail.com
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

              {/* Direct WhatsApp Call to Action Button */}
              <div className="quick-whatsapp-wrap">
                <a
                  href="https://wa.me/919970610781"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp btn-block"
                >
                  <MessageCircle size={20} className="btn-icon" />
                  <span>{t.contact.whatsappQuickBtn}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Message Form */}
          <div className="contact-form-col">
            <div className="contact-form-card">
              <h3 className="card-headline">{t.contact.formTitle}</h3>
              <p className="form-subtext">{t.contact.formDesc}</p>

              <form onSubmit={handleFormSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    {currentLang === 'mr' ? 'नाव:' : 'Full Name:'}
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t.contact.namePlaceholder}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone" className="form-label">
                    {currentLang === 'mr' ? 'मोबाईल क्रमांक:' : 'Mobile Number:'}
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
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
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder={t.contact.subjectPlaceholder}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    {currentLang === 'mr' ? 'संदेश:' : 'Message:'}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t.contact.messagePlaceholder}
                    className="form-textarea"
                  ></textarea>
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
