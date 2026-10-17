import React, { useState } from 'react';
import { Heart, Sparkles } from 'lucide-react';
import { siteContent } from '../data/content';

/**
 * SadScreen - Playful cartoon sad reaction screen
 * Soft lavender-blue palette, animated crying kawaii mascot, slowly falling tears,
 * and a "Give me a hug? 🫂" button that transitions back to the final question.
 */
export default function SadScreen({ onGiveHug }) {
  const { sadScreen } = siteContent;
  const [hugging, setHugging] = useState(false);

  const handleHugClick = () => {
    setHugging(true);
    setTimeout(() => {
      onGiveHug();
    }, 1200);
  };

  return (
    <div className={`sad-screen-container ${hugging ? 'hugging-transition' : ''}`}>
      {/* Falling Cartoon Tears & Fading Broken Hearts */}
      <div className="tears-rain-layer" aria-hidden="true">
        {[...Array(12)].map((_, i) => (
          <span
            key={i}
            className="tear-drop"
            style={{
              left: `${(i * 8.5) + 3}%`,
              animationDelay: `${(i % 5) * 0.45}s`,
              animationDuration: `${2.2 + (i % 3) * 0.6}s`,
              fontSize: i % 3 === 0 ? '22px' : '16px'
            }}
          >
            {i % 4 === 0 ? '💔' : i % 2 === 0 ? '💧' : '🥺'}
          </span>
        ))}
      </div>

      <div className="sad-content-card kawaii-card">
        {/* Kawaii Sad Mascot Illustration */}
        <div className="sad-mascot-wrapper animate-float">
          {hugging ? (
            /* Hug Transformation */
            <div className="hug-animation-reveal animate-heart-burst">
              <span className="hug-huge-emoji">🫂💖</span>
              <p className="hug-toast-text font-handwriting">Warmest hug ever! Feeling all better now ♡</p>
            </div>
          ) : (
            <svg
              viewBox="0 0 200 200"
              width="180"
              height="180"
              className="kawaii-sad-svg"
              aria-label="Cute crying cartoon character with big teary eyes"
            >
              {/* Soft teary glow */}
              <circle cx="100" cy="100" r="80" fill="#dbeafe" opacity="0.6" />
              <circle cx="100" cy="100" r="68" fill="#e0e7ff" opacity="0.7" />

              {/* Character Head */}
              <circle cx="100" cy="100" r="60" fill="#fff1f2" stroke="#f43f5e" strokeWidth="2.5" />

              {/* Cute puppy ears drooping sadly */}
              <ellipse cx="44" cy="95" rx="14" ry="24" fill="#fbcfe8" transform="rotate(20 44 95)" />
              <ellipse cx="156" cy="95" rx="14" ry="24" fill="#fbcfe8" transform="rotate(-20 156 95)" />

              {/* Drooping Eyebrows */}
              <path d="M 68 76 Q 80 82 88 80" stroke="#475569" strokeWidth="3" strokeLinecap="round" fill="none" />
              <path d="M 132 76 Q 120 82 112 80" stroke="#475569" strokeWidth="3" strokeLinecap="round" fill="none" />

              {/* Big Sad Teary Eyes */}
              <ellipse cx="78" cy="95" rx="10" ry="13" fill="#1e293b" />
              <ellipse cx="122" cy="95" rx="10" ry="13" fill="#1e293b" />

              {/* Tear reflections */}
              <circle cx="75" cy="90" r="4.5" fill="#ffffff" />
              <circle cx="80" cy="98" r="2.5" fill="#38bdf8" />
              <circle cx="119" cy="90" r="4.5" fill="#ffffff" />
              <circle cx="124" cy="98" r="2.5" fill="#38bdf8" />

              {/* Big Glistening Stream of Tears */}
              <path d="M 72 104 Q 66 122 70 138" stroke="#38bdf8" strokeWidth="4.5" strokeLinecap="round" fill="none" opacity="0.85" />
              <path d="M 128 104 Q 134 122 130 138" stroke="#38bdf8" strokeWidth="4.5" strokeLinecap="round" fill="none" opacity="0.85" />

              {/* Little tear drops falling */}
              <circle cx="70" cy="144" r="3.5" fill="#38bdf8" />
              <circle cx="130" cy="144" r="3.5" fill="#38bdf8" />

              {/* Sad Pout Mouth */}
              <path d="M 90 126 Q 100 118 110 126" stroke="#f43f5e" strokeWidth="3" strokeLinecap="round" fill="none" />

              {/* Blush */}
              <ellipse cx="62" cy="112" rx="8" ry="5" fill="#fda4af" opacity="0.8" />
              <ellipse cx="138" cy="112" rx="8" ry="5" fill="#fda4af" opacity="0.8" />

              {/* Tiny broken heart icon */}
              <g transform="translate(92, 140) scale(0.6)">
                <path d="M 12 4 C 6 -2 0 4 0 9 C 0 16 12 24 12 24 C 12 24 24 16 24 9 C 24 4 18 -2 12 4 Z" fill="#f43f5e" />
                <path d="M 12 3 L 10 11 L 14 15 L 12 23" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" fill="none" />
              </g>
            </svg>
          )}
        </div>

        {/* Sad Heading */}
        <h2 className="sad-heading font-display">
          {sadScreen.heading}
        </h2>

        {/* Playful Sad Message */}
        <p className="sad-message">
          {sadScreen.message}
        </p>

        <p className="sad-follow-up font-handwriting">
          {sadScreen.followUp}
        </p>

        {/* Give me a hug button */}
        <button
          className="btn-primary hug-btn animate-pulse-glow"
          onClick={handleHugClick}
          disabled={hugging}
          aria-label="Give a warm comforting hug to return to the question"
        >
          <span className="hug-btn-icon">🫂</span>
          <span>{hugging ? "Hugging you tight... 💕" : sadScreen.hugButton}</span>
        </button>

        <p className="sad-footnote font-handwriting">
          (One little hug fixes everything! ♡)
        </p>
      </div>

      <style>{`
        .sad-screen-container {
          min-height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 60px 20px;
          background: radial-gradient(circle at 50% 30%, #ede7f6 0%, #dbeafe 60%, #e0e7ff 100%);
          position: relative;
          z-index: 10;
          overflow: hidden;
          animation: fadeInSad 0.5s ease;
        }

        .tears-rain-layer {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 1;
        }

        .tear-drop {
          position: absolute;
          top: -30px;
          animation: rainTears linear infinite;
          user-select: none;
        }

        .sad-content-card {
          width: 100%;
          max-width: 580px;
          padding: 44px 32px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          position: relative;
          z-index: 2;
          background: rgba(255, 255, 255, 0.94);
          border: 2px solid #bfdbfe;
          box-shadow: 0 20px 50px rgba(147, 197, 253, 0.35);
        }

        .sad-content-card::before {
          background: linear-gradient(90deg, #93c5fd, #c4b5fd, #fca5a5);
        }

        .sad-mascot-wrapper {
          margin: 10px 0 18px;
          min-height: 180px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hug-huge-emoji {
          font-size: 4.8rem;
          display: block;
          margin-bottom: 8px;
        }

        .hug-toast-text {
          font-size: 1.6rem;
          color: var(--pink-deep);
          font-weight: 700;
        }

        .sad-heading {
          font-size: clamp(1.8rem, 4.5vw, 2.5rem);
          font-weight: 800;
          color: #334155;
          margin-bottom: 12px;
        }

        .sad-message {
          font-size: clamp(1.05rem, 2.8vw, 1.25rem);
          color: #475569;
          line-height: 1.5;
          max-width: 480px;
          margin-bottom: 12px;
        }

        .sad-follow-up {
          font-size: 1.6rem;
          color: #6366f1;
          font-weight: 700;
          margin-bottom: 28px;
        }

        .hug-btn {
          font-size: 1.2rem;
          padding: 16px 38px;
          background: linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%);
          box-shadow: 0 10px 30px rgba(139, 92, 246, 0.4);
        }

        .hug-btn-icon {
          font-size: 1.4rem;
        }

        .sad-footnote {
          font-size: 1.35rem;
          color: var(--text-soft);
          margin-top: 16px;
        }

        @keyframes fadeInSad {
          from { opacity: 0; transform: scale(0.96); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes heartBurst {
          0% { transform: scale(0.7); opacity: 0; }
          70% { transform: scale(1.15); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }

        .animate-heart-burst {
          animation: heartBurst 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        @media (max-width: 500px) {
          .sad-content-card {
            padding: 32px 18px;
          }
          .hug-btn {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
