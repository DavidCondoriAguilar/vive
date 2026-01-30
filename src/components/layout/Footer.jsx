import React from 'react';
import { Link } from 'react-router-dom';
import { getWhatsAppLink } from '@/utils/constants';
import Logo from '@/components/common/Logo';
import SocialIcons from '@/components/common/SocialIcons';
import TrustBadges from '@/components/common/TrustBadges';
import { LuMail, LuArrowRight } from 'react-icons/lu';

import libroReclamacionesImg from '@/assets/images/banners/libro-reclamaciones_2.webp';
import medioPago1 from '@/assets/images/method-page/medio_pago1.png';
import medioPago2 from '@/assets/images/method-page/medio_pago2.png';
import yape from '@/assets/images/method-page/yape.png';
import medioPago5 from '@/assets/images/method-page/medio_pago5.png';

const Footer = ({ onLogoClick, onSupportClick, onServiceClick }) => {
    return (
        <footer className="bg-transparent text-gray-900 dark:text-white pt-24 pb-12 transition-colors duration-700 relative overflow-hidden">
            {/* Decorative Pattern Overlay */}
            <div className="absolute inset-0 bg-[url('/images/pattern/factory-pattern.png')] opacity-[0.03] pointer-events-none"></div>

            <div className="container mx-auto px-6 lg:px-20 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 mb-12">

                    {/* 1. Brand & Mission */}
                    <div className="lg:col-span-3 space-y-6">
                        <div className="inline-block">
                            <Logo
                                size="xlarge"
                                onClick={onLogoClick}
                                className="!w-24 !h-24 md:!w-40 md:!h-40 !justify-start"
                                variant="dark"
                            />
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 font-medium leading-relaxed max-w-xs">
                            Redefiniendo el descanso en Perú con ingeniería de precisión y materiales de clase mundial.
                        </p>
                        <div className="pt-2">
                            <SocialIcons />
                        </div>
                    </div>

                    {/* 2. Navigation */}
                    <div className="lg:col-span-2 space-y-6">
                        <h4 className="text-xs font-display font-bold tracking-widest uppercase text-gray-900 dark:text-white">Explorar</h4>
                        <ul className="space-y-3">
                            {['Colchones', 'Camas', 'Ofertas'].map((item) => (
                                <li key={item}>
                                    <Link to={`/catalogo?categoria=${item.toLowerCase()}`} className="text-sm text-gray-500 dark:text-gray-400 hover:text-gold-500 transition-colors font-medium">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* 3. Services / Trust Badges */}
                    <div className="lg:col-span-3 space-y-6">
                        <h4 className="text-xs font-display font-bold tracking-widest uppercase text-gray-900 dark:text-white">Servicios</h4>
                        <TrustBadges variant="vertical" onBadgeClick={onServiceClick} />
                    </div>

                    {/* 4. Support */}
                    <div className="lg:col-span-2 space-y-6">
                        <h4 className="text-xs font-display font-bold tracking-widest uppercase text-gray-900 dark:text-white">Soporte</h4>
                        <ul className="space-y-3">
                            {['Garantía', 'Envíos', 'Devoluciones', 'Contacto'].map((item) => (
                                <li key={item}>
                                    <button
                                        onClick={() => onSupportClick(item)}
                                        className="text-sm text-gray-500 dark:text-gray-400 hover:text-gold-500 transition-colors font-medium text-left"
                                    >
                                        {item}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* 5. Newsletter & Contact */}
                    <div className="lg:col-span-2 space-y-6">
                        <h4 className="text-xs font-display font-bold tracking-widest uppercase text-gray-900 dark:text-white">Mantente Actualizado</h4>

                        <form className="relative w-full" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Correo electrónico"
                                className="w-full bg-white dark:bg-black border border-gray-200 dark:border-white/20 rounded-lg py-3 pl-4 pr-10 text-sm outline-none focus:border-gold-500 transition-colors"
                            />
                            <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-gold-500 text-white rounded-md hover:bg-gold-600 transition-colors">
                                <LuArrowRight className="w-3 h-3" />
                            </button>
                        </form>

                        <div className="pt-4 border-t border-gray-100 dark:border-white/20">
                            <Link to="/contacto" className="flex items-center gap-2 text-gray-900 dark:text-white hover:text-gold-500 transition-colors font-bold text-sm group">
                                <LuMail className="w-4 h-4 text-gold-500 group-hover:scale-110 transition-transform" />
                                <span>Contáctanos</span>
                            </Link>
                        </div>

                        {/* Payment Icons */}
                        <div className="pt-4">
                            <div className="text-[10px] text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em] font-bold mb-3">
                                Pagos Seguros
                            </div>
                            <div className="flex items-center gap-2">
                                <img src={medioPago1} alt="Visa" className="h-6 w-auto" />
                                <img src={medioPago2} alt="Mastercard" className="h-6 w-auto" />
                                <img src={yape} alt="Yape" className="h-6 w-auto" />
                                <img src={medioPago5} alt="Otro" className="h-6 w-auto" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="pt-8 border-t border-gray-100 dark:border-white/20 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                        <div className="flex flex-col items-center md:items-start">
                            <p className="text-[10px] sm:text-xs text-gray-400 font-medium text-center md:text-left">
                                © 2026 SUEÑO DORADO. Salud y placer siempre a tu lado.
                            </p>
                            <p className="text-[10px] text-gray-500 font-medium mt-1 text-center md:text-left italic">
                                Mz. F Lt. 22, Lot. Chillón - La Ensenada, Puente Piedra.
                            </p>
                        </div>
                        <a
                            href={getWhatsAppLink("Hola Sueño Dorado, deseo registrar un reclamo/consulta en su Libro de Reclamaciones virtual.")}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-300"
                        >
                            <img src={libroReclamacionesImg} alt="Libro de Reclamaciones" className="h-8 w-auto md:h-10" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
