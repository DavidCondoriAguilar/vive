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

  // Size configurations - Fully Responsive
  const sizeConfig = {
    small: { container: 'w-10 h-10 md:w-16 md:h-16', image: 'w-full h-full' },
    medium: { container: 'w-12 h-12 md:w-20 md:h-20', image: 'w-full h-full' },
    large: { container: 'w-14 h-14 md:w-24 md:h-24', image: 'w-full h-full' },
    xlarge: { container: 'w-16 h-16 md:w-28 md:h-28', image: 'w-full h-full' }
  };

  // High DPI (4K/Retina) - slightly larger base but still responsive
  const highDPIConfig = {
    small: { container: 'w-12 h-12 md:w-20 md:h-20', image: 'w-full h-full' },
    medium: { container: 'w-14 h-14 md:w-24 md:h-24', image: 'w-full h-full' },
    large: { container: 'w-16 h-16 md:w-28 md:h-28', image: 'w-full h-full' },
    xlarge: { container: 'w-20 h-20 md:w-32 md:h-32', image: 'w-full h-full' }
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
    z-50
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

  const logoSrc = logoClaro;

  // Logo content
  const logoContent = (
    <img
      src={logoSrc}
      alt="Logo Sueño Dorado"
      className={imageClasses}
      style={{
        filter: effectiveTheme === 'dark' ? 'brightness(0) invert(1)' : 'none',
        WebkitFilter: effectiveTheme === 'dark' ? 'brightness(0) invert(1)' : 'none'
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
