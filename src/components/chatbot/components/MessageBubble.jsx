/**
 * MessageBubble component
 * Individual message component with typing indicators
 * Following atomic design principles
 */

import React from 'react';
import { FaUser, FaRobot } from 'react-icons/fa';
import { sanitizeHTML } from '@/utils/security';

/**
 * MessageBubble component props
 * @typedef {Object} MessageBubbleProps
 * @property {Object} message - Message object
 * @property {Function} onQuickReply - Quick reply handler
 */

/**
 * Message bubble component
 * @param {MessageBubbleProps} props - Component props
 */
const MessageBubble = ({ message, onQuickReply }) => {
  const isUser = message.sender === 'user';
  const isBot = message.sender === 'bot';

  const bubbleClasses = `
    max-w-[70%] px-4 py-3 rounded-2xl shadow-sm
    ${isUser
      ? 'bg-gold-500 text-white ml-auto'
      : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white mr-auto'
    }
  `;

  const iconClasses = `
    w-6 h-6 flex-shrink-0
    ${isUser
      ? 'text-gold-500'
      : 'text-gray-400'
    }
  `;

  return (
    <div className={`flex items-end gap-2 mb-4 ${isUser ? 'flex-row-reverse' : ''}`}>
      {/* Avatar */}
      <div className={iconClasses}>
        {isUser ? <FaUser /> : <FaRobot />}
      </div>

      {/* Message Bubble */}
      <div className={bubbleClasses}>
        {/* Message Text */}
        <div
          className="text-sm leading-relaxed"
          dangerouslySetInnerHTML={{ __html: sanitizeHTML(message.text) }}
        />

        {/* Quick Reply Options */}
        {message.options && message.options.length > 0 && (
          <div className="mt-3 space-y-2">
            {message.options.map((option, index) => (
              <button
                key={index}
                onClick={() => onQuickReply(option)}
                className="w-full text-left px-4 py-3 bg-gradient-to-r from-gold-50 to-gold-100 dark:from-gray-600 dark:to-gray-500 
                           rounded-lg text-sm font-medium transition-all duration-200
                           hover:from-gold-100 hover:to-gold-200 dark:hover:from-gray-500 dark:hover:to-gray-400
                           focus:outline-none focus:ring-2 focus:ring-gold-500/50
                           border border-gold-200 dark:border-gray-400
                           shadow-sm hover:shadow-md"
              >
                {option.text || option}
              </button>
            ))}
          </div>
        )}

        {/* Action Button */}
        {message.action && (
          <div className="mt-3">
            <button
              onClick={() => onQuickReply(message)}
              className="w-full px-4 py-3 bg-gradient-to-r from-gold-500 to-gold-600 text-white 
                         rounded-lg text-sm font-medium transition-all duration-200
                         hover:from-gold-600 hover:to-gold-700 focus:outline-none 
                         focus:ring-2 focus:ring-gold-500/50 shadow-md hover:shadow-lg"
            >
              {message.action === 'whatsapp' && '📱 Hablar por WhatsApp'}
              {message.action === 'catalog' && '📋 Ver Catálogo'}
              {message.action === 'human_agent' && '👤 Hablar con humano'}
            </button>
          </div>
        )}

        {/* Timestamp */}
        <div className="text-xs opacity-70 mt-1">
          {message.timestamp.toLocaleTimeString('es-PE', {
            hour: '2-digit',
            minute: '2-digit'
          })}
        </div>
      </div>
    </div>
  );
};

export default MessageBubble;
