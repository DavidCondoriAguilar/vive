import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheck, FaAward, FaHistory, FaTools, FaArrowRight, FaGem, FaAward as FaTrophy, FaHandSparkles } from 'react-icons/fa';
import mattressLuxury from '@assets/images/products/mattress-luxury.png';

const VideoShowcase = () => {
  const features = [
    { text: "Tecnología de descanso avanzada", icon: <FaTools className="w-5 h-5" />, bg: "from-blue-500/10 to-blue-600/10" },
    { text: "Insumos 100% de primera calidad", icon: <FaGem className="w-5 h-5" />, bg: "from-gold-500/10 to-amber-600/10" },
    { text: "Maestros artesanos expertos", icon: <FaHandSparkles className="w-5 h-5" />, bg: "from-purple-500/10 to-purple-600/10" },
    { text: "Garantía real directo de fábrica", icon: <FaTrophy className="w-5 h-5" />, bg: "from-green-500/10 to-green-600/10" }
  ];

  return (
    <section className="py-32 bg-white dark:bg-black relative overflow-hidden transition-colors duration-700">
      {/* Modern Grid Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gold-500/[0.02] via-transparent to-blue-500/[0.02] pointer-events-none"></div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-gold-500/[0.03] rounded-full blur-[100px]"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/[0.02] rounded-full blur-[120px]"></div>

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-6 mb-8">
            <span className="text-gold-500 font-black text-[10px] uppercase tracking-[0.4em]">Nuestra Esencia</span>
            <div className="h-[1px] w-20 bg-gradient-to-r from-gold-200 to-transparent"></div>
            <span className="text-gray-400 dark:text-gray-500 font-black text-[9px] uppercase tracking-widest">100% Calidad de Exportación</span>
          </div>
          
          <h2 className="text-5xl md:text-8xl font-black text-gray-900 dark:text-white mb-8 leading-[0.85] tracking-tighter uppercase">
            Donde la <span className="text-gold-500 italic font-light">Tradición</span> <br />
            <span className="text-gray-400 dark:text-gray-500">se vuelve</span> <br />
            <span className="text-gold-500">Excelencia</span>
          </h2>
          
          <p className="text-xl text-gray-500 dark:text-gray-400 font-medium leading-relaxed max-w-4xl mx-auto">
            En Sueño Dorado, no solo fabricamos colchones; creamos cumbres de descanso. Cada pieza es el resultado de décadas de maestría artesanal, combinada con la ingeniería más avanzada hecha con orgullo en el Perú.
          </p>
        </div>

        {/* Modern Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          
          {/* Left: Enhanced Visual */}
          <div className="relative group">
            {/* Subtle Floating Elements */}
            <div className="absolute -top-6 -right-6 w-16 h-16 bg-gold-500/[0.05] rounded-full blur-2xl group-hover:scale-110 transition-transform duration-700"></div>
            
            {/* Minimal Image Container */}
            <div className="relative">
              {/* Subtle shadow line */}
              <div className="absolute -inset-px bg-gradient-to-br from-gray-100/50 to-transparent dark:from-white/5 dark:to-transparent rounded-3xl pointer-events-none"></div>
              
              <img
                src={mattressLuxury}
                alt="Colchón de Lujo Sueño Dorado"
                className="relative z-10 w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Right: Features Grid */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((item, index) => (
                <div key={index} className="group relative">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.bg} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  <div className="relative bg-white dark:bg-black border border-gray-100 dark:border-white/20 rounded-2xl p-6 hover:border-gold-500/50 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gray-50 dark:bg-white/5 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-gold-500 group-hover:scale-110 transition-all duration-300">
                        <span className="text-gray-600 dark:text-gray-400 group-hover:text-white transition-colors">{item.icon}</span>
                      </div>
                      <div className="flex-1">
                        <span className="text-gray-900 dark:text-white font-bold text-sm uppercase tracking-widest leading-tight">{item.text}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Link
            to="/venta-por-mayor"
            className="inline-flex items-center gap-4 bg-black dark:bg-white text-white dark:text-black px-12 py-6 rounded-full font-black text-sm uppercase tracking-widest transition-all hover:bg-gold-500 hover:text-white dark:hover:bg-gold-500 dark:hover:text-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:shadow-gold-500/20 hover:-translate-y-1 hover:scale-105"
          >
            Conoce Nuestra Planta
            <FaArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
