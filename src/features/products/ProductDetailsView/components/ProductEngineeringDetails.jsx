import React from 'react';

const ProductEngineeringDetails = ({ product }) => {
    if (!product.technicalSpecs) return null;

    const specs = product.technicalSpecs.colchon || [];
    const components = product.technicalSpecs.componentes || [];

    return (
        <div className="mt-4 space-y-4 animate-in fade-in slide-in-from-right duration-1000">
            {/* Ultra Compact Header */}
            <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase font-black tracking-widest text-vive-600">DNA</span>
                <div className="flex-grow h-px bg-gray-100 dark:bg-white/5"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Core Architecture */}
                <div className="p-4 bg-gray-50/50 dark:bg-zinc-900/40 rounded-2xl border border-gray-100 dark:border-white/5">
                    <h4 className="text-[9px] font-black uppercase tracking-widest text-gray-900 dark:text-white mb-3">Núcleo y Soporte</h4>
                    <ul className="space-y-2">
                        {specs.slice(0, 4).map((spec, index) => (
                            <li key={index} className="flex items-start gap-2">
                                <div className="w-1 h-1 rounded-full bg-vive-600 mt-1.5 shrink-0 opacity-40"></div>
                                <span className="text-[9px] font-bold text-gray-500 uppercase leading-tight tracking-tighter">
                                    {spec.split(':')[0]}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Material Quality */}
                <div className="p-4 bg-gray-50/50 dark:bg-zinc-900/40 rounded-2xl border border-gray-100 dark:border-white/5">
                    <h4 className="text-[9px] font-black uppercase tracking-widest text-gray-900 dark:text-white mb-3">Materiales</h4>
                    <ul className="space-y-2">
                        {components.slice(0, 4).map((comp, index) => (
                            <li key={index} className="flex items-start gap-2">
                                <div className="w-1 h-1 rounded-full bg-vive-600 mt-1.5 shrink-0 opacity-40"></div>
                                <span className="text-[9px] font-bold text-gray-500 uppercase leading-tight tracking-tighter">
                                    {comp.split(':')[0]}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <p className="text-[8px] text-gray-400 font-bold uppercase tracking-widest text-center opacity-40">
                Respaldo Certificado de Fábrica
            </p>
        </div>
    );
};

export default ProductEngineeringDetails;
