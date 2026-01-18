import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { getWhatsAppLink } from '@/utils/constants';
import MainLayout from '@/layouts/MainLayout';
import { FaHotel, FaStore, FaTruck, FaHandshake, FaCheckCircle, FaWhatsapp } from 'react-icons/fa';

const WholesaleView = () => {
  const b2bMessage = "Hola, soy [TIPO DE NEGOCIO] y estoy interesado en cotización por mayor de colchones para mi negocio.";
  
  const benefits = [
    {
      icon: <FaHotel className="w-8 h-8" />,
      title: "Hoteles",
      description: "Colchones certificados para uso hotelero con garantía extendida"
    },
    {
      icon: <FaStore className="w-8 h-8" />,
      title: "Tiendas",
      description: "Revendedores autorizados con márgenes atractivos"
    },
    {
      icon: <FaTruck className="w-8 h-8" />,
      title: "Distribuidores",
      description: "Red de distribución nacional con exclusividad territorial"
    }
  ];

  const advantages = [
    "Precio por volumen hasta -50% vs. retail",
    "Despacho a todo el Perú vía flota propia",
    "Producción a escala con plazos garantizados",
    "Calidad hotelera certificada",
    "Soporte técnico permanente",
    "Materiales prima de primera calidad",
    "Garantía extendida especial B2B",
    "Capacidad de producción personalizada"
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
        <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
          <div className="container mx-auto px-6 lg:px-20 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6">
              Venta por <span className="text-gold-400">Mayor</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Precios exclusivos de fábrica para hoteles, tiendas y distribuidores. 
              Calidad certificada y despacho a todo el Perú.
            </p>
            <a
              href={getWhatsAppLink(b2bMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gold-500 hover:bg-gold-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105 shadow-xl"
            >
              <FaWhatsapp className="w-6 h-6" />
              Solicitar Cotización Directa
            </a>
          </div>
        </section>

        {/* Target Clients */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 lg:px-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-4">
                ¿A quién nos dirigimos?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Soluciones integrales para diferentes tipos de negocios
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center group">
                  <div className="text-gold-500 mb-4 group-hover:scale-110 transition-transform inline-block">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 lg:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-6">
                  Beneficios de comprar <span className="text-gold-500">directo de fábrica</span>
                </h2>
                
                <div className="space-y-4">
                  {advantages.map((advantage, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <FaCheckCircle className="w-5 h-5 text-gold-500 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{advantage}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
                <div className="text-center">
                  <div className="text-5xl font-bold text-gold-400 mb-4">-50%</div>
                  <div className="text-xl text-gray-300 mb-6">Ahorro máximo vs. retail</div>
                  <div className="text-sm text-gray-400 mb-8">
                    Eliminamos intermediarios para ofrecerte el mejor precio sin sacrificar calidad
                  </div>
                  
                  <a
                    href={getWhatsAppLink(b2bMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white px-6 py-3 rounded-lg font-bold transition-all w-full justify-center"
                  >
                    <FaHandshake className="w-5 h-5" />
                    Iniciar Negociación
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 lg:px-20">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-4">
                  Contacto <span className="text-gold-500">Directo</span>
                </h2>
                <p className="text-xl text-gray-600">
                  Completá el formulario y te contactaremos en menos de 24 horas
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nombre Completo *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                        placeholder="Tu nombre"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Empresa *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                        placeholder="Nombre de tu empresa"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                        placeholder="email@empresa.com"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Teléfono *
                      </label>
                      <input
                        type="tel"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                        placeholder="+51 999 888 777"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tipo de Negocio *
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent">
                      <option value="">Seleccionar tipo</option>
                      <option value="hotel">Hotel</option>
                      <option value="tienda">Tienda</option>
                      <option value="distribuidor">Distribuidor</option>
                      <option value="constructora">Constructora</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mensaje
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                      placeholder="Describe tus necesidades y volumen requerido..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gold-500 hover:bg-gold-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105"
                  >
                    Enviar Solicitud
                  </button>
                </form>

                <div className="mt-8 text-center">
                  <p className="text-gray-600 mb-4">¿O prefieres contactarnos directamente?</p>
                  <a
                    href={getWhatsAppLink(b2bMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium"
                  >
                    <FaWhatsapp className="w-5 h-5" />
                    Escribir por WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </MainLayout>
    </>
  );
};

export default WholesaleView;
