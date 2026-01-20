import React, { useState, useEffect } from 'react';
import { useTheme } from '@/hooks/useTheme';
import logoClaro from '@assets/images/logos/logo-claro.png';
import logoAlt from '@assets/images/logos/logo-alt.png';
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
    small: { container: 'w-16 h-16 xs:w-18 xs:h-18 sm:w-20 sm:h-20 md:w-24 md:h-24 min-w-[64px] min-h-[64px]', image: 'w-full h-full' },
    medium: { container: 'w-20 h-20 xs:w-24 xs:h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 min-w-[80px] min-h-[80px]', image: 'w-full h-full' },
    large: { container: 'w-24 h-24 xs:w-28 xs:h-28 sm:w-32 sm:h-32 md:w-56 md:h-20 min-w-[96px] min-h-[96px]', image: 'w-full h-full' },
    xlarge: { container: 'w-32 h-32 xs:w-36 xs:h-36 sm:w-40 sm:h-40 md:w-72 md:h-28 min-w-[128px] min-h-[128px]', image: 'w-full h-full' }
  };

  // High DPI (4K/Retina) - Maximum clarity with much larger visual footprint
  const highDPIConfig = {
    small: { container: 'w-18 h-18 xs:w-20 xs:h-20 sm:w-22 sm:h-22 md:w-28 md:h-28 min-w-[72px] min-h-[72px]', image: 'w-full h-full' },
    medium: { container: 'w-22 h-22 xs:w-26 xs:h-26 sm:w-30 sm:h-30 md:w-36 md:h-36 min-w-[88px] min-h-[88px]', image: 'w-full h-full' },
    large: { container: 'w-28 h-28 xs:w-32 xs:h-32 sm:w-36 sm:h-36 md:w-64 md:h-24 min-w-[112px] min-h-[112px]', image: 'w-full h-full' },
    xlarge: { container: 'w-36 h-36 xs:w-40 xs:h-40 sm:w-44 sm:h-44 md:w-80 md:h-32 min-w-[144px] min-h-[144px]', image: 'w-full h-full' }
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
