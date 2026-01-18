/**
 * Main Chatbot component
 * Orchestrates all chatbot sub-components with working intelligence
 * Following clean architecture principles
 */

import React from 'react';
import ChatButton from './components/ChatButton.jsx';
import ChatWindow from './components/ChatWindow.jsx';
import { useChatbotFixed } from './hooks/useChatbotFixed.js';

/**
 * Chatbot component with working intelligence
 * Complete chatbot functionality with proven patterns
 */
const Chatbot = () => {
  const {
    messages,
    isOpen,
    isTyping,
    handleUserMessage,
    handleQuickReply,
    toggleChat,
    closeChat,
    getUnreadCount
  } = useChatbotFixed();

  return (
    <>
      {/* Floating Chat Button */}
      <ChatButton
        isOpen={isOpen}
        unreadCount={getUnreadCount()}
        onClick={toggleChat}
      />

      {/* Chat Window */}
      {isOpen && (
        <ChatWindow
          messages={messages}
          isTyping={isTyping}
          onClose={closeChat}
          onSendMessage={handleUserMessage}
          onQuickReply={handleQuickReply}
        />
      )}
    </>
  );
};

export default Chatbot;
