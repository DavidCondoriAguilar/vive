import { useState, useEffect } from 'react';
import { getThemeFromStorage, applyTheme } from '@/utils/helpers';

/**
 * Hook personalizado para manejar el tema de la aplicación
 * @returns {Object} - { theme: string, toggleTheme: function }
 */
export const useTheme = () => {
  const [theme, setTheme] = useState(() => getThemeFromStorage());

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return { theme, toggleTheme };
};

/**
 * Hook personalizado para manejar el scroll al top
 */
export const useScrollToTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
};