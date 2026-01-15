import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoBase from '@assets/images/logos/logo-main.jpg';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [theme, setTheme] = useState('light');
    const location = useLocation();

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        setTheme(savedTheme);
        applyTheme(savedTheme);

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const applyTheme = (t) => {
        if (t === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        applyTheme(newTheme);
    };

    const navLinks = [
        {
            name: 'Colchones',
            path: '/categorias/colchones',
            badge: 'Más Vendidos',
            icon: (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5v2m0 0v2m0-2h2m-2 0H6m4 0v2m0-2h2" />
                </svg>
            )
        },
        {
            name: 'Camas',
            path: '/categorias/camas',
            badge: null,
            icon: (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            )
        },
        {
            name: 'Dormitorios',
            path: '/categorias/dormitorios',
            badge: 'Nuevo',
            icon: (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
            )
        },
        {
            name: 'Accesorios',
            path: '/categorias/accesorios',
            badge: null,
            icon: (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
            )
        },
        {
            name: 'Ofertas',
            path: '/ofertas',
            badge: '-30%',
            icon: (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
            )
        },
    ];

    const waMessage = encodeURIComponent("Hola Sueño Dorado, me gustaría recibir asesoría para mi próximo colchón.");
    const waLink = `https://wa.me/51989223448?text=${waMessage}`;

    return (
        <header className="fixed top-0 left-0 w-full z-50">
            {/* MAIN NAVBAR */}
            <div
                className={`transition-all duration-700 ${isScrolled
                    ? 'bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b border-gray-100 dark:border-white/5 py-4 mt-0'
                    : 'bg-white dark:bg-black py-6 md:py-8 mt-12 md:mt-12'
                    }`}
            >
                <div className="container mx-auto px-6 lg:px-20">
                    <div className="flex items-center justify-between">

                        {/* LOGO */}
                        <Link to="/" className="flex items-center gap-2 md:gap-3 group shrink-0">
                            <div className="w-[35px] h-[35px] md:w-[45px] md:h-[45px] overflow-hidden rounded-full border border-gray-100 dark:border-white/10 transition-transform group-hover:scale-105 bg-white p-1 shadow-sm">
                                <img src={logoBase} alt="Sueño Dorado" className="w-full h-full object-contain" />
                            </div>
                            <span className="text-gray-900 dark:text-white text-lg md:text-xl font-display font-black tracking-tighter leading-none uppercase">
                                Sueño <span className="text-gold-500">Dorado</span>
                            </span>
                        </Link>

                        {/* DESKTOP NAV */}
                        <nav className="hidden lg:flex items-center gap-4 xl:gap-8">
                            {navLinks.map((link) => (
                                <div key={link.name} className="relative group/nav py-4">
                                    <Link
                                        to={link.path}
                                        className={`flex items-center gap-2 relative text-[11px] font-display font-black uppercase tracking-[0.2em] transition-all duration-300 hover:scale-105 py-2 px-3 rounded-lg ${location.pathname === link.path
                                                ? 'text-gold-500 bg-gold-50 dark:bg-gold-900/20'
                                                : link.name === 'Ofertas'
                                                    ? 'text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20'
                                                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800'
                                            }`}
                                    >
                                        <span className="transition-transform duration-300 group-hover/nav:scale-110">
                                            {link.icon}
                                        </span>
                                        <span>{link.name}</span>

                                        {/* Badge */}
                                        {link.badge && (
                                            <span className={`absolute -top-1 -right-2 px-1.5 py-0.5 text-[8px] font-bold rounded-full animate-pulse-subtle ${link.badge === '-30%'
                                                    ? 'bg-red-500 text-white'
                                                    : 'bg-gold-500 text-white'
                                                }`}>
                                                {link.badge}
                                            </span>
                                        )}
                                    </Link>

                                    {/* MEGA MENU - Only for Colchones */}
                                    {link.name === 'Colchones' && (
                                        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-500 translate-y-4 group-hover/nav:translate-y-0 z-50">
                                            <div className="bg-white dark:bg-zinc-950 border border-gray-100 dark:border-white/10 p-8 rounded-[2rem] shadow-[0_30px_100px_rgba(0,0,0,0.2)] w-[500px] backdrop-blur-xl">
                                                <div className="grid grid-cols-2 gap-12">
                                                    {/* Column 1: Tamaños */}
                                                    <div>
                                                        <h4 className="text-[10px] font-black text-gold-500 uppercase tracking-[0.3em] mb-6 border-b border-gold-500/20 pb-2">Tamaños</h4>
                                                        <ul className="space-y-3">
                                                            {['Cuna', '1 Plaza', '1.5 Plazas', '2 Plazas', 'Queen', 'King', 'Todos'].map((size) => (
                                                                <li key={size}>
                                                                    <Link to={link.path} className="text-[10px] font-bold text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors flex items-center gap-2 group/item uppercase tracking-widest">
                                                                        <div className="w-1.5 h-1.5 rounded-full bg-gold-500 scale-0 group-hover/item:scale-100 transition-transform" />
                                                                        {size}
                                                                    </Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>

                                                    {/* Column 2: Líneas */}
                                                    <div>
                                                        <h4 className="text-[10px] font-black text-gold-500 uppercase tracking-[0.3em] mb-6 border-b border-gold-500/20 pb-2">Líneas</h4>
                                                        <ul className="space-y-3">
                                                            {['Royal', 'Pocket', 'Premium', 'Standard', 'Zebra'].map((line) => (
                                                                <li key={line}>
                                                                    <Link to={link.path} className="text-[10px] font-bold text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors flex items-center gap-2 group/item uppercase tracking-widest">
                                                                        <div className="w-1.5 h-1.5 rounded-full bg-gold-500 scale-0 group-hover/item:scale-100 transition-transform" />
                                                                        {line}
                                                                    </Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>

                                                {/* Promo Bottom */}
                                                <div className="mt-8 pt-6 border-t border-gray-100 dark:border-white/5">
                                                    <div className="bg-gold-50 dark:bg-gold-900/10 p-4 rounded-2xl flex items-center justify-between">
                                                        <p className="text-[9px] font-black text-gold-700 dark:text-gold-300 uppercase tracking-widest">Oferta lanzamiento App</p>
                                                        <span className="text-xs font-black text-gray-900 dark:text-white">-15% EXTRA</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* Subtle underline animation */}
                                    <div className={`absolute bottom-3 left-3 w-4/5 h-0.5 bg-gradient-to-r from-transparent via-gold-500 to-transparent transform scale-x-0 transition-transform duration-300 group-hover/nav:scale-x-100 ${location.pathname === link.path ? 'scale-x-100' : ''
                                        }`}></div>
                                </div>
                            ))}
                        </nav>

                        {/* ACTIONS */}
                        <div className="flex items-center gap-2 md:gap-4 lg:gap-8">
                            <div className="hidden xl:flex items-center border-b border-transparent hover:border-gray-200 dark:hover:border-white/10 transition-all group px-2 py-1">
                                <svg className="w-4 h-4 text-gray-400 group-hover:text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                                <input
                                    type="text"
                                    placeholder="Buscar..."
                                    className="bg-transparent border-none outline-none text-xs text-gray-700 dark:text-gray-300 placeholder:text-gray-400 ml-2 w-[80px] focus:w-[150px] transition-all duration-500 font-medium"
                                />
                            </div>

                            <a href={waLink} target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full transition-transform hover:scale-110 shadow-lg shadow-green-500/20">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884 0 2.225.569 3.891 1.745 5.534l-.999 3.648 3.743-.981zm11.387-5.464c-.301-.15-1.785-.881-2.06-.982-.278-.1-.48-.15-.679.15-.199.301-.768.983-.941 1.184-.173.199-.347.227-.648.077-.301-.15-1.272-.469-2.423-1.496-.895-.798-1.498-1.784-1.675-2.084-.173-.3-.018-.462.13-.61.135-.133.301-.35.451-.524.151-.174.199-.298.301-.497.101-.198.05-.371-.025-.521-.075-.15-.678-1.635-.93-2.246-.244-.594-.494-.513-.679-.522-.175-.009-.376-.01-.578-.01-.201 0-.527.075-.803.376-.277.301-1.056 1.031-1.056 2.516s1.08 2.912 1.231 3.111c.15.2 2.126 3.245 5.15 4.553.72.311 1.281.496 1.719.636.724.23 1.381.197 1.902.12.581-.086 1.785-.73 2.035-1.432.251-.703.251-1.306.176-1.432-.075-.126-.277-.199-.577-.349z" /></svg>
                            </a>

                            <button onClick={toggleTheme} className="w-[35px] h-[35px] md:w-[40px] md:h-[40px] rounded-full bg-gray-50 dark:bg-zinc-900 border border-gray-100 dark:border-white/5 flex items-center justify-center text-gray-500 hover:text-gray-900 dark:hover:text-white transition-all shadow-sm">
                                {theme === 'light' ? (
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" /></svg>
                                ) : (
                                    <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" /></svg>
                                )}
                            </button>

                            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden p-1.5 md:p-2 text-gray-900 dark:text-white">
                                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`lg:hidden fixed inset-0 z-[100] bg-white dark:bg-black transition-all duration-700 ${isMobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}`}>
                <div className="flex flex-col items-center justify-center h-full gap-8 px-10 text-center">
                    <button onClick={() => setIsMobileMenuOpen(false)} className="absolute top-8 right-8 text-gray-400">
                        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l18 18" /></svg>
                    </button>
                    {navLinks.map((link) => (
                        <div key={link.name} className="relative group">
                            <Link
                                key={link.name}
                                to={link.path}
                                className="flex items-center gap-3 text-3xl font-display font-black text-gray-900 dark:text-white uppercase tracking-tighter py-4 px-6 rounded-xl transition-all duration-300 hover:bg-gold-50 dark:hover:bg-gold-900/20 hover:scale-105"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <span className="text-gold-500">
                                    {link.icon}
                                </span>
                                <span>{link.name}</span>

                                {/* Badge */}
                                {link.badge && (
                                    <span className={`absolute top-2 right-4 px-2 py-1 text-[10px] font-bold rounded-full animate-pulse-subtle ${link.badge === '-30%'
                                            ? 'bg-red-500 text-white'
                                            : 'bg-gold-500 text-white'
                                        }`}>
                                        {link.badge}
                                    </span>
                                )}
                            </Link>
                        </div>
                    ))}
                    <div className="h-[1px] w-full bg-gray-100 dark:bg-white/5 my-4"></div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
