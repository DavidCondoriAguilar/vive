import React from 'react';
import { Link } from 'react-router-dom';

const DesktopNav = ({ navLinks, currentPath }) => {
    return (
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
                <Link
                    key={link.name}
                    to={link.path}
                    className={`relative px-3 py-2 group/nav text-[11px] font-brand font-bold uppercase tracking-[0.15em] transition-all duration-300 rounded-lg flex items-center gap-2 ${currentPath === link.path
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
                    {!link.badge && currentPath !== link.path && (
                        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-8 h-[2px] bg-gold-500 transform scale-x-0 transition-transform duration-300 origin-center group-hover/nav:scale-x-100"></div>
                    )}
                </Link>
            ))}
        </nav>
    );
};

export default DesktopNav;
