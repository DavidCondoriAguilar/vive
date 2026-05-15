import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import MainLayout from '@/layouts/MainLayout';
import { Link } from 'react-router-dom';

const ReturnPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Helmet>
                <title>Política de Devoluciones - Vive | Garantía 30 Días</title>
                <meta name="description" content="Política de devoluciones transparente de Vive. 30 días de prueba gratuita, garantía de 10 años y servicio de posventa excepcional." />
            </Helmet>
            <MainLayout>
                <div className="min-h-screen bg-white dark:bg-black">
                    {/* Hero Section */}
                    <section className="relative py-20 px-6 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-white dark:from-gray-900 dark:to-black"></div>
                        <div className="relative container mx-auto max-w-4xl text-center">
                            <h1 className="text-5xl md:text-6xl font-display font-black text-gray-900 dark:text-white mb-6 leading-tight">
                                Política de <span className="text-green-500">Devoluciones</span>
                            </h1>
                            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                                Tu satisfacción es nuestra prioridad. Conoce nuestros compromisos de calidad y servicio.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <span className="px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">
                                    30 Días de Prueba
                                </span>
                                <span className="px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">
                                    Garantía 10 Años
                                </span>
                                <span className="px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">
                                    Servicio 24/7
                                </span>
                            </div>
                        </div>
                    </section>

                    {/* Policy Content */}
                    <section className="py-16 px-6">
                        <div className="container mx-auto max-w-4xl">
                            <div className="space-y-12">

                                {/* Prueba Gratuita */}
                                <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-gray-800">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                                            <span className="text-white text-xl">✓</span>
                                        </div>
                                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Prueba Gratuita de 30 Días</h2>
                                    </div>
                                    <div className="prose dark:prose-invert max-w-none">
                                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                                            En Vive, creemos que la mejor manera de probar un colchón es durmiendo en él. Por eso ofrecemos <strong>30 días completos de prueba gratuita</strong> en tu hogar.
                                        </p>
                                        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                                            <li>Prueba el colchón en tu entorno real durante un mes completo</li>
                                            <li>Sin compromiso de compra durante el período de prueba</li>
                                            <li>Si no estás completamente satisfecho, retiramos el producto sin costo adicional</li>
                                            <li>Retiro gratuito en Lima y alrededores</li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Garantía Extendida */}
                                <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-gray-800">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                                            <span className="text-white text-xl">🛡️</span>
                                        </div>
                                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Garantía de 10 Años</h2>
                                    </div>
                                    <div className="prose dark:prose-invert max-w-none">
                                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                                            Nuestra plataforma cumple con altos estándares de seguridad digital para proteger tu información personal y de pago. 30 días de prueba gratuita.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">¿Qué cubre?</h4>
                                                <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-300">
                                                    <li>Defectos en materiales y mano de obra</li>
                                                    <li>Hundimiento excesivo (&gt;3cm)</li>
                                                    <li>Desgaste prematuro</li>
                                                    <li>Fallas en componentes internos</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">¿Qué no cubre?</h4>
                                                <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-300">
                                                    <li>Daño por uso indebido</li>
                                                    <li>Quemaduras o cortes</li>
                                                    <li>Humedad excesiva</li>
                                                    <li>Desgaste normal por uso</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Proceso de Devolución */}
                                <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-gray-800">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                                            <span className="text-white text-xl">↩️</span>
                                        </div>
                                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Proceso de Devolución</h2>
                                    </div>
                                    <div className="prose dark:prose-invert max-w-none">
                                        <div className="grid md:grid-cols-3 gap-6">
                                            <div className="text-center">
                                                <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                                    <span className="text-2xl">📞</span>
                                                </div>
                                                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">1. Contacto</h4>
                                                <p className="text-sm text-gray-600 dark:text-gray-300">
                                                    Llámanos al +51 989 223 448 o escríbenos por WhatsApp
                                                </p>
                                            </div>
                                            <div className="text-center">
                                                <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                                    <span className="text-2xl">🚚</span>
                                                </div>
                                                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">2. Retiro</h4>
                                                <p className="text-sm text-gray-600 dark:text-gray-300">
                                                    Coordinamos la recogida gratuita
                                                </p>
                                            </div>
                                            <div className="text-center">
                                                <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                                    <span className="text-2xl">💰</span>
                                                </div>
                                                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">3. Reembolso</h4>
                                                <p className="text-sm text-gray-600 dark:text-gray-300">
                                                    Devolución completa del pago en 48 horas
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Certificaciones */}
                                <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-gray-800">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                                            <span className="text-white text-xl">🏆</span>
                                        </div>
                                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Certificaciones y Compromisos</h2>
                                    </div>
                                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                        <div className="text-center">
                                            <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                                                <span className="text-3xl">🌱</span>
                                            </div>
                                            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Ecológico</h4>
                                            <p className="text-xs text-gray-600 dark:text-gray-300">Certificación Oeko-Tex</p>
                                        </div>
                                        <div className="text-center">
                                            <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                                                <span className="text-3xl">🛡️</span>
                                            </div>
                                            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Seguridad</h4>
                                            <p className="text-xs text-gray-600 dark:text-gray-300">Control de calidad en fabricación</p>
                                        </div>
                                        <div className="text-center">
                                            <div className="w-20 h-20 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                                                <span className="text-3xl">⭐</span>
                                            </div>
                                            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Calidad</h4>
                                            <p className="text-xs text-gray-600 dark:text-gray-300">Certificación EN 1725</p>
                                        </div>
                                        <div className="text-center">
                                            <div className="w-20 h-20 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                                                <span className="text-3xl">💝</span>
                                            </div>
                                            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Sostenible</h4>
                                            <p className="text-xs text-gray-600 dark:text-gray-300">Producción Responsable</p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            {/* Contact CTA */}
                            <div className="mt-16 text-center bg-gradient-to-r from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 rounded-3xl p-12">
                                <h2 className="text-3xl font-display font-black text-gray-900 dark:text-white mb-4">
                                    ¿Tienes Preguntas?
                                </h2>
                                <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                                    Nuestro equipo de atención al cliente está disponible 24/7 para resolver todas tus dudas.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <a
                                        href="tel:+51989223448"
                                        className="inline-flex items-center gap-3 px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl"
                                    >
                                        Llamar Ahora
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </a>
                                    <Link
                                        to="/"
                                        className="inline-flex items-center gap-3 px-8 py-4 border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white font-bold rounded-full transition-all duration-300"
                                    >
                                        Ver Productos
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </MainLayout>
        </>
    );
};

export default ReturnPolicy;
