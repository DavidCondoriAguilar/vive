import React, { useState, useEffect } from 'react';
import { useTheme } from '@/hooks/useTheme';
import logoClaro from '@assets/images/logos/logo-claro.png';
import brandLogo from '@assets/images/logos/brand.png';
import logoOscuro from '@assets/images/logos/logo-main.jpg';

const Logo = ({
  size = 'medium',
  className = '',
  onClick = null,
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

  // Size configurations - Much larger sizes for maximum visibility
  const sizeConfig = {
    small: { container: 'w-16 h-10 md:w-24 md:h-14 min-w-[64px]', image: 'w-full h-full' },
    medium: { container: 'w-40 h-24 md:w-60 md:h-30 min-w-[160px]', image: 'w-full h-full' },
    large: { container: 'w-80 h-50 xs:w-96 xs:h-56 md:w-[450px] md:h-50 min-w-[320px]', image: 'w-full h-full' },
    xlarge: { container: 'w-60 h-24 md:w-[500px] md:h-40 min-w-[240px]', image: 'w-full h-full' }
  };

  // High DPI (4K/Retina) - Maximum clarity with much larger visual footprint
  const highDPIConfig = {
    small: { container: 'w-20 h-12 md:w-32 md:h-18 min-w-[80px]', image: 'w-full h-full' },
    medium: { container: 'w-48 h-28 md:w-72 md:h-36 min-w-[192px]', image: 'w-full h-full' },
    large: { container: 'w-96 h-56 xs:w-[450px] xs:h-64 md:w-[600px] md:h-56 min-w-[400px]', image: 'w-full h-full' },
    xlarge: { container: 'w-72 h-32 md:w-[600px] md:h-48 min-w-[288px]', image: 'w-full h-full' }
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
    ${onClick ? 'cursor-pointer' : ''}
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

  // Logo selection: 'light' refers to light background (needs dark logo), 'dark' refers to dark background (needs light logo)
  const logoSrc = effectiveTheme === 'light' ? logoOscuro : logoClaro;

  // Logo content
  const logoContent = (
    <img
      src={logoSrc}
      alt="Logo Sueño Dorado"
      className={imageClasses}
      style={{
        filter: 'none',
        WebkitFilter: 'none'
      }}
      loading="eager"
      decoding="async"
    />
  );

  const LogoComponent = onClick ? (
    <button
      onClick={onClick}
      className={containerClasses}
      aria-label="Logo - Volver al inicio"
      type="button"
      {...props}
    >
      {logoContent}
    </button>
  ) : (
    <div className={containerClasses} {...props}>
      {logoContent}
    </div>
  );

  return LogoComponent;
};

export default Logo;
