import React, { useMemo } from 'react';

/**
 * FloatingHearts - Ambient floating hearts, sparkles, and tiny stars
 * Smooth, lightweight, GPU-accelerated CSS animations.
 */
export default function FloatingHearts() {
  const particles = useMemo(() => {
    const symbols = ['💗', '💖', '✨', '🌸', '💕', '⭐', '🤍', '🫧'];
    const list = [];
    for (let i = 0; i < 22; i++) {
      const left = Math.random() * 96 + 2; // 2% to 98%
      const duration = 9 + Math.random() * 11; // 9s to 20s
      const delay = Math.random() * 10; // 0s to 10s
      const size = 14 + Math.random() * 16; // 14px to 30px
      const symbol = symbols[i % symbols.length];
      const opacity = 0.35 + Math.random() * 0.45;
      list.push({ id: i, left, duration, delay, size, symbol, opacity });
    }
    return list;
  }, []);

  return (
    <div className="floating-elements-layer" aria-hidden="true">
      {particles.map((p) => (
        <span
          key={p.id}
          style={{
            position: 'absolute',
            left: `${p.left}%`,
            bottom: '-40px',
            fontSize: `${p.size}px`,
            opacity: p.opacity,
            animation: `driftUp ${p.duration}s linear infinite`,
            animationDelay: `${p.delay}s`,
            willChange: 'transform, opacity',
            pointerEvents: 'none',
            userSelect: 'none',
          }}
        >
          {p.symbol}
        </span>
      ))}
      <style>{`
        @keyframes driftUp {
          0% {
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.7;
          }
          50% {
            transform: translateY(-50vh) translateX(18px) rotate(15deg);
          }
          90% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(-105vh) translateX(-18px) rotate(-15deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
