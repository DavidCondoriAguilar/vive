import React from 'react';
import { LuMail, LuTruck, LuShieldCheck, LuAward, LuHeadphones, LuClock, LuPhone } from 'react-icons/lu';

const PromoBar = () => {
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
        }
    ];

    const contact = {
        hours: "8AM - 5PM",
        phone: "(01) 989 223 448",
        email: "ventasvive@colchonesvive.com"
    };

    return (
        <div className="bg-white dark:bg-[#050505] border-b border-gray-100 dark:border-white/5 relative z-[60] overflow-hidden">
            {/* Subtle Technical Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

            <div className="container mx-auto px-4 md:px-12 relative z-10">
                <div className="flex flex-col lg:flex-row justify-between items-center min-h-[40px] lg:h-11 py-2 lg:py-0 gap-3 lg:gap-0">
                    
                    {/* Trust Indicators - Desktop: Static / Mobile: Marquee */}
                    <div className="w-full lg:w-auto overflow-hidden">
                        {/* Hidden on Mobile, shown on Large */}
                        <div className="hidden lg:flex items-center gap-12 xl:gap-16">
                            {actions.map((item, index) => (
                                <div key={index} className="flex items-center gap-2.5 group/item cursor-default">
                                    <span className="text-vive-600 dark:text-vive-500 group-hover/item:scale-110 transition-transform duration-500">
                                        {item.icon}
                                    </span>
                                    <div className="flex flex-col xl:flex-row xl:items-baseline xl:gap-2">
                                        <span className="text-[10px] font-display font-black tracking-wider text-gray-900 dark:text-white uppercase whitespace-nowrap">
                                            {item.label}
                                        </span>
                                        {item.sub && (
                                            <span className="hidden xl:inline text-[9px] font-mono text-gray-400 dark:text-gray-500 uppercase tracking-widest font-bold">
                                                // {item.sub}
                                            </span>
                                        )}
                                    </div>
                                    {index < actions.length - 1 && (
                                        <div className="hidden xl:block w-px h-2.5 bg-gray-200 dark:bg-white/10 ml-2"></div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Visible only on Small/Medium - Marquee or Scroll */}
                        <div className="lg:hidden relative flex overflow-hidden py-1">
                            <div className="flex animate-marquee whitespace-nowrap gap-20 items-center">
                                {[...actions, ...actions].map((item, index) => (
                                    <div key={index} className="flex items-center gap-2">
                                        <span className="text-vive-600">{item.icon}</span>
                                        <span className="text-[10px] font-display font-black tracking-widest text-gray-900 dark:text-white uppercase">
                                            {item.label}
                                        </span>
                                    </div>
                                ))}
                            </div>
                            {/* Gradient masks for smooth marquee */}
                            <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-white dark:from-[#050505] to-transparent z-10"></div>
                            <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-white dark:from-[#050505] to-transparent z-10"></div>
                        </div>
                    </div>

                    {/* Right: Technical Contact Node */}
                    <div className="flex items-center">
                        <div 
                            className="flex items-center gap-3 py-1 px-4 bg-gray-50 dark:bg-white/[0.05] border border-gray-100 dark:border-white/5 transition-all hover:border-vive-500/30"
                            style={{ borderRadius: '9999px' }} // Bypass global border-radius: 0
                        >
                            <div className="flex items-center gap-2 text-gray-400 dark:text-gray-500">
                                <LuClock className="w-3.5 h-3.5 animate-pulse" />
                                <span className="text-[9px] font-mono font-bold tracking-tighter uppercase whitespace-nowrap">{contact.hours}</span>
                            </div>
                            
                            <div className="w-px h-3 bg-gray-200 dark:bg-white/10"></div>
                            
                            <a
                                href={`tel:${contact.phone.replace(/\D/g, '')}`}
                                className="flex items-center gap-2 text-gray-900 dark:text-white hover:text-vive-600 dark:hover:text-vive-500 transition-colors"
                            >
                                <LuPhone className="w-3.5 h-3.5" />
                                <span className="text-[10px] font-display font-black tracking-widest whitespace-nowrap">{contact.phone}</span>
                            </a>

                            <div className="hidden sm:block w-px h-3 bg-gray-200 dark:bg-white/10"></div>

                            <a
                                href={`mailto:${contact.email}`}
                                className="hidden sm:flex items-center gap-2 text-gray-900 dark:text-white hover:text-vive-600 dark:hover:text-vive-500 transition-colors"
                            >
                                <LuMail className="w-3.5 h-3.5" />
                                <span className="text-[10px] font-display font-black tracking-widest whitespace-nowrap">{contact.email}</span>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PromoBar;

