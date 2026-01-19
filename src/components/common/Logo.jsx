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

  // Size configurations - Perfectly balanced for Navbar integration
  const sizeConfig = {
    small: { container: 'w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 min-w-[32px] min-h-[32px]', image: 'w-full h-full' },
    medium: { container: 'w-10 h-10 xs:w-11 xs:h-11 sm:w-12 sm:h-12 md:w-16 md:h-16 min-w-[40px] min-h-[40px]', image: 'w-full h-full' },
    large: { container: 'w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 md:w-36 md:h-14 min-w-[48px] min-h-[48px]', image: 'w-full h-full' },
    xlarge: { container: 'w-14 h-14 xs:w-16 xs:h-16 sm:w-20 sm:h-20 md:w-48 md:h-18 min-w-[56px] min-h-[56px]', image: 'w-full h-full' }
  };

  // High DPI (4K/Retina) - Enhanced clarity with same visual footprint
  const highDPIConfig = {
    small: { container: 'w-9 h-9 xs:w-10 xs:h-10 sm:w-11 sm:h-11 md:w-14 md:h-14 min-w-[36px] min-h-[36px]', image: 'w-full h-full' },
    medium: { container: 'w-11 h-11 xs:w-12 xs:h-12 sm:w-13 sm:h-13 md:w-18 md:h-18 min-w-[44px] min-h-[44px]', image: 'w-full h-full' },
    large: { container: 'w-14 h-14 xs:w-16 xs:h-16 sm:w-18 sm:h-18 md:w-40 md:h-16 min-w-[56px] min-h-[56px]', image: 'w-full h-full' },
    xlarge: { container: 'w-18 h-18 xs:w-20 xs:h-20 sm:w-24 sm:h-24 md:w-56 md:h-20 min-w-[72px] min-h-[72px]', image: 'w-full h-full' }
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

  const logoSrc = effectiveTheme === 'light' ? logoClaro : logoOscuro;

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
