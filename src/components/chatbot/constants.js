/**
 * Chatbot constants and configurations
 * Centralized configuration for easy maintenance
 */

import { CHATBOT_INTENTS } from './types.js';

export const CHATBOT_CONFIG = {
  // Bot identity
  name: 'Sueño Dorado Assistant',
  avatar: '🛏️',
  
  // UI Configuration
  maxMessages: 50,
  typingDelay: 1000,
  messageDelay: 500,
  
  // Business context
  businessName: 'Sueño Dorado',
  whatsappNumber: '51989223448',
  websiteUrl: 'https://suenodorado.pe',
  
  // Quick actions
  quickActions: [
    { text: '📋 Ver Catálogo', intent: CHATBOT_INTENTS.CATALOG },
    { text: '💰 Precios', intent: CHATBOT_INTENTS.PRICING },
    { text: '🚚 Envíos', intent: CHATBOT_INTENTS.SHIPPING },
    { text: '🛡️ Garantía', intent: CHATBOT_INTENTS.WARRANTY },
    { text: '📞 Contactar', intent: CHATBOT_INTENTS.CONTACT },
    { text: '👤 Hablar con humano', intent: CHATBOT_INTENTS.HUMAN_AGENT }
  ]
};

export const BOT_RESPONSES = {
  [CHATBOT_INTENTS.GREETING]: {
    text: '¡Hola! 👋 Soy el asistente virtual de Sueño Dorado. ¿En qué puedo ayudarte hoy?',
    options: CHATBOT_CONFIG.quickActions.slice(0, 4)
  },
  
  [CHATBOT_INTENTS.PRODUCT_INFO]: {
    text: 'Tenemos una amplia variedad de colchones de espuma y resortes. ¿Qué tipo de colchón te interesa?',
    options: [
      { text: 'Colchones de Espuma', intent: 'espuma_products' },
      { text: 'Colchones de Resortes', intent: 'resorte_products' },
      { text: 'Golden Dream (Premium)', intent: 'golden_dream_products' },
      { text: 'Línea Siempre (7 años)', intent: 'siempre_products' },
      { text: 'Ver todos los productos', intent: CHATBOT_INTENTS.CATALOG }
    ]
  },
  
  [CHATBOT_INTENTS.PRICING]: {
    text: 'Nuestros precios van desde S/. 399 hasta S/. 3,999 dependiendo del tamaño y tipo. ¿Te gustaría ver nuestro catálogo completo con precios?',
    options: [
      { text: 'Ver Catálogo', intent: CHATBOT_INTENTS.CATALOG, action: 'catalog' },
      { text: 'Ofertas especiales', intent: 'special_offers' }
    ]
  },
  
  [CHATBOT_INTENTS.SHIPPING]: {
    text: '🚚 Realizamos envíos a todo Perú:\n\n• Lima Metropolitana: 24-48h (Gratis)\n• Provincias: 3-5 días\n• Entrega directa de fábrica\n\n¿A dónde te gustaría recibir tu pedido?',
    options: [
      { text: 'Lima Metropolitana', intent: 'lima_shipping' },
      { text: 'Provincias', intent: 'provinces_shipping' },
      { text: 'Consultar costo', intent: CHATBOT_INTENTS.CONTACT }
    ]
  },
  
  [CHATBOT_INTENTS.WARRANTY]: {
    text: '🛡️ Ofrecemos garantía de fábrica:\n\n• Colchones de Espuma: 5 años\n• Colchones de Resortes: 10 años\n• Tarimas y Cunas: 3 años\n\n¿Tienes alguna pregunta sobre nuestra garantía?',
    options: [
      { text: 'Condiciones de garantía', intent: 'warranty_terms' },
      { text: 'Reclamos', intent: 'claims' },
      { text: 'Contactar soporte', intent: CHATBOT_INTENTS.CONTACT }
    ]
  },
  
  [CHATBOT_INTENTS.CONTACT]: {
    text: 'Puedes contactarnos de varias formas:\n\n📱 WhatsApp: (01) 989 223 448\n📧 Email: hola@suenodorado.pe\n🌐 Web: www.suenodorado.pe\n\n¿Prefieres hablar ahora por WhatsApp?',
    options: [
      { text: '📱 Hablar por WhatsApp', intent: 'whatsapp_contact', action: 'whatsapp' },
      { text: 'Enviar email', intent: 'email_contact' },
      { text: 'Ver horarios', intent: 'business_hours' }
    ]
  },
  
  [CHATBOT_INTENTS.CATALOG]: {
    text: '📋 Nuestro catálogo incluye:\n\n• Colchones de Espuma\n• Colchones de Resortes\n• Tarimas y Bases\n• Cunas y Almohadas\n\n¿Qué categoría te interesa ver?',
    options: [
      { text: 'Ver Catálogo Completo', intent: 'full_catalog', action: 'catalog' },
      { text: 'Colchones', intent: 'mattresses' },
      { text: 'Accesorios', intent: 'accessories' }
    ]
  },
  
  [CHATBOT_INTENTS.HELP]: {
    text: 'Puedo ayudarte con:\n\n📋 Información de productos\n💰 Precios y ofertas\n🚚 Envíos y entregas\n🛡️ Garantías\n📞 Contacto\n\n¿Qué necesitas saber?',
    options: CHATBOT_CONFIG.quickActions
  },
  
  [CHATBOT_INTENTS.HUMAN_AGENT]: {
    text: 'Entendido. Te conectaré con un agente humano. Por favor, espera un momento...',
    action: 'human_agent'
  },
  
  [CHATBOT_INTENTS.FALLBACK]: {
    text: 'No estoy seguro de entender. ¿Podrías reformular tu pregunta? O elige una opción:',
    options: CHATBOT_CONFIG.quickActions
  },
  
  // Specific line responses
  golden_dream_products: {
    text: '¡Golden Dream es nuestra línea premium! 🌟 Incluye sistema MP, espumas de alta densidad y 6 años de garantía. Precios desde S/. 1,699.',
    options: [
      { text: 'Ver modelos Golden Dream', intent: CHATBOT_INTENTS.CATALOG, action: 'catalog' },
      { text: 'Comparar con Premium', intent: 'premium_products' },
      { text: 'Conocer garantía', intent: CHATBOT_INTENTS.WARRANTY }
    ]
  },
  
  siempre_products: {
    text: '¡La línea Siempre es la más duradera! ⏰ 7 años de garantía con sistema MP y pillow top permanente. Precios desde S/. 1,449.',
    options: [
      { text: 'Ver modelos Siempre', intent: CHATBOT_INTENTS.CATALOG, action: 'catalog' },
      { text: 'Comparar con Golden Dream', intent: 'golden_dream_products' },
      { text: 'Ver garantía extendida', intent: CHATBOT_INTENTS.WARRANTY }
    ]
  },
  
  poliseda_products: {
    text: 'Poliseda es nuestra línea económica y ligera 💰 Perfecta para uso juvenil o temporario. Espesores de 4" a 8". Precios desde S/. 349.',
    options: [
      { text: 'Ver espesores', intent: CHATBOT_INTENTS.CATALOG, action: 'catalog' },
      { text: 'Comparar con Plus Resilense', intent: 'plus_resilense_products' },
      { text: 'Conocer precios', intent: CHATBOT_INTENTS.PRICING }
    ]
  },
  
  box_products: {
    text: 'Tenemos bases y tarimas para todos los colchones 🛏️ Fundamentales para la durabilidad y soporte adecuado.',
    options: [
      { text: 'Ver bases disponibles', intent: CHATBOT_INTENTS.CATALOG, action: 'catalog' },
      { text: '¿Necesito base?', intent: CHATBOT_INTENTS.HELP },
      { text: 'Contactar asesor', intent: CHATBOT_INTENTS.CONTACT }
    ]
  }
};

