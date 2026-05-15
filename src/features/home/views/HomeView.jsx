import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useScrollToTop } from '@shared/hooks/useTheme';
import { useScrollReveal } from '@shared/hooks/useScrollReveal';
import MainLayout from '@/layouts/MainLayout';
import SectionLayout from '@/components/layout/SectionLayout';
import RevealSection from '@shared/components/ui/RevealSection';
import HeroCarousel from '../components/HeroCarousel';
import CategoriesSection from '../components/CategoriesSection';
import ProductCarousel from '@shared/components/ui/ProductCarousel';
import ProvincesSection from '../components/ProvincesSection';
import PhysiologicalSection from '../components/TestimonialsSection';
import InfiniteMarquee from '@shared/components/ui/InfiniteMarquee';
import SleepTestTeaser from '../components/SleepTestTeaser';
import EngineeringTeaser from '../components/EngineeringTeaser';
import { ENHANCED_CATALOG, FEATURED_PRODUCTS } from '@core/utils/constants';

const HomeView = () => {
  useScrollToTop();
  useScrollReveal();

  return (
    <>
      <Helmet>
        <title>Vive - Fábrica de Colchones en Perú | Venta Directa</title>
        <meta name="description" content="Fabricamos colchones en Perú. Venta directa de fábrica de espuma y resortes. Mayor y menor. Lima y provincias." />
        <link rel="canonical" href="https://vive.pe/" />
        <meta property="og:title" content="Vive - Fábrica de Colchones Premium en Perú | Venta Directa" />
        <meta property="og:description" content="Fabricamos colchones en Perú. Venta directa de fábrica de espuma y resortes. Calidad premium con 10 años de garantía." />
        <meta property="og:image" content="https://vive.pe/logo-main.jpg" />
        <meta property="og:url" content="https://vive.pe/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Vive - Fábrica de Colchones Premium en Perú" />
        <meta name="twitter:description" content="Fabricamos colchones en Perú. Venta directa de fábrica de espuma y resortes." />
        <meta name="twitter:image" content="https://vive.pe/logo-main.jpg" />
      </Helmet>
      <MainLayout>
        {/* H1 semántico sutil */}
        <h1 className="sr-only">Vive - Fábrica Premium de Colchones de Espuma y Resortes en Perú</h1>

        {/* 1. HERO CAROUSEL - Visual impactante */}
        <HeroCarousel />

        {/* MARQUEE PROMOCIONAL - Visible desde el inicio */}
        <InfiniteMarquee />

        {/* 2. CATEGORÍAS - Grid limpio estilo Paraíso */}
        <RevealSection delay={200}>
          <CategoriesSection />
        </RevealSection>

        {/* 3. PRODUCT CAROUSEL - Destacados visuales */}
        <RevealSection delay={300}>
          <SectionLayout background="white">
            <ProductCarousel
              products={FEATURED_PRODUCTS}
              title="Nuestros Productos Destacados"
            />
          </SectionLayout>
        </RevealSection>

        {/* ARQUITECTURA DEL DESCANSO - Ingeniería al desnudo */}
        <EngineeringTeaser />

        {/* ORÁCULO INMERSIVO - Teaser interactivo del test de sueño */}
        <SleepTestTeaser />

        {/* 4. PROVINCIAS - Cobertura nacional */}
        <RevealSection delay={400}>
          <ProvincesSection />
        </RevealSection>

        {/* ANÁLISIS FISIOLÓGICO - Ingeniería del descanso */}
        <PhysiologicalSection />

      </MainLayout>
    </>
  );
};

export default HomeView;
