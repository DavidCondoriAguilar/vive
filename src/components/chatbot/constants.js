/**
 * Chatbot constants y configurations
 * Centralized configuration for easy maintenance
 */

import { CHATBOT_INTENTS } from './types.js';

export const CHATBOT_CONFIG = {
  // Bot identity
  name: 'Susi de Vive',
  avatar: '✨',

  // UI Configuration
  maxMessages: 50,
  typingDelay: 1000,
  messageDelay: 500,

  // Business context
  businessName: 'Vive',
  whatsappNumber: '51989223448',
  websiteUrl: 'https://vive.pe',

  // Suggested keywords for quick interaction
  suggestedKeywords: [
    { text: 'Resortes ➰', value: 'resortes' },
    { text: 'Espuma 🧽', value: 'espuma' },
    { text: 'Precios 💰', value: 'precios' },
    { text: 'Garantía 🛡️', value: 'garantía' },
    { text: 'Ofertas 🔥', value: 'ofertas' }
  ],

  // Quick actions
  quickActions: [
    { text: '📋 Ver Catálogo', intent: CHATBOT_INTENTS.CATALOG },
    { text: '📞 Contactar', intent: CHATBOT_INTENTS.CONTACT },
    { text: '👤 Hablar con humano', intent: CHATBOT_INTENTS.HUMAN_AGENT }
  ]
};

