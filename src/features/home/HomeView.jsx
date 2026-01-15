import React, { useEffect } from 'react';
import MainLayout from '@/layouts/MainLayout';
import HeroCarousel from './components/HeroCarousel';
import CategorySection from './components/CategorySection';
import FeaturedProducts from './components/FeaturedProducts';
import BenefitsSection from '@/components/ui/BenefitsSection';
import DifferentialSection from './components/DifferentialSection';
import EducationSection from './components/EducationSection';

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

            {/* 3. SISTEMA DE CONFIANZA - Subtle Trust Builders */}
            <BenefitsSection />

            {/* 4. PRODUCTOS DESTACADOS - Curated selection (Max 6) */}
            <FeaturedProducts />

            {/* 5. SECCIÓN DIFERENCIAL - Brand philosophy */}
            <DifferentialSection />

            {/* 6. INSPIRACIÓN / GUÍA - Education focus */}
            <EducationSection />
        </MainLayout>
    );
};

export default HomeView;
