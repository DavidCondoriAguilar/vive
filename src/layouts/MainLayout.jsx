import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getWhatsAppLink } from '@/utils/constants';
import Navbar from '@/components/layout/Navbar';
import PromoBar from '@/components/layout/PromoBar';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import PaymentIcons from '@/components/common/PaymentIcons';
import SocialIcons from '@/components/common/SocialIcons';
import TrustBadges from '@/components/common/TrustBadges';
import InfoModal from '@/components/common/InfoModal';
import { LuMail, LuArrowRight } from 'react-icons/lu';
import { FaShieldAlt, FaTruck, FaUndo, FaHeadset } from 'react-icons/fa';

import libroReclamacionesImg from '@/assets/images/banners/libro-reclamaciones_2.webp';
import medioPago1 from '@/assets/images/method-page/medio_pago1.png';
import medioPago2 from '@/assets/images/method-page/medio_pago2.png';
import yape from '@/assets/images/method-page/yape.png';
import medioPago5 from '@/assets/images/method-page/medio_pago5.png';

import Logo from '@/components/common/Logo';

const MainLayout = ({ children }) => {
    const navigate = useNavigate();
    const [activeModal, setActiveModal] = useState(null);

    const handleLogoClick = () => {
        navigate('/home');
    };

    const supportInfo = {
        'Garantía': {
            title: 'Garantía de Excelencia',
            content: (
                <div className="space-y-4">
                    <p>En Sueño Dorado, nuestra promesa es la calidad. Todos nuestros colchones cuentan con una garantía integral que protege tu inversión:</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>10 Años</strong> en la estructura de resortes.</li>
                        <li><strong>5 Años</strong> en el núcleo de espuma y telas.</li>
                    </ul>
                    <p className="text-sm italic">Para hacer válida la garantía, es necesario presentar el comprobante de pago y mantener las etiquetas del producto.</p>
                </div>
            ),
            icon: FaShieldAlt
        },
        'Envíos': {
            title: 'Política de Envíos',
            content: (
                <div className="space-y-4">
                    <p>Llevamos el confort a la puerta de tu hogar con nuestro servicio de logística especializada:</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Lima Metropolitana:</strong> Entrega gratuita en 24-48 horas hábiles.</li>
                        <li><strong>Provincias:</strong> Envíos a través de agencias de confianza (pago en destino) o flota propia según cobertura. Tiempo estimado: 3-7 días.</li>
                    </ul>
                    <p>Nuestro equipo de despacho se comunicará contigo el día de la entrega para coordinar los detalles.</p>
                </div>
            ),
            icon: FaTruck
        },
        'Devoluciones': {
            title: 'Cambios y Devoluciones',
            content: (
                <div className="space-y-4">
                    <p>Queremos que ames tu colchón. Si encuentras algún defecto de fábrica, tienes hasta <strong>7 días calendario</strong> para reportarlo.</p>
                    <p>El producto debe estar sin uso, con su embalaje original y etiquetas intactas para proceder con el cambio o devolución.</p>
                    <p className="text-sm">Por razones de higiene, no se aceptan devoluciones de almohadas o ropa de cama una vez abiertos.</p>
                </div>
            ),
            icon: FaUndo
        },
        'Contacto': {
            title: 'Centro de Atención',
            content: (
                <div className="space-y-4">
                    <p>Estamos aquí para ayudarte. Ponte en contacto con nosotros a través de nuestros canales oficiales:</p>
                    <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg space-y-2">
                        <p><strong>📞 Teléfono:</strong> (01) 123-4567</p>
                        <p><strong>📱 WhatsApp:</strong> +51 987 654 321</p>
                        <p><strong>📧 Email:</strong> hola@suenodorado.pe</p>
                    </div>
                    <p>Horario de atención: Lunes a Sábado de 9:00 am a 7:00 pm.</p>
                </div>
            ),
            icon: FaHeadset
        }
    };

    const handleSupportClick = (key) => {
        if (key === 'Contacto') {
            navigate('/contacto');
            return;
        }
        const info = supportInfo[key];
        if (info) setActiveModal(info);
    };

    const handleServiceClick = (badge) => {
        setActiveModal({
            title: badge.title,
            content: <p>{badge.fullText}</p>,
            icon: null
        });
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
            <footer className="bg-transparent text-gray-900 dark:text-white pt-24 pb-12 transition-colors duration-700 relative overflow-hidden">

                {/* Decorative Pattern Overlay (Optional subtle texture) */}
                <div className="absolute inset-0 bg-[url('/images/pattern/factory-pattern.png')] opacity-[0.03] pointer-events-none"></div>

                <div className="container mx-auto px-6 lg:px-20 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 mb-12">

                        {/* 1. Brand & Mission (Col span 3) */}
                        <div className="lg:col-span-3 space-y-6">
                            <div className="inline-block">
                                <Logo
                                    size="xlarge"
                                    onClick={handleLogoClick}
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

                        {/* 2. Navigation (Col span 2) */}
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

                        {/* 3. Services / Trust Badges (Col span 3) */}
                        <div className="lg:col-span-3 space-y-6">
                            <h4 className="text-xs font-display font-bold tracking-widest uppercase text-gray-900 dark:text-white">Servicios</h4>
                            <TrustBadges variant="vertical" onBadgeClick={handleServiceClick} />
                        </div>

                        {/* 4. Support (Col span 2) */}
                        <div className="lg:col-span-2 space-y-6">
                            <h4 className="text-xs font-display font-bold tracking-widest uppercase text-gray-900 dark:text-white">Soporte</h4>
                            <ul className="space-y-3">
                                {['Garantía', 'Envíos', 'Devoluciones', 'Contacto'].map((item) => (
                                    <li key={item}>
                                        <button
                                            onClick={() => handleSupportClick(item)}
                                            className="text-sm text-gray-500 dark:text-gray-400 hover:text-gold-500 transition-colors font-medium text-left"
                                        >
                                            {item}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* 5. Newsletter & Contact (Col span 2) */}
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

                            {/* Payment Icons - Expert Recommendation */}
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
                            <p className="text-[10px] sm:text-xs text-gray-400 font-medium text-center md:text-left">
                                © 2026 SUEÑO DORADO. Salud y placer siempre a tu lado.
                            </p>
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

            <InfoModal
                isOpen={!!activeModal}
                onClose={() => setActiveModal(null)}
                title={activeModal?.title}
                content={activeModal?.content}
                icon={activeModal?.icon}
            />
        </div>
    );
};

export default MainLayout;
