import React from 'react';
import { Link } from 'react-router-dom';

const guideItems = [
    {
        id: 1,
        title: "Cómo elegir tu colchón ideal",
        desc: "Firmeza, material y tamaño. Todo lo que debes saber antes de decidir.",
        cta: "Leer Guía"
    },
    {
        id: 3,
        title: "¿Qué tamaño es para ti?",
        desc: "Desde Plaza y Media hasta King Size. Encuentra el ajuste perfecto.",
        cta: "Ver Dimensiones"
    }
];

const EducationSection = () => {
    return (
        <div className="py-12">
            {/* Impact Header */}
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-display font-black text-gray-900 dark:text-white mb-4">
                    Proceso <span className="text-gold-500">Industrial</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto rounded-full"></div>
            </div>

            {/* Visual Process Grid */}
            <div className="grid md:grid-cols-2 gap-8">
                {guideItems.map((item, index) => (
                    <div
                        key={item.id}
                        className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                        style={{
                            animation: `slideInUp 0.8s ease-out ${index * 0.2}s both`
                        }}
                    >
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-5">
                            <div className="absolute top-4 right-4 w-20 h-20 border-2 border-gold-400 rounded-full"></div>
                            <div className="absolute bottom-4 left-4 w-16 h-16 border-2 border-gold-500 rounded-full"></div>
                        </div>

                        {/* Content */}
                        <div className="relative p-8 text-center">
                            {/* Icon */}
                            <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                <span className="text-2xl font-bold text-white">{index + 1}</span>
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white mb-3 group-hover:text-gold-500 transition-colors duration-300">
                                {item.title}
                            </h3>

                            {/* Minimal Description */}
                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 max-w-xs mx-auto">
                                {item.desc}
                            </p>

                            {/* CTA Button */}
                            <Link
                                to={`/blog/${item.id}`}
                                className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105"
                            >
                                {item.cta}
                            </Link>
                        </div>

                        {/* Hover Effect Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-gold-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EducationSection;
