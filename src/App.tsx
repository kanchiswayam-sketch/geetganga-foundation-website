import React, { useState, useEffect } from 'react';
import { Language } from './types';
import { useRouter } from './utils/router';
import { Header } from './components/Header';
import { Breadcrumbs } from './components/Breadcrumbs';
import { Footer } from './components/Footer';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { MissionVisionPage } from './pages/MissionVisionPage';
import { LeadershipPage } from './pages/LeadershipPage';
import { ManagingCommitteePage } from './pages/ManagingCommitteePage';
import { AdvisoryCommitteePage } from './pages/AdvisoryCommitteePage';
import { EventsPage } from './pages/EventsPage';
import { HealthCampsPage } from './pages/HealthCampsPage';
import { BloodDonationPage } from './pages/BloodDonationPage';
import { SportsYouthPage } from './pages/SportsYouthPage';
import { EducationSocialPage } from './pages/EducationSocialPage';
import { PhotoGalleryPage } from './pages/PhotoGalleryPage';
import { VideoGalleryPage } from './pages/VideoGalleryPage';
import { DonatePage } from './pages/DonatePage';
import { VolunteerPage } from './pages/VolunteerPage';
import { NewsPage } from './pages/NewsPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';

import { MessageCircle, ArrowUp } from 'lucide-react';

export const App: React.FC = () => {
  const [currentLang, setCurrentLang] = useState<Language>(() => {
    const saved = localStorage.getItem('geetganga_lang');
    return saved === 'en' || saved === 'mr' ? (saved as Language) : 'mr';
  });

  const { currentRoute, navigate } = useRouter();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    localStorage.setItem('geetganga_lang', currentLang);
    document.documentElement.lang = currentLang;
  }, [currentLang]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderCurrentPage = () => {
    switch (currentRoute) {
      case 'about':
        return <AboutPage currentLang={currentLang} onNavigate={navigate} />;
      case 'mission-vision':
        return <MissionVisionPage currentLang={currentLang} onNavigate={navigate} />;
      case 'leadership':
        return <LeadershipPage currentLang={currentLang} onNavigate={navigate} />;
      case 'managing-committee':
        return <ManagingCommitteePage currentLang={currentLang} onNavigate={navigate} />;
      case 'advisory-committee':
        return <AdvisoryCommitteePage currentLang={currentLang} onNavigate={navigate} />;
      case 'events':
        return <EventsPage currentLang={currentLang} onNavigate={navigate} />;
      case 'health-camps':
        return <HealthCampsPage currentLang={currentLang} onNavigate={navigate} />;
      case 'blood-donation':
        return <BloodDonationPage currentLang={currentLang} onNavigate={navigate} />;
      case 'sports-youth':
        return <SportsYouthPage currentLang={currentLang} onNavigate={navigate} />;
      case 'education-social':
        return <EducationSocialPage currentLang={currentLang} onNavigate={navigate} />;
      case 'gallery':
        return <PhotoGalleryPage currentLang={currentLang} onNavigate={navigate} />;
      case 'video-gallery':
        return <VideoGalleryPage currentLang={currentLang} onNavigate={navigate} />;
      case 'donate':
        return <DonatePage currentLang={currentLang} onNavigate={navigate} />;
      case 'volunteer':
        return <VolunteerPage currentLang={currentLang} onNavigate={navigate} />;
      case 'news':
        return <NewsPage currentLang={currentLang} onNavigate={navigate} />;
      case 'contact':
        return <ContactPage currentLang={currentLang} onNavigate={navigate} />;
      case 'privacy-policy':
        return <PrivacyPolicyPage currentLang={currentLang} onNavigate={navigate} />;
      case 'home':
      default:
        return <HomePage currentLang={currentLang} onNavigate={navigate} />;
    }
  };

  return (
    <div className="site-wrapper">
      {/* Sticky Header with Dropdowns and Lang Switch */}
      <Header
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
        currentRoute={currentRoute}
        onNavigate={navigate}
      />

      {/* Breadcrumbs for inner pages */}
      <Breadcrumbs
        currentRoute={currentRoute}
        currentLang={currentLang}
        onNavigate={navigate}
      />

      {/* Main Page Content */}
      <main id="main-content">
        {renderCurrentPage()}
      </main>

      {/* Comprehensive Footer */}
      <Footer
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
        onNavigate={navigate}
      />

      {/* Floating Action Hub */}
      <aside className="floating-actions" aria-label="Quick Actions">
        <a
          href="https://wa.me/919970610781"
          target="_blank"
          rel="noopener noreferrer"
          className="floating-btn whatsapp-floating-btn"
          aria-label="Chat with Geetganga Foundation on WhatsApp (9970610781)"
          title="WhatsApp: 9970610781"
        >
          <MessageCircle size={24} />
          <span className="floating-label">WhatsApp</span>
        </a>

        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="floating-btn scroll-top-btn"
            aria-label="Scroll back to top"
            title="Scroll to top"
          >
            <ArrowUp size={22} />
          </button>
        )}
      </aside>
    </div>
  );
};

export default App;
