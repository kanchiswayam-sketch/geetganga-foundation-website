import React, { useState, useEffect } from 'react';
import {
  Calendar,
  MapPin,
  Clock,
  CheckCircle2,
  Filter,
  MessageCircle,
  AlertCircle,
  Tag,
  Users,
  Building,
  Image as ImageIcon,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2
} from 'lucide-react';
import { Language, EventItem } from '../types';
import { PageRoute } from '../types/routes';
import { translations } from '../data/translations';
import { ImageWithFallback } from '../components/ImageWithFallback';

interface PageProps {
  currentLang: Language;
  onNavigate: (route: PageRoute) => void;
}

interface LightboxState {
  images: string[];
  currentIndex: number;
  title: string;
}

export const EventsPage: React.FC<PageProps> = ({ currentLang, onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'past' | 'upcoming'>('past');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);
  const t = translations[currentLang];

  // Close lightbox on Escape key & arrow navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightbox(null);
      } else if (e.key === 'ArrowRight' && lightbox) {
        setLightbox((prev) =>
          prev ? { ...prev, currentIndex: (prev.currentIndex + 1) % prev.images.length } : null
        );
      } else if (e.key === 'ArrowLeft' && lightbox) {
        setLightbox((prev) =>
          prev
            ? { ...prev, currentIndex: (prev.currentIndex - 1 + prev.images.length) % prev.images.length }
            : null
        );
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightbox]);

  const eventsInTab = t.events.items.filter((item) => item.status === activeTab);

  const filteredEvents =
    activeCategory === 'all'
      ? eventsInTab
      : eventsInTab.filter((item) => item.category === activeCategory);

  const handleWhatsAppInquiry = (event: EventItem) => {
    const text =
      currentLang === 'mr'
        ? `नमस्ते गीतगंगा सोशल फाऊंडेशन, मला या कार्यक्रमाविषयी अधिक माहिती हवी आहे:\n*कार्यक्रम:* ${event.title}\n*दिनांक:* ${event.date}\n*ठिकाण:* ${event.location}`
        : `Hello Geetganga Social Foundation, I would like to inquire about this event:\n*Event:* ${event.title}\n*Date:* ${event.date}\n*Location:* ${event.location}`;
    window.open(`https://wa.me/919970610781?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  };

  const openLightbox = (images: string[], index: number, title: string) => {
    setLightbox({ images, currentIndex: index, title });
  };

  return (
    <div className="inner-page-wrapper">
      {/* Page Header */}
      <section className="page-header-banner">
        <div className="container">
          <span className="page-header-badge">{t.events.sectionBadge}</span>
          <h1 className="page-header-title">
            {currentLang === 'mr' ? 'उपक्रम व छायाचित्र दालन (Events Gallery)' : 'Events & Activities Gallery'}
          </h1>
          <p className="page-header-sub">{t.events.subtitle}</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          {/* Main Status Tabs: Past vs Upcoming */}
          <div className="events-main-tabs">
            <button
              onClick={() => setActiveTab('past')}
              className={`event-status-tab ${activeTab === 'past' ? 'is-active' : ''}`}
            >
              <Calendar size={18} />
              <span>{t.events.tabPast}</span>
              <span className="tab-count-badge">
                {t.events.items.filter((i) => i.status === 'past').length}
              </span>
            </button>
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`event-status-tab ${activeTab === 'upcoming' ? 'is-active' : ''}`}
            >
              <Clock size={18} />
              <span>{t.events.tabUpcoming}</span>
              <span className="tab-count-badge">
                {t.events.items.filter((i) => i.status === 'upcoming').length}
              </span>
            </button>
          </div>

          {/* Upcoming notice banner if viewing upcoming */}
          {activeTab === 'upcoming' && (
            <div className="upcoming-placeholder-banner">
              <AlertCircle size={22} className="alert-icon" />
              <p className="banner-text">{t.events.upcomingPlaceholderNote}</p>
            </div>
          )}

          {/* Category Filter Pills */}
          <div className="events-filter-bar">
            <div className="filter-label">
              <Filter size={16} />
              <span>{currentLang === 'mr' ? 'वर्गवारी:' : 'Filter:'}</span>
            </div>
            <div className="filter-buttons">
              <button
                onClick={() => setActiveCategory('all')}
                className={`filter-btn ${activeCategory === 'all' ? 'is-active' : ''}`}
              >
                {t.events.filterAll}
              </button>
              <button
                onClick={() => setActiveCategory('health')}
                className={`filter-btn ${activeCategory === 'health' ? 'is-active' : ''}`}
              >
                {t.events.filterHealth}
              </button>
              <button
                onClick={() => setActiveCategory('blood')}
                className={`filter-btn ${activeCategory === 'blood' ? 'is-active' : ''}`}
              >
                {t.events.filterBlood}
              </button>
              <button
                onClick={() => setActiveCategory('education')}
                className={`filter-btn ${activeCategory === 'education' ? 'is-active' : ''}`}
              >
                {t.events.filterEducation}
              </button>
              <button
                onClick={() => setActiveCategory('social')}
                className={`filter-btn ${activeCategory === 'social' ? 'is-active' : ''}`}
              >
                {t.events.filterSocial}
              </button>
            </div>
          </div>

          {/* Events List */}
          <div className="events-cards-list">
            {filteredEvents.length === 0 ? (
              <div className="empty-events-state">
                <Calendar size={48} className="empty-icon" />
                <h3>{currentLang === 'mr' ? 'या वर्गवारीत उपक्रम उपलब्ध नाहीत' : 'No events in this category'}</h3>
                <p>{currentLang === 'mr' ? 'कृपया दुसरी वर्गवारी निवडा.' : 'Please select another category.'}</p>
              </div>
            ) : (
              filteredEvents.map((event) => {
                const photos = event.galleryImages && event.galleryImages.length > 0
                  ? event.galleryImages
                  : event.imageSrc
                  ? [event.imageSrc]
                  : [];

                return (
                  <article key={event.id} className="event-gallery-card">
                    <div className="event-card-header-bar">
                      <div className="event-meta-left">
                        <span className="event-category-badge">
                          <Tag size={13} />
                          <span>{event.categoryLabel}</span>
                        </span>
                        {event.isVerified ? (
                          <span className="event-verification-badge is-verified">
                            <CheckCircle2 size={13} />
                            <span>{t.events.verifiedTag}</span>
                          </span>
                        ) : (
                          <span className="event-verification-badge is-scheduled">
                            <Clock size={13} />
                            <span>{t.events.scheduledTag}</span>
                          </span>
                        )}
                      </div>

                      {event.beneficiaries && (
                        <div className="event-beneficiary-chip">
                          <Users size={14} />
                          <span>{event.beneficiaries}</span>
                        </div>
                      )}
                    </div>

                    <div className="event-card-content">
                      <h2 className="event-title">{event.title}</h2>

                      <div className="event-details-row">
                        <div className="event-detail-item">
                          <Calendar size={15} className="detail-icon" />
                          <span className="detail-label">{t.events.dateLabel}</span>
                          <strong className="detail-value">{event.date}</strong>
                        </div>
                        {event.time && (
                          <div className="event-detail-item">
                            <Clock size={15} className="detail-icon" />
                            <span className="detail-value">{event.time}</span>
                          </div>
                        )}
                        <div className="event-detail-item">
                          <MapPin size={15} className="detail-icon" />
                          <span className="detail-label">{t.events.locationLabel}</span>
                          <span className="detail-value">{event.location}</span>
                        </div>
                      </div>

                      {event.partnerOrgs && (
                        <div className="event-partner-row">
                          <Building size={15} className="partner-icon" />
                          <span className="partner-label">
                            {currentLang === 'mr' ? 'सहकार्य / मदत कक्ष:' : 'In Collaboration With:'}
                          </span>
                          <span className="partner-value">{event.partnerOrgs}</span>
                        </div>
                      )}

                      <p className="event-description-text">{event.description}</p>

                      {event.highlights && event.highlights.length > 0 && (
                        <div className="event-highlights-wrap">
                          <h4 className="highlights-subtitle">
                            {currentLang === 'mr' ? 'प्रमुख वैशिष्ट्ये:' : 'Key Highlights:'}
                          </h4>
                          <div className="event-highlights-chips">
                            {event.highlights.map((h, i) => (
                              <span key={i} className="highlight-chip">
                                <CheckCircle2 size={13} className="chip-check" />
                                <span>{h}</span>
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Event Photo Gallery Grid */}
                      {photos.length > 0 && (
                        <div className="event-photo-gallery-section">
                          <div className="gallery-section-heading">
                            <ImageIcon size={15} />
                            <span>
                              {currentLang === 'mr'
                                ? `उपक्रम छायाचित्रे (${photos.length} फोटो — मोठे पाहण्यासाठी क्लिक करा)`
                                : `Event Photographs (${photos.length} photos — click to expand)`}
                            </span>
                          </div>

                          <div className="event-photos-grid">
                            {photos.map((imgSrc, imgIdx) => (
                              <button
                                key={imgIdx}
                                type="button"
                                className="event-photo-item"
                                onClick={() => openLightbox(photos, imgIdx, event.title)}
                                aria-label={`View photo ${imgIdx + 1} of ${event.title}`}
                              >
                                <ImageWithFallback
                                  src={imgSrc}
                                  alt={`${event.title} - photo ${imgIdx + 1}`}
                                  className="event-grid-img"
                                  fallbackText="छायाचित्र"
                                />
                                <div className="photo-zoom-overlay">
                                  <Maximize2 size={18} className="zoom-icon" />
                                </div>
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Actions row */}
                      <div className="event-footer-action-row">
                        <button
                          onClick={() => handleWhatsAppInquiry(event)}
                          className="btn btn-whatsapp btn-sm"
                        >
                          <MessageCircle size={16} className="btn-icon" />
                          <span>
                            {currentLang === 'mr'
                              ? 'कार्यक्रमाबाबत WhatsApp वर विचारा'
                              : 'Inquire via WhatsApp'}
                          </span>
                        </button>

                        <button
                          onClick={() => onNavigate('donate')}
                          className="btn btn-outline btn-sm"
                        >
                          <span>{currentLang === 'mr' ? 'उपक्रमास सहकार्य करा' : 'Support This Cause'}</span>
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })
            )}
          </div>
        </div>
      </section>

      {/* Lightbox Zoom Modal */}
      {lightbox && (
        <div
          className="lightbox-overlay"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.title}
        >
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="lightbox-close-btn"
              onClick={() => setLightbox(null)}
              aria-label="Close image viewer"
            >
              <X size={24} />
            </button>

            {lightbox.images.length > 1 && (
              <>
                <button
                  className="lightbox-nav-btn lightbox-prev"
                  onClick={() =>
                    setLightbox((prev) =>
                      prev
                        ? {
                            ...prev,
                            currentIndex:
                              (prev.currentIndex - 1 + prev.images.length) % prev.images.length
                          }
                        : null
                    )
                  }
                  aria-label="Previous image"
                >
                  <ChevronLeft size={28} />
                </button>
                <button
                  className="lightbox-nav-btn lightbox-next"
                  onClick={() =>
                    setLightbox((prev) =>
                      prev
                        ? {
                            ...prev,
                            currentIndex: (prev.currentIndex + 1) % prev.images.length
                          }
                        : null
                    )
                  }
                  aria-label="Next image"
                >
                  <ChevronRight size={28} />
                </button>
              </>
            )}

            <div className="lightbox-img-wrap">
              <img
                src={lightbox.images[lightbox.currentIndex]}
                alt={lightbox.title}
                className="lightbox-main-img"
              />
            </div>

            <div className="lightbox-caption-bar">
              <span className="lightbox-title">{lightbox.title}</span>
              {lightbox.images.length > 1 && (
                <span className="lightbox-counter">
                  {lightbox.currentIndex + 1} / {lightbox.images.length}
                </span>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
