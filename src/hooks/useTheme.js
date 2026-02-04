import { useContext, useEffect } from 'react';
import { useThemeContext } from '@/contexts/ThemeContext';

/**
 * Hook personalizado para manejar el tema de la aplicación
 * @returns {Object} - { theme: string, toggleTheme: function }
 */
export const useTheme = () => {
  return useThemeContext();
};

/**
 * Hook personalizado para manejar el scroll al top
 */
export const useScrollToTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
};