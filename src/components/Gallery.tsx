import React, { useState } from 'react';
import { ZoomIn, X, Filter } from 'lucide-react';
import { Language, GalleryItem } from '../types';
import { translations } from '../data/translations';
import { ImageWithFallback } from './ImageWithFallback';

interface GalleryProps {
  currentLang: Language;
}

export const Gallery: React.FC<GalleryProps> = ({ currentLang }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'health' | 'blood' | 'community'>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);
  const t = translations[currentLang];

  const filteredItems =
    activeFilter === 'all'
      ? t.gallery.items
      : t.gallery.items.filter((item) => item.category === activeFilter);

  return (
    <section className="section-padding gallery-section" id="gallery">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">{t.gallery.sectionBadge}</span>
          <h2 className="section-title">{t.gallery.title}</h2>
          <p className="section-subtitle">{t.gallery.subtitle}</p>
        </div>

        {/* Filter Pills */}
        <div className="gallery-filter-bar">
          <div className="filter-label">
            <Filter size={16} />
            <span>{currentLang === 'mr' ? 'फिल्टर:' : 'Filter:'}</span>
          </div>
          <div className="filter-buttons">
            <button
              onClick={() => setActiveFilter('all')}
              className={`filter-btn ${activeFilter === 'all' ? 'is-active' : ''}`}
            >
              {t.gallery.filterAll}
            </button>
            <button
              onClick={() => setActiveFilter('health')}
              className={`filter-btn ${activeFilter === 'health' ? 'is-active' : ''}`}
            >
              {t.gallery.filterHealth}
            </button>
            <button
              onClick={() => setActiveFilter('blood')}
              className={`filter-btn ${activeFilter === 'blood' ? 'is-active' : ''}`}
            >
              {t.gallery.filterBlood}
            </button>
            <button
              onClick={() => setActiveFilter('community')}
              className={`filter-btn ${activeFilter === 'community' ? 'is-active' : ''}`}
            >
              {t.gallery.filterCommunity}
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="gallery-card"
              onClick={() => setSelectedPhoto(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setSelectedPhoto(item);
                }
              }}
              aria-label={`View photo: ${item.title}`}
            >
              <div className="gallery-image-box">
                <ImageWithFallback
                  src={item.imageSrc}
                  alt={item.alt}
                  className="gallery-img"
                  fallbackText="गीतगंगा उपक्रम"
                />
                <div className="gallery-hover-overlay">
                  <span className="zoom-btn">
                    <ZoomIn size={22} />
                    <span>{t.gallery.viewLarge}</span>
                  </span>
                </div>
                <span className="gallery-tag">{item.categoryLabel}</span>
              </div>
              <div className="gallery-info">
                <h3 className="gallery-item-title">{item.title}</h3>
                <p className="gallery-item-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedPhoto && (
          <div
            className="lightbox-backdrop"
            onClick={() => setSelectedPhoto(null)}
            role="dialog"
            aria-modal="true"
            aria-label={selectedPhoto.title}
          >
            <div
              className="lightbox-content"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="lightbox-close-btn"
                onClick={() => setSelectedPhoto(null)}
                aria-label={t.gallery.closeModal}
              >
                <X size={24} />
              </button>

              <div className="lightbox-image-wrap">
                <ImageWithFallback
                  src={selectedPhoto.imageSrc}
                  alt={selectedPhoto.alt}
                  className="lightbox-img"
                  fallbackText="गीतगंगा उपक्रम छायाचित्र"
                />
              </div>

              <div className="lightbox-caption">
                <div className="lightbox-badge-row">
                  <span className="lightbox-category-tag">
                    {selectedPhoto.categoryLabel}
                  </span>
                  <span className="lightbox-foundation-tag">
                    गीतगंगा सोशल फाऊंडेशन सोलापूर
                  </span>
                </div>
                <h3 className="lightbox-title">{selectedPhoto.title}</h3>
                <p className="lightbox-desc">{selectedPhoto.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
