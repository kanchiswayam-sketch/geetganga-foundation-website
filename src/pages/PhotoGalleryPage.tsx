import React from 'react';
import { Gallery } from '../components/Gallery';
import { Language } from '../types';
import { PageRoute } from '../types/routes';
import { translations } from '../data/translations';

interface PageProps {
  currentLang: Language;
  onNavigate: (route: PageRoute) => void;
}

export const PhotoGalleryPage: React.FC<PageProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  return (
    <div className="inner-page-wrapper">
      <section className="page-header-banner">
        <div className="container">
          <span className="page-header-badge">{t.gallery.sectionBadge}</span>
          <h1 className="page-header-title">{t.gallery.title}</h1>
          <p className="page-header-sub">{t.gallery.subtitle}</p>
        </div>
      </section>

      <Gallery currentLang={currentLang} />
    </div>
  );
};
