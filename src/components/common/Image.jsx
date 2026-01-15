import React, { useState, useRef, useEffect } from 'react';

const LazyImage = ({ 
  src, 
  alt, 
  className = '', 
  placeholder = '/api/placeholder/400/300',
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
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
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
  };

  return (
    <div 
      ref={imgRef} 
      className={`relative overflow-hidden ${className}`}
      {...props}
    >
      {/* Placeholder */}
      {!isLoaded && !hasError && (
        <div className="lazy-load absolute inset-0 w-full h-full" />
      )}
      
      {/* Image */}
      {isInView && (
        <img
          src={hasError ? placeholder : src}
          alt={alt}
          className={`w-full h-full object-cover transition-opacity duration-1000 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={handleLoad}
          onError={handleError}
        />
      )}
    </div>
  );
};

export default LazyImage;
