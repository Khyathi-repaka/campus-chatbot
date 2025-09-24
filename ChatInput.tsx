import React, { useState, useRef, useEffect } from 'react';
import { useSpeechRecognition } from '../hooks/useSpeechRecognition';
import { useLanguage } from '../context/LanguageContext';

interface Props {
  onSendMessage: (message: string) => void;
}

export function ChatInput({ onSendMessage }: Props) {
  const [message, setMessage] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const { transcript, isListening, startListening, stopListening, isSupported } = useSpeechRecognition();
  const { currentLanguage, translations } = useLanguage();
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const commonQueries = [
    "Library timings?",
    "Canteen menu today",
    "Hostel fees",
    "Placement updates",
    "Event schedule",
    "My attendance",
    "Scholarship info",
    "Campus map"
  ];

  useEffect(() => {
    if (transcript) {
      setMessage(transcript);
    }
  }, [transcript]);

  useEffect(() => {
    if (message.length > 2) {
      const filtered = commonQueries.filter(query => 
        query.toLowerCase().includes(message.toLowerCase())
      );
      setSuggestions(filtered.slice(0, 3));
    } else {
      setSuggestions([]);
    }
  }, [message]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message.trim());
      setMessage('');
      setSuggestions([]);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = Math.min(textarea.scrollHeight, 120) + 'px';
    }
  };

  useEffect(() => {
    adjustTextareaHeight();
  }, [message]);

  return (
    <div className="p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border-t border-gray-200 dark:border-gray-700">
      {/* Suggestions */}
      {suggestions.length > 0 && (
        <div className="mb-3 flex flex-wrap gap-2">
          {suggestions.map((suggestion, index) => (
            <button
              key={index}
              onClick={() => {
                setMessage(suggestion);
                setSuggestions([]);
                textareaRef.current?.focus();
              }}
              className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              {suggestion}
            </button>
          ))}
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex items-end space-x-3">
        <div className="flex-1 relative">
          <textarea
            ref={textareaRef}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={translations.typeMessage}
            className="w-full min-h-[44px] max-h-[120px] p-3 pr-12 bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-2xl resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white transition-all"
            rows={1}
          />
          
          {/* Voice Input Button */}
          {isSupported && (
            <button
              type="button"
              onClick={isListening ? stopListening : startListening}
              className={`absolute right-2 bottom-2 p-2 rounded-full transition-all ${
                isListening 
                  ? 'bg-red-500 text-white animate-pulse' 
                  : 'bg-blue-500 text-white hover:bg-blue-600'
              }`}
              title={isListening ? 'Stop recording' : 'Start voice input'}
            >
              {isListening ? (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              )}
            </button>
          )}
        </div>

        <button
          type="submit"
          disabled={!message.trim()}
          className="p-3 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300 dark:disabled:bg-gray-600 disabled:cursor-not-allowed text-white rounded-2xl transition-colors"
          title="Send message"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
        </button>
      </form>

      {isListening && (
        <div className="mt-2 flex items-center space-x-2 text-sm text-red-600 dark:text-red-400">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
          <span>Listening... Speak in {currentLanguage}</span>
        </div>
      )}
    </div>
  );
}