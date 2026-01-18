/**
 * Chatbot module exports
 * Clean API for external consumption
 */

// Main component export
export { default } from './index.jsx';

// Individual component exports for testing or advanced usage
export { default as ChatButton } from './components/ChatButton.jsx';
export { default as ChatWindow } from './components/ChatWindow.jsx';
export { default as MessageBubble } from './components/MessageBubble.jsx';
export { default as TypingIndicator } from './components/TypingIndicator.jsx';

// Hook exports
export { useChatbot } from './hooks/useChatbot.js';

// Utility exports
export * from './utils.js';
export * from './types.js';
export * from './constants.js';
