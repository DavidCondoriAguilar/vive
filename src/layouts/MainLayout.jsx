import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import PromoBar from '@/components/layout/PromoBar';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import PaymentIcons from '@/components/common/PaymentIcons';
import SocialIcons from '@/components/common/SocialIcons';
import TrustBadges from '@/components/common/TrustBadges';
import { LuMail, LuArrowRight } from 'react-icons/lu';

const MainLayout = ({ children }) => {

    const _legalContent = {
        // ... (contenido legal existente mantenido para referencia de lógica futura si se usa en modales)
    };

    return (
        <div className="flex flex-col min-h-screen bg-white dark:bg-black transition-colors duration-700 font-sans selection:bg-gold-500 selection:text-white">
            <PromoBar />
            <Navbar />
            <Breadcrumbs />
            <main className="flex-grow">
                {children}
            </main>

            {/* PREMIUM FOOTER 2026 */}
            <footer className="bg-white dark:bg-black text-gray-900 dark:text-white pt-24 pb-12 transition-colors duration-700 border-t border-gray-100 dark:border-white/10 relative overflow-hidden">

                {/* Decorative Pattern Overlay (Optional subtle texture) */}
                <div className="absolute inset-0 bg-[url('/images/pattern/factory-pattern.png')] opacity-[0.03] pointer-events-none"></div>

                <div className="container mx-auto px-6 lg:px-20 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 mb-20">

                        {/* 1. Brand & Mission (Col span 4) */}
                        <div className="lg:col-span-4 space-y-8">
                            <Link to="/" className="inline-block">
                                <span className="text-2xl font-display font-black tracking-tight uppercase">
                                    Sueño <span className="text-gold-500">Dorado</span>
                                </span>
                            </Link>
                            <p className="text-sm text-gray-500 dark:text-gray-400 font-medium leading-loose max-w-sm">
                                Redefiniendo el descanso en Perú con ingeniería de precisión y materiales de clase mundial. Cada colchón es una obra maestra fabricada para transformar tus noches.
                            </p>
                            <div className="pt-2">
                                <SocialIcons />
                            </div>
                        </div>

                        {/* 2. Navigation (Col span 2) */}
                        <div className="lg:col-span-2 space-y-8">
                            <h4 className="text-xs font-display font-bold tracking-widest uppercase text-gray-900 dark:text-white">Explorar</h4>
                            <ul className="space-y-4">
                                {['Colchones', 'Camas', 'Accesorios', 'Ofertas'].map((item) => (
                                    <li key={item}>
                                        <Link to={`/categorias/${item.toLowerCase()}`} className="text-sm text-gray-500 dark:text-gray-400 hover:text-gold-500 dark:hover:text-gold-400 transition-colors font-medium">
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* 3. Support (Col span 2) */}
                        <div className="lg:col-span-2 space-y-8">
                            <h4 className="text-xs font-display font-bold tracking-widest uppercase text-gray-900 dark:text-white">Soporte</h4>
                            <ul className="space-y-4">
                                {['Garantía', 'Envíos', 'Devoluciones', 'Contacto'].map((item) => (
                                    <li key={item}>
                                        <Link to={`/${item.toLowerCase().replace('ó', 'o')}`} className="text-sm text-gray-500 dark:text-gray-400 hover:text-gold-500 dark:hover:text-gold-400 transition-colors font-medium">
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* 4. Newsletter & Contact (Col span 4) */}
                        <div className="lg:col-span-4 space-y-8">
                            <h4 className="text-xs font-display font-bold tracking-widest uppercase text-gray-900 dark:text-white">Mantente Actualizado</h4>
                            <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Suscríbete para recibir ofertas exclusivas y consejos de expertos.</p>

                            <form className="relative max-w-sm" onSubmit={(e) => e.preventDefault()}>
                                <input
                                    type="email"
                                    placeholder="Tu correo electrónico"
                                    className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg py-4 pl-5 pr-12 text-sm outline-none focus:border-gold-500 transition-colors"
                                />
                                <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-gold-500 text-white rounded-md hover:bg-gold-600 transition-colors">
                                    <LuArrowRight className="w-4 h-4" />
                                </button>
                            </form>

                            <div className="pt-6 border-t border-gray-100 dark:border-white/5">
                                <p className="text-xs text-gray-400 mb-2 uppercase tracking-wide">Atención al Cliente</p>
                                <a href="mailto:hola@suenodorado.pe" className="flex items-center gap-2 text-gray-900 dark:text-white hover:text-gold-500 transition-colors font-bold group">
                                    <LuMail className="w-4 h-4 text-gold-500 group-hover:scale-110 transition-transform" />
                                    hola@suenodorado.pe
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Trust Badges Minimal */}
                    <div className="py-10 border-t border-gray-100 dark:border-white/5 opacity-80 hover:opacity-100 transition-opacity">
                        <TrustBadges />
                    </div>

                    {/* Footer Bottom */}
                    <div className="pt-8 border-t border-gray-100 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                        <p className="text-[10px] sm:text-xs text-gray-400 font-medium text-center md:text-left">
                            © 2026 SUEÑO DORADO. Fabricado con orgullo en Perú.
                        </p>
                        <div className="scale-90 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                            <PaymentIcons />
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default MainLayout;
