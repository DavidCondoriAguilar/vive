/**
 * Chatbot utility functions
 * Pure functions for chatbot logic
 */

import { MESSAGE_SENDERS } from './types.js';
import { BOT_RESPONSES, KEYWORDS_INTENTS, CHATBOT_CONFIG } from './constants.js';

/**
 * Normalizes text for better matching:
 * - Lowercase
 * - Removes accents/diacritics
 * - Removes punctuation
 * - Trims whitespace
 */
export const normalizeText = (text) => {
  if (!text) return '';
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove accents
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\?¿!¡]/g, '') // Remove punctuation
    .trim();
};

/**
 * Generate unique message ID (UUID v4 compatible)
 * @returns {string} Unique identifier
 */
export const generateMessageId = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
};

/**
 * Create a new message object
 * @param {string} text - Message text
 * @param {string} sender - Message sender
 * @param {string[]} [options] - Quick reply options
 * @param {string} [action] - Message action
 * @returns {Object} Message object
 */
export const createMessage = (text, sender, options = [], action = null) => {
  return {
    id: generateMessageId(),
    text,
    sender,
    timestamp: new Date(),
    options,
    action,
    metadata: {}
  };
};

/**
 * Detect intent from user message using keyword matching
 * @param {string} message - User message text
 * @returns {string} Detected intent
 */
export const detectIntent = (message) => {
  const normalizedMessage = normalizeText(message);
  const words = normalizedMessage.split(/\s+/);

  // 1. Check for multi-word exact matches (priority)
  for (const [keyword, intent] of Object.entries(KEYWORDS_INTENTS)) {
    if (keyword.includes(' ') && normalizedMessage.includes(normalizeText(keyword))) {
      return intent;
    }
  }

  // 2. Check for individual word matches
  for (const [keyword, intent] of Object.entries(KEYWORDS_INTENTS)) {
    const normalizedKeyword = normalizeText(keyword);
    // If it's a single word, check if it exists in the message words
    if (!keyword.includes(' ') && words.includes(normalizedKeyword)) {
      return intent;
    }
    // Fallback search in the whole string
    if (normalizedMessage.includes(normalizedKeyword)) {
      return intent;
    }
  }

  return 'fallback';
};

/**
 * Get bot response based on intent
 * @param {string} intent - Detected intent
 * @returns {Object} Bot response object
 */
export const getBotResponse = (intent, originalMessage = '') => {
  const response = BOT_RESPONSES[intent] || BOT_RESPONSES.fallback;

  return {
    text: response.text,
    options: response.options || [],
    action: response.action || null,
    metadata: {
      intent,
      originalMessage,
      timestamp: new Date()
    }
  };
};

/**
 * Format message text with line breaks y emojis
 * @param {string|Object} text - Raw text or response object
 * @returns {string} Formatted text
 */
export const formatMessageText = (text) => {
  // Handle both string y object inputs
  const messageText = typeof text === 'string' ? text : (text?.text || '');

  if (!messageText) return '';

  return messageText
    .replace(/\n/g, '<br />')
    .replace(/📋/g, '📋')
    .replace(/💰/g, '💰')
    .replace(/🚚/g, '🚚')
    .replace(/🛡️/g, '🛡️')
    .replace(/📞/g, '📞')
    .replace(/🌐/g, '🌐')
    .replace(/📱/g, '📱')
    .replace(/📧/g, '📧')
    .replace(/👤/g, '👤');
};

/**
 * Check if message contains action
 * @param {Object} message - Message object
 * @returns {boolean} Has action
 */
export const hasAction = (message) => {
  return message.action && message.action !== null;
};

/**
 * Get action URL for message
 * @param {Object} message - Message object
 * @returns {string|null} Action URL
 */
export const getActionUrl = (message) => {
  const { action } = message;

  switch (action) {
    case 'whatsapp':
      return `https://wa.me/${CHATBOT_CONFIG.whatsappNumber}?text=Hola, necesito ayuda con mi pedido.`;
    case 'catalog':
      return '/catalogo';
    case 'human_agent':
    case 'fallback_whatsapp':
      const userMsg = message.metadata?.originalMessage || 'Hola, necesito ayuda personalizada.';
      return `https://wa.me/${CHATBOT_CONFIG.whatsappNumber}?text=${encodeURIComponent('Hola Sueño Dorado, ' + userMsg)}`;
    default:
      return null;
  }
};

/**
 * Validate message text
 * @param {string} text - Message text
 * @returns {boolean} Is valid
 */
export const isValidMessage = (text) => {
  return text && text.trim().length > 0 && text.trim().length <= 500;
};

/**
 * Get typing indicator duration based on message length
 * @param {string} text - Message text
 * @returns {number} Duration in milliseconds
 */
export const getTypingDuration = (text) => {
  const baseDelay = CHATBOT_CONFIG.typingDelay;
  const charDelay = 50; // 50ms per character
  const maxDelay = 3000; // Max 3 seconds

  const duration = baseDelay + (text.length * charDelay);
  return Math.min(duration, maxDelay);
};

/**
 * Format timestamp for display
 * @param {Date} timestamp - Message timestamp
 * @returns {string} Formatted time
 */
export const formatTimestamp = (timestamp) => {
  const now = new Date();
  const diff = now - timestamp;

  // If message is from today, show time only
  if (diff < 24 * 60 * 60 * 1000) {
    return timestamp.toLocaleTimeString('es-PE', {
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  // If message is from this week, show day name
  if (diff < 7 * 24 * 60 * 60 * 1000) {
    return timestamp.toLocaleDateString('es-PE', {
      weekday: 'short'
    });
  }

  // Otherwise show full date
  return timestamp.toLocaleDateString('es-PE', {
    day: '2-digit',
    month: '2-digit'
  });
};

/**
 * Check if session should be reset
 * @param {Date} lastActivity - Last activity timestamp
 * @returns {boolean} Should reset
 */
export const shouldResetSession = (lastActivity) => {
  const resetThreshold = 30 * 60 * 1000; // 30 minutes
  return Date.now() - lastActivity > resetThreshold;
};
