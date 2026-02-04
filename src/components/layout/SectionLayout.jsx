import React from 'react';

/**
 * Section Layout Component
 * Provides consistent spacing and structure for home page sections
 */
const SectionLayout = ({
  children,
  className = "",
  containerClassName = "",
  background = "default"
}) => {
  const backgroundClasses = {
    default: "bg-white dark:bg-dream-900",
    white: "bg-white dark:bg-black",
    gray: "bg-gray-50 dark:bg-white/5",
    gradient: "bg-gradient-to-br from-gold-50/50 to-white dark:from-dream-900 dark:to-dream-950",
    factory: "bg-factory-pattern" // New pattern background
  };

  return (
    <section className={`${backgroundClasses[background] || backgroundClasses.default} py-20 px-6 md:px-12 relative overflow-hidden transition-colors duration-500 ${className}`}>
      <div className={`container mx-auto max-w-7xl relative z-10 ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
};

export default SectionLayout;