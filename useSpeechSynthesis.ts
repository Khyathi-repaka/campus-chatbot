import { useState, useCallback } from 'react';

interface UseSpeechSynthesisReturn {
  speak: (text: string, language: string) => void;
  isSpeaking: boolean;
  cancel: () => void;
}

export function useSpeechSynthesis(): UseSpeechSynthesisReturn {
  const [isSpeaking, setIsSpeaking] = useState(false);

  const speak = useCallback((text: string, language: string = 'en') => {
    if ('speechSynthesis' in window) {
      // Cancel any ongoing speech
      speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      
      // Set language based on the provided language code
      const languageMap: Record<string, string> = {
        'en': 'en-IN',
        'hi': 'hi-IN',
        'te': 'te-IN'
      };
      
      utterance.lang = languageMap[language] || 'en-IN';
      utterance.rate = 0.9;
      utterance.pitch = 1;
      utterance.volume = 0.8;

      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);

      speechSynthesis.speak(utterance);
    }
  }, []);

  const cancel = useCallback(() => {
    if ('speechSynthesis' in window) {
      speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  }, []);

  return {
    speak,
    isSpeaking,
    cancel
  };
}