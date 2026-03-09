import React from 'react';
import { FaTruck, FaRoute, FaShip, FaPlane, FaClock, FaBox, FaCheckCircle } from 'react-icons/fa';

const ProvincesBento = ({ provinces }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-24">
            {/* MAIN HUB: Coverage & Infrastructure */}
            <div className="md:col-span-12 lg:col-span-8 bg-[#0A0A0A] rounded-[3rem] p-10 lg:p-16 flex flex-col justify-between relative overflow-hidden group border border-white/5 order-2 lg:order-1 shadow-2xl transition-all duration-700 hover:border-vive-500/20">
                {/* HUD Grid Overlay */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#299C47 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-vive-500/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>

                <div className="relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
                        <div className="max-w-xs">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-2xl bg-vive-600/10 border border-vive-600/20 flex items-center justify-center text-vive-500">
                                    <FaRoute className="w-5 h-5" />
                                </div>
                                <h4 className="text-white font-black text-3xl tracking-tighter uppercase font-display">Cobertura</h4>
                            </div>
                            <p className="text-gray-500 text-sm font-medium leading-relaxed font-text mb-8">
                                Nuestra red de distribución estratégica garantiza la llegada de tu producto Vive en perfectas condiciones.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {['ARE', 'CUS', 'TRU', 'PIU', 'IQU', 'HUA'].map((code) => (
                                    <span key={code} className="text-[10px] font-mono font-black text-vive-500/60 px-3 py-1 bg-vive-500/5 border border-vive-500/10 rounded-md">
                                        {code}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* City Grid */}
                        <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-10">
                            {provinces.map((city, idx) => (
                                <div key={idx} className="flex items-center gap-3 text-gray-400 group/city cursor-crosshair py-1 border-b border-white/5">
                                    <span className="text-[9px] font-mono text-vive-500/40 group-hover/city:text-vive-500 transition-colors">0{idx + 1}</span>
                                    <span className="text-[11px] font-bold uppercase tracking-widest group-hover/city:text-white transition-colors">{city}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-end justify-between gap-10">
                        <div className="max-w-md">
                            <h5 className="text-[10px] font-black text-vive-500 uppercase tracking-[0.4em] mb-4 text-left font-mono italic">Logística Especializada</h5>
                            <p className="text-gray-400 text-sm font-medium leading-relaxed font-text">
                                Despacho certificado con <span className="text-white font-bold uppercase tracking-wider">Seguimiento Real-Time</span> y protocolos de manipulación premium para asegurar cero daños.
                            </p>
                        </div>
                        <div className="flex gap-4">
                            {[FaTruck, FaShip, FaPlane].map((Icon, idx) => (
                                <div key={idx} className="w-16 h-16 rounded-2xl border border-white/5 bg-white/[0.02] flex items-center justify-center text-white/40 hover:text-vive-500 hover:bg-vive-500/10 hover:border-vive-500/30 transition-all duration-500 cursor-pointer">
                                    <Icon className="w-6 h-6" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* PERFORMANCE: Time Control */}
            <div className="md:col-span-12 lg:col-span-4 bg-vive-600 dark:bg-vive-500 rounded-[3rem] p-12 flex flex-col items-center justify-center text-center relative overflow-hidden group shadow-3xl shadow-vive-500/20 order-1 lg:order-2">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/40 to-transparent"></div>
                <div className="relative z-10 space-y-10 w-full">
                    <div className="inline-block px-4 py-1.5 bg-black/10 rounded-full border border-black/5 backdrop-blur-md">
                        <span className="text-[10px] font-black text-black uppercase tracking-[0.4em] font-mono">Performance Timer</span>
                    </div>
                    <div>
                        <div className="relative inline-block">
                            <span className="text-9xl md:text-[140px] font-display font-black text-black leading-none tracking-tighter block mb-2">3-7</span>
                            <div className="absolute -top-4 -right-8 w-12 h-12 rounded-full border-4 border-black/20 flex items-center justify-center">
                                <div className="w-2 h-2 bg-black rounded-full animate-ping"></div>
                            </div>
                        </div>
                        <span className="text-sm font-black text-black uppercase tracking-[0.5em] font-mono block mt-4 italic">DÍAS HÁBILES</span>
                    </div>
                    <div className="flex flex-col gap-4 w-full">
                        <div className="flex justify-between items-center bg-black/5 p-5 rounded-2xl border border-black/10 backdrop-blur-md group/time">
                            <span className="text-[10px] font-black text-black/40 uppercase tracking-widest font-mono">Lima Metrop.</span>
                            <span className="text-xs font-black text-black uppercase tracking-widest">24-48 HORAS</span>
                        </div>
                        <div className="flex justify-between items-center bg-black/5 p-5 rounded-2xl border border-black/10 backdrop-blur-md group/time">
                            <span className="text-[10px] font-black text-black/40 uppercase tracking-widest font-mono">Nacional</span>
                            <span className="text-xs font-black text-black uppercase tracking-widest">3-7 DÍAS</span>
                        </div>
                    </div>
                </div>
                <FaClock className="absolute top-10 right-10 text-black/5 text-8xl -rotate-12 group-hover:rotate-0 transition-transform duration-1000" />
            </div>

            {/* INFRASTRUCTURE: Detail Cards */}
            {[
                { icon: <FaTruck />, title: "Flota Propia", desc: "Control total de la manipulación para asegurar cero micro-daños estructurales." },
                { icon: <FaBox />, title: "Alianzas Elite", desc: "Red de socios estratégicos especializados en logística de carga premium." },
                { icon: <FaRoute />, title: "Seguimiento", desc: "Interface en tiempo real con información detallada sobre el ciclo de despacho." },
                { icon: <FaCheckCircle />, title: "Protección Total", desc: "Seguro de carga integral y Garantía Real de entrega en condiciones de fabrica." }
            ].map((card, i) => (
                <div key={i} className="md:col-span-6 lg:col-span-3 bg-white dark:bg-[#0A0A0A] rounded-[2.5rem] p-10 border border-gray-100 dark:border-white/5 hover:border-vive-500/40 transition-all duration-700 group order-3 shadow-2xl shadow-gray-200/50 dark:shadow-none hover:-translate-y-2">
                    <div className="w-14 h-14 rounded-2xl bg-gray-50 dark:bg-white/5 flex items-center justify-center text-vive-600 dark:text-vive-500 mb-8 border border-transparent dark:group-hover:border-vive-500/30 transition-all duration-500">
                        {React.cloneElement(card.icon, { className: 'w-6 h-6' })}
                    </div>
                    <h5 className="text-xl font-black text-gray-900 dark:text-white uppercase tracking-tighter mb-4 group-hover:text-vive-600 transition-colors font-display">{card.title}</h5>
                    <p className="text-gray-500 dark:text-gray-400 text-[11px] leading-relaxed font-medium font-text uppercase tracking-widest">
                        {card.desc}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default ProvincesBento;
