import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  category: 'academic' | 'cultural' | 'sports' | 'placement' | 'workshop';
  isToday?: boolean;
}

interface Props {
  onClose: () => void;
}

export function EventsWidget({ onClose }: Props) {
  const { currentLanguage } = useLanguage();
  const [events, setEvents] = useState<Event[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  useEffect(() => {
    // Mock events data
    const mockEvents: Event[] = [
      {
        id: '1',
        title: 'Tech Talk: AI in Healthcare',
        description: 'Join us for an insightful session on AI applications in healthcare',
        date: new Date().toISOString().split('T')[0],
        time: '2:00 PM',
        location: 'Auditorium',
        category: 'workshop',
        isToday: true
      },
      {
        id: '2',
        title: 'Cultural Fest Registration',
        description: 'Register for the annual cultural festival',
        date: new Date(Date.now() + 86400000).toISOString().split('T')[0],
        time: '10:00 AM',
        location: 'Student Center',
        category: 'cultural'
      },
      {
        id: '3',
        title: 'Placement Drive - TCS',
        description: 'Campus recruitment for Software Engineer positions',
        date: new Date(Date.now() + 172800000).toISOString().split('T')[0],
        time: '9:00 AM',
        location: 'Placement Cell',
        category: 'placement'
      },
      {
        id: '4',
        title: 'Sports Meet',
        description: 'Inter-college sports competition',
        date: new Date(Date.now() + 259200000).toISOString().split('T')[0],
        time: '6:00 AM',
        location: 'Sports Complex',
        category: 'sports'
      }
    ];

    setEvents(mockEvents);
  }, []);

  const categories = [
    { id: 'all', name: 'All Events', color: 'gray' },
    { id: 'academic', name: 'Academic', color: 'blue' },
    { id: 'cultural', name: 'Cultural', color: 'purple' },
    { id: 'sports', name: 'Sports', color: 'green' },
    { id: 'placement', name: 'Placement', color: 'orange' },
    { id: 'workshop', name: 'Workshop', color: 'indigo' }
  ];

  const filteredEvents = selectedCategory === 'all' 
    ? events 
    : events.filter(event => event.category === selectedCategory);

  const getCategoryColor = (category: string) => {
    const cat = categories.find(c => c.id === category);
    return cat?.color || 'gray';
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    if (date.toDateString() === today.toDateString()) {
      return 'Today';
    } else if (date.toDateString() === tomorrow.toDateString()) {
      return 'Tomorrow';
    } else {
      return date.toLocaleDateString('en-IN', { 
        weekday: 'short', 
        month: 'short', 
        day: 'numeric' 
      });
    }
  };

  return (
    <div className="w-96 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 text-white">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-bold">Campus Events</h2>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-white/20 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {/* Category Filter */}
        <div className="flex space-x-2 overflow-x-auto pb-2">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-3 py-1 rounded-full text-xs whitespace-nowrap transition-all ${
                selectedCategory === category.id
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Events List */}
      <div className="max-h-96 overflow-y-auto p-4 space-y-3">
        {filteredEvents.length === 0 ? (
          <div className="text-center py-8">
            <svg className="w-12 h-12 text-gray-400 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              No events in this category
            </p>
          </div>
        ) : (
          filteredEvents.map(event => (
            <div
              key={event.id}
              className={`p-4 rounded-xl border-l-4 bg-gray-50 dark:bg-gray-700 hover:shadow-md transition-all cursor-pointer ${
                event.isToday ? 'border-l-red-500 bg-red-50 dark:bg-red-900/20' : 
                `border-l-${getCategoryColor(event.category)}-500`
              }`}
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-800 dark:text-white text-sm truncate">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-xs mt-1 line-clamp-2">
                    {event.description}
                  </p>
                </div>
                
                {event.isToday && (
                  <span className="ml-2 px-2 py-1 bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-300 text-xs rounded-full font-medium">
                    Today
                  </span>
                )}
              </div>
              
              <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-1">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{formatDate(event.date)}</span>
                  </div>
                  
                  <div className="flex items-center space-x-1">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{event.time}</span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-1">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{event.location}</span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Footer */}
      <div className="p-4 bg-gray-50 dark:bg-gray-700 border-t border-gray-200 dark:border-gray-600">
        <button className="w-full py-2 text-sm text-blue-600 dark:text-blue-400 font-medium hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-lg transition-colors">
          View All Events →
        </button>
      </div>
    </div>
  );
}