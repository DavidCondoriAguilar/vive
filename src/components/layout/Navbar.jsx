import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getWhatsAppLink } from '@/utils/constants';
import PromoBar from './PromoBar';
import Logo from '@/components/common/Logo';
import DesktopNav from './navbar_components/DesktopNav';
import NavActions from './navbar_components/NavActions';
import MobileMenu from './navbar_components/MobileMenu'; // Import MobileMenu

import {
    MdOutlineBed,
    MdOutlineWeekend,
    MdOutlineHome,
    MdOutlineInventory,
    MdOutlineLocalOffer,
    MdOutlineMail
} from 'react-icons/md';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLogoClick = () => {
        navigate('/');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const navLinks = [
        {
            name: 'Resorte',
            path: '/colchones-resorte',
            icon: <MdOutlineBed className="w-5 h-5" />,
            subLinks: [
                { name: 'Económicos (1-2 años)', path: '/colchones-resorte?l=Económica' },
                { name: 'Intermedios (5 años)', path: '/colchones-resorte?l=Intermedio' },
                { name: 'Premium (10 años)', path: '/colchones-resorte?l=Premium' },
                { name: 'Golden Dream (6 años)', path: '/colchones-resorte?l=Golden Dream' },
                { name: 'Siempre (7 años)', path: '/colchones-resorte?l=Siempre' },
                { name: 'Absolut (10 años)', path: '/colchones-resorte?l=Absolut' },
                { name: 'Matrimoniales (6 años)', path: '/colchones-resorte?l=Matrimonial' }
            ]
        },
        {
            name: 'Espuma',
            path: '/colchones-espuma',
            icon: <MdOutlineWeekend className="w-5 h-5" />,
            subLinks: [
                { name: 'Económicas (Poliseda)', path: '/colchones-espuma?l=Poliseda' },
                { name: 'Plus Resilense', path: '/colchones-espuma?l=Plus Resilense' },
                { name: 'Splendido T/tricot', path: '/colchones-espuma?l=Splendido' },
                { name: 'Topacio (con almohada)', path: '/colchones-espuma?l=Topacio' }
            ]
        },
        {
            name: 'Dormitorio',
            path: '/categorias/dormitorio',
            icon: <MdOutlineHome className="w-5 h-5" />,
            subLinks: [
                { name: 'Box/Tarimas', path: '/dormitorio/box-tarimas' },
                { name: 'Cabeceras', path: '/dormitorio/cabeceras' },
                { name: 'Cunas', path: '/dormitorio/cunas' }
            ]
        },
        {
            name: 'Muebles',
            path: '/categorias/muebles',
            icon: <MdOutlineInventory className="w-5 h-5" />
        },
        {
            name: 'Venta por Mayor',
            path: '/venta-por-mayor',
            badge: 'B2B',
            icon: <MdOutlineLocalOffer className="w-5 h-5" />
        },
        {
            name: 'Contacto',
            path: '/contacto',
            icon: <MdOutlineMail className="w-5 h-5" />
        },
    ];

    const waLink = getWhatsAppLink("Hola Sueño Dorado, me gustaría recibir asesoría para mi próximo colchón.");

    return (
        <header className="fixed top-0 left-0 w-full z-[100] transition-all duration-500">
            {/* PROMO BAR INTEGRATION */}
            <div className={`transition-all duration-500 overflow-hidden z-50 ${isScrolled ? 'max-h-0' : 'max-h-[300px]'}`}>
                <PromoBar />
            </div>

            {/* MAIN NAVBAR */}
            <div
                className="bg-white border-b border-gray-200 py-1 md:py-2 transition-all duration-500"
            >
                <div className="w-full px-2 xs:px-3 sm:px-4 md:px-6 lg:px-20">
                    <div className="flex items-center justify-between min-h-12 xs:min-h-14 gap-1 xs:gap-2">
                        {/* LOGO */}
                        <div className="flex-shrink-0 flex items-center justify-center">
                            <Logo
                                size="large"
                                onClick={handleLogoClick}
                                variant="dark"
                            />
                        </div>

                        {/* DESKTOP NAV */}
                        <DesktopNav navLinks={navLinks} currentPath={location.pathname} />

                        {/* ACTIONS */}
                        <NavActions
                            toggleMobileMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            isMobileMenuOpen={isMobileMenuOpen}
                            waLink={waLink}
                        />
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <MobileMenu
                isOpen={isMobileMenuOpen}
                onClose={() => setIsMobileMenuOpen(false)}
                navLinks={navLinks}
                waLink={waLink}
            />
        </header>
    );
};

export default Navbar;
