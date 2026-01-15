import React from 'react';

const PromoBar = () => {
    return (
        <div className="bg-[#f8f8f8] dark:bg-[#111] text-gray-700 dark:text-gray-300 py-2 px-6 border-b border-gray-100 dark:border-white/5 relative z-[60]">
            <div className="container mx-auto">
                <div className="flex justify-center items-center">
                    <p className="text-[10px] md:text-xs font-display font-medium uppercase tracking-[0.15em] text-center">
                        Envíos a Lima Metropolitana — Cuotas sin intereses
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PromoBar;
