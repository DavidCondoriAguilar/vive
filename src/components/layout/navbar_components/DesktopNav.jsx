import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MdKeyboardArrowDown } from 'react-icons/md';

const DesktopNav = ({ navLinks, currentPath }) => {
    const [activeMenu, setActiveMenu] = useState(null);
    const navRef = useRef(null);
    const location = useLocation();
    const timeoutRef = useRef(null);

    // Close menu when location changes
    useEffect(() => {
        setActiveMenu(null);
    }, [location]);

    const handleMouseEnter = (name) => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setActiveMenu(name);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setActiveMenu(null);
        }, 300); // Increased grace period
    };

    return (
        <nav ref={navRef} className="hidden lg:flex items-center gap-1 xl:gap-4 h-full relative">
            {navLinks.map((link) => {
                const isOpen = activeMenu === link.name;
                const hasDropdown = link.subLinks || link.megaMenu;

                return (
                    <div
                        key={link.name}
                        className={`${link.megaMenu ? '' : 'relative'} h-full flex items-center`}
                        onMouseEnter={() => handleMouseEnter(link.name)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <Link
                            to={link.path}
                            className={`px-4 py-2 text-[12px] font-display font-black uppercase tracking-[0.2em] transition-all duration-300 rounded-xl flex items-center gap-2 z-50 ${currentPath === link.path || isOpen
                                ? 'text-gold-500 bg-gray-50 dark:bg-white/5'
                                : 'text-gray-900 dark:text-white hover:text-gold-500 hover:bg-gray-50 dark:hover:bg-white/5'
                                }`}
                            onClick={() => setActiveMenu(null)}
                        >
                            <span>{link.name}</span>
                            {hasDropdown && (
                                <MdKeyboardArrowDown
                                    className={`w-4 h-4 transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`}
                                />
                            )}

                            {/* Luxury Badge */}
                            {link.badge && (
                                <span className="px-2 py-0.5 text-[7px] font-black rounded-full shadow-lg text-white bg-gold-500 animate-pulse">
                                    {link.badge}
                                </span>
                            )}
                        </Link>

                        {/* Dropdown/MegaMenu Container - Refined Positioning */}
                        {hasDropdown && (
                            <div
                                className={`absolute top-full left-1/2 -translate-x-1/2 pt-12 transition-all duration-700 cubic-bezier(0.23, 1, 0.32, 1) z-50 ${isOpen
                                    ? 'opacity-100 visible translate-y-0 scale-100'
                                    : 'opacity-0 invisible translate-y-8 scale-[0.98] blur-sm pointer-events-none'
                                    }`}
                                style={{
                                    // Seamless hover bridge
                                    paddingTop: '40px',
                                    marginTop: '-20px'
                                }}
                            >
                                {link.megaMenu ? (
                                    <div className={`shadow-[0_50px_120px_rgba(0,0,0,0.4)] dark:shadow-[0_50px_120px_rgba(0,0,0,0.6)] rounded-[4rem] border border-white/20 dark:border-white/5 p-16 flex gap-8 w-screen max-w-[900px] overflow-hidden relative ${link.image ? 'bg-transparent' : 'bg-white dark:bg-black'}`}>
                                        {/* Elite Visual Accents */}
                                        <div className="absolute inset-0 bg-gradient-to-b from-gold-500/10 to-transparent pointer-events-none opacity-30"></div>

                                        {link.image && (
                                            <div className="absolute inset-0 z-0 pointer-events-none">
                                                <img
                                                    src={link.image}
                                                    alt={link.name}
                                                    className="w-full h-full object-cover"
                                                />
                                                <div className="absolute inset-0 bg-black/50 dark:bg-black/80"></div>
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30"></div>
                                            </div>
                                        )}

                                        <div className="flex-1 flex gap-8 relative z-10 justify-center items-start">
                                            {link.megaMenu.map((group) => (
                                                <div key={group.title} className="flex-1 min-w-[180px] px-4">
                                                    <h4 className="text-[11px] font-black text-gold-500 uppercase tracking-[0.5em] mb-6 border-b-2 border-gold-500/20 pb-3 text-center">
                                                        {group.title}
                                                    </h4>
                                                    <div className="flex flex-col gap-3 items-center">
                                                        {group.items.map((item) => (
                                                            <Link
                                                                key={item.name}
                                                                to={item.path}
                                                                className="text-[14px] font-bold text-white hover:text-gold-500 transition-all py-1.5 block leading-tight hover:translate-x-2 transform duration-300 text-center"
                                                                onClick={() => setActiveMenu(null)}
                                                            >
                                                                {item.name}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ) : (
                                    <div className="bg-white dark:bg-zinc-950 shadow-2xl rounded-3xl border border-gray-100 dark:border-white/10 py-6 min-w-[260px] overflow-hidden">
                                        {link.subLinks.map((sub) => (
                                            <Link
                                                key={sub.name}
                                                to={sub.path}
                                                className="block px-8 py-3.5 text-[10px] font-black uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400 hover:text-gold-500 hover:bg-gray-50 dark:hover:bg-white/5 transition-all"
                                                onClick={() => setActiveMenu(null)}
                                            >
                                                {sub.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                );
            })}
        </nav>
    );
};

export default DesktopNav;
