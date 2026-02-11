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

import { ROUTES, getProductPath } from '@/router/routes';

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
        navigate(ROUTES.HOME);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const navLinks = [
        {
            name: 'Resorte',
            path: ROUTES.RESORTE,
            icon: <MdOutlineBed className="w-5 h-5" />,
            megaMenu: [
                {
                    title: 'Colección Infantil',
                    items: [
                        { name: 'Cuna travesuras tela tricot', path: getProductPath('cuna-travesuras') },
                        { name: 'Cuna Golden dream tela de punto', path: getProductPath('cuna-golden') }
                    ]
                },
                {
                    title: 'Colección Advance',
                    items: [
                        { name: 'Classic', path: getProductPath('classic-ana') },
                        { name: 'Goldencito anatomico Mp', path: getProductPath('goldencito-mp') },
                        { name: 'Infinito Mp', path: getProductPath('infinito-mp') }
                    ]
                },
                {
                    title: 'Colección Advance Gold',
                    items: [
                        { name: 'Pasiones One pillow Mp', path: getProductPath('pasiones-mp') },
                        { name: 'Pasiones Pillow Mp', path: getProductPath('pasiones-pt-mp') },
                        { name: 'Golden dream Mp', path: getProductPath('golden-dream-mp') },
                        { name: 'Siempre One pillow Mp', path: getProductPath('siempre-one-pillow') },
                        { name: 'Siempre pillow Mp', path: getProductPath('siempre-pt') }
                    ]
                },
                {
                    title: 'Colección Advance Diamont',
                    items: [
                        { name: 'Absolut Pillow Mp', path: getProductPath('absolut-marco') },
                        { name: 'Ternura Pocket Mp', path: getProductPath('ternura-pocket') },
                        { name: 'Matrimonial Pocket Mp', path: getProductPath('matrimonial-clasico') },
                        { name: 'Reconciliación Pocket Visco Mp', path: getProductPath('reconciliacion-pocket') }
                    ]
                }
            ],
            image: resorteNavImg
        },
        {
            name: 'Espuma',
            path: ROUTES.ESPUMA,
            icon: <MdOutlineWeekend className="w-5 h-5" />,
            subLinks: [
                { name: 'Ecco Espuma', path: `${ROUTES.ESPUMA}?l=Poliseda` },
                { name: 'Plus Resilense', path: `${ROUTES.ESPUMA}?l=Plus Resilense` },
                { name: 'Splendido T/tricot', path: `${ROUTES.ESPUMA}?l=Splendido` },
                { name: 'Topacio', path: `${ROUTES.ESPUMA}?l=Topacio` }
            ]
        },
        {
            name: 'Dormitorio',
            path: '/categorias/dormitorio', // Manual override for specific category
            icon: <MdOutlineHome className="w-5 h-5" />,
            subLinks: [
                { name: 'Box Universal', path: ROUTES.DORMITORIO_SUB.replace(':subId', 'box-universal') },
                { name: 'Box Premium', path: ROUTES.DORMITORIO_SUB.replace(':subId', 'box-premium') },
                { name: 'Cama Universal con brazos', path: ROUTES.DORMITORIO_SUB.replace(':subId', 'cama-universal-brazos') },
                { name: 'Cama Premium con brazos', path: ROUTES.DORMITORIO_SUB.replace(':subId', 'cama-premium-brazos') },
                { name: 'Muebles', path: ROUTES.DORMITORIO_SUB.replace(':subId', 'muebles') }
            ]
        },
        {
            name: 'Mayorista',
            path: ROUTES.WHOLESALE,
            badge: 'B2B',
            icon: <MdOutlineLocalOffer className="w-5 h-5" />
        },
        {
            name: 'Contacto',
            path: ROUTES.CONTACT,
            icon: <MdOutlineMail className="w-5 h-5" />
        },
    ];

    const waLink = getWhatsAppLink("Hola Vive, me gustaría recibir asesoría estratégica para mi próximo sistema de descanso.");

    return (
        <header className="fixed top-0 left-0 w-full z-[50] transition-all duration-500">
            {/* PROMO BAR INTEGRATION */}
            <div className={`transition-all duration-500 overflow-hidden z-50 ${isScrolled ? 'max-h-0' : 'max-h-[300px]'}`}>
                <PromoBar />
            </div>

            {/* MAIN NAVBAR */}
            <div
                className="bg-white dark:bg-black border-b border-gray-200 dark:border-white/5 transition-all duration-500"
            >
                <div className="w-full px-4 md:px-12 lg:px-20 relative">
                    {/* Mobile Layout - Professional & Responsive */}
                    <div className="lg:hidden flex items-center min-h-[96px] w-full px-2 gap-2">
                        {/* LOGO - Fixed width for stability */}
                        <div className="flex-shrink-0 w-24">
                            <Logo
                                size="small"
                                to={ROUTES.HOME}
                                variant="auto"
                            />
                        </div>

                        {/* ACTIONS - Pushed to the right but with margin */}
                        <div className="flex-1 flex justify-end pr-8">
                            <NavActions
                                toggleMobileMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                isMobileMenuOpen={isMobileMenuOpen}
                                waLink={waLink}
                            />
                        </div>
                    </div>

                    {/* Desktop Layout */}
                    <div className="hidden lg:flex items-center justify-between min-h-24 w-full">
                        {/* LOGO - Desktop */}
                        <div className="flex-shrink-0">
                            <Logo
                                size="medium"
                                to={ROUTES.HOME}
                                variant="auto"
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
                                <button
                                    className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-500 hover:text-vive-500 hover:bg-gray-50 dark:hover:bg-white/5 transition-all duration-300"
                                    aria-label="Buscar productos"
                                >
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
