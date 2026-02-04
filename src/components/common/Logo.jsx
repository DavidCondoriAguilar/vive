import React, { useState, useEffect } from 'react';
import { useTheme } from '@/hooks/useTheme';
import logoClaro from '@assets/images/logos/logo-claro.png';
import brandLogo from '@assets/images/logos/brand.png';
import logoOscuro from '@assets/images/logos/logo-main.jpg';
import logoDark from '@assets/images/logos/logo-dark.png';

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

  // Size configurations - Optimized for a refined and professional size
  const sizeConfig = {
    small: { container: 'w-12 h-6 md:w-16 md:h-10 min-w-[48px]', image: 'w-full h-full' },
    medium: { container: 'w-24 h-12 md:w-40 md:h-16 min-w-[96px]', image: 'w-full h-full' },
    large: { container: 'w-48 h-24 xs:w-56 xs:h-28 md:w-64 md:h-32 min-w-[192px]', image: 'w-full h-full' },
    xlarge: { container: 'w-20 h-10 md:w-36 md:h-14 min-w-[80px]', image: 'w-full h-full' }
  };

  // High DPI (4K/Retina) - Refined visual footprint
  const highDPIConfig = {
    small: { container: 'w-14 h-8 md:w-20 md:h-12 min-w-[56px]', image: 'w-full h-full' },
    medium: { container: 'w-32 h-16 md:w-48 md:h-20 min-w-[128px]', image: 'w-full h-full' },
    large: { container: 'w-56 h-32 xs:w-64 xs:h-36 md:w-80 md:h-40 min-w-[224px]', image: 'w-full h-full' },
    xlarge: { container: 'w-24 h-12 md:w-44 md:h-16 min-w-[96px]', image: 'w-full h-full' }
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

  // Logo selection:
  // effectiveTheme === 'light' (Modo Claro) -> logo-claro.png
  // effectiveTheme === 'dark' (Modo Oscuro) -> logo-dark.png
  const logoSrc = effectiveTheme === 'light' ? logoClaro : logoDark;

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
