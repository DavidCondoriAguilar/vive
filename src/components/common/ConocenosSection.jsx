import React from 'react';
import {
    MdScience,
    MdBiotech,
    MdVerifiedUser,
    MdMemory
} from 'react-icons/md';
import {
    FaFlask,
    FaMicroscope,
    FaAward,
    FaCertificate
} from 'react-icons/fa';

const ConocenosSection = () => {
    const features = [
        {
            icon: <MdScience className="w-8 h-8 text-vive-500" />,
            title: "Alta investigación y desarrollo",
            description: "Laboratorio de ensayo acreditado internacionalmente."
        },
        {
            icon: <MdBiotech className="w-8 h-8 text-vive-500" />,
            title: "Exigentes procesos de producción",
            description: "Los mejores insumos y un riguroso control para un desarrollo excepcional."
        },
        {
            icon: <FaCertificate className="w-8 h-8 text-vive-500" />,
            title: "Nuestra garantia en un chip",
            description: "Innovación que asegura nuestro absoluto compromiso con tu satisfacción"
        }
    ];

    return (
        <section className="py-20 professional-section relative overflow-hidden">
            <div className="container mx-auto px-6 lg:px-20">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-gray-900 dark:text-white mb-6">
                        ¿Por qué <span className="text-vive-500">somos diferentes</span>?
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        CONÓCENOS - Experiencia, innovación y compromiso con tu descanso
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="text-center p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-gray-100 dark:border-white/5 hover:shadow-xl transition-all duration-300 group hover:scale-105"
                        >
                            <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-vive-500 transition-colors">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Trust Banner */}
                <div className="mt-16 p-8 bg-gradient-to-r from-vive-50 to-vive-100 dark:from-vive-900/20 dark:to-vive-900/10 rounded-2xl border border-vive-200 dark:border-vive-700/30">
                    <div className="text-center">
                        <div className="flex justify-center gap-4 mb-4">
                            <FaFlask className="w-6 h-6 text-vive-600 dark:text-vive-400" />
                            <FaMicroscope className="w-6 h-6 text-vive-600 dark:text-vive-400" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                            Experiencia que nos diferencia
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
                            Cada sistema de descanso Vive representa años de investigación estratégica y perfeccionamiento industrial.
                            No solo fabricamos colchones, lideramos la transformación de la vida a través del sueño profundo.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ConocenosSection;
