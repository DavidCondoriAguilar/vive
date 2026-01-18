/**
 * SEO Utilities
 */
export const createSEOMetaTags = (pageData) => {
  const defaultMeta = {
    title: "Sueño Dorado - Fábrica de Colchones Premium en Lima | Envío Gratis",
    description: "Fabrica peruana de colchones premium con hasta 10 años de garantía. Colchones pocket, viscoelásticos y spring. Envío gratis en Lima.",
    canonical: "https://suenodorado.pe/"
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