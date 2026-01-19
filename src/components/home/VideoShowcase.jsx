import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheck, FaAward, FaHistory, FaTools, FaArrowRight } from 'react-icons/fa';
import mattressLuxury from '@assets/images/products/mattress-luxury.png';

const VideoShowcase = () => {
  const features = [
    { text: "Tecnología de descanso avanzada", icon: <FaTools className="text-gold-500" /> },
    { text: "Insumos 100% de primera calidad", icon: <FaAward className="text-gold-500" /> },
    { text: "Maestros artesanos expertos", icon: <FaHistory className="text-gold-500" /> },
    { text: "Garantía real directo de fábrica", icon: <FaCheck className="text-gold-500" /> }
  ];

  return (
    <section className="py-24 bg-white dark:bg-gray-950 relative overflow-hidden transition-colors duration-700">
      {/* Abstract Background Elements */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-gold-500/[0.03] rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">

          {/* Columna Izquierda: Composición Visual Minimalista de Alto Impacto */}
          <div className="w-full lg:w-1/2 relative flex items-center justify-center min-h-[400px] md:min-h-[600px]">
            {/* Brillo ambiental sutil de fondo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-gold-500/5 blur-[120px] rounded-full pointer-events-none"></div>

            {/* Imagen del Producto - Máxima presencia sin distracciones */}
            <img
              src={mattressLuxury}
              alt="Colchón de Lujo Sueño Dorado"
              className="relative z-10 w-full h-auto object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.15)] dark:drop-shadow-[0_45px_90px_rgba(255,255,255,0.02)]"
            />
          </div>

          {/* Right Column: Editorial Elite Content */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-gold-500 font-black text-[10px] uppercase tracking-[0.4em]">Nuestra Esencia</span>
                <div className="h-[1px] w-12 bg-gold-200/50"></div>
                <span className="text-gray-400 font-bold text-[9px] uppercase tracking-widest">100% Calidad de Exportación</span>
              </div>

              <h2 className="text-4xl lg:text-7xl font-black text-gray-900 dark:text-white mb-8 leading-[0.85] tracking-tighter uppercase">
                Donde la <span className="text-gold-500 italic font-light">Tradición</span> <br />
                <span className="text-gray-400">se vuelve</span> <br />
                Excelencia
              </h2>
              <p className="text-lg text-gray-500 dark:text-gray-400 font-medium leading-relaxed max-w-xl">
                En Sueño Dorado, no solo fabricamos colchones; creamos cumbres de descanso. Cada pieza es el resultado de décadas de maestría artesanal, combinada con la ingeniería más avanzada hecha con orgullo en el Perú.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {features.map((item, index) => (
                <div key={index} className="flex items-center gap-4 group/item">
                  <div className="w-10 h-10 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 flex items-center justify-center flex-shrink-0 group-hover/item:bg-gold-500 group-hover/item:border-gold-500 transition-all duration-300">
                    <span className="group-hover/item:text-black transition-colors">{item.icon}</span>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 font-bold text-xs uppercase tracking-widest group-hover/item:text-gold-500 transition-colors">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="pt-8">
              <Link
                to="/venta-por-mayor"
                className="inline-flex items-center gap-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-10 py-5 rounded-full font-black text-sm uppercase tracking-widest transition-all hover:bg-gold-500 hover:text-white dark:hover:bg-gold-500 dark:hover:text-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:shadow-gold-500/20 hover:-translate-y-1"
              >
                Conoce Nuestra Planta
                <FaArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
