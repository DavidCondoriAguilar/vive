import { FaArrowRight, FaGlobeAmericas, FaMapMarkerAlt } from 'react-icons/fa';

const ProvincesCTA = ({ waLink }) => {
    return (
        <div className="relative bg-[#0A0A0A] rounded-[3rem] lg:rounded-[4rem] p-12 lg:p-24 overflow-hidden group shadow-[0_50px_100px_rgba(0,0,0,0.5)] border border-white/5">
            {/* New Industrial Background: High-end Global Logistics */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=2069&auto=format&fit=crop')] opacity-[0.08] grayscale group-hover:scale-110 transition-transform duration-[10s] ease-out"></div>

            {/* Advanced Overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/90 to-transparent"></div>
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-vive-500/10 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2 opacity-40"></div>

            {/* Visual Technical Detail (HUD Grid) */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#299C47 1px, transparent 1px), linear-gradient(90deg, #299C47 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="max-w-xl">
                    <div className="inline-flex items-center gap-3 px-4 py-2 bg-vive-600/10 border border-vive-600/20 rounded-full mb-10 overflow-hidden relative">
                        <span className="w-1.5 h-1.5 bg-vive-600 rounded-full animate-pulse shadow-[0_0_8px_#299C47]"></span>
                        <span className="text-[10px] font-mono font-black text-vive-600 dark:text-vive-500 uppercase tracking-[0.4em]">Protocolo de Envío // Route Optimization</span>
                    </div>

                    <h3 className="text-5xl lg:text-7xl font-display font-black text-white uppercase tracking-tighter leading-[0.85] mb-10">
                        ¿Su ciudad no figura <br />
                        en el <span className="font-brand italic font-light lowercase text-vive-500 tracking-normal capitalize">listado principal?</span>
                    </h3>

                    <p className="text-gray-400 text-xl font-medium mb-12 leading-relaxed font-text">
                        En Vive no tenemos límites. Creamos <span className="text-white font-bold underline decoration-vive-500/30 decoration-4 underline-offset-8 italic">rutas especiales</span> personalizadas para que cada rincón del Perú experimente el confort premium que merece.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6">
                        <a
                            href={waLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/btn relative bg-white text-black px-12 py-7 rounded-2xl font-black text-[10px] uppercase tracking-[0.4em] transition-all overflow-hidden flex items-center justify-center gap-4 hover:shadow-[0_20px_40px_rgba(255,255,255,0.1)] active:scale-95"
                        >
                            <span className="relative z-10">Solicitar Ruta</span>
                            <FaArrowRight className="relative z-10 group-hover/btn:translate-x-2 transition-transform" />
                        </a >
                        <a
                            href={waLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/5 backdrop-blur-3xl border border-white/10 hover:border-vive-500/50 text-white px-12 py-7 rounded-2xl font-bold text-[10px] uppercase tracking-[0.4em] transition-all inline-flex items-center justify-center group/side"
                        >
                            Detalles de Envío
                            <div className="w-1.5 h-1.5 bg-vive-500 rounded-full ml-4 opacity-0 group-hover/side:opacity-100 transition-opacity"></div>
                        </a>
                    </div>
                </div>

                {/* RIGHT SECTOR: The Global Navigator Icon */}
                <div className="hidden lg:flex justify-center relative">
                    <div className="relative group/icon-container">
                        {/* Core Aura */}
                        <div className="absolute inset-0 bg-vive-500 blur-[120px] opacity-10 group-hover:opacity-20 transition-opacity duration-1000"></div>

                        {/* Dynamic Global Icon */}
                        <div className="relative transform transition-all duration-1000 group-hover:scale-110">
                            <FaGlobeAmericas className="text-white/[0.03] w-[450px] h-[450px]" />

                            {/* Technical Overlays (HUD) */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-80 h-80 border border-vive-500/20 rounded-full animate-[spin_20s_linear_infinite] border-dashed"></div>
                                <div className="absolute w-64 h-64 border border-vive-500/10 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                            </div>

                            {/* Floating Floating Status Card */}
                            <div className="absolute bottom-10 -left-10 p-8 bg-black/60 backdrop-blur-3xl border border-white/10 rounded-[2rem] space-y-4 shadow-2xl group-hover:-translate-y-4 transition-transform duration-700">
                                <div className="flex items-center gap-5">
                                    <div className="w-12 h-12 bg-vive-500 rounded-2xl flex items-center justify-center text-black">
                                        <FaMapMarkerAlt className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="text-white font-black text-[10px] uppercase tracking-[0.3em] mb-1">Global Routing</div>
                                        <div className="text-vive-500 text-[8px] font-mono uppercase tracking-[0.5em] font-black">UNLIMITED COVERAGE</div>
                                    </div>
                                </div>
                                <div className="flex gap-1 pt-2">
                                    <div className="h-1 w-8 bg-vive-500 rounded-full"></div>
                                    <div className="h-1 w-4 bg-vive-500/30 rounded-full"></div>
                                    <div className="h-1 w-2 bg-vive-500/30 rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProvincesCTA;
