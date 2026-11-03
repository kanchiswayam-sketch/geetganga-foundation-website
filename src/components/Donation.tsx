import React, { useState } from 'react';
import { Copy, Check, Heart, ShieldAlert, Smartphone, QrCode } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { ImageWithFallback } from './ImageWithFallback';

interface DonationProps {
  currentLang: Language;
}

export const Donation: React.FC<DonationProps> = ({ currentLang }) => {
  const [copied, setCopied] = useState(false);
  const t = translations[currentLang];

  const handleCopyUPI = async () => {
    try {
      await navigator.clipboard.writeText(t.donation.upiId);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      // Fallback if clipboard API is restricted
      const textArea = document.createElement('textarea');
      textArea.value = t.donation.upiId;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  return (
    <section className="section-padding donation-section" id="donation">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge badge-accent">{t.donation.sectionBadge}</span>
          <h2 className="section-title">{t.donation.title}</h2>
          <p className="section-subtitle">{t.donation.subtitle}</p>
        </div>

        {/* Main Donation Container */}
        <div className="donation-main-card">
          <div className="donation-grid">
            {/* Left: QR Code Showcase */}
            <div className="donation-qr-col">
              <div className="qr-frame-box">
                <div className="qr-badge">
                  <QrCode size={16} />
                  <span>{currentLang === 'mr' ? 'अधिकृत BHIM UPI QR' : 'Official BHIM UPI QR'}</span>
                </div>

                <div className="qr-image-wrapper">
                  <ImageWithFallback
                    src="./assets/donation-qr.png"
                    alt={t.donation.qrAlt}
                    className="donation-qr-img"
                    fallbackText="देणगी QR कोड"
                  />
                </div>

                <p className="qr-scan-instruction">
                  <Smartphone size={16} className="inline-icon" />
                  {t.donation.scanInstructions}
                </p>

                {/* Direct UPI ID Copy Box */}
                <div className="upi-copy-container">
                  <div className="upi-label-small">{t.donation.upiIdLabel}</div>
                  <div className="upi-field">
                    <span className="upi-id-text">{t.donation.upiId}</span>
                    <button
                      type="button"
                      onClick={handleCopyUPI}
                      className="copy-btn"
                      title={copied ? t.donation.copiedUpi : t.donation.copyUpiBtn}
                    >
                      {copied ? (
                        <>
                          <Check size={16} color="#059669" />
                          <span className="copied-label">{t.donation.copiedUpi}</span>
                        </>
                      ) : (
                        <>
                          <Copy size={16} />
                          <span>{t.donation.copyUpiBtn}</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Account Verification & How to Pay */}
            <div className="donation-info-col">
              <div className="account-details-card">
                <h3 className="details-header">
                  <Heart size={20} className="details-heart" />
                  <span>{t.donation.beneficiaryTitle}</span>
                </h3>

                <div className="detail-rows">
                  <div className="detail-row">
                    <span className="detail-label">{t.donation.accountNameLabel}</span>
                    <strong className="detail-val highlight-val">{t.donation.accountName}</strong>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">{t.donation.bankNameLabel}</span>
                    <span className="detail-val">{t.donation.bankName}</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">{t.donation.upiIdLabel}</span>
                    <span className="detail-val code-font">{t.donation.upiId}</span>
                  </div>
                </div>
              </div>

              {/* Step by step guide */}
              <div className="how-to-pay-card">
                <h4 className="steps-title">{t.donation.howToPayTitle}</h4>
                <ol className="steps-list">
                  {t.donation.steps.map((step, idx) => (
                    <li key={idx} className="step-item">
                      <span className="step-number">{idx + 1}</span>
                      <span className="step-text">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Mandatory Safeguard Disclaimer Notice */}
              <div className="safeguard-disclaimer">
                <ShieldAlert size={20} className="disclaimer-icon" />
                <p className="disclaimer-text">{t.donation.disclaimerNotice}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
