import React from 'react';
import { FaCheckCircle, FaExclamationCircle, FaBed, FaSprayCan } from 'react-icons/fa';
import sleepingGuideImg from '@/assets/images/generated/sleeping_positions_guide_1772461635599.png';
import mattressCareImg from '@/assets/images/generated/mattress_care_guide_1772461655483.png';

const WholesaleGuides = () => {
    return (
        <section className="py-24 bg-white dark:bg-[#050505] overflow-hidden" id="guias-descanso">
            <div className="container mx-auto px-6 lg:px-20">

                {/* Section Header */}
                <div className="max-w-3xl mb-16">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="text-vive-500 font-bold uppercase tracking-[0.3em] text-[10px]">Lifestyle & Care</span>
                        <div className="h-[1px] w-12 bg-vive-500/30"></div>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-display font-medium text-gray-900 dark:text-white tracking-tight mb-6">
                        Guía Maestra para un <span className="serif italic text-vive-500">Descanso Perfecto</span>
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 text-lg font-text leading-relaxed">
                        Un buen sistema de descanso es solo el 50%. El otro 50% es cómo lo usas y cómo lo cuidas. Aquí te mostramos cómo maximizar tu inversión.
                    </p>
                </div>

                {/* Guide 1: Sleeping Correctly */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-vive-500/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        <div className="relative rounded-[2.5rem] overflow-hidden border border-gray-100 dark:border-white/5 shadow-2xl">
                            <img
                                src={sleepingGuideImg}
                                alt="Guía de posturas para dormir"
                                className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                            <div className="absolute bottom-8 left-8 right-8 text-white">
                                <span className="text-[10px] uppercase tracking-widest font-bold opacity-80 mb-2 block">Técnicas de Alineación</span>
                                <h3 className="text-2xl font-display font-medium">Postura Ergonómica</h3>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-10">
                        <div>
                            <h3 className="text-3xl font-display font-medium text-gray-900 dark:text-white mb-6">¿Cómo dormir correctamente?</h3>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-vive-50 dark:bg-vive-500/10 flex items-center justify-center text-vive-500">
                                        <FaCheckCircle />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 dark:text-white mb-1">Alineación de la Columna</h4>
                                        <p className="text-gray-500 dark:text-gray-400 text-sm font-text">Mantén la columna en una posición neutral. Si duermes de lado, usa una almohada entre las rodillas para nivelar las caderas.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-vive-50 dark:bg-vive-500/10 flex items-center justify-center text-vive-500">
                                        <FaCheckCircle />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 dark:text-white mb-1">Apoyo Cervical</h4>
                                        <p className="text-gray-500 dark:text-gray-400 text-sm font-text">Tu almohada debe llenar el espacio entre tu oreja y el hombro, manteniendo tu cuello alineado con el resto de la espalda.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-50 dark:bg-orange-500/10 flex items-center justify-center text-orange-500">
                                        <FaExclamationCircle />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 dark:text-white mb-1">Evita dormir boca abajo</h4>
                                        <p className="text-gray-500 dark:text-gray-400 text-sm font-text">Esta posición fuerza la rotación del cuello y arquea la espalda baja excesivamente, pudiendo causar dolor crónico.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 bg-gray-50 dark:bg-white/5 rounded-3xl border border-gray-100 dark:border-white/5 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-vive-500/5 blur-3xl rounded-full translate-x-10 -translate-y-10 transition-transform duration-500 group-hover:scale-150"></div>
                            <h4 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-widest mb-4">Pro Tip: Vive Resilience</h4>
                            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed italic">
                                "Nuestra tecnología de resortes Pocket está diseñada para adaptarse milimétricamente a estos puntos de presión, facilitando la adopción de estas posturas correctas sin esfuerzo."
                            </p>
                        </div>
                    </div>
                </div>

                {/* Guide 2: Mattress Care */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center flex-row-reverse">
                    <div className="order-2 lg:order-1 space-y-10">
                        <div>
                            <h3 className="text-3xl font-display font-medium text-gray-900 dark:text-white mb-6">Cuidado y Mantenimiento</h3>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-vive-50 dark:bg-vive-500/10 flex items-center justify-center text-vive-500">
                                        <FaSprayCan />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 dark:text-white mb-1">Limpieza Superficial</h4>
                                        <p className="text-gray-500 dark:text-gray-400 text-sm font-text">Aspira tu colchón cada 3 meses para eliminar ácaros y polvo. Si hay manchas, usa un paño ligeramente húmedo con jabón neutro, ¡nunca empapes el colchón!</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-vive-50 dark:bg-vive-500/10 flex items-center justify-center text-vive-500">
                                        <FaBed />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 dark:text-white mb-1">Rotación Programada</h4>
                                        <p className="text-gray-500 dark:text-gray-400 text-sm font-text">Rota tu colchón (pies a cabeza) cada 3-6 meses para asegurar un desgaste uniforme de los materiales de confort y alargar su vida útil.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-vive-50 dark:bg-vive-500/10 flex items-center justify-center text-vive-500">
                                        <FaCheckCircle />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 dark:text-white mb-1">Uso de Protector</h4>
                                        <p className="text-gray-500 dark:text-gray-400 text-sm font-text">Un protector de colchón impermeable pero transpirable es obligatorio. Protege contra fluidos, sudor y piel muerta, manteniendo la higiene interna intacta.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-10 bg-gradient-to-br from-vive-600 to-vive-800 rounded-3xl text-white shadow-xl shadow-vive-500/20">
                            <h4 className="text-xl font-display font-medium mb-4">Maximiza tu Inversión</h4>
                            <p className="opacity-80 text-sm leading-relaxed mb-6">
                                Siguindo estos sencillos pasos, puedes extender la vida de tu colchón Vive hasta por 10 años, manteniendo el soporte y confort del primer día.
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-[10px] font-bold uppercase tracking-widest">Garantía Platinum</div>
                                <div className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-[10px] font-bold uppercase tracking-widest">Soporte Vive</div>
                            </div>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2 relative group">
                        <div className="absolute -inset-4 bg-vive-500/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        <div className="relative rounded-[2.5rem] overflow-hidden border border-gray-100 dark:border-white/5 shadow-2xl">
                            <img
                                src={mattressCareImg}
                                alt="Guía de cuidado del colchón"
                                className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                            <div className="absolute bottom-8 left-8 right-8 text-white">
                                <span className="text-[10px] uppercase tracking-widest font-bold opacity-80 mb-2 block">Mantenimiento Pro</span>
                                <h3 className="text-2xl font-display font-medium">Larga Vida a su Descanso</h3>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default WholesaleGuides;
