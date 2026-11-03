import React from 'react';
import { Contact } from '../components/Contact';
import { Language } from '../types';
import { PageRoute } from '../types/routes';
import { translations } from '../data/translations';

interface PageProps {
  currentLang: Language;
  onNavigate: (route: PageRoute) => void;
}

export const ContactPage: React.FC<PageProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  return (
    <div className="inner-page-wrapper">
      <section className="page-header-banner">
        <div className="container">
          <span className="page-header-badge">{t.contact.sectionBadge}</span>
          <h1 className="page-header-title">{t.contact.title}</h1>
          <p className="page-header-sub">{t.contact.subtitle}</p>
        </div>
      </section>

      <Contact currentLang={currentLang} />
    </div>
  );
};
