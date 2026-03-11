import { ENHANCED_CATALOG } from '@/utils/constants';

/**
 * Product Service
 * Abstraction layer for product data.
 * Currently uses local data, but returns Promises to facilitate 
 * migration to a real API in the future.
 */
export const productService = {
    /**
     * Get all products with optional delay to simulate network
     */
    async getAllProducts() {
        // Simulating API latency
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(ENHANCED_CATALOG);
            }, 100);
        });
    },

    /**
     * Get a product by ID
     */
    async getProductById(id) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const product = ENHANCED_CATALOG.find(p => String(p.id) === String(id));
                if (product) {
                    resolve(product);
                } else {
                    reject(new Error('Producto no encontrado'));
                }
            }, 100);
        });
    },

    /**
     * Search products (simulated server-side search)
     */
    async searchProducts(query) {
        const term = query.toLowerCase().trim();
        return new Promise((resolve) => {
            setTimeout(() => {
                const results = ENHANCED_CATALOG.filter(p =>
                    p.name.toLowerCase().includes(term) ||
                    p.category.toLowerCase().includes(term)
                );
                resolve(results);
            }, 150);
        });
    }
};
