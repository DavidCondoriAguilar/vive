import React, { useState } from 'react';
import { MdOutlineSearch, MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';
import { FaShoppingCart } from 'react-icons/fa';
import { useTheme } from '@/hooks/useTheme';
import { useCart } from '@/contexts/CartContext';
import SearchBar from '@/components/search/SearchBar';

const NavActions = ({ toggleMobileMenu, isMobileMenuOpen, waLink }) => {
    const { theme, toggleTheme } = useTheme();
    const { getTotalItems, setIsCartOpen } = useCart();
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    return (
        <div className="flex items-center gap-1 sm:gap-2.5 lg:gap-4 ml-auto flex-shrink-0">
            {/* Search Button - Mobile */}
            <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="lg:hidden w-9 h-9 flex items-center justify-center rounded-lg text-gray-500 hover:text-gold-500 hover:bg-gray-50 dark:hover:bg-white/5 transition-all duration-300"
                aria-label="Buscar productos"
            >
                <MdOutlineSearch className="w-4 h-4" />
            </button>
            {/* Theme Toggle - Optimized */}
            <button
                onClick={toggleTheme}
                className="w-9 h-9 flex items-center justify-center rounded-lg text-gray-500 hover:text-gold-500 hover:bg-gray-50 dark:hover:bg-white/5 transition-all duration-300"
                aria-label="Cambiar tema"
            >
                {theme === 'light' ? (
                    <MdOutlineDarkMode className="w-4 h-4" />
                ) : (
                    <MdOutlineLightMode className="w-4 h-4" />
                )}
            </button>

            {/* Cart Button - Optimized */}
            <button
                onClick={() => setIsCartOpen(true)}
                className="relative group w-10 h-10 flex items-center justify-center rounded-lg text-gray-700 hover:text-gold-500 hover:bg-gray-50 dark:hover:bg-white/5 transition-all duration-300 flex-shrink-0"
                aria-label="Carrito de compras"
            >
                <div className="relative flex items-center justify-center">
                    {/* Minimalist Professional Bag Icon */}
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>

                    {/* Professional Item Counter */}
                    {getTotalItems() > 0 && (
                        <span className="absolute -top-1.5 -right-1.5 flex h-3.5 w-3.5 sm:h-4 sm:w-4 items-center justify-center rounded-full bg-gold-500 text-[7px] sm:text-[8px] font-black leading-none text-white shadow-lg shadow-gold-500/30 border-2 border-white dark:border-zinc-900 select-none transform transition-transform group-hover:scale-125">
                            {getTotalItems() > 9 ? '+' : getTotalItems()}
                        </span>
                    )}
                </div>
            </button>

            {/* WhatsApp Button - Desktop Only - Minimalista Integrado */}
            <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:flex items-center justify-center w-9 h-9 rounded-lg text-gray-500 hover:text-green-500 hover:bg-gray-50 dark:hover:bg-white/5 transition-all duration-300"
                aria-label="WhatsApp"
            >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884 0 2.225.569 3.891 1.745 5.534l-.999 3.648 3.743-.981zm11.387-5.464c-.301-.15-1.785-.881-2.06-.982-.278-.1-.48-.15-.679.15-.199.301-.768.983-.941 1.184-.173.199-.347.227-.648.077-.301-.15-1.272-.469-2.423-1.496-.895-.798-1.498-1.784-1.675-2.084-.173-.3-.018-.462.13-.61.135-.133.301-.35.451-.524.151-.174.199-.298.301-.497.101-.198.05-.371-.025-.521-.075-.15-.678-1.635-.93-2.246-.244-.594-.494-.513-.679-.522-.175-.009-.376-.01-.578-.01-.201 0-.527.075-.803.376-.277.301-1.056 1.031-1.056 2.516s1.08 2.912 1.231 3.111c.15.2 2.126 3.245 5.15 4.553.72.311 1.281.496 1.719.636.724.23 1.381.197 1.902.12.581-.086 1.785-.73 2.035-1.432.251-.703.251-1.306.176-1.432-.075-.126-.277-.199-.577-.349z" />
                </svg>
            </a>

            {/* Mobile Toggle - Optimized */}
            <button
                onClick={toggleMobileMenu}
                className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-black dark:hover:bg-gray-100 transition-all active:scale-95 flex-shrink-0"
                aria-label="Menú"
                aria-expanded={isMobileMenuOpen}
                type="button"
            >
                <div className="w-4 flex flex-col items-end gap-1">
                    <span className={`h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'w-4 translate-y-1.5 rotate-45' : 'w-4'}`} />
                    <span className={`h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'w-2.5'}`} />
                    <span className={`h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'w-4 -translate-y-1.5 -rotate-45' : 'w-3'}`} />
                </div>
            </button>

            {/* Mobile Search Bar */}
            {isSearchOpen && (
                <div className="lg:hidden absolute top-full left-0 right-0 mt-2 p-4 bg-white dark:bg-black border-b border-gray-200 dark:border-white/10 shadow-lg">
                    <SearchBar placeholder="Buscar productos..." />
                </div>
            )}
        </div>
    );
};

export default NavActions;
