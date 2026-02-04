import React from 'react';
import LazyImage from '@/components/common/Image';

const ProductTechnicalSpecs = ({ product }) => {
    if (!product.technicalSpecs) return null;

    const specs = product.technicalSpecs.colchon || [];
    const components = product.technicalSpecs.componentes || [];

    return (
        <div className="space-y-12">
            {/* Technical Image - Tamaño optimizado */}
            {product.technicalImage && (
                <div className="space-y-6">
                    <h3 className="text-lg sm:text-xl font-black text-black dark:text-white uppercase tracking-widest">
                        Detalles Técnicos
                    </h3>
                    <div className="relative bg-gray-50 dark:bg-gray-900 rounded-xl overflow-hidden group max-w-4xl mx-auto">
                        <LazyImage
                            src={product.technicalImage}
                            alt={`Detalles técnicos de ${product.name}`}
                            className="w-full h-auto max-h-[400px] object-contain"
                        />

                        {/* Technical Info Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="absolute bottom-6 left-6 right-6">
                                <h4 className="text-white font-black text-xl mb-3">Sistema Interno</h4>
                                <p className="text-white/90 text-sm leading-relaxed">
                                    Descubre la tecnología y estructura interna que garantizan la durabilidad y confort superior de tu colchón
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Specifications - Diseño mejorado */}
            <div className="space-y-8">
                <h3 className="text-lg sm:text-xl font-black text-black dark:text-white uppercase tracking-widest">
                    Beneficios y Características
                </h3>
                
                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    {/* COLCHÓN - Diseño tarjeta */}
                    {specs.length > 0 && (
                        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center">
                                    <span className="text-black font-bold text-lg">R</span>
                                </div>
                                <h4 className="font-bold text-black dark:text-white uppercase tracking-wider text-lg">
                                    COLCHÓN
                                </h4>
                            </div>
                            <ul className="space-y-3">
                                {specs.map((spec, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <span className="text-gold-500 text-xl mt-0.5 leading-none">•</span>
                                        <span className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
                                            {spec}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* COMPONENTES - Diseño tarjeta */}
                    {components.length > 0 && (
                        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center">
                                    <span className="text-black font-bold text-lg">+</span>
                                </div>
                                <h4 className="font-bold text-black dark:text-white uppercase tracking-wider text-lg">
                                    COMPONENTES
                                </h4>
                            </div>
                            <ul className="space-y-3">
                                {components.map((component, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <span className="text-gold-500 text-xl mt-0.5 leading-none">•</span>
                                        <span className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
                                            {component}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductTechnicalSpecs;
