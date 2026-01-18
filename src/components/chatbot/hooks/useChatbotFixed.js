/**
 * Fixed Chatbot Hook
 * Simplified but functional version
 * Following working patterns without complex AI
 */

import { useState, useEffect, useCallback, useRef } from 'react';
import { MESSAGE_SENDERS } from '../types.js';
import { CHATBOT_CONFIG } from '../constants.js';
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
 * Fixed chatbot hook with working intelligence
 * @returns {Object} Chatbot state and methods
 */
export const useChatbotFixed = () => {
  // State management
  const [messages, setMessages] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [sessionId, setSessionId] = useState(null);
  const [lastActivity, setLastActivity] = useState(Date.now());
  const [isBusinessUser, setIsBusinessUser] = useState(false);
  
  // Refs for cleanup
  const typingTimeoutRef = useRef(null);
  const sessionTimeoutRef = useRef(null);

  // Initialize session
  useEffect(() => {
    const newSessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    setSessionId(newSessionId);
    
    // Add welcome message
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
   * Detect intent and business user
   * @param {string} message - User message
   * @returns {Object} Intent and entities
   */
  const detectIntent = (message) => {
    // Handle undefined/null messages
    if (!message || typeof message !== 'string') {
      return { intent: 'help', isBusiness: false };
    }
    
    const lowerMessage = message.toLowerCase().trim();
    
    // Detect business user
    const businessKeywords = [
      'por mayor', 'mayorista', 'distribuidor', 'revendedor', 
      'negocio', 'empresa', 'tienda', 'venta', 'compra',
      'stock', 'inventario', 'proveedor', 'fabrica'
    ];
    
    const isBusiness = businessKeywords.some(keyword => 
      lowerMessage.includes(keyword)
    );
    
    if (isBusiness && !isBusinessUser) {
      setIsBusinessUser(true);
    }
    
    // Simple intent detection
    if (lowerMessage.includes('envío') || lowerMessage.includes('envios') || 
        lowerMessage.includes('delivery') || lowerMessage.includes('entrega')) {
      return { intent: 'shipping', isBusiness };
    }
    
    if (lowerMessage.includes('garantía') || lowerMessage.includes('garantias') || 
        lowerMessage.includes('devolución') || lowerMessage.includes('reclamo')) {
      return { intent: 'warranty', isBusiness };
    }
    
    if (lowerMessage.includes('precio') || lowerMessage.includes('precios') || 
        lowerMessage.includes('costo') || lowerMessage.includes('cuánto')) {
      return { intent: 'pricing', isBusiness };
    }
    
    if (lowerMessage.includes('catálogo') || lowerMessage.includes('catalogo') || 
        lowerMessage.includes('productos') || lowerMessage.includes('colchones')) {
      return { intent: 'catalog', isBusiness };
    }
    
    if (lowerMessage.includes('contactar') || lowerMessage.includes('contacto') || 
        lowerMessage.includes('whatsapp') || lowerMessage.includes('llamar')) {
      return { intent: 'contact', isBusiness };
    }
    
    return { intent: 'help', isBusiness };
  };

  /**
   * Get response based on intent and context
   * @param {string} intent - Detected intent
   * @param {boolean} isBusiness - Whether user is business
   * @returns {Object} Response object
   */
  const getResponse = (intent, isBusiness) => {
    const responses = {
      // Business user responses
      business: {
        shipping: {
          text: '🚚 Para clientes empresariales ofrecemos envíos especializados:\n\n• Lima Metropolitana: 24-48h (Gratis)\n• Provincias: 3-5 días\n• Entrega directa de fábrica\n\n¿Qué volumen de productos necesitas?',
          options: ['📋 Ver catálogo mayorista', '💰 Cotizar envío', '📞 Hablar con ventas']
        },
        warranty: {
          text: '🛡️ Garantía empresarial:\n\n• Colchones de Espuma: 5 años\n• Colchones de Resortes: 10 años\n• Tarimas y Cunas: 3 años\n• Soporte prioritario\n\n¿Qué tipo de productos necesitas?',
          options: ['📋 Ver especificaciones', '📞 Contactar soporte', '📋 Ver catálogo']
        },
        pricing: {
          text: '💰 Precios mayoristas disponibles:\n\n• Descuentos por volumen\n• Precios especiales B2B\n• Términos de pago flexibles\n\n¿Qué tipo de productos te interesan?',
          options: ['📋 Ver catálogo mayorista', '📞 Hablar con ventas', '💰 Solicitar cotización']
        },
        catalog: {
          text: '📋 Catálogo empresarial:\n\n• Colchones de Espuma\n• Colchones de Resortes\n• Tarimas y Bases\n• Cunas y Almohadas\n\n¿Qué categoría te interesa?',
          options: [
            { text: '📋 Ver catálogo completo', intent: 'catalog_full', action: 'whatsapp_catalog' },
            { text: '💰 Precios mayoristas', intent: 'pricing' },
            { text: '📞 Hablar con ventas', intent: 'contact' }
          ]
        },
        contact: {
          text: '📞 Contacto empresarial:\n\n• WhatsApp: (01) 989 223 448\n• Email: ventas@suenodorado.pe\n• Atención prioritaria\n\n¿Prefieres que te contacte un asesor?',
          options: [
            { text: '📱 WhatsApp empresarial', intent: 'contact', action: 'whatsapp_direct' },
            { text: '📧 Enviar email', intent: 'contact', action: 'email_direct' },
            { text: '📞 Llamar ahora', intent: 'contact', action: 'call' }
          ]
        },
        help: {
          text: '💼 Soy tu asistente empresarial. Puedo ayudarte con:\n\n📋 Catálogo mayorista\n💰 Precios B2B\n🚚 Envíos especiales\n🛡️ Garantía extendida\n\n¿Qué necesitas?',
          options: [
            { text: '📋 Ver catálogo mayorista', intent: 'catalog' },
            { text: '💰 Precios mayoristas', intent: 'pricing' },
            { text: '🚚 Envíos', intent: 'shipping' },
            { text: '🛡️ Garantía', intent: 'warranty' }
          ]
        }
      },
      
      // Regular customer responses
      regular: {
        shipping: {
          text: '🚚 Realizamos envíos a todo Perú:\n\n• Lima Metropolitana: 24-48h (Gratis)\n• Provincias: 3-5 días\n• Entrega directa de fábrica\n\n¿A dónde te gustaría recibir tu pedido?',
          options: [
            { text: '📋 Ver productos', intent: 'catalog' },
            { text: '🚚 Calcular envío', intent: 'contact', action: 'whatsapp_direct' },
            { text: '📞 Contactar', intent: 'contact' }
          ]
        },
        warranty: {
          text: '🛡️ CONDICIONES DE GARANTÍA - SUEÑO DORADO\n\n✅ COLCHONES DE ESPUMA:\n• 5 años de garantía total\n• Cobertura contra hundimientos > 3cm\n• Reparación o reemplazo sin costo\n\n✅ COLCHONES DE RESORTES:\n• 10 años de garantía total\n• Cobertura contra roturas y deformaciones\n• Mantenimiento incluido primeros 2 años\n\n✅ TARIMAS Y BASES:\n• 3 años de garantía estructural\n• Reparación por daños de fabricación\n\n⚠️ EXCLUSIONES:\n• Daños por mal uso o humedad\n• Roturas por peso excedido\n• Desgaste normal del uso\n\n📋 ¿Necesitas información específica de algún producto?',
          options: [
            { text: '📋 Ver catálogo completo', intent: 'catalog_full', action: 'whatsapp_catalog' },
            { text: '📞 Contactar soporte', intent: 'contact', action: 'whatsapp_direct' },
            { text: '💰 Ver precios', intent: 'pricing' }
          ]
        },
        pricing: {
          text: '💰 PRECIOS SUEÑO DORADO - CALIDAD PREMIUM\n\n🛏️ COLCHONES DE ESPUMA:\n• 1 Plaza: S/. 399\n• 1.5 Plazas: S/. 499\n• 2 Plazas: S/. 599\n• Queen: S/. 699\n• King: S/. 799\n\n🛏️ COLCHONES DE RESORTES:\n• 1 Plaza: S/. 449\n• 1.5 Plazas: S/. 549\n• 2 Plazas: S/. 649\n• Queen: S/. 749\n• King: S/. 849\n\n🚚 ENVÍO GRATIS en compras mayores a S/. 500 (Lima)\n\n📋 ¿Quieres ver catálogo completo o cotizar algo específico?',
          options: [
            { text: '📋 Ver catálogo completo', intent: 'catalog_full', action: 'whatsapp_catalog' },
            { text: '💰 Solicitar cotización', intent: 'contact', action: 'whatsapp_direct' },
            { text: '🚚 Calcular envío', intent: 'contact', action: 'whatsapp_direct' }
          ]
        },
        catalog: {
          text: '📋 CATÁLOGO SUEÑO DORADO - ELIGE TU CATEGORÍA\n\n🛏️ COLCHONES DE ESPUMA:\n• Ideales para alergias\n• Silenciosos y duraderos\n• Precios desde S/. 399\n\n🛏️ COLCHONES DE RESORTES:\n• Máxima ventilación\n• Soporte ortopédico\n• Precios desde S/. 449\n\n🛏️ BASES Y TARIMAS:\n• Complementos perfectos\n• Garantía estructural\n• Precios desde S/. 199\n\n👶 CUNAS Y ACCESORIOS:\n• Seguridad para bebés\n• Almohadas ergonómicas\n• Precios desde S/. 89\n\n🎯 ¿Qué categoría te interesa explorar?',
          options: [
            { text: '🛏️ Colchones de Espuma', intent: 'contact', action: 'whatsapp_direct' },
            { text: '🛏️ Colchones de Resortes', intent: 'contact', action: 'whatsapp_direct' },
            { text: '🛏️ Bases y Tarimas', intent: 'contact', action: 'whatsapp_direct' },
            { text: '👶 Cunas y Accesorios', intent: 'contact', action: 'whatsapp_direct' }
          ]
        },
        contact: {
          text: '📞 Puedes contactarnos de varias formas:\n\n📱 WhatsApp: (01) 989 223 448\n📧 Email: hola@suenodorado.pe\n🌐 Web: www.suenodorado.pe\n\n¿Prefieres hablar ahora por WhatsApp?',
          options: [
            { text: '📱 Hablar por WhatsApp', intent: 'contact', action: 'whatsapp_direct' },
            { text: '📧 Enviar email', intent: 'contact', action: 'email_direct' },
            { text: '📋 Ver horarios', intent: 'contact', action: 'hours' }
          ]
        },
        help: {
          text: 'Puedo ayudarte con:\n\n📋 Información de productos\n💰 Precios y ofertas\n🚚 Envíos y entregas\n🛡️ Garantías\n📞 Contacto\n\n¿Qué necesitas saber?',
          options: [
            { text: '📋 Ver productos', intent: 'catalog' },
            { text: '💰 Precios', intent: 'pricing' },
            { text: '🚚 Envíos', intent: 'shipping' },
            { text: '🛡️ Garantía', intent: 'warranty' },
            { text: '📞 Contactar', intent: 'contact' }
          ]
        }
      }
    };
    
    const userType = isBusiness ? 'business' : 'regular';
    return responses[userType][intent] || responses[userType].help;
  };

  /**
   * Generate contextual message for WhatsApp
   * @param {string} userRequest - User's selection
   * @param {boolean} isBusiness - Whether user is business
   * @returns {string} Contextual WhatsApp message
   */
  const generateContextualMessage = (userRequest, isBusiness) => {
    const businessContext = isBusiness ? ' (Cliente Empresarial)' : '(Cliente Particular)';
    
    const contextualMessages = {
      '📱 Hablar por WhatsApp': `Hola, estoy interesado en sus productos de Sueño Dorado${businessContext}. Me gustaría recibir más información.`,
      '📧 Enviar email': `Hola, quisiera recibir información sobre sus productos de Sueño Dorado${businessContext}.`,
      '🚚 Calcular envío': `Hola, necesito calcular el costo de envío para productos de Sueño Dorado${businessContext}.`,
      '📞 Contactar soporte': `Hola, necesito soporte técnico para mis productos de Sueño Dorado${businessContext}.`,
      '💰 Ver ofertas': `Hola, me gustaría conocer las ofertas actuales de Sueño Dorado${businessContext}.`,
      '📋 Ver condiciones': `Hola, quisiera conocer las condiciones de garantía de Sueño Dorado${businessContext}.`,
      '📞 Llamar ahora': `Hola, solicito información sobre productos de Sueño Dorado${businessContext}.`
    };
    
    return contextualMessages[userRequest] || `Hola, estoy interesado en productos de Sueño Dorado${businessContext}.`;
  };

  /**
   * Generate email body with context
   * @param {string} userRequest - User's selection
   * @param {boolean} isBusiness - Whether user is business
   * @returns {string} Email body
   */
  const generateEmailBody = (userRequest, isBusiness) => {
    const businessContext = isBusiness ? 'Soy un cliente empresarial interesado en:' : 'Soy un cliente particular interesado en:';
    
    return `${businessContext}

${userRequest}

Por favor, envíenme información detallada sobre sus productos y servicios.

Datos de contacto:
[Nombre]
[Teléfono]
[Email]

Gracias,
Sueño Dorado - ${isBusiness ? 'Ventas Empresariales' : 'Atención al Cliente'}
www.suenodorado.pe`;
  };

  /**
   * Generate hours message
   * @returns {string} Hours information
   */
  const generateHoursMessage = () => {
    return `🕐 HORARIOS DE ATENCIÓN - SUEÑO DORADO

📅 Lunes a Viernes: 9:00 AM - 7:00 PM
📅 Sábados: 9:00 AM - 6:00 PM  
📅 Domingos: 10:00 AM - 5:00 PM

🏢 TIENDA FÍSICA:
• Dirección: [Tu dirección aquí]
• Atención personalizada
• Prueba de productos
• Asesoramiento profesional

📱 ATENCIÓN DIGITAL:
• WhatsApp: 24/7 (respuestas en minutos)
• Email: respuestas en 2-4 horas
• Web chat: disponible siempre

🚚 ENTREGAS:
• Programación flexible
• Entrega el mismo día (Lima)
• Seguimiento en tiempo real

¿En qué puedo ayudarte hoy?`;
  };

  /**
   * Generate structured catalog message for WhatsApp
   * @param {boolean} isBusiness - Whether user is business
   * @returns {string} Formatted catalog message
   */
  const generateCatalogMessage = (isBusiness) => {
    if (isBusiness) {
      return `📋 CATÁLOGO EMPRESARIAL - SUEÑO DORADO 💼

🛏️ COLCHONES DE ESPUMA:
• Colchón Espuma 1 Plaza: S/. 399 c/u (10+ unidades: S/. 349)
• Colchón Espuma 1.5 Plazas: S/. 499 c/u (10+ unidades: S/. 449)
• Colchón Espuma 2 Plazas: S/. 599 c/u (10+ unidades: S/. 549)
• Colchón Espuma Queen: S/. 699 c/u (10+ unidades: S/. 629)
• Colchón Espuma King: S/. 799 c/u (10+ unidades: S/. 719)

🛏️ COLCHONES DE RESORTES:
• Colchón Resortes 1 Plaza: S/. 449 c/u (10+ unidades: S/. 399)
• Colchón Resortes 1.5 Plazas: S/. 549 c/u (10+ unidades: S/. 489)
• Colchón Resortes 2 Plazas: S/. 649 c/u (10+ unidades: S/. 579)
• Colchón Resortes Queen: S/. 749 c/u (10+ unidades: S/. 669)
• Colchón Resortes King: S/. 849 c/u (10+ unidades: S/. 759)

🛏️ TARIMAS Y BASES:
• Tarima Simple: S/. 199 c/u (10+ unidades: S/. 169)
• Tarima Doble: S/. 299 c/u (10+ unidades: S/. 259)
• Base con Cajones: S/. 399 c/u (10+ unidades: S/. 349)

🛏️ CUNAS Y ALMOHADAS:
• Cuna Infantil: S/. 599 c/u (5+ unidades: S/. 549)
• Almohada Premium: S/. 89 c/u (20+ unidades: S/. 69)

🚚 ENVÍOS:
• Lima Metropolitana: GRATIS en compras mayores a S/. 2,000
• Provincias: Coordinar según volumen

💰 FORMAS DE PAGO:
• Transferencia bancaria
• Yape/Plin
• Pago contra entrega (Lima)
• Crédito (aprobación sujeta)

📞 CONTÁCTANOS PARA COTIZAR:
• WhatsApp: (01) 989 223 448
• Email: ventas@suenodorado.pe
• Web: www.suenodorado.pe

---
*Precios sujetos a cambio sin previo aviso. Válidos hasta fin de mes.*`;
    } else {
      return `📋 CATÁLOGO SUEÑO DORADO - PREMIUM 🛏️

🛏️ COLCHONES DE ESPUMA:
• Colchón Espuma 1 Plaza: S/. 399
• Colchón Espuma 1.5 Plazas: S/. 499  
• Colchón Espuma 2 Plazas: S/. 599
• Colchón Espuma Queen: S/. 699
• Colchón Espuma King: S/. 799

🛏️ COLCHONES DE RESORTES:
• Colchón Resortes 1 Plaza: S/. 449
• Colchón Resortes 1.5 Plazas: S/. 549
• Colchón Resortes 2 Plazas: S/. 649
• Colchón Resortes Queen: S/. 749
• Colchón Resortes King: S/. 849

🛏️ TARIMAS Y BASES:
• Tarima Simple: S/. 199
• Tarima Doble: S/. 299
• Base con Cajones: S/. 399

🛏️ CUNAS Y ALMOHADAS:
• Cuna Infantil: S/. 599
• Almohada Premium: S/. 89

🚚 ENVÍOS:
• Lima Metropolitana: GRATIS en compras mayores a S/. 500
• Provincias: S/. 50 - S/. 100 según zona

💰 FORMAS DE PAGO:
• Transferencia bancaria
• Yape/Plin
• Tarjeta de crédito/débito
• Pago contra entrega (Lima)

🛡️ GARANTÍA:
• Colchones de Espuma: 5 años
• Colchones de Resortes: 10 años
• Tarimas y Bases: 3 años

📞 CONTÁCTANOS:
• WhatsApp: (01) 989 223 448
• Email: hola@suenodorado.pe
• Web: www.suenodorado.pe

---
*Visítanos en nuestra tienda o solicita entrega a domicilio.*`;
    }
  };

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
   * Handle user message with working intelligence
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
      // Detect intent and get response
      const { intent, isBusiness } = detectIntent(userMessage);
      const response = getResponse(intent, isBusiness);

      // Add bot response
      addMessage(
        formatMessageText(response.text),
        MESSAGE_SENDERS.BOT,
        response.options,
        response.action
      );

      setIsTyping(false);
    }, typingDuration);
  }, [addMessage, isBusinessUser]);

  /**
   * Handle quick reply selection
   * @param {Object} option - Selected option
   */
  const handleQuickReply = useCallback((option) => {
    // Handle undefined option
    if (!option) return;
    
    // Get option text safely
    const optionText = option.text || option || '';
    
    // Add user message with selected option
    addMessage(optionText, MESSAGE_SENDERS.USER);

    // Handle action if present
    if (option.action) {
      if (option.action === 'whatsapp_catalog') {
        // Send structured catalog to WhatsApp
        const catalogMessage = generateCatalogMessage(isBusinessUser);
        sendToWhatsApp(catalogMessage);
        return; // Don't continue processing
      }
      
      if (option.action === 'whatsapp_direct') {
        // Send contextual message to WhatsApp
        const contextualMessage = generateContextualMessage(optionText, isBusinessUser);
        sendToWhatsApp(contextualMessage);
        return; // Don't continue processing
      }
      
      if (option.action === 'email_direct') {
        // Open email client with context
        const emailSubject = isBusinessUser ? 'Consulta Empresarial - Sueño Dorado' : 'Consulta - Sueño Dorado';
        const emailBody = generateEmailBody(optionText, isBusinessUser);
        window.location.href = `mailto:hola@suenodorado.pe?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
        return; // Don't continue processing
      }
      
      if (option.action === 'call') {
        // Open phone dialer
        window.location.href = 'tel:+51989223448';
        return; // Don't continue processing
      }
      
      if (option.action === 'hours') {
        // Show hours message
        const hoursMessage = generateHoursMessage();
        addMessage(
          formatMessageText(hoursMessage),
          MESSAGE_SENDERS.BOT,
          [{ text: '📞 Contactar', intent: 'contact', action: 'whatsapp_direct' }]
        );
        return; // Don't continue processing
      }
      
      const actionUrl = getActionUrl({ action: option.action });
      if (actionUrl) {
        if (option.action === 'whatsapp' || option.action === 'human_agent') {
          window.open(actionUrl, '_blank');
        } else if (option.action === 'catalog') {
          window.location.href = actionUrl;
        }
      }
    }

    // Get response for the intent
    if (option.intent) {
      setIsTyping(true);
      
      const typingDuration = getTypingDuration(optionText) * 0.6;
      
      typingTimeoutRef.current = setTimeout(() => {
        const response = getResponse(option.intent, isBusinessUser);
        
        addMessage(
          formatMessageText(response.text),
          MESSAGE_SENDERS.BOT,
          response.options,
          response.action
        );
        setIsTyping(false);
      }, typingDuration);
    } else {
      // Handle text-based quick replies
      const { intent } = detectIntent(optionText);
      setIsTyping(true);
      
      const typingDuration = getTypingDuration(optionText) * 0.6;
      
      typingTimeoutRef.current = setTimeout(() => {
        const response = getResponse(intent, isBusinessUser);
        
        addMessage(
          formatMessageText(response.text),
          MESSAGE_SENDERS.BOT,
          response.options,
          response.action
        );
        setIsTyping(false);
      }, typingDuration);
    }
  }, [addMessage, isBusinessUser]);

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
    setIsBusinessUser(false);
    
    const welcomeMessage = createMessage(
      '¡Hola! 👋 Soy tu asistente experto de Sueño Dorado. ¿En qué puedo ayudarte hoy?',
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
    const businessContext = isBusinessUser ? 
      ' (Cliente Empresarial)' : '(Cliente Particular)';
    
    const enhancedMessage = `${message}${businessContext}\n\n---\n*Sueño Dorado - Fábrica de Colchones Premium*`;
    
    const whatsappUrl = `https://wa.me/${CHATBOT_CONFIG.whatsappNumber}?text=${encodeURIComponent(enhancedMessage)}`;
    window.open(whatsappUrl, '_blank');
  }, [isBusinessUser]);

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

export default useChatbotFixed;
