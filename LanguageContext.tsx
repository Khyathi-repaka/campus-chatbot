import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Language {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
}

interface Translations {
  welcome: string;
  welcomeDescription: string;
  typeMessage: string;
  libraryTimings: string;
  canteenMenu: string;
  hostelInfo: string;
  placements: string;
  events: string;
  attendance: string;
  fees: string;
  campusMap: string;
  chatHistory: string;
}

interface LanguageContextType {
  currentLanguage: string;
  availableLanguages: Language[];
  translations: Translations;
  setLanguage: (language: string) => void;
}

const languages: Language[] = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिंदी', flag: '🇮🇳' },
  { code: 'te', name: 'Telugu', nativeName: 'తెలుగు', flag: '🇮🇳' },
];

const translationsMap: Record<string, Translations> = {
  en: {
    welcome: "Welcome to Campus Assistant!",
    welcomeDescription: "I'm here to help you with campus queries in your preferred language. Ask me about facilities, events, academics, and more!",
    typeMessage: "Type your message...",
    libraryTimings: "Library Timings",
    canteenMenu: "Canteen Menu",
    hostelInfo: "Hostel Info",
    placements: "Placements",
    events: "Events",
    attendance: "My Attendance",
    fees: "Fees & Scholarships",
    campusMap: "Campus Map",
    chatHistory: "Chat History"
  },
  hi: {
    welcome: "कैंपस असिस्टेंट में आपका स्वागत है!",
    welcomeDescription: "मैं आपकी पसंदीदा भाषा में कैंपस से जुड़े सवालों में आपकी मदद करने के लिए यहाँ हूँ। मुझसे सुविधाओं, घटनाओं, शिक्षाविदों और अन्य चीजों के बारे में पूछें!",
    typeMessage: "अपना संदेश लिखें...",
    libraryTimings: "लाइब्रेरी का समय",
    canteenMenu: "कैंटीन मेन्यू",
    hostelInfo: "हॉस्टल की जानकारी",
    placements: "प्लेसमेंट्स",
    events: "इवेंट्स",
    attendance: "मेरी उपस्थिति",
    fees: "फीस और छात्रवृत्ति",
    campusMap: "कैंपस मैप",
    chatHistory: "चैट हिस्टरी"
  },
  te: {
    welcome: "క్యాంపస్ అసిస్టెంట్‌కి స్వాగతం!",
    welcomeDescription: "మీకు ఇష్టమైన భాషలో క్యాంపస్ ప్రశ్నలతో మీకు సహాయం చేయడానికి నేను ఇక్కడ ఉన్నాను. సౌకర్యాలు, ఈవెంట్స్, అకాడమిక్స్ మరియు మరిన్నింటి గురించి నన్ను అడగండి!",
    typeMessage: "మీ సందేశాన్ని టైప్ చేయండి...",
    libraryTimings: "లైబ్రరీ సమయాలు",
    canteenMenu: "క్యాంటీన్ మెనూ",
    hostelInfo: "హాస్టల్ వివరాలు",
    placements: "ప్లేస్‌మెంట్స్",
    events: "ఈవెంట్స్",
    attendance: "నా హాజరు",
    fees: "ఫీజులు & స్కాలర్‌షిప్స్",
    campusMap: "క్యాంపస్ మ్యాప్",
    chatHistory: "చాట్ చరిత్ర"
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [currentLanguage, setCurrentLanguage] = useState('en');

  const setLanguage = (language: string) => {
    setCurrentLanguage(language);
  };

  const value = {
    currentLanguage,
    availableLanguages: languages,
    translations: translationsMap[currentLanguage],
    setLanguage
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}