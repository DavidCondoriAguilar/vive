import { Link } from 'react-router-dom';
import { FEATURED_PRODUCTS, getWhatsAppLink } from '@/utils/constants';

const FeaturedProducts = () => {
    // Limit to 6 products for Home as per UX Engineer rule
    const homeProducts = FEATURED_PRODUCTS.slice(0, 6);

    return (
        <section className="relative py-24 bg-gray-50 dark:bg-dream-bg transition-colors duration-700 overflow-hidden" id="featured">
            {/* 2026 Background Elements */}
            <div className="absolute inset-0 dream-grid opacity-20 dark:opacity-5" />
            <div className="absolute inset-0 dream-noise" />

            <div className="container mx-auto px-6 lg:px-20 relative z-10">
                <div className="flex flex-col items-center text-center mb-16 lg:mb-24">
                    <span className="text-gray-400 font-display text-xs tracking-[0.4em] uppercase font-bold mb-4 block">
                        Selección Destacada
                    </span>
                    <h2 className="text-3xl lg:text-5xl font-display font-black text-gray-900 dark:text-dark-text leading-tight mb-6 uppercase tracking-tighter">
                        SOLUCIONES DE <span className="text-gold-500">DESCANSO</span>
                    </h2>
                    <p className="text-gray-500 dark:text-dark-text-secondary max-w-xl text-lg font-medium italic">
                        "Elegidos por su balance perfecto entre confort y soporte."
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                    {homeProducts.map((product, idx) => {
                        const hasDiscount = idx === 0 || idx === 2; // Controlled simulation, no aggressiveness
                        const discountPercent = 15;
                        const priceNum = typeof product.price === 'string'
                            ? parseFloat(product.price.replace(',', ''))
                            : product.price;
                        const originalPrice = (priceNum * 1.15).toLocaleString('es-PE', { minimumFractionDigits: 2 });
                        const displayPrice = priceNum.toLocaleString('es-PE', { minimumFractionDigits: 2 });

                        return (
                            <div key={product.id} className="group bg-white dark:bg-dream-surface p-8 rounded-[2rem] border border-transparent hover:border-gray-100 dark:hover:border-dark-border transition-all duration-700 hover:shadow-2xl hover:shadow-black/5">
                                {/* Product Image */}
                                <Link to={`/producto/${product.id}`} className="block relative aspect-square overflow-hidden mb-10">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-contain transition-transform duration-1000 group-hover:scale-105"
                                    />
                                    {hasDiscount && (
                                        <div className="absolute top-0 left-0">
                                            <span className="bg-red-50 text-red-600 px-4 py-2 rounded-full text-[10px] font-black tracking-widest uppercase">
                                                -{discountPercent}% OFF
                                            </span>
                                        </div>
                                    )}
                                </Link>

                                {/* Product Info */}
                                <div className="space-y-4">
                                    <div className="flex justify-between items-start gap-4">
                                        <div className="flex-grow">
                                            <p className="text-[10px] font-display font-black text-gold-500 uppercase tracking-[0.2em] mb-2">
                                                {product.category}
                                            </p>
                                            <Link to={`/producto/${product.id}`}>
                                                <h3 className="text-xl lg:text-2xl font-display font-black text-gray-900 dark:text-dark-text leading-tight uppercase tracking-tight hover:text-gold-500 transition-colors">
                                                    {product.name}
                                                </h3>
                                            </Link>
                                        </div>
                                        <div className="text-right shrink-0">
                                            {hasDiscount && (
                                                <p className="text-[10px] font-display font-bold text-gray-400 dark:text-dark-text-secondary line-through mb-1 uppercase tracking-tighter">
                                                    S/ {originalPrice}
                                                </p>
                                            )}
                                            <p className={`text-xl lg:text-2xl font-display font-black ${hasDiscount ? 'text-red-600' : 'text-gray-900 dark:text-dark-text'}`}>
                                                S/ {displayPrice}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Action - Clean & Subtle */}
                                    <div className="pt-6 flex flex-col gap-4 border-t border-gray-50 dark:border-dark-border">
                                        <div className="flex items-center justify-between w-full">
                                            <Link
                                                to={`/producto/${product.id}`}
                                                className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 hover:text-gray-900 dark:hover:text-dark-text transition-colors flex items-center gap-3"
                                            >
                                                Ver Detalle
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                </svg>
                                            </Link>

                                            <div className="flex gap-1">
                                                {[1, 2, 3, 4, 5].map(star => (
                                                    <div key={star} className="w-1.5 h-1.5 rounded-full bg-gold-500/30"></div>
                                                ))}
                                            </div>
                                        </div>

                                        <a
                                            href={getWhatsAppLink(`Hola Sueño Dorado, me interesa el modelo ${product.name}. Me gustaría recibir asesoría.`)}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full py-3 bg-green-500/10 hover:bg-green-500 text-green-600 hover:text-white border border-green-500/20 text-[9px] font-black uppercase tracking-[0.2em] rounded-xl transition-all flex items-center justify-center gap-2"
                                        >
                                            Contactar Experto
                                        </a>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-20 flex justify-center">
                    <Link
                        to="/categorias/colchones"
                        className="group flex items-center gap-4 px-12 py-5 bg-white dark:bg-dream-surface border border-gray-100 dark:border-dark-border rounded-full hover:bg-gray-50 dark:hover:bg-dream-elevated transition-all shadow-lg shadow-black/5"
                    >
                        <span className="text-[10px] font-display font-black tracking-[0.3em] text-gray-900 dark:text-dark-text uppercase transition-colors group-hover:text-gold-500">
                            Explorar Catálogo Completo
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProducts;
