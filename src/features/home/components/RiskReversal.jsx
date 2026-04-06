import React from 'react';
import { FaShieldAlt, FaMedal, FaHeadset } from 'react-icons/fa';
import RevealSection from '@shared/components/ui/RevealSection';

const RiskReversal = () => {
    const policies = [
        {
            icon: <FaShieldAlt />,
            title: "30 Noches de Prueba",
            tag: "Sin Riesgo"
        },
        {
            icon: <FaMedal />,
            title: "Garantía de Fábrica",
            tag: "Certificado"
        },
        {
            icon: <FaHeadset />,
            title: "Soporte Concierge 24/7",
            tag: "Boutique"
        }
    ];

    return (
        <section className="py-24 lg:py-40 bg-gray-50 dark:bg-[#050505] relative border-t border-gray-100 dark:border-white/5">
            <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-7xl">
                <RevealSection className="text-center mb-16 md:mb-24">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] font-mono text-gray-500 dark:text-gray-400 bg-black/5 dark:bg-white/5 px-4 py-1.5 rounded-sm inline-block mb-6">
                        Garantía de Excelencia
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-black text-gray-900 dark:text-white uppercase leading-[0.85] tracking-tighter mix-blend-difference mb-8">
                        Nuestro compromiso <br className="hidden md:block"/>
                        <span className="text-vive-500 font-brand italic lowercase tracking-normal bg-clip-text">
                            de satisfacción
                        </span>
                    </h2>
                </RevealSection>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {policies.map((policy, idx) => (
                        <RevealSection delay={idx * 150} key={idx} className="bg-white dark:bg-[#0A0A0A] rounded-3xl p-8 border border-gray-100 dark:border-white/5 hover:border-vive-500/30 transition-all duration-700 group flex items-center gap-6">
                            <div className="text-vive-500 text-3xl group-hover:scale-110 transition-transform duration-500">
                                {policy.icon}
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[8px] font-black uppercase tracking-[0.2em] font-mono text-vive-500/60 mb-1">
                                    {policy.tag}
                                </span>
                                <h3 className="text-lg md:text-xl font-black text-gray-900 dark:text-white uppercase tracking-tighter font-display">
                                    {policy.title}
                                </h3>
                            </div>
                        </RevealSection>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RiskReversal;
