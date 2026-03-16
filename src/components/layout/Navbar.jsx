import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getWhatsAppLink } from '@core/utils/constants';
import PromoBar from './PromoBar';
import Logo from '@/components/common/Logo';
import SearchModal from '@/components/search/SearchModal';
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
    const [scrollY, setScrollY] = useState(0);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSearchOverlayOpen, setIsSearchOverlayOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const [promoHeight, setPromoHeight] = useState(44);

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;
            setScrollY(currentScroll);
            
            // Adjust threshold based on screen size
            const threshold = window.innerWidth >= 1024 ? 44 : 80;
            setIsScrolled(currentScroll > threshold);
            setPromoHeight(threshold);
        };
        handleScroll(); // Initial call
        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, []);

    const handleLogoClick = () => {
        navigate(ROUTES.HOME);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // ... (rest of the links remain same)
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
                        { name: 'Absolut Pillow Mp', path: getProductPath('ventto-marco') },
                        { name: 'Vanora Doble Pillow', path: getProductPath('vanora-dp') },
                        { name: 'Itta Ortopédico', path: getProductPath('itta') },
                        { name: 'Kasse Confort', path: getProductPath('kasse') }
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
            path: '/categorias/dormitorio',
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
            name: 'Catálogo',
            path: ROUTES.CATALOG,
            icon: <MdOutlineInventory className="w-5 h-5" />
        },
        {
            name: 'Mayorista',
            path: ROUTES.WHOLESALE,
            badge: 'B2B',
            icon: <MdOutlineLocalOffer className="w-5 h-5" />
        },
        {
            name: 'Guías',
            path: ROUTES.GUIDES,
            icon: <MdOutlineBed className="w-5 h-5" />
        },
    ];

    const waLink = getWhatsAppLink("Hola Vive, me gustaría recibir asesoría estratégica para mi próximo sistema de descanso.");
    const isHome = location.pathname === '/inicio' || location.pathname === '/';

    // Calculate dynamic offset to hide Promo Bar smoothly
    const dynamicTranslate = Math.min(scrollY, promoHeight);

    return (
        <>
            {/* COMPLETE NAVIGATION SYSTEM - Shared Fixed Container */}
            <div
                className="fixed top-0 left-0 w-full z-[80] transition-transform duration-300 ease-out"
                style={{ transform: `translateY(-${dynamicTranslate}px)` }}
            >
                {/* 1. PROMO BAR */}
                <PromoBar />

                {/* 2. MAIN NAVBAR - Transparent initially, solid on scroll */}
                <header
                    className={`w-full transition-all duration-700 bg-white/95 dark:bg-black/95 backdrop-blur-sm border-b border-gray-100 dark:border-white/5 
                        ${isScrolled ? 'bg-white/80 dark:bg-black/80 backdrop-blur-2xl border-vive-500/10 shadow-2xl' : ''}
                    `}
                >
                    <div className={`h-[2px] w-full bg-gradient-to-r from-transparent via-vive-500 to-transparent transition-opacity duration-500 ${isScrolled ? 'opacity-100' : 'opacity-0'}`}></div>

                    <div className="w-full px-4 md:px-12 lg:px-20 relative overflow-hidden">
                        <div className={`flex items-center justify-between w-full transition-all duration-700 ${isScrolled ? 'h-[60px] lg:h-[68px]' : 'h-[68px] lg:h-[76px]'}`}>
                            <div className="flex-shrink-0 relative z-10">
                                <Logo
                                    size={isScrolled ? "small" : "medium"}
                                    to={ROUTES.HOME}
                                    variant="auto"
                                    className="transition-transform duration-500 hover:scale-105"
                                />
                            </div>

                            <div className="hidden lg:flex flex-1 items-center justify-center px-8 relative z-10">
                                <DesktopNav navLinks={navLinks} currentPath={location.pathname} />
                            </div>

                            <div className="flex items-center relative z-10">
                                <NavActions
                                    toggleMobileMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                    isMobileMenuOpen={isMobileMenuOpen}
                                    waLink={waLink}
                                    onOpenSearch={() => setIsSearchOverlayOpen(true)}
                                />
                            </div>
                        </div>
                    </div>
                </header>
            </div>

            {/* Spacer to prevent layout jump from fixed header */}
            {!isHome && <div className="h-[112px] lg:h-[120px]"></div>}

            {/* 3. OVERLAYS - Outside the header to avoid layout shift conflicts */}
            <MobileMenu
                isOpen={isMobileMenuOpen}
                onClose={() => setIsMobileMenuOpen(false)}
                navLinks={navLinks}
                waLink={waLink}
            />

            <SearchModal
                isOpen={isSearchOverlayOpen}
                onClose={() => setIsSearchOverlayOpen(false)}
            />
        </>
    );
};



export default Navbar;
