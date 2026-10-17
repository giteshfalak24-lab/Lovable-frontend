// Personalized Content & Text Configuration
// You can easily modify photos, captions, and texts right here!

export const siteContent = {
  // Opening Welcome Screen
  welcome: {
    badge: "Special Surprise For You 💌",
    heading: "Hey sweetheart... I have a surprise for u 💗",
    subtitle: "I made a little something just for you. Ready to see what's waiting? ✨",
    scrollHint: "Scroll down, sweetheart ↓",
    tagline: "A little love story made just for Dishaa ♡",
  },

  // Question 1
  questionOne: {
    badge: "Question 01 of 03",
    question: "Am I handsome or not? 🥹❤️",
    yesText: "Yes 💗",
    noText: "No 🙄",
    yesResponse: "I knew it! You have excellent taste, sweetheart. 😎💕",
    subResponse: "100% mutual attraction confirmed! 🥰",
    evasionPhrases: [
      "Nice try! 😜",
      "You can't click this! 💖",
      "Admit it, I'm cute! 🥰",
      "Nope, not an option! ✨",
      "Oops, too slow! 🏃‍♂️💨",
      "Try the pink button! 💗",
      "Error 404: 'No' not found! 😉"
    ]
  },

  // Question 2
  questionTwo: {
    badge: "Question 02 of 03",
    question: "Do you think my behaviour is good for you? 🥺💞",
    yesText: "Yes 💖",
    noText: "No 😏",
    yesResponse: "Your happiness matters to me, sweetheart. I'll always try to understand you better, listen to you, and keep growing with you. 💗",
    caption: "Learning, laughing, and growing together. ♡",
    evasionPhrases: [
      "Hey, be nice! 🥺",
      "I promise I'm a sweetheart! 😇",
      "You love me really! 💕",
      "Don't be cheeky! 🙈",
      "Only good vibes allowed! ✨",
      "I give best hugs though! 🫂"
    ]
  },

  // Photo & Video Memories Section
  gallery: {
    title: "Our Sweet Memories 📸✨",
    subtitle: "Every little moment with you is my favorite memory.",
    photos: [
      {
        id: 1,
        src: "/images/her-photo-1.jpg",
        alt: "Sweetheart smiling",
        caption: "The smile that completely stole my heart ✨",
        date: "Sweetest moment",
        rotation: "-2deg"
      },
      {
        id: 2,
        src: "/images/her-photo-2.jpg",
        alt: "Beautiful portrait",
        caption: "My favorite human in the whole universe 🌸",
        date: "Pure magic",
        rotation: "2.5deg"
      },
      {
        id: 3,
        src: "/images/our-memory-1.jpg",
        alt: "Cherished moment together",
        caption: "Every second with you is a pure treasure 💖",
        date: "Precious memory",
        rotation: "-1.5deg"
      },
      {
        id: 4,
        src: "/images/her-photo-3.jpg",
        alt: "Adorable memory",
        caption: "Prettiest girl in every single room 👑",
        date: "Forever crushing",
        rotation: "2deg"
      },
      {
        id: 5,
        src: "/images/our-memory-2.jpg",
        alt: "Together forever",
        caption: "Together is my favorite place to be 💫",
        date: "Our little story",
        rotation: "-2.5deg"
      }
    ],
    videos: [
      {
        id: 1,
        src: "/videos/special-video-1.mp4",
        caption: "A little video memory of pure happiness with you 🎥💕",
        subCaption: "Press play to relive this cute moment (sound optional)"
      }
    ]
  },

  // Final Question: Imagined Future
  finalQuestion: {
    badge: "The Final Question 🌅🍳",
    intro: "Imagine this, sweetheart... 💗",
    question: "One day, when you're getting ready to leave for your office, can I cook something special for you before you go? 🥹🍳❤️",
    subtitle: "Just imagining our little everyday moments together... you getting ready for work, me making breakfast, and one last hug before you leave. 💕",
    yesText: "Yes, my future chef! 👨‍🍳💗",
    noText: "No 🥺",
  },

  // Sad Reaction Screen
  sadScreen: {
    heading: "Nooo, sweetheart... 💔🥺",
    message: "My future breakfast plans... ruined before they even began! 😭🍳",
    followUp: "Not even one little breakfast together? 🥹",
    hugButton: "Give me a hug? 🫂"
  },

  // Romantic Celebration Screen
  celebration: {
    heading: "It's a date, sweetheart! 💗👨‍🍳",
    message: "One day, I'll be making your favourite breakfast while you get ready for work. I'll fix your coffee, steal one last hug, and remind you how much I love you before you leave. 🥹❤️",
    submessage: "A little dream of our future, one ordinary, beautiful morning at a time. 💕",
    signature: "Made with love, just for you. ♡",
    replayButton: "Replay our little story ↻"
  }
};
