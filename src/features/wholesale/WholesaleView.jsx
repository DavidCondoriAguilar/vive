import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { getWhatsAppLink } from '@core/utils/constants';
import { useScrollReveal } from '@shared/hooks/useScrollReveal';
import MainLayout from '@/layouts/MainLayout';
import RevealSection from '@shared/components/ui/RevealSection';
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
import Hero from './components/Hero';
import Solutions from './components/Solutions';
import Benefits from './components/Benefits';
import SocialProof from './components/SocialProof';
import FinalCTA from './components/FinalCTA';

// Import generated premium assets
import factoryProductionImg from '@/assets/images/generated/wholesale_factory_production.webp';

const WholesaleView = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useScrollReveal();

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
      title: "Producción Industrial",
      desc: "Escalabilidad garantizada para grandes pedidos con tiempos de entrega récord.",
      icon: <FaChartLine className="w-8 h-8 text-vive-500" />,
      specs: ["+500 unidades/mes", "Entrega: 72h"]
    },
    {
      title: "Personalización Total",
      desc: "Fabricación a medida: densidades, estructuras y acabados según requerimiento.",
      icon: <FaHandshake className="w-8 h-8 text-vive-500" />,
      specs: ["Densidad: 25-70 kg/m³", "Estructura: Bonnell/Pocket"]
    },
    {
      title: "Logística Nacional",
      desc: "Cobertura total en Perú con embalaje industrial de alta resistencia.",
      icon: <FaGlobeAmericas className="w-8 h-8 text-vive-500" />,
      specs: ["24 Regiones", "Empaque Reforzado"]
    },
    {
      title: "Respaldo Directo",
      desc: "Garantía de fábrica y soporte técnico especializado sin intermediarios.",
      icon: <FaCheckCircle className="w-8 h-8 text-vive-500" />,
      specs: ["Garantía 10 Años", "Soporte VIP"]
    }
  ];

  return (
    <MainLayout>
      <Helmet>
        <title>Venta por Mayor & B2B | Vive - Fábrica de Colchones</title>
        <meta name="description" content="Soluciones mayoristas para hoteles, tiendas y corporaciones. Colchones directo de fabrica con precios B2B y logística nacional." />
      </Helmet>

      {/* 1. Hero (with integrated stats) */}
      <Hero
        isVisible={isVisible}
        onOpenForm={() => setIsFormOpen(true)}
      />

      {/* 2. Strategic Solutions — THE CORE */}
      <RevealSection delay={100}>
        <Solutions
          markets={targetMarkets}
          onSelectMarket={() => { }}
        />
      </RevealSection>

      {/* 3. Industrial Benefits */}
      <RevealSection delay={200}>
        <Benefits
          benefits={benefits}
          factoryProductionImg={factoryProductionImg}
        />
      </RevealSection>

      {/* 4. Social Proof — NEW (replaces Bento + Anatomy) */}
      <RevealSection delay={300}>
        <SocialProof />
      </RevealSection>

      {/* 5. Final CTA */}
      <RevealSection delay={400}>
        <section className="py-24 lg:py-40 bg-gray-50 dark:bg-[#050505] relative overflow-hidden transition-colors duration-500">
          <div className="container mx-auto px-6 lg:px-20 relative z-10">
            <FinalCTA
              onOpenForm={() => setIsFormOpen(true)}
              whatsappLink={getWhatsAppLink(b2bMessage)}
            />
          </div>
        </section>
      </RevealSection>

      {/* Form Drawer */}
      <WholesaleFormDrawer
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
      />
    </MainLayout>
  );
};

export default WholesaleView;
