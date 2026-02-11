import React from 'react';

const WholesaleBenefits = ({ benefits, factoryProductionImg }) => {
    return (
        <section className="py-40 bg-gray-50 dark:bg-black relative transition-colors duration-500">
            <div className="absolute inset-0 z-0 opacity-[0.05] dark:opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#299C47 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

            <div className="container mx-auto px-6 lg:px-20 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
                    <div className="space-y-16">
                        <div className="space-y-6">
                            <span className="text-vive-600 dark:text-vive-500 text-[10px] font-black uppercase tracking-[0.5em] block">Factory Infrastructure</span>
                            <h2 className="text-5xl md:text-7xl font-display font-black text-gray-900 dark:text-white leading-none tracking-tighter uppercase">
                                Ventaja Directa <br /> de <span className="text-vive-600 dark:text-vive-500 italic font-light lowercase">Fábrica</span>
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16">
                            {benefits.map((benefit, idx) => (
                                <div key={idx} className="group space-y-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-14 h-14 rounded-2xl bg-vive-600/5 dark:bg-vive-500/10 border border-vive-600/20 dark:border-vive-500/20 flex items-center justify-center text-vive-600 dark:text-vive-500 text-2xl group-hover:bg-vive-600 group-hover:text-white dark:group-hover:bg-vive-500 dark:group-hover:text-black transition-all duration-500">
                                            {benefit.icon}
                                        </div>
                                        <div className="h-[1px] flex-1 bg-gray-200 dark:bg-white/10"></div>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-display font-bold text-gray-900 dark:text-white mb-2 uppercase tracking-wide group-hover:text-vive-600 dark:group-hover:text-vive-500 transition-colors">
                                            {benefit.title}
                                        </h4>
                                        <p className="text-gray-500 dark:text-gray-500 text-xs font-text leading-relaxed mb-4">{benefit.desc}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {benefit.specs.map((spec, i) => (
                                                <span key={i} className="text-[9px] font-mono text-vive-600 dark:text-vive-500 border border-vive-600/20 dark:border-vive-500/20 px-2 py-1 uppercase tracking-widest">{spec}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="relative aspect-square rounded-[4rem] overflow-hidden border border-gray-200 dark:border-white/5 shadow-2xi group">
                            <img src={factoryProductionImg} alt="Vive Industrial Process" className="w-full h-full object-cover grayscale brightness-[0.9] dark:brightness-[0.4] group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000" />
                            <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent dark:from-black"></div>

                            {/* HUD Data Overlay */}
                            <div className="absolute top-10 right-10 text-right space-y-2">
                                <div className="text-vive-600 dark:text-vive-500 text-[10px] font-mono uppercase tracking-widest">Efficiency Sync</div>
                                <div className="text-gray-900 dark:text-white text-3xl font-display font-black">99.8%</div>
                            </div>

                            <div className="absolute bottom-12 left-12 space-y-4">
                                <div className="flex items-center gap-4">
                                    <span className="w-2 h-2 bg-vive-600 dark:bg-vive-500 rounded-full animate-ping"></span>
                                    <span className="text-[10px] font-black text-white dark:text-white uppercase tracking-[0.3em] drop-shadow-md">Live Terminal // Industrial 4.0</span>
                                </div>
                                <div className="p-8 bg-vive-600 dark:bg-vive-500 rounded-3xl shadow-2xl">
                                    <span className="block text-[10px] font-black text-white dark:text-black uppercase tracking-widest mb-1 italic">Vantage Level</span>
                                    <span className="text-6xl font-display font-black text-white dark:text-black leading-none">-50%</span>
                                    <p className="text-[9px] font-bold text-white dark:text-black uppercase tracking-tighter mt-1">Direct Factory Pricing Sync</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WholesaleBenefits;
