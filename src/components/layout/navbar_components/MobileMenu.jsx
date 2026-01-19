import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineClose, MdOutlineSearch } from 'react-icons/md';

const MobileMenu = ({ isOpen, onClose, navLinks, waLink }) => {
    // Prevent scrolling when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    return (
        <div >
            {/* Backdrop */}
            <div
                className={`fixed inset-0 z-[104] bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                onClick={onClose}
            />

            {/* Sidebar */}
            <div
                className={`fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white dark:bg-white z-[105] shadow-2xl transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <div className="flex flex-col h-full bg-white dark:bg-white">
                    {/* Header */}
                    <div className="flex px-5 py-4 justify-between items-center border-b border-gray-100 dark:border-gray-200">
                        <span className="font-black text-xl text-gray-900" style={{fontFamily: "'Space Grotesk', 'Playfair Display', sans-serif"}}>Menú</span>
                        <button
                            onClick={onClose}
                            className="w-10 h-10 rounded-full bg-gray-100 text-gray-500 hover:bg-red-50 hover:text-red-500 flex items-center justify-center transition-all"
                            aria-label="Cerrar menú"
                        >
                            <MdOutlineClose className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Search Field for Mobile */}
                    <div className="px-5 py-4 bg-gray-50/50">
                        <div className="flex items-center bg-white border border-gray-200 px-3 py-2.5 rounded-lg focus-within:border-gold-500 focus-within:ring-1 focus-within:ring-gold-500/20 transition-all">
                            <MdOutlineSearch className="w-5 h-5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Buscar productos..."
                                className="w-full ml-2 bg-transparent border-none outline-none text-sm text-gray-700 font-medium"
                            />
                        </div>
                    </div>

                    {/* Links */}
                    <div className="flex-1 overflow-y-auto px-5 py-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="flex items-center gap-4 py-4 border-b border-gray-50 last:border-0 group"
                                onClick={onClose}
                            >
                                <span className="w-10 h-10 rounded-lg bg-gray-50 text-gray-500 flex items-center justify-center group-hover:bg-gold-500 group-hover:text-white transition-colors duration-300">
                                    {link.icon}
                                </span>
                                <span className="flex-1 text-base font-bold text-gray-900 group-hover:text-gold-600 transition-colors uppercase tracking-wide" style={{fontFamily: "'Space Grotesk', 'Playfair Display', sans-serif"}}>
                                    {link.name}
                                </span>
                                {link.badge && (
                                    <span className={`text-[10px] font-black px-2 py-0.5 rounded-full text-white ${link.badge.includes('%') ? 'bg-red-500' : 'bg-gold-500'}`} style={{fontFamily: "'Space Grotesk', 'Playfair Display', sans-serif"}}>
                                        {link.badge}
                                    </span>
                                )}
                            </Link>
                        ))}
                    </div>

                    {/* Footer / Whatsapp */}
                    <div className="p-5 border-t border-gray-100 bg-gray-50">
                        <a href={waLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white py-3.5 rounded-xl font-bold text-sm uppercase tracking-wider shadow-lg shadow-green-500/20 transition-all active:scale-95" style={{fontFamily: "'Space Grotesk', 'Playfair Display', sans-serif"}}>
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884 0 2.225.569 3.891 1.745 5.534l-.999 3.648 3.743-.981zm11.387-5.464c-.301-.15-1.785-.881-2.06-.982-.278-.1-.48-.15-.679.15-.199.301-.768.983-.941 1.184-.173.199-.347.227-.648.077-.301-.15-1.272-.469-2.423-1.496-.895-.798-1.498-1.784-1.675-2.084-.173-.3-.018-.462.13-.61.135-.133.301-.35.451-.524.151-.174.199-.298.301-.497.101-.198.05-.371-.025-.521-.075-.15-.678-1.635-.93-2.246-.244-.594-.494-.513-.679-.522-.175-.009-.376-.01-.578-.01-.201 0-.527.075-.803.376-.277.301-1.056 1.031-1.056 2.516s1.08 2.912 1.231 3.111c.15.2 2.126 3.245 5.15 4.553.72.311 1.281.496 1.719.636.724.23 1.381.197 1.902.12.581-.086 1.785-.73 2.035-1.432.251-.703.251-1.306.176-1.432-.075-.126-.277-.199-.577-.349z" />
                            </svg>
                            <span>Asesoría personalizada</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileMenu;
