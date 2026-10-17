import React, { useEffect, useCallback } from 'react';
import confetti from 'canvas-confetti';
import { Heart, Sparkles, Coffee, RotateCcw, Utensils } from 'lucide-react';
import { siteContent } from '../data/content';

/**
 * RomanticCelebration - The grand emotional ending of the website
 * Warm sunrise atmosphere, heart confetti cannon, cute cartoon couple in kitchen,
 * touching romantic message, and replay button.
 */
export default function RomanticCelebration({ onReplay }) {
  const { celebration } = siteContent;

  // Heart confetti burst sequence
  const launchConfetti = useCallback(() => {
    try {
      const count = 200;
      const defaults = {
        origin: { y: 0.7 },
        colors: ['#ff477e', '#ff8fab', '#ffd166', '#ffb3c6', '#d81159', '#ffeedd']
      };

      function fire(particleRatio, opts) {
        confetti({
          ...defaults,
          ...opts,
          particleCount: Math.floor(count * particleRatio)
        });
      }

      fire(0.25, {
        spread: 26,
        startVelocity: 55,
      });
      fire(0.2, {
        spread: 60,
      });
      fire(0.35, {
        spread: 100,
        decay: 0.91,
        scalar: 0.8
      });
      fire(0.1, {
        spread: 120,
        startVelocity: 25,
        decay: 0.92,
        scalar: 1.2
      });
      fire(0.1, {
        spread: 120,
        startVelocity: 45,
      });
    } catch {
      // Fallback gracefully
    }
  }, []);

  useEffect(() => {
    launchConfetti();
    // Second gentle burst after 1.5 seconds
    const t = setTimeout(() => {
      launchConfetti();
    }, 1500);
    return () => clearTimeout(t);
  }, [launchConfetti]);

  return (
    <div className="celebration-screen-container">
      {/* Golden Sunrise Glow Overlay */}
      <div className="sunrise-radiance-layer" aria-hidden="true"></div>

      <div className="celebration-inner-card kawaii-card">
        {/* Celebration Badge */}
        <div className="kawaii-badge animate-bounce-gentle">
          <Sparkles size={14} />
          <span>Our Future Morning Together 🌅✨</span>
          <Heart size={14} fill="currentColor" />
        </div>

        {/* Cute Couple In Kitchen SVG Illustration */}
        <div className="couple-kitchen-art animate-float">
          <svg
            viewBox="0 0 400 240"
            className="couple-svg"
            aria-label="Cute couple in kitchen: one making breakfast, the other getting ready for work with coffee"
          >
            <defs>
              <linearGradient id="windowSunrise" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ffd166" />
                <stop offset="50%" stopColor="#ffb3c6" />
                <stop offset="100%" stopColor="#fff0f3" />
              </linearGradient>
              <linearGradient id="apronGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ff758f" />
                <stop offset="100%" stopColor="#ff477e" />
              </linearGradient>
            </defs>

            {/* Sunlit Kitchen Window in background */}
            <rect x="110" y="20" width="180" height="110" rx="20" fill="url(#windowSunrise)" stroke="#ffffff" strokeWidth="5" />
            <line x1="200" y1="20" x2="200" y2="130" stroke="#ffffff" strokeWidth="3" />
            <line x1="110" y1="75" x2="290" y2="75" stroke="#ffffff" strokeWidth="3" />
            <circle cx="200" cy="55" r="22" fill="#ffd166" />
            <circle cx="200" cy="55" r="30" fill="#fff3b0" opacity="0.3" />

            {/* Kitchen Island Counter */}
            <rect x="70" y="145" width="260" height="75" rx="10" fill="#f8edeb" stroke="#fcd5ce" strokeWidth="3" />

            {/* Breakfast Plate with Pancakes & Strawberry on counter */}
            <g transform="translate(185, 142)">
              <ellipse cx="15" cy="10" rx="22" ry="7" fill="#ffffff" stroke="#fcd5ce" strokeWidth="2" />
              <ellipse cx="15" cy="8" rx="16" ry="5" fill="#e9c46a" />
              <ellipse cx="15" cy="6" rx="14" ry="4.5" fill="#f4a261" />
              <circle cx="15" cy="4" r="3" fill="#e63946" /> {/* Strawberry */}
              <circle cx="15" cy="2" r="1.5" fill="#2a9d8f" /> {/* Mint */}
            </g>

            {/* Floating Love Hearts Between Them */}
            <g className="animate-pulse-glow">
              <path d="M 200 115 C 195 105 180 105 180 118 C 180 130 200 140 200 140 C 200 140 220 130 220 118 C 220 105 205 105 200 115 Z" fill="#ff477e" />
              <path d="M 185 95 C 182 88 172 88 172 96 C 172 104 185 110 185 110 C 185 110 198 104 198 96 C 198 88 188 88 185 95 Z" fill="#ff8fab" />
              <path d="M 215 90 C 213 84 204 84 204 91 C 204 98 215 104 215 104 C 215 104 226 98 226 91 C 226 84 217 84 215 90 Z" fill="#ffd166" />
            </g>

            {/* CHARACTER 1: The Chef (Boy) on the Left */}
            <g transform="translate(45, 65)">
              {/* Chef Hat */}
              <ellipse cx="65" cy="18" rx="16" ry="12" fill="#ffffff" stroke="#fcd5ce" strokeWidth="1.5" />
              <rect x="53" y="18" width="24" height="10" rx="3" fill="#ffffff" stroke="#fcd5ce" strokeWidth="1.5" />
              {/* Hair */}
              <path d="M 50 35 Q 65 24 80 35 Q 82 45 78 48 L 52 48 Z" fill="#4a3b32" />
              {/* Head */}
              <ellipse cx="65" cy="45" rx="15" ry="14" fill="#ffd7ba" />
              {/* Blushing Cheek */}
              <circle cx="72" cy="50" r="3.5" fill="#ff8fab" opacity="0.8" />
              {/* Happy Eye */}
              <path d="M 68 44 Q 72 40 76 44" stroke="#3a2e39" strokeWidth="2" strokeLinecap="round" fill="none" />
              {/* Smile */}
              <path d="M 70 52 Q 74 56 78 51" stroke="#e63946" strokeWidth="1.8" strokeLinecap="round" fill="none" />
              {/* Body & Apron */}
              <path d="M 52 58 L 78 58 L 84 125 L 46 125 Z" fill="#ffffff" />
              <path d="M 55 64 L 75 64 L 80 120 L 50 120 Z" fill="url(#apronGrad)" />
              {/* Little Heart on Apron */}
              <path d="M 65 85 C 62 80 56 80 56 86 C 56 92 65 97 65 97 C 65 97 74 92 74 86 C 74 80 68 80 65 85 Z" fill="#ffffff" />
              {/* Arm holding pan */}
              <path d="M 75 75 Q 92 82 105 78" stroke="#ffd7ba" strokeWidth="7" strokeLinecap="round" fill="none" />
              {/* Frying pan with pancake */}
              <line x1="102" y1="78" x2="135" y2="78" stroke="#333333" strokeWidth="4" strokeLinecap="round" />
              <ellipse cx="140" cy="80" rx="16" ry="6" fill="#4a4e69" />
              <ellipse cx="140" cy="78" rx="11" ry="3.5" fill="#e9c46a" />
            </g>

            {/* CHARACTER 2: Sweetheart (Girl) on the Right */}
            <g transform="translate(255, 65)">
              {/* Beautiful Long Hair */}
              <path d="M 28 32 Q 45 20 62 32 Q 72 55 68 95 Q 58 105 52 90 Q 38 105 22 90 Q 18 55 28 32 Z" fill="#3d2618" />
              {/* Cute hair clip / flower */}
              <circle cx="34" cy="30" r="4" fill="#ff758f" />
              <circle cx="34" cy="30" r="2" fill="#ffd166" />
              {/* Head */}
              <ellipse cx="45" cy="45" rx="14" ry="14" fill="#ffe5d9" />
              {/* Blushing Cheek */}
              <circle cx="37" cy="50" r="3.5" fill="#ff8fab" opacity="0.8" />
              {/* Happy Wink / Eye */}
              <path d="M 34 44 Q 38 40 42 44" stroke="#3a2e39" strokeWidth="2" strokeLinecap="round" fill="none" />
              {/* Smile */}
              <path d="M 33 52 Q 37 56 41 51" stroke="#e63946" strokeWidth="1.8" strokeLinecap="round" fill="none" />
              {/* Office Outfit: Chic soft lavender blazer & blouse */}
              <path d="M 32 58 L 58 58 L 65 125 L 25 125 Z" fill="#dcd6f7" />
              <path d="M 40 58 L 45 74 L 50 58 Z" fill="#ffffff" />
              {/* Office Work Bag on shoulder */}
              <rect x="60" y="85" width="16" height="24" rx="4" fill="#b08968" stroke="#7f5539" strokeWidth="1.5" />
              <path d="M 56 70 Q 64 70 65 85" stroke="#7f5539" strokeWidth="2" fill="none" />
              {/* Hands holding coffee mug */}
              <path d="M 32 75 Q 22 84 15 82" stroke="#ffe5d9" strokeWidth="6" strokeLinecap="round" fill="none" />
              {/* Steaming Coffee Mug */}
              <rect x="6" y="74" width="16" height="18" rx="4" fill="#ff8fab" />
              <path d="M 6 78 Q 0 83 6 88" stroke="#ff8fab" strokeWidth="2.5" fill="none" />
              {/* Steam */}
              <path d="M 10 70 Q 7 64 11 58" stroke="#ffd166" strokeWidth="1.8" strokeLinecap="round" fill="none" opacity="0.8" />
              <path d="M 16 70 Q 19 64 15 58" stroke="#ffd166" strokeWidth="1.8" strokeLinecap="round" fill="none" opacity="0.8" />
            </g>
          </svg>
        </div>

        {/* Main Heading */}
        <h1 className="celebration-heading font-display">
          {celebration.heading}
        </h1>

        {/* Sweet Heartfelt Future Story Message */}
        <div className="celebration-story-card">
          <p className="celebration-story-text">
            {celebration.message}
          </p>
        </div>

        {/* Dream quote */}
        <p className="celebration-dream-quote font-handwriting">
          "{celebration.submessage}"
        </p>

        {/* Pulsing Glowing Heart Signature */}
        <div className="signature-container">
          <div className="glowing-heart-pulse animate-pulse-glow">
            <Heart size={32} fill="#ff477e" stroke="#ff477e" />
          </div>
          <p className="signature-text font-handwriting">
            {celebration.signature}
          </p>
        </div>

        {/* Confetti Trigger & Replay CTA */}
        <div className="celebration-actions-row">
          <button
            className="btn-primary replay-btn"
            onClick={onReplay}
            aria-label="Replay our little love story from the beginning"
          >
            <RotateCcw size={18} />
            <span>{celebration.replayButton}</span>
          </button>
        </div>
      </div>

      <style>{`
        .celebration-screen-container {
          min-height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 60px 20px;
          background: radial-gradient(circle at 50% 20%, #fff3b0 0%, #ffd1dc 40%, #ffe8ee 75%, #ede7f6 100%);
          position: relative;
          z-index: 10;
          animation: sunriseReveal 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .sunrise-radiance-layer {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: radial-gradient(circle at 50% 0%, rgba(255, 209, 102, 0.45) 0%, transparent 65%);
          z-index: 1;
        }

        .celebration-inner-card {
          width: 100%;
          max-width: 720px;
          padding: 48px 36px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          position: relative;
          z-index: 2;
          background: rgba(255, 255, 255, 0.95);
          border: 2px solid rgba(255, 183, 3, 0.4);
          box-shadow: 0 25px 65px rgba(255, 111, 146, 0.28);
        }

        .celebration-inner-card::before {
          background: linear-gradient(90deg, #ff477e, #ffd166, #ff8fab, #ff477e);
        }

        .couple-kitchen-art {
          width: 100%;
          max-width: 440px;
          margin: 10px 0 16px;
        }

        .couple-svg {
          width: 100%;
          height: auto;
          display: block;
          filter: drop-shadow(0 12px 24px rgba(255, 143, 171, 0.25));
        }

        .celebration-heading {
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 800;
          color: var(--text-dark);
          line-height: 1.25;
          margin-bottom: 18px;
          background: linear-gradient(135deg, #d81159 0%, #ff477e 50%, #ffb703 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .celebration-story-card {
          background: linear-gradient(135deg, rgba(255, 245, 247, 0.9) 0%, #ffffff 100%);
          border: 1.5px solid var(--pink-200);
          border-radius: var(--radius-md);
          padding: 24px 28px;
          max-width: 600px;
          box-shadow: 0 8px 25px rgba(255, 143, 171, 0.15);
          margin-bottom: 20px;
        }

        .celebration-story-text {
          font-size: clamp(1.1rem, 2.6vw, 1.3rem);
          color: var(--text-dark);
          line-height: 1.65;
          font-weight: 600;
        }

        .celebration-dream-quote {
          font-size: clamp(1.4rem, 3.5vw, 1.85rem);
          color: var(--pink-deep);
          max-width: 540px;
          line-height: 1.4;
          margin-bottom: 22px;
        }

        .signature-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          margin-bottom: 30px;
        }

        .glowing-heart-pulse {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .signature-text {
          font-size: 1.7rem;
          color: var(--text-medium);
          letter-spacing: 0.5px;
        }

        .celebration-actions-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
        }

        .replay-btn {
          font-size: 1.15rem;
          padding: 14px 34px;
        }

        @keyframes sunriseReveal {
          from {
            opacity: 0;
            transform: scale(0.94) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @media (max-width: 500px) {
          .celebration-inner-card {
            padding: 32px 18px;
          }
          .celebration-story-card {
            padding: 18px 16px;
          }
          .replay-btn {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
