import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useScrollToTop } from '@/hooks/useTheme';
import MainLayout from '@/layouts/MainLayout';
import SectionLayout from '@/components/layout/SectionLayout';
import HeroCarousel from '@/components/home/HeroCarousel';
import ManufacturingSection from '@/components/home/ManufacturingSection';
import CategoriesSection from '@/components/home/CategoriesSection';
import ProductCarousel from '@/components/ui/ProductCarousel';
import ImageGallery from '@/components/home/ImageGallery';
import VideoShowcase from '@/components/home/VideoShowcase';
import ProvincesSection from '@/components/home/ProvincesSection';
import { ENHANCED_CATALOG } from '@/utils/constants';

const HomeView = () => {
  useScrollToTop();

  // Sample gallery images
  const galleryImages = [
    {
      url: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80&w=800',
      title: 'Colchón Premium',
      description: 'Espuma viscoelástica de alta densidad'
    },
    {
      url: 'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&q=80&w=800',
      title: 'Sala de Exhibición',
      description: 'Prueba nuestros colchones en persona'
    },
    {
      url: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800',
      title: 'Proceso de Fabricación',
      description: 'Control de calidad en cada etapa'
    },
    {
      url: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&q=80&w=800',
      title: 'Diseño Moderno',
      description: 'Estilo contemporáneo para tu habitación'
    },
    {
      url: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=800',
      title: 'Cunas Infantiles',
      description: 'Seguridad y confort para bebés'
    },
    {
      url: 'https://images.unsplash.com/photo-1629949009765-40f745a55111?auto=format&fit=crop&q=80&w=800',
      title: 'Almohadas Ergonómicas',
      description: 'Complemento perfecto para tu descanso'
    }
  ];

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

        {/* 2. VIDEO SHOWCASE - Proceso en video */}
        <VideoShowcase />

        {/* 3. SECCIÓN FABRICACIÓN - Proceso visible */}
        <ManufacturingSection />

        {/* 4. PRODUCT CAROUSEL - Destacados visuales */}
        <SectionLayout background="gray">
          <ProductCarousel
            products={ENHANCED_CATALOG.slice(0, 8)}
            title="Nuestros Productos Destacados"
          />
        </SectionLayout>

        {/* 5. CATEGORÍAS - Grid limpio estilo Paraíso */}
        <CategoriesSection />

        {/* 6. IMAGE GALLERY - Galería visual */}
        <SectionLayout background="default">
          <ImageGallery 
            images={galleryImages}
            title="Nuestra Galería de Productos"
          />
        </SectionLayout>

        {/* 7. PROVINCIAS - Cobertura nacional */}
        <ProvincesSection />
      </MainLayout>
    </>
  );
};

export default HomeView;
