import React, { useState } from 'react';
import {
  Calendar,
  Tag,
  ArrowRight,
  AlertCircle,
  X,
  Share2,
  CheckCircle2,
  Filter,
  Eye
} from 'lucide-react';
import { Language, NewsItem } from '../types';
import { PageRoute } from '../types/routes';
import { translations } from '../data/translations';

interface PageProps {
  currentLang: Language;
  onNavigate: (route: PageRoute) => void;
}

type NewsCategoryFilter = 'all' | 'foundation' | 'health' | 'blood' | 'education' | 'sports' | 'community';

export const NewsPage: React.FC<PageProps> = ({ currentLang, onNavigate }) => {
  const t = translations[currentLang];
  const [activeCategory, setActiveCategory] = useState<NewsCategoryFilter>('all');
  const [selectedArticle, setSelectedArticle] = useState<NewsItem | null>(null);

  const categories: { key: NewsCategoryFilter; label: string }[] = [
    { key: 'all', label: t.news.filterAll },
    { key: 'foundation', label: t.news.filterFoundation },
    { key: 'health', label: t.news.filterHealth },
    { key: 'blood', label: t.news.filterBlood },
    { key: 'education', label: t.news.filterEducation },
    { key: 'sports', label: t.news.filterSports },
    { key: 'community', label: t.news.filterCommunity }
  ];

  const filteredItems = t.news.items.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.categoryKey === activeCategory;
  });

  const handleShareWhatsApp = (article: NewsItem) => {
    const text = `*${article.title}*\n\n${article.summary}\n\n📍 गीतगंगा सोशल फाऊंडेशन सोलापूर (भवानी पेठ)\nअधिक माहितीसाठी संपर्क: +91 9970610781`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="inner-page-wrapper">
      {/* Header Banner */}
      <section className="page-header-banner">
        <div className="container">
          <span className="page-header-badge">{t.news.sectionBadge}</span>
          <h1 className="page-header-title">{t.news.title}</h1>
          <p className="page-header-sub">{t.news.subtitle}</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          {/* Category Filter Pills */}
          <div className="news-filter-wrapper">
            <div className="news-filter-bar">
              {categories.map((cat) => {
                const count = cat.key === 'all'
                  ? t.news.items.length
                  : t.news.items.filter((it) => it.categoryKey === cat.key).length;
                if (count === 0 && cat.key !== 'all') return null;

                const isActive = activeCategory === cat.key;
                return (
                  <button
                    key={cat.key}
                    onClick={() => setActiveCategory(cat.key)}
                    className={`news-filter-pill ${isActive ? 'is-active' : ''}`}
                    type="button"
                  >
                    <span>{cat.label}</span>
                    <span className="pill-count">{count}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* News Grid */}
          <div className="news-cards-grid">
            {filteredItems.map((item) => (
              <article
                key={item.id}
                className={`news-card-modern ${item.isImportant ? 'is-important-border' : ''}`}
              >
                {/* Image Thumbnail */}
                {item.imageSrc && (
                  <div
                    className="news-card-media"
                    onClick={() => setSelectedArticle(item)}
                    role="button"
                    tabIndex={0}
                  >
                    <img
                      src={item.imageSrc}
                      alt={item.title}
                      className="news-media-img"
                      loading="lazy"
                    />
                    <div className="news-media-overlay">
                      <Eye size={20} />
                      <span>{t.news.readMoreBtn}</span>
                    </div>
                    {item.isImportant && (
                      <span className="news-flag-pill">
                        <AlertCircle size={13} />
                        <span>{currentLang === 'mr' ? 'महत्त्वाची सूचना' : 'Important Notice'}</span>
                      </span>
                    )}
                  </div>
                )}

                <div className="news-card-content">
                  <div className="news-meta-row">
                    <span className="news-category-tag">
                      <Tag size={12} />
                      <span>{item.category}</span>
                    </span>
                    <span className="news-date-text">
                      <Calendar size={13} />
                      <span>{item.date}</span>
                    </span>
                  </div>

                  <h2
                    className="news-card-title"
                    onClick={() => setSelectedArticle(item)}
                    role="button"
                    tabIndex={0}
                  >
                    {item.title}
                  </h2>

                  <p className="news-card-summary">{item.summary}</p>

                  {/* Tags */}
                  {item.tags && item.tags.length > 0 && (
                    <div className="news-tags-row">
                      {item.tags.slice(0, 3).map((tag, idx) => (
                        <span key={idx} className="news-mini-tag">#{tag}</span>
                      ))}
                    </div>
                  )}

                  {/* Card Actions */}
                  <div className="news-card-footer">
                    <button
                      onClick={() => setSelectedArticle(item)}
                      className="btn btn-outline btn-sm news-read-btn"
                    >
                      <span>{t.news.readMoreBtn}</span>
                      <ArrowRight size={14} className="btn-icon-right" />
                    </button>

                    <button
                      onClick={() => handleShareWhatsApp(item)}
                      className="news-share-btn"
                      title={t.news.shareWhatsApp}
                      aria-label={t.news.shareWhatsApp}
                    >
                      <Share2 size={16} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="news-empty-state">
              <Filter size={36} className="empty-icon" />
              <h3>{currentLang === 'mr' ? 'या वर्गवारीत अद्याप बातम्या उपलब्ध नाहीत' : 'No articles currently in this category'}</h3>
              <button onClick={() => setActiveCategory('all')} className="btn btn-outline btn-sm">
                {currentLang === 'mr' ? 'सर्व बातम्या पहा' : 'View All Updates'}
              </button>
            </div>
          )}

          {/* Cross navigation callout */}
          <div className="cross-nav-card" style={{ marginTop: '4rem' }}>
            <div className="cross-nav-content">
              <h3>
                {currentLang === 'mr'
                  ? 'आगामी शिबिरांमध्ये सहभागी होऊ इच्छिता?'
                  : 'Want to participate in our upcoming camps?'}
              </h3>
              <p>
                {currentLang === 'mr'
                  ? 'संस्थेचे आगामी आरोग्य व रक्तदान शिबिरांचे वेळापत्रक पहा किंवा स्वयंसेवक म्हणून नोंदणी करा.'
                  : 'Check our full calendar of upcoming medical drives or register as a volunteer.'}
              </p>
            </div>
            <div className="cross-nav-btns">
              <button
                onClick={() => onNavigate('events')}
                className="btn btn-primary"
              >
                <span>{t.nav.events}</span>
                <ArrowRight size={16} className="btn-icon-right" />
              </button>
              <button
                onClick={() => onNavigate('volunteer')}
                className="btn btn-outline"
              >
                <span>{t.nav.volunteer}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Article Detail Modal */}
      {selectedArticle && (
        <div className="article-modal-backdrop" onClick={() => setSelectedArticle(null)}>
          <div className="article-modal-container" onClick={(e) => e.stopPropagation()}>
            <div className="article-modal-header">
              <div className="article-modal-badge-group">
                <span className="modal-category-badge">
                  <Tag size={13} />
                  <span>{selectedArticle.category}</span>
                </span>
                <span className="modal-date-text">
                  <Calendar size={13} />
                  <span>{selectedArticle.date}</span>
                </span>
                {selectedArticle.isImportant && (
                  <span className="news-flag-pill">
                    <AlertCircle size={13} />
                    <span>{currentLang === 'mr' ? 'महत्त्वाची सूचना' : 'Important Notice'}</span>
                  </span>
                )}
              </div>
              <button
                className="article-modal-close"
                onClick={() => setSelectedArticle(null)}
                aria-label="Close"
              >
                <X size={22} />
              </button>
            </div>

            <div className="article-modal-body">
              <h2 className="article-modal-title">{selectedArticle.title}</h2>

              {selectedArticle.imageSrc && (
                <div className="article-modal-image-wrap">
                  <img
                    src={selectedArticle.imageSrc}
                    alt={selectedArticle.title}
                    className="article-modal-img"
                  />
                </div>
              )}

              <p className="article-modal-lead">{selectedArticle.summary}</p>

              <div className="article-modal-content">
                <p>{selectedArticle.content}</p>
              </div>

              {selectedArticle.fullDetails && selectedArticle.fullDetails.length > 0 && (
                <div className="article-details-box">
                  <h4 className="details-box-title">
                    <CheckCircle2 size={16} />
                    <span>{currentLang === 'mr' ? 'महत्त्वाचे ठळक मुद्दे / तपशील:' : 'Key Highlights & Particulars:'}</span>
                  </h4>
                  <ul className="details-list">
                    {selectedArticle.fullDetails.map((point, idx) => (
                      <li key={idx}>
                        <span className="bullet-dot">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedArticle.source && (
                <div className="article-source-bar">
                  <span className="source-label">{t.news.officialSource}</span>
                  <span className="source-name">{selectedArticle.source}</span>
                </div>
              )}

              {selectedArticle.tags && selectedArticle.tags.length > 0 && (
                <div className="article-modal-tags">
                  {selectedArticle.tags.map((tag, idx) => (
                    <span key={idx} className="news-tag-chip">#{tag}</span>
                  ))}
                </div>
              )}
            </div>

            <div className="article-modal-footer">
              <button
                onClick={() => handleShareWhatsApp(selectedArticle)}
                className="btn btn-whatsapp btn-sm"
              >
                <Share2 size={16} className="btn-icon" />
                <span>{t.news.shareWhatsApp}</span>
              </button>
              <button
                onClick={() => setSelectedArticle(null)}
                className="btn btn-outline btn-sm"
              >
                {t.news.closeBtn}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
