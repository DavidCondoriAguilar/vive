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
        }, 150); // Faster grace period for a snappier feel
    };

    return (
        <nav ref={navRef} className="hidden lg:flex items-center gap-1 xl:gap-2 h-full relative">
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
                            className={`px-6 py-2 text-[10px] font-black uppercase tracking-[0.3em] transition-all duration-500 rounded-full flex items-center gap-2 z-50 ${currentPath === link.path || isOpen
                                ? 'text-black dark:text-white bg-gray-50 dark:bg-white/5'
                                : 'text-gray-400 hover:text-black dark:hover:text-white'
                                }`}
                            onClick={() => setActiveMenu(null)}
                        >
                            <span>{link.name}</span>
                            {hasDropdown && (
                                <MdKeyboardArrowDown
                                    className={`w-3 h-3 transition-transform duration-700 ${isOpen ? 'rotate-180' : ''}`}
                                />
                            )}

                            {link.badge && (
                                <span className="px-2 py-0.5 text-[7px] font-black rounded-full text-white bg-vive-600">
                                    {link.badge}
                                </span>
                            )}
                        </Link>

                        {/* Dropdown/MegaMenu */}
                        {hasDropdown && (
                            <div
                                className={`absolute top-full left-1/2 -translate-x-1/2 pt-8 transition-all duration-1000 cubic-bezier(0.19, 1, 0.22, 1) z-50 ${isOpen
                                    ? 'opacity-100 visible translate-y-0 scale-100'
                                    : 'opacity-0 invisible translate-y-4 scale-[0.99] pointer-events-none'
                                    }`}
                            >
                                {link.megaMenu ? (
                                    <div className="relative bg-white dark:bg-[#080808] shadow-[0_40px_100px_rgba(0,0,0,0.2)] dark:shadow-[0_40px_100px_rgba(0,0,0,0.5)] rounded-[4rem] border border-gray-100 dark:border-white/5 p-16 flex gap-12 w-screen max-w-[1000px] overflow-hidden">
                                        {/* Modern Slanted Background for Resorte - Perfect 50/50 split */}
                                        {link.name === 'Resorte' && (
                                            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                                                <div
                                                    className="absolute top-0 -left-[20%] w-[70%] h-full bg-gradient-to-br from-vive-500 to-green-600 -skew-x-[15deg] origin-top opacity-100"
                                                    style={{
                                                        boxShadow: '40px 0 80px rgba(0,0,0,0.2)',
                                                        borderRight: '1px solid rgba(255,255,255,0.1)'
                                                    }}
                                                />
                                            </div>
                                        )}

                                        <div className="relative z-10 flex-1 flex gap-12 justify-center items-start">
                                            {link.megaMenu.map((group, idx) => {
                                                // Prime two columns are on the green background
                                                const isOnGreen = link.name === 'Resorte' && idx < 2;
                                                return (
                                                    <div key={group.title} className="flex-1 space-y-8">
                                                        <h4 className={`text-[9px] font-black uppercase tracking-[0.4em] ${isOnGreen ? 'text-white' : 'text-vive-600'}`}>
                                                            {group.title}
                                                        </h4>
                                                        <div className="flex flex-col gap-4">
                                                            {group.items.map((item) => (
                                                                <Link
                                                                    key={item.name}
                                                                    to={item.path}
                                                                    className={`text-[12px] font-bold transition-all block leading-tight hover:translate-x-1 duration-500 ${isOnGreen ? 'text-white/90 hover:text-white' : 'text-gray-900 dark:text-white hover:text-vive-600'}`}
                                                                    onClick={() => setActiveMenu(null)}
                                                                >
                                                                    {item.name}
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                ) : (
                                    <div className="bg-white dark:bg-[#080808] shadow-2xl rounded-[2rem] border border-gray-100 dark:border-white/5 py-8 min-w-[280px]">
                                        {link.subLinks.map((sub) => (
                                            <Link
                                                key={sub.name}
                                                to={sub.path}
                                                className="block px-10 py-4 text-[9px] font-black uppercase tracking-[0.3em] text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-50 dark:hover:bg-white/5 transition-all"
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
