/**
 * Analytics Configuration - Runtime Loading
 * 
 * This file is loaded at runtime, not build time.
 * Configure your analytics IDs in window.APP_CONFIG before this script loads.
 * 
 * Usage in production:
 * 1. Add window.APP_CONFIG = { GA_ID: 'G-XXX', FB_PIXEL: 'XXX' } before this script
 * 2. Or use a config.js file that sets window.APP_CONFIG
 * 
 * Security: No build variables exposed - all config is runtime
 */

(function() {
  'use strict';
  
  // Get config from window.APP_CONFIG (set by server or inline script)
  const config = window.APP_CONFIG || {};
  const gaId = config.GA_ID || '';
  const fbPixelId = config.FB_PIXEL || '';
  
  // Google Analytics
  if (gaId) {
    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', gaId);
    
    // Load GA script
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + gaId;
    document.head.appendChild(script);
  }
  
  // Facebook Pixel
  if (fbPixelId) {
    !function(f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function() {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = '2.0';
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
    
    fbq('init', fbPixelId);
    fbq('track', 'PageView');
  }
})();
