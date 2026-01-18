import React from 'react';
import { FaIndustry, FaTruck, FaBox, FaCog, FaCheckCircle } from 'react-icons/fa';

const ManufacturingSection = () => {
  const processes = [
    {
      icon: <FaIndustry className="w-8 h-8" />,
      title: "Espuma",
      description: "Desarrollamos nuestra propia espuma de alta densidad con materiales premium"
    },
    {
      icon: <FaCog className="w-8 h-8" />,
      title: "Resortes",
      description: "Sistema de resortes ensacados independiente para máximo confort"
    },
    {
      icon: <FaBox className="w-8 h-8" />,
      title: "Armado",
      description: "Ensamblaje manual con control de calidad en cada etapa"
    },
    {
      icon: <FaTruck className="w-8 h-8" />,
      title: "Distribución",
      description: "Entrega directa a Lima y provincias con flota propia"
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
    <section className="py-20 modern-gradient-bg futuristic-grid relative overflow-hidden">
      {/* Modern Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-gray-900 dark:text-white mb-4">
            Proceso de <span className="text-gold-500">Fabricación</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Controlamos cada etapa del proceso para garantizar la máxima calidad en cada colchón
          </p>
        </div>

        {/* Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {processes.map((process, index) => (
            <div 
              key={index}
              className="glass-grid p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 text-center group hover:scale-105"
            >
              <div className="text-gold-500 mb-4 group-hover:scale-110 transition-transform inline-block">
                {process.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{process.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{process.description}</p>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="glass-grid rounded-3xl p-8 lg:p-12 shadow-2xl">
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
