/**
 * ChatWindow component
 * Main chat interface with messages and input
 * Following atomic design principles
 */

import React, { useState, useRef, useEffect } from 'react';
import { FaPaperPlane, FaTimes } from 'react-icons/fa';
import MessageBubble from './MessageBubble.jsx';
import TypingIndicator from './TypingIndicator.jsx';
import logoClaro from '@assets/images/logos/logo-claro.png';
import logoOscuro from '@assets/images/logos/logo-main.jpg';

/**
 * ChatWindow component props
 * @typedef {Object} ChatWindowProps
 * @property {Array} messages - Chat messages array
 * @property {boolean} isTyping - Whether bot is typing
 * @property {Function} onClose - Close handler
 * @property {Function} onSendMessage - Send message handler
 * @property {Function} onQuickReply - Quick reply handler
 */

/**
 * Chat window component
 * @param {ChatWindowProps} props - Component props
 */
const ChatWindow = ({
  messages,
  isTyping,
  onClose,
  onSendMessage,
  onQuickReply
}) => {
  const [inputValue, setInputValue] = useState('');
  const [isMinimized, setIsMinimized] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Detect dark mode
  useEffect(() => {
    const checkDarkMode = () => {
      const isDark = document.documentElement.classList.contains('dark') ||
        window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(isDark);
    };

    checkDarkMode();

    // Listen for theme changes
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  // Focus input when window opens
  useEffect(() => {
    if (!isMinimized) {
      inputRef.current?.focus();
    }
  }, [isMinimized]);

  /**
   * Handle message submission
   * @param {React.FormEvent} e - Form event
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onSendMessage(inputValue.trim());
      setInputValue('');
    }
  };

  /**
   * Handle input key press
   * @param {React.KeyboardEvent} e - Keyboard event
   */
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="fixed bottom-20 right-4 left-4 sm:left-auto sm:right-6 sm:w-96 h-[500px] bg-white dark:bg-gray-800 
                rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 
                flex flex-col z-[190] animate-slide-up
                max-h-[75vh] md:max-h-[70vh] overflow-hidden">

      {/* Header */}
      <div className="bg-gold-500 text-white px-4 py-3 rounded-t-2xl flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
            <img
              src={isDarkMode ? logoClaro : logoOscuro}
              alt="Sueño Dorado"
              className="w-8 h-8 object-contain"
            />
          </div>
          <div>
            <h3 className="font-semibold text-white">Sueño Dorado</h3>
            <p className="text-xs text-white/90">Asistente virtual</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="w-6 h-6 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
            title={isMinimized ? "Maximizar" : "Minimizar"}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMinimized ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
              )}
            </svg>
          </button>
          <button
            onClick={onClose}
            className="w-6 h-6 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
            title="Cerrar chat"
          >
            <FaTimes className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Messages Container */}
      {!isMinimized && (
        <>
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-1">
            {messages.map((message) => (
              <MessageBubble
                key={message.id}
                message={message}
                onQuickReply={onQuickReply}
              />
            ))}

            {isTyping && <TypingIndicator />}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="border-t border-gray-200 dark:border-gray-700 px-4 py-3">
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Escribe tu mensaje..."
                className="flex-1 px-3 py-2 bg-gray-100 dark:bg-gray-700 
                         border border-gray-300 dark:border-gray-600 rounded-lg
                         text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/50
                         placeholder-gray-500 dark:placeholder-gray-400"
                maxLength={500}
              />

              <button
                type="submit"
                disabled={!inputValue.trim()}
                className="w-10 h-10 bg-gold-500 hover:bg-gold-600 text-white 
                         rounded-lg flex items-center justify-center transition-colors
                         disabled:opacity-50 disabled:cursor-not-allowed
                         focus:outline-none focus:ring-2 focus:ring-gold-500/50"
                title="Enviar mensaje"
              >
                <FaPaperPlane className="w-4 h-4" />
              </button>
            </form>

            {/* Character count */}
            <div className="text-xs text-gray-500 dark:text-gray-400 text-right mt-1">
              {inputValue.length}/500
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ChatWindow;
