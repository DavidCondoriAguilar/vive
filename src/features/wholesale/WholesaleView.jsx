import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { getWhatsAppLink } from '@/utils/constants';
import MainLayout from '@/layouts/MainLayout';
import WholesaleFormDrawer from '@/components/forms/WholesaleFormDrawer';
import {
  FaHotel,
  FaStore,
  FaTruck,
  FaHandshake,
  FaCheckCircle,
  FaWhatsapp,
  FaBuilding,
  FaChartLine,
  FaGlobeAmericas,
  FaArrowRight
} from 'react-icons/fa';

const WholesaleView = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const b2bMessage = "Hola, estoy interesado en información sobre la Venta por Mayor/B2B de Sueño Dorado.";

  const targetMarkets = [
    {
      image: "https://images.unsplash.com/photo-1541336032412-2048a678540d?q=80&w=1974&auto=format&fit=crop",
      icon: <FaHotel />,
      title: "Hotelería de Lujo",
      subtitle: "Certificación Internacional",
      description: "Equipamos hoteles de 4 y 5 estrellas con estándares de confort que garantizan el descanso de sus huéspedes y larga durabilidad.",
      tag: "Turismo"
    },
    {
      image: "https://images.unsplash.com/photo-1582582621959-48d246628f41?q=80&w=2070&auto=format&fit=crop",
      icon: <FaStore />,
      title: "Tiendas y Comercio",
      subtitle: "Márgenes Premium",
      description: "Asóciese con nosotros para ofrecer colchones de alta rotación con el mejor respaldo de marca y soporte publicitario.",
      tag: "Distribución"
    },
    {
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
      icon: <FaBuilding />,
      title: "B2B Corporativo",
      subtitle: "Soluciones a Medida",
      description: "Licitaciones, campamentos mineros, proyectos inmobiliarios y dotación de personal con precios directo de planta.",
      tag: "Proyectos"
    }
  ];

  const mainStats = [
    { value: "-50%", label: "Precio de Fábrica", desc: "Ahorro directo sin intermediarios" },
    { value: "24h", label: "Despacho Inmediato", desc: "Logística propia para Lima y Callao" },
    { value: "100%", label: "Garantía Real", desc: "Respaldo directo de nuestra planta" },
    { value: "+20", label: "Años de Éxito", desc: "Liderando la industria del descanso" }
  ];

  const benefits = [
    {
      title: "Producción por Volumen",
      desc: "Capacidad de escala para grandes pedidos con tiempos de entrega garantizados.",
      icon: <FaChartLine className="w-8 h-8 text-gold-500" />
    },
    {
      title: "Personalización B2B",
      desc: "Fabricamos según sus especificaciones de densidad, resortes y acabados.",
      icon: <FaHandshake className="w-8 h-8 text-gold-500" />
    },
    {
      title: "Logística Nacional",
      desc: "Llegamos a cualquier punto del Perú con embalaje de alta resistencia.",
      icon: <FaGlobeAmericas className="w-8 h-8 text-gold-500" />
    },
    {
      title: "Calidad Certificada",
      desc: "Nuestros procesos cumplen con normas internacionales de higiene y ergonomía.",
      icon: <FaCheckCircle className="w-8 h-8 text-gold-500" />
    }
  ];

  return (
    <MainLayout>
      <Helmet>
        <title>Venta por Mayor & B2B | Sueño Dorado - Fábrica de Colchones</title>
        <meta name="description" content="Soluciones mayoristas para hoteles, tiendas y corporaciones. Colchones directo de fábrica con precios B2B y logística nacional." />
      </Helmet>

      {/* Hero Section - Ultra Luxury */}
      <section className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden bg-black py-20">
        {/* Cinematic Background */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1505693357370-58c01c36b20e?q=80&w=2070&auto=format&fit=crop"
            alt="Factory Background"
            className="w-full h-full object-cover opacity-40 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-60"></div>
        </div>

        <div className={`container mx-auto px-6 relative z-10 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-5 py-2 rounded-full border border-gold-500/30 bg-gold-500/10 text-gold-400 text-xs font-bold tracking-[0.4em] uppercase mb-8">
              División Corporativa
            </span>
            <h1 className="text-4xl md:text-7xl font-black text-white mb-6 leading-tight uppercase tracking-tighter">
              El Aliado <span className="text-gold-500">Estratégico</span> <br /> de Tu Negocio
            </h1>
            <p className="text-lg md:text-2xl text-gray-300 font-light max-w-2xl mx-auto mb-12 leading-relaxed">
              Llevamos el descanso de clase mundial a hoteles, distribuidores y corporaciones directamente desde nuestra planta de producción.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button
                onClick={() => setIsFormOpen(true)}
                className="w-full sm:w-auto bg-gold-500 hover:bg-gold-600 text-black font-black px-12 py-5 rounded-full transition-all shadow-[0_15px_40px_rgba(234,179,8,0.4)] uppercase tracking-wider text-sm"
              >
                Solicitar Cotización B2B
              </button>
              <a
                href={getWhatsAppLink(b2bMessage)}
                target="_blank"
                className="w-full sm:w-auto px-12 py-5 bg-white/5 backdrop-blur-md hover:bg-white/10 text-white border border-white/20 rounded-full font-bold transition-all uppercase tracking-wider text-sm flex items-center justify-center gap-3"
              >
                <FaWhatsapp className="w-5 h-5 text-green-400" />
                Hablar con Asesor
              </a>
            </div>
          </div>
        </div>

        {/* Floating Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-50 dark:from-gray-900 to-transparent"></div>
      </section>

      {/* Trust Stats - Bento Minimalist */}
      <section className="bg-gray-50 dark:bg-gray-900 py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {mainStats.map((stat, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-800 p-8 rounded-[2rem] border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-xl transition-all duration-500 group">
                <div className="text-4xl md:text-5xl font-black text-gold-500 mb-2 tracking-tighter group-hover:scale-110 transition-transform">{stat.value}</div>
                <div className="text-gray-900 dark:text-white font-bold text-sm uppercase tracking-widest mb-2">{stat.label}</div>
                <div className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dynamic Target Grid - Premium Presentation */}
      <section className="py-24 bg-white dark:bg-gray-900 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6 text-center md:text-left">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-6xl font-black text-gray-900 dark:text-white mb-6 uppercase tracking-tighter">
                Soluciones <span className="text-gold-500 italic block md:inline font-light">Especializadas</span>
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-lg">Entendemos que cada industria tiene necesidades distintas de confort y durabilidad.</p>
            </div>
            <div className="hidden lg:block h-[1px] flex-1 bg-gray-200 dark:bg-gray-800 mx-12"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {targetMarkets.map((market, idx) => (
              <div key={idx} className="group relative h-[550px] rounded-[3rem] overflow-hidden shadow-2xl transition-all duration-700 hover:-translate-y-4">
                <img
                  src={market.image}
                  alt={market.title}
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>

                {/* Content Overlay */}
                <div className="absolute inset-0 p-10 flex flex-col justify-end">
                  <div className="mb-6 opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    <span className="px-4 py-1.5 rounded-full bg-gold-500/20 backdrop-blur-md border border-gold-500/30 text-gold-400 text-[10px] font-bold uppercase tracking-widest mb-4 inline-block">
                      {market.tag}
                    </span>
                  </div>
                  <div className="text-white text-4xl mb-6 transform -translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                    {market.icon}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black text-white mb-2 leading-none uppercase">{market.title}</h3>
                  <h4 className="text-gold-400 font-bold text-sm tracking-widest mb-6 uppercase italic">{market.subtitle}</h4>
                  <p className="text-gray-300 text-sm leading-relaxed max-w-xs opacity-0 h-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-500">
                    {market.description}
                  </p>

                  <div className="mt-8">
                    <a
                      href={getWhatsAppLink(`${b2bMessage} Específicamente sobre ${market.title}.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 text-white font-bold text-xs uppercase tracking-[0.2em] group/btn"
                    >
                      Saber más <FaArrowRight className="group-hover/btn:translate-x-2 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Advantages - Asymmetric Grid */}
      <section className="py-24 bg-gray-900 border-y border-gold-500/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-gold-500/10 rounded-full blur-3xl"></div>
              <h2 className="text-3xl md:text-6xl font-black text-white mb-8 leading-[1.1] uppercase tracking-tighter">
                Ventaja Directa <br /> de <span className="text-gold-500 italic font-light">Fábrica</span>
              </h2>
              <div className="space-y-10">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex gap-6 group">
                    <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-gold-500/10 group-hover:border-gold-500/30 transition-all">
                      {benefit.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2 uppercase tracking-wide">{benefit.title}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed max-w-sm">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-square rounded-[4rem] overflow-hidden shadow-2xl border-2 border-white/5">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
                  alt="Process"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gold-500/10 mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-10 -right-6 md:-right-10 bg-white p-8 rounded-[3rem] shadow-2xl max-w-xs animate-bounce-slow">
                <div className="text-6xl font-black text-black tracking-tighter mb-1">-50%</div>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest leading-tight">Vs Precios de Tienda o Mercados Convencionales</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Spotlight Section (Credibility) */}
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-gray-400 dark:text-gray-500 font-bold text-xs uppercase tracking-[0.4em] mb-12">Empresas que confían en nosotros</h3>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
            <div className="text-3xl font-black text-gray-900 dark:text-white uppercase tracking-tighter">Grand Hotel</div>
            <div className="text-3xl font-black text-gray-900 dark:text-white uppercase tracking-tighter">Boutique St.</div>
            <div className="text-3xl font-black text-gray-900 dark:text-white uppercase tracking-tighter">Resort Spa</div>
            <div className="text-3xl font-black text-gray-900 dark:text-white uppercase tracking-tighter">Luxury Inn</div>
          </div>
        </div>
      </section>

      {/* Contact Final CTA - Sophisticated */}
      <section className="py-32 bg-gold-500 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-7xl font-black text-black mb-10 leading-[0.9] uppercase tracking-tighter">
            ¿Listo para Transformar <br className="hidden md:block" /> Tu Descanso Corporativo?
          </h2>
          <p className="text-black/70 text-lg md:text-2xl font-medium max-w-2xl mx-auto mb-14 drop-shadow-sm">
            Hablemos hoy mismo sobre cómo podemos apoyar el crecimiento y la reputación de su negocio con productos líderes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button
              onClick={() => setIsFormOpen(true)}
              className="w-full sm:w-64 bg-black text-white font-black px-10 py-5 rounded-full transition-all hover:scale-105 active:scale-95 shadow-2xl uppercase tracking-widest text-sm"
            >
              Iniciar Contacto
            </button>
            <a
              href={getWhatsAppLink(b2bMessage)}
              target="_blank"
              className="w-full sm:w-64 bg-white/20 backdrop-blur-md text-black border border-black/10 font-black px-10 py-5 rounded-full transition-all hover:bg-white/30 uppercase tracking-widest text-sm"
            >
              WhatsApp Directo
            </a>
          </div>
        </div>
      </section>

      {/* Reuse the specialized form drawer */}
      <WholesaleFormDrawer
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
      />
    </MainLayout>
  );
};

export default WholesaleView;
