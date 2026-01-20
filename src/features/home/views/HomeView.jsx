import React from 'react';
import { Helmet } from 'react-helmet';
import { useScrollToTop } from '@/hooks/useTheme';
import MainLayout from '@/layouts/MainLayout';
import SectionLayout from '@/components/layout/SectionLayout';
import HeroCarousel from '@/components/home/HeroCarousel';
import CategoriesSection from '@/components/home/CategoriesSection';
import ProductCarousel from '@/components/ui/ProductCarousel';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import ProvincesSection from '@/components/home/ProvincesSection';
import { ENHANCED_CATALOG } from '@/utils/constants';

const HomeView = () => {
  useScrollToTop();

  return (
    <>
      <Helmet>
        <title>Sueño Dorado - Fábrica de Colchones en Perú | Venta Directa</title>
        <meta name="description" content="Fabricamos colchones en Perú. Venta directa de fábrica de espuma y resortes. Mayor y menor. Lima y provincias." />
        <link rel="canonical" href="https://suenodorado.pe/" />
      </Helmet>
      <MainLayout>
        {/* 1. HERO CAROUSEL - Visual impactante */}
        <HeroCarousel />

        {/* 2. CATEGORÍAS - Grid limpio estilo Paraíso */}
        <CategoriesSection />

        {/* 3. PRODUCT CAROUSEL - Destacados visuales */}
        <SectionLayout background="gray">
          <ProductCarousel
            products={ENHANCED_CATALOG.slice(0, 8)}
            title="Nuestros Productos Destacados"
          />
        </SectionLayout>

        {/* 4. TESTIMONIALS - Prueba social real */}
        <TestimonialsSection />

        {/* 5. PROVINCIAS - Cobertura nacional */}
        <ProvincesSection />
      </MainLayout>
    </>
  );
};

export default HomeView;
