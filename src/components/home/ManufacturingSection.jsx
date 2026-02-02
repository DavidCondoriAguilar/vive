import React from 'react';
import { FaIndustry, FaTruck, FaBox, FaCog, FaCheckCircle, FaTruckLoading, FaStar, FaAward, FaHistory, FaHandshake } from 'react-icons/fa';

const ManufacturingSection = () => {
  const processes = [
    {
      icon: <FaIndustry className="w-6 h-6" />,
      title: "Espuma",
      description: "Desarrollamos nuestra propia espuma de alta densidad con materiales premium",
      image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&q=80&w=800"
    },
    {
      icon: <FaCog className="w-6 h-6" />,
      title: "Resortes",
      description: "Sistema de resortes ensacados independiente para máximo confort",
      image: "https://images.unsplash.com/photo-1631049552057-403cdb8f0658?auto=format&fit=crop&q=80&w=800"
    },
    {
      icon: <FaBox className="w-6 h-6" />,
      title: "Armado",
      description: "Ensamblaje manual con control de calidad en cada etapa",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
    },
    {
      icon: <FaTruck className="w-6 h-6" />,
      title: "Distribución",
      description: "Entrega directa a Lima y provincias con flota propia",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-gray-950 relative overflow-hidden transition-colors duration-700">
      {/* Decorative Zen Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-6 lg:px-20 relative z-10">

        {/* Section Title - Modern Minimalist */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-gold-500 font-black text-[10px] uppercase tracking-[0.4em] mb-4 block">Ingeniería del Descanso</span>
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white uppercase leading-[0.9] tracking-tighter">
              Control Total,<br /> <span className="text-gold-500 italic font-light">Desde el Origen</span>
            </h2>
          </div>
          <p className="text-gray-500 dark:text-gray-400 text-lg font-medium leading-relaxed max-w-sm md:text-right">
            Al ser fabricantes directos, supervisamos cada costura, cada resorte y cada capa de espuma para asegurar un estándar de calidad insuperable.
          </p>
        </div>

        {/* Expert Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto">

          {/* Main Experience Card - Large */}
          <div className="md:col-span-12 lg:col-span-7 bg-gray-900 rounded-[3rem] p-10 flex flex-col justify-between relative overflow-hidden group border border-white/5">
            <div className="absolute top-0 right-0 w-80 h-80 bg-gold-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gold-500">
                  <FaAward className="w-8 h-8" />
                </div>
                <div>
                  <div className="text-white font-black text-3xl tracking-tighter">+30 Años</div>
                  <div className="text-gold-500/60 text-[10px] uppercase tracking-widest font-bold">Trayectoria Imbatible</div>
                </div>
              </div>
              <h3 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight leading-none">
                Liderando la industria <br /> <span className="text-gold-500">en todo el Perú</span>
              </h3>
            </div>

            <div className="relative z-10 mt-12">
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 text-center">
                  <div className="text-white font-black text-2xl mb-1">SD</div>
                  <div className="text-gray-500 text-[8px] uppercase tracking-widest">Marca</div>
                </div>
                <div className="bg-gold-500 rounded-2xl p-6 text-center shadow-xl shadow-gold-500/20">
                  <FaStar className="text-black w-6 h-6 mx-auto mb-1" />
                  <div className="text-black font-black text-[8px] uppercase tracking-widest">Calidad 5★</div>
                </div>
                <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 text-center">
                  <div className="text-white font-black text-2xl mb-1">100%</div>
                  <div className="text-gray-500 text-[8px] uppercase tracking-widest">Peruano</div>
                </div>
              </div>
            </div>
          </div>

          {/* Savings Card - Vertical High Impact */}
          <div className="md:col-span-6 lg:col-span-5 bg-gold-500 rounded-[3rem] p-10 flex flex-col items-center justify-center text-center relative overflow-hidden group shadow-2xl shadow-gold-500/10">
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
            <div className="relative z-10">
              <div className="text-8xl md:text-9xl font-black text-black tracking-tighter mb-4 group-hover:scale-110 transition-transform duration-700">-40%</div>
              <h4 className="text-2xl font-black text-black uppercase tracking-widest mb-6">Ahorro Directo</h4>
              <div className="h-[1px] w-20 bg-black/20 mx-auto mb-6"></div>
              <p className="text-black/70 font-bold leading-relaxed max-w-xs">
                Sin intermediarios ni comisiones de terceros. Calidad premium al precio real de fábrica.
              </p>
            </div>
          </div>

          <div className="md:col-span-6 lg:col-span-4 bg-gray-50 dark:bg-white/5 rounded-[2.5rem] p-8 border border-gray-100 dark:border-white/5 hover:border-gold-500/30 transition-all duration-500 group">
            <div className="w-14 h-14 rounded-2xl bg-white dark:bg-black shadow-sm flex items-center justify-center text-gold-500 mb-6 group-hover:scale-110 transition-transform">
              <FaCheckCircle className="w-7 h-7" />
            </div>
            <h5 className="text-xl font-black text-gray-900 dark:text-white uppercase mb-3">Garantía de Fábrica</h5>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
              Respaldo total y directo de nuestra planta en cada producto que fabricamos.
            </p>
          </div>

          {/* Logistics Card - Minimal Grid */}
          <div className="md:col-span-12 lg:col-span-8 bg-gray-50 dark:bg-white/5 rounded-[2.5rem] p-8 border border-gray-100 dark:border-white/5 hover:border-gold-500/30 transition-all duration-500 group overflow-hidden relative">
            <div className="flex flex-col md:flex-row items-center gap-10 relative z-10">
              <div className="w-20 h-20 rounded-full bg-gold-500 flex items-center justify-center text-black flex-shrink-0 shadow-lg">
                <FaTruckLoading className="w-10 h-10" />
              </div>
              <div>
                <h5 className="text-2xl font-black text-gray-900 dark:text-white uppercase mb-2">Entrega Nacional Propia</h5>
                <p className="text-gray-500 dark:text-gray-400 font-medium leading-relaxed max-w-xl">
                  Nuestra logística integrada asegura que tu colchón llegue impecable a Lima, Callao o cualquier provincia del Perú, sin daños por terceros.
                </p>
              </div>
            </div>
            {/* Aesthetic Background Detail */}
            <div className="absolute top-1/2 right-[-5%] -translate-y-1/2 text-gray-200 dark:text-white/5 font-black text-[120px] pointer-events-none select-none italic tracking-tighter">
              PERÚ
            </div>
          </div>

        </div>

        {/* Mini Process Gallery (Visual support) */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {processes.map((p, i) => (
            <div key={i} className="group relative h-48 rounded-3xl overflow-hidden border border-gray-100 dark:border-white/5">
              <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-125" />
              <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-black text-xs uppercase tracking-widest">{p.title}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ManufacturingSection;