export const BOT_RESPONSES = {
  [CHATBOT_INTENTS.GREETING]: {
    text: '¡Hola! 👋 Soy el asistente virtual de Vive. ¿En qué puedo ayudarte a transformar tu descanso hoy?',
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
    text: 'Para brindarte una cotización exacta y personalizada según la medida (Plaza y media, Queen, King, etc.) y modelo, te sugiero hablar directamente con un asesor. ¿Te gustaría conectar ahora por WhatsApp?',
    options: [
      { text: '📱 Consultar vía WhatsApp', intent: 'whatsapp_contact', action: 'whatsapp' },
      { text: '📋 Ver Catálogo', intent: CHATBOT_INTENTS.CATALOG, action: 'catalog' },
      { text: '🏠 Volver al inicio', intent: CHATBOT_INTENTS.HELP }
    ]
  },

  [CHATBOT_INTENTS.CONTACT]: {
    text: 'Puedes contactarnos de varias formas:\n\n📱 WhatsApp: (01) 989 223 448\n📧 Email: hola@vive.pe\n🌐 Web: www.vive.pe\n\n¿Prefieres hablar ahora por WhatsApp?',
    options: [
      { text: '📱 Hablar por WhatsApp', intent: 'whatsapp_contact', action: 'whatsapp' },
      { text: 'Enviar email', intent: 'email_contact' },
      { text: 'Ver horarios', intent: 'business_hours' },
      { text: '🏠 Volver al menú principal', intent: CHATBOT_INTENTS.HELP }
    ]
  },

  [CHATBOT_INTENTS.CATALOG]: {
    text: '📋 Nuestro catálogo incluye:\n\n• Colchones de Espuma\n• Colchones de Resortes\n• Tarimas y Bases\n• Cunas y Almohadas\n\n¿Qué categoría te interesa ver?',
    options: [
      { text: 'Ver Catálogo Completo', intent: 'full_catalog', action: 'catalog' },
      { text: 'Colchones', intent: 'mattresses' },
      { text: 'Accesorios', intent: 'accessories' },
      { text: '🏠 Volver al menú principal', intent: CHATBOT_INTENTS.HELP }
    ]
  },

  [CHATBOT_INTENTS.HELP]: {
    text: '🏠 ¡Bienvenido al menú principal! Puedo ayudarte con:\n\n📋 Información técnica de productos\n🛡️ Garantías de fabrica\n📞 Contacto directo\n\n¿Qué necesitas saber?',
    options: [
      { text: '📋 Ver Catálogo', intent: CHATBOT_INTENTS.CATALOG },
      { text: '📞 Contactar', intent: CHATBOT_INTENTS.CONTACT },
      { text: '👤 Hablar con humano', intent: CHATBOT_INTENTS.HUMAN_AGENT }
    ]
  },

  [CHATBOT_INTENTS.HUMAN_AGENT]: {
    text: 'Entendido. Te conectaré con un agente humano. Por favor, espera un momento...',
    action: 'human_agent'
  },

  [CHATBOT_INTENTS.FALLBACK]: {
    text: 'Aún estoy aprendiendo y no estoy seguro de entenderte al 100%. 😅\n\n¿Te gustaría que te pase directamente con un asesor humano por WhatsApp para resolverlo ahora mismo?',
    options: [
      { text: '📱 Sí, hablar con experto', intent: CHATBOT_INTENTS.HUMAN_AGENT, action: 'fallback_whatsapp' },
      { text: '📋 Ver Catálogo', intent: CHATBOT_INTENTS.CATALOG },
      { text: '🏠 Volver al inicio', intent: CHATBOT_INTENTS.HELP }
    ]
  },

  // Additional specific responses for better navigation
  espuma_products: {
    text: '🛏️ Somos especialistas en colchones de espuma. Ofrecemos densidades desde D12 hasta D30 y espumas de alta resiliencia (HR). Líneas: Poliseda, Plus Resilense, Splendido y Topacio. ¿Sobre cuál deseas asesoría técnica?',
    options: [
      { text: 'Consultar por WhatsApp', intent: CHATBOT_INTENTS.CONTACT, action: 'whatsapp' },
      { text: 'Ver línea Splendido', intent: 'splendido_products' },
      { text: 'Ver línea Topacio', intent: 'topacio_products' },
      { text: '🏠 Volver al inicio', intent: CHATBOT_INTENTS.HELP }
    ]
  },

  resorte_products: {
    text: '🛏️ Fabricamos colchones con sistemas de resortes reforzados y Pocket-Spring (independientes). Líneas: Intermedio, Premium, Golden Dream, Siempre y nuestro exclusivo Absolut. ¿Te gustaría comparar el soporte de estas líneas?',
    options: [
      { text: 'Asesoría por WhatsApp', intent: CHATBOT_INTENTS.CONTACT, action: 'whatsapp' },
      { text: 'Línea Pocket Premium', intent: 'premium_products' },
      { text: 'Catálogo de resortes', intent: CHATBOT_INTENTS.CATALOG },
      { text: '🏠 Volver al inicio', intent: CHATBOT_INTENTS.HELP }
    ]
  },

  special_offers: {
    text: '🔥 Tenemos ofertas especiales en selectedas líneas. ¿Qué tipo de producto te interesa?',
    options: [
      { text: 'Ofertas en Espuma', intent: 'espuma_products' },
      { text: 'Ofertas en Resortes', intent: 'resorte_products' },
      { text: 'Ver catálogo completo', intent: CHATBOT_INTENTS.CATALOG },
      { text: '🏠 Volver al menú principal', intent: CHATBOT_INTENTS.HELP }
    ]
  },

  golden_dream_products: {
    text: '¡Golden Dream es nuestra línea premium! 🌟 Incluye sistema MP, espumas de alta densidad y 6 años de garantía. Ofrece un soporte y confort inigualable.',
    options: [
      { text: 'Ver modelos Golden Dream', intent: CHATBOT_INTENTS.CATALOG, action: 'catalog' },
      { text: 'Comparar con Premium', intent: 'premium_products' },
      { text: 'Conocer garantía', intent: CHATBOT_INTENTS.WARRANTY },
      { text: '🏠 Volver al menú principal', intent: CHATBOT_INTENTS.HELP }
    ]
  },

  siempre_products: {
    text: '¡La línea Siempre es la más duradera! ⏰ 7 años de garantía con sistema MP y pillow top permanente. Diseñada para un descanso superior por años.',
    options: [
      { text: 'Ver modelos Siempre', intent: CHATBOT_INTENTS.CATALOG, action: 'catalog' },
      { text: 'Comparar con Golden Dream', intent: 'golden_dream_products' },
      { text: 'Ver garantía extendida', intent: CHATBOT_INTENTS.WARRANTY },
      { text: '🏠 Volver al menú principal', intent: CHATBOT_INTENTS.HELP }
    ]
  },

  poliseda_products: {
    text: 'Poliseda es nuestra línea económica y ligera 💰 Perfecta para uso juvenil o temporario. Espesores de 4" a 8". Consulta disponibilidad de entrega inmediata.',
    options: [
      { text: 'Ver espesores', intent: CHATBOT_INTENTS.CATALOG, action: 'catalog' },
      { text: 'Comparar con Plus Resilense', intent: 'plus_resilense_products' },
      { text: 'Consultar precios vía WhatsApp', intent: CHATBOT_INTENTS.CONTACT, action: 'whatsapp' },
      { text: '🏠 Volver al menú principal', intent: CHATBOT_INTENTS.HELP }
    ]
  },

  box_products: {
    text: 'Tenemos bases y tarimas para todos los colchones 🛏️ Fundamentales para la durabilidad y soporte adecuado.',
    options: [
      { text: 'Ver bases disponibles', intent: CHATBOT_INTENTS.CATALOG, action: 'catalog' },
      { text: '¿Necesito base?', intent: CHATBOT_INTENTS.HELP },
      { text: 'Contactar asesor', intent: CHATBOT_INTENTS.CONTACT },
      { text: '🏠 Volver al menú principal', intent: CHATBOT_INTENTS.HELP }
    ]
  }
};

