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
                    title: 'Avance Marco de Acero',
                    items: [
                        { name: 'Goldencito anatómico (1 año)', path: '/producto/goldencito-ana' },
                        { name: 'Classic (4 años)', path: '/producto/classic-ana' },
                        { name: 'Pasiones One pillow (5años)', path: '/producto/pasiones-tricot' },
                        { name: 'Pasiones pillow de lujo(5años)', path: '/producto/pasiones-orto-lujo' }
                    ]
                },
                {
                    title: 'Avance Marco poliuretano',
                    items: [
                        { name: 'Goldencito anatómico Mp (2 años)', path: '/producto/goldencito-mp' },
                        { name: 'Infinito Mp (4 años)', path: '/producto/infinito-mp' }
                    ]
                },
                {
                    title: 'Avance Gold',
                    items: [
                        { name: 'Pasiones One pillow Mp (5 años)', path: '/producto/pasiones-mp' },
                        { name: 'Pasiones Pillow Mp (5 años)', path: '/producto/pasiones-pt-mp' },
                        { name: 'Golden dream Mp (6 años)', path: '/producto/golden-dream-mp' },
                        { name: 'Siempre One pillow Mp (7 años)', path: '/producto/siempre-one-pillow' },
                        { name: 'Siempre pillow Mp (7 años)', path: '/producto/siempre-pt' }
                    ]
                },
                {
                    title: 'Avance Diamont',
                    items: [
                        { name: 'Absolut Pillow Mp (10 años)', path: '/producto/absolut-marco' },
                        { name: 'Ternura Pocket Mp (6 años)', path: '/producto/ternura-pocket' },
                        { name: 'Matrimonial Pocket Mp (6 años)', path: '/producto/matrimonial-clasico' },
                        { name: 'Reconciliación Pocket Visco Mp (10 años)', path: '/producto/reconciliacion-pocket' }
                    ]
                }
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
                { name: 'Topacio', path: '/colchones-espuma?l=Topacio' }
            ]
        },
        {
            name: 'Dormitorio',
            path: '/categorias/dormitorio',
            icon: <MdOutlineHome className="w-5 h-5" />,
            subLinks: [
                { name: 'Box + Cabecera', path: '/dormitorio/box-cabecera' },
                { name: 'Muebles', path: '/dormitorio/muebles' },
                { name: 'Cunas', path: '/dormitorio/cunas' }
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
                    <div className="lg:hidden flex items-center justify-between min-h-[72px] w-full px-4">
                        {/* LOGO - Left Aligned for better usability */}
                        <div className="flex-shrink-0 transition-all duration-300">
                            <Logo
                                size="medium"
                                onClick={handleLogoClick}
                                variant="dark"
                                style={{ height: '90px', width: 'auto' }}
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
                    <div className="hidden lg:flex items-center justify-between min-h-20 w-full">
                        {/* LOGO - Desktop */}
                        <div className="flex-shrink-0">
                            <Logo
                                size="medium"
                                onClick={handleLogoClick}
                                variant="dark"
                                style={{ height: '115px', width: 'auto' }}
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
