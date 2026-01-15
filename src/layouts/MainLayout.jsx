import React, { useState } from 'react';
import Navbar from '@/components/ui/Navbar';
import PromoBar from '@/components/ui/PromoBar';
import LegalModal from '@/components/ui/LegalModal';

const MainLayout = ({ children }) => {
    const [modalConfig, setModalConfig] = useState({ isOpen: false, title: '', content: '' });

    const openModal = (title, content) => {
        setModalConfig({ isOpen: true, title, content });
    };

    const legalContent = {
        terminos: (
            <div className="space-y-4 text-sm leading-relaxed">
                <p>Bienvenido a <strong>Sueño Dorado</strong>. Al acceder a nuestro sitio, aceptas cumplir con nuestros términos de servicio diseñados para proteger tu experiencia.</p>
                <h4 className="font-bold text-gray-900 dark:text-white uppercase tracking-widest text-[10px]">1. Uso del Sitio</h4>
                <p>El contenido de este sitio es para información general y ventas. Nos reservamos el derecho de modificar precios sin previo aviso para reflejar mejoras en calidad.</p>
                <h4 className="font-bold text-gray-900 dark:text-white uppercase tracking-widest text-[10px]">2. Propiedad Intelectual</h4>
                <p>Todas las marcas, logos y diseños son propiedad de Sueño Dorado. Valoramos la autenticidad de nuestra fabricación nacional.</p>
            </div>
        ),
        garantia: (
            <div className="space-y-4 text-sm leading-relaxed">
                <p>Nuestros productos cuentan con garantía directa de fábrica, sin intermediarios.</p>
                <h4 className="font-bold text-gray-900 dark:text-white uppercase tracking-widest text-[10px]">Cobertura</h4>
                <ul className="list-disc pl-5 space-y-2">
                    <li>Hundimientos estructurales mayores a 3cm.</li>
                    <li>Defectos en el sistema de resortes pocket o bonnell.</li>
                    <li>Integridad de las espumas de alta densidad.</li>
                </ul>
                <h4 className="font-bold text-gray-900 dark:text-white uppercase tracking-widest text-[10px]">Duración</h4>
                <p>Ofrecemos hasta 10 años de garantía, respaldando la durabilidad de cada pieza que fabricamos.</p>
            </div>
        ),
        reclamaciones: (
            <div className="space-y-4 text-sm leading-relaxed">
                <p>Tu satisfacción es nuestra prioridad. Contamos con un Libro de Reclamaciones Virtual conforme a las normativas de protección al consumidor.</p>
                <p>Nuestro equipo de atención resolverá cualquier inconveniente en un plazo máximo de 15 días hábiles con transparencia total.</p>
                <div className="bg-gray-50 dark:bg-zinc-900 p-4 rounded-xl border border-gray-100 dark:border-white/5">
                    <p className="text-[10px] italic text-gray-400 uppercase tracking-widest">Compromiso Sueño Dorado con la Excelencia.</p>
                </div>
            </div>
        ),
        privacidad: (
            <div className="space-y-4 text-sm leading-relaxed">
                <p>Tus datos están seguros con nosotros. Solo los utilizamos para garantizar que tu descanso llegue a tiempo y con la mejor calidad.</p>
                <h4 className="font-bold text-gray-900 dark:text-white uppercase tracking-widest text-[10px]">Certificación SSL</h4>
                <p>Nuestra plataforma cumple con altos estándares de seguridad digital para proteger tu información personal y de pago.</p>
            </div>
        )
    };

    return (
        <div className="flex flex-col min-h-screen bg-white dark:bg-black transition-colors duration-700 font-sans selection:bg-gold-500 selection:text-white">
            <PromoBar />
            <Navbar />
            <main className="flex-grow pt-16">
                {children}
            </main>

            {/* ORDERED E-COMMERCE FOOTER */}
            <footer className="bg-white dark:bg-[#050505] text-gray-900 dark:text-white pt-24 pb-12 transition-colors duration-700 border-t border-gray-100 dark:border-white/5">
                <div className="container mx-auto px-6 lg:px-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">

                        {/* 1. Empresa */}
                        <div className="space-y-6">
                            <h4 className="text-[10px] font-display font-black tracking-[0.3em] uppercase text-gold-500">La Empresa</h4>
                            <p className="text-sm text-gray-500 dark:text-gray-400 font-medium leading-relaxed">
                                Transformamos el descanso en el Perú desde hace más de 15 años. Fabricación propia con los estándares más altos de la industria nacional.
                            </p>
                            <div className="flex gap-4">
                                <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors uppercase text-[10px] font-black tracking-widest">Facebook</a>
                                <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors uppercase text-[10px] font-black tracking-widest">Instagram</a>
                            </div>
                        </div>

                        {/* 2. Mi Cuenta */}
                        <div className="space-y-6">
                            <h4 className="text-[10px] font-display font-black tracking-[0.3em] uppercase text-gold-500">Mi Cuenta</h4>
                            <ul className="space-y-3">
                                {['Mi Perfil', 'Mis Pedidos', 'Favoritos', 'Carrito'].map((item) => (
                                    <li key={item}>
                                        <button onClick={() => openModal('Mi Cuenta', legalContent.privacidad)} className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors font-medium">
                                            {item}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* 3. Ayuda al Cliente */}
                        <div className="space-y-6">
                            <h4 className="text-[10px] font-display font-black tracking-[0.3em] uppercase text-gold-500">Ayuda al Cliente</h4>
                            <ul className="space-y-3">
                                <li>
                                    <button onClick={() => openModal('Términos y Condiciones', legalContent.terminos)} className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors font-medium">
                                        Términos y Condiciones
                                    </button>
                                </li>
                                <li>
                                    <button onClick={() => openModal('Políticas de Garantía', legalContent.garantia)} className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors font-medium">
                                        Garantía de Fábrica
                                    </button>
                                </li>
                                <li>
                                    <button onClick={() => openModal('Libro de Reclamaciones', legalContent.reclamaciones)} className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors font-medium">
                                        Libro de Reclamaciones
                                    </button>
                                </li>
                            </ul>
                        </div>

                        {/* 4. Contacto Visible */}
                        <div className="space-y-6">
                            <h4 className="text-[10px] font-display font-black tracking-[0.3em] uppercase text-gold-500">Contacto</h4>
                            <div className="space-y-4">
                                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium leading-relaxed">
                                    MZ F LOTE 22, Lotización Chillón La Ensenada, Puente Piedra, Lima.
                                </p>
                                <div className="pt-2">
                                    <p className="text-lg font-display font-black text-gray-900 dark:text-white">+51 989 223 448</p>
                                    <p className="text-[10px] text-gold-500 uppercase font-black tracking-widest">Lun - Sáb / 9am - 6pm</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Footer Bottom */}
                    <div className="pt-12 border-t border-gray-100 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                        <p className="text-[9px] font-display text-gray-400 uppercase tracking-[0.2em] font-black text-center md:text-left leading-relaxed">
                            © 2026 SUEÑO DORADO • VANGUARDIA EN DESCANSO • TODOS LOS DERECHOS RESERVADOS
                        </p>
                        <div className="flex gap-8 opacity-20 hover:opacity-100 transition-opacity duration-700">
                            <span className="text-[9px] font-black uppercase tracking-widest">Visa</span>
                            <span className="text-[9px] font-black uppercase tracking-widest">Mastercard</span>
                            <span className="text-[9px] font-black uppercase tracking-widest">Amex</span>
                        </div>
                    </div>
                </div>
            </footer>

            <LegalModal
                isOpen={modalConfig.isOpen}
                onClose={() => setModalConfig({ ...modalConfig, isOpen: false })}
                title={modalConfig.title}
                content={modalConfig.content}
            />
        </div>
    );
};

export default MainLayout;
