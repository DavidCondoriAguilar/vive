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
  const [isHighDPI, setIsHighDPI] = useState(false);

  // Detect high DPI displays on mount
  useEffect(() => {
    const checkDPI = () => {
      const pixelRatio = window.devicePixelRatio || 1;
      setIsHighDPI(pixelRatio > 1.5);
    };

    checkDPI();

    // Listen for DPI changes (rare but possible)
    if (window.matchMedia) {
      const mediaQuery = window.matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`);
      mediaQuery.addListener(checkDPI);
      return () => mediaQuery.removeListener(checkDPI);
    }
  }, []);

  // Size configurations - Optimized for a refined and professional size
  const sizeConfig = {
    small: { container: 'w-16 h-8 md:w-20 md:h-12 min-w-[64px]', image: 'w-full h-full' },
    medium: { container: 'w-40 h-20 md:w-48 md:h-20 min-w-[160px]', image: 'w-full h-full' },
    large: { container: 'w-56 h-28 xs:w-64 xs:h-32 md:w-72 md:h-36 min-w-[224px]', image: 'w-full h-full' },
    xlarge: { container: 'w-32 h-16 md:w-44 md:h-20 min-w-[128px]', image: 'w-full h-full' }
  };

  // High DPI (4K/Retina) - Refined visual footprint
  const highDPIConfig = {
    small: { container: 'w-18 h-10 md:w-24 md:h-14 min-w-[72px]', image: 'w-full h-full' },
    medium: { container: 'w-48 h-24 md:w-56 md:h-24 min-w-[192px]', image: 'w-full h-full' },
    large: { container: 'w-64 h-36 xs:w-72 xs:h-40 md:w-88 md:h-44 min-w-[256px]', image: 'w-full h-full' },
    xlarge: { container: 'w-36 h-18 md:w-52 md:h-24 min-w-[144px]', image: 'w-full h-full' }
  };

  const currentConfig = isHighDPI ? highDPIConfig : sizeConfig;
  const currentSize = currentConfig[size] || currentConfig.medium;

  // Transparent container for seamless integration
  const containerClasses = `
    ${currentSize.container}
    transition-all
    duration-500
    flex
    items-center
    justify-center
    relative
    ${onClick || to ? 'cursor-pointer' : ''}
    ${className}
  `;



  // Determine correct logo context
  const effectiveTheme = variant === 'auto' ? theme : (variant === 'light' ? 'light' : 'dark');

  // Image fit
  const imageClasses = `
    ${currentSize.image}
    object-contain
    transition-all
    duration-300
    select-none
  `;

  // Logo selection:
  // Usamos el logo Vive para todos los temas
  const logoSrc = logoVive;

  // Logo content
  const logoContent = (
    <img
      src={logoSrc}
      alt="Vive - Fábrica de Colchones"
      className={imageClasses}
      style={{
        filter: 'none',
        WebkitFilter: 'none'
      }}
      loading="eager"
      decoding="async"
      width="160"
      height="64"
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
