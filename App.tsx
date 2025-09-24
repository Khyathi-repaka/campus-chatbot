import React, { useState, useEffect } from 'react';
import { ChatInterface } from './components/ChatInterface';
import { Sidebar } from './components/Sidebar';
import { LanguageSelector } from './components/LanguageSelector';
import { ThemeToggle } from './components/ThemeToggle';
import { ImageTranslator } from './components/ImageTranslator';
import { EventsWidget } from './components/EventsWidget';
import { ChatProvider } from './context/ChatContext';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [showImageTranslator, setShowImageTranslator] = useState(false);
  const [showEvents, setShowEvents] = useState(false);

  return (
    <ThemeProvider>
      <LanguageProvider>
        <ChatProvider>
          <div className="flex h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
            {/* Sidebar */}
            <div className={`${sidebarOpen ? 'w-80' : 'w-0'} transition-all duration-300 overflow-hidden`}>
              <Sidebar onClose={() => setSidebarOpen(false)} />
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
              {/* Header */}
              <header className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => setSidebarOpen(!sidebarOpen)}
                      className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                      </svg>
                    </button>
                    <div>
                      <h1 className="text-xl font-bold text-gray-800 dark:text-white">Campus Assistant</h1>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Your multilingual campus companion</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => setShowEvents(!showEvents)}
                      className="p-2 rounded-lg bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 hover:bg-green-200 dark:hover:bg-green-800 transition-colors"
                      title="Campus Events"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </button>
                    
                    <button
                      onClick={() => setShowImageTranslator(!showImageTranslator)}
                      className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 hover:bg-purple-200 dark:hover:bg-purple-800 transition-colors"
                      title="Image Translator"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </button>
                    
                    <LanguageSelector />
                    <ThemeToggle />
                  </div>
                </div>
              </header>

              {/* Main Chat Area */}
              <div className="flex-1 relative">
                <ChatInterface />
                
                {/* Overlay Components */}
                {showImageTranslator && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center p-4 z-10">
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
                      <ImageTranslator onClose={() => setShowImageTranslator(false)} />
                    </div>
                  </div>
                )}
                
                {showEvents && (
                  <div className="absolute top-4 right-4 z-10">
                    <EventsWidget onClose={() => setShowEvents(false)} />
                  </div>
                )}
              </div>
            </div>
          </div>
        </ChatProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;