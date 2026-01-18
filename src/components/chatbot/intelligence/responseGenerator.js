/**
 * Response Generator for Chatbot
 * Dynamic, contextual, and intelligent responses
 * Following expert chatbot response patterns
 */

class ResponseGenerator {
  constructor() {
    this.responseTemplates = this.initializeTemplates();
    this.personality = {
      professional: true,
      friendly: true,
      helpful: true,
      proactive: true
    };
  }

  initializeTemplates() {
    return {
      // Business user responses
      business: {
        greeting: {
          templates: [
            '¡Hola! 👋 Soy el asistente especializado en ventas empresariales de Sueño Dorado. ¿Qué tipo de productos te interesa para tu negocio?',
            'Bienvenido a Sueño Dorado. Veo que estás interesado en productos por mayor. ¿Qué tipo de colchones necesitas para tu empresa?',
            '¡Hola! Soy tu asistente de negocios de Sueño Dorado. ¿Qué volumen de productos estás buscando?'
          ],
          follow_up: [
            '¿Te gustaría ver nuestro catálogo con precios mayoristas?',
            '¿Necesitas información sobre especificaciones técnicas?',
            '¿Prefieres cotización personalizada?'
          ]
        },
        
        product_inquiry: {
          templates: [
            'Excelente elección. Para negocios ofrecemos descuentos por volumen. ¿Qué tipo de colchones necesitas?',
            'Entendido. Para empresas tenemos opciones especiales. ¿Qué tipo de colchones y en qué cantidad?',
            'Perfecto. Tenemos soluciones empresariales. ¿Qué características específicas buscas en los colchones?'
          ],
          follow_up: [
            '¿Te interesa colchones de espuma o de resortes?',
            '¿Para qué tipo de clientes son los colchones?',
            '¿Necesitas información sobre garantía empresarial?'
          ]
        },
        
        pricing: {
          templates: [
            'Te ofrezco nuestros catálogos con precios mayoristas. ¿Qué tipo de colchones necesitas?',
            'Para negocios tenemos precios especiales por volumen. ¿Qué tipo y cantidad de colchones te interesan?',
            'Excelente pregunta. Como cliente empresarial, tienes acceso a precios preferenciales. ¿Qué productos necesitas?'
          ],
          follow_up: [
            '¿Te gustaría ver nuestra tabla de precios por volumen?',
            '¿Necesitas cotización para un proyecto específico?',
            '¿Te interesa información sobre términos de pago?'
          ]
        }
      },
      
      // Regular customer responses
      regular: {
        greeting: {
          templates: [
            '¡Hola! 👋 Soy el asistente de Sueño Dorado. ¿Qué tipo de colchón estás buscando?',
            '¡Bienvenido! Soy tu guía experta en colchones. ¿Para qué tipo de habitación estás buscando?',
            '¡Hola! 👋 Te ayudaré a encontrar el colchón perfecto. ¿Qué tipo de descanso necesitas?'
          ],
          follow_up: [
            '¿Buscas colchón para adultos, niños o ambos?',
            '¿Prefieres colchón de espuma o de resortes?',
            '¿Qué presupuesto tienes en mente?'
          ]
        },
        
        product_inquiry: {
          templates: [
            '¡Excelente elección! ¿Para qué tipo de habitación o uso es el colchón?',
            'Perfecto. ¿Qué características específicas buscas en un colchón?',
            '¡Buena decisión! ¿Para quién es el colchón y qué tipo de descanso prefieres?'
          ],
          follow_up: [
            '¿Duermes de lado, boca arriba o te mueves mucho?',
            '¿Tienes alguna preferencia de firmeza (suave, media, firme)?',
            '¿El colchón es para ti o para alguien más?'
          ]
        },
        
        pricing: {
          templates: [
            'Tenemos opciones para todos los presupuestos. ¿Qué rango de precio te interesa?',
            'Excelente pregunta. ¿Cuánto estás dispuesto a invertir en tu descanso?',
            'Te ayudaré a encontrar opciones dentro de tu presupuesto. ¿Cuánto te gustaría gastar?'
          ],
          follow_up: [
            '¿Te interesa ver opciones en el rango de S/. 400-600?',
            '¿Prefieres ver nuestros productos más económicos o premium?',
            '¿Necesitas financiamiento o pagos al contado?'
          ]
        }
      }
    };
  }

  /**
   * Generate contextual response
   */
  generateResponse(intent, entities, context, previousMessages = []) {
    const userProfile = context.userProfile;
    const isBusiness = userProfile.isBusiness;
    
    // Get appropriate template set
    const templates = this.responseTemplates[isBusiness ? 'business' : 'regular'];
    
    // Get template for current intent
    const intentTemplates = templates[intent];
    if (!intentTemplates) {
      return this.getFallbackResponse();
    }
    
    // Select template based on context
    const template = this.selectTemplate(intentTemplates, context, previousMessages);
    
    // Personalize response with entities
    const personalizedResponse = this.personalizeResponse(template, entities, context);
    
    // Add proactive suggestions
    const suggestions = this.addProactiveSuggestions(personalizedResponse, intent, context);
    
    return suggestions;
  }

