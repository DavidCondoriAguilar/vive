import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { getWhatsAppLink } from '@/utils/constants';
import MainLayout from '@/layouts/MainLayout';
import { FaHotel, FaStore, FaTruck, FaHandshake, FaCheckCircle, FaWhatsapp, FaTimes } from 'react-icons/fa';

const WholesaleView = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const b2bMessage = "Hola, soy [TIPO DE NEGOCIO] y estoy interesado en cotización por mayor de colchones para mi negocio.";

  const clients = [
    {
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800",
      title: "Hoteles",
      description: "Colchones certificados para uso hotelero con garantía extendida",
      badge: "Certificado"
    },
    {
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800", // Furniture store interior
      title: "Tiendas",
      description: "Revendedores autorizados con márgenes atractivos",
      badge: "Rentabilidad"
    },
    {
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
      title: "Distribuidores",
      description: "Red de distribución nacional con exclusividad territorial",
      badge: "Logística"
    }
  ];

  const advantages = [
    { title: "Precio por Volumen", desc: "Hasta -50% vs retail", icon: <FaHandshake className="w-6 h-6" /> },
    { title: "Flota Propia", desc: "Despacho nacional seguro", icon: <FaTruck className="w-6 h-6" /> },
    { title: "Calidad Hotelera", desc: "Estándares certificados", icon: <FaCheckCircle className="w-6 h-6" /> },
    { title: "Stock Garantizado", desc: "Producción a escala", icon: <FaStore className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Venta por Mayor - Colchones al por mayor | Sueño Dorado</title>
        <meta name="description" content="Venta directa de fábrica de colchones por mayor para hoteles, tiendas y distribuidores en Perú. Precios exclusivos B2B." />
        <link rel="canonical" href="https://suenodorado.pe/venta-por-mayor" />
      </Helmet>

      <MainLayout>
        {/* Hero Section */}
        <section className="relative bg-gray-900 text-white py-24 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")' }}></div>
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 to-gray-900/40 z-0"></div>

          <div className="container mx-auto px-6 lg:px-20 text-center relative z-10">
            <span className="text-gold-500 font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Soluciones Empresariales</span>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Venta por <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-yellow-200">Mayor</span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
              Precios exclusivos de fábrica para hoteles, tiendas y distribuidores.
              <br className="hidden md:block" />Calidad certificada, márgenes superiores y despacho a todo el Perú.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href={getWhatsAppLink(b2bMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-gold-500 hover:bg-gold-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-xl shadow-gold-500/20"
              >
                <FaWhatsapp className="w-6 h-6" />
                Cotizar Directo
              </a>
              <button
                onClick={() => document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-lg transition-all"
              >
                Ver Formulario
              </button>
            </div>
          </div>
        </section>

        {/* Target Clients - Modern Image Grid */}
        <section className="py-24 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-6 lg:px-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold font-display text-gray-900 dark:text-white mb-4">
                ¿A quién nos dirigimos?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Diseñamos soluciones a medida para maximizar la rentabilidad de tu negocio
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {clients.map((client, index) => (
                <div key={index} className="group relative h-[400px] rounded-3xl overflow-hidden shadow-2xl cursor-pointer">
                  {/* Background Image */}
                  <img
                    src={client.image}
                    alt={client.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>

                  {/* Content */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-gold-500/90 text-white text-xs font-bold uppercase tracking-wider rounded-full mb-3 backdrop-blur-sm">
                        {client.badge}
                      </span>
                      <h3 className="text-3xl font-bold text-white mb-2">{client.title}</h3>
                      <div className="h-1 w-12 bg-gold-500 rounded-full mb-4 transform origin-left group-hover:scale-x-150 transition-transform duration-300"></div>
                      <p className="text-gray-300 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                        {client.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section - Bento Grid */}
        <section className="py-24 bg-gray-50 dark:bg-gray-800/50">
          <div className="container mx-auto px-6 lg:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

              {/* Left: Main Value Prop */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                <h2 className="text-4xl font-bold font-display text-gray-900 dark:text-white mb-6">
                  Beneficios de comprar <span className="text-gold-500">directo de fábrica</span>
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                  Eliminamos los intermediarios para ofrecerte una ventaja competitiva real.
                  Accede a precios de producción y garantiza el mejor margen para tu negocio.
                </p>

                {/* Visual Stats Card */}
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-3xl text-white shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 opacity-10">
                    <FaHandshake className="w-32 h-32" />
                  </div>
                  <div className="relative z-10">
                    <div className="text-6xl font-bold text-gold-400 mb-2">-50%</div>
                    <div className="text-xl font-medium text-gray-200 mb-6">Ahorro máximo vs. retail</div>
                    <a
                      href={getWhatsAppLink(b2bMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6 py-3 rounded-lg font-bold transition-all w-full justify-center"
                    >
                      Iniciar Negociación
                      <FaWhatsapp className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Right: Grid of Features */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {advantages.map((adv, index) => (
                  <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100 dark:border-gray-800 group">
                    <div className="w-12 h-12 bg-gold-50 dark:bg-gold-500/10 rounded-xl flex items-center justify-center text-gold-500 mb-4 group-hover:scale-110 transition-transform">
                      {adv.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{adv.title}</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">{adv.desc}</p>
                  </div>
                ))}

                {/* Secondary Features List (Compact) */}
                <div className="col-span-1 sm:col-span-2 bg-gold-500/5 border border-gold-500/20 rounded-2xl p-6 flex flex-wrap gap-4 items-center">
                  <span className="text-gold-600 font-bold text-sm uppercase tracking-wide">Más beneficios:</span>
                  {["Soporte Permanente", "Materiales Premium", "Garantía B2B", "Producción Personalizada"].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <FaCheckCircle className="w-4 h-4 text-gold-500" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-6 lg:px-20">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 dark:text-white mb-4">
                Contacto <span className="text-gold-500">Directo</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                Completá el formulario y te contactaremos en menos de 24 horas
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setIsFormOpen(true)}
                  className="px-8 py-3 bg-black dark:bg-white text-white dark:text-black text-sm font-black uppercase tracking-widest rounded-none hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
                >
                  Ver Formulario
                </button>
                <a
                  href={getWhatsAppLink(b2bMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 bg-green-500 hover:bg-green-600 text-white text-sm font-black uppercase tracking-widest rounded-none transition-colors flex items-center justify-center gap-2"
                >
                  <FaWhatsapp className="w-4 h-4" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Form Drawer Panel */}
        {isFormOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300"
              onClick={() => setIsFormOpen(false)}
            />
            
            {/* Drawer Panel - Lateral Derecha */}
            <div className={`fixed right-0 top-0 bottom-0 z-50 bg-white dark:bg-gray-900 shadow-2xl transition-transform duration-500 ease-out w-full max-w-2xl overflow-hidden transform ${isFormOpen ? 'translate-x-0' : 'translate-x-full'}`}>
              
              {/* Header */}
              <div className="sticky top-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-6 py-5 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white uppercase tracking-wider">Cotización B2B</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Completa tus datos para contactarte</p>
                </div>
                <button
                  onClick={() => setIsFormOpen(false)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-none transition-colors text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                >
                  <FaTimes className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="overflow-y-auto h-[calc(100vh-140px)]">
                <div className="p-6">
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-2 uppercase tracking-wider">
                          Nombre Completo *
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                          placeholder="Tu nombre"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-2 uppercase tracking-wider">
                          Empresa *
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                          placeholder="Nombre de tu empresa"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-2 uppercase tracking-wider">
                          Email *
                        </label>
                        <input
                          type="email"
                          required
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                          placeholder="email@empresa.com"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-2 uppercase tracking-wider">
                          Teléfono *
                        </label>
                        <input
                          type="tel"
                          required
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                          placeholder="+51 999 888 777"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-2 uppercase tracking-wider">
                        Tipo de Negocio *
                      </label>
                      <select className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-none focus:ring-2 focus:ring-gold-500 focus:border-transparent">
                        <option value="">Seleccionar tipo</option>
                        <option value="hotel">Hotel</option>
                        <option value="tienda">Tienda</option>
                        <option value="distribuidor">Distribuidor</option>
                        <option value="otro">Otro</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-2 uppercase tracking-wider">
                        Mensaje
                      </label>
                      <textarea
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                        placeholder="Describe tus necesidades y volumen requerido..."
                      ></textarea>
                    </div>
                  </form>
                </div>
              </div>

              {/* Footer - Actions */}
              <div className="sticky bottom-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 p-6 space-y-3">
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-black dark:bg-white text-white dark:text-black text-sm font-black uppercase tracking-widest rounded-none hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
                >
                  Enviar Solicitud
                </button>
                <a
                  href={getWhatsAppLink(b2bMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-6 py-3 bg-green-500 hover:bg-green-600 text-white text-sm font-black uppercase tracking-widest rounded-none transition-colors flex items-center justify-center gap-2"
                >
                  <FaWhatsapp className="w-4 h-4" />
                  WhatsApp
                </a>
              </div>
            </div>
          </>
        )}
      </MainLayout>
    </>
  );
};

export default WholesaleView;
