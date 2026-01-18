import { useState, useRef, useEffect } from 'react';

export const useDragCarousel = (onSlideChange) => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const [dragDistance, setDragDistance] = useState(0);
  const carouselRef = useRef(null);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setCurrentX(e.clientX);
    setDragDistance(0);
    
    // Prevent text selection while dragging
    document.body.style.userSelect = 'none';
    document.body.style.cursor = 'grabbing';
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    
    e.preventDefault();
    setCurrentX(e.clientX);
    const distance = e.clientX - startX;
    setDragDistance(distance);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    
    setIsDragging(false);
    document.body.style.userSelect = '';
    document.body.style.cursor = '';
    
    // Determine if we should change slides based on drag distance
    const threshold = 50; // Minimum drag distance to trigger slide change
    
    if (Math.abs(dragDistance) > threshold) {
      if (dragDistance > 0) {
        onSlideChange('prev');
      } else {
        onSlideChange('next');
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
    const touch = e.touches[0];
    setIsDragging(true);
    setStartX(touch.clientX);
    setCurrentX(touch.clientX);
    setDragDistance(0);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    
    e.preventDefault();
    const touch = e.touches[0];
    setCurrentX(touch.clientX);
    const distance = touch.clientX - startX;
    setDragDistance(distance);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    
    setIsDragging(false);
    
    const threshold = 50;
    
    if (Math.abs(dragDistance) > threshold) {
      if (dragDistance > 0) {
        onSlideChange('prev');
      } else {
        onSlideChange('next');
      }
    }
    
    setDragDistance(0);
  };

  useEffect(() => {
    const handleGlobalMouseMove = (e) => handleMouseMove(e);
    const handleGlobalMouseUp = () => handleMouseUp();
    
    if (isDragging) {
      document.addEventListener('mousemove', handleGlobalMouseMove);
      document.addEventListener('mouseup', handleGlobalMouseUp);
    }
    
    return () => {
      document.removeEventListener('mousemove', handleGlobalMouseMove);
      document.removeEventListener('mouseup', handleGlobalMouseUp);
    };
  }, [isDragging, startX]);

  return {
    carouselRef,
    isDragging,
    dragDistance,
    handlers: {
      onMouseDown: handleMouseDown,
      onMouseLeave: handleMouseLeave,
      onTouchStart: handleTouchStart,
      onTouchMove: handleTouchMove,
      onTouchEnd: handleTouchEnd
    }
  };
};
