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
        <div className="bg-white dark:bg-[#050505] border-b border-gray-100 dark:border-white/5 relative z-[60] overflow-hidden group">
            {/* Subtle Technical Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-center h-auto md:h-11 py-2 md:py-0 gap-3 md:gap-0">

                    {/* Left: Trust Indicators - Industrial Tag Style */}
                    <div className="flex flex-wrap justify-center md:justify-start gap-4 lg:gap-8">
                        {actions.map((item, index) => (
                            <div key={index} className="flex items-center gap-2 group/item cursor-default">
                                <span className="text-vive-600 dark:text-vive-500 group-hover/item:scale-110 transition-transform duration-500">
                                    {item.icon}
                                </span>
                                <div className="flex items-baseline gap-1.5">
                                    <span className="text-[9px] font-display font-black tracking-[0.2em] text-gray-900 dark:text-white uppercase">
                                        {item.label}
                                    </span>
                                    {item.sub && (
                                        <span className="hidden xl:inline text-[8px] font-mono text-vive-600/50 dark:text-vive-400/40 uppercase tracking-widest font-bold">
                                            // {item.sub}
                                        </span>
                                    )}
                                </div>
                                {index < actions.length - 1 && (
                                    <div className="hidden lg:block w-px h-2 bg-gray-100 dark:bg-white/10 ml-4"></div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Right: Technical Contact Node */}
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-3 py-1 px-4 bg-gray-50 dark:bg-white/[0.03] rounded-full border border-gray-100 dark:border-white/5 group/node transition-all hover:border-vive-500/30">
                            <div className="flex items-center gap-2 text-gray-400 dark:text-gray-500">
                                <LuClock className="w-3 h-3 animate-pulse" />
                                <span className="text-[9px] font-mono font-bold tracking-tighter uppercase">{contact.hours}</span>
                            </div>
                            <div className="w-px h-3 bg-gray-200 dark:bg-white/10"></div>
                            <a
                                href={`tel:${contact.phone.replace(/\D/g, '')}`}
                                className="flex items-center gap-2 text-gray-900 dark:text-white hover:text-vive-600 dark:hover:text-vive-500 transition-colors"
                            >
                                <LuPhone className="w-3 h-3" />
                                <span className="text-[10px] font-display font-black tracking-widest">{contact.phone}</span>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PromoBar;
