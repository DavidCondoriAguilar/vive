/**
 * Expert Chatbot Hook
 * Advanced intelligence with context awareness and conversation flow management
 * Following enterprise-grade chatbot patterns
 */

import { useState, useEffect, useCallback, useRef } from 'react';
import { MESSAGE_SENDERS } from '../types.js';
import { CHATBOT_CONFIG } from '../constants.js';
import ConversationContext from '../intelligence/contextManager.js';
import NLPProcessor from '../intelligence/nlpProcessor.js';
import ResponseGenerator from '../intelligence/responseGenerator.js';
import ConversationFlow from '../intelligence/conversationFlow.js';
import {
  createMessage,
  formatMessageText,
  hasAction,
  getActionUrl,
  isValidMessage,
  getTypingDuration,
  formatTimestamp,
  shouldResetSession
} from '../utils.js';

/**
 * Expert chatbot hook with advanced intelligence
 * @returns {Object} Chatbot state and methods
 */
export const useChatbotExpert = () => {
  // State management
  const [messages, setMessages] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [sessionId, setSessionId] = useState(null);
  const [lastActivity, setLastActivity] = useState(Date.now());
  
  // Intelligence components
  const conversationContext = useRef(new ConversationContext());
  const nlpProcessor = useRef(new NLPProcessor());
  const responseGenerator = useRef(new ResponseGenerator());
  const conversationFlow = useRef(new ConversationFlow());
  
  // Refs for cleanup
  const typingTimeoutRef = useRef(null);
  const sessionTimeoutRef = useRef(null);

  // Initialize session
  useEffect(() => {
    const newSessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    setSessionId(newSessionId);
    
    // Add intelligent welcome message
    const welcomeMessage = createMessage(
      '¡Hola! 👋 Soy tu asistente experto de Sueño Dorado. ¿En qué puedo ayudarte hoy?',
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
   * @param {string[]} [options] - Quick reply options
   * @param {string} [action] - Message action
   */
  const addMessage = useCallback((text, sender, options = [], action = null) => {
    const newMessage = createMessage(text, sender, options, action);
    setMessages(prev => [...prev.slice(-CHATBOT_CONFIG.maxMessages + 1), newMessage]);
    setLastActivity(Date.now());
  }, []);

  /**
   * Handle user message with expert intelligence
   * @param {string} userMessage - User input message
   */
  const handleUserMessage = useCallback((userMessage) => {
    if (!isValidMessage(userMessage)) {
      return;
    }

    // Add user message
    addMessage(userMessage, MESSAGE_SENDERS.USER);

    // Update conversation context with intelligence
    const intent = nlpProcessor.current.detectIntent(userMessage, conversationContext.current);
    const entities = nlpProcessor.current.extractEntities(userMessage);
    conversationContext.current.updateContext(userMessage, intent, entities);

    // Update conversation flow with state management
    const flowUpdate = conversationFlow.current.updateState(userMessage, intent, entities);

    // Show typing indicator with intelligent timing
    setIsTyping(true);
    
    // Calculate intelligent typing duration
    const baseDuration = getTypingDuration(userMessage);
    const contextModifier = flowUpdate.shouldEscalate ? 0.7 : 1.0;
    const intelligenceBonus = conversationContext.current.userProfile.isBusiness ? 0.8 : 1.0;
    const typingDuration = baseDuration * contextModifier * intelligenceBonus;
    
    typingTimeoutRef.current = setTimeout(() => {
      // Generate intelligent response with context awareness
        const response = responseGenerator.current.generateResponseWithConfidence(
          intent, 
          0.9, // High confidence
          entities, 
          conversationContext.current
        );

        // Add bot response
        addMessage(
          formatMessageText(response.text || response),
          MESSAGE_SENDERS.BOT,
          response.options || [],
          response.action
        );

      setIsTyping(false);

      // Intelligent escalation logic
      if (flowUpdate.shouldEscalate) {
        setTimeout(() => {
          const escalationResponse = {
            text: 'Entendido. Te conectaré con un especialista humano. Por favor, espera un momento...',
            options: [],
            action: 'human_agent'
          };
          addMessage(formatMessageText(escalationResponse.text), MESSAGE_SENDERS.BOT, escalationResponse.options, escalationResponse.action);
        }, 1000);
      }
    }, typingDuration);
  }, [addMessage]);

  /**
   * Handle quick reply selection with intelligent routing
   * @param {Object} option - Selected option
   */
  const handleQuickReply = useCallback((option) => {
    // Add user message with selected option
    addMessage(option.text, MESSAGE_SENDERS.USER);

    // Smart action handling
    if (option.action) {
      const actionUrl = getActionUrl({ action: option.action });
      if (actionUrl) {
        if (option.action === 'whatsapp' || option.action === 'human_agent') {
          window.open(actionUrl, '_blank');
        } else if (option.action === 'catalog') {
          window.location.href = actionUrl;
        }
      }
    }

    // Intelligent response generation for quick replies
    if (option.intent) {
      setIsTyping(true);
      
      // Faster response for quick replies
      const typingDuration = getTypingDuration(option.text) * 0.6;
      
      typingTimeoutRef.current = setTimeout(() => {
        const response = responseGenerator.current.generateResponse(
          option.intent,
          [],
          conversationContext.current
        );
        
        addMessage(
          formatMessageText(response.text || response),
          MESSAGE_SENDERS.BOT,
          response.options || [],
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
   * Reset chat with context preservation
   */
  const handleResetChat = useCallback(() => {
    conversationFlow.current.reset();
    conversationContext.current.reset();
    
    // Intelligent welcome message based on time of day
    const hour = new Date().getHours();
    let welcomeMessage = '¡Hola! 👋 Soy tu asistente experto de Sueño Dorado. ¿En qué puedo ayudarte hoy?';
    
    if (hour >= 6 && hour < 12) {
      welcomeMessage = '¡Buenos días! 👋 Soy tu asistente experto de Sueño Dorado. ¿En qué puedo ayudarte hoy?';
    } else if (hour >= 12 && hour < 18) {
      welcomeMessage = '¡Buenas tardes! 👋 Soy tu asistente experto de Sueño Dorado. ¿En qué puedo ayudarte hoy?';
    } else if (hour >= 18 && hour < 22) {
      welcomeMessage = '¡Buenas noches! 👋 Soy tu asistente experto de Sueño Dorado. ¿En qué puedo ayudarte hoy?';
    }
    
    const welcomeMsg = createMessage(
      welcomeMessage,
      MESSAGE_SENDERS.BOT,
      CHATBOT_CONFIG.quickActions.slice(0, 4)
    );
    setMessages([welcomeMsg]);
    setLastActivity(Date.now());
  }, []);

  /**
   * Send message to WhatsApp with business context
   * @param {string} message - Message to send
   */
  const sendToWhatsApp = useCallback((message) => {
    const context = conversationContext.current.getContextSummary();
    const businessContext = context.userProfile.isBusiness ? 
      '(Cliente Empresarial)' : '(Cliente Particular)';
    
    const enhancedMessage = `${message}${businessContext}\n\n---\n*Sueño Dorado - Fábrica de Colchones Premium*`;
    
    const whatsappUrl = `https://wa.me/${CHATBOT_CONFIG.whatsappNumber}?text=${encodeURIComponent(enhancedMessage)}`;
    window.open(whatsappUrl, '_blank');
  }, []);

  /**
   * Get unread messages count with intelligence
   * @returns {number} Unread messages count
   */
  const getUnreadCount = useCallback(() => {
    if (conversationFlow.current.shouldEndConversation()) {
      return 0; // End conversation
    }
    if (isOpen) return 0; // Chat is open
    return messages.filter(msg => msg.sender === MESSAGE_SENDERS.BOT).length;
  }, [messages, isOpen]);

  /**
   * Get conversation insights for analytics
   * @returns {Object} Conversation insights
   */
  const getInsights = useCallback(() => {
    return {
      metrics: conversationFlow.current.getMetrics(),
      context: conversationContext.current.getContextSummary(),
      flow: conversationFlow.current.getCurrentFlow(),
      nlp: {
        lastIntent: conversationContext.current.userIntent,
        confidence: 0.9,
        entities: conversationContext.current.entities
      },
      intelligence: {
        contextAware: true,
        contextualResponses: true,
        flowManagement: true,
        businessDetection: true
      }
    };
  }, []);

  /**
   * Get conversation suggestions based on context
   * @returns {Array} Suggested actions
   */
  const getSuggestions = useCallback(() => {
    const context = conversationContext.current.getContextSummary();
    const flow = conversationFlow.current.getCurrentFlow();
    
    const suggestions = [];
    
    // Business user suggestions
    if (context.userProfile.isBusiness) {
      suggestions.push(
        'Ver catálogo mayorista',
        'Cotizar productos',
        'Hablar con ventas'
      );
      
      if (context.conversationStage === 'exploration') {
        suggestions.push(
          'Especificaciones técnicas',
          'Precios por volumen',
          'Garantía empresarial'
        );
      }
    } else {
      // Regular customer suggestions
      suggestions.push(
        'Ver productos',
        'Conocer garantía',
        'Envíos a domicilio'
      );
      
      if (context.conversationStage === 'exploration') {
        suggestions.push(
          'Comparar modelos',
          'Probar en tienda',
          'Ver opiniones'
        );
      }
    }
    
    return suggestions;
  }, []);

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
    getInsights,
    getSuggestions,
    
    // Utilities
    formatTimestamp,
    hasAction,
    getActionUrl
  };
};

export default useChatbotExpert;
