import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { getWhatsAppLink } from '@/utils/constants';
import MainLayout from '@/layouts/MainLayout';
import WholesaleFormDrawer from '@/components/forms/WholesaleFormDrawer';
import {
  FaHotel,
  FaStore,
  FaHandshake,
  FaCheckCircle,
  FaBuilding,
  FaChartLine,
  FaGlobeAmericas
} from 'react-icons/fa';

// Import local components
import WholesaleHero from './components/WholesaleHero';
import WholesaleStats from './components/WholesaleStats';
import WholesaleSolutions from './components/WholesaleSolutions';
import WholesaleBenefits from './components/WholesaleBenefits';
import WholesaleAnatomy from './components/WholesaleAnatomy';
import WholesaleBento from './components/WholesaleBento';
import WholesaleFinalCTA from './components/WholesaleFinalCTA';
import WholesaleQuoteModal from './components/WholesaleQuoteModal';

// Import generated premium assets
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
    window.scrollTo(0, 0);
    setIsVisible(true);
  }, []);

  const b2bMessage = "Hola, estoy interesado en información sobre la Venta por Mayor/B2B de Vive.";

  const targetMarkets = [
    {
      id: 'tiendas',
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200&auto=format&fit=crop",
      icon: <FaStore />,
      title: "Tiendas y Comercio",
      subtitle: "Distribución y Márgenes Premium",
      description: "Maximice la rentabilidad de su negocio con nuestra línea de alta rotación. Brindamos exclusividad de zona, material publicitado de alto impacto y soporte logístico prioritario para que solo se preocupe por vender.",
      tag: "Distribución"
    },
    {
      id: 'corporativo',
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
      icon: <FaBuilding />,
      title: "B2B Corporativo",
      subtitle: "Proyectos y Soluciones a Medida",
      description: "Atendemos licitaciones estatales, proyectos inmobiliarios y equipamiento de campamentos mineros con colchones diseñados para uso intensivo. Precios directos de planta que garantizan el mejor retorno de inversión.",
      tag: "Proyectos"
    },
    {
      id: 'hoteleria',
      image: "https://images.unsplash.com/photo-1541336032412-2048a678540d?q=80&w=1200&auto=format&fit=crop",
      icon: <FaHotel />,
      title: "Hotelería de Lujo",
      subtitle: "Turismo y Confort Internacional",
      description: "Transforme la experiencia de sus huéspedes con nuestra gama hotelera de 4 y 5 estrellas. Colchones con certificación de durabilidad y tecnología de descanso que asegura reseñas positivas y la fidelidad de sus clientes.",
      tag: "Turismo"
    }
  ];

  const handleWaSubmit = (e) => {
    e.preventDefault();
    const message = `Hola Vive, solicito cotización mayorista para *${selectedMarket.title}*.\n\n` +
      `🏢 *Datos de la Empresa:*\n` +
      `- Razón Social: ${waData.reasonSocial}\n` +
      `- RUC/DNI: ${waData.dni}\n\n` +
      `👤 *Contacto:*\n` +
      `- Nombre: ${waData.name}\n` +
      `- Dirección: ${waData.address}\n` +
      `- Ciudad/Provincia: ${waData.city}\n\n` +
      `Quedo a la espera de su asesoría experta para concretar mi pedido.`;

    window.open(getWhatsAppLink(message), '_blank', 'noopener,noreferrer');
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
      icon: <FaChartLine className="w-8 h-8 text-vive-500" />,
      specs: ["+500 unidades/mes", "Tiempo: 72h"]
    },
    {
      title: "Personalización B2B",
      desc: "Fabricamos según sus especificaciones de densidad, resortes y acabados.",
      icon: <FaHandshake className="w-8 h-8 text-vive-500" />,
      specs: ["Densidad: 25-70 kg/m³", "Resortes: Bonnell/Encapsulados"]
    },
    {
      title: "Logística Nacional",
      desc: "Llegamos a cualquier punto del Perú con embalaje de alta resistencia.",
      icon: <FaGlobeAmericas className="w-8 h-8 text-vive-500" />,
      specs: ["Coverage: 24 regiones", "Packaging: Industrial"]
    },
    {
      title: "Calidad Certificada",
      desc: "Nuestros procesos cumplen con normas internacionales de higiene y ergonomía.",
      icon: <FaCheckCircle className="w-8 h-8 text-vive-500" />,
      specs: ["ISO 9001", "Certificación INACAL"]
    }
  ];

  return (
    <MainLayout>
      <Helmet>
        <title>Venta por Mayor & B2B | Vive - Fábrica de Colchones</title>
        <meta name="description" content="Soluciones mayoristas para hoteles, tiendas y corporaciones. Colchones directo de fabrica con precios B2B y logística nacional." />
      </Helmet>

      {/* Hero Section */}
      <WholesaleHero
        isVisible={isVisible}
        onOpenForm={() => setIsFormOpen(true)}
      />

      {/* Authority Counter Bar */}
      <WholesaleStats stats={mainStats} />

      {/* Section 1: Strategic Solutions */}
      <WholesaleSolutions
        markets={targetMarkets}
        onSelectMarket={(market) => setSelectedMarket(market)}
      />

      {/* Section 2: Industrial Superiority */}
      <WholesaleBenefits
        benefits={benefits}
        factoryProductionImg={factoryProductionImg}
      />

      {/* Section 3: Technical Anatomy */}
      <WholesaleAnatomy
        premiumCutawayImg={premiumCutawayImg}
        onOpenForm={() => setIsFormOpen(true)}
      />

      {/* Section 4: Authority Bento & Closing CTA */}
      <section className="py-40 bg-gray-50 dark:bg-[#050505] relative overflow-hidden transition-colors duration-500">
        <div className="container mx-auto px-6 lg:px-20 relative z-10">
          <WholesaleBento />
          <WholesaleFinalCTA
            onOpenForm={() => setIsFormOpen(true)}
            whatsappLink={getWhatsAppLink(b2bMessage)}
          />
        </div>
      </section>

      {/* Forms & Modals */}
      <WholesaleQuoteModal
        selectedMarket={selectedMarket}
        waData={waData}
        setWaData={setWaData}
        onClose={() => setSelectedMarket(null)}
        onSubmit={handleWaSubmit}
        modalBgImg={modalBgImg}
      />

      <WholesaleFormDrawer
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
      />
    </MainLayout>
  );
};

export default WholesaleView;
