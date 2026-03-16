import React, { useState, useEffect } from 'react';
import { getWhatsAppLink } from '@core/utils/constants';
import { FaTruckLoading, FaMapMarkedAlt, FaShieldAlt, FaRocket, FaGlobeAmericas, FaArrowRight } from 'react-icons/fa';
import RevealSection from '@/components/ui/RevealSection';

const ProvincesSection = () => {
  const provinces = [
    { name: 'Arequipa', code: 'AQP' },
    { name: 'Cusco', code: 'CUZ' },
    { name: 'Trujillo', code: 'TRU' },
    { name: 'Chiclayo', code: 'CIX' },
    { name: 'Piura', code: 'PIU' },
    { name: 'Iquitos', code: 'IQT' },
    { name: 'Huancayo', code: 'HYO' },
    { name: 'Cajamarca', code: 'CJA' },
    { name: 'Tacna', code: 'TCQ' },
    { name: 'Ayacucho', code: 'AYP' }
  ];

  const waLink = getWhatsAppLink("Hola, deseo cotizar un despacho a provincias para productos Vive.");
  
  // Real-time fake counter for UI effect
  const [activeShipments, setActiveShipments] = useState(142);
  
  useEffect(() => {
    const interval = setInterval(() => {
        setActiveShipments(prev => prev + Math.floor(Math.random() * 3));
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-32 relative bg-white dark:bg-[#030303] overflow-hidden border-t border-gray-100 dark:border-white/5 font-inter">
      
      {/* 2026 Background Grid & Glows */}
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(150, 150, 150, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(150, 150, 150, 0.05) 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-vive-500/[0.03] dark:bg-vive-500/[0.04] rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/[0.02] dark:bg-blue-500/[0.03] rounded-full blur-[120px] translate-y-1/3 -translate-x-1/3"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 w-full max-w-7xl">
        
        {/* HEADER: Ultra Minimalist 2026 */}
        <RevealSection className="flex flex-col md:flex-row justify-between items-end gap-10 mb-20 md:mb-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 px-3 py-1.5 bg-gray-100 dark:bg-white/5 rounded-sm mb-8 border border-gray-200 dark:border-white/10 backdrop-blur-sm">
                <span className="w-1.5 h-1.5 bg-vive-500 rounded-full animate-ping"></span>
                <span className="text-[9px] font-mono font-black text-gray-800 dark:text-gray-300 uppercase tracking-[0.3em] leading-none">
                    Centro de Comando Logístico
                </span>
            </div>
            <h2 className="text-5xl md:text-7xl lg:text-[100px] font-black text-gray-900 dark:text-white uppercase leading-[0.85] tracking-tighter mix-blend-difference">
                Despachos a <br className="hidden md:block"/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-vive-600 to-vive-400">
                    Todo el Perú
                </span>
            </h2>
          </div>
          
          <div className="w-full md:w-auto flex flex-col items-start md:items-end gap-4">
            <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base max-w-sm md:text-right font-medium leading-relaxed">
                Flota propia y alianzas élite garantizan la integridad estructural de tu descanso, estés donde estés.
            </p>
            <div className="flex items-center gap-4 mt-2">
                <div className="flex flex-col items-start md:items-end">
                    <span className="text-3xl font-black text-gray-900 dark:text-white font-mono tracking-tighter">{activeShipments}</span>
                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em]">En Tránsito Hoy</span>
                </div>
            </div>
          </div>
        </RevealSection>

        {/* MAIN BENTO GRID 2026 */}
        <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-[minmax(180px,auto)] gap-6">
            
            {/* BIG MAP / PROVINCES BLOCK */}
            <RevealSection className="md:col-span-12 lg:col-span-8 bg-gray-50 dark:bg-[#0A0A0A] rounded-3xl p-8 md:p-12 border border-gray-200/50 dark:border-white/5 relative overflow-hidden group hover:border-vive-500/30 transition-colors duration-700" delay={100}>
                
                {/* Visual Radar Lines */}
                <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] border border-vive-500/10 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
                <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] border border-vive-500/5 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
                
                <div className="relative z-10 h-full flex flex-col justify-between">
                    <div className="flex justify-between items-start mb-12">
                        <FaGlobeAmericas className="text-4xl text-vive-500/40 group-hover:text-vive-500 transition-colors duration-500" />
                        <span className="text-[10px] font-mono text-gray-400 border border-gray-200 dark:border-white/10 px-3 py-1 rounded-full uppercase tracking-widest backdrop-blur-md">
                            Cobertura Nacional
                        </span>
                    </div>
                    
                    <div>
                        <h3 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white uppercase tracking-tight mb-8">
                            Rutas Principales <span className="text-vive-500">Activas</span>
                        </h3>
                        
                        <div className="flex flex-wrap gap-3">
                            {provinces.map((prov, idx) => (
                                <div key={idx} className="group/city flex items-center gap-2 bg-white dark:bg-black/50 border border-gray-200 dark:border-white/5 px-4 py-2 rounded-xl hover:bg-vive-500/5 hover:border-vive-500/40 transition-all duration-300 cursor-default">
                                    <span className="text-[9px] font-black text-vive-500 uppercase tracking-widest font-mono group-hover/city:animate-pulse">{prov.code}</span>
                                    <span className="text-xs font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wide">{prov.name}</span>
                                </div>
                            ))}
                            <div className="flex items-center gap-2 px-4 py-2 rounded-xl">
                                <span className="text-xs justify-center italic font-bold text-gray-400 dark:text-gray-500 tracking-wide">+ Más destinos</span>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealSection>

            {/* PERFORMANCE METRICS - LIMA */}
            <RevealSection className="md:col-span-6 lg:col-span-4 bg-vive-600 rounded-3xl p-8 md:p-12 relative overflow-hidden group hover:scale-[1.02] transform transition-transform duration-500" delay={200}>
                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent_50%)]"></div>
                 <div className="relative z-10 flex flex-col h-full justify-between">
                    <div>
                        <span className="text-[10px] bg-black/10 px-3 py-1 rounded-sm font-mono text-black font-black uppercase tracking-widest block w-fit mb-6">
                            Lima Metropolitana
                        </span>
                        <p className="text-black/80 font-medium text-sm leading-snug max-w-[200px]">
                            Despacho express desde nuestra fábrica a tu hogar.
                        </p>
                    </div>
                    
                    <div className="mt-8">
                        <div className="flex items-baseline gap-1">
                            <span className="text-6xl md:text-[80px] font-black text-black leading-none tracking-tighter">
                                24
                            </span>
                            <span className="text-3xl font-black text-black leading-none">-48</span>
                        </div>
                        <span className="text-xs font-black text-black uppercase tracking-[0.3em] block mt-2">
                            HORAS MÁXIMO
                        </span>
                    </div>
                 </div>
            </RevealSection>

            {/* PERFORMANCE METRICS - NACIONAL */}
            <RevealSection className="md:col-span-6 lg:col-span-4 bg-gray-900 dark:bg-black rounded-3xl p-8 md:p-12 border border-black/5 dark:border-white/5 relative overflow-hidden group" delay={300}>
                 <div className="absolute bottom-0 right-0 w-32 h-32 bg-vive-500/10 rounded-full blur-3xl group-hover:bg-vive-500/20 transition-colors"></div>
                 <div className="relative z-10 flex flex-col h-full justify-between">
                    <div>
                        <span className="text-[10px] border border-white/20 px-3 py-1 rounded-sm font-mono text-white/60 font-black uppercase tracking-widest block w-fit mb-6">
                            Alcance Nacional
                        </span>
                        <FaRocket className="text-3xl text-vive-500 mb-4" />
                    </div>
                    
                    <div className="mt-8">
                        <span className="text-5xl md:text-6xl font-black text-white leading-none tracking-tighter block">
                            3-7
                        </span>
                        <span className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.3em] block mt-4">
                            Días Hábiles
                        </span>
                    </div>
                 </div>
            </RevealSection>

            {/* FEATURE BLOCK 1 */}
            <RevealSection className="md:col-span-6 lg:col-span-4 bg-gray-50 dark:bg-[#0A0A0A] border border-gray-200/50 dark:border-white/5 rounded-3xl p-8 flex flex-col justify-end group hover:bg-gray-100 dark:hover:bg-[#111] transition-colors" delay={400}>
                <FaShieldAlt className="text-4xl text-gray-300 dark:text-gray-700 mb-8 group-hover:text-vive-500 transition-colors duration-500" />
                <h4 className="text-xl font-black text-gray-900 dark:text-white uppercase tracking-tight mb-2">Protección Total</h4>
                <p className="text-sm font-medium text-gray-500 leading-relaxed group-hover:text-gray-900 dark:group-hover:text-gray-300 transition-colors">
                    Seguro de carga integral y embalaje de exportación. Cero micro-daños.
                </p>
            </RevealSection>

            {/* FEATURE BLOCK 2 */}
            <RevealSection className="md:col-span-12 lg:col-span-4 bg-gray-50 dark:bg-[#0A0A0A] border border-gray-200/50 dark:border-white/5 rounded-3xl p-8 flex flex-col justify-end group hover:bg-gray-100 dark:hover:bg-[#111] transition-colors" delay={500}>
                <FaMapMarkedAlt className="text-4xl text-gray-300 dark:text-gray-700 mb-8 group-hover:text-vive-500 transition-colors duration-500" />
                <h4 className="text-xl font-black text-gray-900 dark:text-white uppercase tracking-tight mb-2">Seguimiento Real Tracking</h4>
                <p className="text-sm font-medium text-gray-500 leading-relaxed group-hover:text-gray-900 dark:group-hover:text-gray-300 transition-colors">
                    Reportes fotográficos y contacto directo con área logística.
                </p>
            </RevealSection>
        </div>

        {/* MODERN CTA TICKET */}
        <RevealSection delay={600} className="mt-16 bg-white dark:bg-[#111] rounded-3xl p-2 border border-gray-200 dark:border-white/10 flex flex-col md:flex-row items-center justify-between shadow-xl shadow-gray-200/50 dark:shadow-none">
            <div className="p-6 md:px-10 flex items-center gap-6 w-full md:w-auto">
                <div className="w-12 h-12 rounded-full bg-vive-500/10 flex items-center justify-center">
                    <FaTruckLoading className="text-xl text-vive-500" />
                </div>
                <div>
                    <h5 className="text-lg font-black text-gray-900 dark:text-white tracking-tight uppercase">Cotiza tu Envío</h5>
                    <p className="text-xs text-gray-500 uppercase tracking-widest font-mono mt-1">Conecta con un especialista logístico</p>
                </div>
            </div>
            
            <a 
                href={waLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full md:w-auto p-6 md:p-8 bg-black dark:bg-white text-white dark:text-black rounded-2xl flex items-center justify-center gap-4 hover:scale-[0.98] transition-all duration-300 focus:outline-none"
            >
                <span className="text-xs font-black uppercase tracking-[0.2em]">Contactar ahora</span>
                <FaArrowRight className="animate-pulse" />
            </a>
        </RevealSection>
        
      </div>
    </section>
  );
};

export default ProvincesSection;
