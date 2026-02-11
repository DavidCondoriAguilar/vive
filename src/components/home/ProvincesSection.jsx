import React from 'react';
import { FaTruck, FaMapMarkerAlt, FaBox, FaCheckCircle, FaRoute, FaArrowRight, FaShip, FaPlane, FaClock } from 'react-icons/fa';
import { getWhatsAppLink } from '@/utils/constants';

const ProvincesSection = () => {
  const provinces = [
    'Arequipa', 'Cusco', 'Trujillo', 'Chiclayo', 'Piura',
    'Iquitos', 'Huancayo', 'Chimbote', 'Pucallpa', 'Tacna',
    'Ica', 'Juliaca', 'Cajamarca', 'Ayacucho', 'Huánuco'
  ];

  const deliveryFeatures = [
    {
      icon: <FaTruck className="w-7 h-7" />,
      title: "Flota Propia",
      description: "Contamos con nuestra propia flota para entregas seguras",
      variant: "dark"
    },
    {
      icon: <FaBox className="w-7 h-7" />,
      title: "Agencias Aliadas",
      description: "Red de agencias en todo el Perú para cobertura total",
      variant: "gold"
    },
    {
      icon: <FaRoute className="w-7 h-7" />,
      title: "Seguimiento",
      description: "Rastrea tu pedido en tiempo real desde fabrica",
      variant: "dark"
    },
    {
      icon: <FaCheckCircle className="w-7 h-7" />,
      title: "Garantía",
      description: "Compromiso de entrega en tiempo y forma",
      variant: "dark"
    }
  ];

  const waLink = getWhatsAppLink("Hola, deseo cotizar un despacho a provincias para productos Vive.");

  return (
    <section className="py-32 bg-white dark:bg-[#050505] relative overflow-hidden transition-colors duration-1000">
      {/* 1. Industrial Background Layers */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-vive-600/[0.02] dark:bg-vive-500/[0.03] rounded-full blur-[150px] translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-100 dark:via-white/5 to-transparent"></div>
        <div className="absolute inset-0 opacity-[0.02] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-20 relative z-10">

        {/* Section Header: Elite Logistics Portfolio */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-4 px-4 py-1 bg-vive-600/5 dark:bg-vive-500/5 border border-vive-600/10 dark:border-vive-500/10 rounded-full mb-8">
              <span className="w-1.5 h-1.5 bg-vive-600 rounded-full animate-ping"></span>
              <span className="text-[10px] font-black text-vive-600 dark:text-vive-500 uppercase tracking-[0.5em]">Logística Nacional // HUB_PERÚ</span>
            </div>
            <h2 className="text-4xl md:text-[100px] font-display font-black text-gray-900 dark:text-white uppercase leading-[0.82] tracking-tighter">
              Despachamos a <br className="hidden md:block" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-vive-600 to-vive-400 dark:from-vive-500 dark:to-white italic font-light lowercase">todo el Perú</span>
            </h2>
          </div>
          <div className="max-w-sm space-y-6 text-right">
            <p className="text-gray-500 dark:text-gray-400 text-lg font-medium leading-relaxed">
              Lima y provincias vía <span className="text-gray-900 dark:text-white font-bold underline decoration-vive-500 decoration-2">flota propia</span> y agencias estratégicas. Llegamos donde estés.
            </p>
            <div className="flex justify-end gap-3">
              <span className="text-[10px] font-mono text-vive-600 dark:text-vive-500 font-black border border-vive-600/20 px-3 py-1 rounded-sm uppercase tracking-widest">Status: active</span>
              <span className="text-[10px] font-mono text-gray-400 font-bold border border-gray-100 dark:border-white/5 px-3 py-1 rounded-sm uppercase tracking-widest">Protocol: Direct_Factory</span>
            </div>
          </div>
        </div>

        {/* High-Performance Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-24">

          {/* Coverage Node: The Grid Hub */}
          <div className="md:col-span-12 lg:col-span-8 bg-gray-900 rounded-[2rem] p-12 flex flex-col justify-between relative overflow-hidden group border border-white/5 order-2 lg:order-1 shadow-2xl transition-all duration-700 hover:shadow-vive-500/10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-vive-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>

            <div className="relative z-10 flex flex-col md:flex-row gap-12">
              {/* Technical Map Placeholder Style */}
              <div className="w-full md:w-1/3">
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-14 h-14 rounded-xl bg-vive-600 flex items-center justify-center text-white shadow-lg shadow-vive-600/20">
                    <FaRoute className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-black text-2xl tracking-tighter uppercase">Cobertura</h4>
                    <p className="text-vive-500/60 text-[8px] uppercase tracking-[0.3em] font-bold font-mono">Territorio_Nacional</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                    <span className="text-[8px] font-mono text-vive-500 uppercase tracking-widest block mb-2">Primary Nodes:</span>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-[10px] font-bold text-white px-2 py-1 bg-white/10 rounded-sm">ARE</span>
                      <span className="text-[10px] font-bold text-white px-2 py-1 bg-white/10 rounded-sm">CUS</span>
                      <span className="text-[10px] font-bold text-white px-2 py-1 bg-white/10 rounded-sm">TRU</span>
                      <span className="text-[10px] font-bold text-white px-2 py-1 bg-white/10 rounded-sm">PIU</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* City List Grid */}
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
                <h5 className="text-[10px] font-black text-vive-500 uppercase tracking-[0.4em] mb-4 text-left">Industrial Logistics</h5>
                <p className="text-gray-500 text-sm font-medium leading-relaxed">
                  Ingeniería de despacho certificada. Cada producto Vive viaja con <span className="text-white">seguimiento digital</span> y protección estructural garantizada.
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
                <span className="text-[10px] font-black text-black uppercase tracking-[0.4em]">SLA_Control</span>
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
                  <span className="text-[10px] font-black text-black/60 uppercase tracking-widest font-mono">Lima Protocol</span>
                  <span className="text-xs font-black text-black uppercase tracking-widest">24-48h</span>
                </div>
                <div className="flex justify-between items-center bg-black/5 p-4 border border-black/5 backdrop-blur-sm">
                  <span className="text-[10px] font-black text-black/60 uppercase tracking-widest font-mono">Regional Protocol</span>
                  <span className="text-xs font-black text-black uppercase tracking-widest">3-7 Días</span>
                </div>
              </div>
            </div>
            <FaClock className="absolute top-4 right-4 text-black/10 text-6xl rotate-12" />
          </div>

          {/* Infrastructure Cards */}
          <div className="md:col-span-6 lg:col-span-3 bg-white dark:bg-[#0A0A0A] rounded-[2rem] p-8 border border-gray-100 dark:border-white/5 hover:border-vive-500/50 transition-all duration-700 group order-3 shadow-xl shadow-gray-200/50 dark:shadow-none relative">
            <div className="w-12 h-12 rounded-xl bg-gray-50 dark:bg-white/5 flex items-center justify-center text-vive-600 dark:text-vive-500 mb-6 group-hover:scale-110 transition-transform">
              <FaTruck className="w-6 h-6" />
            </div>
            <h5 className="text-xl font-black text-gray-900 dark:text-white uppercase tracking-tighter mb-3">Flota Propia</h5>
            <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed font-medium font-text">
              Controlamos el <span className="text-vive-600 font-bold">100% de la manipulación</span> para asegurar cero micro-daños en el núcleo del colchón.
            </p>
          </div>

          <div className="md:col-span-6 lg:col-span-3 bg-white dark:bg-[#0A0A0A] rounded-[2rem] p-8 border border-gray-100 dark:border-white/5 hover:border-vive-500/50 transition-all duration-700 group order-4 shadow-xl shadow-gray-200/50 dark:shadow-none">
            <div className="w-12 h-12 rounded-xl bg-gray-50 dark:bg-white/5 flex items-center justify-center text-vive-600 dark:text-vive-500 mb-6 group-hover:scale-110 transition-transform">
              <FaBox className="w-6 h-6" />
            </div>
            <h5 className="text-xl font-black text-gray-900 dark:text-white uppercase tracking-tighter mb-3 transition-colors group-hover:text-vive-600">Alianzas Elite</h5>
            <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed font-medium font-text">
              Red de socios estratégicos en cada departamento, especializados en <span className="text-gray-900 dark:text-white font-bold">carga premium</span>.
            </p>
          </div>

          <div className="md:col-span-6 lg:col-span-3 bg-white dark:bg-[#0A0A0A] rounded-[2rem] p-8 border border-gray-100 dark:border-white/5 hover:border-vive-500/50 transition-all duration-700 group order-5 shadow-xl shadow-gray-200/50 dark:shadow-none">
            <div className="w-12 h-12 rounded-xl bg-gray-50 dark:bg-white/5 flex items-center justify-center text-vive-600 dark:text-vive-500 mb-6 group-hover:scale-110 transition-transform">
              <FaRoute className="w-6 h-6" />
            </div>
            <h5 className="text-xl font-black text-gray-900 dark:text-white uppercase tracking-tighter mb-3">Seguimiento</h5>
            <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed font-medium font-text">
              Interface en tiempo real. Información detallada sobre el <span className="text-vive-600 font-bold">ciclo de despacho</span> desde planta.
            </p>
          </div>

          <div className="md:col-span-6 lg:col-span-3 bg-white dark:bg-[#0A0A0A] rounded-[2rem] p-8 border border-gray-100 dark:border-white/5 hover:border-vive-500/50 transition-all duration-700 group order-6 shadow-xl shadow-gray-200/50 dark:shadow-none">
            <div className="w-12 h-12 rounded-xl bg-gray-50 dark:bg-white/5 flex items-center justify-center text-vive-600 dark:text-vive-500 mb-6 group-hover:scale-110 transition-transform">
              <FaCheckCircle className="w-6 h-6" />
            </div>
            <h5 className="text-xl font-black text-gray-900 dark:text-white uppercase tracking-tighter mb-3">Protección Total</h5>
            <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed font-medium font-text">
              Seguro de carga integral y <span className="text-gray-900 dark:text-white font-bold">Garantía Real</span> de entrega en condiciones iniciales de fabrica.
            </p>
          </div>

        </div>

        {/* Global Hub CTA */}
        <div className="relative bg-gray-900 rounded-[3rem] p-12 lg:p-24 overflow-hidden group shadow-[0_50px_100px_rgba(0,0,0,0.3)]">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop')] opacity-15 grayscale group-hover:scale-105 transition-transform duration-[4s]"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/40 to-transparent"></div>
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-vive-500/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 opacity-30"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-3 py-1 bg-vive-500 text-black font-black text-[9px] uppercase tracking-widest mb-8">HUB_PROTOCOL_S01</div>
              <h3 className="text-4xl lg:text-7xl font-display font-black text-white uppercase tracking-tighter leading-[0.85] mb-8">
                ¿Su ciudad no figura <br />
                en el <span className="text-vive-500">listado global?</span>
              </h3>
              <p className="text-gray-400 text-xl font-medium mb-12 leading-relaxed font-text">
                Nuestra ingeniería logística no tiene límites. Activamos <span className="text-white">rutas especiales</span> personalizadas para que cada rincón del Perú experimente el confort Vive.
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn bg-vive-600 dark:bg-vive-500 hover:bg-vive-700 dark:hover:bg-vive-400 text-white dark:text-black px-12 py-7 rounded-sm font-black text-xs uppercase tracking-[0.4em] transition-all hover:scale-105 shadow-2xl flex items-center justify-center gap-4"
                >
                  Activar Canal Logístico <FaArrowRight className="group-hover/btn:translate-x-2 transition-transform" />
                </a>
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/5 backdrop-blur-3xl border border-white/20 hover:bg-white/10 text-white px-12 py-7 rounded-sm font-black text-xs uppercase tracking-[0.4em] transition-all inline-flex items-center justify-center"
                >
                  Especificaciones HUB
                </a>
              </div>
            </div>

            <div className="hidden lg:flex justify-end relative">
              <div className="relative">
                <div className="absolute inset-0 bg-vive-500 blur-[80px] opacity-20"></div>
                <FaShip className="text-vive-500/20 w-[400px] h-[400px] rotate-12 transition-transform duration-700 group-hover:rotate-0" />
                <div className="absolute -top-10 -left-10 p-6 bg-black/80 backdrop-blur-xl border border-white/10 rounded-xl space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-vive-500 rounded-full flex items-center justify-center text-black font-black text-xs">V.1</div>
                    <div>
                      <div className="text-white font-black text-xs uppercase tracking-widest">Sincronización Total</div>
                      <div className="text-vive-500 text-[8px] font-mono uppercase tracking-widest">Global_Status // Online</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProvincesSection;
