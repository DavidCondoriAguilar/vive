export const APP_CONFIG = {
  name: 'Sueño Dorado',
  version: '1.0.0',
  description: 'Premium mattress e-commerce platform',
  
  // Asset paths
  assets: {
    logos: {
      main: '/src/assets/images/logos/logo-main.jpg',
      alt: '/src/assets/images/logos/logo-alt.png',
      brand: '/src/assets/images/logos/brand.png'
    },
    images: {
      products: '/src/assets/images/products/',
      banners: '/src/assets/images/banners/',
      icons: '/src/assets/images/icons/'
    }
  },
  
  // Component paths for easier imports
  components: {
    common: '/src/components/common/',
    layout: '/src/components/layout/',
    features: '/src/features/'
  }
};
