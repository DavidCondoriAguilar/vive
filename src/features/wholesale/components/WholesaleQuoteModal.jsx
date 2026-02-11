import React from 'react';
import { FaWhatsapp, FaGlobeAmericas } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';

const WholesaleQuoteModal = ({
    selectedMarket,
    waData,
    setWaData,
    onClose,
    onSubmit,
    modalBgImg
}) => {
    if (!selectedMarket) return null;

    return (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8">
            {/* Backdrop with sophisticated blur */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-xl animate-fade-in"
                onClick={onClose}
            ></div>

            <div className="relative bg-white dark:bg-[#0F0F0F] w-full max-w-4xl rounded-[2.5rem] overflow-hidden border border-white/20 dark:border-white/5 shadow-[0_50px_100px_rgba(0,0,0,0.5)] animate-slide-up flex flex-col md:flex-row max-h-[90vh]">

                {/* Left Column: Dynamic Visual Context */}
                <div className="hidden md:flex w-[35%] relative flex-col justify-between p-10 overflow-hidden border-r border-gray-100 dark:border-white/5">
                    <div className="absolute inset-0 z-0">
                        <img
                            src={selectedMarket.image || modalBgImg}
                            alt={selectedMarket.title}
                            className="w-full h-full object-cover opacity-40 grayscale group-hover:scale-110 transition-transform duration-[10s]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/20 to-transparent"></div>
                    </div>

                    <div className="relative z-10">
                        <div className="w-12 h-1 bg-vive-500 mb-6"></div>
                        <span className="text-vive-500 text-[10px] font-black uppercase tracking-[0.5em] block mb-2">{selectedMarket.tag}</span>
                        <span className="text-white text-[10px] font-bold uppercase tracking-widest opacity-40 italic">Vive Exclusive</span>
                    </div>

                    <div className="relative z-10">
                        <h4 className="text-2xl font-display font-black text-white uppercase leading-none tracking-tighter mb-4">
                            {selectedMarket.title.split(' ').map((word, i) => (
                                <span key={i} className="block">{word}</span>
                            ))}
                        </h4>
                        <p className="text-vive-500/80 text-[10px] uppercase tracking-[0.2em] font-black leading-tight border-l border-vive-500/30 pl-4 py-1">
                            {selectedMarket.subtitle}
                        </p>
                    </div>
                </div>

                {/* Right Column: Form Content */}
                <div className="flex-1 p-8 md:p-14 relative flex flex-col bg-gray-50/50 dark:bg-transparent overflow-y-auto custom-scrollbar">

                    <button
                        onClick={onClose}
                        className="absolute top-8 right-8 p-3 rounded-full hover:bg-gray-100 dark:hover:bg-white/5 transition-all text-gray-400 hover:text-vive-500 z-50 group"
                        aria-label="Cerrar modal de cotización"
                    >
                        <MdClose className="w-6 h-6 transition-transform group-hover:rotate-90" />
                    </button>

                    <div className="relative z-10 mb-10">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="h-[1px] w-8 bg-vive-500/30"></div>
                            <span className="text-vive-500 text-[11px] font-black uppercase tracking-[0.4em]">Solicitud Mayorista</span>
                        </div>
                        <h3 className="text-3xl md:text-4xl font-display font-black text-gray-900 dark:text-white uppercase mb-4 leading-tight tracking-tighter">
                            {selectedMarket.title}
                        </h3>
                        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-relaxed max-w-md mb-8">
                            Ingrese la información de su representada para agendar una visita comercial o cotización por volumen.
                        </p>

                        {/* National Coverage Section - Specific for Wholesale Distribution */}
                        {selectedMarket.id === 'tiendas' && (
                            <div className="mb-10 bg-gray-100 dark:bg-white/5 rounded-3xl p-8 border border-vive-500/10 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-vive-500/5 blur-3xl rounded-full"></div>
                                <div className="relative z-10">
                                    <div className="flex items-center gap-3 mb-6">
                                        <FaGlobeAmericas className="text-vive-500 text-xl" />
                                        <div>
                                            <h4 className="text-lg font-black text-gray-900 dark:text-white uppercase tracking-tight">Cobertura Total</h4>
                                            <p className="text-[10px] text-vive-500 font-black uppercase tracking-widest opacity-70">Sin Fronteras en el Territorio Nacional</p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-2 mb-6">
                                        {[
                                            'Amazonas', 'Áncash', 'Apurímac', 'Arequipa', 'Ayacucho', 'Cajamarca',
                                            'Callao', 'Cusco', 'Huancavelica', 'Huánuco', 'Ica', 'Junín',
                                            'La Libertad', 'Lambayeque', 'Lima', 'Loreto', 'Madre de Dios', 'Moquegua',
                                            'Pasco', 'Piura', 'Puno', 'San Martín', 'Tacna', 'Tumbes', 'Ucayali'
                                        ].map((dept) => (
                                            <div key={dept} className="flex items-center gap-2 group/item">
                                                <div className="w-1 h-1 rounded-full bg-vive-500 group-hover/item:scale-150 transition-transform"></div>
                                                <span className="text-[11px] font-bold text-gray-600 dark:text-gray-400 group-hover/item:text-vive-500 transition-colors uppercase tracking-tighter">{dept}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="p-4 bg-white/50 dark:bg-black/40 rounded-xl border border-vive-500/5">
                                        <p className="text-[11px] font-medium text-gray-500 dark:text-gray-400 leading-relaxed italic">
                                            "Entregamos colchones, tarimas, cunas y almohadas con plazos garantizados y seguro de transporte integral en cada uno de los 24 departamentos."
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    <form onSubmit={onSubmit} className="space-y-8 relative z-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-3">
                                <label className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em] ml-1">Razón Social</label>
                                <input
                                    type="text"
                                    required
                                    placeholder="Nombre de la empresa"
                                    value={waData.reasonSocial}
                                    onChange={(e) => setWaData({ ...waData, reasonSocial: e.target.value })}
                                    className="w-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-4 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-vive-500/50 focus:border-vive-500 transition-all font-bold placeholder:text-gray-300 dark:placeholder:text-gray-600 text-[15px]"
                                />
                            </div>
                            <div className="space-y-3">
                                <label className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em] ml-1">RUC / DNI</label>
                                <input
                                    type="text"
                                    required
                                    placeholder="Identificación fiscal"
                                    value={waData.dni}
                                    onChange={(e) => setWaData({ ...waData, dni: e.target.value })}
                                    className="w-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-4 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-vive-500/50 focus:border-vive-500 transition-all font-bold placeholder:text-gray-300 dark:placeholder:text-gray-600 text-[15px]"
                                />
                            </div>
                        </div>

                        <div className="space-y-3">
                            <label className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em] ml-1">Representante de Ventas / Contacto</label>
                            <input
                                type="text"
                                required
                                placeholder="Nombre y Apellidos"
                                value={waData.name}
                                onChange={(e) => setWaData({ ...waData, name: e.target.value })}
                                className="w-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-4 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-vive-500/50 focus:border-vive-500 transition-all font-bold placeholder:text-gray-300 dark:placeholder:text-gray-600 text-[15px]"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-3">
                                <label className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em] ml-1">Sede / Dirección</label>
                                <input
                                    type="text"
                                    required
                                    placeholder="Dirección física"
                                    value={waData.address}
                                    onChange={(e) => setWaData({ ...waData, address: e.target.value })}
                                    className="w-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-4 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-vive-500/50 focus:border-vive-500 transition-all font-bold placeholder:text-gray-300 dark:placeholder:text-gray-600 text-[15px]"
                                />
                            </div>
                            <div className="space-y-3">
                                <label className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em] ml-1">Ciudad</label>
                                <input
                                    type="text"
                                    required
                                    placeholder="Ciudad / Distrito"
                                    value={waData.city}
                                    onChange={(e) => setWaData({ ...waData, city: e.target.value })}
                                    className="w-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-4 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-vive-500/50 focus:border-vive-500 transition-all font-bold placeholder:text-gray-300 dark:placeholder:text-gray-600 text-[15px]"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#25D366] hover:bg-[#20ba61] text-white font-black py-6 rounded-2xl shadow-xl shadow-green-500/20 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-4 uppercase tracking-[0.3em] text-xs mt-6"
                        >
                            <FaWhatsapp className="w-5 h-5" />
                            AGENDAR CONSULTA CORPORATIVA
                        </button>

                        <p className="text-center text-[9px] text-gray-400 dark:text-gray-500 uppercase tracking-widest font-bold">
                            Respuesta inmediata de nuestro equipo comercial Pro.
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default WholesaleQuoteModal;
