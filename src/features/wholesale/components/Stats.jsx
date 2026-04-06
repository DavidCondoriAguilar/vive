import React from 'react';

const WholesaleStats = ({ stats }) => {
    return (
        <div className="relative z-20 py-10 bg-gray-50 dark:bg-black/50 border-y border-gray-100 dark:border-white/5 transition-colors duration-500">
            <div className="container mx-auto px-6 lg:px-20 max-w-7xl">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 items-center">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="group flex items-center gap-6 relative">
                            {/* The "Certificado Vive" Stamp Vibe */}
                            <div className="relative w-20 h-20 shrink-0 hidden md:flex items-center justify-center">
                                <div className="absolute inset-0 border border-vive-500/20 rounded-full group-hover:scale-110 transition-transform duration-700 animate-[spin_10s_linear_infinite]"></div>
                                <div className="absolute inset-2 border border-vive-500/10 rounded-full group-hover:scale-90 transition-transform duration-700"></div>
                                <span className="text-[7px] font-black uppercase tracking-[0.2em] text-vive-600/60 dark:text-vive-400/40 text-center leading-[0.8]">
                                    Cért. <br /> Vive
                                </span>
                            </div>

                            <div className="flex flex-col">
                                <div className="flex items-baseline gap-2">
                                    <span className="text-3xl md:text-4xl font-display font-light text-gray-950 dark:text-white group-hover:text-vive-500 transition-colors duration-500">
                                        {stat.value}
                                    </span>
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-900 dark:text-white">
                                        {stat.label}
                                    </h3>
                                    <p className="text-[9px] text-gray-400 dark:text-gray-500 uppercase tracking-widest font-bold hidden sm:block">
                                        {stat.desc}
                                    </p>
                                </div>

                                {/* Mobile/Small Badge */}
                                <div className="mt-2 flex items-center gap-2 md:hidden">
                                    <div className="w-1.5 h-1.5 bg-vive-500 rounded-full"></div>
                                    <span className="text-[7px] font-black uppercase tracking-widest text-vive-500">Certificado Vive</span>
                                </div>
                            </div>

                            {/* Divider for Desktop */}
                            {idx < stats.length - 1 && (
                                <div className="hidden lg:block absolute -right-6 top-1/2 -translate-y-1/2 h-8 w-px bg-gray-200 dark:bg-white/10"></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WholesaleStats;
