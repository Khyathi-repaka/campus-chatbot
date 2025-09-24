import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Message {
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  language: string;
  quickReplies?: string[];
}

interface ChatHistoryItem {
  query: string;
  timestamp: Date;
  language: string;
  category: string;
  response: string;
}

interface ChatContextType {
  messages: Message[];
  chatHistory: ChatHistoryItem[];
  isTyping: boolean;
  addMessage: (message: Message) => void;
  clearMessages: () => void;
  clearHistory: () => void;
  setIsTyping: (typing: boolean) => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export function ChatProvider({ children }: { children: ReactNode }) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [chatHistory, setChatHistory] = useState<ChatHistoryItem[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  const addMessage = (message: Message) => {
    setMessages(prev => [...prev, message]);
    
    // Add to history if it's a user message
    if (message.sender === 'user') {
      const historyItem: ChatHistoryItem = {
        query: message.text,
        timestamp: message.timestamp,
        language: message.language,
        category: categorizeQuery(message.text),
        response: '' // Will be filled when bot responds
      };
      setChatHistory(prev => [...prev, historyItem]);
    }
  };

  const categorizeQuery = (query: string): string => {
    const lowerQuery = query.toLowerCase();
    
    if (lowerQuery.includes('library') || lowerQuery.includes('book') || lowerQuery.includes('study')) {
      return 'facilities';
    } else if (lowerQuery.includes('canteen') || lowerQuery.includes('food') || lowerQuery.includes('mess')) {
      return 'facilities';
    } else if (lowerQuery.includes('hostel') || lowerQuery.includes('room') || lowerQuery.includes('accommodation')) {
      return 'facilities';
    } else if (lowerQuery.includes('placement') || lowerQuery.includes('job') || lowerQuery.includes('company')) {
      return 'placement';
    } else if (lowerQuery.includes('event') || lowerQuery.includes('fest') || lowerQuery.includes('competition')) {
      return 'events';
    } else if (lowerQuery.includes('attendance') || lowerQuery.includes('class') || lowerQuery.includes('lecture')) {
      return 'academic';
    } else if (lowerQuery.includes('fee') || lowerQuery.includes('scholarship') || lowerQuery.includes('payment')) {
      return 'academic';
    } else {
      return 'general';
    }
  };

  const clearMessages = () => {
    setMessages([]);
  };

  const clearHistory = () => {
    setChatHistory([]);
  };

  const value = {
    messages,
    chatHistory,
    isTyping,
    addMessage,
    clearMessages,
    clearHistory,
    setIsTyping
  };

  return (
    <ChatContext.Provider value={value}>
      {children}
    </ChatContext.Provider>
  );
}

export function useChat() {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
}