  /**
   * Select best template based on context
   */
  selectTemplate(templates, context, previousMessages) {
    const availableTemplates = templates.templates;
    
    // If user is business, prioritize business-specific templates
    if (context.userProfile.isBusiness) {
      return availableTemplates[0]; // First template is usually business-focused
    }
    
    // For regular users, vary templates based on conversation stage
    const stage = context.conversationStage;
    const messageCount = previousMessages.length;
    
    if (messageCount === 0) {
      return availableTemplates[0]; // First interaction
    } else if (messageCount < 3) {
      return availableTemplates[1] || availableTemplates[0]; // Early conversation
    } else {
      return availableTemplates[2] || availableTemplates[1] || availableTemplates[0]; // Deeper conversation
    }
  }

  /**
   * Personalize response with entities
   */
  personalizeResponse(template, entities, context) {
    let personalized = template;
    
    // Replace entity placeholders
    entities.forEach(entity => {
      if (entity.type === 'product_type') {
        personalized = personalized.replace(/\{productType\}/g, entity.value);
      }
    });
    
    // Add context-aware modifications
    if (context.userProfile.isBusiness) {
      personalized += '\n\n💼 Como cliente empresarial, tienes acceso a precios especiales y servicios prioritarios.';
    }
    
    return personalized;
  }

  /**
   * Add proactive suggestions
   */
  addProactiveSuggestions(response, intent, context) {
    const suggestions = [];
    
    // Add follow-up questions
    const followUps = this.getFollowUpQuestions(intent, context);
    if (followUps.length > 0) {
      suggestions.push('\n\n' + followUps.join('\n'));
    }
    
    // Add next action suggestions
    const nextActions = this.getNextActionSuggestions(intent, context);
    if (nextActions.length > 0) {
      suggestions.push('\n\n' + nextActions.join(' • '));
    }
    
    return response + suggestions;
  }

  /**
   * Get follow-up questions
   */
  getFollowUpQuestions(intent, context) {
    const isBusiness = context.userProfile.isBusiness;
    
    const followUps = {
      product_inquiry: isBusiness ? [
        '¿Qué tipo de colchones necesitas?',
        '¿Para qué tipo de clientes son?',
        '¿Qué volumen estimado?'
      ] : [
        '¿Para qué tipo de habitación?',
        '¿Duermes solo o acompañado?',
        '¿Qué firmeza prefieres?'
      ],
      
      pricing: isBusiness ? [
        '¿Qué tipo de productos necesitas?',
        '¿Qué volumen de compra?',
        '¿Necesitas cotización formal?'
      ] : [
        '¿Qué presupuesto tienes?',
        '¿Te interesa financiamiento?',
        '¿Cuánto quieres invertir?'
      ]
    };
    
    return followUps[intent] || [];
  }

  /**
   * Get next action suggestions
   */
  getNextActionSuggestions(intent, context) {
    const isBusiness = context.userProfile.isBusiness;
    
    const actions = {
      greeting: isBusiness ? [
        'Ver catálogo mayorista',
        'Cotizar productos',
        'Hablar con ventas'
      ] : [
        'Ver productos',
        'Conocer garantía',
        'Envíos a domicilio'
      ],
      
      product_inquiry: isBusiness ? [
        'Ver especificaciones',
        'Precios por volumen',
        'Solicitar muestra'
      ] : [
        'Ver características',
        'Comparar modelos',
        'Probar en tienda'
      ],
      
      pricing: isBusiness ? [
        'Tabla de precios',
        'Cotización personalizada',
        'Términos de pago'
      ] : [
        'Ver opciones',
        'Comparar modelos',
        'Financiamiento'
      ]
    };
    
    return actions[intent] || [];
  }

  /**
   * Get fallback response
   */
  getFallbackResponse() {
    return {
      text: 'No estoy seguro de entender. ¿Podrías reformular tu pregunta? O elige una opción:',
      options: [
        '📋 Ver Catálogo',
        '💰 Precios',
        '🚚 Envíos',
        '🛡️ Garantía',
        '📞 Contactar',
        '👤 Hablar con humano'
      ]
    };
  }

  /**
   * Generate response with confidence
   */
  generateResponseWithConfidence(intent, confidence, entities, context) {
    const response = this.generateResponse(intent, entities, context);
    
    return {
      ...response,
      confidence,
      metadata: {
        intent,
        confidence,
        entities,
        context: context.getContextSummary()
      }
    };
  }
}

export default ResponseGenerator;
