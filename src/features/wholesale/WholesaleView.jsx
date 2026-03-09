import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { getWhatsAppLink } from '@/utils/constants';
import MainLayout from '@/layouts/MainLayout';
import WholesaleFormDrawer from '@/components/forms/WholesaleFormDrawer';
import {
  FaStore,
  FaHandshake,
  FaCheckCircle,
  FaBuilding,
  FaChartLine,
  FaGlobeAmericas,
  FaHotel
} from 'react-icons/fa';

// Streamlined component imports (removed Stats, Bento, Anatomy)
import WholesaleHero from './components/WholesaleHero';
import WholesaleSolutions from './components/WholesaleSolutions';
import WholesaleBenefits from './components/WholesaleBenefits';
import WholesaleSocialProof from './components/WholesaleSocialProof';
import WholesaleFinalCTA from './components/WholesaleFinalCTA';

// Import generated premium assets
import factoryProductionImg from '@/assets/images/generated/wholesale_factory_production.webp';

const WholesaleView = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

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
      description: "Maximice la rentabilidad de su negocio con nuestra línea de alta rotación. Brindamos exclusividad de zona y soporte logístico prioritario.",
      tag: "Distribución",
      details: ["Margen de Utilidad +35%", "Material POP Exclusivo", "Publicidad en Redes", "Capacitación de Ventas"]
    },
    {
      id: 'corporativo',
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
      icon: <FaBuilding />,
      title: "B2B Corporativo",
      subtitle: "Proyectos y Soluciones a Medida",
      description: "Atendemos licitaciones estatales y proyectos inmobiliarios con productos diseñados para uso intensivo y durabilidad extrema.",
      tag: "Proyectos",
      details: ["Garantía de Fábrica", "Precios Directos", "Licitaciones / Factura", "Diseño Personalizado"]
    },
    {
      id: 'hoteleria',
      image: "https://images.unsplash.com/photo-1541336032412-2048a678540d?q=80&w=1200&auto=format&fit=crop",
      icon: <FaHotel />,
      title: "Hotelería de Lujo",
      subtitle: "Turismo y Confort Internacional",
      description: "Transforme la experiencia de sus huéspedes con nuestra gama hotelera de 4 y 5 estrellas. Fidelidad asegurada.",
      tag: "Turismo",
      details: ["Hipoalergénico Pro", "Estándar Internacional", "Soporte Post-Venta", "Logística de Reposición"]
    }
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
      specs: ["Cobertura: 24 regiones", "Empaque: Industrial"]
    },
    {
      title: "Garantía de Fábrica",
      desc: "Nuestros productos cuentan con el respaldo total de nuestra planta para asegurar su inversión.",
      icon: <FaCheckCircle className="w-8 h-8 text-vive-500" />,
      specs: ["Garantía 10 Años", "Soporte Técnico"]
    }
  ];

  return (
    <MainLayout>
      <Helmet>
        <title>Venta por Mayor & B2B | Vive - Fábrica de Colchones</title>
        <meta name="description" content="Soluciones mayoristas para hoteles, tiendas y corporaciones. Colchones directo de fabrica con precios B2B y logística nacional." />
      </Helmet>

      {/* 1. Hero (with integrated stats) */}
      <WholesaleHero
        isVisible={isVisible}
        onOpenForm={() => setIsFormOpen(true)}
      />

      {/* 2. Strategic Solutions — THE CORE */}
      <WholesaleSolutions
        markets={targetMarkets}
        onSelectMarket={() => { }}
      />

      {/* 3. Industrial Benefits */}
      <WholesaleBenefits
        benefits={benefits}
        factoryProductionImg={factoryProductionImg}
      />

      {/* 4. Social Proof — NEW (replaces Bento + Anatomy) */}
      <WholesaleSocialProof />

      {/* 5. Final CTA */}
      <section className="py-24 lg:py-40 bg-gray-50 dark:bg-[#050505] relative overflow-hidden transition-colors duration-500">
        <div className="container mx-auto px-6 lg:px-20 relative z-10">
          <WholesaleFinalCTA
            onOpenForm={() => setIsFormOpen(true)}
            whatsappLink={getWhatsAppLink(b2bMessage)}
          />
        </div>
      </section>

      {/* Form Drawer */}
      <WholesaleFormDrawer
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
      />
    </MainLayout>
  );
};

export default WholesaleView;
