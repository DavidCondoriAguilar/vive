import React from 'react';
import {
    LuTruck,
    LuShieldCheck,
    LuAward,
    LuHeadphones,
    LuClock,
    LuPhone
} from 'react-icons/lu';

const PromoBar = () => {
    // Premium minimalistic data structure
    const actions = [
        {
            icon: <LuTruck className="w-3.5 h-3.5" />,
            label: "ENVÍO GRATIS LIMA",
            sub: "Metropolitana"
        },
        {
            icon: <LuShieldCheck className="w-3.5 h-3.5" />,
            label: "PAGO SEGURO",
            sub: "100% Protegido"
        },
        {
            icon: <LuAward className="w-3.5 h-3.5" />,
            label: "GARANTÍA DE FÁBRICA",
            sub: "Respaldo Real"
        },
        {
            icon: <LuHeadphones className="w-3.5 h-3.5" />,
            label: "ASESORÍA",
            sub: "Personalizada"
        }
    ];

    const contact = {
        hours: "8AM - 5PM",
        phone: "(01) 989 223 448"
    };

    return (
        <div className="bg-white dark:bg-black border-b border-gray-100 dark:border-white/10 relative z-[60]">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="flex flex-col md:flex-row justify-between items-center h-auto md:h-12 py-3 md:py-0 gap-4 md:gap-0">

                    {/* Left: Trust Indicators */}
                    <div className="flex flex-wrap justify-center md:justify-start gap-6 lg:gap-10">
                        {actions.map((item, index) => (
                            <div key={index} className="flex items-center gap-2 group cursor-default">
                                <span className="text-gold-500 dark:text-gold-400 group-hover:scale-110 transition-transform duration-300">
                                    {item.icon}
                                </span>
                                <div className="flex flex-col md:flex-row md:items-center gap-0.5 md:gap-1.5">
                                    <span className="text-[10px] font-display font-bold tracking-widest text-gray-900 dark:text-white uppercase">
                                        {item.label}
                                    </span>
                                    {item.sub && (
                                        <span className="hidden lg:inline text-[10px] font-body text-gray-400 dark:text-gray-500 font-medium">
                                            {item.sub}
                                        </span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right: Contact Info (Hidden on very small screens if crowded, or stacked) */}
                    <div className="hidden md:flex items-center gap-6 border-l border-gray-100 dark:border-white/10 pl-6">
                        <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                            <LuClock className="w-3.5 h-3.5" />
                            <span className="text-[10px] font-medium tracking-wide">{contact.hours}</span>
                        </div>
                        <a
                            href="tel:+51989223448"
                            className="flex items-center gap-2 text-gray-900 dark:text-white hover:text-gold-500 dark:hover:text-gold-400 transition-colors"
                        >
                            <LuPhone className="w-3.5 h-3.5" />
                            <span className="text-[10px] font-bold tracking-wide">{contact.phone}</span>
                        </a>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PromoBar;
