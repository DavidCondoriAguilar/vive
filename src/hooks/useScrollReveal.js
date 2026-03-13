import { useEffect } from 'react';

/**
 * Hook to apply scroll-reveal animations using Intersection Observer.
 * @param {Object} options - Observer options (threshold, rootMargin).
 * @param {boolean} triggerOnce - Whether an element should animate only once.
 */
export const useScrollReveal = ({ threshold = 0.1, rootMargin = '0px', triggerOnce = true } = {}) => {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin,
      threshold,
    };

    const handleIntersect = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-active');
          if (triggerOnce) observer.unobserve(entry.target);
        } else if (!triggerOnce) {
          entry.target.classList.remove('reveal-active');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => {
      observer.observe(el);
      
      // Delay stagger logic based on child indexes
      const delay = el.getAttribute('data-reveal-delay') || '0';
      el.style.transitionDelay = `${delay}ms`;
    });

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce]);
};
