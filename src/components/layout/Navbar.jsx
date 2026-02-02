import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getWhatsAppLink } from '@/utils/constants';
import PromoBar from './PromoBar';
import Logo from '@/components/common/Logo';
import SearchBar from '@/components/search/SearchBar';
import DesktopNav from './navbar_components/DesktopNav';
import NavActions from './navbar_components/NavActions';
import MobileMenu from './navbar_components/MobileMenu'; // Import MobileMenu

import {
    MdOutlineBed,
    MdOutlineWeekend,
    MdOutlineHome,
    MdOutlineInventory,
    MdOutlineLocalOffer,
    MdOutlineMail,
    MdOutlineSearch
} from 'react-icons/md';

import resorteNavImg from '@/assets/images/generated/resorte_nav.png';

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
            megaMenu: [
                {
                    title: 'Colección Infantil',
                    items: [
                        { name: 'Cuna travesuras tela tricot', path: '/producto/cuna-travesuras' },
                        { name: 'Cuna Golden dream tela de punto', path: '/producto/cuna-golden' }
                    ]
                },
                {
                    title: 'Colección Advance',
                    items: [
                        { name: 'Classic', path: '/producto/classic-ana' },
                        { name: 'Goldencito anatomico Mp', path: '/producto/goldencito-mp' },
                        { name: 'Infinito Mp', path: '/producto/infinito-mp' }
                    ]
                },
                {
                    title: 'Colección Advance Gold',
                    items: [
                        { name: 'Pasiones One pillow Mp', path: '/producto/pasiones-mp' },
                        { name: 'Pasiones Pillow Mp', path: '/producto/pasiones-pt-mp' },
                        { name: 'Golden dream Mp', path: '/producto/golden-dream-mp' },
                        { name: 'Siempre One pillow Mp', path: '/producto/siempre-one-pillow' },
                        { name: 'Siempre pillow Mp', path: '/producto/siempre-pt' }
                    ]
                },
                {
                    title: 'Colección Advance Diamont',
                    items: [
                        { name: 'Absolut Pillow Mp', path: '/producto/absolut-marco' },
                        { name: 'Ternura Pocket Mp', path: '/producto/ternura-pocket' },
                        { name: 'Matrimonial Pocket Mp', path: '/producto/matrimonial-clasico' },
                        { name: 'Reconciliación Pocket Visco Mp', path: '/producto/reconciliacion-pocket' }
                    ]
                }
            ],
            image: resorteNavImg
        },
        {
            name: 'Espuma',
            path: '/colchones-espuma',
            icon: <MdOutlineWeekend className="w-5 h-5" />,
            subLinks: [
                { name: 'Ecco Espuma', path: '/colchones-espuma?l=Poliseda' },
                { name: 'Plus Resilense', path: '/colchones-espuma?l=Plus Resilense' },
                { name: 'Splendido T/tricot', path: '/colchones-espuma?l=Splendido' },
                { name: 'Topacio', path: '/colchones-espuma?l=Topacio' }
            ]
        },
        {
            name: 'Dormitorio',
            path: '/categorias/dormitorio',
            icon: <MdOutlineHome className="w-5 h-5" />,
            subLinks: [
                { name: 'Box Universal', path: '/dormitorio/box-universal' },
                { name: 'Box Premium', path: '/dormitorio/box-premium' },
                { name: 'Cama Universal con brazos', path: '/dormitorio/cama-universal-brazos' },
                { name: 'Cama Premium con brazos', path: '/dormitorio/cama-premium-brazos' },
                { name: 'Muebles', path: '/dormitorio/muebles' }
            ]
        },
        {
            name: 'Mayorista',
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
                className="bg-white border-b border-gray-200 transition-all duration-500"
            >
                <div className="w-full px-1 xs:px-3 sm:px-5 md:px-8 lg:px-12 xl:px-18 relative">
                    {/* Mobile Layout - Professional & Responsive */}
                    <div className="lg:hidden flex items-center justify-between min-h-[96px] w-full px-4">
                        {/* LOGO - Left Aligned for better usability */}
                        <div className="flex-shrink-0 transition-all duration-300">
                            <Logo
                                size="medium"
                                onClick={handleLogoClick}
                                variant="dark"
                            />
                        </div>

                        {/* ACTIONS - Right side */}
                        <div className="flex items-center">
                            <NavActions
                                toggleMobileMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                isMobileMenuOpen={isMobileMenuOpen}
                                waLink={waLink}
                            />
                        </div>
                    </div>

                    {/* Desktop Layout */}
                    <div className="hidden lg:flex items-center justify-between min-h-32 w-full">
                        {/* LOGO - Desktop */}
                        <div className="flex-shrink-0">
                            <Logo
                                size="medium"
                                onClick={handleLogoClick}
                                variant="dark"
                            />
                        </div>

                        {/* DESKTOP NAV - Center section */}
                        <div className="flex-1 flex items-center justify-center px-4">
                            <DesktopNav navLinks={navLinks} currentPath={location.pathname} />
                        </div>

                        {/* RIGHT SECTION - Search + Actions */}
                        <div className="flex items-center gap-4 flex-shrink-0">
                            <div className="hidden xl:block w-48">
                                <SearchBar placeholder="Buscar productos..." />
                            </div>

                            {/* Search Icon - Tablet/Laptop */}
                            <div className="hidden lg:block xl:hidden">
                                <button className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-500 hover:text-gold-500 hover:bg-gray-50 dark:hover:bg-white/5 transition-all duration-300">
                                    <MdOutlineSearch className="w-4 h-4" />
                                </button>
                            </div>

                            {/* ACTIONS */}
                            <div className="flex-shrink-0">
                                <NavActions
                                    toggleMobileMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                    isMobileMenuOpen={isMobileMenuOpen}
                                    waLink={waLink}
                                />
                            </div>
                        </div>
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
