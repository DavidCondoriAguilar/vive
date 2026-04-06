import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import { MdVerified } from 'react-icons/md';

const WholesaleSocialProof = () => {
    const clients = [
        { name: 'Cadenas de Hoteles', sector: 'Hotelería' },
        { name: 'Socios Minoristas', sector: 'Distribución' },
        { name: 'Inmobiliarias', sector: 'Proyectos' },
        { name: 'Gobierno', sector: 'Sector Público' },
        { name: 'Salud', sector: 'Clínicas' },
        { name: 'Educación', sector: 'Universidades' }
    ];

    const testimonials = [
        {
            quote: "Vive nos provee más de 200 unidades mensuales para nuestras sedes. Cumplimiento al 100% en tiempos y calidad. Son un socio estratégico real.",
            author: "Director de Operaciones",
            company: "Cadena Hotelera Regional",
            metric: "+200 unidades/mes"
        },
        {
            quote: "Buscábamos un proveedor local con calidad de exportación. Vive superó nuestras expectativas en personalización y respuesta técnica.",
            author: "Gerente de Compras",
            company: "Distribuidora Nacional",
            metric: "3 años de alianza"
        }
    ];

    return (
        <section className="py-24 lg:py-40 bg-white dark:bg-[#050505] relative overflow-hidden transition-colors duration-700">
            {/* Subtle grid */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(#80808020_1px,transparent_1px)] [background-size:48px_48px]"></div>
            </div>

            <div className="container mx-auto px-6 lg:px-20 relative z-10">
                {/* Header */}
                <div className="max-w-3xl mb-20 lg:mb-28 space-y-6">
                    <div className="inline-flex items-center gap-3">
                        <div className="h-px w-8 bg-vive-500"></div>
                        <span className="text-[10px] font-mono font-black uppercase tracking-[0.4em] text-vive-600 dark:text-vive-400">
                            Confianza y Trayectoria
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-light text-gray-950 dark:text-white leading-[0.9] tracking-tighter">
                        Respaldados por <br />
                        <span className="text-vive-500 italic font-serif font-medium">resultados</span> reales.
                    </h2>
                </div>

                {/* Sectors Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6 mb-20 lg:mb-28">
                    {clients.map((client, idx) => (
                        <div
                            key={idx}
                            className="group relative p-6 lg:p-8 border border-gray-100 dark:border-white/5 bg-gray-50/50 dark:bg-white/[0.02] hover:border-vive-500/20 hover:bg-vive-500/[0.03] transition-all duration-500 text-center"
                        >
                            <div className="w-10 h-10 mx-auto mb-4 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center group-hover:bg-vive-500/10 transition-colors duration-500">
                                <MdVerified className="text-gray-300 dark:text-gray-600 group-hover:text-vive-500 transition-colors text-lg" />
                            </div>
                            <div className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-900 dark:text-white mb-1">
                                {client.name}
                            </div>
                            <div className="text-[8px] font-mono text-gray-400 uppercase tracking-widest">
                                {client.sector}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Testimonials */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
                    {testimonials.map((t, idx) => (
                        <div
                            key={idx}
                            className="group relative p-10 lg:p-14 border border-gray-100 dark:border-white/5 bg-gray-50/30 dark:bg-white/[0.02] hover:bg-white dark:hover:bg-white/[0.04] transition-all duration-700 overflow-hidden"
                        >
                            {/* Accent stripe */}
                            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-vive-500 via-vive-500/50 to-transparent group-hover:w-1.5 transition-all duration-500"></div>

                            <div className="space-y-8">
                                <FaQuoteLeft className="text-2xl text-vive-500/20 group-hover:text-vive-500/40 transition-colors" />

                                <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 font-brand italic leading-relaxed">
                                    "{t.quote}"
                                </p>

                                <div className="flex items-center justify-between pt-6 border-t border-gray-100 dark:border-white/5">
                                    <div className="space-y-1">
                                        <div className="text-xs font-black uppercase tracking-wider text-gray-900 dark:text-white">
                                            {t.author}
                                        </div>
                                        <div className="text-[10px] text-gray-400 font-mono uppercase tracking-widest">
                                            {t.company}
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-lg lg:text-2xl font-display font-light text-vive-500 tracking-tight">
                                            {t.metric}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WholesaleSocialProof;
