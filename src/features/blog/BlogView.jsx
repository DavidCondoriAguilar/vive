import React, { useEffect } from 'react';
import MainLayout from '@/layouts/MainLayout';
import { Link } from 'react-router-dom';

const BlogView = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const blogPosts = [
        {
            id: 1,
            title: "La Ciencia del Descanso: Cómo Elegir el Colchón Perfecto",
            excerpt: "Descubre los factores clave que determinan la calidad de tu descanso y aprende a seleccionar el colchón ideal para tu estilo de vida.",
            category: "Guía de Compra",
            readTime: "5 min",
            date: "15 Ene 2026",
            image: "/api/placeholder/400/250"
        },
        {
            id: 2,
            title: "Beneficios de un Buen Descanso para tu Salud",
            excerpt: "Estudios científicos demuestran cómo un descanso de calidad impacta directamente en tu productividad y bienestar diario.",
            category: "Salud & Bienestar",
            readTime: "3 min",
            date: "10 Ene 2026",
            image: "/api/placeholder/400/250"
        },
        {
            id: 3,
            title: "Tecnología Sueño Dorado: Innovación en Cada Fibra",
            excerpt: "Conoce los materiales y tecnologías que hacen de nuestros productos una inversión inteligente para tu descanso.",
            category: "Tecnología",
            readTime: "4 min",
            date: "5 Ene 2026",
            image: "/api/placeholder/400/250"
        }
    ];

    return (
        <MainLayout>
            <div className="min-h-screen bg-white dark:bg-black">
                {/* Hero Section */}
                <section className="relative py-20 px-6 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-gold-50 to-white dark:from-gray-900 dark:to-black"></div>
                    <div className="relative container mx-auto max-w-4xl text-center">
                        <h1 className="text-5xl md:text-6xl font-display font-black text-gray-900 dark:text-white mb-6 leading-tight">
                            Blog <span className="text-gold-500">Sueño Dorado</span>
                        </h1>
                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                            Expertos en descanso compartiendo consejos, tecnología y tendencias para transformar tu calidad de vida.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <span className="px-4 py-2 bg-gold-100 dark:bg-gold-900/30 text-gold-700 dark:text-gold-300 rounded-full text-sm font-medium">
                                Guías de Compra
                            </span>
                            <span className="px-4 py-2 bg-gold-100 dark:bg-gold-900/30 text-gold-700 dark:text-gold-300 rounded-full text-sm font-medium">
                                Salud & Bienestar
                            </span>
                            <span className="px-4 py-2 bg-gold-100 dark:bg-gold-900/30 text-gold-700 dark:text-gold-300 rounded-full text-sm font-medium">
                                Tecnología
                            </span>
                        </div>
                    </div>
                </section>

                {/* Blog Posts Grid */}
                <section className="py-16 px-6">
                    <div className="container mx-auto max-w-6xl">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {blogPosts.map((post, index) => (
                                <article 
                                    key={post.id}
                                    className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 hover:shadow-2xl hover:scale-105 transition-all duration-500 cursor-pointer"
                                >
                                    {/* Image */}
                                    <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gold-100 to-gray-100 dark:from-gray-800 dark:to-gray-900">
                                        <div className="absolute inset-0 bg-gold-500/20 group-hover:bg-gold-500/30 transition-colors duration-300"></div>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <span className="text-4xl text-gold-500/30">🛏️</span>
                                        </div>
                                        <div className="absolute top-4 left-4">
                                            <span className="px-3 py-1 bg-white/90 dark:bg-black/90 backdrop-blur-sm text-xs font-bold text-gray-900 dark:text-white rounded-full">
                                                {post.category}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400 mb-3">
                                            <span>{post.date}</span>
                                            <span>•</span>
                                            <span>{post.readTime} lectura</span>
                                        </div>
                                        
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-gold-500 transition-colors duration-300">
                                            {post.title}
                                        </h3>
                                        
                                        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                                            {post.excerpt}
                                        </p>
                                        
                                        <Link 
                                            to={`/blog/${post.id}`}
                                            className="inline-flex items-center gap-2 text-gold-500 font-medium hover:text-gold-600 transition-colors duration-300"
                                        >
                                            Leer más
                                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </Link>
                                    </div>
                                </article>
                            ))}
                        </div>

                        {/* CTA Section */}
                        <div className="mt-16 text-center bg-gradient-to-r from-gold-50 to-gold-100 dark:from-gray-900 dark:to-gray-800 rounded-3xl p-12 border border-gold-200 dark:border-gold-800">
                            <h2 className="text-3xl font-display font-black text-gray-900 dark:text-white mb-4">
                                ¿Listo para Transformar tu Descanso?
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                                Explora nuestra colección premium y descubre por qué miles de peruanos confían en Sueño Dorado para su descanso.
                            </p>
                            <Link 
                                to="/"
                                className="inline-flex items-center gap-3 px-8 py-4 bg-gold-500 hover:bg-gold-600 text-white font-bold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl"
                            >
                                Ver Catálogo
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </MainLayout>
    );
};

export default BlogView;
