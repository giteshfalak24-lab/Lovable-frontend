import React, { useState } from 'react';
import WelcomeSection from './components/WelcomeSection';
import QuestionCard from './components/QuestionCard';
import PersonalMediaGallery from './components/PersonalMediaGallery';
import FinalQuestion from './components/FinalQuestion';
import SadScreen from './components/SadScreen';
import RomanticCelebration from './components/RomanticCelebration';
import FloatingHearts from './components/FloatingHearts';
import AudioToggle from './components/AudioToggle';
import { siteContent } from './data/content';

/**
 * Main App Component
 * Manages screen transitions between the romantic story flow,
 * the playful sad reaction, and the grand romantic celebration.
 */
export default function App() {
  const [screenState, setScreenState] = useState('story'); // 'story' | 'sad' | 'celebration'
  const [keyReset, setKeyReset] = useState(0); // Force re-render of questions on replay

  const scrollToElement = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleFinalNo = () => {
    setScreenState('sad');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFinalYes = () => {
    setScreenState('celebration');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGiveHug = () => {
    setScreenState('story');
    setTimeout(() => {
      scrollToElement('final-question');
    }, 150);
  };

  const handleReplay = () => {
    setScreenState('story');
    setKeyReset((prev) => prev + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-container">
      {/* Background Floating Ambient Hearts & Sparkles */}
      <FloatingHearts />

      {/* Floating Gentle Romantic Music Player */}
      <AudioToggle />

      {/* Active Screen View */}
      {screenState === 'sad' && (
        <SadScreen onGiveHug={handleGiveHug} />
      )}

      {screenState === 'celebration' && (
        <RomanticCelebration onReplay={handleReplay} />
      )}

      {screenState === 'story' && (
        <main className="story-flow-container" key={keyReset}>
          {/* 1. Welcome Section */}
          <WelcomeSection
            onScrollToQuestions={() => scrollToElement('question-1')}
          />

          {/* 2. Question One: Handsome? */}
          <QuestionCard
            id="question-1"
            badge={siteContent.questionOne.badge}
            question={siteContent.questionOne.question}
            yesText={siteContent.questionOne.yesText}
            noText={siteContent.questionOne.noText}
            yesResponse={siteContent.questionOne.yesResponse}
            subResponse={siteContent.questionOne.subResponse}
            evasionPhrases={siteContent.questionOne.evasionPhrases}
            photoSrc="/images/her-photo-1.jpg"
            photoAlt="Handsome judge"
            onProceed={() => scrollToElement('question-2')}
            nextLabel="Next Question 🥺 ↓"
          />

          {/* 3. Question Two: Behaviour Good? */}
          <QuestionCard
            id="question-2"
            badge={siteContent.questionTwo.badge}
            question={siteContent.questionTwo.question}
            yesText={siteContent.questionTwo.yesText}
            noText={siteContent.questionTwo.noText}
            yesResponse={siteContent.questionTwo.yesResponse}
            caption={siteContent.questionTwo.caption}
            evasionPhrases={siteContent.questionTwo.evasionPhrases}
            photoSrc="/images/her-photo-2.jpg"
            photoAlt="Sweet memories"
            onProceed={() => scrollToElement('memories')}
            nextLabel="See Our Memories 📸 ↓"
          />

          {/* 4. Personal Scrapbook Gallery & Video Memories */}
          <PersonalMediaGallery
            onScrollToFinal={() => scrollToElement('final-question')}
          />

          {/* 5. Final Question: Imagined Future */}
          <FinalQuestion
            onAnswerYes={handleFinalYes}
            onAnswerNo={handleFinalNo}
          />
        </main>
      )}
    </div>
  );
}
