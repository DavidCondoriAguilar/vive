/**
 * Type definitions for Chatbot module
 * Following TypeScript-like JSDoc conventions for better maintainability
 */

/**
 * @typedef {Object} Message
 * @property {string} id - Unique message identifier
 * @property {string} text - Message content
 * @property {'user'|'bot'} sender - Message sender type
 * @property {Date} timestamp - Message creation time
 * @property {string[]} [options] - Quick reply options for bot messages
 * @property {string} [action] - Action type for bot messages (whatsapp, catalog, etc.)
 * @property {Object} [metadata] - Additional message metadata
 */

/**
 * @typedef {Object} ChatSession
 * @property {string} id - Session identifier
 * @property {Message[]} messages - Message history
 * @property {Date} createdAt - Session creation time
 * @property {Date} lastActivity - Last interaction time
 * @property {Object} context - Current conversation context
 */

/**
 * @typedef {Object} BotResponse
 * @property {string} text - Response text
 * @property {string[]} [options] - Quick reply options
 * @property {string} [action] - Action to trigger
 * @property {Object} [metadata] - Response metadata
 */

/**
 * @typedef {Object} ChatbotConfig
 * @property {string} welcomeMessage - Initial greeting message
 * @property {string[]} quickActions - Default quick actions
 * @property {Object} intents - Bot intent configurations
 * @property {Object} responses - Predefined responses
 */

export const MESSAGE_SENDERS = {
  USER: 'user',
  BOT: 'bot'
};

export const MESSAGE_ACTIONS = {
  WHATSAPP: 'whatsapp',
  CATALOG: 'catalog',
  HUMAN_AGENT: 'human_agent',
  CLEAR_CHAT: 'clear_chat'
};

export const CHATBOT_INTENTS = {
  GREETING: 'greeting',
  PRODUCT_INFO: 'product_info',
  PRICING: 'pricing',
  SHIPPING: 'shipping',
  WARRANTY: 'warranty',
  CONTACT: 'contact',
  CATALOG: 'catalog',
  HELP: 'help',
  FALLBACK: 'fallback'
};
