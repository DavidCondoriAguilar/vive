import { useState, useEffect } from 'react';

/**
 * Hook personalizado para manejar el estado de carga inicial de la aplicación
 * @param {number} delay - Tiempo mínimo de carga en milisegundos (default: 1500)
 * @returns {boolean} - Estado de carga
 */
export const useInitialLoading = (delay = 1500) => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsReady(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return isReady;
};

/**
 * Hook personalizado para animaciones de progreso suave
 * @param {number} targetProgress - Progreso objetivo (0-100)
 * @param {number} duration - Duración de la animación en ms
 * @returns {number} - Progreso actual
 */
export const useSmoothProgress = (targetProgress = 85, duration = 100) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= targetProgress) return prev;
        return prev + (targetProgress - prev) * 0.08; // Smooth easing
      });
    }, duration);

    return () => clearInterval(interval);
  }, [targetProgress, duration]);

  return Math.round(progress);
};

/**
 * Hook personalizado para manejar texto de carga con delay
 * @param {string} text - Texto a mostrar
 * @param {number} delay - Delay antes de mostrar el texto
 * @returns {Object} - { showText: boolean, text: string }
 */
export const useLoadingText = (text = "Cargando...", delay = 600) => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowText(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return { showText, text };
};
