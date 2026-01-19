import React from 'react';
import { MdOutlineSearch, MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';
import { FaShoppingCart } from 'react-icons/fa';
import { useTheme } from '@/hooks/useTheme';
import { useCart } from '@/contexts/CartContext';

const NavActions = ({ toggleMobileMenu, isMobileMenuOpen, waLink }) => {
    const { theme, toggleTheme } = useTheme();
    const { getTotalItems, setIsCartOpen } = useCart();

    return (
        <div className="flex items-center gap-1.5 xs:gap-2 sm:gap-2 md:gap-3 lg:gap-4 ml-auto flex-shrink-0">

            {/* Theme Toggle - Mobile Responsive */}
            <button
                onClick={toggleTheme}
                className="w-5 h-5 sm:w-6 sm:h-6 min-w-[20px] min-h-[20px] sm:min-w-[24px] sm:min-h-[24px] rounded-full border border-gray-300 bg-white flex items-center justify-center text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-all flex-shrink-0 shadow-sm"
                aria-label="Cambiar tema"
            >
                {theme === 'light' ? (
                    <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                ) : (
                    <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                )}
            </button>

            {/* Cart Button - Ideal Size */}
            <button
                onClick={() => setIsCartOpen(true)}
                className="w-7 h-7 sm:w-8 sm:h-8 min-w-[28px] min-h-[28px] sm:min-w-[32px] sm:min-h-[32px] rounded-full border border-gray-300 bg-white flex items-center justify-center text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-all relative flex-shrink-0 shadow-sm"
                aria-label="Carrito de compras"
            >
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2a2 2 0 012-2h14z" />
                </svg>
                {getTotalItems() > 0 && (
                    <span className="absolute -top-1 -right-1 px-1.5 py-0.5 min-w-[20px] min-h-[20px] sm:min-w-[24px] sm:min-h-[24px] bg-red-600 text-white text-[10px] sm:text-[11px] font-bold rounded-full flex items-center justify-center shadow-sm border border-white">
                        <span className="truncate max-w-full">
                            {getTotalItems() > 99 ? '99+' : getTotalItems()}
                        </span>
                    </span>
                )}
            </button>

            {/* WhatsApp Button - Desktop */}
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

            {/* Mobile Toggle - Mobile Responsive */}
            <button
                onClick={toggleMobileMenu}
                className="lg:hidden w-5 h-5 sm:w-6 sm:h-6 min-w-[20px] min-h-[20px] sm:min-w-[24px] sm:min-h-[24px] bg-gray-900 hover:bg-black text-white flex items-center justify-center shadow-md transition-all flex-shrink-0 border border-gray-600"
                aria-label="Menú"
                aria-expanded={isMobileMenuOpen}
                type="button"
            >
                <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
        </div>
    );
};

export default NavActions;
