import React, { useState } from 'react';
import { Play, Clock, Calendar, Info, X } from 'lucide-react';
import { Language, VideoItem } from '../types';
import { PageRoute } from '../types/routes';
import { translations } from '../data/translations';
import { ImageWithFallback } from '../components/ImageWithFallback';

interface PageProps {
  currentLang: Language;
  onNavigate: (route: PageRoute) => void;
}

export const VideoGalleryPage: React.FC<PageProps> = ({ currentLang }) => {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
  const t = translations[currentLang];

  return (
    <div className="inner-page-wrapper">
      <section className="page-header-banner">
        <div className="container">
          <span className="page-header-badge">{t.videoGallery.sectionBadge}</span>
          <h1 className="page-header-title">{t.videoGallery.title}</h1>
          <p className="page-header-sub">{t.videoGallery.subtitle}</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="committee-notice-box" style={{ marginBottom: '2.5rem' }}>
            <Info size={20} className="notice-icon" />
            <p className="notice-text">{t.videoGallery.notice}</p>
          </div>

          <div className="video-grid">
            {t.videoGallery.items.map((video) => (
              <div
                key={video.id}
                className="video-card"
                onClick={() => setSelectedVideo(video)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setSelectedVideo(video);
                  }
                }}
                aria-label={`Play video: ${video.title}`}
              >
                <div className="video-thumb-wrap">
                  <ImageWithFallback
                    src={video.thumbnail}
                    alt={video.title}
                    className="video-thumb-img"
                    fallbackText="व्हिडिओ कव्हर"
                  />
                  <div className="video-play-btn" title="Click to Play">
                    <Play size={28} fill="#FFFFFF" />
                  </div>
                  {video.duration && (
                    <span className="video-duration-badge">
                      <Clock size={12} />
                      <span>{video.duration}</span>
                    </span>
                  )}
                  <span className="video-category-tag">{video.category}</span>
                </div>

                <div className="video-info-box">
                  <div className="video-date-row">
                    <Calendar size={14} />
                    <span>{video.date}</span>
                  </div>
                  <h2 className="video-title">{video.title}</h2>
                  <p className="video-desc">{video.description}</p>

                  <div className="video-card-footer-cta">
                    <span className="play-cta-text">
                      <Play size={14} fill="currentColor" />
                      <span>{currentLang === 'mr' ? 'व्हिडिओ पहा (Play)' : 'Watch Video'}</span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Playable Video Modal */}
          {selectedVideo && (
            <div
              className="lightbox-overlay"
              onClick={() => setSelectedVideo(null)}
              role="dialog"
              aria-modal="true"
              aria-label={selectedVideo.title}
            >
              <div
                className="lightbox-content video-modal-content"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="lightbox-close-btn"
                  onClick={() => setSelectedVideo(null)}
                  aria-label="Close video player"
                >
                  <X size={24} />
                </button>

                <div className="video-player-frame">
                  {selectedVideo.videoUrl ? (
                    <video
                      key={selectedVideo.videoUrl}
                      src={selectedVideo.videoUrl}
                      controls
                      autoPlay
                      playsInline
                      poster={selectedVideo.thumbnail}
                      className="main-html5-video"
                    >
                      Your browser does not support HTML5 video playback.
                    </video>
                  ) : (
                    <div className="video-modal-preview">
                      <ImageWithFallback
                        src={selectedVideo.thumbnail}
                        alt={selectedVideo.title}
                        className="modal-preview-img"
                        fallbackText="व्हिडिओ"
                      />
                    </div>
                  )}
                </div>

                <div className="lightbox-caption">
                  <div className="lightbox-badge-row">
                    <span className="lightbox-category-tag">{selectedVideo.category}</span>
                    <span className="lightbox-foundation-tag">{selectedVideo.date}</span>
                  </div>
                  <h3 className="lightbox-title">{selectedVideo.title}</h3>
                  <p className="lightbox-desc">{selectedVideo.description}</p>

                  {selectedVideo.highlights && (
                    <div className="event-highlights-chips" style={{ marginTop: '0.75rem' }}>
                      {selectedVideo.highlights.map((h, i) => (
                        <span key={i} className="highlight-chip">
                          • {h}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
