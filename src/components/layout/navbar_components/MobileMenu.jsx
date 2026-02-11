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
        <div className={`fixed inset-0 z-[250] ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
            {/* Backdrop */}
            <div
                className={`fixed inset-0 bg-black/40 backdrop-blur-md transition-opacity duration-700 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
                onClick={onClose}
            />

            {/* Sidebar */}
            <div
                className={`fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white dark:bg-[#080808] shadow-2xl transform transition-transform duration-1000 cubic-bezier(0.19, 1, 0.22, 1) ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <div className="flex flex-col h-full">
                    {/* Header */}
                    <div className="px-10 py-12 flex items-center justify-between">
                        <div className="space-y-1">
                            <h2 className="text-3xl font-black uppercase tracking-tighter text-gray-900 dark:text-white">Menú</h2>
                            <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em]">Explorar Galería</p>
                        </div>
                        <button
                            onClick={onClose}
                            className="w-10 h-10 rounded-full border border-gray-100 dark:border-white/5 flex items-center justify-center text-gray-400"
                        >
                            <FaTimes />
                        </button>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex-1 overflow-y-auto px-10 py-4 space-y-8 custom-scrollbar">
                        {navLinks.map((link) => (
                            <div key={link.name} className="space-y-4">
                                {(link.subLinks || link.megaMenu) ? (
                                    <>
                                        <button
                                            onClick={() => toggleSubMenu(link.name)}
                                            className="flex items-center w-full group"
                                        >
                                            <span className="flex-1 text-[11px] font-black text-gray-900 dark:text-white uppercase tracking-[0.3em]">
                                                {link.name}
                                            </span>
                                            <MdKeyboardArrowDown className={`w-4 h-4 text-gray-400 transition-transform duration-500 ${openSubMenu === link.name ? 'rotate-180' : ''}`} />
                                        </button>

                                        {/* Accordion Content */}
                                        <div className={`overflow-hidden transition-all duration-700 cubic-bezier(0.19, 1, 0.22, 1) ${openSubMenu === link.name ? 'max-h-[1200px] mb-8' : 'max-h-0'}`}>
                                            <div className="pt-6 space-y-8 ml-4 border-l border-gray-50 dark:border-white/5 pl-8">
                                                {link.megaMenu ? (
                                                    link.megaMenu.map((group) => (
                                                        <div key={group.title} className="space-y-4">
                                                            <h5 className="text-[9px] font-black text-vive-600 uppercase tracking-[0.4em]">
                                                                {group.title}
                                                            </h5>
                                                            <div className="space-y-4">
                                                                {group.items.map((item) => (
                                                                    <Link
                                                                        key={item.name}
                                                                        to={item.path}
                                                                        className="block text-[12px] font-bold text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
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
                                                            className="block text-[10px] font-black text-gray-400 hover:text-black dark:hover:text-white uppercase tracking-[0.2em] transition-colors"
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
                                        className="flex items-center group"
                                        onClick={onClose}
                                    >
                                        <span className="flex-1 text-[11px] font-black text-gray-900 dark:text-white uppercase tracking-[0.3em]">
                                            {link.name}
                                        </span>
                                        {link.badge && (
                                            <span className="text-[7px] font-black px-2 py-0.5 rounded-full bg-vive-600 text-white uppercase ml-4">
                                                {link.badge}
                                            </span>
                                        )}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="p-10 border-t border-gray-100 dark:border-white/5 space-y-4">
                        <a href={waLink} target="_blank" rel="noopener noreferrer" className="h-16 flex items-center justify-center gap-3 w-full bg-black dark:bg-white text-white dark:text-black rounded-[2rem] font-black text-[10px] uppercase tracking-[0.4em] shadow-2xl shadow-black/10 active:scale-95 transition-all">
                            <FaWhatsapp className="w-4 h-4" />
                            Asesoría Vive
                        </a>
                        <p className="text-[9px] text-center text-gray-400 font-bold uppercase tracking-widest opacity-50">
                            Atención personalizada de nivel senior
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileMenu;
