import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import mattressWorkshopImg from '@/assets/images/backgrounds/mattress-workshop-peru.png';
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
  FaArrowRight,
  FaFileAlt,
  FaCertificate
} from 'react-icons/fa';
import { MdVerified, MdClose } from 'react-icons/md';
import { HiOutlineLightningBolt } from 'react-icons/hi';

// Import generated premium assets
import luxuryHeroImg from '@/assets/images/generated/luxury_hotel_mattress_hero.webp';
import premiumCutawayImg from '@/assets/images/generated/premium_mattress_cutaway_view_v2.webp';
import factoryProductionImg from '@/assets/images/generated/wholesale_factory_production.webp';
import modalBgImg from '@/assets/images/generated/wholesale_modal_bg.png';

const WholesaleView = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedMarket, setSelectedMarket] = useState(null);
  const [waData, setWaData] = useState({
    reasonSocial: '',
    name: '',
    address: '',
    city: '',
    dni: ''
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const b2bMessage = "Hola, estoy interesado en información sobre la Venta por Mayor/B2B de Sueño Dorado.";

  const targetMarkets = [
    {
      id: 'tiendas',
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2064&auto=format&fit=crop",
      icon: <FaStore />,
      title: "Tiendas y Comercio",
      subtitle: "Distribución y Márgenes Premium",
      description: "Maximice la rentabilidad de su negocio con nuestra línea de alta rotación. Brindamos exclusividad de zona, material publicitado de alto impacto y soporte logístico prioritario para que solo se preocupe por vender.",
      tag: "Distribución"
    },
    {
      id: 'corporativo',
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
      icon: <FaBuilding />,
      title: "B2B Corporativo",
      subtitle: "Proyectos y Soluciones a Medida",
      description: "Atendemos licitaciones estatales, proyectos inmobiliarios y equipamiento de campamentos mineros con colchones diseñados para uso intensivo. Precios directos de planta que garantizan el mejor retorno de inversión.",
      tag: "Proyectos"
    },
    {
      id: 'hoteleria',
      image: "https://images.unsplash.com/photo-1541336032412-2048a678540d?q=80&w=1974&auto=format&fit=crop",
      icon: <FaHotel />,
      title: "Hotelería de Lujo",
      subtitle: "Turismo y Confort Internacional",
      description: "Transforme la experiencia de sus huéspedes con nuestra gama hotelera de 4 y 5 estrellas. Colchones con certificación de durabilidad y tecnología de descanso que asegura reseñas positivas y la fidelidad de sus clientes.",
      tag: "Turismo"
    }
  ];

  const handleWaSubmit = (e) => {
    e.preventDefault();
    const message = `Hola Sueño Dorado, solicito cotización mayorista para *${selectedMarket.title}*.\n\n` +
      `🏢 *Datos de la Empresa:*\n` +
      `- Razón Social: ${waData.reasonSocial}\n` +
      `- RUC/DNI: ${waData.dni}\n\n` +
      `👤 *Contacto:*\n` +
      `- Nombre: ${waData.name}\n` +
      `- Dirección: ${waData.address}\n` +
      `- Ciudad/Provincia: ${waData.city}\n\n` +
      `Quedo a la espera de su asesoría experta para concretar mi pedido.`;

    window.open(getWhatsAppLink(message), '_blank');
    setSelectedMarket(null);
    setWaData({ reasonSocial: '', name: '', address: '', city: '', dni: '' });
  };

  const mainStats = [
    { value: "-50%", label: "Precio de Fábrica", desc: "Ahorro directo sin intermediarios" },
    { value: "ISO", label: "Norma", desc: "Certificación de calidad industrial" },
    { value: "24h", label: "Despacho", desc: "Logística propia para Lima" },
    { value: "+30", label: "Años", desc: "Experiencia industrial" }
  ];

  const benefits = [
    {
      title: "Producción por Volumen",
      desc: "Capacidad de escala para grandes pedidos con tiempos de entrega garantizados.",
      icon: <FaChartLine className="w-8 h-8 text-gold-500" />,
      specs: ["+500 unidades/mes", "Tiempo: 72h"]
    },
    {
      title: "Personalización B2B",
      desc: "Fabricamos según sus especificaciones de densidad, resortes y acabados.",
      icon: <FaHandshake className="w-8 h-8 text-gold-500" />,
      specs: ["Densidad: 25-70 kg/m³", "Resortes: Bonnell/Encapsulados"]
    },
    {
      title: "Logística Nacional",
      desc: "Llegamos a cualquier punto del Perú con embalaje de alta resistencia.",
      icon: <FaGlobeAmericas className="w-8 h-8 text-gold-500" />,
      specs: ["Coverage: 24 regiones", "Packaging: Industrial"]
    },
    {
      title: "Calidad Certificada",
      desc: "Nuestros procesos cumplen con normas internacionales de higiene y ergonomía.",
      icon: <FaCheckCircle className="w-8 h-8 text-gold-500" />,
      specs: ["ISO 9001", "Certificación INACAL"]
    }
  ];


  return (
    <MainLayout>
      <Helmet>
        <title>Venta por Mayor & B2B | Sueño Dorado - Fábrica de Colchones</title>
        <meta name="description" content="Soluciones mayoristas para hoteles, tiendas y corporaciones. Colchones directo de fábrica con precios B2B y logística nacional." />
      </Helmet>

      {/* Hero Section - Elite Editorial Layout */}
      <section className="relative w-full min-h-[90vh] flex items-center bg-[#fafafa] dark:bg-[#050505] overflow-hidden pt-20 pb-32 md:pb-40">
        {/* Abstract Background Layer */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-100 dark:bg-white/5 -skew-x-12 translate-x-32 z-0 hidden lg:block"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Column: Focused Content */}
            <div className={`lg:col-span-6 relative z-20 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
              <div className="space-y-8">
                <span className="inline-flex items-center gap-4 text-[10px] font-black tracking-[0.5em] uppercase text-gold-500">
                  <span className="w-12 h-[2px] bg-gold-500"></span>
                  Factory Direct
                </span>

                <h1 className="text-6xl md:text-7xl lg:text-8xl font-display font-black text-gray-900 dark:text-white leading-[0.85] tracking-tighter uppercase">
                  Ingeniería <br />
                  <span className="text-gold-500 italic font-light lowercase">del</span> <span className="text-gold-500">Confort</span>
                </h1>

                <p className="text-lg text-gray-500 dark:text-gray-400 font-text leading-relaxed max-w-md">
                  Impulsamos el éxito de tiendas y socios comerciales con piezas de alta rotación, escala industrial y soluciones para el sector hotelero.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 pt-4">
                  <button
                    onClick={() => setIsFormOpen(true)}
                    className="group relative px-10 py-6 bg-black dark:bg-white text-white dark:text-black font-black text-xs uppercase tracking-[0.2em] overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl"
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      Iniciar Cotización <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gold-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                  </button>

                  <a
                    href={getWhatsAppLink(b2bMessage)}
                    target="_blank"
                    className="flex items-center gap-4 px-10 py-6 border border-gray-200 dark:border-white/10 hover:border-gold-500 transition-colors text-xs font-black uppercase tracking-[0.2em] text-gray-900 dark:text-white"
                  >
                    Directo Planta
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Dynamic Image Composition with Museum Frame */}
            <div className={`lg:col-span-6 relative z-10 transition-all duration-1000 delay-300 transform ${isVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-20 scale-95'}`}>
              <div className="relative group">
                {/* Decorative Background Glow */}
                <div className="absolute -inset-4 bg-gold-500/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>

                {/* Main Hero Image Container */}
                <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.3)]">
                  <img
                    src={luxuryHeroImg}
                    alt="Luxury Hotel Atmosphere"
                    className="w-full h-[650px] object-cover object-top hover:scale-110 transition-transform duration-[15s] ease-out origin-top"
                  />
                  {/* Refined Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none"></div>
                </div>

                {/* Floating Meta Card - Refined UX */}
                <div className="absolute -bottom-10 -left-10 z-20 bg-white dark:bg-[#0A0A0A] p-8 md:p-10 shadow-[0_30px_60px_rgba(0,0,0,0.2)] border-l-4 border-gold-500 hidden md:block group-hover:-translate-y-3 transition-transform duration-500">
                  <div className="flex flex-col gap-1">
                    <span className="block text-[10px] font-black uppercase tracking-[0.4em] text-gold-500 mb-1">Elite Quality</span>
                    <span className="text-4xl font-display font-black text-gray-900 dark:text-white tracking-tighter">30+ Años</span>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="w-8 h-[1px] bg-gray-300 dark:bg-white/20"></span>
                      <p className="text-[9px] text-gray-400 font-text uppercase tracking-[0.2em]">Trayectoria Industrial</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Trust Bar Float */}
      <div className="relative z-20 -mt-12 md:-mt-20 container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 bg-white dark:bg-[#0A0A0A] border border-gray-100 dark:border-white/5 shadow-[0_30px_60px_rgba(0,0,0,0.1)] transition-all">
          {mainStats.map((stat, idx) => (
            <div key={idx} className="p-8 md:p-12 border-r border-gray-50 dark:border-white/5 last:border-0 flex flex-col items-center group overflow-hidden relative">
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gold-500 transform translate-y-full group-hover:translate-y-0 transition-transform"></div>
              <span className="text-4xl md:text-5xl font-display font-black text-gold-500 mb-2">{stat.value}</span>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>


      {/* Dynamic Target Grid - Premium Presentation */}
      <section className="py-24 bg-white dark:bg-gray-900 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6 text-center md:text-left">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-6xl font-display font-black text-gray-900 dark:text-white mb-6 uppercase tracking-tighter">
                Soluciones <span className="text-gold-500 italic block md:inline font-light">Especializadas</span>
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-lg font-text">Entendemos que cada industria tiene necesidades distintas de confort y durabilidad.</p>
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
                  <h3 className="text-3xl md:text-4xl font-display font-black text-white mb-2 leading-none uppercase">{market.title}</h3>
                  <h4 className="text-gold-400 font-bold text-xs tracking-widest mb-6 uppercase italic font-display">{market.subtitle}</h4>
                  <p className="text-gray-300 text-sm leading-relaxed max-w-xs opacity-0 h-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-500 font-text">
                    {market.description}
                  </p>

                  <div className="mt-8">
                    <button
                      onClick={() => setSelectedMarket(market)}
                      className="inline-flex items-center gap-3 text-white font-bold text-xs uppercase tracking-[0.2em] group/btn"
                    >
                      Saber más <FaArrowRight className="group-hover/btn:translate-x-2 transition-transform" />
                    </button>
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
              <h2 className="text-3xl md:text-6xl font-display font-black text-white mb-8 leading-[1.1] uppercase tracking-tighter">
                Ventaja Directa <br /> de <span className="text-gold-500 italic font-light">Fábrica</span>
              </h2>
              <div className="space-y-10">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex gap-6 group">
                    <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-gold-500/10 group-hover:border-gold-500/30 transition-all">
                      {benefit.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-display font-bold text-white mb-2 uppercase tracking-wide">{benefit.title}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed mb-3 font-text">{benefit.desc}</p>
                      {benefit.specs && (
                        <div className="flex flex-wrap gap-2">
                          {benefit.specs.map((spec, i) => (
                            <span key={i} className="px-3 py-1 bg-gold-500/20 border border-gold-500/30 rounded-full text-gold-400 text-[10px] font-bold uppercase tracking-widest">
                              {spec}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-square rounded-[4rem] overflow-hidden shadow-2xl border-2 border-white/5">
                <img
                  src={factoryProductionImg}
                  alt="Procesos Industriales de Sueño Dorado"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-[10s]"
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

      {/* Layered Product Detail - Editorial Z-Axis Depth */}
      <section className="py-32 bg-[#fafafa] dark:bg-[#050505] overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Layered Image Composition */}
            <div className="relative order-2 lg:order-1">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-8 border-white dark:border-[#0A0A0A]">
                <img
                  src={premiumCutawayImg}
                  alt="Internal Engineering"
                  className="w-full aspect-[4/5] object-cover"
                />
              </div>
              {/* Overlapping Floating Labels */}
              <div className="absolute top-1/4 -right-12 z-20 bg-white dark:bg-[#0A0A0A] p-6 shadow-2xl border-l-4 border-gold-500 animate-bounce-slow">
                <span className="block text-[8px] font-black uppercase tracking-[0.3em] text-gray-400 mb-2">Capa Superior</span>
                <span className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-tight">Cotton-Sensation™ 3D</span>
              </div>
              <div className="absolute bottom-1/4 -left-12 z-20 bg-black text-white p-6 shadow-2xl border-r-4 border-gold-500 hidden md:block">
                <span className="block text-[8px] font-black uppercase tracking-[0.3em] text-gold-500/50 mb-2">Núcleo</span>
                <span className="text-sm font-bold uppercase tracking-tight">Pocket-Spring Elite</span>
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl -z-10"></div>
            </div>

            {/* Editorial Text Content */}
            <div className="order-1 lg:order-2 space-y-12">
              <div>
                <span className="text-gold-500 text-[10px] font-black uppercase tracking-[0.5em] mb-4 block">Craftsmanship & Science</span>
                <h2 className="text-5xl md:text-7xl font-display font-black text-gray-900 dark:text-white leading-[0.9] tracking-tighter uppercase">
                  Más allá de <br /> <span className="italic font-light">la Superficie</span>
                </h2>
              </div>

              <div className="space-y-8">
                {[
                  { title: "Núcleos Independientes", desc: "Sistema de resortes pocket encapsulados individualmente para cero transferencia de movimiento." },
                  { title: "High Resilience", desc: "Capas de espuma de alta resiliencia que mantienen la ergonomía año tras año." },
                  { title: "Soporte Ergonómico", desc: "Cada diseño es validado por especialistas para asegurar la alienación de la columna." }
                ].map((item, i) => (
                  <div key={i} className="group flex gap-8 pb-8 border-b border-gray-100 dark:border-white/5 last:border-0 transition-all">
                    <span className="text-2xl font-display font-black text-gold-500/30 group-hover:text-gold-500 transition-colors">0{i + 1}</span>
                    <div>
                      <h4 className="text-lg font-display font-black text-gray-900 dark:text-white uppercase mb-2 group-hover:tracking-widest transition-all">{item.title}</h4>
                      <p className="text-gray-500 dark:text-gray-400 font-text leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-8">
                <button
                  onClick={() => setIsFormOpen(true)}
                  className="bg-gold-500 text-black px-12 py-5 font-black text-xs uppercase tracking-widest hover:bg-black hover:text-white transition-all shadow-xl"
                >
                  Descargar Catálogo Técnico
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bento - Refined Hierarchy */}
      <section className="py-32 bg-white dark:bg-[#0A0A0A]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">
            <div className="md:col-span-2 row-span-1 bg-gray-50 dark:bg-white/5 p-12 flex flex-col justify-center border border-gray-100 dark:border-white/10 group">
              <h3 className="text-3xl font-display font-black text-gray-900 dark:text-white uppercase tracking-tighter mb-4">Calidad Certificada</h3>
              <p className="text-gray-500 dark:text-gray-400 font-text max-w-md">Respaldo total en la estructura y materiales. Un compromiso de fábrica directo con su inversión.</p>
              <div className="mt-8 flex items-center gap-4 group-hover:translate-x-4 transition-transform text-gold-500 font-black text-xs uppercase tracking-widest">
                Protocolo de Calidad <FaArrowRight />
              </div>
            </div>

            <div className="bg-gold-500 p-12 flex flex-col justify-between">
              <MdVerified className="text-black text-5xl" />
              <div className="text-black">
                <span className="text-5xl font-display font-black block tracking-tighter">100%</span>
                <span className="text-xs font-black uppercase tracking-widest">Malla Peruana Certificada</span>
              </div>
            </div>

            <div className="bg-black text-white p-12 border border-white/10 flex flex-col justify-between">
              <FaCertificate className="text-gold-500 text-4xl" />
              <div>
                <h4 className="font-display font-black text-sm uppercase tracking-widest mb-2">INACAL Standard</h4>
                <p className="text-[10px] opacity-50 font-text uppercase tracking-widest">Normativa Técnica Peruana vigente para hostelería de alto tránsito.</p>
              </div>
            </div>

            <div className="md:col-span-2 bg-white dark:bg-black p-12 border border-gray-100 dark:border-white/10 flex items-center justify-between group overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-4xl font-display font-black text-gray-900 dark:text-white uppercase mb-2">Logística Pro</h3>
                <p className="text-gray-400 font-text uppercase text-xs tracking-widest">Despacho en flota propia especializada para evitar micro-daños estructurales.</p>
              </div>
              <FaTruck className="text-gray-100 dark:text-white/5 text-[15rem] absolute right-4 transition-transform group-hover:scale-110" />
            </div>
          </div>
        </div>
      </section>




      {/* Contact Final CTA - Redesigned & Differentiated */}
      <section className="py-32 relative overflow-hidden bg-[#0A0A0A]">
        {/* Subtle texture background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-3 px-6 py-2 bg-white/5 border border-white/10 rounded-full mb-10">
            <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse"></span>
            <span className="text-[10px] font-black text-white/50 uppercase tracking-[0.3em]">Cierre de Negocios Abierto</span>
          </div>

          <h2 className="text-4xl md:text-8xl font-display font-black text-white mb-10 leading-none uppercase tracking-tighter">
            Lleve su Empresa al <br /> <span className="text-gold-500 line-through decoration-white/20">Siguiente</span> Nivel
          </h2>
          <p className="text-gray-400 text-lg md:text-2xl font-text font-light max-w-3xl mx-auto mb-16 leading-relaxed">
            No somos solo proveedores, somos <span className="text-white font-bold">fabricantes directos</span> comprometidos con el éxito de su proyecto y el descanso de sus clientes.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button
              onClick={() => setIsFormOpen(true)}
              className="w-full sm:w-72 bg-gold-500 hover:bg-gold-600 text-black font-black px-12 py-5 rounded-full transition-all hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(212,175,55,0.3)] uppercase tracking-widest text-sm"
            >
              Iniciar Propuesta
            </button>
            <a
              href={getWhatsAppLink(b2bMessage)}
              target="_blank"
              className="w-full sm:w-72 bg-transparent hover:bg-white text-white hover:text-black border-2 border-white/20 hover:border-white font-black px-12 py-5 rounded-full transition-all uppercase tracking-widest text-sm flex items-center justify-center gap-3"
            >
              <FaWhatsapp className="w-5 h-5" />
              WhatsApp VIP
            </a>
          </div>
        </div>
      </section>

      {/* WhatsApp Quote Modal - Premium Pro Redesign */}
      {selectedMarket && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8">
          {/* Backdrop with sophisticated blur */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-xl animate-fade-in"
            onClick={() => setSelectedMarket(null)}
          ></div>

          <div className="relative bg-white dark:bg-[#0F0F0F] w-full max-w-4xl rounded-[2.5rem] overflow-hidden border border-white/20 dark:border-white/5 shadow-[0_50px_100px_rgba(0,0,0,0.5)] animate-slide-up flex flex-col md:flex-row max-h-[90vh]">

            {/* Left Column: Dynamic Visual Context */}
            <div className="hidden md:flex w-[35%] relative flex-col justify-between p-10 overflow-hidden border-r border-gray-100 dark:border-white/5">
              <div className="absolute inset-0 z-0">
                <img
                  src={selectedMarket.image || modalBgImg}
                  alt={selectedMarket.title}
                  className="w-full h-full object-cover opacity-40 grayscale group-hover:scale-110 transition-transform duration-[10s]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/20 to-transparent"></div>
              </div>

              <div className="relative z-10">
                <div className="w-12 h-1 bg-gold-500 mb-6"></div>
                <span className="text-gold-500 text-[10px] font-black uppercase tracking-[0.5em] block mb-2">{selectedMarket.tag}</span>
                <span className="text-white text-[10px] font-bold uppercase tracking-widest opacity-40 italic">Sueño Dorado Exclusive</span>
              </div>

              <div className="relative z-10">
                <h4 className="text-2xl font-display font-black text-white uppercase leading-none tracking-tighter mb-4">
                  {selectedMarket.title.split(' ').map((word, i) => (
                    <span key={i} className="block">{word}</span>
                  ))}
                </h4>
                <p className="text-gold-500/80 text-[10px] uppercase tracking-[0.2em] font-black leading-tight border-l border-gold-500/30 pl-4 py-1">
                  {selectedMarket.subtitle}
                </p>
              </div>
            </div>

            {/* Right Column: Form Content */}
            <div className="flex-1 p-8 md:p-14 relative flex flex-col bg-gray-50/50 dark:bg-transparent overflow-y-auto custom-scrollbar">

              <button
                onClick={() => setSelectedMarket(null)}
                className="absolute top-8 right-8 p-3 rounded-full hover:bg-gray-100 dark:hover:bg-white/5 transition-all text-gray-400 hover:text-gold-500 z-50 group"
              >
                <MdClose className="w-6 h-6 transition-transform group-hover:rotate-90" />
              </button>

              <div className="relative z-10 mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-[1px] w-8 bg-gold-500/30"></div>
                  <span className="text-gold-500 text-[11px] font-black uppercase tracking-[0.4em]">Solicitud Mayorista</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-display font-black text-gray-900 dark:text-white uppercase mb-4 leading-tight tracking-tighter">
                  {selectedMarket.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-relaxed max-w-md mb-8">
                  Ingrese la información de su representada para agendar una visita comercial o cotización por volumen.
                </p>

                {/* National Coverage Section - Specific for Wholesale Distribution */}
                {selectedMarket.id === 'tiendas' && (
                  <div className="mb-10 bg-gray-100 dark:bg-white/5 rounded-3xl p-8 border border-gold-500/10 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/5 blur-3xl rounded-full"></div>
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-6">
                        <FaGlobeAmericas className="text-gold-500 text-xl" />
                        <div>
                          <h4 className="text-lg font-black text-gray-900 dark:text-white uppercase tracking-tight">Cobertura Total</h4>
                          <p className="text-[10px] text-gold-500 font-black uppercase tracking-widest opacity-70">Sin Fronteras en el Territorio Nacional</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-2 mb-6">
                        {[
                          'Amazonas', 'Áncash', 'Apurímac', 'Arequipa', 'Ayacucho', 'Cajamarca',
                          'Callao', 'Cusco', 'Huancavelica', 'Huánuco', 'Ica', 'Junín',
                          'La Libertad', 'Lambayeque', 'Lima', 'Loreto', 'Madre de Dios', 'Moquegua',
                          'Pasco', 'Piura', 'Puno', 'San Martín', 'Tacna', 'Tumbes', 'Ucayali'
                        ].map((dept) => (
                          <div key={dept} className="flex items-center gap-2 group/item">
                            <div className="w-1 h-1 rounded-full bg-gold-500 group-hover/item:scale-150 transition-transform"></div>
                            <span className="text-[11px] font-bold text-gray-600 dark:text-gray-400 group-hover/item:text-gold-500 transition-colors uppercase tracking-tighter">{dept}</span>
                          </div>
                        ))}
                      </div>

                      <div className="p-4 bg-white/50 dark:bg-black/40 rounded-xl border border-gold-500/5">
                        <p className="text-[11px] font-medium text-gray-500 dark:text-gray-400 leading-relaxed italic">
                          "Entregamos colchones, tarimas, cunas y almohadas con plazos garantizados y seguro de transporte integral en cada uno de los 24 departamentos."
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <form onSubmit={handleWaSubmit} className="space-y-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em] ml-1">Razón Social</label>
                    <input
                      type="text"
                      required
                      placeholder="Nombre de la empresa"
                      value={waData.reasonSocial}
                      onChange={(e) => setWaData({ ...waData, reasonSocial: e.target.value })}
                      className="w-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-4 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 transition-all font-bold placeholder:text-gray-300 dark:placeholder:text-gray-600 text-[15px]"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em] ml-1">RUC / DNI</label>
                    <input
                      type="text"
                      required
                      placeholder="Identificación fiscal"
                      value={waData.dni}
                      onChange={(e) => setWaData({ ...waData, dni: e.target.value })}
                      className="w-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-4 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 transition-all font-bold placeholder:text-gray-300 dark:placeholder:text-gray-600 text-[15px]"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em] ml-1">Representante de Ventas / Contacto</label>
                  <input
                    type="text"
                    required
                    placeholder="Nombre y Apellidos"
                    value={waData.name}
                    onChange={(e) => setWaData({ ...waData, name: e.target.value })}
                    className="w-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-4 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 transition-all font-bold placeholder:text-gray-300 dark:placeholder:text-gray-600 text-[15px]"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em] ml-1">Sede / Dirección</label>
                    <input
                      type="text"
                      required
                      placeholder="Dirección física"
                      value={waData.address}
                      onChange={(e) => setWaData({ ...waData, address: e.target.value })}
                      className="w-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-4 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 transition-all font-bold placeholder:text-gray-300 dark:placeholder:text-gray-600 text-[15px]"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em] ml-1">Ciudad</label>
                    <input
                      type="text"
                      required
                      placeholder="Ciudad / Distrito"
                      value={waData.city}
                      onChange={(e) => setWaData({ ...waData, city: e.target.value })}
                      className="w-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-4 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 transition-all font-bold placeholder:text-gray-300 dark:placeholder:text-gray-600 text-[15px]"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#25D366] hover:bg-[#20ba61] text-white font-black py-6 rounded-2xl shadow-xl shadow-green-500/20 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-4 uppercase tracking-[0.3em] text-xs mt-6"
                >
                  <FaWhatsapp className="w-5 h-5" />
                  AGENDAR CONSULTA CORPORATIVA
                </button>

                <p className="text-center text-[9px] text-gray-400 dark:text-gray-500 uppercase tracking-widest font-bold">
                  Respuesta inmediata de nuestro equipo comercial Pro.
                </p>
              </form>
            </div>
          </div>
        </div>
      )}

      <WholesaleFormDrawer
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
      />
    </MainLayout>
  );
};

export default WholesaleView;
