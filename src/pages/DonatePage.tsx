import React from 'react';
import { Donation } from '../components/Donation';
import { Language } from '../types';
import { PageRoute } from '../types/routes';
import { translations } from '../data/translations';

interface PageProps {
  currentLang: Language;
  onNavigate: (route: PageRoute) => void;
}

export const DonatePage: React.FC<PageProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  return (
    <div className="inner-page-wrapper">
      <section className="page-header-banner">
        <div className="container">
          <span className="page-header-badge">{t.donation.sectionBadge}</span>
          <h1 className="page-header-title">{t.donation.scanHeading}</h1>
          <p className="page-header-sub">{t.donation.subtitle}</p>
        </div>
      </section>

      <Donation currentLang={currentLang} />
    </div>
  );
};
