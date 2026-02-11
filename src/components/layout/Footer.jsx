import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getWhatsAppLink } from '@/utils/constants';
import Logo from '@/components/common/Logo';
import SocialIcons from '@/components/common/SocialIcons';
import { LuMail, LuArrowRight, LuShieldCheck, LuTruck, LuUsers } from 'react-icons/lu';
import InfoModal from '@/components/ui/InfoModal';
import { FOOTER_CONTENT } from '@/data/legal/footerContent';

import libroReclamacionesImg from '@/assets/images/banners/libro-reclamaciones_2.webp';
import medioPago1 from '@/assets/images/method-page/medio_pago1.png';
import medioPago2 from '@/assets/images/method-page/medio_pago2.png';
import yape from '@/assets/images/method-page/yape.png';
import medioPago5 from '@/assets/images/method-page/medio_pago5.png';

const Footer = ({ onLogoClick }) => {
    const currentYear = new Date().getFullYear();
    const [selectedInfo, setSelectedInfo] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = (key) => {
        if (FOOTER_CONTENT[key]) {
            setSelectedInfo(FOOTER_CONTENT[key]);
            setIsModalOpen(true);
        }
    };

    return (
        <footer className="bg-white dark:bg-[#050505] text-gray-900 dark:text-white pt-24 pb-12 transition-colors duration-700 relative overflow-hidden border-t border-gray-100 dark:border-white/5">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-vive-500/50 to-transparent"></div>

            <div className="container mx-auto px-6 lg:px-20 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20">

                    {/* 1. BRAND & MISSION */}
                    <div className="lg:col-span-3 space-y-8">
                        <Logo
                            size="xlarge"
                            onClick={onLogoClick}
                            className="!w-44 !h-auto !justify-start"
                            variant="auto"
                        />
                        <p className="text-sm text-gray-600 dark:text-gray-400 font-medium leading-relaxed">
                            Liderando la vanguardia del descanso en Perú. Tecnología MP y manufactura de alta precisión para transformar cada noche en una experiencia extraordinaria.
                        </p>
                        <div className="space-y-4">
                            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-vive-500">Síguenos</h4>
                            <SocialIcons />
                        </div>
                    </div>

                    {/* 2. CORPORATIVO */}
                    <div className="lg:col-span-2 space-y-6">
                        <h4 className="text-xs font-black uppercase tracking-widest flex items-center gap-2">
                            <LuShieldCheck className="text-vive-500" /> Corporativo
                        </h4>
                        <ul className="space-y-3">
                            {[
                                { name: 'Nuestra Fábrica', key: 'nosotros-fabrica' },
                                { name: 'Gestión de Calidad', key: 'politica-calidad' },
                                { name: 'Política Ambiental', key: 'politica-ambiental' },
                                { name: 'Seguridad y Salud', key: 'politica-sst' },
                                { name: 'Blog del Sueño', key: 'blog-info' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <button
                                        onClick={() => handleOpenModal(item.key)}
                                        className="text-[11px] text-gray-500 dark:text-gray-400 hover:text-vive-500 transition-colors font-bold uppercase tracking-tighter text-left"
                                    >
                                        {item.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* 3. TIENDA Y AYUDA */}
                    <div className="lg:col-span-2 space-y-6">
                        <h4 className="text-xs font-black uppercase tracking-widest flex items-center gap-2">
                            <LuTruck className="text-vive-500" /> Tienda y Ayuda
                        </h4>
                        <ul className="space-y-3">
                            {[
                                { name: 'Rastrea tu pedido', key: 'rastreo-pedido' },
                                { name: 'Políticas de Despacho', key: 'politicas-despacho' },
                                { name: 'Preguntas Frecuentes', key: 'faq' },
                                { name: 'Cartilla de Usuario', key: 'cartilla-usuario' },
                                { name: 'Libro de Reclamaciones', type: 'wa' }
                            ].map((item) => (
                                <li key={item.name}>
                                    {item.type === 'wa' ? (
                                        <a
                                            href={getWhatsAppLink("Hola Vive, deseo registrar un reclamo en su Libro de Reclamaciones virtual.")}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-[11px] text-gray-500 dark:text-gray-400 hover:text-vive-500 transition-colors font-bold uppercase tracking-tighter"
                                        >
                                            {item.name}
                                        </a>
                                    ) : (
                                        <button
                                            onClick={() => handleOpenModal(item.key)}
                                            className="text-[11px] text-gray-500 dark:text-gray-400 hover:text-vive-500 transition-colors font-bold uppercase tracking-tighter text-left"
                                        >
                                            {item.name}
                                        </button>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* 4. ÁREA USUARIO */}
                    <div className="lg:col-span-2 space-y-6">
                        <h4 className="text-xs font-black uppercase tracking-widest flex items-center gap-2">
                            <LuUsers className="text-vive-500" /> Usuarios
                        </h4>
                        <ul className="space-y-3">
                            {[
                                { name: 'Garantía de Fábrica', key: 'garantia' },
                                { name: 'Distribuidores B2B', key: 'distribuidores-b2b' },
                                { name: 'Términos y Condiciones', key: 'terminos' },
                                { name: 'Privacidad y Datos', key: 'privacidad' },
                                { name: 'Manual de Cuidado', key: 'guia-cuidado' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <button
                                        onClick={() => handleOpenModal(item.key)}
                                        className="text-[11px] text-gray-500 dark:text-gray-400 hover:text-vive-500 transition-colors font-bold uppercase tracking-tighter text-left"
                                    >
                                        {item.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* 5. CONTACTO & NEWSLETTER */}
                    <div className="lg:col-span-3 space-y-8">
                        <div className="bg-gray-50 dark:bg-white/[0.03] p-6 rounded-2xl border border-gray-100 dark:border-white/5">
                            <h4 className="text-xs font-black uppercase tracking-widest mb-4">Newsletter de Planta</h4>
                            <form className="relative" onSubmit={(e) => e.preventDefault()}>
                                <input
                                    type="email"
                                    placeholder="Tu email principal"
                                    className="w-full bg-white dark:bg-black border border-gray-200 dark:border-white/10 rounded-xl py-3 pl-4 pr-12 text-xs outline-none focus:border-vive-500 transition-all font-bold"
                                />
                                <button
                                    type="submit"
                                    className="absolute right-1 top-1/2 -translate-y-1/2 w-8 h-8 bg-vive-500 text-white rounded-lg flex items-center justify-center hover:bg-vive-600 transition-colors"
                                    aria-label="Suscribirse al newsletter"
                                >
                                    <LuArrowRight className="w-4 h-4" aria-hidden="true" />
                                </button>
                            </form>
                        </div>
                        <Link to="/contacto" className="w-full bg-black dark:bg-white text-white dark:text-black px-6 py-4 rounded-xl font-black text-[10px] uppercase tracking-[0.2em] hover:scale-[1.02] transition-all flex items-center justify-center gap-3">
                            <LuMail className="text-vive-500 text-lg" /> Contacto Directo
                        </Link>
                    </div>

                </div>

                {/* BOTTOM BAR */}
                <div className="pt-12 border-t border-gray-100 dark:border-white/5">
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-8 text-center lg:text-left">
                        <div className="space-y-1">
                            <p className="text-[10px] font-black uppercase tracking-widest text-gray-600 dark:text-gray-400">
                                © {currentYear} VIVE. Tecnología Avanzada en Descanso e Innovación Nacional.
                            </p>
                            <p className="text-[10px] font-bold text-gray-500 dark:text-gray-500 uppercase tracking-tighter">
                                Planta Industrial: Mz. F Lt. 22, Chillón - La Ensenada, Puente Piedra, Lima.
                            </p>
                        </div>

                        <div className="flex flex-col items-center lg:items-end gap-3 grayscale opacity-60">
                            <span className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-400">Pagos Seguros</span>
                            <div className="flex items-center gap-4">
                                <img src={medioPago1} alt="Visa" className="h-4 w-auto" width="32" height="16" />
                                <img src={medioPago2} alt="Mastercard" className="h-4 w-auto" width="32" height="16" />
                                <img src={yape} alt="Yape" className="h-6 w-auto" width="40" height="24" />
                                <img src={medioPago5} alt="Medio Pago" className="h-4 w-auto" width="32" height="16" />
                            </div>
                        </div>

                        <a
                            href={getWhatsAppLink("Hola Vive, solicito acceso al Libro de Reclamaciones.")}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:scale-105 transition-transform"
                        >
                            <img src={libroReclamacionesImg} alt="Libro de Reclamaciones" className="h-10 w-auto" width="120" height="40" />
                        </a>
                    </div>
                </div>
            </div>

            <InfoModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                content={selectedInfo}
            />
        </footer>
    );
};

export default Footer;
