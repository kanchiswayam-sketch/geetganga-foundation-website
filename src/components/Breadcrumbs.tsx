import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { PageRoute } from '../types/routes';
import { Language } from '../types';
import { translations } from '../data/translations';

interface BreadcrumbsProps {
  currentRoute: PageRoute;
  currentLang: Language;
  onNavigate: (route: PageRoute) => void;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  currentRoute,
  currentLang,
  onNavigate
}) => {
  if (currentRoute === 'home') return null;

  const t = translations[currentLang];

  const getPageTitle = (route: PageRoute): string => {
    switch (route) {
      case 'about':
        return t.nav.about;
      case 'mission-vision':
        return t.nav.mission;
      case 'leadership':
        return t.nav.leadership;
      case 'managing-committee':
        return t.nav.managingCommittee;
      case 'advisory-committee':
        return t.nav.advisoryCommittee;
      case 'events':
        return t.nav.events;
      case 'health-camps':
        return t.nav.healthCamps;
      case 'blood-donation':
        return t.nav.bloodDonation;
      case 'sports-youth':
        return t.nav.sportsYouth;
      case 'education-social':
        return t.nav.educationSocial;
      case 'gallery':
        return t.nav.gallery;
      case 'video-gallery':
        return t.nav.videoGallery;
      case 'news':
        return t.nav.news;
      case 'volunteer':
        return t.nav.volunteer;
      case 'donate':
        return t.nav.donate;
      case 'contact':
        return t.nav.contact;
      case 'privacy-policy':
        return t.nav.privacyPolicy;
      default:
        return '';
    }
  };

  const getParentSection = (route: PageRoute): { title: string; route?: PageRoute } | null => {
    if (['about', 'mission-vision', 'leadership', 'managing-committee', 'advisory-committee'].includes(route)) {
      return { title: t.nav.aboutDropdown, route: 'about' };
    }
    if (['health-camps', 'blood-donation', 'sports-youth', 'education-social'].includes(route)) {
      return { title: t.nav.programmesDropdown, route: 'health-camps' };
    }
    if (['events', 'gallery', 'video-gallery', 'news'].includes(route)) {
      return { title: t.nav.mediaDropdown, route: 'events' };
    }
    return null;
  };

  const parent = getParentSection(currentRoute);

  return (
    <nav className="breadcrumbs-nav" aria-label="Breadcrumb">
      <div className="container">
        <ol className="breadcrumbs-list">
          <li className="breadcrumb-item">
            <button
              onClick={() => onNavigate('home')}
              className="breadcrumb-btn home-btn"
              title={t.nav.home}
            >
              <Home size={15} />
              <span>{t.nav.home}</span>
            </button>
          </li>

          {parent && (
            <>
              <li className="breadcrumb-separator">
                <ChevronRight size={14} />
              </li>
              <li className="breadcrumb-item">
                <button
                  onClick={() => parent.route && onNavigate(parent.route)}
                  className="breadcrumb-btn"
                >
                  {parent.title}
                </button>
              </li>
            </>
          )}

          <li className="breadcrumb-separator">
            <ChevronRight size={14} />
          </li>
          <li className="breadcrumb-item is-current" aria-current="page">
            <span>{getPageTitle(currentRoute)}</span>
          </li>
        </ol>
      </div>
    </nav>
  );
};
