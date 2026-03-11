/**
 * SEO Utilities
 */
export const createSEOMetaTags = (pageData) => {
  const defaultMeta = {
    title: "Vive - Tecnología Avanzada en Descanso | Fábrica Premium",
    description: "Lideramos la ingeniería del descanso en Perú. Sistemas de alta permanencia y confort anatómico con envío gratis en Lima.",
    canonical: "https://vive.pe/"
  };

  return { ...defaultMeta, ...pageData };
};

/**
 * Animation Utilities
 */
export const createSmoothScroll = (elementId) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

/**
 * Performance Utilities
 */
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

/**
 * Theme Utilities
 */
export const getThemeFromStorage = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('theme') || 'light';
  }
  return 'light';
};

export const applyTheme = (theme) => {
  const root = document.documentElement;
  if (theme === 'dark') {
    root.classList.add('dark');
  } else {
    root.classList.remove('dark');
  }
};
