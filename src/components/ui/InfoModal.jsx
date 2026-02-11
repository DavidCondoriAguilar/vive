import React from 'react';
import { LuX } from 'react-icons/lu';

/**
 * Modern Info Modal for Footer Content
 * Avoids creating unnecessary pages for static policies
 */
const InfoModal = ({ isOpen, onClose, content }) => {
    if (!isOpen || !content) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-md animate-fade-in"
                onClick={onClose}
            ></div>

            {/* Modal Container */}
            <div className="relative bg-white dark:bg-[#0F0F0F] w-full max-w-2xl rounded-[2.5rem] shadow-[0_50px_100px_rgba(0,0,0,0.5)] border border-gray-100 dark:border-white/5 overflow-hidden animate-slide-up">

                {/* Header Overlay Style */}
                <div className="absolute top-0 right-0 p-8 z-20">
                    <button
                        onClick={onClose}
                        className="p-3 bg-gray-50 dark:bg-white/5 rounded-full hover:bg-red-500 hover:text-white transition-all text-gray-500 group"
                    >
                        <LuX className="w-5 h-5 transition-transform group-hover:rotate-90" />
                    </button>
                </div>

                <div className="flex flex-col md:flex-row h-full">
                    {/* Left Icon Accent */}
                    <div className="w-full md:w-32 bg-vive-500/5 dark:bg-white/[0.02] flex items-center justify-center p-8 border-b md:border-b-0 md:border-r border-gray-100 dark:border-white/5">
                        <div className="scale-[1.5]">
                            {content.icon}
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="flex-1 p-8 md:p-12">
                        <div className="mb-8">
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-vive-500 mb-2 block">Sueño Dorado Oficial</span>
                            <h2 className="text-3xl md:text-4xl font-display font-black text-gray-900 dark:text-white uppercase tracking-tighter leading-none">
                                {content.title}
                            </h2>
                        </div>

                        <div className="max-h-[60vh] overflow-y-auto pr-4 custom-scrollbar">
                            {content.content}
                        </div>

                        {/* Footer Hint */}
                        <div className="mt-8 pt-8 border-t border-gray-50 dark:border-white/5 flex justify-between items-center">
                            <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Compromiso Industrial 2026</p>
                            <button
                                onClick={onClose}
                                className="text-xs font-black text-gray-900 dark:text-white uppercase tracking-widest hover:text-vive-500 transition-colors"
                            >
                                Entendido
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoModal;
