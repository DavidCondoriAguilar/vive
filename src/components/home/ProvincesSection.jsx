import React from 'react';
import { FaTruck, FaMapMarkerAlt, FaBox, FaCheckCircle } from 'react-icons/fa';

const ProvincesSection = () => {
  const provinces = [
    'Areququipa', 'Cusco', 'Trujillo', 'Chiclayo', 'Piura', 
    'Iquitos', 'Huancayo', 'Chimbote', 'Pucallpa', 'Tacna',
    'Ica', 'Juliaca', 'Cajamarca', 'Ayacucho', 'Huánuco'
  ];

  const deliveryFeatures = [
    {
      icon: <FaTruck className="w-6 h-6" />,
      title: "Flota Propia",
      description: "Contamos con nuestra propia flota para entregas seguras"
    },
    {
      icon: <FaBox className="w-6 h-6" />,
      title: "Agencias Aliadas",
      description: "Red de agencias en todo el Perú para cobertura total"
    },
    {
      icon: <FaMapMarkerAlt className="w-6 h-6" />,
      title: "Seguimiento Online",
      description: "Rastrea tu pedido en tiempo real desde fábrica"
    },
    {
      icon: <FaCheckCircle className="w-6 h-6" />,
      title: "Garantía de Entrega",
      description: "Compromiso de entrega en tiempo y forma garantizados"
    }
  ];

  return (
    <section className="py-20 modern-glow-ovals relative overflow-hidden">
      {/* Modern Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-gray-900 mb-4">
            Despachamos a <span className="text-gold-500">todo el Perú</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Lima y provincias vía flota propia y agencias de transporte confiables
          </p>
        </div>

        {/* Delivery Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {deliveryFeatures.map((feature, index) => (
            <div 
              key={index}
              className="modern-glow-ovals p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center group"
            >
              <div className="text-gold-500 mb-4 group-hover:scale-110 transition-transform inline-block">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Map and Coverage */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Cobertura Nacional
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Nuestra red de distribución cubre las principales ciudades del Perú. 
              Entregamos colchones, tarimas, cunas y almohadas a todo el territorio nacional 
              con plazos garantizados y seguro de transporte.
            </p>
            
            <div className="bg-gray-900 text-white rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-lg font-medium">Tiempo de entrega</span>
                <span className="text-2xl font-bold text-gold-400">3-7 días</span>
              </div>
              <div className="text-sm text-gray-300">
                Lima: 24-48h | Provincias: 3-7 días hábiles
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h4 className="text-lg font-bold text-gray-900 mb-4">Principales Ciudades</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {provinces.map((province, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2 text-sm text-gray-600"
                >
                  <FaMapMarkerAlt className="w-3 h-3 text-gold-500" />
                  {province}
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500 text-center">
                ¿No ves tu ciudad? <span className="text-gold-600 font-medium">¡Contáctanos!</span>
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 lg:p-12 text-white text-center">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            ¿Listo para recibir tu pedido en cualquier parte del Perú?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Cotiza sin compromiso y recibe asesoría personalizada para tu despacho a provincias
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gold-500 hover:bg-gold-600 text-white px-8 py-4 rounded-lg font-bold transition-all hover:scale-105">
              Cotizar Despacho
            </button>
            <button className="bg-transparent border-2 border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-gray-900 px-8 py-4 rounded-lg font-bold transition-all">
              Ver Rutas
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProvincesSection;
