import React from 'react';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowDown } from 'react-icons/md';

const DesktopNav = ({ navLinks, currentPath }) => {
    return (
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
                <div key={link.name} className="relative group/nav">
                    <Link
                        to={link.path}
                        className={`px-3 py-2 text-[11px] font-brand font-bold uppercase tracking-[0.15em] transition-all duration-300 rounded-lg flex items-center gap-1.5 ${currentPath === link.path
                            ? 'text-gold-600 bg-gold-50 dark:bg-gold-100 dark:text-gold-700'
                            : 'text-gray-900 dark:text-gray-700 hover:text-gold-600 hover:bg-gray-50 dark:hover:bg-gray-100'
                            }`}
                    >
                        <span>{link.name}</span>
                        {link.subLinks && <MdKeyboardArrowDown className="w-4 h-4 transition-transform duration-300 group-hover/nav:rotate-180" />}

                        {/* Badge */}
                        {link.badge && (
                            <span className="px-1.5 py-0.5 text-[7px] font-black rounded-full shadow-sm text-white bg-gold-500">
                                {link.badge}
                            </span>
                        )}
                    </Link>

                    {/* Dropdown Menu */}
                    {link.subLinks && (
                        <div className="absolute top-full left-0 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover/nav:opacity-100 group-hover/nav:translate-y-0 group-hover/nav:pointer-events-auto transition-all duration-300 z-50">
                            <div className="bg-white dark:bg-zinc-900 shadow-2xl rounded-2xl border border-gray-100 dark:border-white/5 py-4 min-w-[220px] overflow-hidden">
                                {link.subLinks.map((sub) => (
                                    <Link
                                        key={sub.name}
                                        to={sub.path}
                                        className="block px-6 py-2.5 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 hover:text-gold-500 hover:bg-gray-50 dark:hover:bg-white/5 transition-all"
                                    >
                                        {sub.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Hover Underline */}
                    {!link.badge && !link.subLinks && currentPath !== link.path && (
                        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-8 h-[2px] bg-gold-500 transform scale-x-0 transition-transform duration-300 origin-center group-hover/nav:scale-x-100"></div>
                    )}
                </div>
            ))}
        </nav>
    );
};

export default DesktopNav;
