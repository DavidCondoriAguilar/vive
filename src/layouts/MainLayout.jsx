import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getWhatsAppLink } from '@/utils/constants';
import Navbar from '@/components/layout/Navbar';
import PromoBar from '@/components/layout/PromoBar';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import PaymentIcons from '@/components/common/PaymentIcons';
import InfoModal from '@/components/common/InfoModal';
import Footer from '@/components/layout/Footer';
import { FaShieldAlt, FaTruck, FaUndo, FaHeadset } from 'react-icons/fa';

import WarrantyContent from '@/components/support/WarrantyContent';
import ShippingContent from '@/components/support/ShippingContent';
import ReturnsContent from '@/components/support/ReturnsContent';
import ContactContent from '@/components/support/ContactContent';

const MainLayout = ({ children }) => {
    const navigate = useNavigate();
    const [activeModal, setActiveModal] = useState(null);

    const handleLogoClick = () => {
        navigate('/');
    };

    const supportInfo = {
        'Garantía': {
            title: 'Respaldo y Garantía de Fábrica',
            content: <WarrantyContent />,
            icon: FaShieldAlt
        },
        'Envíos': {
            title: 'Logística y Despacho Nacional',
            content: <ShippingContent />,
            icon: FaTruck
        },
        'Devoluciones': {
            title: 'Política de Cambios y Retornos',
            content: <ReturnsContent />,
            icon: FaUndo
        },
        'Contacto': {
            title: 'Canales de Atención Especializada',
            content: <ContactContent />,
            icon: FaHeadset
        }
    };

    const handleSupportClick = (key) => {
        if (key === 'Contacto') {
            navigate('/contacto');
            return;
        }
        const info = supportInfo[key];
        if (info) setActiveModal(info);
    };

    const handleServiceClick = (badge) => {
        setActiveModal({
            title: badge.title,
            content: <p>{badge.fullText}</p>,
            icon: null
        });
    };

    return (
        <div className="flex flex-col min-h-screen bg-white dark:bg-black transition-colors duration-700 font-sans selection:bg-gold-500 selection:text-white">
            <PromoBar />
            <Navbar />
            <Breadcrumbs />
            <main className="flex-grow">
                {children}
            </main>

            <Footer
                onLogoClick={handleLogoClick}
                onSupportClick={handleSupportClick}
                onServiceClick={handleServiceClick}
            />

            <InfoModal
                isOpen={!!activeModal}
                onClose={() => setActiveModal(null)}
                title={activeModal?.title}
                content={activeModal?.content}
                icon={activeModal?.icon}
            />
        </div>
    );
};

export default MainLayout;
