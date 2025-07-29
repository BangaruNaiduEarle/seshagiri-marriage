import React, { createContext, useState, useContext } from 'react';

// 1. Define all text content here
const content = {
  en: {
    navbar: {
      brideAndGroom: "Bride-&-Groom",
      haldi: "Haldi",
      sangeet: "Sangeet",
      reception: "Reception",
      marriage: "Marriage",
      venue: "Venue",
      saveTheDate: "Save the Date",
      invitation: "Invitation",
      photoshoot: "Photoshoot",
      guestbook: "Guestbook",
      game: "Fun Game"
    },
    hero: {
      title: "Seshagiri Rao & Chandini",
      subtitle: "Are getting married!",
      date: "July 31st, 2025"
    },
    saveTheDate: {
      title: "Save Our Date"
    },
    invitation: {
      title: "You're Invited!"
    },
    haldi: {
      title: "Haldi Ceremony",
      description:
        "<b>Chandini</b> and <b>Seshagiri Rao's</b> Haldi ceremony, turmeric, oil, and water are applied to bless them with happiness and prosperity. This beautiful tradition fills their journey with love, laughter, and protection as they step into their new life together. 😊💛",
      date: "July 30th, 2025",
      time: "Starts at 6:30 PM"
    },
    photoshoot: {
      title: "Our Moments"
    },
    guestbook: {
      title: "Leave Your Wishes",
      nameLabel: "Your Name:",
      namePlaceholder: "Enter your name",
      wishesLabel: "Your Wishes:",
      wishesPlaceholder: "Share your blessings and thoughts...",
      submitButton: "Send Wishes",
      thankYouTitle: "Thank You,",
      thankYouMessage: "Your wishes mean the world to us!",
      wishesHeader: "Heartfelt Wishes Shared",
      likeButton: "Like",
      loading: "Loading wishes...",
      errorDefault: "Could not load wishes. Please try again later.",
      errorAuth: "Authentication error. Check Google Sheet credentials/permissions.",
      errorSheet: "Could not find Google Sheet. Check Sheet ID.",
      errorSubmit: "Failed to submit wishes. Please check connection and try again.",
      firstWish: "Be the first to leave your wishes!",
      submitDisabled: "Interaction disabled. Please configure the backend URL.",
      sending: "Sending...",
      close: "Close",
      likeAria: "Like wish from"
    },
    game: {
      title: "Wedding Meme Toss!",
      instructions: "Click anywhere to toss a meme!",
      memes: [
        "When the DJ plays the wrong song... but you vibe anyway!",
        "Trying to find your assigned table like...",
        "Me waiting for the wedding cake.",
        "That feeling when you catch the bouquet!",
        "When someone asks if you want more food at the reception."
      ]
    },
    brideToBe: {
      title: "Bride & Groom",
      heading: "Celebrating Our Bride & Groom",
      brideName: "Seshagiri Rao",
      groomName: "Chandini",
      description:
        "<b>Seshagiri Rao</b> is a deeply understanding and caring soul with a golden heart, always bringing warmth and love to those around him. He cherishes the people in his life and supports them with patience and kindness. <b>Chandini</b> complements him perfectly with her humor and balance, filling their days with laughter and joy. Together, they share a beautiful bond built on mutual understanding and unconditional love, making them the ideal pair as they embark on this journey hand in hand. 😊💖",
      quote: "Love is not about finding the right person, but creating a right relationship."
    },
    reception: {
      title: "Reception & Dinner",
      description:
        "Join us for an elegant evening of celebration as we begin our journey as a married couple. The reception will feature <b>Seshagiri Rao</b> and <b>Chandini's</b> cherished moments with loved ones, fine dining, music, and dancing.",
      date: "July 31st, 2025",
      time: "7:00 PM - 10:00 PM",
      fineDining: {
        title: "Fine Dining",
        description: "Exquisite multi-course dinner featuring traditional cuisine"
      },
      photoBooth: {
        title: "Photo Booth",
        description: "Capture memories with friends and family at our custom photo booth with props"
      }
    },
    kalagolu: {
      title: "Kalagolu (Sangeet)",
      description: "Join us for an evening of music, dance, and celebration!",
      date: "Date: TBD",
      time: "Time: TBD",
      attire: "Attire: Festive"
    },
    imageGrid: {
      title: "Our Journey Together",
      alt: "Wedding journey moment"
    },

    marriageMuhurtham: {
      title: "Marriage Muhurtham",
      description:
        "The Marriage Muhurtham is the main wedding ceremony, conducted at an auspicious time determined by astrology <b>Moola Nakshatram, Vruchika Lagnam</b>. This sacred ritual unites <b>Seshagiri Rao</b> and <b>Chandini</b> in the presence of fire, family, and friends.",
      ceremonyDetails: {
        paragraph1:
          "The <b>Marriage Muhurtham</b> is the most special moment where <b>Chandini</b> and <b>Seshagiri Rao</b> begin their journey as husband and wife. The ceremony takes place around the holy fire (Agni), which stands as a witness to their sacred vows.",
        paragraph2:
          "A priest chants <b>Vedic mantras</b>, seeking blessings from the gods. <b>Seshagiri Rao</b> ties the Mangalsutra around <b>Chandini's</b> neck, marking their bond for life. The couple then takes <b>seven sacred steps (Saptapadi)</b>, promising to walk together with love, trust, and happiness."
      },
      specialNote:
        "The ceremony will start at <b>03:00 AM</b>, a special and lucky time. Please be seated by <b>02:45 AM</b> so the rituals can go smoothly without any delay.",
      rituals: [
        {
          "name": "Vara Puja",
          "date": "2025-08-01",
          "time": "3:15 AM",
          "description": "Welcoming the groom and his family"
        },
        {
          "name": "Kanya Daan",
          "date": "2025-08-01",
          "time": "3:40 AM",
          "description": "The bride's parents give her away to the groom"
        },

        {
          "name": "Jilakara Bellam (Marriage Muhurtham)",
          "date": "2025-08-01",
          "time": "4:14 AM",
          "description": "Exact auspicious moment when the couple is united"
        },
        {
          "name": "Mangalya Dharanam",
          "date": "2025-08-01",
          "time": "4:30 AM",
          "description": "The groom ties the sacred thread around the bride's neck"
        },
        {
          "name": "Saptapadi",
          "date": "2025-08-01",
          "time": "4:45 AM",
          "description": "The couple takes seven steps together, making seven vows"
        },
        {
          "name": "Aashirwad",
          "date": "2025-08-01",
          "time": "5:00 AM",
          "description": "Blessings from elders and family members"
        }
      ],
      date: "July 31, 2025",
      time: "Early Hours 1st Aug 04:14 AM",
      imageAlt: "Marriage ceremony",
      subheadings: {
        sacredCeremony: "The Sacred Ceremony",
        timeline: "Ceremony Timeline"
      }
    },
    venueLocation: {
      title: "Venue Location",
      description:
        "All wedding events will take place at <b>Sri siddi Vinayaka Function Hall (Ravi Theatre)</b>,  Main Road, <b>Kothakota </b>. A spacious and elegant venue surrounded by a warm and welcoming atmosphere, perfect for celebrating <b>Seshagiri Rao</b> and <b>Chandini's</b> union.",
      mapTitle: "Wedding Venue Location"

    },
    footer: {
      thankYou: "Thank you for visiting!",
      madeWithLove: "Made with love by",
      copyright: `© ${new Date().getFullYear()} Seshagiri Rao & Chandini. All rights reserved.`
    }
  },

  te: {
    navbar: {
      brideAndGroom: "వధువు-వరుడు",
      haldi: "హల్దీ",
      sangeet: "సంగీత్",
      reception: "స్వాగత సమారోహం",
      marriage: "వివాహం",
      venue: "వేదిక",
      saveTheDate: "తేదీని సేవ్ చేయండి",
      invitation: "ఆహ్వానం",
      photoshoot: "ఫోటోషూట్",
      guestbook: "గెస్ట్‌బుక్",
      game: "సరదా ఆట"
    },
    hero: {
      title: "శేషగిరిరావు & చాందిని",
      subtitle: "వివాహ బంధంలో ఒక్కటవుతున్నారు!",
      date: "ఆగస్టు 21, 2024"
    },
    haldi: {
      title: "హల్దీ వేడుక",
      description:
        "<b>చాందిని</b> మరియు <b>శేషగిరిరావు</b> యొక్క హల్దీ వేడుకలో, పసుపు, నూనె, మరియు నీరు వారికి సంతోషం మరియు శ్రేయస్సు కోసం ఆశీర్వదించడానికి పూయబడతాయి. ఈ అందమైన సంప్రదాయం వారి ప్రయాణాన్ని ప్రేమ, నవ్వు, మరియు రక్షణతో నింపుతుంది, వారు కలిసి కొత్త జీవితంలోకి అడుగుపెట్టేటప్పుడు. 😊💛",
      date: "జూలై 30th, 2025",
      time: "సాయంత్రం 6:30 గంటలకు ప్రారంభమవుతుంది"
    },
    photoshoot: {
      title: "మా క్షణాలు"
    },
    brideToBe: {
      title: "వధూవరులు",
      heading: "మా వధూవరుల సంబరం",
      brideName: "శేషగిరిరావు",
      groomName: "చాందిని",
      description:
        "<b>శేషగిరిరావు</b> హృదయంలో సౌమ్యత, ప్రేమతో నిండిన ఆత్మ. తన చుట్టూ వారికి వెచ్చని కాంతిని పంచుతాడు. ఓర్పుతో, దయతో అందరినీ ఆదరిస్తాడు. <b>చాందిని</b> తన చిరస్థాయి నవ్వుతో, సమతుల్య జీవనంతో అతనికి సాటిలేని సహచరి. కలిసి, పరస్పర అవగాహన, నిష్కల్మష ప్రేమతో నిండిన బంధాన్ని నిర్మించారు, ఈ పయనంలో చేయి చేయి కలిపి నడిచే అనుపమ జంటగా నిలుస్తారు. 😊💖",
      quote: "ప్రేమ సరైన వ్యక్తిని వెతకడం కాదు, సరైన బంధాన్ని సృష్టించడం."
    },
    imageGrid: {
      title: "మా జంట పయనం",
      alt: "వివాహ ప్రయాణ క్షణం"
    },
    reception: {
      title: "స్వాగత సమారోహం & భోజనం",
      description:
        "<b>శేషగిరిరావు</b> మరియు <b>చాందిని</b> కొత్త జీవన పయనాన్ని ప్రారంభించే ఈ సాయంత్రం, మాతో సంబరంగా చేరండి. రుచికరమైన భోజనం, సంగీతం, నృత్యం, మరియు ప్రియమైనవారితో ఆనంద క్షణాలతో ఈ వేడుక జీవన్మరణీయంగా నిలిచిపోతుంది.",
      date: "జూలై 31st, 2025",
      time: "సాయంత్రం 7:00 నుండి 10:00 వరకు",
      fineDining: {
        title: "విందు",
        description: "సాంప్రదాయ వంటకాలతో కూడిన బహుళ విభాగ భోజనం"
      },
      photoBooth: {
        title: "స్మృతి చిత్రాలు",
        description: "స్నేహితులు, కుటుంబంతో సరదా అలంకరణలతో స్మృతులను చిత్రీకరించండి"
      }
    },
    marriageMuhurtham: {
      title: "వివాహ ముహూర్తం",
      description:
        "తారకల ఆశీస్సులతో, <b>మూల నక్షత్రం, వృశ్చిక లగ్నం</b> కింద, <b>శేషగిరిరావు</b> మరియు <b>చాందిని</b> అగ్ని సాక్షిగా చిరస్థాయి బంధంలో ఒక్కటవుతారు. ఈ పవిత్ర క్షణం ప్రేమ, విశ్వాసంతో నిండిన జీవన గీతం ఆరంభిస్తుంది.",
      ceremonyDetails: {
        paragraph1:
          "<b>వివాహ ముహూర్తం</b>, <b>చాందిని</b> మరియు <b>శేషగిరిరావు</b> జీవిత సహచరులుగా మారే దివ్య క్షణం. అగ్ని జ్వాలల మధ్య, వారి పవిత్ర ప్రమాణాలు ఆకాశాన్ని తాకుతాయి.",
        paragraph2:
          "పురోహితులు <b>వేద మంత్రాలు</b> పఠిస్తూ దైవ ఆశీస్సులను కోరతారు. <b>శేషగిరిరావు</b>, <b>చాందిని</b>కు మాంగల్యం కట్టి, జన్మజన్మల బంధాన్ని స్థాపిస్తాడు. వారు <b>సప్తపది</b> ఏడు అడుగులు వేస్తూ, ప్రేమ, ధర్మం, సంతోషాలతో నడవాలని ఒట్టు పెట్టుకుంటారు."
      },
      specialNote:
        "ఉదయం <b>03:00 గంటలకు</b> ఈ శుభవేళ ప్రారంభమవుతుంది. <b>ఉదయం 02:45 గంటల</b> లోపు స్థానంలో ఉండండి, ఈ పవిత్ర ఆచారాలు జాంక్షేపం లేకుండా సాగనివ్వండి.",
      rituals: [
        {
          "name": "వర పూజ",
          "date": "2025-08-01",
          "time": "ఉదయం 3:15 గంటలకు",
          "description": "వరుడు మరియు అతని కుటుంబాన్ని ఆహ్వానించే కార్యక్రమం"
        },
        {
          "name": "కన్యాదానం",
          "date": "2025-08-01",
          "time": "ఉదయం 3:40 గంటలకు",
          "description": "వధువును ఆమె తల్లిదండ్రులు వరునికి అప్పగించే పవిత్ర సంస్కారం"
        },

        {
          "name": "జీలకర బెల్లం (పెళ్లి ముహూర్తం)",
          "date": "2025-08-01",
          "time": "ఉదయం 4:14 గంటలకు",
          "description": "పెళ్లి యొక్క ఖచ్చితమైన ముహూర్త సమయం - జీవన బంధానికి ప్రారంభం"
        },
        {
          "name": "మాంగల్య ధారణం",
          "date": "2025-08-01",
          "time": "ఉదయం 4:30 గంటలకు",
          "description": "వరుడు వధువుకి మాంగల్యాన్ని కట్టే శుభ కార్యం"
        },
        {
          "name": "సప్తపది",
          "date": "2025-08-01",
          "time": "ఉదయం 4:45 గంటలకు",
          "description": "వధువు వరుడు కలిసి ఏడు అడుగులు వేసి ఏడు వ్రతాలను అనుసరిస్తారు"
        },
        {
          "name": "ఆశీర్వాదం",
          "date": "2025-08-01",
          "time": "ఉదయం 5:00 గంటలకు",
          "description": "పెద్దలు మరియు బంధువుల ఆశీస్సులతో శుభాకాంక్షలు"
        }
      ],
      date: "జూలై 31st, 2025",
      time: "ఉదయం 4:14 గంటలు (Aug 1st)",
      imageAlt: "వివాహ వేడుక",
      subheadings: {
        sacredCeremony: "పవిత్ర వివాహం",
        timeline: "వేడుక కాలక్రమం"
      }
    },
    venueLocation: {
      title: "వేదిక స్థలం",
      description:
        "అన్ని వివాహ కార్యక్రమాలు <b>శ్రీ సిద్ది వినాయక ఫంక్షన్ హాల్ (రవి థియేటర్)</b>, మెయిన్ రోడ్, <b>కోతకోట</b> లో జరగనున్నాయి. <b>శేషగిరి రావు</b> మరియు <b>చందినీ</b> కలయికను ఘనంగా జరుపుకోవడానికి ఇది విశాలమైన మరియు సౌకర్యవంతమైన వేదిక, ఆత్మీయతతో నిండిన వాతావరణం.",
      mapTitle: "వివాహ వేదిక స్థానం"
    }
    ,
    footer: {
      thankYou: "సందర్శించినందుకు ధన్యవాదములు!",
      madeWithLove: "ప్రేమతో నిర్మించబడింది",
      copyright: `© ${new Date().getFullYear()} శేషగిరిరావు & చాందిని. సర్వ హక్కులు రిజర్వ్ చేయబడ్డాయి.`
    }
  }
};

// 2. Create the Context
const ContentContext = createContext();

// 3. Create the Provider Component
export const ContentProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const switchLanguage = (lang) => {
    setLanguage(lang);
  };
  const value = {
    language,
    setLanguage: switchLanguage,
    content: content[language]
  };
  return <ContentContext.Provider value={value}>{children}</ContentContext.Provider>;
};

// 4. Create a custom hook for easy consumption
export const useContent = () => {
  const context = useContext(ContentContext);
  if (context === undefined) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
};