export const KEYWORDS_INTENTS = {
  // Greeting patterns
  hola: CHATBOT_INTENTS.GREETING,
  buenos: CHATBOT_INTENTS.GREETING,
  hey: CHATBOT_INTENTS.GREETING,
  
  // Product patterns
  colchón: CHATBOT_INTENTS.PRODUCT_INFO,
  colchones: CHATBOT_INTENTS.PRODUCT_INFO,
  espuma: 'espuma_products',
  resorte: 'resorte_products',
  
  // Specific lines
  'golden dream': 'golden_dream_products',
  siempre: 'siempre_products',
  absolut: 'absolut_products',
  premium: 'premium_products',
  intermedio: 'intermedio_products',
  económica: 'economica_products',
  standard: 'standard_products',
  poliseda: 'poliseda_products',
  'plus resilense': 'plus_resilense_products',
  splendido: 'splendido_products',
  topacio: 'topacio_products',
  
  // Categories
  'box': 'box_products',
  'tarimas': 'box_products',
  cabeceras: 'cabeceras_products',
  cunas: 'cunas_products',
  'juegos de sala': 'muebles_products',
  
  // Pricing patterns
  precio: CHATBOT_INTENTS.PRICING,
  precios: CHATBOT_INTENTS.PRICING,
  costo: CHATBOT_INTENTS.PRICING,
  cuánto: CHATBOT_INTENTS.PRICING,
  
  // Shipping patterns
  envío: CHATBOT_INTENTS.SHIPPING,
  envíos: CHATBOT_INTENTS.SHIPPING,
  delivery: CHATBOT_INTENTS.SHIPPING,
  entrega: CHATBOT_INTENTS.SHIPPING,
  
  // Warranty patterns
  garantía: CHATBOT_INTENTS.WARRANTY,
  garantias: CHATBOT_INTENTS.WARRANTY,
  devolución: CHATBOT_INTENTS.WARRANTY,
  
  // Contact patterns
  contacto: CHATBOT_INTENTS.CONTACT,
  llamar: CHATBOT_INTENTS.CONTACT,
  teléfono: CHATBOT_INTENTS.CONTACT,
  whatsapp: CHATBOT_INTENTS.CONTACT,
  
  // Catalog patterns
  catálogo: CHATBOT_INTENTS.CATALOG,
  catalogo: CHATBOT_INTENTS.CATALOG,
  productos: CHATBOT_INTENTS.CATALOG,
  
  // Help patterns
  ayuda: CHATBOT_INTENTS.HELP,
  ayudar: CHATBOT_INTENTS.HELP,
  soporte: CHATBOT_INTENTS.HELP,
  
  // Human agent patterns
  humano: CHATBOT_INTENTS.HUMAN_AGENT,
  persona: CHATBOT_INTENTS.HUMAN_AGENT,
  agente: CHATBOT_INTENTS.HUMAN_AGENT
};
