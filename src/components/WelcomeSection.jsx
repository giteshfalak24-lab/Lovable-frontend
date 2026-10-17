import React from 'react';
import { Heart, Sparkles, ChevronDown } from 'lucide-react';
import { siteContent } from '../data/content';

/**
 * WelcomeSection - Cute full-screen romantic welcome
 * Features an animated kawaii bear, glowing heart, soft animations,
 * and a smooth scroll down hint.
 */
export default function WelcomeSection({ onScrollToQuestions }) {
  const { welcome } = siteContent;

  return (
    <section className="welcome-hero-section" id="welcome">
      <div className="welcome-inner">
        {/* Cute Top Badge */}
        <div className="kawaii-badge animate-bounce-gentle">
          <Sparkles size={14} />
          <span>{welcome.badge}</span>
          <Heart size={14} fill="currentColor" />
        </div>

        {/* Animated Mascot / Illustration: Kawaii Bear with Heart */}
        <div className="kawaii-mascot-container">
          <div className="mascot-svg-wrapper animate-float">
            <svg
              viewBox="0 0 200 200"
              width="190"
              height="190"
              className="kawaii-mascot"
              aria-label="Cute bear holding a glowing heart"
            >
              {/* Soft background glow */}
              <circle cx="100" cy="100" r="85" fill="#ffe4ec" opacity="0.6" />
              <circle cx="100" cy="100" r="72" fill="#ffd1dc" opacity="0.4" />

              {/* Bear Ears */}
              <circle cx="55" cy="55" r="24" fill="#d4a373" />
              <circle cx="55" cy="55" r="14" fill="#ffccd5" />
              <circle cx="145" cy="55" r="24" fill="#d4a373" />
              <circle cx="145" cy="55" r="14" fill="#ffccd5" />

              {/* Bear Head */}
              <ellipse cx="100" cy="98" rx="65" ry="58" fill="#e7bc91" />

              {/* Bear Cheeks (blush) */}
              <ellipse cx="62" cy="114" rx="12" ry="8" fill="#ff8fab" opacity="0.75" />
              <ellipse cx="138" cy="114" rx="12" ry="8" fill="#ff8fab" opacity="0.75" />

              {/* Bear Eyes (happy sparkling eyes) */}
              <ellipse cx="74" cy="95" rx="6" ry="8" fill="#3a2e39" />
              <circle cx="72" cy="92" r="2.5" fill="#ffffff" />
              <circle cx="76" cy="97" r="1.2" fill="#ffffff" />

              <ellipse cx="126" cy="95" rx="6" ry="8" fill="#3a2e39" />
              <circle cx="124" cy="92" r="2.5" fill="#ffffff" />
              <circle cx="128" cy="97" r="1.2" fill="#ffffff" />

              {/* Bear Snout */}
              <ellipse cx="100" cy="112" rx="20" ry="14" fill="#fff5eb" />
              <ellipse cx="100" cy="107" rx="7" ry="5" fill="#4a3b32" />
              <path d="M 100 112 Q 100 118 94 120" stroke="#4a3b32" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              <path d="M 100 112 Q 100 118 106 120" stroke="#4a3b32" strokeWidth="2.5" strokeLinecap="round" fill="none" />

              {/* Little bear paws holding glowing heart */}
              <g className="animate-pulse-glow" style={{ transformOrigin: '100px 145px' }}>
                {/* Heart */}
                <path
                  d="M 100 170 C 80 150 48 135 48 112 C 48 95 62 82 80 82 C 92 82 98 90 100 95 C 102 90 108 82 120 82 C 138 82 152 95 152 112 C 152 135 120 150 100 170 Z"
                  fill="url(#heartGradient)"
                  filter="drop-shadow(0px 8px 16px rgba(255, 71, 126, 0.45))"
                />
                {/* Heart sparkle */}
                <circle cx="82" cy="102" r="4" fill="#ffffff" opacity="0.8" />
                <circle cx="90" cy="112" r="2" fill="#ffffff" opacity="0.6" />
              </g>

              {/* Bear Paws on heart */}
              <ellipse cx="62" cy="138" rx="14" ry="11" fill="#d4a373" transform="rotate(-25 62 138)" />
              <ellipse cx="138" cy="138" rx="14" ry="11" fill="#d4a373" transform="rotate(25 138 138)" />

              <defs>
                <linearGradient id="heartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ff758f" />
                  <stop offset="100%" stopColor="#ff477e" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="welcome-heading font-display">
          Hey sweetheart... <br />
          <span className="welcome-highlight">I have a surprise for u 💗</span>
        </h1>

        {/* Supporting Subtitle */}
        <p className="welcome-subtitle">
          {welcome.subtitle}
        </p>

        {/* Preview Polaroid Card of Her */}
        <div className="welcome-photo-polaroid">
          <div className="polaroid-tape"></div>
          <div className="polaroid-img-wrapper">
            <img
              src="/images/her-photo-1.jpg"
              alt="My Sweetheart"
              className="polaroid-img"
              onError={(e) => {
                // Graceful fallback if image is missing
                e.currentTarget.style.display = 'none';
                const fb = e.currentTarget.nextSibling;
                if (fb) fb.style.display = 'flex';
              }}
            />
            <div className="polaroid-fallback" style={{ display: 'none' }}>
              <span>🌸</span>
              <p>For My Favorite Person</p>
            </div>
          </div>
          <p className="polaroid-caption font-handwriting">The prettiest smile in the universe ♡</p>
        </div>

        {/* Scroll CTA Button */}
        <button
          className="btn-primary scroll-cta-btn animate-bounce-gentle"
          onClick={onScrollToQuestions}
          aria-label="Scroll down to the first surprise question"
        >
          <span>{welcome.scrollHint}</span>
          <ChevronDown size={20} />
        </button>
      </div>

      <style>{`
        .welcome-hero-section {
          min-height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 80px 20px 40px;
          position: relative;
        }

        .welcome-inner {
          max-width: 680px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }

        .kawaii-mascot-container {
          margin: 10px 0;
        }

        .welcome-heading {
          font-size: clamp(2rem, 5.5vw, 3.2rem);
          font-weight: 800;
          line-height: 1.25;
          color: var(--text-dark);
          letter-spacing: -0.5px;
          margin-top: 6px;
        }

        .welcome-highlight {
          background: linear-gradient(135deg, var(--pink-500) 0%, var(--pink-deep) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          display: inline-block;
        }

        .welcome-subtitle {
          font-size: clamp(1.05rem, 2.5vw, 1.25rem);
          color: var(--text-medium);
          max-width: 520px;
          line-height: 1.6;
        }

        /* Hero Polaroid */
        .welcome-photo-polaroid {
          background: #ffffff;
          padding: 12px 12px 18px;
          border-radius: 16px;
          box-shadow: var(--shadow-polaroid);
          position: relative;
          transform: rotate(-2deg);
          transition: transform 0.3s ease;
          max-width: 260px;
          margin: 14px 0 20px;
        }

        .welcome-photo-polaroid:hover {
          transform: rotate(0deg) scale(1.04);
        }

        .polaroid-tape {
          position: absolute;
          top: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 22px;
          background: rgba(255, 209, 220, 0.7);
          backdrop-filter: blur(2px);
          border-radius: 3px;
          box-shadow: 0 2px 6px rgba(0,0,0,0.06);
          z-index: 2;
        }

        .polaroid-img-wrapper {
          width: 100%;
          height: 220px;
          border-radius: 10px;
          overflow: hidden;
          background: var(--pink-50);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .polaroid-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .polaroid-fallback {
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 6px;
          color: var(--pink-deep);
          font-weight: 700;
          font-size: 0.9rem;
          padding: 20px;
        }

        .polaroid-caption {
          font-size: 1.35rem;
          color: var(--text-medium);
          margin-top: 10px;
          text-align: center;
        }

        .scroll-cta-btn {
          margin-top: 10px;
        }
      `}</style>
    </section>
  );
}
