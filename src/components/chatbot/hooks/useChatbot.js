/**
 * Custom hook for chatbot functionality
 * Manages chat state y logic following React best practices
 */

import { useState, useEffect, useCallback, useRef } from 'react';
import { MESSAGE_SENDERS } from '../types.js';
import { CHATBOT_CONFIG } from '../constants.js';
import {
  createMessage,
  detectIntent,
  getBotResponse,
  formatMessageText,
  hasAction,
  getActionUrl,
  isValidMessage,
  getTypingDuration,
  formatTimestamp,
  shouldResetSession
} from '../utils.js';

/**
 * Custom hook for chatbot functionality
 * @returns {Object} Chatbot state y methods
 */
export const useChatbot = () => {
  // State management
  const [messages, setMessages] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [sessionId, setSessionId] = useState(null);
  const [lastActivity, setLastActivity] = useState(Date.now());

  // Refs for cleanup
  const typingTimeoutRef = useRef(null);
  const sessionTimeoutRef = useRef(null);

  // Initialize session
  useEffect(() => {
    const newSessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    setSessionId(newSessionId);

    // Add welcome message
    const welcomeMessage = createMessage(
      CHATBOT_CONFIG.welcomeMessage || '¡Hola! 👋 ¿En qué puedo ayudarte?',
      MESSAGE_SENDERS.BOT,
      CHATBOT_CONFIG.quickActions.slice(0, 4)
    );
    setMessages([welcomeMessage]);

    return () => {
      // Cleanup timeouts
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current);
      }
      if (sessionTimeoutRef.current) {
        clearTimeout(sessionTimeoutRef.current);
      }
    };
  }, []);

  // Session timeout management
  useEffect(() => {
    const resetSession = () => {
      if (shouldResetSession(lastActivity)) {
        handleResetChat();
      }
    };

    sessionTimeoutRef.current = setTimeout(resetSession, 30 * 60 * 1000); // Check every 30 minutes

    return () => {
      if (sessionTimeoutRef.current) {
        clearTimeout(sessionTimeoutRef.current);
      }
    };
  }, [lastActivity]);

  /**
   * Add message to chat
   * @param {string} text - Message text
   * @param {string} sender - Message sender
   * @param {string[]} options - Quick reply options
   * @param {string} action - Message action
   */
  const addMessage = useCallback((text, sender, options = [], action = null) => {
    const newMessage = createMessage(text, sender, options, action);
    setMessages(prev => [...prev.slice(-CHATBOT_CONFIG.maxMessages + 1), newMessage]);
    setLastActivity(Date.now());
  }, []);

  /**
   * Handle user message
   * @param {string} userMessage - User input message
   */
  const handleUserMessage = useCallback((userMessage) => {
    if (!isValidMessage(userMessage)) {
      return;
    }

    // Add user message
    addMessage(userMessage, MESSAGE_SENDERS.USER);

    // Show typing indicator
    setIsTyping(true);

    // Simulate bot thinking time
    const typingDuration = getTypingDuration(userMessage);

    typingTimeoutRef.current = setTimeout(() => {
      // Detect intent y get response
      const intent = detectIntent(userMessage);
      const response = getBotResponse(intent, userMessage);

      // Add bot response
      addMessage(
        formatMessageText(response.text),
        MESSAGE_SENDERS.BOT,
        response.options,
        response.action
      );

      setIsTyping(false);
    }, typingDuration);
  }, [addMessage]);

  /**
   * Handle quick reply selection
   * @param {Object} option - Selected option
   */
  const handleQuickReply = useCallback((option) => {
    // Add user message with selected option
    addMessage(option.text, MESSAGE_SENDERS.USER);

    // Handle action if present
    if (option.action) {
      const actionUrl = getActionUrl({ action: option.action });
      if (actionUrl) {
        // Handle action (open WhatsApp, navigate, etc.)
        if (option.action === 'whatsapp' || option.action === 'human_agent') {
          window.open(actionUrl, '_blank');
        } else if (option.action === 'catalog') {
          // Navigate to catalog (would need router integration)
          window.location.href = actionUrl;
        }
      }
    }

    // Get bot response for the intent
    if (option.intent) {
      setIsTyping(true);

      const typingDuration = getTypingDuration(option.text);

      typingTimeoutRef.current = setTimeout(() => {
        const response = getBotResponse(option.intent);
        addMessage(
          formatMessageText(response.text),
          MESSAGE_SENDERS.BOT,
          response.options,
          response.action
        );
        setIsTyping(false);
      }, typingDuration);
    }
  }, [addMessage]);

  /**
   * Toggle chat window
   */
  const toggleChat = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  /**
   * Close chat window
   */
  const closeChat = useCallback(() => {
    setIsOpen(false);
  }, []);

  /**
   * Reset chat
   */
  const handleResetChat = useCallback(() => {
    const welcomeMessage = createMessage(
      CHATBOT_CONFIG.welcomeMessage || '¡Hola! 👋 ¿En qué puedo ayudarte?',
      MESSAGE_SENDERS.BOT,
      CHATBOT_CONFIG.quickActions.slice(0, 4)
    );
    setMessages([welcomeMessage]);
    setLastActivity(Date.now());
  }, []);

  /**
   * Send message to WhatsApp
   * @param {string} message - Message to send
   */
  const sendToWhatsApp = useCallback((message) => {
    const whatsappUrl = `https://wa.me/${CHATBOT_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  }, []);

  /**
   * Get unread messages count
   * @returns {number} Unread messages count
   */
  const getUnreadCount = useCallback(() => {
    if (isOpen) return 0;
    return messages.filter(msg => msg.sender === MESSAGE_SENDERS.BOT).length;
  }, [messages, isOpen]);

  return {
    // State
    messages,
    isOpen,
    isTyping,
    sessionId,

    // Actions
    handleUserMessage,
    handleQuickReply,
    toggleChat,
    closeChat,
    handleResetChat,
    sendToWhatsApp,

    // Getters
    getUnreadCount,

    // Utilities
    formatTimestamp,
    hasAction,
    getActionUrl
  };
};
