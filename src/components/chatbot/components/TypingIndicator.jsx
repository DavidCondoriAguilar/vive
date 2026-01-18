/**
 * TypingIndicator component
 * Animated typing indicator for bot messages
 * Following atomic design principles
 */

import React from 'react';

/**
 * TypingIndicator component
 * Shows when bot is "typing" a response
 */
const TypingIndicator = () => {
  return (
    <div className="flex items-center gap-2 mb-4">
      {/* Bot Avatar */}
      <div className="w-6 h-6 text-gray-400 flex-shrink-0">
        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3-1.34 3-3S13.66 4 12 4s-3 1.34-3 3 1.34 3 3 3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-2.04 3.5-3.78 6-3.78 2.5 0 4.71 1.28 6 3.22-.03 2.04-3.5 3.78-6 3.78z"/>
        </svg>
      </div>

      {/* Typing Bubble */}
      <div className="bg-gray-100 dark:bg-gray-700 rounded-2xl px-4 py-3 shadow-sm">
        <div className="flex space-x-1">
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" 
               style={{ animationDelay: '0ms', animationDuration: '1.4s' }}></div>
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" 
               style={{ animationDelay: '160ms', animationDuration: '1.4s' }}></div>
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" 
               style={{ animationDelay: '320ms', animationDuration: '1.4s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default TypingIndicator;
