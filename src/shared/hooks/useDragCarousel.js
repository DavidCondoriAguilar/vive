import { useState, useRef, useEffect } from 'react';

export const useDragCarousel = (onSlideChange) => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const [dragDistance, setDragDistance] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const carouselRef = useRef(null);

  const handleMouseDown = (e) => {
    if (isAnimating) return;
    
    setIsDragging(true);
    setStartX(e.clientX);
    setCurrentX(e.clientX);
    setDragDistance(0);
    
    // Prevent text selection while dragging
    document.body.style.userSelect = 'none';
    document.body.style.cursor = 'grabbing';
    
    // Add haptic feedback for mobile
    if (window.navigator.vibrate) {
      window.navigator.vibrate(10);
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging || isAnimating) return;
    
    e.preventDefault();
    setCurrentX(e.clientX);
    const distance = e.clientX - startX;
    setDragDistance(distance);
    
    // Add visual feedback during drag
    if (carouselRef.current) {
      const track = carouselRef.current.querySelector('[data-carousel-track]');
      if (track) {
        track.style.transform = `translateX(calc(${-distance}px + var(--base-transform, 0px)))`;
      }
    }
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    
    setIsDragging(false);
    document.body.style.userSelect = '';
    document.body.style.cursor = '';
    
    // Enhanced threshold based on screen size
    const threshold = window.innerWidth < 640 ? 25 : window.innerWidth < 1024 ? 40 : 60;
    const velocity = Math.abs(dragDistance) / 10; // Calculate swipe velocity
    
    // Auto-advance if strong swipe or distance exceeds threshold
    if (Math.abs(dragDistance) > threshold || velocity > 5) {
      setIsAnimating(true);
      
      if (dragDistance > 0) {
        onSlideChange('prev');
      } else {
        onSlideChange('next');
      }
      
      // Reset animation state after transition
      setTimeout(() => setIsAnimating(false), 500);
    } else {
      // Snap back to original position
      if (carouselRef.current) {
        const track = carouselRef.current.querySelector('[data-carousel-track]');
        if (track) {
          track.style.transform = 'var(--base-transform, 0px)';
        }
      }
    }
    
    // Reset drag distance
    setDragDistance(0);
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      handleMouseUp();
    }
  };

  const handleTouchStart = (e) => {
    if (isAnimating) return;
    
    const touch = e.touches[0];
    setIsDragging(true);
    setStartX(touch.clientX);
    setCurrentX(touch.clientX);
    setDragDistance(0);
    
    // Haptic feedback
    if (window.navigator.vibrate) {
      window.navigator.vibrate(10);
    }
  };

  const handleTouchMove = (e) => {
    if (!isDragging || isAnimating) return;
    
    const touch = e.touches[0];
    setCurrentX(touch.clientX);
    const distance = touch.clientX - startX;
    setDragDistance(distance);
    
    // Visual feedback during touch
    if (carouselRef.current) {
      const track = carouselRef.current.querySelector('[data-carousel-track]');
      if (track) {
        track.style.transform = `translateX(calc(${-distance}px + var(--base-transform, 0px)))`;
      }
    }
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    
    setIsDragging(false);
    
    // Mobile-optimized thresholds
    const threshold = window.innerWidth < 640 ? 20 : 35;
    const velocity = Math.abs(dragDistance) / 8;
    
    if (Math.abs(dragDistance) > threshold || velocity > 4) {
      setIsAnimating(true);
      
      if (dragDistance > 0) {
        onSlideChange('prev');
      } else {
        onSlideChange('next');
      }
      
      setTimeout(() => setIsAnimating(false), 500);
    } else {
      // Snap back
      if (carouselRef.current) {
        const track = carouselRef.current.querySelector('[data-carousel-track]');
        if (track) {
          track.style.transform = 'var(--base-transform, 0px)';
        }
      }
    }
    
    setDragDistance(0);
  };

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (isAnimating) return;
    
    switch (e.key) {
      case 'ArrowLeft':
        setIsAnimating(true);
        onSlideChange('prev');
        setTimeout(() => setIsAnimating(false), 500);
        break;
      case 'ArrowRight':
        setIsAnimating(true);
        onSlideChange('next');
        setTimeout(() => setIsAnimating(false), 500);
        break;
    }
  };

  useEffect(() => {
    const handleGlobalMouseMove = (e) => handleMouseMove(e);
    const handleGlobalMouseUp = () => handleMouseUp();
    const handleGlobalKeyDown = (e) => handleKeyDown(e);
    
    if (isDragging) {
      document.addEventListener('mousemove', handleGlobalMouseMove);
      document.addEventListener('mouseup', handleGlobalMouseUp);
    }
    
    // Always listen for keyboard events
    document.addEventListener('keydown', handleGlobalKeyDown);
    
    return () => {
      document.removeEventListener('mousemove', handleGlobalMouseMove);
      document.removeEventListener('mouseup', handleGlobalMouseUp);
      document.removeEventListener('keydown', handleGlobalKeyDown);
    };
  }, [isDragging, startX, isAnimating]);

  return {
    carouselRef,
    isDragging,
    dragDistance,
    isAnimating,
    handlers: {
      onMouseDown: handleMouseDown,
      onMouseLeave: handleMouseLeave,
      onTouchStart: handleTouchStart,
      onTouchMove: handleTouchMove,
      onTouchEnd: handleTouchEnd
    }
  };
};
