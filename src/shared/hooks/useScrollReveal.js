import { useEffect } from 'react';

/**
 * Hook para animaciones de reveal al hacer scroll
 * @param {string} selector - Selector CSS de los elementos a revelar
 * @param {Object} options - Opciones de IntersectionObserver
 */
export const useScrollReveal = (selector = '.reveal', options = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -100px 0px',
    revealClass = 'reveal'
  } = options;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(`${revealClass}-active`);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold,
        rootMargin
      }
    );

    const elements = document.querySelectorAll(selector);
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [selector, threshold, rootMargin, revealClass]);
};

export default useScrollReveal;
