import React, { useEffect } from 'react';

const LegalModal = ({ isOpen, onClose, title, content }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>

            {/* Modal Container */}
            <div className="relative bg-white dark:bg-[#0a0a0a] w-full max-w-2xl max-h-[80vh] rounded-2xl shadow-2xl overflow-hidden border border-gray-100 dark:border-white/10 animate-modal-up">
                {/* Header */}
                <div className="sticky top-0 bg-white/80 dark:bg-black/80 backdrop-blur-md px-8 py-6 border-b border-gray-100 dark:border-white/10 flex justify-between items-center">
                    <h2 className="text-xl font-display font-black uppercase tracking-widest text-gray-900 dark:text-white">
                        {title}
                    </h2>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-full transition-colors"
                    >
                        <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l18 18" />
                        </svg>
                    </button>
                </div>

                {/* Content */}
                <div className="p-8 overflow-y-auto max-h-[calc(80vh-80px)]">
                    <div className="prose prose-sm dark:prose-invert max-w-none text-gray-600 dark:text-gray-400 font-sans leading-relaxed">
                        {content}
                    </div>
                </div>

                {/* Footer */}
                <div className="p-6 bg-gray-50 dark:bg-white/5 border-t border-gray-100 dark:border-white/10 flex justify-end">
                    <button
                        onClick={onClose}
                        className="px-8 py-3 bg-black dark:bg-gold-500 text-white dark:text-black font-display font-black text-[10px] uppercase tracking-[0.2em] rounded-full hover:scale-105 transition-transform"
                    >
                        Entendido
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LegalModal;
