import React from 'react';
import { FaShieldAlt, FaMedal, FaHeadset } from 'react-icons/fa';
import RevealSection from '@/components/ui/RevealSection';

const RiskReversal = () => {
    const policies = [
        {
            icon: <FaShieldAlt className="w-8 h-8 md:w-12 md:h-12 text-vive-500 mb-6 group-hover:scale-110 transition-transform duration-500" />,
            title: "30 Noches de Prueba",
            desc: "Úsalo. Duérmelo. Pásale por encima. Si tu cuerpo no siente la diferencia abismal, te devolvemos tu inversión íntegramente.",
            tag: "Sin Riesgo"
        },
        {
            icon: <FaMedal className="w-8 h-8 md:w-12 md:h-12 text-vive-500 mb-6 group-hover:scale-110 transition-transform duration-500" />,
            title: "Garantía de Fábrica",
            desc: "Construimos con acero vulcanizado y espuma de 65kg/m³. Nuestros colchones están diseñados al milímetro para no deformarse con el tiempo.",
            tag: "Certificado"
        },
        {
            icon: <FaHeadset className="w-8 h-8 md:w-12 md:h-12 text-vive-500 mb-6 group-hover:scale-110 transition-transform duration-500" />,
            title: "Soporte Concierge 24/7",
            desc: "Asesoría somnológica directa con expertos de fábrica. Nada de bots mediocres, solucionamos tu descanso en minutos.",
            tag: "Boutique"
        }
    ];

    return (
        <section className="py-24 lg:py-40 bg-gray-50 dark:bg-[#050505] relative border-t border-gray-100 dark:border-white/5">
            <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-7xl">
                <RevealSection className="text-center mb-16 md:mb-24">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] font-mono text-gray-500 dark:text-gray-400 bg-black/5 dark:bg-white/5 px-4 py-1.5 rounded-sm inline-block mb-6">
                        El Escudo Anti-Riesgos
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-black text-gray-900 dark:text-white uppercase leading-[0.85] tracking-tighter mix-blend-difference mb-8">
                        Decisión a prueba de <br className="hidden md:block"/>
                        <span className="text-vive-500 font-brand italic lowercase tracking-normal bg-clip-text">
                            excusas
                        </span>
                    </h2>
                </RevealSection>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
                    {policies.map((policy, idx) => (
                        <RevealSection delay={idx * 150} key={idx} className="bg-white dark:bg-[#0A0A0A] rounded-[2.5rem] p-10 md:p-14 border border-gray-100 dark:border-white/5 shadow-2xl shadow-gray-200/50 dark:shadow-none hover:-translate-y-2 hover:border-vive-500/20 transition-all duration-700 group flex flex-col justify-between h-full">
                            <div>
                                <div className="flex justify-between items-start">
                                    {policy.icon}
                                    <span className="text-[9px] font-black uppercase tracking-widest font-mono text-gray-400 dark:text-gray-500 border border-gray-200 dark:border-white/10 px-2 py-1 rounded-sm">
                                        {policy.tag}
                                    </span>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white uppercase tracking-tighter mb-4 font-display">
                                    {policy.title}
                                </h3>
                                <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base font-medium leading-relaxed font-text">
                                    {policy.desc}
                                </p>
                            </div>
                            
                            <div className="mt-10 h-[2px] w-12 bg-gray-200 dark:bg-white/10 group-hover:w-full group-hover:bg-vive-500 transition-all duration-700"></div>
                        </RevealSection>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RiskReversal;
