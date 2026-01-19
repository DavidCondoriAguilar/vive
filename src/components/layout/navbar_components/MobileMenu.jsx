import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineClose, MdOutlineSearch, MdKeyboardArrowDown } from 'react-icons/md';

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
        <div className={`fixed inset-0 z-[200] ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
            {/* Backdrop */}
            <div
                className={`fixed inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
                onClick={onClose}
            />

            {/* Sidebar */}
            <div
                className={`fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white dark:bg-zinc-950 shadow-2xl transform transition-transform duration-500 cubic-bezier(0.4, 0, 0.2, 1) ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <div className="flex flex-col h-full">
                    {/* Header */}
                    <div className="flex px-6 py-6 justify-between items-center border-b border-gray-100 dark:border-white/5">
                        <span className="font-display font-black text-2xl text-gray-900 dark:text-white uppercase tracking-tighter">Menú</span>
                        <button
                            onClick={onClose}
                            className="w-12 h-12 rounded-full bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-gray-400 flex items-center justify-center transition-all"
                        >
                            <MdOutlineClose className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Search Field */}
                    <div className="px-6 py-4 bg-gray-50/50 dark:bg-white/2">
                        <div className="flex items-center bg-white dark:bg-zinc-900 border border-gray-200 dark:border-white/10 px-4 py-3 rounded-2xl">
                            <MdOutlineSearch className="w-5 h-5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Buscar catálogo..."
                                className="w-full ml-3 bg-transparent border-none outline-none text-sm text-gray-700 dark:text-white font-medium"
                            />
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex-1 overflow-y-auto px-6 py-4 space-y-2">
                        {navLinks.map((link) => (
                            <div key={link.name} className="border-b border-gray-50 dark:border-white/5 last:border-0 pb-2 mb-2">
                                {link.subLinks ? (
                                    <>
                                        <button
                                            onClick={() => toggleSubMenu(link.name)}
                                            className="flex items-center w-full py-4 text-left group"
                                        >
                                            <div className="w-10 h-10 rounded-xl bg-gray-50 dark:bg-white/5 text-gray-400 flex items-center justify-center transition-colors group-hover:text-gold-500">
                                                {link.icon}
                                            </div>
                                            <span className="flex-1 ml-4 text-sm font-black text-gray-900 dark:text-white uppercase tracking-widest">
                                                {link.name}
                                            </span>
                                            <MdKeyboardArrowDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${openSubMenu === link.name ? 'rotate-180' : ''}`} />
                                        </button>

                                        {/* SubLinks Accordion */}
                                        <div className={`overflow-hidden transition-all duration-300 ${openSubMenu === link.name ? 'max-h-[500px] mb-4' : 'max-h-0'}`}>
                                            <div className="pl-14 space-y-4">
                                                {link.subLinks.map((sub) => (
                                                    <Link
                                                        key={sub.name}
                                                        to={sub.path}
                                                        className="block text-[10px] font-black text-gray-400 hover:text-gold-500 uppercase tracking-[0.2em] transition-colors"
                                                        onClick={onClose}
                                                    >
                                                        {sub.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <Link
                                        to={link.path}
                                        className="flex items-center py-4 group"
                                        onClick={onClose}
                                    >
                                        <div className="w-10 h-10 rounded-xl bg-gray-50 dark:bg-white/5 text-gray-400 flex items-center justify-center transition-colors group-hover:text-gold-500">
                                            {link.icon}
                                        </div>
                                        <span className="ml-4 text-sm font-black text-gray-900 dark:text-white uppercase tracking-widest">
                                            {link.name}
                                        </span>
                                        {link.badge && (
                                            <span className="ml-auto text-[8px] font-black px-2 py-1 rounded-full bg-gold-500 text-white uppercase">
                                                {link.badge}
                                            </span>
                                        )}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* WhatsApp CTA */}
                    <div className="p-6 border-t border-gray-100 dark:border-white/5 bg-gray-50 dark:bg-white/2">
                        <a href={waLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 w-full bg-green-500 text-white py-4 rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl shadow-green-500/20 active:scale-95 transition-all">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884 0 2.225.569 3.891 1.745 5.534l-.999 3.648 3.743-.981zm11.387-5.464c-.301-.15-1.785-.881-2.06-.982-.278-.1-.48-.15-.679.15-.199.301-.768.983-.941 1.184-.173.199-.347.227-.648.077-.301-.15-1.272-.469-2.423-1.496-.895-.798-1.498-1.784-1.675-2.084-.173-.3-.018-.462.13-.61.135-.133.301-.35.451-.524.151-.174.199-.298.301-.497.101-.198.05-.371-.025-.521-.075-.15-.678-1.635-.93-2.246-.244-.594-.494-.513-.679-.522-.175-.009-.376-.01-.578-.01-.201 0-.527.075-.803.376-.277.301-1.056 1.031-1.056 2.516s1.08 2.912 1.231 3.111c.15.2 2.126 3.245 5.15 4.553.72.311 1.281.496 1.719.636.724.23 1.381.197 1.902.12.581-.086 1.785-.73 2.035-1.432.251-.703.251-1.306.176-1.432-.075-.126-.277-.199-.577-.349z" />
                            </svg>
                            <span>WhatsApp Asesoría</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileMenu;
