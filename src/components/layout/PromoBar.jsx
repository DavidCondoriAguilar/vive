import React from 'react';
import { Link } from 'react-router-dom';

const PromoBar = () => {
    const promos = [
        {
            icon: (
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                </svg>
            ),
            text: "Envíos GRATIS a Lima Metropolitana",
            highlight: true
        },
        {
            icon: (
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            text: "Hasta 6 cuotas sin intereses",
            highlight: false
        },
        {
            icon: (
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
            text: "Garantía de 10 años",
            highlight: false
        }
    ];

    return (
        <div className="bg-gradient-to-r from-gold-50 via-gold-100/50 to-gold-50 dark:from-dream-surface dark:via-dream-elevated dark:to-dream-surface text-gray-700 dark:text-dark-text py-2 md:py-4 px-4 md:px-6 border-b border-gold-200/50 dark:border-dark-border relative z-[60] overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23D4AF37' fill-opacity='0.4'%3E%3Cpath d='M0 0h20v20H0V0zm2 2h16v16H2V2z'/%3E%3C/g%3E%3C/svg%3E")`,
                }}></div>
            </div>
            
            <div className="container mx-auto relative z-10">
                <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 md:gap-8">
                    {promos.map((promo, index) => (
                        <div 
                            key={index}
                            className="flex items-center gap-2 group cursor-pointer"
                        >
                            <div className={`flex items-center justify-center w-6 h-6 rounded-full transition-all duration-300 ${
                                promo.highlight 
                                    ? 'bg-gold-500 text-white group-hover:scale-110' 
                                    : 'text-gold-500 group-hover:text-gold-600'
                            }`}>
                                {promo.icon}
                            </div>
                            <span className={`text-[9px] md:text-xs font-display font-medium uppercase tracking-[0.1em] md:tracking-[0.15em] transition-colors duration-300 ${
                                promo.highlight 
                                    ? 'text-gold-700 dark:text-gold-300 font-bold' 
                                    : 'text-gray-600 dark:text-dark-text-secondary group-hover:text-gray-900 dark:group-hover:text-dark-text'
                            }`}>
                                {promo.text}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PromoBar;
