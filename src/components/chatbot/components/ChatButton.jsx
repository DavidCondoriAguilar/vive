/**
 * ChatButton component
 * Floating chat button with notification badge
 * Following atomic design principles
 */

import React from 'react';
import { FaComments, FaTimes } from 'react-icons/fa';

/**
 * ChatButton component props
 * @typedef {Object} ChatButtonProps
 * @property {boolean} isOpen - Whether chat is open
 * @property {number} unreadCount - Number of unread messages
 * @property {Function} onClick - Click handler
 * @property {string} [className] - Additional CSS classes
 */

/**
 * Floating chat button component
 * @param {ChatButtonProps} props - Component props
 */
const ChatButton = ({ isOpen, unreadCount, onClick, className = '' }) => {
  const buttonText = isOpen ? 'Cerrar chat' : 'Chatea con nosotros';
  const buttonIcon = isOpen ? <FaTimes className="w-5 h-5" /> : <FaComments className="w-5 h-5" />;

  return (
    <button
      onClick={onClick}
      className={`
        fixed bottom-6 right-6 w-14 h-14 bg-gold-500 hover:bg-gold-600 
        text-white rounded-full shadow-lg transition-all duration-300 
        flex items-center justify-center z-[180] group
        hover:scale-110 hover:shadow-xl
        focus:outline-none focus:ring-4 focus:ring-gold-500/30
        ${className}
      `}
      aria-label={buttonText}
      title={buttonText}
    >
      {/* Button Icon */}
      <div className="transition-transform duration-300 group-hover:scale-110">
        {buttonIcon}
      </div>

      {/* Notification Badge */}
      {!isOpen && unreadCount > 0 && (
        <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs 
                    w-6 h-6 rounded-full flex items-center justify-center 
                    font-bold animate-pulse">
          {unreadCount > 9 ? '9+' : unreadCount}
        </div>
      )}

      {/* Hover Tooltip */}
      <div className="absolute bottom-full mb-2 right-0 bg-gray-800 text-white 
                    text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 
                    transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        {buttonText}
      </div>
    </button>
  );
};

export default ChatButton;
