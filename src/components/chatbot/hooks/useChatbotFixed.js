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
 * @returns {Object} Chatbot state y methods
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
   * Detect intent y business user with improved NLP
   * @param {string} message - User message
   * @returns {Object} Intent y entities
   */
  const detectIntent = (message) => {
    // Handle undefined/null messages
    if (!message || typeof message !== 'string') {
      return { intent: 'help', isBusiness: false };
    }

    // Normalize text: lowercase, remove accents, trim
    const normalized = message
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '') // Remove accents
      .trim();

    // Detect business user
    const businessKeywords = [
      'por mayor', 'mayorista', 'distribuidor', 'revendedor',
      'negocio', 'empresa', 'tienda', 'venta', 'compra',
      'stock', 'inventario', 'proveedor', 'fabrica', 'fabrica',
      'volumen', 'cantidad grande', 'lote'
    ];

    const isBusiness = businessKeywords.some(keyword =>
      normalized.includes(keyword)
    );

    if (isBusiness && !isBusinessUser) {
      setIsBusinessUser(true);
    }

    // Synonyms map for better intent detection
    const synonyms = {
      pricing: ['precio', 'precios', 'costo', 'cuanto', 'cuanta', 'valor', 'tarifa', 'caro', 'barato'],
      offers: ['oferta', 'ofertas', 'promocion', 'promociones', 'descuento', 'descuentos', 'liquidacion'],
      foam: ['espuma', 'foam', 'esponja', 'poliseda', 'resilense'],
      springs: ['resorte', 'resortes', 'sprint', 'spring', 'esorte', 'esortes'],
      catalog: ['catalogo', 'productos', 'colchones', 'colchon', 'item', 'modelos', 'ver todo'],
      contact: ['contactar', 'contacto', 'whatsapp', 'llamar', 'llamada', 'comunicarse', 'numero', 'telefono', 'email', 'escribir'],
      payment: ['pago', 'pagos', 'metodo pago', 'tarjeta', 'efectivo', 'transferencia', 'yape', 'plin'],
      shipping: ['envio', 'envios', 'delivery', 'entrega', 'donde', 'ubicacion', 'tiempo', 'demora'],
      warranty: ['garantia', 'garantias', 'asegurar', 'seguro', 'respaldo', 'calidad']
    };

    // Detect intent by checking synonyms
    for (const [intent, keywords] of Object.entries(synonyms)) {
      if (keywords.some(keyword => normalized.includes(keyword))) {
        return { intent, isBusiness };
      }
    }

    return { intent: 'help', isBusiness };
  };

  /**
   * Get response based on intent y context
   * @param {string} intent - Detected intent
   * @param {boolean} isBusiness - Whether user is business
   * @returns {Object} Response object
   */
  const getResponse = (intent, isBusiness) => {
    const responses = {
      // Business user responses
      business: {
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
        shipping: {
          text: '🚚 LOGÍSTICA MAYORISTA - SUEÑO DORADO\n\nContamos con una cadena de suministro optimizada para negocios:\n\n📍 **FLETES:** Convenios con agencias de carga pesada a todo el país.\n📍 **VOLUMEN:** Despachos programados para grandes pedidos.\n📍 **PICK-UP:** Recojo directo de fabrica sin esperas.\n\n¿Deseas coordinar la logística de un pedido específico?',
          options: [
            { text: '📱 Coordinar Logística', intent: 'contact', action: 'whatsapp_direct' },
            { text: '💰 Ver precios por volumen', intent: 'pricing' },
            { text: '🏠 Menú Empresarial', intent: 'help' }
          ]
        },
        pricing: {
          text: '💰 COTIZACIONES B2B - SUEÑO DORADO\n\nOfrecemos la mejor rentabilidad del mercado para distribuidores:\n\n• Escalas de descuento según volumen (Lotes 10, 50, 100+).\n• Precios puestos en agencia o en fabrica.\n• Catálogo técnico con precios de lista y descuentos.\n\n¿Te gustaría recibir nuestra lista de precios actualizada?',
          options: [
            { text: '📱 Solicitar lista de precios', intent: 'contact', action: 'whatsapp_direct' },
            { text: '📋 Ver productos B2B', intent: 'catalog' },
            { text: '🏠 Menú Empresarial', intent: 'help' }
          ]
        },
        warranty: {
          text: '🛡️ RESPALDO INDUSTRIAL SUEÑO DORADO\n\nGarantizamos que tus clientes reciban calidad certificada:\n\n• Garantía directa de fabrica (7 años Línea Siempre).\n• Soporte técnico para cambios por falla de fabricación.\n• Capacitación técnica sobre materiales (densidad/resortes).\n\n¿Necesitas información técnica para tu fuerza de ventas?',
          options: [
            { text: '📱 Solicitar taller técnico', intent: 'contact', action: 'whatsapp_direct' },
            { text: '🏠 Menú Empresarial', intent: 'help' }
          ]
        },
        help: {
          text: '💼 Soy tu asistente empresarial. Puedo ayudarte con:\n\n📋 Catálogo mayorista para socios\n💰 Cotizaciones por volumen\n🚚 Envíos logísticos especiales\n🛡️ Garantía industrial\n\n¿Qué necesitas?',
          options: [
            { text: '📋 Ver catálogo mayorista', intent: 'catalog' },
            { text: '💰 Consultar precios B2B', intent: 'pricing' },
            { text: '🚚 Logística de envíos', intent: 'shipping' },
            { text: '🛡️ Garantía y Calidad', intent: 'warranty' }
          ]
        }
      },

      // Regular customer responses
      regular: {
        pricing: {
          text: '💰 COTIZACIONES SUEÑO DORADO\n\nNuestros precios se ajustan según la medida y el modelo que elijas. Para darte un valor exacto y las ofertas del día, te sugiero hablar con un asesor técnico.\n\n¿Te gustaría recibir una cotización personalizada por WhatsApp?',
          options: [
            { text: '📱 Solicitar cotización exacta', intent: 'contact', action: 'whatsapp_direct' },
            { text: '📋 Ver modelos en catálogo', intent: 'catalog_full', action: 'catalog' },
            { text: '🏠 Volver al inicio', intent: 'help' }
          ]
        },
        foam: {
          text: '🛏️ EXPERTOS EN COLCHONES DE ESPUMA - SUEÑO DORADO\n\nNuestros colchones de espuma están fabricados con densidades certificadas para asegurar que no se deformen:\n\n✨ **TECNOLOGÍA:**\n• Densidades desde D14 hasta D30 (Alta densidad).\n• Espuma Plus Resilense: confort anatómico inmediato.\n• Tela Tricot y Poliseda de alta frescura.\n\n¿Buscas algo económico para uso ocasional o un colchón de alta gama para uso diario?',
          options: [
            { text: '📱 Consultar para uso diario', intent: 'contact', action: 'whatsapp_direct' },
            { text: '📱 Consultar línea económica', intent: 'contact', action: 'whatsapp_direct' },
            { text: '🏠 Ver todo el catálogo', intent: 'catalog' }
          ]
        },
        springs: {
          text: '🛏️ INGENIERÍA EN RESORTES - SUEÑO DORADO\n\nFabricamos colchones que combinan soporte ortopédico con una durabilidad extrema:\n\n✨ **SISTEMAS DISPONIBLES:**\n• **Pocket-Spring:** Resortes independientes (no transmiten movimiento).\n• **Marco de Acero:** Refuerzo perimetral para mayor estabilidad.\n• **Pillow Top Permanente:** Capa extra de confort superior.\n\n¿Te gustaría que un asesor te recomiende el modelo ideal según tu peso y posición al dormir?',
          options: [
            { text: '📱 Sí, hablar con experto', intent: 'contact', action: 'whatsapp_direct' },
            { text: '📋 Ver modelos de resortes', intent: 'catalog_full', action: 'catalog' },
            { text: '🏠 Volver al inicio', intent: 'help' }
          ]
        },
        catalog: {
          text: '📋 CATÁLOGO SUEÑO DORADO - EXPERTOS EN DESCANSO\n\nComo fabricantes, tenemos la solución perfecta para tu descanso:\n\n🛏️ **COLCHONES DE ESPUMA:** Anatómicos y silenciosos.\n🛏️ **COLCHONES DE RESORTES:** Máximo soporte y ventilación.\n🛏️ **BASES Y TARIMAS:** Madera selecta reforzada.\n\n🎯 ¿Qué categoría te gustaría que te detallemos ahora?',
          options: [
            { text: '🛏️ Detallar Espuma', intent: 'foam' },
            { text: '🛏️ Detallar Resortes', intent: 'springs' },
            { text: '🛏️ Ver Bases/Tarimas', intent: 'category_bases', action: 'whatsapp_category' },
            { text: '📱 Hablar con un asesor', intent: 'contact', action: 'whatsapp_direct' }
          ]
        },
        contact: {
          text: '📞 ATENCIÓN PERSONALIZADA SUEÑO DORADO\n\nNuestros asesores expertos están listos para ayudarte a elegir el colchón de tus sueños:\n\n📱 **WhatsApp:** atención inmediata.\n📧 **Email:** ventas@suenodorado.pe\n\n¿Deseas conectar ahora mismo con un asesor para recibir una oferta personalizada?',
          options: [
            { text: '📱 Conectar por WhatsApp', intent: 'contact', action: 'whatsapp_direct' },
            { text: '📋 Ver horarios', intent: 'contact', action: 'hours' },
            { text: '🏠 Menú Principal', intent: 'help' }
          ]
        },
        help: {
          text: '¡Hola! Soy Susi, tu experta en descanso. ¿En qué puedo asesorarte hoy?\n\n📋 Información técnica de productos\n🚚 Envíos gratis a todo Lima\n🛡️ Garantías directas de fabrica\n📞 Contacto con ventas\n\n¿Qué información necesitas?',
          options: [
            { text: '📋 Ver productos', intent: 'catalog' },
            { text: '🚚 Envíos y Entregas', intent: 'shipping' },
            { text: '📞 Hablar con Ventas', intent: 'contact' }
          ]
        },
        shipping: {
          text: '🚚 LOGÍSTICA DE ENTREGAS SUEÑO DORADO\n\nQueremos que estrenes tu colchón lo antes posible:\n\n📍 **LIMA METROPOLITANA:** Entregas en 24-48 horas. ¡Envío GRATIS!\n📍 **PROVINCIAS:** Envíos a todo el país vía agencias rápidas (Shalom, Marvisur, etc.).\n📍 **FÁBRICA:** También puedes recoger tu pedido directamente en nuestro almacén.\n\n¿Deseas que te ayudemos a cotizar el envío a tu ciudad?',
          options: [
            { text: '📱 Consultar para Lima', intent: 'contact', action: 'whatsapp_direct' },
            { text: '📱 Consultar para Provincia', intent: 'contact', action: 'whatsapp_direct' },
            { text: '🏠 Menú Principal', intent: 'help' }
          ]
        },
        offers: {
          text: '🔥 PROMOCIONES EXCLUSIVAS SUEÑO DORADO\n\n¡Es el mejor momento para renovar tu descanso! Tenemos ofertas especiales por esta semana:\n\n✨ **TOP OFERTAS:**\n• Descuentos en Línea Siempre (7 años de garantía).\n• Combos de Colchón + Base/Tarima con precios de fabrica.\n• Almohadas de regalo por compras seleccionadas.\n\n¿Te gustaría recibir el PDF con las promociones vigentes?',
          options: [
            { text: '📱 Sí, enviar ofertas', intent: 'contact', action: 'whatsapp_direct' },
            { text: '📋 Ver catálogo regular', intent: 'catalog' },
            { text: '🏠 Menú Principal', intent: 'help' }
          ]
        },
        warranty: {
          text: '🛡️ COMPROMISO Y GARANTÍA SUEÑO DORADO\n\nTu tranquilidad es nuestra prioridad. Al comprar directamente de fabrica, cuentas con:\n\n✅ **GARANTÍA REAL:**\n• Línea Premium: Hasta 6 años de garantía absoluta.\n• Línea Siempre: 7 años de respaldo oficial.\n• Certificación de densidades reales (no se deforma).\n\n¿Tienes alguna duda técnica sobre la durabilidad de algún modelo en específico?',
          options: [
            { text: '📱 Hablar con un técnico', intent: 'contact', action: 'whatsapp_direct' },
            { text: '📋 Ver modelos duraderos', intent: 'catalog' },
            { text: '🏠 Menú Principal', intent: 'help' }
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
    const businessContext = isBusiness ? ' (Cliente Empresarial)' : '';

    const contextualMessages = {
      '🛏️ Colchones de Espuma': `Hola, me gustaría conocer más sobre los Colchones de Espuma de Sueño Dorado${businessContext}. Necesito información sobre modelos, precios y disponibilidad.`,
      '🛏️ Colchones de Resortes': `Hola, me interesa información sobre los Colchones de Resortes de Sueño Dorado${businessContext}. Quisiera saber sobre especificaciones, precios y opciones disponibles.`,
      '🛏️ Bases y Tarimas': `Hola, estoy buscando información sobre las Bases y Tarimas de Sueño Dorado${businessContext}. Me gustaría conocer opciones, precios y compatibilidad con colchones.`,
      '👶 Cunas y Accesorios': `Hola, me gustaría información sobre las Cunas y Accesorios de Sueño Dorado${businessContext}. Necesito saber sobre seguridad, materiales y precios.`,
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

📅 Lunes a Sábado: 8:00 AM - 5:00 PM
📅 Domingos: Cerrado (o previa cita)

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
      return `📋 SOLICITUD DE CATÁLOGO EMPRESARIAL - SUEÑO DORADO 💼
      
Me interesa recibir el catálogo técnico para socios comerciales junto con los beneficios de compra por volumen, stock disponible y tiempos de entrega para provincia.`;
    } else {
      return `📋 SOLICITUD DE CATÁLOGO PREMIUM - SUEÑO DORADO 🛏️
      
Hola, me gustaría recibir el catálogo completo de sus líneas de Espuma, Resortes y Bases para elegir mi modelo ideal. Quedo atento a su asesoría técnica.`;
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
      // Detect intent y get response
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

      if (option.action === 'whatsapp_category') {
        // Send specific category inquiry to WhatsApp
        const contextualMessage = generateContextualMessage(optionText, isBusinessUser);
        sendToWhatsApp(contextualMessage);
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
