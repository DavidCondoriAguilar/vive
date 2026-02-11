import React, { useState } from 'react';
import { MdOutlineSearch, MdOutlineDarkMode, MdOutlineLightMode, MdOutlineShoppingCart } from 'react-icons/md';
import { FaWhatsapp } from 'react-icons/fa';
import { useTheme } from '@/hooks/useTheme';
import { useCart } from '@/contexts/CartContext';
import SearchBar from '@/components/search/SearchBar';

const NavActions = ({ toggleMobileMenu, isMobileMenuOpen, waLink }) => {
    const { theme, toggleTheme } = useTheme();
    const { getTotalItems, setIsCartOpen } = useCart();
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    return (
        <div className="flex items-center justify-end gap-1 flex-shrink-0 animate-fade-in lg:border-l border-gray-100 dark:border-white/5 lg:pl-8 -mr-4 sm:mr-0">
            {/* Search Button - Mobile */}
            <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="lg:hidden w-9 h-9 flex items-center justify-center rounded-lg text-gray-500 hover:text-vive-500 hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-300"
                aria-label="Buscar productos"
            >
                <MdOutlineSearch className="w-5 h-5" />
            </button>

            {/* Theme Toggle */}
            <button
                onClick={toggleTheme}
                className="w-9 h-9 flex items-center justify-center rounded-lg text-gray-500 hover:text-vive-500 hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-300"
                aria-label="Cambiar tema"
            >
                {theme === 'light' ? (
                    <MdOutlineDarkMode className="w-5 h-5" />
                ) : (
                    <MdOutlineLightMode className="w-5 h-5" />
                )}
            </button>

            {/* Cart Button */}
            <button
                onClick={() => setIsCartOpen(true)}
                className="relative group w-9 h-9 flex items-center justify-center rounded-lg text-gray-700 dark:text-gray-300 hover:text-vive-500 hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-300"
                aria-label="Carrito de compras"
            >
                <div className="relative flex items-center justify-center">
                    <MdOutlineShoppingCart className="w-5 h-5" />

                    {getTotalItems() > 0 && (
                        <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-vive-500 text-[8px] font-black leading-none text-white shadow-lg shadow-vive-500/30 border border-white dark:border-zinc-900 select-none transform transition-transform group-hover:scale-110">
                            {getTotalItems()}
                        </span>
                    )}
                </div>
            </button>

            {/* WhatsApp Button */}
            <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-lg text-vive-500 hover:text-vive-600 hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-300"
                aria-label="WhatsApp"
            >
                <FaWhatsapp className="w-5 h-5" />
            </a>

            {/* Mobile Toggle - Professional & Bold */}
            <button
                onClick={toggleMobileMenu}
                className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-black dark:bg-white text-white dark:text-gray-950 shadow-xl shadow-black/10 dark:shadow-white/5 active:scale-95 transition-all duration-300 ml-1"
                aria-label="Menú"
                aria-expanded={isMobileMenuOpen}
                type="button"
            >
                <div className="w-5 flex flex-col items-center gap-1">
                    <span className={`h-0.5 bg-current transition-all duration-500 rounded-full ${isMobileMenuOpen ? 'w-5 translate-y-1.5 rotate-45' : 'w-5'}`} />
                    <span className={`h-0.5 bg-current transition-all duration-500 rounded-full ${isMobileMenuOpen ? 'opacity-0' : 'w-3 ml-auto'}`} />
                    <span className={`h-0.5 bg-current transition-all duration-500 rounded-full ${isMobileMenuOpen ? 'w-5 -translate-y-1.5 -rotate-45' : 'w-5'}`} />
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
