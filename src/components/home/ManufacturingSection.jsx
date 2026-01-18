import React from 'react';
import { FaIndustry, FaTruck, FaBox, FaCog, FaCheckCircle } from 'react-icons/fa';

const ManufacturingSection = () => {
  const processes = [
    {
      icon: <FaIndustry className="w-6 h-6" />,
      title: "Espuma",
      description: "Desarrollamos nuestra propia espuma de alta densidad con materiales premium",
      image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&q=80&w=800" // White texture similar to foam
    },
    {
      icon: <FaCog className="w-6 h-6" />,
      title: "Resortes",
      description: "Sistema de resortes ensacados independiente para máximo confort",
      image: "https://images.unsplash.com/photo-1590674899505-1c5c41951f89?auto=format&fit=crop&q=80&w=800" // Abstract metal lines
    },
    {
      icon: <FaBox className="w-6 h-6" />,
      title: "Armado",
      description: "Ensamblaje manual con control de calidad en cada etapa",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" // Industrial manufacturing
    },
    {
      icon: <FaTruck className="w-6 h-6" />,
      title: "Distribución",
      description: "Entrega directa a Lima y provincias con flota propia",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800" // Delivery truck
    }
  ];

  const benefits = [
    "Control de calidad total",
    "Precio directo de fábrica",
    "Producción por volumen",
    "Garantía extendida",
    "Asesoría técnica",
    "Entrega nacional"
  ];

  return (
    <section className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gold-400/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-400/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-block py-1 px-3 rounded-full bg-gold-100 text-gold-600 text-sm font-semibold tracking-wider mb-4 uppercase">
            Excelencia en cada detalle
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-gray-900 dark:text-white mb-6">
            Proceso de <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-500 to-yellow-600">Fabricación</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            Controlamos meticulosamente cada etapa del proceso para garantizar la máxima calidad y confort en tu descanso.
          </p>
        </div>

        {/* Modern Process Grid (Bento/Card Style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24 h-auto lg:h-[500px]">
          {processes.map((process, index) => (
            <div
              key={index}
              className={`
                group relative rounded-3xl overflow-hidden cursor-pointer shadow-lg
                ${index === 1 || index === 2 ? 'lg:translate-y-12' : ''} 
                transition-transform duration-500 hover:-translate-y-2
              `}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={process.image}
                  alt={process.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex items-center gap-3 mb-3 text-gold-400">
                  <div className="bg-white/10 p-2 rounded-lg backdrop-blur-sm">
                    {process.icon}
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-gold-300/80">Paso 0{index + 1}</span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 font-display">
                  {process.title}
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 transform translate-y-4 group-hover:translate-y-0">
                  {process.description}
                </p>
              </div>

              {/* Border Glow Effect on Hover */}
              <div className="absolute inset-0 border-2 border-gold-500/0 group-hover:border-gold-500/50 rounded-3xl transition-all duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="professional-section rounded-3xl p-8 lg:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Beneficios de comprar directo de fábrica
              </h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <FaCheckCircle className="w-5 h-5 text-gold-500 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-100">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-gold-500/20 to-gold-600/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-gold-500/30">
              <div className="text-5xl font-bold text-gold-600 dark:text-gold-400 mb-2">-40%</div>
              <div className="text-xl text-gray-800 dark:text-gray-200 mb-4">vs. Tiendas retail</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                Al eliminar intermediarios, te ofrecemos el mejor precio sin sacrificar calidad
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManufacturingSection;
