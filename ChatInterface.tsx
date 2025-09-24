import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from './ChatMessage';
import { ChatInput } from './ChatInput';
import { QuickActions } from './QuickActions';
import { BotAvatar } from './BotAvatar';
import { useChat } from '../context/ChatContext';
import { useLanguage } from '../context/LanguageContext';
import { getCampusResponse } from '../utils/campusKnowledge';

export function ChatInterface() {
  const { messages, addMessage, isTyping, setIsTyping } = useChat();
  const { currentLanguage, translations } = useLanguage();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [showQuickActions, setShowQuickActions] = useState(true);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (message: string) => {
    addMessage({ text: message, sender: 'user', timestamp: new Date(), language: currentLanguage });
    setShowQuickActions(false);
    setIsTyping(true);

    // Simulate bot thinking time
    setTimeout(() => {
      const response = getCampusResponse(message, currentLanguage);
      addMessage({
        text: response.text,
        sender: 'bot',
        timestamp: new Date(),
        language: currentLanguage,
        quickReplies: response.quickReplies
      });
      setIsTyping(false);
    }, 1000 + Math.random() * 1500);
  };

  const handleQuickAction = (action: string) => {
    handleSendMessage(action);
  };

  return (
    <div className="flex flex-col h-full bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
      {/* Welcome Message */}
      {messages.length === 0 && (
        <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
          <BotAvatar emotion="greeting" size="large" />
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            {translations.welcome}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md">
            {translations.welcomeDescription}
          </p>
          {showQuickActions && <QuickActions onAction={handleQuickAction} />}
        </div>
      )}

      {/* Messages */}
      {messages.length > 0 && (
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message, index) => (
            <ChatMessage key={index} message={message} />
          ))}
          
          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex items-start space-x-3">
              <BotAvatar emotion="thinking" size="small" />
              <div className="bg-gray-200 dark:bg-gray-700 rounded-2xl px-4 py-3">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
      )}

      {/* Quick Actions for existing conversations */}
      {messages.length > 0 && showQuickActions && (
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <QuickActions onAction={handleQuickAction} compact />
        </div>
      )}

      {/* Chat Input */}
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
}