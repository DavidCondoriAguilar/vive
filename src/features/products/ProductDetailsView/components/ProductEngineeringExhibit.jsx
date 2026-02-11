import React from 'react';
import LazyImage from '@/components/common/Image';
import { FaLayerGroup, FaMicrochip, FaShieldVirus } from 'react-icons/fa';

const ProductEngineeringExhibit = ({ product }) => {
    if (!product.technicalImage) return null;

    return (
        <div className="mt-8 animate-in fade-in slide-in-from-bottom duration-1000">
            <div className="relative group max-w-full">
                <div className="absolute -inset-4 bg-gradient-to-r from-vive-600/5 to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                <div className="relative bg-gray-50/50 dark:bg-zinc-900/30 rounded-[3rem] border border-gray-100 dark:border-white/5 p-8 lg:p-12 overflow-hidden">
                    <div className="space-y-8">
                        {/* Compact Header */}
                        <div className="space-y-4">
                            <div className="w-12 h-px bg-vive-600"></div>
                            <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-400">Sleep Engineering</h3>
                            <p className="text-xl font-black uppercase tracking-tight text-gray-900 dark:text-white leading-tight">
                                Estructura Multi-Capa con <br />Tecnología MP
                            </p>
                        </div>

                        {/* Image Presentation */}
                        <div className="relative flex justify-center py-4">
                            <LazyImage
                                src={product.technicalImage}
                                alt={`Ingeniería de ${product.name}`}
                                className="w-full max-w-[400px] h-auto object-contain transform group-hover:scale-105 transition-transform duration-1000"
                            />
                            <div className="absolute top-0 right-0">
                                <span className="text-[8px] font-black uppercase tracking-[0.3em] text-vive-600 bg-vive-600/10 px-3 py-1.5 rounded-full border border-vive-600/20">HD Detail</span>
                            </div>
                        </div>

                        {/* Technical Attributes */}
                        <div className="flex justify-between items-center pt-4 border-t border-gray-100 dark:border-white/5">
                            <div className="flex flex-col items-center gap-2">
                                <FaLayerGroup className="text-vive-600 text-lg" />
                                <span className="text-[8px] font-black uppercase tracking-widest text-gray-400">Zonificación</span>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <FaMicrochip className="text-vive-600 text-lg" />
                                <span className="text-[8px] font-black uppercase tracking-widest text-gray-400">Resiliencia</span>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <FaShieldVirus className="text-vive-600 text-lg" />
                                <span className="text-[8px] font-black uppercase tracking-widest text-gray-400">Protección</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductEngineeringExhibit;
