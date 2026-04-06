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
                className="absolute inset-0 bg-black/40 backdrop-blur-xl animate-fade-in"
                onClick={onClose}
            ></div>

            <div className="relative bg-white dark:bg-[#0c0c0c] w-full max-w-4xl rounded-[3rem] overflow-hidden border border-gray-100 dark:border-white/5 shadow-3xl animate-slide-up flex flex-col md:flex-row max-h-[90vh]">

                {/* Left Column: Visual Context */}
                <div className="hidden md:flex w-[35%] relative flex-col justify-between p-12 overflow-hidden border-r border-gray-100 dark:border-white/5 bg-gray-50 dark:bg-black/20">
                    <div className="absolute inset-0 z-0 opacity-40">
                        <img
                            src={selectedMarket.image || modalBgImg}
                            alt={selectedMarket.title}
                            className="w-full h-full object-cover grayscale brightness-50"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
                    </div>

                    <div className="relative z-10">
                        <div className="w-12 h-1 bg-vive-500 mb-6 rounded-full"></div>
                        <span className="text-vive-500 text-[10px] font-bold uppercase tracking-[0.3em] block mb-2">{selectedMarket.tag}</span>
                    </div>

                    <div className="relative z-10 space-y-4">
                        <h4 className="text-3xl font-display font-medium text-white leading-tight tracking-tight">
                            {selectedMarket.title}
                        </h4>
                        <p className="text-gray-400 text-sm font-text leading-relaxed">
                            {selectedMarket.subtitle}
                        </p>
                    </div>
                </div>

                {/* Right Column: Form Content */}
                <div className="flex-1 p-8 md:p-14 relative flex flex-col overflow-y-auto custom-scrollbar">

                    <button
                        onClick={onClose}
                        className="absolute top-8 right-8 p-3 rounded-full hover:bg-gray-100 dark:hover:bg-white/5 transition-all text-gray-400 hover:text-vive-500 z-50 group"
                    >
                        <MdClose className="w-6 h-6 transition-transform group-hover:rotate-90" />
                    </button>

                    <div className="relative z-10 mb-10">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="text-vive-500 text-[11px] font-bold uppercase tracking-[0.3em]">Business Inquiry</span>
                            <div className="h-[1px] flex-1 bg-gray-100 dark:bg-white/5"></div>
                        </div>
                        <h3 className="text-3xl md:text-4xl font-display font-medium text-gray-900 dark:text-white tracking-tight mb-4">
                            Solicite su Propuesta
                        </h3>
                        <p className="text-gray-500 dark:text-gray-400 text-base font-text leading-relaxed max-w-md">
                            Complete los datos de su empresa para recibir una asesoría personalizada y condiciones comerciales exclusivas.
                        </p>
                    </div>

                    <form onSubmit={onSubmit} className="space-y-6 relative z-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Razón Social</label>
                                <input
                                    type="text"
                                    required
                                    placeholder="Nombre de la empresa"
                                    value={waData.reasonSocial}
                                    onChange={(e) => setWaData({ ...waData, reasonSocial: e.target.value })}
                                    className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl px-5 py-4 text-gray-900 dark:text-white focus:outline-none focus:border-vive-500 transition-all font-medium placeholder:text-gray-300 dark:placeholder:text-gray-600 text-[15px]"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">RUC / DNI</label>
                                <input
                                    type="text"
                                    required
                                    placeholder="Identificación fiscal"
                                    value={waData.dni}
                                    onChange={(e) => setWaData({ ...waData, dni: e.target.value })}
                                    className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl px-5 py-4 text-gray-900 dark:text-white focus:outline-none focus:border-vive-500 transition-all font-medium placeholder:text-gray-300 dark:placeholder:text-gray-600 text-[15px]"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Nombre de Contacto</label>
                            <input
                                type="text"
                                required
                                placeholder="Persona responsable"
                                value={waData.name}
                                onChange={(e) => setWaData({ ...waData, name: e.target.value })}
                                className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl px-5 py-4 text-gray-900 dark:text-white focus:outline-none focus:border-vive-500 transition-all font-medium placeholder:text-gray-300 dark:placeholder:text-gray-600 text-[15px]"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Dirección</label>
                                <input
                                    type="text"
                                    required
                                    placeholder="Ubicación física"
                                    value={waData.address}
                                    onChange={(e) => setWaData({ ...waData, address: e.target.value })}
                                    className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl px-5 py-4 text-gray-900 dark:text-white focus:outline-none focus:border-vive-500 transition-all font-medium placeholder:text-gray-300 dark:placeholder:text-gray-600 text-[15px]"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Ciudad</label>
                                <input
                                    type="text"
                                    required
                                    placeholder="Ciudad / Distrito"
                                    value={waData.city}
                                    onChange={(e) => setWaData({ ...waData, city: e.target.value })}
                                    className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl px-5 py-4 text-gray-900 dark:text-white focus:outline-none focus:border-vive-500 transition-all font-medium placeholder:text-gray-300 dark:placeholder:text-gray-600 text-[15px]"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-vive-500 hover:bg-vive-600 text-black font-bold py-6 rounded-2xl shadow-xl shadow-vive-500/10 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-4 uppercase tracking-widest text-[11px] mt-8"
                        >
                            <FaWhatsapp className="text-xl" />
                            Enviar Solicitud Corporativa
                        </button>

                        <p className="text-center text-[10px] text-gray-400 uppercase tracking-widest font-medium">
                            Conexión directa con nuestro equipo comercial
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default WholesaleQuoteModal;

