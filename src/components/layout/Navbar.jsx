import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { getWhatsAppLink } from '@/utils/constants';
import { useTheme } from '@/hooks/useTheme';
import { useCart } from '@/contexts/CartContext';
import { FaShoppingCart } from 'react-icons/fa';
import PromoBar from './PromoBar';
import Logo from '@/components/common/Logo';
import {
    MdOutlineBed,
    MdOutlineWeekend,
    MdOutlineHome,
    MdOutlineInventory,
    MdOutlineLocalOffer,
    MdOutlineSearch,
    MdOutlineDarkMode,
    MdOutlineLightMode,
    MdOutlineMenu,
    MdOutlineClose
} from 'react-icons/md';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();
    const { getTotalItems, setIsCartOpen } = useCart();
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
            name: 'Colchones',
            path: '/categorias/colchones',
            icon: <MdOutlineBed className="w-5 h-5" />
        },
        {
            name: 'Tarimas',
            path: '/categorias/tarimas',
            icon: <MdOutlineWeekend className="w-5 h-5" />
        },
        {
            name: 'Cunas',
            path: '/categorias/cunas',
            icon: <MdOutlineHome className="w-5 h-5" />
        },
        {
            name: 'Almohadas',
            path: '/categorias/almohadas',
            icon: <MdOutlineInventory className="w-5 h-5" />
        },
        {
            name: 'Venta por Mayor',
            path: '/venta-por-mayor',
            badge: 'B2B',
            icon: <MdOutlineLocalOffer className="w-5 h-5" />
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
                className={`transition-all duration-500 ${isScrolled
                    ? 'bg-white/95 backdrop-blur-xl border-b border-gray-300 dark:bg-white/95 dark:border-gray-300 py-2 shadow-lg shadow-black/5'
                    : 'bg-white dark:bg-white border-b border-gray-200 dark:border-gray-200 py-2 sm:py-3'
                    }`}
            >
                <div className="w-full px-3 xs:px-4 sm:px-6 lg:px-20">
                    <div className="flex items-center justify-between min-h-16 gap-2">
                        {/* LOGO */}
                        <div className="flex-shrink-0 flex items-center justify-center">
                            <Logo
                                size="small"
                                onClick={handleLogoClick}
                                variant="light"
                                className="!w-10 !h-10 sm:!w-12 sm:!h-12 md:!w-14 md:!h-14"
                            />
                        </div>

                        {/* DESKTOP NAV */}
                        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`relative px-3 py-2 group/nav text-[11px] font-brand font-bold uppercase tracking-[0.15em] transition-all duration-300 rounded-lg flex items-center gap-2 ${location.pathname === link.path
                                        ? 'text-gold-600 bg-gold-50 dark:bg-gold-100 dark:text-gold-700'
                                        : link.name === 'Ofertas'
                                            ? 'text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-100 dark:text-red-600'
                                            : 'text-gray-900 dark:text-gray-700 hover:text-gray-900 dark:hover:text-gray-900 hover:bg-gray-50 dark:hover:bg-gray-100'
                                        }`}
                                >
                                    <span>{link.name}</span>

                                    {/* Badge */}
                                    {link.badge && (
                                        <span className={`px-1.5 py-0.5 text-[7px] font-black rounded-full shadow-sm text-white ${link.badge === '-30%' ? 'bg-red-500' : 'bg-gold-500'
                                            }`}>
                                            {link.badge}
                                        </span>
                                    )}

                                    {/* Hover Underline */}
                                    {!link.badge && location.pathname !== link.path && (
                                        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-8 h-[2px] bg-gold-500 transform scale-x-0 transition-transform duration-300 origin-center group-hover/nav:scale-x-100"></div>
                                    )}
                                </Link>
                            ))}
                        </nav>

                        {/* ACTIONS */}
                        <div className="flex items-center gap-1.5 xs:gap-2 sm:gap-2 md:gap-3 lg:gap-4 ml-auto flex-shrink-0">
                            {/* Search */}
                            <div className="hidden xl:flex items-center bg-gray-50 dark:bg-gray-100 border border-gray-100 dark:border-gray-200 px-3 py-1.5 rounded-full group focus-within:border-gold-500/50 transition-all">
                                <MdOutlineSearch className="w-4 h-4 text-gray-400 group-focus-within:text-gold-500" />
                                <input
                                    type="text"
                                    placeholder="Buscar..."
                                    className="bg-transparent border-none outline-none text-xs text-gray-700 dark:text-gray-800 placeholder:text-gray-500 dark:placeholder:text-gray-600 ml-2 w-20 focus:w-32 transition-all duration-500 font-medium"
                                />
                            </div>

                            {/* Theme Toggle */}
                            <button
                                onClick={toggleTheme}
                                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-gray-100 dark:border-gray-300 flex items-center justify-center text-gray-500 dark:text-gray-700 hover:text-gray-900 dark:hover:text-gray-900 hover:bg-gray-50 dark:hover:bg-gray-100 transition-all flex-shrink-0"
                                aria-label="Cambiar tema"
                            >
                                {theme === 'light' ? (
                                    <MdOutlineDarkMode className="w-4 h-4 sm:w-5 sm:h-5" />
                                ) : (
                                    <MdOutlineLightMode className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
                                )}
                            </button>

                            {/* Cart Button */}
                            <button
                                onClick={() => setIsCartOpen(true)}
                                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-gray-100 dark:border-gray-300 flex items-center justify-center text-gray-500 dark:text-gray-700 hover:text-gray-900 dark:hover:text-gray-900 hover:bg-gray-50 dark:hover:bg-gray-100 transition-all relative flex-shrink-0"
                            >
                                <FaShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
                                {getTotalItems() > 0 && (
                                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-gold-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                                        {getTotalItems()}
                                    </span>
                                )}
                            </button>

                            {/* WhatsApp Button */}
                            <a
                                href={waLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hidden sm:flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full font-brand font-bold text-[10px] uppercase tracking-wider transition-all hover:scale-105 shadow-md shadow-green-500/20"
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884 0 2.225.569 3.891 1.745 5.534l-.999 3.648 3.743-.981zm11.387-5.464c-.301-.15-1.785-.881-2.06-.982-.278-.1-.48-.15-.679.15-.199.301-.768.983-.941 1.184-.173.199-.347.227-.648.077-.301-.15-1.272-.469-2.423-1.496-.895-.798-1.498-1.784-1.675-2.084-.173-.3-.018-.462.13-.61.135-.133.301-.35.451-.524.151-.174.199-.298.301-.497.101-.198.05-.371-.025-.521-.075-.15-.678-1.635-.93-2.246-.244-.594-.494-.513-.679-.522-.175-.009-.376-.01-.578-.01-.201 0-.527.075-.803.376-.277.301-1.056 1.031-1.056 2.516s1.08 2.912 1.231 3.111c.15.2 2.126 3.245 5.15 4.553.72.311 1.281.496 1.719.636.724.23 1.381.197 1.902.12.581-.086 1.785-.73 2.035-1.432.251-.703.251-1.306.176-1.432-.075-.126-.277-.199-.577-.349z" />
                                </svg>
                                <span>WhatsApp</span>
                            </a>

                            {/* Mobile Toggle */}
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="lg:hidden w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gold-500 hover:bg-gold-600 active:bg-gold-700 flex items-center justify-center text-white shadow-md shadow-gold-500/30 transition-all flex-shrink-0"
                                aria-label="Menú"
                                aria-expanded={isMobileMenuOpen}
                                type="button"
                            >
                                <MdOutlineMenu className="w-7 h-7 sm:w-8 sm:h-8" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
            <div 
                className="lg:hidden fixed inset-0 top-0 z-[105] bg-white dark:bg-white"
                role="navigation"
                onClick={(e) => e.target === e.currentTarget && setIsMobileMenuOpen(false)}
            >
                <div className="flex flex-col h-full">
                    <div className="flex px-3 xs:px-4 sm:px-6 py-3 justify-between items-center border-b border-gray-100 dark:border-gray-200 bg-white dark:bg-white flex-shrink-0">
                        <span className="font-brand font-black text-base xs:text-lg sm:text-xl">Menú</span>
                        <button 
                            onClick={() => setIsMobileMenuOpen(false)} 
                            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gold-500 hover:bg-gold-600 active:bg-gold-700 flex items-center justify-center flex-shrink-0 text-white shadow-md shadow-gold-500/30 transition-all"
                            aria-label="Cerrar menú"
                            type="button"
                        >
                            <MdOutlineClose className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                        </button>
                    </div>
                    <div className="flex-1 overflow-y-auto px-3 xs:px-4 sm:px-6 py-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="flex items-center gap-3 sm:gap-4 py-4 sm:py-5 px-3 sm:px-4 mb-2 text-base xs:text-lg sm:text-lg font-brand font-bold text-black dark:text-gray-900 uppercase tracking-wide hover:bg-gold-50 dark:hover:bg-gold-100 hover:text-gold-600 dark:hover:text-gold-600 rounded-lg transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <span className="text-black text-xl xs:text-2xl sm:text-2xl flex-shrink-0">{link.icon}</span>
                                <span className="flex-1 text-left">{link.name}</span>
                                {link.badge && (
                                    <span className="text-[10px] xs:text-[11px] font-black bg-gold-500 text-white px-2 py-1 rounded-full flex-shrink-0">
                                        {link.badge}
                                    </span>
                                )}
                            </Link>
                        ))}
                    </div>
                    <div className="p-3 xs:p-4 sm:p-6 border-t border-gray-100 dark:border-gray-200 flex-shrink-0 bg-white dark:bg-white">
                        <a href={waLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 w-full bg-green-500 hover:bg-green-600 active:bg-green-700 text-white py-3 xs:py-4 sm:py-4 px-4 rounded-lg font-brand font-bold text-sm xs:text-base sm:text-base uppercase tracking-widest shadow-lg transition-all active:scale-95">
                            <svg className="w-4 h-4 xs:w-5 xs:h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884 0 2.225.569 3.891 1.745 5.534l-.999 3.648 3.743-.981zm11.387-5.464c-.301-.15-1.785-.881-2.06-.982-.278-.1-.48-.15-.679.15-.199.301-.768.983-.941 1.184-.173.199-.347.227-.648.077-.301-.15-1.272-.469-2.423-1.496-.895-.798-1.498-1.784-1.675-2.084-.173-.3-.018-.462.13-.61.135-.133.301-.35.451-.524.151-.174.199-.298.301-.497.101-.198.05-.371-.025-.521-.075-.15-.678-1.635-.93-2.246-.244-.594-.494-.513-.679-.522-.175-.009-.376-.01-.578-.01-.201 0-.527.075-.803.376-.277.301-1.056 1.031-1.056 2.516s1.08 2.912 1.231 3.111c.15.2 2.126 3.245 5.15 4.553.72.311 1.281.496 1.719.636.724.23 1.381.197 1.902.12.581-.086 1.785-.73 2.035-1.432.251-.703.251-1.306.176-1.432-.075-.126-.277-.199-.577-.349z" />
                            </svg>
                            <span>Asesoría</span>
                        </a>
                    </div>
                </div>
            </div>
            )}
        </header>
    );
};

export default Navbar;
