import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '@/hooks/useTheme';
import logoVive from '@assets/images/logos/vive.png';

const Logo = ({
  size = 'medium',
  className = '',
  onClick = null,
  to = null,
  variant = 'auto', // 'auto', 'light' (for light bg), 'dark' (for dark bg)
  ...props
}) => {
  const { theme } = useTheme();
  // Determine size classes
  const sizeClasses = {
    small: 'h-8 md:h-10',
    medium: 'h-10 md:h-14',
    large: 'h-16 md:h-24',
    xlarge: 'h-12 md:h-16'
  }[size] || 'h-10';

  const containerClasses = `
    ${sizeClasses}
    flex
    items-center
    justify-center
    relative
    ${onClick || to ? 'cursor-pointer' : ''}
    ${className}
  `;

  // Determine correct logo context
  const effectiveTheme = variant === 'auto' ? theme : (variant === 'light' ? 'light' : 'dark');

  // Logo selection:
  // Usamos el logo Vive para todos los temas
  const logoSrc = logoVive;

  // Logo content
  const logoContent = (
    <img
      src={logoSrc}
      alt="Vive - Fábrica de Colchones"
      className="h-full w-auto object-contain select-none transition-opacity duration-300"
      loading="eager"
    />
  );

  if (to) {
    return (
      <Link
        to={to}
        className={containerClasses}
        aria-label="Logo - Volver al inicio"
        {...props}
      >
        {logoContent}
      </Link>
    );
  }

  if (onClick) {
    return (
      <button
        onClick={onClick}
        className={containerClasses}
        aria-label="Logo - Volver al inicio"
        type="button"
        {...props}
      >
        {logoContent}
      </button>
    );
  }

  return (
    <div className={containerClasses} {...props}>
      {logoContent}
    </div>
  );
};

export default Logo;
