/**
 * NLP Processor for Chatbot
 * Advanced Natural Language Processing
 * Following expert chatbot intelligence patterns
 */

class NLPProcessor {
  constructor() {
    this.intentPatterns = this.initializePatterns();
    this.entityExtractors = this.initializeExtractors();
    this.conversationFlows = this.initializeFlows();
  }

  initializePatterns() {
    return {
      // Business intent patterns
      business: {
        patterns: [
          /por mayor|mayorista|distribuidor|revendedor|negocio|empresa|tienda|venta al por mayor|stock|inventario|proveedor|fabrica/gi,
          /comprar en cantidad|vender|revender|distribuir|mayoreo/gi,
          /b2b|business to business|venta mayorista/gi
        ],
        confidence: 0.9
      },
      
      // Product inquiry patterns
      product_inquiry: {
        patterns: [
          /necesito|quiero|busco|me interesa|dime de|información sobre|qué tienen|qué es|cómo funciona/gi,
          /características|especificaciones|detalles|descripción|funciona|sirve para/gi
        ],
        confidence: 0.8
      },
      
      // Pricing patterns
      pricing: {
        patterns: [
          /cuánto cuesta|precio|costo|valor|tarifa|cuánto vale|cuánto es|precio de|costo de/gi,
          /barato|económico|oferta|descuento|promoción|rebaja/gi
        ],
        confidence: 0.9
      },
      
      // Bulk inquiry patterns
      bulk_inquiry: {
        patterns: [
          /por mayor|en cantidad|al por mayor|mayoreo|muchas unidades|varios|stock/gi,
          /distribución|venta mayorista|proveedor|negocio|empresa/gi
        ],
        confidence: 0.9
      },
      
      // Contact patterns
      contact: {
        patterns: [
          /contactar|llamar|hablar|comunicar|escribir|email|teléfono|whatsapp/gi,
          /atención|soporte|asesor|ayuda|asistencia/gi
        ],
        confidence: 0.8
      }
    };
  }

  initializeExtractors() {
    return {
      // Product type extraction
      productTypes: {
        'colchones de espuma': /colchones?.*(?:de|tipo)?\s*espuma/gi,
        'colchones de resortes': /colchones?.*(?:de|tipo)?\s*resortes/gi,
        'tarimas': /tarimas?|bases/gi,
        'cunas': /cunas?|camas/gi,
        'almohadas': /almohadas?/gi
      },
      
      // Quantity extraction
      quantities: {
        'bulk': /(?:por mayor|mayoreo|cantidad|varios|múltiples)/gi,
        'single': /(?:uno|individual|solo|pieza)/gi
      },
      
      // Urgency extraction
      urgency: {
        'high': /urgente|ya|ahora|inmediato|necesito ya/gi,
        'normal': /pronto|cuando puedas|en cuanto/gi
      }
    };
  }

  initializeFlows() {
    return {
      // Business user flow
      business: {
        greeting: '¡Hola! Soy el asistente especializado para clientes empresariales. ¿Qué tipo de productos te interesa para tu negocio?',
        product_inquiry: 'Entendido. Para negocios ofrecemos precios especiales por volumen. ¿Qué tipo de colchones necesitas?',
        pricing: 'Te ofrezco nuestros catálogos con precios mayoristas. ¿Te gustaría ver nuestras opciones para {productType}?',
        contact: 'Perfecto. Un especialista en ventas empresariales te contactará en breve. ¿Prefieres WhatsApp o llamada?',
        escalation: 'Te conectaré con nuestro equipo de ventas empresariales.'
      },
      
      // Regular customer flow
      regular: {
        greeting: '¡Hola! 👋 Soy el asistente de Sueño Dorado. ¿Qué tipo de colchón estás buscando?',
        product_inquiry: 'Excelente elección. ¿Para qué tipo de habitación o uso es el colchón?',
        pricing: 'Tenemos opciones para todos los presupuestos. ¿Qué rango de precio te interesa?',
        contact: 'Puedo ayudarte a encontrar el colchón perfecto. ¿Prefieres que te contacte por WhatsApp?',
        escalation: 'Te conectaré con un especialista en colchones.'
      }
    };
  }

