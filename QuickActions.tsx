import React from 'react';
import { useLanguage } from '../context/LanguageContext';

interface Props {
  onAction: (action: string) => void;
  compact?: boolean;
}

export function QuickActions({ onAction, compact }: Props) {
  const { currentLanguage, translations } = useLanguage();

  const quickActions = [
    {
      icon: '📚',
      label: translations.libraryTimings || 'Library Timings',
      action: 'What are the library timings?'
    },
    {
      icon: '🍽️',
      label: translations.canteenMenu || 'Canteen Menu',
      action: 'What is today\'s canteen menu?'
    },
    {
      icon: '🏠',
      label: translations.hostelInfo || 'Hostel Info',
      action: 'Tell me about hostel facilities and fees'
    },
    {
      icon: '💼',
      label: translations.placements || 'Placements',
      action: 'Any upcoming placement drives?'
    },
    {
      icon: '📅',
      label: translations.events || 'Events',
      action: 'What events are happening this week?'
    },
    {
      icon: '📊',
      label: translations.attendance || 'My Attendance',
      action: 'Check my attendance status'
    },
    {
      icon: '💰',
      label: translations.fees || 'Fees & Scholarships',
      action: 'Tell me about fees and available scholarships'
    },
    {
      icon: '🗺️',
      label: translations.campusMap || 'Campus Map',
      action: 'Show me the campus map and directions'
    }
  ];

  return (
    <div className={`grid ${compact ? 'grid-cols-4 gap-2' : 'grid-cols-2 md:grid-cols-4 gap-4'} max-w-4xl mx-auto`}>
      {quickActions.slice(0, compact ? 4 : 8).map((action, index) => (
        <button
          key={index}
          onClick={() => onAction(action.action)}
          className={`${
            compact ? 'p-3' : 'p-4'
          } bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 border border-gray-200 dark:border-gray-600 group`}
        >
          <div className="text-center">
            <div className={`${compact ? 'text-lg mb-1' : 'text-2xl mb-3'} group-hover:scale-110 transition-transform`}>
              {action.icon}
            </div>
            <p className={`${
              compact ? 'text-xs' : 'text-sm'
            } font-medium text-gray-700 dark:text-gray-300 leading-tight`}>
              {action.label}
            </p>
          </div>
        </button>
      ))}
    </div>
  );
}