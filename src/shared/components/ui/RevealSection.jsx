import React from 'react';

/**
 * Wrapper component that adds scroll reveal animation to its children
 */
const RevealSection = ({ children, className = '', delay = 0 }) => {
  return (
    <div 
      className={`reveal ${className}`} 
      data-reveal-delay={delay}
    >
      {children}
    </div>
  );
};

export default RevealSection;
