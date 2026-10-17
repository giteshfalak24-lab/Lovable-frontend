import React, { useState } from 'react';
import { Heart, Sparkles, Film, Camera, X, Play, ZoomIn } from 'lucide-react';
import { siteContent } from '../data/content';

/**
 * PersonalMediaGallery - Scrapbook Polaroid photo gallery & romantic video memory card
 * Preserves aspect ratios, includes cute washi tape, rotation angles, captions,
 * lightbox popup, and native responsive video controls.
 */
export default function PersonalMediaGallery({ onScrollToFinal }) {
  const { gallery } = siteContent;
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <section className="section-wrapper gallery-section" id="memories">
      {/* Section Header */}
      <div className="kawaii-badge">
        <Camera size={14} />
        <span>Scrapbook of Us 📖✨</span>
      </div>

      <h2 className="gallery-title font-display">
        {gallery.title}
      </h2>
      <p className="gallery-subtitle">
        {gallery.subtitle}
      </p>

      {/* Polaroid Scrapbook Grid */}
      <div className="scrapbook-grid">
        {gallery.photos.map((item, idx) => (
          <div
            key={item.id}
            className="polaroid-card"
            style={{
              transform: `rotate(${item.rotation || (idx % 2 === 0 ? '-2deg' : '2deg')})`,
            }}
            onClick={() => setSelectedPhoto(item)}
            role="button"
            tabIndex={0}
            aria-label={`View photo: ${item.caption}`}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') setSelectedPhoto(item);
            }}
          >
            {/* Washi Tape / Decorative Pin */}
            <div className={`washi-tape tape-${idx % 3}`}></div>

            <div className="polaroid-frame">
              <img
                src={item.src}
                alt={item.alt || item.caption}
                className="polaroid-img"
                loading="lazy"
                onError={(e) => {
                  // Fallback if custom path isn't present
                  e.currentTarget.style.display = 'none';
                  const fb = e.currentTarget.parentElement.querySelector('.polaroid-missing-placeholder');
                  if (fb) fb.style.display = 'flex';
                }}
              />
              <div className="polaroid-missing-placeholder" style={{ display: 'none' }}>
                <Heart size={36} fill="#ff8fab" stroke="none" />
                <span>Our Beautiful Moment</span>
              </div>

              {/* Hover Zoom Indicator */}
              <div className="zoom-hint">
                <ZoomIn size={18} />
                <span>Tap to view</span>
              </div>
            </div>

            <div className="polaroid-meta">
              <p className="polaroid-caption font-handwriting">{item.caption}</p>
              <div className="polaroid-footer">
                <span className="polaroid-date font-handwriting">{item.date}</span>
                <Heart size={14} fill="#ff477e" stroke="#ff477e" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Video Memory Section */}
      {gallery.videos && gallery.videos.length > 0 && (
        <div className="video-memory-container">
          <div className="video-card kawaii-card">
            <div className="video-header">
              <div className="kawaii-badge" style={{ marginBottom: 0 }}>
                <Film size={14} />
                <span>Video Memory 🎥</span>
              </div>
              <h3 className="video-card-title font-display">
                {gallery.videos[0].caption}
              </h3>
              <p className="video-subcaption font-handwriting">
                {gallery.videos[0].subCaption}
              </p>
            </div>

            <div className="video-player-frame">
              <video
                src={gallery.videos[0].src}
                controls
                playsInline
                preload="metadata"
                className="responsive-video"
                aria-label={gallery.videos[0].caption}
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const fb = e.currentTarget.parentElement.querySelector('.video-fallback-box');
                  if (fb) fb.style.display = 'flex';
                }}
              >
                Your browser does not support the video tag.
              </video>
              <div className="video-fallback-box" style={{ display: 'none' }}>
                <Film size={40} className="film-icon" />
                <p>Sweet Video Memory</p>
                <span>Drop your video file into public/videos/special-video-1.mp4</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Scroll Down To Final Question CTA */}
      {onScrollToFinal && (
        <button
          className="btn-primary continue-to-final-btn animate-bounce-gentle"
          onClick={onScrollToFinal}
        >
          <span>One last special question... 🌅🍳</span>
        </button>
      )}

      {/* Lightbox Modal for Photo Zoom */}
      {selectedPhoto && (
        <div
          className="lightbox-overlay"
          onClick={() => setSelectedPhoto(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="lightbox-close-btn"
              onClick={() => setSelectedPhoto(null)}
              aria-label="Close photo view"
            >
              <X size={22} />
            </button>

            <div className="lightbox-img-wrapper">
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.caption}
                className="lightbox-img"
              />
            </div>

            <div className="lightbox-details">
              <p className="lightbox-caption font-handwriting">{selectedPhoto.caption}</p>
              <span className="lightbox-date">{selectedPhoto.date} ♡</span>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .gallery-section {
          padding-top: 40px;
          padding-bottom: 60px;
          text-align: center;
        }

        .gallery-title {
          font-size: clamp(1.8rem, 4.5vw, 2.6rem);
          font-weight: 800;
          color: var(--text-dark);
          margin-bottom: 8px;
        }

        .gallery-subtitle {
          font-size: clamp(1rem, 2.5vw, 1.2rem);
          color: var(--text-medium);
          max-width: 540px;
          margin-bottom: 40px;
        }

        /* Scrapbook Grid */
        .scrapbook-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 32px 24px;
          width: 100%;
          max-width: 860px;
          justify-items: center;
          margin-bottom: 50px;
        }

        /* Polaroid Styling */
        .polaroid-card {
          background: #ffffff;
          padding: 14px 14px 20px;
          border-radius: 14px;
          box-shadow: var(--shadow-polaroid);
          width: 100%;
          max-width: 280px;
          position: relative;
          cursor: pointer;
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease;
          outline: none;
        }

        .polaroid-card:hover, .polaroid-card:focus-visible {
          transform: translateY(-8px) scale(1.03) !important;
          box-shadow: 0 20px 40px rgba(58, 46, 57, 0.22);
          z-index: 10;
        }

        /* Washi Tape variants */
        .washi-tape {
          position: absolute;
          top: -12px;
          left: 50%;
          transform: translateX(-50%);
          width: 90px;
          height: 24px;
          border-radius: 2px;
          box-shadow: 0 2px 6px rgba(0,0,0,0.08);
          z-index: 3;
          opacity: 0.85;
        }

        .tape-0 {
          background: rgba(255, 179, 198, 0.75);
          transform: translateX(-50%) rotate(-2deg);
        }
        .tape-1 {
          background: rgba(209, 196, 233, 0.75);
          transform: translateX(-50%) rotate(1.5deg);
        }
        .tape-2 {
          background: rgba(255, 205, 178, 0.75);
          transform: translateX(-50%) rotate(-1deg);
        }

        .polaroid-frame {
          width: 100%;
          aspect-ratio: 4 / 4.8;
          border-radius: 8px;
          overflow: hidden;
          background: var(--pink-50);
          position: relative;
        }

        .polaroid-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.4s ease;
        }

        .polaroid-card:hover .polaroid-img {
          transform: scale(1.05);
        }

        .polaroid-missing-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 10px;
          color: var(--pink-deep);
          font-weight: 700;
          font-size: 0.95rem;
          padding: 20px;
          text-align: center;
        }

        .zoom-hint {
          position: absolute;
          inset: 0;
          background: rgba(58, 46, 57, 0.35);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 6px;
          color: #ffffff;
          font-size: 0.85rem;
          font-weight: 700;
          opacity: 0;
          transition: opacity 0.2s ease;
        }

        .polaroid-card:hover .zoom-hint {
          opacity: 1;
        }

        .polaroid-meta {
          padding-top: 14px;
          text-align: left;
        }

        .polaroid-caption {
          font-size: 1.35rem;
          color: var(--text-dark);
          line-height: 1.3;
          margin-bottom: 4px;
        }

        .polaroid-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: var(--text-soft);
          font-size: 1.1rem;
        }

        /* Video Card */
        .video-memory-container {
          width: 100%;
          max-width: 680px;
          margin: 10px auto 40px;
        }

        .video-card {
          padding: 32px 24px;
          text-align: center;
        }

        .video-header {
          margin-bottom: 18px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }

        .video-card-title {
          font-size: 1.45rem;
          font-weight: 800;
          color: var(--text-dark);
          margin-top: 6px;
        }

        .video-subcaption {
          font-size: 1.3rem;
          color: var(--pink-deep);
        }

        .video-player-frame {
          width: 100%;
          border-radius: 18px;
          overflow: hidden;
          background: #111111;
          box-shadow: 0 10px 30px rgba(0,0,0,0.15);
          position: relative;
        }

        .responsive-video {
          width: 100%;
          max-height: 460px;
          display: block;
          outline: none;
        }

        .video-fallback-box {
          padding: 60px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 12px;
          color: #ffffff;
        }

        .video-fallback-box span {
          font-size: 0.85rem;
          color: #aaaaaa;
        }

        .continue-to-final-btn {
          margin-top: 10px;
          font-size: 1.15rem;
        }

        /* Lightbox Modal */
        .lightbox-overlay {
          position: fixed;
          inset: 0;
          background: rgba(40, 30, 40, 0.85);
          backdrop-filter: blur(8px);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          animation: fadeIn 0.25s ease;
        }

        .lightbox-content {
          background: #ffffff;
          padding: 16px 16px 22px;
          border-radius: 24px;
          max-width: 600px;
          width: 100%;
          position: relative;
          box-shadow: 0 25px 60px rgba(0,0,0,0.4);
          animation: scaleUp 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .lightbox-close-btn {
          position: absolute;
          top: -14px;
          right: -14px;
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: var(--pink-500);
          color: #ffffff;
          border: 3px solid #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 4px 15px rgba(0,0,0,0.25);
          transition: transform 0.2s ease;
          z-index: 5;
        }

        .lightbox-close-btn:hover {
          transform: scale(1.1);
        }

        .lightbox-img-wrapper {
          width: 100%;
          max-height: 70vh;
          border-radius: 16px;
          overflow: hidden;
          background: var(--pink-50);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .lightbox-img {
          width: 100%;
          height: auto;
          max-height: 70vh;
          object-fit: contain;
        }

        .lightbox-details {
          padding-top: 16px;
          text-align: center;
        }

        .lightbox-caption {
          font-size: 1.7rem;
          color: var(--text-dark);
          font-weight: 700;
        }

        .lightbox-date {
          font-size: 0.95rem;
          color: var(--pink-deep);
          font-weight: 600;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes scaleUp {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }

        @media (max-width: 500px) {
          .scrapbook-grid {
            grid-template-columns: 1fr;
          }
          .polaroid-card {
            max-width: 300px;
          }
          .video-card {
            padding: 20px 14px;
          }
        }
      `}</style>
    </section>
  );
}
