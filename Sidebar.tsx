import React, { useState } from 'react';
import { useChat } from '../context/ChatContext';
import { useLanguage } from '../context/LanguageContext';

interface Props {
  onClose: () => void;
}

export function Sidebar({ onClose }: Props) {
  const { chatHistory, clearHistory } = useChat();
  const { translations } = useLanguage();
  const [selectedDate, setSelectedDate] = useState<string>('');

  const groupedHistory = chatHistory.reduce((acc, chat) => {
    const date = chat.timestamp.toDateString();
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(chat);
    return acc;
  }, {} as Record<string, typeof chatHistory>);

  const sortedDates = Object.keys(groupedHistory).sort((a, b) => 
    new Date(b).getTime() - new Date(a).getTime()
  );

  return (
    <div className="h-full bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
            {translations.chatHistory || 'Chat History'}
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-3">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              {chatHistory.length}
            </div>
            <div className="text-xs text-blue-500 dark:text-blue-300">Total Queries</div>
          </div>
          <div className="bg-green-50 dark:bg-green-900/30 rounded-lg p-3">
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">
              {sortedDates.length}
            </div>
            <div className="text-xs text-green-500 dark:text-green-300">Active Days</div>
          </div>
        </div>

        {/* Clear History */}
        {chatHistory.length > 0 && (
          <button
            onClick={clearHistory}
            className="w-full px-3 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-lg transition-colors"
          >
            Clear All History
          </button>
        )}
      </div>

      {/* History List */}
      <div className="flex-1 overflow-y-auto p-4">
        {sortedDates.length === 0 ? (
          <div className="text-center py-8">
            <svg className="w-12 h-12 text-gray-400 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              No chat history yet
            </p>
            <p className="text-gray-400 dark:text-gray-500 text-xs mt-1">
              Start a conversation to see your history
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {sortedDates.map(date => (
              <div key={date} className="space-y-2">
                <div className="sticky top-0 bg-white dark:bg-gray-800 py-2">
                  <h3 className="text-sm font-medium text-gray-600 dark:text-gray-300 capitalize">
                    {date === new Date().toDateString() ? 'Today' : 
                     date === new Date(Date.now() - 86400000).toDateString() ? 'Yesterday' :
                     new Date(date).toLocaleDateString('en-IN', { 
                       weekday: 'short', 
                       month: 'short', 
                       day: 'numeric' 
                     })}
                  </h3>
                </div>
                
                <div className="space-y-2">
                  {groupedHistory[date].map((chat, index) => (
                    <div
                      key={index}
                      className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors cursor-pointer"
                      onClick={() => {
                        // In a real app, this would load the chat conversation
                        console.log('Load chat:', chat);
                      }}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-800 dark:text-white truncate">
                            {chat.query}
                          </p>
                          <div className="flex items-center mt-1 space-x-2">
                            <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                              chat.language === 'hi' ? 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200' :
                              chat.language === 'te' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200' :
                              'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                            }`}>
                              {chat.language.toUpperCase()}
                            </span>
                            <span className="text-xs text-gray-500 dark:text-gray-400">
                              {chat.timestamp.toLocaleTimeString('en-IN', { 
                                hour: '2-digit', 
                                minute: '2-digit' 
                              })}
                            </span>
                          </div>
                        </div>
                        
                        <div className="ml-2 flex-shrink-0">
                          <div className={`w-2 h-2 rounded-full ${
                            chat.category === 'academic' ? 'bg-blue-400' :
                            chat.category === 'facilities' ? 'bg-green-400' :
                            chat.category === 'events' ? 'bg-purple-400' :
                            'bg-gray-400'
                          }`}></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}