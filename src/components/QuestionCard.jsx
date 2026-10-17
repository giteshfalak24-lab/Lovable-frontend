import React, { useState, useRef, useEffect, useCallback } from 'react';
import confetti from 'canvas-confetti';
import { Heart, Sparkles, CheckCircle2, ArrowDown } from 'lucide-react';

/**
 * QuestionCard - Reusable romantic question card with playful dodging "No" button
 * and sweet celebratory "Yes" reactions.
 */
export default function QuestionCard({
  id,
  badge,
  question,
  yesText,
  noText,
  yesResponse,
  subResponse,
  caption,
  evasionPhrases = [],
  photoSrc,
  photoAlt,
  onProceed,
  nextLabel = "Next Question ↓"
}) {
  const [answeredYes, setAnsweredYes] = useState(false);
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const [evasionIndex, setEvasionIndex] = useState(0);
  const [hasDodged, setHasDodged] = useState(false);
  const [dodgeToast, setDodgeToast] = useState("");

  const containerRef = useRef(null);
  const noButtonRef = useRef(null);
  const toastTimeoutRef = useRef(null);

  // Trigger heart confetti explosion for Yes
  const triggerCelebration = useCallback(() => {
    try {
      // Multiple heart bursts
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff477e', '#ff8fab', '#ffd1dc', '#ffb3c6', '#d81159'],
        shapes: ['circle'],
        ticks: 200,
      });

      setTimeout(() => {
        confetti({
          particleCount: 35,
          angle: 60,
          spread: 55,
          origin: { x: 0.1, y: 0.7 },
          colors: ['#ff477e', '#ffd166', '#ff8fab']
        });
        confetti({
          particleCount: 35,
          angle: 120,
          spread: 55,
          origin: { x: 0.9, y: 0.7 },
          colors: ['#ff477e', '#ffd166', '#ff8fab']
        });
      }, 250);
    } catch {
      // Fallback
    }
  }, []);

  const handleYesClick = () => {
    setAnsweredYes(true);
    triggerCelebration();
  };

  // Playfully dodge cursor / touch
  const dodgeNoButton = useCallback((e) => {
    if (answeredYes) return;
    if (e) {
      if (e.cancelable) e.preventDefault();
      e.stopPropagation();
    }

    if (!containerRef.current || !noButtonRef.current) return;

    const container = containerRef.current.getBoundingClientRect();
    const btn = noButtonRef.current.getBoundingClientRect();

    // Bounded limits inside the card
    const padding = 16;
    const maxDeltaX = (container.width / 2) - (btn.width / 2) - padding;
    const maxDeltaY = 65; // vertical jump range

    // Generate non-zero random jump
    let nextX = (Math.random() * 2 - 1) * Math.max(40, maxDeltaX);
    let nextY = (Math.random() * 2 - 1) * maxDeltaY;

    // Prevent staying too close to current position
    if (Math.abs(nextX - noPosition.x) < 30) {
      nextX = nextX > 0 ? nextX + 45 : nextX - 45;
    }

    // Keep strictly bounded
    nextX = Math.max(-maxDeltaX, Math.min(maxDeltaX, nextX));
    nextY = Math.max(-maxDeltaY, Math.min(maxDeltaY, nextY));

    setNoPosition({ x: nextX, y: nextY });
    setHasDodged(true);

    // Rotate through cute phrases
    const phrases = evasionPhrases.length > 0 ? evasionPhrases : ["Oops! 😜", "Too slow! 🏃‍♂️", "Can't click! 💖"];
    const nextIdx = (evasionIndex + 1) % phrases.length;
    setEvasionIndex(nextIdx);

    setDodgeToast(phrases[nextIdx]);
    if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
    toastTimeoutRef.current = setTimeout(() => {
      setDodgeToast("");
    }, 2200);
  }, [answeredYes, evasionIndex, evasionPhrases, noPosition.x]);

  useEffect(() => {
    return () => {
      if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
    };
  }, []);

  return (
    <div className="section-wrapper" id={id}>
      <div className="kawaii-card question-card-inner">
        {/* Top Badge */}
        <div className="kawaii-badge">
          <Sparkles size={14} />
          <span>{badge}</span>
        </div>

        {/* Optional cute photo or playful illustration */}
        {photoSrc && (
          <div className="question-photo-bubble">
            <img
              src={photoSrc}
              alt={photoAlt || "Romantic memory"}
              className="bubble-img"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
        )}

        {/* Question Heading */}
        <h2 className="question-title font-display">
          {question}
        </h2>

        {!answeredYes ? (
          <>
            {/* Interactive Button Arena */}
            <div className="interaction-arena" ref={containerRef}>
              {/* Playful toast message when dodging */}
              {dodgeToast && (
                <div className="evasion-toast-bubble animate-bounce-gentle">
                  <span>{dodgeToast}</span>
                </div>
              )}

              <div className="buttons-row">
                {/* YES BUTTON */}
                <button
                  className="btn-primary yes-btn animate-pulse-glow"
                  onClick={handleYesClick}
                  aria-label={`Confirm answer: ${yesText}`}
                >
                  <Heart size={20} fill="#ffffff" />
                  <span>{yesText}</span>
                </button>

                {/* NO BUTTON (Evasive) */}
                <button
                  ref={noButtonRef}
                  className="btn-secondary no-btn"
                  style={{
                    transform: `translate(${noPosition.x}px, ${noPosition.y}px)`,
                    transition: 'transform 0.28s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  }}
                  onMouseEnter={dodgeNoButton}
                  onMouseDown={dodgeNoButton}
                  onTouchStart={dodgeNoButton}
                  onClick={dodgeNoButton}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      dodgeNoButton(e);
                    }
                  }}
                  aria-label="Negative option (playfully unavailable)"
                >
                  <span>{hasDodged ? (evasionPhrases[evasionIndex] || noText) : noText}</span>
                </button>
              </div>
            </div>

            <p className="playful-hint-text">
              ✨ Hint: Only one of these buttons wants to be pressed! 😉
            </p>
          </>
        ) : (
          /* Celebratory Yes Response Reveal */
          <div className="celebration-box animate-float">
            <div className="celebration-mascot-reaction">
              <span className="blushing-emoji">🥰💖</span>
            </div>

            <div className="celebration-message-card">
              <CheckCircle2 size={24} className="check-icon" />
              <p className="celebration-main-text">
                {yesResponse}
              </p>
            </div>

            {subResponse && (
              <p className="sub-response-text font-handwriting">
                {subResponse}
              </p>
            )}

            {caption && (
              <p className="question-caption font-handwriting">
                {caption}
              </p>
            )}

            {onProceed && (
              <button
                className="btn-primary proceed-btn animate-bounce-gentle"
                onClick={onProceed}
              >
                <span>{nextLabel}</span>
                <ArrowDown size={18} />
              </button>
            )}
          </div>
        )}
      </div>

      <style>{`
        .question-card-inner {
          width: 100%;
          padding: 44px 32px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          position: relative;
        }

        .question-photo-bubble {
          width: 110px;
          height: 110px;
          border-radius: 50%;
          border: 4px solid #ffffff;
          box-shadow: 0 8px 24px rgba(255, 143, 171, 0.35);
          overflow: hidden;
          margin-bottom: 16px;
        }

        .bubble-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .question-title {
          font-size: clamp(1.6rem, 4vw, 2.3rem);
          font-weight: 800;
          color: var(--text-dark);
          margin-bottom: 24px;
          max-width: 620px;
          line-height: 1.35;
        }

        /* Arena where buttons live & dodge */
        .interaction-arena {
          width: 100%;
          min-height: 160px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
          padding: 20px 10px;
        }

        .buttons-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 22px;
          flex-wrap: wrap;
          position: relative;
          z-index: 5;
        }

        .yes-btn {
          min-width: 150px;
          font-size: 1.15rem;
          cursor: pointer;
        }

        .no-btn {
          min-width: 140px;
          font-size: 1.05rem;
          color: var(--text-medium);
          background: #ffffff;
          border-color: var(--pink-200);
          cursor: pointer;
          touch-action: manipulation;
        }

        .evasion-toast-bubble {
          position: absolute;
          top: 0px;
          background: linear-gradient(135deg, var(--peach-100), var(--pink-100));
          color: var(--pink-deep);
          border: 1.5px solid var(--pink-300);
          padding: 6px 18px;
          border-radius: var(--radius-full);
          font-weight: 700;
          font-size: 0.95rem;
          box-shadow: 0 6px 18px rgba(251, 111, 146, 0.25);
          z-index: 10;
        }

        .playful-hint-text {
          font-size: 0.9rem;
          color: var(--text-soft);
          margin-top: 14px;
          font-style: italic;
        }

        /* Celebration Box */
        .celebration-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          width: 100%;
          max-width: 580px;
          margin-top: 10px;
          animation: heartBurst 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .celebration-mascot-reaction {
          font-size: 3rem;
          line-height: 1;
        }

        .celebration-message-card {
          background: linear-gradient(135deg, var(--pink-50) 0%, #ffffff 100%);
          border: 2px solid var(--pink-200);
          border-radius: var(--radius-md);
          padding: 22px 28px;
          display: flex;
          align-items: flex-start;
          gap: 14px;
          text-align: left;
          box-shadow: 0 8px 24px rgba(255, 143, 171, 0.18);
        }

        .check-icon {
          color: var(--pink-500);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .celebration-main-text {
          font-size: 1.18rem;
          font-weight: 700;
          color: var(--text-dark);
          line-height: 1.5;
        }

        .sub-response-text {
          font-size: 1.6rem;
          color: var(--pink-deep);
          font-weight: 700;
        }

        .question-caption {
          font-size: 1.45rem;
          color: var(--text-medium);
        }

        .proceed-btn {
          margin-top: 8px;
        }

        @media (max-width: 500px) {
          .question-card-inner {
            padding: 32px 18px;
          }
          .buttons-row {
            gap: 14px;
          }
          .yes-btn, .no-btn {
            min-width: 130px;
            padding: 12px 20px;
          }
          .celebration-message-card {
            padding: 16px 18px;
          }
        }
      `}</style>
    </div>
  );
}
