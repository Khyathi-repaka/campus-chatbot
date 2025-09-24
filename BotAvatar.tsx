import React from 'react';

interface Props {
  emotion: 'greeting' | 'thinking' | 'talking' | 'listening';
  size: 'small' | 'large';
}

export function BotAvatar({ emotion, size }: Props) {
  const sizeClasses = size === 'large' ? 'w-16 h-16' : 'w-8 h-8';
  
  const getEmoji = () => {
    switch (emotion) {
      case 'greeting':
        return '👋';
      case 'thinking':
        return '🤔';
      case 'talking':
        return '😊';
      case 'listening':
        return '👂';
      default:
        return '🤖';
    }
  };

  return (
    <div className={`${sizeClasses} rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white shadow-lg ${
      emotion === 'thinking' ? 'animate-pulse' : ''
    }`}>
      <span className={`${size === 'large' ? 'text-2xl' : 'text-sm'}`}>
        {getEmoji()}
      </span>
    </div>
  );
}