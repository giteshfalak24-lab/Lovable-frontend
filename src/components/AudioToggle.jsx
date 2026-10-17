import React, { useState, useEffect, useRef } from 'react';
import { Music, VolumeX, Sparkles } from 'lucide-react';

/**
 * AudioToggle - Gentle romantic music generator using Web Audio API
 * Creates a soft, dreamy music-box / chime lullaby without needing external MP3 files!
 */
export default function AudioToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef(null);
  const intervalRef = useRef(null);
  const noteIndexRef = useRef(0);

  // Soft romantic pentatonic / dreamy notes (Hz)
  // Canon in D / dreamy lullaby notes: D, F#, A, B, C#
  const melodyNotes = [
    293.66, 369.99, 440.00, 587.33,
    440.00, 369.99, 329.63, 440.00,
    369.99, 293.66, 329.63, 369.99,
    440.00, 587.33, 659.25, 587.33
  ];

  const playChime = (freq) => {
    try {
      const ctx = audioCtxRef.current;
      if (!ctx || ctx.state !== 'running') return;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      // Sine wave for gentle music box / chime warmth
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      // Soft envelope (music box pluck + fade)
      gain.gain.setValueAtTime(0.001, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.08, ctx.currentTime + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.2);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 1.25);
    } catch {
      // Audio fallback gracefully
    }
  };

  const toggleMusic = () => {
    if (!isPlaying) {
      if (!audioCtxRef.current) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        audioCtxRef.current = new AudioContext();
      }
      if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }

      setIsPlaying(true);
      playChime(melodyNotes[0]);

      intervalRef.current = setInterval(() => {
        noteIndexRef.current = (noteIndexRef.current + 1) % melodyNotes.length;
        playChime(melodyNotes[noteIndexRef.current]);
      }, 750);
    } else {
      setIsPlaying(false);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (audioCtxRef.current) audioCtxRef.current.close().catch(() => {});
    };
  }, []);

  return (
    <button
      className="audio-toggle-btn"
      onClick={toggleMusic}
      aria-label={isPlaying ? 'Mute romantic chimes' : 'Play romantic chimes'}
      title={isPlaying ? 'Pause romantic music' : 'Play romantic music'}
    >
      {isPlaying ? (
        <>
          <Music size={16} className="animate-spin-slow" />
          <span>Romantic Melody</span>
          <span className="sound-wave-bars">
            <span className="bar bar1"></span>
            <span className="bar bar2"></span>
            <span className="bar bar3"></span>
          </span>
        </>
      ) : (
        <>
          <VolumeX size={16} />
          <span>Play Music 🎵</span>
        </>
      )}

      <style>{`
        .sound-wave-bars {
          display: inline-flex;
          align-items: center;
          gap: 2px;
          height: 14px;
        }
        .bar {
          display: inline-block;
          width: 3px;
          background: var(--pink-500);
          border-radius: 2px;
          animation: soundWave 0.8s ease-in-out infinite alternate;
        }
        .bar1 { height: 6px; animation-delay: 0.1s; }
        .bar2 { height: 12px; animation-delay: 0.3s; }
        .bar3 { height: 8px; animation-delay: 0.2s; }

        @keyframes soundWave {
          0% { height: 4px; }
          100% { height: 14px; }
        }
        .animate-spin-slow {
          animation: spin 6s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </button>
  );
}
