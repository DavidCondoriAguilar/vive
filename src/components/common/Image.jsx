import React, { useState, useRef, useEffect } from 'react';

const LazyImage = ({
  src,
  alt,
  className = '',
  placeholder = '/api/placeholder/400/300',
  webpSrc,
  width,
  height,
  priority = false, // For above-the-fold images
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    // Skip intersection observer for priority images
    if (priority) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
  };

  // Generate WebP source if not provided
  const webpSource = webpSrc || (!src.startsWith('/images/') ? src.replace(/\.(jpg|jpeg|png)$/i, '.webp') : src);

  return (
    <div
      ref={imgRef}
      className={`relative overflow-hidden ${className}`}
      {...props}
      style={{
        width: width || '100%',
        height: height || 'auto',
        ...props.style
      }}
    >
      {/* Placeholder with shimmer effect */}
      {!isLoaded && !hasError && (
        <div 
          className="lazy-load absolute inset-0 w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 animate-pulse"
          style={{
            backgroundImage: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
            backgroundSize: '200% 100%',
            animation: 'shimmer 1.5s infinite'
          }}
        />
      )}

      {/* Main image with optimized loading */}
      {isInView && (
        <img
          src={hasError ? placeholder : src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          width={width}
          height={height}
          className={`w-full h-full object-cover transition-opacity duration-700 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={handleLoad}
          onError={handleError}
          style={{
            objectFit: 'cover'
          }}
        />
      )}
    </div>
  );
};

export default LazyImage;
