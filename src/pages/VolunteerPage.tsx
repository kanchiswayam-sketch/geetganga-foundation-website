import React from 'react';
import { Volunteer } from '../components/Volunteer';
import { Language } from '../types';
import { PageRoute } from '../types/routes';
import { translations } from '../data/translations';

interface PageProps {
  currentLang: Language;
  onNavigate: (route: PageRoute) => void;
}

export const VolunteerPage: React.FC<PageProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  return (
    <div className="inner-page-wrapper">
      <section className="page-header-banner">
        <div className="container">
          <span className="page-header-badge">{t.volunteer.sectionBadge}</span>
          <h1 className="page-header-title">{t.volunteer.title}</h1>
          <p className="page-header-sub">{t.volunteer.subtitle}</p>
        </div>
      </section>

      <Volunteer currentLang={currentLang} />
    </div>
  );
};
