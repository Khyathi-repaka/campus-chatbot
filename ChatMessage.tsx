import React, { useState } from 'react';
import { BotAvatar } from './BotAvatar';
import { useSpeechSynthesis } from '../hooks/useSpeechSynthesis';
import { useLanguage } from '../context/LanguageContext';

interface Message {
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  language: string;
  quickReplies?: string[];
}

interface Props {
  message: Message;
}

export function ChatMessage({ message }: Props) {
  const { speak, isSpeaking } = useSpeechSynthesis();
  const { currentLanguage } = useLanguage();
  const [feedback, setFeedback] = useState<'like' | 'dislike' | null>(null);

  const handleSpeak = () => {
    speak(message.text, message.language);
  };

  const handleFeedback = (type: 'like' | 'dislike') => {
    setFeedback(type);
    // In a real app, you'd send this feedback to your analytics
    console.log(`Feedback: ${type} for message: ${message.text}`);
  };

  const formatTime = (timestamp: Date) => {
    return timestamp.toLocaleTimeString('en-IN', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });
  };

  return (
    <div className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
      <div className={`flex max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'} space-x-3`}>
        {message.sender === 'bot' && <BotAvatar emotion="talking" size="small" />}
        
        <div className={`flex flex-col space-y-2`}>
          <div
            className={`rounded-2xl px-4 py-3 ${
              message.sender === 'user'
                ? 'bg-blue-500 text-white ml-auto'
                : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-white shadow-sm'
            }`}
          >
            <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.text}</p>
            
            {message.sender === 'bot' && (
              <div className="flex items-center justify-between mt-3 pt-2 border-t border-gray-200 dark:border-gray-600">
                <div className="flex items-center space-x-2">
                  <button
                    onClick={handleSpeak}
                    disabled={isSpeaking}
                    className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    title="Read aloud"
                  >
                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M9 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </button>
                  
                  <div className="flex items-center space-x-1">
                    <button
                      onClick={() => handleFeedback('like')}
                      className={`p-1 rounded-full transition-colors ${
                        feedback === 'like' 
                          ? 'text-green-500 bg-green-100 dark:bg-green-900' 
                          : 'text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-600'
                      }`}
                      title="Helpful"
                    >
                      👍
                    </button>
                    <button
                      onClick={() => handleFeedback('dislike')}
                      className={`p-1 rounded-full transition-colors ${
                        feedback === 'dislike' 
                          ? 'text-red-500 bg-red-100 dark:bg-red-900' 
                          : 'text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-600'
                      }`}
                      title="Not helpful"
                    >
                      👎
                    </button>
                  </div>
                </div>
                
                <span className="text-xs text-gray-400">{formatTime(message.timestamp)}</span>
              </div>
            )}
          </div>
          
          {/* Quick Replies */}
          {message.quickReplies && message.quickReplies.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {message.quickReplies.map((reply, index) => (
                <button
                  key={index}
                  className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
                  onClick={() => {
                    // Handle quick reply click
                    console.log('Quick reply clicked:', reply);
                  }}
                >
                  {reply}
                </button>
              ))}
            </div>
          )}
          
          {message.sender === 'user' && (
            <span className="text-xs text-gray-400 text-right">{formatTime(message.timestamp)}</span>
          )}
        </div>
      </div>
    </div>
  );
}