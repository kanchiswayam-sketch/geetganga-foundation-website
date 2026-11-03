import React, { useState, useEffect } from 'react';
import { Language } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { MissionVision } from './components/MissionVision';
import { KeyActivities } from './components/KeyActivities';
import { Gallery } from './components/Gallery';
import { Donation } from './components/Donation';
import { Volunteer } from './components/Volunteer';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { MessageCircle, ArrowUp } from 'lucide-react';

export const App: React.FC = () => {
  const [currentLang, setCurrentLang] = useState<Language>(() => {
    const saved = localStorage.getItem('geetganga_lang');
    return saved === 'en' || saved === 'mr' ? (saved as Language) : 'mr';
  });

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

  return (
    <div className="site-wrapper">
      {/* Navigation Header */}
      <Header currentLang={currentLang} onLanguageChange={setCurrentLang} />

      {/* Main Content */}
      <main id="main-content">
        <Hero currentLang={currentLang} />
        <About currentLang={currentLang} />
        <MissionVision currentLang={currentLang} />
        <KeyActivities currentLang={currentLang} />
        <Gallery currentLang={currentLang} />
        <Donation currentLang={currentLang} />
        <Volunteer currentLang={currentLang} />
        <Contact currentLang={currentLang} />
      </main>

      {/* Footer */}
      <Footer currentLang={currentLang} onLanguageChange={setCurrentLang} />

      {/* Floating Action Buttons */}
      <aside className="floating-actions" aria-label="Quick Actions">
        {/* Floating WhatsApp Contact Button */}
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

        {/* Scroll To Top Button */}
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
