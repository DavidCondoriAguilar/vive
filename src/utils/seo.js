/**
 * SEO Utilities
 * Generates structured data (schema.json) for better search engine optimization
 */

/**
 * Generate Product Schema (JSON-LD)
 * @param {Object} product - Product data
 * @returns {Object} Schema.org Product object
 */
export const getProductSchema = (product) => {
  const productUrl = `${import.meta.env.VITE_PRODUCTION_URL}/producto/${product.id}`;
  
  return {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    '@id': productUrl,
    'name': product.name,
    'description': product.description || `${product.name} - Producto de Sueño Dorado`,
    'image': product.image,
    'brand': {
      '@type': 'Brand',
      'name': import.meta.env.VITE_BRAND_NAME
    },
    'offers': {
      '@type': 'Offer',
      'url': productUrl,
      'priceCurrency': 'PEN',
      'price': product.price?.toString() || '0',
      'availability': 'https://schema.org/InStock',
      'seller': {
        '@type': 'Organization',
        'name': import.meta.env.VITE_BRAND_NAME,
        'url': import.meta.env.VITE_PRODUCTION_URL
      }
    },
    'aggregateRating': product.rating ? {
      '@type': 'AggregateRating',
      'ratingValue': product.rating?.value || '4.8',
      'ratingCount': product.rating?.count || '100'
    } : undefined
  };
};

/**
 * Generate Organization Schema
 * @returns {Object} Schema.org Organization object
 */
export const getOrganizationSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': import.meta.env.VITE_PRODUCTION_URL,
    'name': import.meta.env.VITE_BRAND_NAME,
    'url': import.meta.env.VITE_PRODUCTION_URL,
    'logo': `${import.meta.env.VITE_PRODUCTION_URL}/logo.svg`,
    'description': 'Fábrica peruana de colchones premium con hasta 10 años de garantía',
    'sameAs': [
      'https://www.facebook.com/suenodorado',
      'https://www.instagram.com/suenodorado',
      'https://www.whatsapp.com/message/suenodorado'
    ],
    'contact': {
      '@type': 'ContactPoint',
      'contactType': 'Customer Service',
      'telephone': '+51-989-223-448',
      'email': import.meta.env.VITE_BRAND_EMAIL,
      'areaServed': 'PE'
    }
  };
};

/**
 * Generate LocalBusiness Schema
 * @returns {Object} Schema.org LocalBusiness object
 */
export const getLocalBusinessSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': import.meta.env.VITE_PRODUCTION_URL,
    'name': import.meta.env.VITE_BRAND_NAME,
    'image': `${import.meta.env.VITE_PRODUCTION_URL}/logo.svg`,
    'description': 'Fábrica de colchones premium en Lima, Perú',
    'url': import.meta.env.VITE_PRODUCTION_URL,
    'telephone': '+51-989-223-448',
    'email': import.meta.env.VITE_BRAND_EMAIL,
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Lima, Perú',
      'addressCountry': 'PE'
    },
    'priceRange': '$$',
    'openingHoursSpecification': [
      {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        'opens': '09:00',
        'closes': '18:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': 'Saturday',
        'opens': '09:00',
        'closes': '14:00'
      }
    ]
  };
};

/**
 * Generate BreadcrumbList Schema
 * @param {Array} breadcrumbs - Array of {name, url}
 * @returns {Object} Schema.org BreadcrumbList object
 */
export const getBreadcrumbSchema = (breadcrumbs = []) => {
  const itemListElement = breadcrumbs.map((crumb, index) => ({
    '@type': 'ListItem',
    'position': index + 1,
    'name': crumb.name,
    'item': `${import.meta.env.VITE_PRODUCTION_URL}${crumb.url}`
  }));

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': itemListElement
  };
};

/**
 * Generate FAQPage Schema
 * @param {Array} faqs - Array of {question, answer}
 * @returns {Object} Schema.org FAQPage object
 */
export const getFAQSchema = (faqs = []) => {
  const mainEntity = faqs.map(faq => ({
    '@type': 'Question',
    'name': faq.question,
    'acceptedAnswer': {
      '@type': 'Answer',
      'text': faq.answer
    }
  }));

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': mainEntity
  };
};

/**
 * Generate WebPage Schema
 * @param {Object} pageData - Page metadata
 * @returns {Object} Schema.org WebPage object
 */
export const getWebPageSchema = (pageData = {}) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${import.meta.env.VITE_PRODUCTION_URL}${pageData.url || '/'}`,
    'name': pageData.title || import.meta.env.VITE_BRAND_NAME,
    'description': pageData.description || 'Fábrica de colchones premium',
    'url': `${import.meta.env.VITE_PRODUCTION_URL}${pageData.url || '/'}`,
    'publisher': {
      '@type': 'Organization',
      'name': import.meta.env.VITE_BRAND_NAME,
      'logo': {
        '@type': 'ImageObject',
        'url': `${import.meta.env.VITE_PRODUCTION_URL}/logo.svg`
      }
    },
    'datePublished': pageData.datePublished || new Date().toISOString(),
    'dateModified': pageData.dateModified || new Date().toISOString(),
    'author': {
      '@type': 'Organization',
      'name': import.meta.env.VITE_BRAND_NAME
    }
  };
};

/**
 * Generate AggregateOffer Schema for multiple products
 * @param {Array} products - Array of products
 * @returns {Object} Schema.org AggregateOffer object
 */
export const getAggregateOfferSchema = (products = []) => {
  if (products.length === 0) {
    return null;
  }

  const prices = products.map(p => parseFloat(p.price || 0));
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);

  return {
    '@context': 'https://schema.org/',
    '@type': 'AggregateOffer',
    'priceCurrency': 'PEN',
    'lowPrice': minPrice.toString(),
    'highPrice': maxPrice.toString(),
    'offerCount': products.length,
    'availability': 'https://schema.org/InStock'
  };
};

/**
 * Generate meta tags for a page
 * @param {Object} meta - Meta data {title, description, keywords, image}
 * @returns {Object} Meta tags object
 */
export const generateMetaTags = (meta = {}) => {
  const {
    title = import.meta.env.VITE_BRAND_NAME,
    description = 'Fábrica de colchones premium',
    keywords = [],
    image = `${import.meta.env.VITE_PRODUCTION_URL}/og-image.png`,
    url = import.meta.env.VITE_PRODUCTION_URL,
    type = 'website'
  } = meta;

  return {
    title,
    meta: [
      {
        name: 'description',
        content: description
      },
      {
        name: 'keywords',
        content: Array.isArray(keywords) ? keywords.join(', ') : keywords
      },
      {
        property: 'og:title',
        content: title
      },
      {
        property: 'og:description',
        content: description
      },
      {
        property: 'og:image',
        content: image
      },
      {
        property: 'og:url',
        content: url
      },
      {
        property: 'og:type',
        content: type
      },
      {
        name: 'twitter:title',
        content: title
      },
      {
        name: 'twitter:description',
        content: description
      },
      {
        name: 'twitter:image',
        content: image
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image'
      }
    ]
  };
};
