import React from 'react';
import { Heart, Sparkles, Coffee, UtensilsCrossed } from 'lucide-react';
import { siteContent } from '../data/content';

/**
 * FinalQuestion - The emotional highlight of the website
 * Warm sunrise / golden morning gradient, illustrated kitchen with steaming coffee & breakfast,
 * and two working buttons: "Yes, my future chef! 👨‍🍳💗" and "No 🥺".
 */
export default function FinalQuestion({ onAnswerYes, onAnswerNo }) {
  const { finalQuestion } = siteContent;

  return (
    <section className="section-wrapper final-question-section" id="final-question">
      <div className="final-card-wrapper kawaii-card">
        {/* Badge */}
        <div className="kawaii-badge animate-bounce-gentle">
          <Sparkles size={14} />
          <span>{finalQuestion.badge}</span>
        </div>

        {/* Morning Kitchen SVG Illustration */}
        <div className="morning-kitchen-illustration animate-float">
          <svg
            viewBox="0 0 320 180"
            className="kitchen-svg"
            aria-label="Cute morning kitchen illustration with sunshine, breakfast, and coffee"
          >
            {/* Sunrise window glow */}
            <defs>
              <linearGradient id="sunriseSky" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ffd166" />
                <stop offset="60%" stopColor="#ffb3c6" />
                <stop offset="100%" stopColor="#ffe5ec" />
              </linearGradient>
              <linearGradient id="sunGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fff3b0" />
                <stop offset="100%" stopColor="#ffb703" />
              </linearGradient>
            </defs>

            {/* Window frame */}
            <rect x="70" y="15" width="180" height="110" rx="20" fill="url(#sunriseSky)" stroke="#ffffff" strokeWidth="6" />

            {/* Sun in window */}
            <circle cx="160" cy="65" r="32" fill="url(#sunGlow)" />
            {/* Sun rays */}
            <line x1="160" y1="22" x2="160" y2="12" stroke="#ffb703" strokeWidth="3" strokeLinecap="round" />
            <line x1="195" y1="36" x2="204" y2="28" stroke="#ffb703" strokeWidth="3" strokeLinecap="round" />
            <line x1="208" y1="65" x2="218" y2="65" stroke="#ffb703" strokeWidth="3" strokeLinecap="round" />
            <line x1="125" y1="36" x2="116" y2="28" stroke="#ffb703" strokeWidth="3" strokeLinecap="round" />
            <line x1="112" y1="65" x2="102" y2="65" stroke="#ffb703" strokeWidth="3" strokeLinecap="round" />

            {/* Cute cloud in window */}
            <path d="M 125 78 Q 135 68 145 78 Q 155 72 165 78 Q 170 85 160 88 L 128 88 Z" fill="#ffffff" opacity="0.8" />

            {/* Window panes cross */}
            <line x1="160" y1="15" x2="160" y2="125" stroke="#ffffff" strokeWidth="4" />
            <line x1="70" y1="70" x2="250" y2="70" stroke="#ffffff" strokeWidth="4" />

            {/* Curtains with cute scallops */}
            <path d="M 68 15 Q 85 50 72 90 L 68 90 Z" fill="#ffccd5" opacity="0.9" />
            <path d="M 252 15 Q 235 50 248 90 L 252 90 Z" fill="#ffccd5" opacity="0.9" />

            {/* Kitchen Counter / Table */}
            <rect x="30" y="120" width="260" height="50" rx="8" fill="#f8edeb" stroke="#fcd5ce" strokeWidth="3" />

            {/* Frying Pan with Sunny Side Up Egg */}
            <g transform="translate(60, 115)">
              {/* Pan Handle */}
              <line x1="55" y1="20" x2="85" y2="10" stroke="#4a4e69" strokeWidth="5" strokeLinecap="round" />
              {/* Pan Body */}
              <circle cx="30" cy="22" r="24" fill="#22223b" />
              <circle cx="30" cy="22" r="21" fill="#4a4e69" />
              {/* Egg White */}
              <path d="M 24 16 Q 34 13 38 20 Q 42 27 34 30 Q 22 32 20 24 Z" fill="#ffffff" />
              {/* Egg Yolk */}
              <circle cx="29" cy="22" r="6" fill="#ffb703" />
              {/* Steam */}
              <path d="M 26 6 Q 23 0 26 -6" stroke="#ffd166" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.75" />
              <path d="M 34 6 Q 37 0 34 -6" stroke="#ffd166" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.75" />
            </g>

            {/* Steaming Coffee Mug with Heart */}
            <g transform="translate(160, 118)">
              {/* Mug Body */}
              <rect x="10" y="10" width="28" height="30" rx="6" fill="#ff8fab" />
              {/* Mug Handle */}
              <path d="M 38 16 Q 48 24 38 32" stroke="#ff8fab" strokeWidth="4" fill="none" />
              {/* Heart on Mug */}
              <path d="M 24 28 C 21 25 18 23 18 20 C 18 18 20 16 22 16 C 23.5 16 24 17 24 18 C 24 17 24.5 16 26 16 C 28 16 30 18 30 20 C 30 23 27 25 24 28 Z" fill="#ffffff" />
              {/* Coffee steam with hearts */}
              <path d="M 20 5 Q 16 -1 20 -7" stroke="#fb6f92" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.7" />
              <path d="M 28 5 Q 32 -1 28 -7" stroke="#fb6f92" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.7" />
            </g>

            {/* Tiny Flower Vase on counter */}
            <g transform="translate(225, 116)">
              {/* Vase */}
              <rect x="12" y="16" width="16" height="24" rx="5" fill="#d8b4e2" />
              {/* Stem & Flower */}
              <line x1="20" y1="16" x2="20" y2="4" stroke="#80ed99" strokeWidth="2" />
              <circle cx="20" cy="4" r="5" fill="#ff477e" />
              <circle cx="20" cy="4" r="2" fill="#ffd166" />
            </g>
          </svg>
        </div>

        {/* Intro */}
        <h3 className="final-intro font-handwriting">
          {finalQuestion.intro}
        </h3>

        {/* The Big Question */}
        <h2 className="final-main-question font-display">
          {finalQuestion.question}
        </h2>

        {/* Romantic Subtitle */}
        <p className="final-subtitle">
          {finalQuestion.subtitle}
        </p>

        {/* Working Answer Buttons */}
        <div className="final-buttons-row">
          <button
            className="btn-primary final-yes-btn animate-pulse-glow"
            onClick={onAnswerYes}
            aria-label="Accept the romantic proposal: Yes, my future chef!"
          >
            <Heart size={22} fill="#ffffff" />
            <span>{finalQuestion.yesText}</span>
          </button>

          <button
            className="btn-secondary final-no-btn"
            onClick={onAnswerNo}
            aria-label="Decline: No"
          >
            <span>{finalQuestion.noText}</span>
          </button>
        </div>

        <p className="final-sweet-note font-handwriting">
          Every breakfast tastes better when made for you ♡
        </p>
      </div>

      <style>{`
        .final-question-section {
          padding-top: 40px;
          padding-bottom: 80px;
        }

        .final-card-wrapper {
          width: 100%;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.96) 0%, rgba(255, 246, 240, 0.95) 100%);
          border: 2px solid rgba(255, 183, 3, 0.35);
          box-shadow: 0 20px 50px rgba(255, 183, 3, 0.16);
          padding: 44px 32px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          position: relative;
        }

        .morning-kitchen-illustration {
          width: 100%;
          max-width: 380px;
          margin: 10px 0 20px;
        }

        .kitchen-svg {
          width: 100%;
          height: auto;
          display: block;
          filter: drop-shadow(0 10px 20px rgba(255, 183, 3, 0.25));
        }

        .final-intro {
          font-size: clamp(1.6rem, 3.8vw, 2.2rem);
          color: var(--pink-deep);
          font-weight: 700;
          margin-bottom: 6px;
        }

        .final-main-question {
          font-size: clamp(1.6rem, 4.2vw, 2.3rem);
          font-weight: 800;
          color: var(--text-dark);
          line-height: 1.35;
          max-width: 660px;
          margin-bottom: 16px;
        }

        .final-subtitle {
          font-size: clamp(1.05rem, 2.5vw, 1.22rem);
          color: var(--text-medium);
          max-width: 580px;
          line-height: 1.6;
          margin-bottom: 32px;
        }

        .final-buttons-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
          margin-bottom: 20px;
        }

        .final-yes-btn {
          font-size: 1.18rem;
          padding: 16px 36px;
          min-height: 56px;
          background: linear-gradient(135deg, #ff477e 0%, #ff758f 50%, #ffb703 100%);
          box-shadow: 0 10px 30px rgba(255, 71, 126, 0.45);
        }

        .final-no-btn {
          font-size: 1.05rem;
          padding: 14px 28px;
          color: var(--text-soft);
          border-color: rgba(0,0,0,0.12);
        }

        .final-no-btn:hover {
          color: var(--text-dark);
          background: #f8f6f8;
        }

        .final-sweet-note {
          font-size: 1.45rem;
          color: var(--pink-deep);
          margin-top: 10px;
        }

        @media (max-width: 500px) {
          .final-card-wrapper {
            padding: 32px 18px;
          }
          .final-buttons-row {
            flex-direction: column;
            width: 100%;
          }
          .final-yes-btn, .final-no-btn {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
