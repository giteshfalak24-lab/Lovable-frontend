# 💗 Cute Romantic Surprise Website For My Sweetheart 🌸

A cute, romantic, interactive, and playful frontend website built with **React**, **Vite**, **CSS3**, and **JavaScript** as a personal surprise for your girlfriend.

---

## ✨ Features & Storyline

1. **Opening Surprise (Welcome Hero)**:
   - Sweet message: *"Hey sweetheart... I have a surprise for u 💗"*
   - Animated kawaii bear holding a glowing pulsing heart.
   - Floating hearts, sparkles, and gentle ambient background chimes.
   - Preview Polaroid of her prettiest smile.
   - Smooth scroll indicator down to the questions.

2. **Question 1: "Am I handsome or not? 🥹❤️"**:
   - **Yes 💗**: Heart confetti explosion + blushing reaction + *"I knew it! You have excellent taste, sweetheart. 😎💕"*.
   - **No 🙄**: Playfully dodges the cursor on desktop and skips away from fingers on mobile with funny quotes (*"Nice try! 😜"*, *"Oops, too slow! 🏃‍♂️💨"*, *"Can't click this! 💖"*). It is mathematically impossible to click No!

3. **Question 2: "Do you think my behaviour is good for you? 🥺💞"**:
   - **Yes 💖**: Sweet relationship message (*"Your happiness matters to me, sweetheart. I'll always try to understand you better, listen to you, and keep growing with you. 💗"*).
   - **No 😏**: Playfully evades clicks and taps while staying safely bounded inside the card.

4. **Scrapbook of Us (Polaroids & Video Memory)**:
   - Polaroid-style photo cards with washi tape, tilt angles, dates, heart pins, and sweet captions.
   - Lightbox modal: Tap any photo to zoom in!
   - Responsive video memory player with native controls for your special clip.

5. **The Final Question: "Our Imagined Future" 🌅🍳**:
   - Illustrated morning kitchen with sunrise rays, steaming coffee mug, and breakfast pan.
   - *"One day, when you're getting ready to leave for your office, can I cook something special for you before you go? 🥹🍳❤️"*
   - **No 🥺**: Opens the playful cartoon **Sad Screen** (*"My future breakfast plans... ruined before they even began! 😭🍳"*) with falling tears and a *"Give me a hug? 🫂"* button that returns to the question.
   - **Yes, my future chef! 👨‍🍳💗**: Launches the grand **Romantic Celebration**!
     - Heart confetti blast across the screen.
     - Beautiful illustration of couple in kitchen (chef with apron cooking breakfast, sweetheart getting ready for work with coffee and bag).
     - Golden sunrise glow and pulsing heart signature (*"Made with love, just for you. ♡"*).
     - *"Replay our little story ↻"* button to start over anytime.

6. **Gentle Romantic Music Toggle**:
   - Floating top-right button generates a soothing music-box lullaby using the browser's Web Audio API. Zero external MP3 dependency needed!

---

## 📁 Project Structure

```text
Dishaa/
├── public/
│   ├── images/
│   │   ├── her-photo-1.jpg       # First photo (also 1.jpeg)
│   │   ├── her-photo-2.jpg       # Second photo (also 2.jpeg)
│   │   ├── her-photo-3.jpg       # Third photo (also 4.jpeg)
│   │   ├── our-memory-1.jpg      # Memory photo (also 3.jpeg)
│   │   └── our-memory-2.jpg      # Memory photo (also 5.jpeg)
│   └── videos/
│       └── special-video-1.mp4   # Special video memory (also 6.mp4)
├── src/
│   ├── components/
│   │   ├── AudioToggle.jsx          # Romantic music box synthesizer
│   │   ├── FinalQuestion.jsx        # Morning kitchen & final question
│   │   ├── FloatingHearts.jsx       # Floating ambient particles
│   │   ├── PersonalMediaGallery.jsx # Scrapbook Polaroids & video card
│   │   ├── QuestionCard.jsx         # Reusable question & dodging logic
│   │   ├── RomanticCelebration.jsx  # Grand sunrise ending & confetti
│   │   ├── SadScreen.jsx            # Crying cartoon & hug button
│   │   └── WelcomeSection.jsx       # Kawaii bear & surprise hero
│   ├── data/
│   │   └── content.js               # Centralized text, captions & paths
│   ├── App.jsx                      # App controller & screen transitions
│   ├── index.css                    # Kawaii styling & animations
│   └── main.jsx                     # React entry point
├── index.html                       # HTML head, Google Fonts, favicon
├── package.json
└── vite.config.js
```

---

## 🚀 How to Run Locally

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser!

### 3. Build for Production
```bash
npm run build
```
The optimized static production files will be created in the `dist/` directory.

---

## 📸 How to Add or Change Photos & Videos

Your actual files (`1.jpeg` through `5.jpeg` and `6.mp4`) are already active!

To update or add new photos/videos:
1. Place your new pictures inside `public/images/`.
2. Place any new videos inside `public/videos/`.
3. Open `src/data/content.js` to customize captions, dates, or question text:
   ```javascript
   {
     id: 1,
     src: "/images/her-photo-1.jpg",
     caption: "The smile that completely stole my heart ✨",
     date: "Sweetest moment"
   }
   ```

---

## 🌐 How to Deploy to Vercel (Free & Instant)

### Option A: Using Vercel CLI (Recommended & Fastest)
1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```
2. In the project folder, run:
   ```bash
   vercel
   ```
3. Follow the quick prompts (accept defaults). Vercel will give you a live HTTPS URL (e.g., `https://for-my-sweetheart.vercel.app`) to share with her!

### Option B: Using GitHub & Vercel Web Dashboard
1. Push this folder to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Cute surprise website for my sweetheart"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```
2. Log into [vercel.com](https://vercel.com).
3. Click **"Add New"** -> **"Project"** -> select your GitHub repository.
4. Framework preset will automatically detect **Vite**.
5. Click **Deploy**! In ~30 seconds, your surprise website will be live.

---

## 📱 Mobile & Desktop Testing Checklist

- [x] **Mobile Responsiveness**:
  - Tested at **320px**, **375px**, **390px**, **430px**, **768px**, **1024px**, and **1440px**.
  - No horizontal scrolling or overflow.
  - Buttons are at least 48px to 54px tall with ample touch padding.
- [x] **Question 1 Interaction**:
  - "Yes" triggers heart confetti and reveals sweet response.
  - "No" skips away from touches on mobile and hovers on desktop without covering "Yes" or breaking scroll.
- [x] **Question 2 Interaction**:
  - "Yes" displays romantic message and growth caption.
  - "No" smoothly dodges clicks/taps.
- [x] **Scrapbook Gallery**:
  - Polaroid cards scale gracefully with cute washi tape and tilt angles.
  - Tapping a photo opens full-screen lightbox zoom.
  - Video player plays natively with controls, muted by default.
- [x] **Final Question**:
  - "Yes, my future chef!" transitions to Romantic Celebration with sunrise colors, cartoon couple, and heart explosion.
  - "No" transitions to Sad Screen with crying cartoon, falling tears, and working "Give me a hug? 🫂" button that returns to the question.
- [x] **Replay Button**:
  - Resets all answered states and smoothly scrolls back to the top welcome screen.
- [x] **Sound & Motion**:
  - Ambient Web Audio chime melody toggle works smoothly on mobile without blocking.
  - Reduced-motion mode (`prefers-reduced-motion`) supported.
