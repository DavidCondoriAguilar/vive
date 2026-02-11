import React from 'react';
import { FaTruck, FaRoute, FaShip, FaPlane, FaClock, FaBox, FaCheckCircle } from 'react-icons/fa';

const ProvincesBento = ({ provinces }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-24">
            {/* Coverage Node: The Grid Hub */}
            <div className="md:col-span-12 lg:col-span-8 bg-gray-900 rounded-[2rem] p-12 flex flex-col justify-between relative overflow-hidden group border border-white/5 order-2 lg:order-1 shadow-2xl transition-all duration-700 hover:shadow-vive-500/10">
                <div className="absolute top-0 right-0 w-96 h-96 bg-vive-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>

                <div className="relative z-10 flex flex-col md:flex-row gap-12">
                    <div className="w-full md:w-1/3">
                        <div className="flex items-center gap-4 mb-10">
                            <div className="w-14 h-14 rounded-xl bg-vive-600 flex items-center justify-center text-white shadow-lg shadow-vive-600/20">
                                <FaRoute className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="text-white font-black text-2xl tracking-tighter uppercase">Cobertura</h4>
                                <p className="text-vive-500/60 text-[8px] uppercase tracking-[0.3em] font-bold font-mono">Cobertura Nacional</p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                                <span className="text-[8px] font-mono text-vive-500 uppercase tracking-widest block mb-2">Ciudades Clave:</span>
                                <div className="flex flex-wrap gap-2">
                                    <span className="text-[10px] font-bold text-white px-2 py-1 bg-white/10 rounded-sm">ARE</span>
                                    <span className="text-[10px] font-bold text-white px-2 py-1 bg-white/10 rounded-sm">CUS</span>
                                    <span className="text-[10px] font-bold text-white px-2 py-1 bg-white/10 rounded-sm">TRU</span>
                                    <span className="text-[10px] font-bold text-white px-2 py-1 bg-white/10 rounded-sm">PIU</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-8 py-2">
                        {provinces.map((city, idx) => (
                            <div key={idx} className="flex items-center gap-4 text-gray-400 group/city cursor-crosshair">
                                <div className="w-1 h-4 bg-vive-500/20 group-hover/city:bg-vive-500 group-hover/city:h-6 transition-all duration-300"></div>
                                <span className="text-xs font-bold uppercase tracking-widest group-hover/city:text-white transition-colors">{city}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="relative z-10 mt-16 pt-10 border-t border-white/5 flex flex-col md:flex-row items-end justify-between gap-8">
                    <div className="max-w-md">
                        <h5 className="text-[10px] font-black text-vive-500 uppercase tracking-[0.4em] mb-4 text-left">Logística Especializada</h5>
                        <p className="text-gray-500 text-sm font-medium leading-relaxed">
                            Contamos con procesos de despacho certificados. Cada producto Vive viaja con seguimiento y protección garantizada.
                        </p>
                    </div>
                    <div className="flex gap-4">
                        {[FaTruck, FaShip, FaPlane].map((Icon, idx) => (
                            <div key={idx} className="w-14 h-14 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-vive-500 hover:bg-vive-500 hover:text-black transition-all duration-500 cursor-pointer shadow-lg">
                                <Icon className="w-5 h-5" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Performance Node: Time Control */}
            <div className="md:col-span-12 lg:col-span-4 bg-vive-600 dark:bg-vive-500 rounded-[2rem] p-12 flex flex-col items-center justify-center text-center relative overflow-hidden group shadow-2xl shadow-vive-500/30 order-1 lg:order-2 border-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/30 to-transparent opacity-50"></div>
                <div className="relative z-10 space-y-8 w-full">
                    <div className="inline-block px-3 py-1 bg-black/10 rounded-full">
                        <span className="text-[10px] font-black text-black uppercase tracking-[0.4em]">Tiempo Estimado</span>
                    </div>
                    <div>
                        <span className="text-8xl md:text-[120px] font-display font-black text-black leading-none tracking-tighter block mb-2">3-7</span>
                        <span className="text-sm font-black text-black uppercase tracking-[0.5em] font-mono">DÍAS HÁBILES</span>
                    </div>
                    <div className="h-[2px] w-full bg-black/10 mx-auto relative overflow-hidden">
                        <div className="absolute top-0 left-0 h-full bg-black w-2/3 animate-pulse"></div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="flex justify-between items-center bg-black/5 p-4 border border-black/5 backdrop-blur-sm">
                            <span className="text-[10px] font-black text-black/60 uppercase tracking-widest font-mono">Entrega en Lima</span>
                            <span className="text-xs font-black text-black uppercase tracking-widest">24-48 HORAS</span>
                        </div>
                        <div className="flex justify-between items-center bg-black/5 p-4 border border-black/5 backdrop-blur-sm">
                            <span className="text-[10px] font-black text-black/60 uppercase tracking-widest font-mono">Entrega Regional</span>
                            <span className="text-xs font-black text-black uppercase tracking-widest">3-7 DÍAS</span>
                        </div>
                    </div>
                </div>
                <FaClock className="absolute top-4 right-4 text-black/10 text-6xl rotate-12" />
            </div>

            {/* Infrastructure Cards */}
            {[
                { icon: <FaTruck />, title: "Flota Propia", desc: "Controlamos el 100% de la manipulación para asegurar cero micro-daños." },
                { icon: <FaBox />, title: "Alianzas Elite", desc: "Red de socios estratégicos en cada departamento, especializados en carga premium." },
                { icon: <FaRoute />, title: "Seguimiento", desc: "Interface en tiempo real. Información detallada sobre el ciclo de despacho." },
                { icon: <FaCheckCircle />, title: "Protección Total", desc: "Seguro de carga integral y Garantía Real de entrega en condiciones de fabrica." }
            ].map((card, i) => (
                <div key={i} className="md:col-span-6 lg:col-span-3 bg-white dark:bg-[#0A0A0A] rounded-[2rem] p-8 border border-gray-100 dark:border-white/5 hover:border-vive-500/50 transition-all duration-700 group order-3 shadow-xl shadow-gray-200/50 dark:shadow-none">
                    <div className="w-12 h-12 rounded-xl bg-gray-50 dark:bg-white/5 flex items-center justify-center text-vive-600 dark:text-vive-500 mb-6 group-hover:scale-110 transition-transform">
                        {card.icon}
                    </div>
                    <h5 className="text-xl font-black text-gray-900 dark:text-white uppercase tracking-tighter mb-3 transition-colors group-hover:text-vive-600">{card.title}</h5>
                    <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed font-medium font-text">
                        {card.desc}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default ProvincesBento;
