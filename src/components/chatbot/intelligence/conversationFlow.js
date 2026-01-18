/**
 * Conversation Flow Manager
 * Manages conversation state and transitions
 * Following expert chatbot conversation design
 */

class ConversationFlow {
  constructor() {
    this.flows = this.initializeFlows();
    this.currentState = 'initial';
    this.flowHistory = [];
    this.context = {
      userIntent: null,
      entities: [],
      previousIntents: [],
      conversationStage: 'greeting',
      userProfile: {
        isBusiness: false,
        interests: [],
        preferences: []
      }
    };
  }

  initializeFlows() {
    return {
      // Business user flow
      business: {
        initial: {
          state: 'greeting',
          nextStates: ['product_inquiry', 'pricing', 'contact'],
          transitions: {
            'product_inquiry': 'exploration',
            'pricing': 'consideration',
            'contact': 'action'
          }
        },
        
        exploration: {
          state: 'product_inquiry',
          nextStates: ['pricing', 'contact', 'human_agent'],
          transitions: {
            'pricing': 'consideration',
            'contact': 'action',
            'human_agent': 'escalation'
          }
        },
        
        consideration: {
          state: 'pricing',
          nextStates: ['contact', 'human_agent'],
          transitions: {
            'contact': 'action',
            'human_agent': 'escalation'
          }
        },
        
        action: {
          state: 'contact',
          nextStates: ['escalation', 'completion'],
          transitions: {
            'escalation': 'human_agent',
            'completion': 'end'
          }
        },
        
        escalation: {
          state: 'human_agent',
          nextStates: ['completion'],
          transitions: {
            'completion': 'end'
          }
        }
      },
      
      // Regular customer flow
      regular: {
        initial: {
          state: 'greeting',
          nextStates: ['product_inquiry', 'catalog', 'help'],
          transitions: {
            'product_inquiry': 'exploration',
            'catalog': 'browsing',
            'help': 'assistance'
          }
        },
        
        exploration: {
          state: 'product_inquiry',
          nextStates: ['catalog', 'pricing', 'contact', 'help'],
          transitions: {
            'catalog': 'browsing',
            'pricing': 'consideration',
            'contact': 'action',
            'help': 'assistance'
          }
        },
        
        browsing: {
          state: 'catalog',
          nextStates: ['product_inquiry', 'pricing', 'contact'],
          transitions: {
            'product_inquiry': 'exploration',
            'pricing': 'consideration',
            'contact': 'action',
            'help': 'assistance'
          }
        },
        
        consideration: {
          state: 'pricing',
          nextStates: ['contact', 'catalog', 'help'],
          transitions: {
            'contact': 'action',
            'catalog': 'browsing',
            'help': 'assistance'
          }
        },
        
        action: {
          state: 'contact',
          nextStates: ['escalation', 'completion'],
          transitions: {
            'escalation': 'human_agent',
            'completion': 'end'
          }
        },
        
        assistance: {
          state: 'help',
          nextStates: ['product_inquiry', 'catalog', 'pricing', 'contact'],
          transitions: {
            'product_inquiry': 'exploration',
            'catalog': 'browsing',
            'pricing': 'consideration',
            'contact': 'action'
          }
        },
        
        escalation: {
          state: 'human_agent',
          nextStates: ['completion'],
          transitions: {
            'completion': 'end'
          }
        }
      }
    };
  }

  /**
   * Update conversation state based on user input
   */
  updateState(userMessage, intent, entities = []) {
    const previousState = this.currentState;
    
    // Update context
    this.context.userIntent = intent;
    this.context.entities = entities;
    this.context.previousIntents.push(intent);
    
    // Detect business user
    this.detectBusinessUser(userMessage);
    
    // Determine next state
    const flow = this.getCurrentFlow();
    const transitions = flow[previousState]?.transitions || {};
    const nextState = transitions[intent] || this.getDefaultNextState();
    
    // Update state
    this.currentState = nextState;
    this.flowHistory.push({
      from: previousState,
      to: nextState,
      intent,
      timestamp: Date.now()
    });
    
    return {
      currentState: this.currentState,
      nextStates: flow[nextState]?.nextStates || [],
      shouldEscalate: this.shouldEscalate(intent, nextState)
    };
  }

