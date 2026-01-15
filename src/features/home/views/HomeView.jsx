import React, { useEffect } from 'react';
import MainLayout from '@/layouts/MainLayout';
import HeroCarousel from '../components/HeroCarousel';
import CategorySection from '../components/CategorySection';
import FeaturedProducts from '../components/FeaturedProducts';
import BenefitsSection from '@/components/common/BenefitsSection';
import DifferentialSection from '../components/DifferentialSectionEnhanced';
import EducationSection from '../components/EducationSection';
import ConversionCTA from '@/components/common/CTA';

const HomeView = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <MainLayout>
            {/* 1. HERO CAROUSEL - Visual Flyers & Conversion */}
            <HeroCarousel />

            {/* 2. CATEGORÍAS PRINCIPALES - Quick discovery */}
            <CategorySection />

            {/* 3. CONVERSION CTA - Primary sales push */}
            <ConversionCTA 
              title="Colchones Premium a Precios Exclusivos"
              subtitle="Descuentos de hasta 30% solo por tiempo limitado"
              buttonText="Ver Ofertas"
              urgency={true}
            />

            {/* 4. SISTEMA DE CONFIANZA - Subtle Trust Builders */}
            <BenefitsSection />

            {/* 5. PRODUCTOS DESTACADOS - Curated selection (Max 6) */}
            <FeaturedProducts />

            {/* 6. SECONDARY CONVERSION - After product showcase */}
            <ConversionCTA 
              title="¿No sabes qué elegir?"
              subtitle="Nuestros expertos te ayudarán a encontrar el colchón perfecto"
              buttonText="Hablar con Asesor"
              urgency={false}
              className="bg-gradient-to-r from-gray-50 to-white dark:from-gray-900 dark:to-black"
            />

            {/* 7. SECCIÓN DIFERENCIAL - Brand philosophy */}
            <DifferentialSection />

            {/* 8. INSPIRACIÓN / GUÍA - Education focus */}
            <EducationSection />

            {/* 9. FINAL CONVERSION - Last chance to convert */}
            <ConversionCTA 
              title="Transforma tu Descanso Hoy"
              subtitle="Envío gratis en Lima y garantía de 10 años"
              buttonText="Comprar Ahora"
              urgency={true}
            />
        </MainLayout>
    );
};

export default HomeView;
