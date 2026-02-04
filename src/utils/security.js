import DOMPurify from 'dompurify';

/**
 * Sanitizes an HTML string to prevent XSS attacks.
 * @param {string} html - The raw HTML string to sanitize.
 * @returns {string} - The sanitized HTML string.
 */
export const sanitizeHTML = (html) => {
    if (!html) return '';
    return DOMPurify.sanitize(html, {
        ALLOWED_TAGS: ['mark', 'b', 'strong', 'i', 'em', 'span', 'p', 'br'],
        ALLOWED_ATTR: ['class']
    });
};
