import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useScrollToTop } from '@/hooks/useTheme';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import MainLayout from '@/layouts/MainLayout';
import SectionLayout from '@/components/layout/SectionLayout';
import RevealSection from '@/components/ui/RevealSection';
import HeroCarousel from '../components/HeroCarousel';
import CategoriesSection from '../components/CategoriesSection';
import ProductCarousel from '@/components/ui/ProductCarousel';
import TestimonialsSection from '../components/TestimonialsSection';
import ProvincesSection from '../components/ProvincesSection';
import InfiniteMarquee from '@/components/ui/InfiniteMarquee';
import { ENHANCED_CATALOG, FEATURED_PRODUCTS } from '@/utils/constants';

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
          <SectionLayout background="gray">
            <ProductCarousel
              products={FEATURED_PRODUCTS}
              title="Nuestros Productos Destacados"
            />
          </SectionLayout>
        </RevealSection>

        {/* 4. PROVINCIAS - Cobertura nacional */}
        <RevealSection delay={400}>
          <ProvincesSection />
        </RevealSection>

        {/* 5. TESTIMONIALS - Prueba social real */}
        <RevealSection delay={500}>
          <TestimonialsSection />
        </RevealSection>
      </MainLayout>
    </>
  );
};

export default HomeView;