export const KEYWORDS_INTENTS = {
  // Greeting patterns
  hola: CHATBOT_INTENTS.GREETING,
  buenos: CHATBOT_INTENTS.GREETING,
  hey: CHATBOT_INTENTS.GREETING,
  hi: CHATBOT_INTENTS.GREETING,
  alo: CHATBOT_INTENTS.GREETING,

  // Product patterns
  'colchón': CHATBOT_INTENTS.PRODUCT_INFO,
  colchon: CHATBOT_INTENTS.PRODUCT_INFO,
  colchones: CHATBOT_INTENTS.PRODUCT_INFO,
  colchome: CHATBOT_INTENTS.PRODUCT_INFO,
  cama: CHATBOT_INTENTS.PRODUCT_INFO,
  camas: CHATBOT_INTENTS.PRODUCT_INFO,
  espuma: 'espuma_products',
  resorte: 'resorte_products',
  resortes: 'resorte_products',

  // Specific lines
  'golden dream': 'golden_dream_products',
  siempre: 'siempre_products',
  absolut: 'absolut_products',
  premium: 'premium_products',
  intermedio: 'intermedio_products',
  económica: 'economica_products',
  economica: 'economica_products',
  barato: 'economica_products',
  standard: 'standard_products',
  estandar: 'standard_products',
  poliseda: 'poliseda_products',
  'plus resilense': 'plus_resilense_products',
  splendido: 'splendido_products',
  topacio: 'topacio_products',

  // Categories
  'box': 'box_products',
  tarima: 'box_products',
  'tarimas': 'box_products',
  cabeceras: 'cabeceras_products',
  cunas: 'cunas_products',
  cunita: 'cunas_products',
  'juegos de sala': 'muebles_products',
  muebles: 'muebles_products',

  // Pricing patterns
  precio: CHATBOT_INTENTS.CONTACT,
  precios: CHATBOT_INTENTS.CONTACT,
  presio: CHATBOT_INTENTS.CONTACT,
  costo: CHATBOT_INTENTS.CONTACT,
  cuánto: CHATBOT_INTENTS.CONTACT,
  cuanto: CHATBOT_INTENTS.CONTACT,
  valor: CHATBOT_INTENTS.CONTACT,

  donde: CHATBOT_INTENTS.CONTACT,
  ubicacion: CHATBOT_INTENTS.CONTACT,
  tienda: CHATBOT_INTENTS.CONTACT,

  // Contact patterns
  contacto: CHATBOT_INTENTS.CONTACT,
  llamar: CHATBOT_INTENTS.CONTACT,
  teléfono: CHATBOT_INTENTS.CONTACT,
  telefono: CHATBOT_INTENTS.CONTACT,
  whatsapp: CHATBOT_INTENTS.CONTACT,
  wsp: CHATBOT_INTENTS.CONTACT,

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
  agente: CHATBOT_INTENTS.HUMAN_AGENT,
  vendedor: CHATBOT_INTENTS.HUMAN_AGENT
};
