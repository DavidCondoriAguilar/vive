import React from 'react';
import { FaTruck, FaMapMarkerAlt, FaBox, FaCheckCircle, FaRoute, FaArrowRight, FaShip, FaPlane } from 'react-icons/fa';
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
      description: "Rastrea tu pedido en tiempo real desde fábrica",
      variant: "dark"
    },
    {
      icon: <FaCheckCircle className="w-7 h-7" />,
      title: "Garantía",
      description: "Compromiso de entrega en tiempo y forma",
      variant: "dark"
    }
  ];

  const waLink = getWhatsAppLink("Hola, deseo cotizar un despacho a provincias para productos Sueño Dorado.");

  return (
    <section className="py-24 bg-white dark:bg-gray-950 relative overflow-hidden transition-colors duration-700">
      {/* Decorative Logistics Background */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gold-500/[0.03] rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gold-500/[0.02] rounded-full blur-[120px] translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-6 lg:px-20 relative z-10">

        {/* Section Header - High Impact */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-gold-500 font-black text-[10px] uppercase tracking-[0.4em] mb-4 block">Logística Nacional</span>
            <h2 className="text-4xl md:text-7xl font-black text-gray-900 dark:text-white uppercase leading-[0.85] tracking-tighter">
              Despachamos a <br /> <span className="text-gold-500 italic font-light">todo el Perú</span>
            </h2>
          </div>
          <p className="text-gray-500 dark:text-gray-400 text-lg font-medium leading-relaxed max-w-sm md:text-right">
            Lima y provincias vía flota propia y agencias de transporte confiables. Llegamos donde estés.
          </p>
        </div>

        {/* Asymmetric Bento Grid for Logistics */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-24">

          {/* Main Coverage Card - High Impact */}
          <div className="md:col-span-12 lg:col-span-8 bg-gray-900 rounded-[3rem] p-10 flex flex-col justify-between relative overflow-hidden group border border-white/5 order-2 lg:order-1">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-gold-500 flex items-center justify-center text-black">
                  <FaRoute className="w-8 h-8" />
                </div>
                <div>
                  <div className="text-white font-black text-3xl tracking-tighter">Cobertura Total</div>
                  <div className="text-gold-500/60 text-[10px] uppercase tracking-widest font-bold">Sin Fronteras en el Territorio Nacional</div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
                {provinces.slice(0, 12).map((city, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-gray-400 group/city cursor-default">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold-500 group-hover/city:scale-150 transition-transform"></div>
                    <span className="text-[11px] font-bold uppercase tracking-wider group-hover/city:text-white transition-colors">{city}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10 mt-12 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
              <p className="text-gray-500 text-sm font-medium max-w-md">
                Entregamos colchones, tarimas, cunas y almohadas con plazos garantizados y seguro de transporte integral.
              </p>
              <div className="flex -space-x-3">
                <div className="w-12 h-12 rounded-full border-2 border-gray-900 bg-gray-800 flex items-center justify-center text-gold-500" title="Terrestre"><FaTruck /></div>
                <div className="w-12 h-12 rounded-full border-2 border-gray-900 bg-gray-800 flex items-center justify-center text-gold-500" title="Marítimo"><FaShip /></div>
                <div className="w-12 h-12 rounded-full border-2 border-gray-900 bg-gray-800 flex items-center justify-center text-gold-500" title="Aéreo"><FaPlane /></div>
              </div>
            </div>
          </div>

          {/* Delivery Time Card - Vertical High Impact */}
          <div className="md:col-span-12 lg:col-span-4 bg-gold-500 rounded-[3rem] p-10 flex flex-col items-center justify-center text-center relative overflow-hidden group shadow-2xl shadow-gold-500/10 order-1 lg:order-2">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 to-transparent"></div>
            <div className="relative z-10">
              <div className="text-[10px] font-black text-black/40 uppercase tracking-[0.4em] mb-6">Tiempo de Entrega</div>
              <div className="text-8xl md:text-7xl xl:text-8xl font-black text-black tracking-tighter mb-4 group-hover:scale-110 transition-transform duration-700">3-7 Días</div>
              <div className="h-[1px] w-20 bg-black/20 mx-auto mb-6"></div>
              <div className="space-y-2">
                <p className="text-black font-black text-sm uppercase tracking-widest">Lima: 24-48h</p>
                <p className="text-black/60 font-bold text-xs uppercase tracking-widest">Provincias: 3-7 días hábiles</p>
              </div>
            </div>
          </div>

          {/* Small Feature Cards */}
          <div className="md:col-span-6 lg:col-span-3 bg-gray-50 dark:bg-white/5 rounded-[2.5rem] p-8 border border-gray-100 dark:border-white/5 hover:border-gold-500/30 transition-all duration-500 group order-3">
            <FaTruck className="w-10 h-10 text-gold-500 mb-6 group-hover:scale-110 transition-transform" />
            <h5 className="text-lg font-black text-gray-900 dark:text-white uppercase mb-2">Flota Propia</h5>
            <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed font-medium">Controlamos el 100% de la manipulación para asegurar cero daños.</p>
          </div>

          <div className="md:col-span-6 lg:col-span-3 bg-gray-50 dark:bg-white/5 rounded-[2.5rem] p-8 border border-gray-100 dark:border-white/5 hover:border-gold-500/30 transition-all duration-500 group order-4">
            <FaBox className="w-10 h-10 text-gold-500 mb-6 group-hover:scale-110 transition-transform" />
            <h5 className="text-lg font-black text-gray-900 dark:text-white uppercase mb-2">Agencias Aliadas</h5>
            <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed font-medium">Red de socios estratégicos en cada departamento del país.</p>
          </div>

          <div className="md:col-span-6 lg:col-span-3 bg-gray-50 dark:bg-white/5 rounded-[2.5rem] p-8 border border-gray-100 dark:border-white/5 hover:border-gold-500/30 transition-all duration-500 group order-5">
            <FaRoute className="w-10 h-10 text-gold-500 mb-6 group-hover:scale-110 transition-transform" />
            <h5 className="text-lg font-black text-gray-900 dark:text-white uppercase mb-2">Seguimiento</h5>
            <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed font-medium">Información actualizada sobre el estado de tu despacho.</p>
          </div>

          <div className="md:col-span-6 lg:col-span-3 bg-gray-50 dark:bg-white/5 rounded-[2.5rem] p-8 border border-gray-100 dark:border-white/5 hover:border-gold-500/30 transition-all duration-500 group order-6">
            <FaCheckCircle className="w-10 h-10 text-gold-500 mb-6 group-hover:scale-110 transition-transform" />
            <h5 className="text-lg font-black text-gray-900 dark:text-white uppercase mb-2">Garantía Real</h5>
            <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed font-medium">Compromiso total de entrega en las condiciones pactadas.</p>
          </div>

        </div>

        {/* Final CTA - Professional Impact */}
        <div className="relative bg-gray-900 rounded-[4rem] p-10 lg:p-20 overflow-hidden group">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop')] opacity-10 grayscale group-hover:scale-110 transition-transform duration-[2s]"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent"></div>

          <div className="relative z-10 max-w-2xl">
            <h3 className="text-3xl lg:text-5xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-8">
              ¿No ves tu ciudad? <br />
              <span className="text-gold-500">¡Llegamos igual!</span>
            </h3>
            <p className="text-gray-400 text-lg font-medium mb-12 leading-relaxed">
              Si tu ubicación no está en la lista estándar, nuestro equipo de logística diseñará una ruta especial para que recibas tu Sueño Dorado.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold-500 hover:bg-gold-600 text-black px-10 py-5 rounded-full font-black text-sm uppercase tracking-widest transition-all hover:scale-105 shadow-2xl shadow-gold-500/20 flex items-center justify-center gap-3"
              >
                Cotizar Despacho <FaArrowRight />
              </a>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 text-white px-10 py-5 rounded-full font-black text-sm uppercase tracking-widest transition-all inline-flex items-center justify-center"
              >
                Ver Rutas Detalladas
              </a>
            </div>
          </div>

          {/* Aesthetic Background Detail */}
          <div className="absolute right-10 bottom-10 opacity-10 hidden lg:block">
            <FaShip className="text-white w-64 h-64 rotate-12" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProvincesSection;
