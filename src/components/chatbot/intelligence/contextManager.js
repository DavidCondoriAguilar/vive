/**
 * Context Manager for Chatbot
 * Manages conversation context and memory
 * Following expert chatbot design patterns
 */

/**
 * Conversation context structure
 */
class ConversationContext {
  constructor() {
    this.reset();
  }

  reset() {
    this.currentTopic = null;
    this.userIntent = null;
    this.previousIntents = [];
    this.entities = [];
    this.conversationStage = 'greeting';
    this.userProfile = {
      isBusiness: false,
      preferences: [],
      interests: []
    };
  }

  updateContext(userMessage, intent, entities = []) {
    this.previousIntents.push(this.userIntent);
    this.userIntent = intent;
    this.entities = entities;
    
    // Detect business user
    this.detectBusinessUser(userMessage);
    
    // Update conversation stage
    this.updateConversationStage(intent);
    
    // Track topic changes
    this.updateTopic(intent);
  }

  detectBusinessUser(message) {
    const businessKeywords = [
      'por mayor', 'mayorista', 'distribuidor', 'revendedor', 
      'negocio', 'empresa', 'tienda', 'venta', 'compra',
      'stock', 'inventario', 'proveedor', 'fabrica'
    ];
    
    const isBusiness = businessKeywords.some(keyword => 
      message.toLowerCase().includes(keyword)
    );
    
    if (isBusiness && !this.userProfile.isBusiness) {
      this.userProfile.isBusiness = true;
      this.userProfile.interests.push('business');
    }
  }

  updateConversationStage(intent) {
    const stageMap = {
      'greeting': 'greeting',
      'product_info': 'exploration',
      'pricing': 'consideration',
      'contact': 'action',
      'human_agent': 'escalation'
    };
    
    this.conversationStage = stageMap[intent] || 'exploration';
  }

  updateTopic(intent) {
    if (intent !== this.currentTopic) {
      this.currentTopic = intent;
    }
  }

  getContextSummary() {
    return {
      stage: this.conversationStage,
      topic: this.currentTopic,
      isBusiness: this.userProfile.isBusiness,
      intentCount: this.previousIntents.length,
      lastIntent: this.userIntent
    };
  }
}

export default ConversationContext;
