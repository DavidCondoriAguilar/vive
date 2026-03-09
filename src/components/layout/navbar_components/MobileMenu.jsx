import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineClose, MdOutlineSearch, MdKeyboardArrowDown } from 'react-icons/md';
import { FaWhatsapp, FaTimes } from 'react-icons/fa';

const MobileMenu = ({ isOpen, onClose, navLinks, waLink }) => {
    const [openSubMenu, setOpenSubMenu] = useState(null);

    // Prevent scrolling when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
            setOpenSubMenu(null); // Reset on close
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    const toggleSubMenu = (name) => {
        setOpenSubMenu(openSubMenu === name ? null : name);
    };

    return (
        <div className={`lg:hidden fixed inset-0 z-[250] ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
            {/* Backdrop */}
            <div
                className={`fixed inset-0 bg-black/40 backdrop-blur-md transition-opacity duration-700 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
                onClick={onClose}
            />

            {/* Sidebar */}
            <div
                className={`fixed top-0 right-0 h-[100dvh] w-[85%] max-w-sm bg-white dark:bg-[#080808] shadow-[0_0_50px_rgba(0,0,0,0.3)] transform transition-transform duration-700 cubic-bezier(0.19, 1, 0.22, 1) ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <div className="flex flex-col h-full">
                    {/* Header */}
                    <div className="px-8 pt-10 pb-6 flex items-center justify-between">
                        <div className="space-y-1">
                            <h2 className="text-3xl font-black uppercase tracking-tighter text-gray-900 dark:text-white">Menú</h2>
                            <p className="text-[10px] font-black text-vive-500 uppercase tracking-[0.3em]">Explorar Galería</p>
                        </div>
                        <button
                            onClick={onClose}
                            className="w-12 h-12 rounded-full border border-gray-100 dark:border-white/5 flex items-center justify-center text-gray-900 dark:text-white active:scale-90 transition-transform"
                        >
                            <FaTimes className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Navigation Links - Enhanced Scroll Handling */}
                    <div className="flex-1 overflow-y-auto px-8 py-6 space-y-8 custom-scrollbar overscroll-contain touch-pan-y">
                        <div className="space-y-8 pb-12"> {/* Wrapper for extra bottom clearance */}
                            {navLinks.map((link) => (
                                <div key={link.name} className="space-y-4">
                                    {(link.subLinks || link.megaMenu) ? (
                                        <>
                                            <button
                                                onClick={() => toggleSubMenu(link.name)}
                                                className="flex items-center w-full group py-2"
                                            >
                                                <span className="flex-1 text-[13px] font-black text-gray-900 dark:text-white uppercase tracking-[0.2em] text-left">
                                                    {link.name}
                                                </span>
                                                <MdKeyboardArrowDown className={`w-5 h-5 text-gray-400 transition-transform duration-500 ${openSubMenu === link.name ? 'rotate-180 text-vive-500' : ''}`} />
                                            </button>

                                            {/* Accordion Content */}
                                            <div className={`overflow-hidden transition-all duration-700 cubic-bezier(0.19, 1, 0.22, 1) ${openSubMenu === link.name ? 'max-h-[1500px] mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                                                <div className="space-y-8 ml-2 border-l border-gray-100 dark:border-white/5 pl-6">
                                                    {link.megaMenu ? (
                                                        link.megaMenu.map((group) => (
                                                            <div key={group.title} className="space-y-4">
                                                                <h5 className="text-[9px] font-black text-vive-500 uppercase tracking-[0.3em]">
                                                                    {group.title}
                                                                </h5>
                                                                <div className="space-y-4">
                                                                    {group.items.map((item) => (
                                                                        <Link
                                                                            key={item.name}
                                                                            to={item.path}
                                                                            className="block text-[13px] font-bold text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors py-1"
                                                                            onClick={onClose}
                                                                        >
                                                                            {item.name}
                                                                        </Link>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        ))
                                                    ) : (
                                                        link.subLinks.map((sub) => (
                                                            <Link
                                                                key={sub.name}
                                                                to={sub.path}
                                                                className="block text-[11px] font-black text-gray-400 hover:text-black dark:hover:text-white uppercase tracking-[0.15em] transition-colors py-1"
                                                                onClick={onClose}
                                                            >
                                                                {sub.name}
                                                            </Link>
                                                        ))
                                                    )}
                                                </div>
                                            </div>
                                        </>
                                    ) : (
                                        <Link
                                            to={link.path}
                                            className="flex items-center group py-2"
                                            onClick={onClose}
                                        >
                                            <span className="flex-1 text-[13px] font-black text-gray-900 dark:text-white uppercase tracking-[0.2em]">
                                                {link.name}
                                            </span>
                                            {link.badge && (
                                                <span className="text-[8px] font-black px-2.5 py-1 rounded-full bg-vive-500 text-white uppercase ml-4">
                                                    {link.badge}
                                                </span>
                                            )}
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA Area */}
                    <div className="p-8 border-t border-gray-100 dark:border-white/5 space-y-4 bg-white/50 dark:bg-[#080808]/50 backdrop-blur-md">
                        <a href={waLink} target="_blank" rel="noopener noreferrer" className="h-14 flex items-center justify-center gap-3 w-full bg-black dark:bg-white text-white dark:text-black rounded-xl font-black text-[10px] uppercase tracking-[0.3em] active:scale-95 transition-all">
                            <FaWhatsapp className="w-4 h-4" />
                            Asesoría Vive
                        </a>
                        <p className="text-[9px] text-center text-gray-400 font-bold uppercase tracking-widest opacity-60">
                            Atención industrial de nivel senior
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileMenu;