  /**
   * Detect if user is business customer
   */
  detectBusinessUser(message) {
    const businessKeywords = [
      'por mayor', 'mayorista', 'distribuidor', 'revendedor', 
      'negocio', 'empresa', 'tienda', 'venta', 'compra',
      'stock', 'inventario', 'proveedor', 'fabrica'
    ];
    
    const isBusiness = businessKeywords.some(keyword => 
      message.toLowerCase().includes(keyword)
    );
    
    if (isBusiness && !this.context.userProfile.isBusiness) {
      this.context.userProfile.isBusiness = true;
      this.context.userProfile.interests.push('business');
    }
  }

  /**
   * Get current conversation flow
   */
  getCurrentFlow() {
    const isBusiness = this.context.userProfile.isBusiness;
    return this.flows[isBusiness ? 'business' : 'regular'];
  }

  /**
   * Get default next state
   */
  getDefaultNextState() {
    const flow = this.getCurrentFlow();
    const currentState = this.currentState;
    
    // Default transitions based on current state
    const defaults = {
      'greeting': 'product_inquiry',
      'product_inquiry': 'catalog',
      'catalog': 'pricing',
      'pricing': 'contact',
      'contact': 'completion'
    };
    
    return defaults[currentState] || 'greeting';
  }

  /**
   * Determine if conversation should escalate to human
   */
  shouldEscalate(intent, nextState) {
    // Escalation conditions
    const escalationTriggers = [
      intent === 'human_agent',
      nextState === 'human_agent',
      this.context.previousIntents.filter(i => i === 'human_agent').length > 2, // Too many requests for human
      this.context.conversationStage === 'escalation'
    ];
    
    return escalationTriggers.some(trigger => trigger);
  }

  /**
   * Get conversation summary
   */
  getConversationSummary() {
    return {
      currentState: this.currentState,
      flowType: this.context.userProfile.isBusiness ? 'business' : 'regular',
      stage: this.context.conversationStage,
      intentCount: this.context.previousIntents.length,
      lastIntent: this.context.userIntent,
      entities: this.context.entities,
      userProfile: this.context.userProfile,
      flowHistory: this.flowHistory
    };
  }

  /**
   * Check if conversation should end
   */
  shouldEndConversation() {
    const endConditions = [
      this.currentState === 'completion',
      this.context.previousIntents.length > 10, // Too many messages
      Date.now() - this.flowHistory[this.flowHistory.length - 1]?.timestamp > 300000 // 5 minutes inactive
    ];
    
    return endConditions.some(condition => condition);
  }

  /**
   * Reset conversation
   */
  reset() {
    this.currentState = 'initial';
    this.flowHistory = [];
    this.context = {
      userIntent: null,
      entities: [],
      previousIntents: [],
      conversationStage: 'greeting',
      userProfile: {
        isBusiness: false,
        interests: [],
        preferences: []
      }
    };
  }

  /**
   * Get conversation metrics
   */
  getMetrics() {
    return {
      totalMessages: this.context.previousIntents.length,
      flowType: this.context.userProfile.isBusiness ? 'business' : 'regular',
      currentState: this.currentState,
      conversationDuration: this.flowHistory.length > 0 ? 
        Date.now() - this.flowHistory[0].timestamp : 0,
      intentDistribution: this.getIntentDistribution(),
      escalationRate: this.getEscalationRate()
    };
  }

  /**
   * Get intent distribution
   */
  getIntentDistribution() {
    const distribution = {};
    this.context.previousIntents.forEach(intent => {
      distribution[intent] = (distribution[intent] || 0) + 1;
    });
    return distribution;
  }

  /**
   * Get escalation rate
   */
  getEscalationRate() {
    const totalMessages = this.context.previousIntents.length;
    const escalations = this.context.previousIntents.filter(i => i === 'human_agent').length;
    return totalMessages > 0 ? (escalations / totalMessages) * 100 : 0;
  }
}

export default ConversationFlow;
