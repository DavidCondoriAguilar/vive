import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import MainLayout from '@/layouts/MainLayout';
import RevealSection from '@/components/ui/RevealSection';
import RestMasterclass from './components/RestMasterclass';

const GuiaDescansoView = () => {
    useScrollReveal();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <MainLayout>
            <Helmet>
                <title>Guía Maestra de Descanso | Vive - Innovación Nacional</title>
                <meta name="description" content="Descubra la ciencia del sueño profundo con la Guía Maestra de Vive. Biomecánica, protocolos de cuidado y optimización del ambiente zen." />
            </Helmet>

            <RevealSection>
                <RestMasterclass />
            </RevealSection>
        </MainLayout>
    );
};

export default GuiaDescansoView;
