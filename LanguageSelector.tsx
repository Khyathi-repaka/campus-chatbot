import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export function LanguageSelector() {
  const { currentLanguage, setLanguage, availableLanguages } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (langCode: string) => {
    setLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors flex items-center space-x-2"
        title="Change Language"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
        </svg>
        <span className="text-sm font-medium uppercase">{currentLanguage}</span>
        <svg className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50">
          {availableLanguages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`w-full px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors first:rounded-t-lg last:rounded-b-lg ${
                currentLanguage === lang.code 
                  ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' 
                  : 'text-gray-700 dark:text-gray-300'
              }`}
            >
              <div className="flex items-center space-x-3">
                <span className="text-xl">{lang.flag}</span>
                <div>
                  <div className="font-medium">{lang.name}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{lang.nativeName}</div>
                </div>
              </div>
            </button>
          ))}
        </div>
      )}

      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}