import { useEffect } from 'react';

/**
 * Hook to apply ultra minimal 2026 scroll-reveal animations using Intersection Observer.
 * Specifically optimized for React to handle dynamic routes cleanly.
 * @param {Object} options - Observer options (threshold, rootMargin).
 * @param {boolean} triggerOnce - Whether an element should animate only once.
 */
export const useScrollReveal = ({ threshold = 0.05, rootMargin = '50px', triggerOnce = true } = {}) => {
  useEffect(() => {
    // 1. Create the Intersection Observer
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

    const intersectionObserver = new IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin,
      threshold,
    });

    // 2. Discover and observe elements function
    const observeElements = () => {
      // Find all reveal elements that haven't been observed natively yet
      const revealElements = document.querySelectorAll('.reveal:not(.is-observed)');
      
      revealElements.forEach((el) => {
        el.classList.add('is-observed'); // Mark to avoid duplicate processing
        
        // Add stagger delay natively if specified
        const delay = el.getAttribute('data-reveal-delay');
        if (delay && delay !== '0') {
            el.style.transitionDelay = `${delay}ms`;
        }
        
        // Start observing
        intersectionObserver.observe(el);
      });
    };

    // Run once on mount
    observeElements();

    // 3. Keep searching for new elements dynamically loaded (React Router, Filters, etc)
    const intervalId = setInterval(observeElements, 500);

    // 4. Cleanup ONLY the observer and interval!
    return () => {
      clearInterval(intervalId);
      intersectionObserver.disconnect();
      
      // Remove the 'is-observed' class on unmount
      // so if the view remounts (Navigating from Catalog to Home), it catches them again.
      document.querySelectorAll('.is-observed').forEach(el => {
          el.classList.remove('is-observed');
      });
    };
  }, [threshold, rootMargin, triggerOnce]);
};
