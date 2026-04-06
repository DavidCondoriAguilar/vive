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
import TestimonialsSection from '../components/TestimonialsSection';
import ProvincesSection from '../components/ProvincesSection';
import InfiniteMarquee from '@shared/components/ui/InfiniteMarquee';
import SleepTestTeaser from '../components/SleepTestTeaser';
import EngineeringTeaser from '../components/EngineeringTeaser';
import RiskReversal from '../components/RiskReversal';
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
      </Helmet>
      <MainLayout>
        {/* H1 Semántico para SEO y Accesibilidad (Visualmente oculto) */}
        <h1 className="sr-only">Vive - Fábrica Premium de Colchones de Espuma y Resortes en Perú</h1>

        {/* 1. HERO CAROUSEL - Visual impactante */}
        <HeroCarousel />

        {/* MARQUEE PROMOCIONAL - Minimalista e Infinito */}
        <RevealSection delay={100}>
          <InfiniteMarquee />
        </RevealSection>

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

        {/* 5. TESTIMONIALS - Prueba social real */}
        <TestimonialsSection />

        {/* ESCUDO ANTI-RIESGO - Eliminación de objeciones */}
        <RiskReversal />
      </MainLayout>
    </>
  );
};

export default HomeView;