  /**
   * Advanced intent detection with context awareness
   */
  detectIntent(message, context) {
    const normalizedMessage = message.toLowerCase().trim();
    
    // Check if user is business based on context
    const isBusiness = context.userProfile.isBusiness;
    
    // Business-specific detection
    if (isBusiness) {
      // Check for bulk/business patterns first
      for (const [intentName, config] of Object.entries(this.intentPatterns)) {
        if (intentName === 'business' || intentName === 'bulk_inquiry') {
          for (const pattern of config.patterns) {
            if (pattern.test(normalizedMessage)) {
              return {
                intent: intentName,
                confidence: config.confidence,
                entities: this.extractEntities(normalizedMessage)
              };
            }
          }
        }
      }
    }
    
    // General intent detection
    let bestMatch = { intent: 'fallback', confidence: 0 };
    
    for (const [intentName, config] of Object.entries(this.intentPatterns)) {
      for (const pattern of config.patterns) {
        if (pattern.test(normalizedMessage)) {
          const confidence = this.calculateConfidence(normalizedMessage, pattern, config.confidence);
          if (confidence > bestMatch.confidence) {
            bestMatch = {
              intent: intentName,
              confidence,
              entities: this.extractEntities(normalizedMessage)
            };
          }
        }
      }
    }
    
    return bestMatch;
  }

  /**
   * Calculate confidence score with context awareness
   */
  calculateConfidence(message, pattern, baseConfidence) {
    let confidence = baseConfidence;
    
    // Boost confidence for exact matches
    if (message === pattern.source) {
      confidence += 0.2;
    }
    
    // Boost confidence for longer, more specific messages
    if (message.length > 10) {
      confidence += 0.1;
    }
    
    // Reduce confidence for very short messages
    if (message.length < 5) {
      confidence -= 0.2;
    }
    
    return Math.min(confidence, 1.0);
  }

  /**
   * Extract entities from message
   */
  extractEntities(message) {
    const entities = [];
    
    // Extract product types
    for (const [entityType, pattern] of Object.entries(this.entityExtractors.productTypes)) {
      const match = message.match(pattern);
      if (match) {
        entities.push({
          type: 'product_type',
          value: match[0],
          confidence: 0.9
        });
      }
    }
    
    // Extract quantities
    for (const [entityType, pattern] of Object.entries(this.entityExtractors.quantities)) {
      const match = message.match(pattern);
      if (match) {
        entities.push({
          type: 'quantity',
          value: entityType,
          confidence: 0.8
        });
      }
    }
    
    return entities;
  }

  /**
   * Generate contextual response
   */
  generateResponse(intent, entities, context) {
    const flow = context.userProfile.isBusiness ? 
      this.conversationFlows.business : 
      this.conversationFlows.regular;
    
    // Dynamic response based on context
    if (intent === 'product_inquiry' && entities.length > 0) {
      const productType = entities.find(e => e.type === 'product_type');
      if (productType) {
        return flow.product_inquiry.replace('{productType}', productType.value);
      }
    }
    
    return flow[intent] || flow.fallback;
  }

  /**
   * Suggest next actions based on context
   */
  suggestNextActions(intent, context) {
    const suggestions = [];
    
    // Business user suggestions
    if (context.userProfile.isBusiness) {
      if (intent === 'greeting') {
        suggestions.push('Ver catálogo mayorista', 'Cotizar productos', 'Hablar con ventas');
      } else if (intent === 'product_inquiry') {
        suggestions.push('Ver especificaciones', 'Precios por volumen', 'Solicitar muestra');
      }
    } else {
      // Regular customer suggestions
      if (intent === 'greeting') {
        suggestions.push('Ver productos', 'Conocer garantía', 'Envíos a domicilio');
      } else if (intent === 'product_inquiry') {
        suggestions.push('Ver características', 'Comparar modelos', 'Probar en tienda');
      }
    }
    
    return suggestions;
  }
}

export default NLPProcessor;
