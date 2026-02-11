import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { FaTimes } from 'react-icons/fa';

const InfoModal = ({ isOpen, onClose, title, content, icon: Icon }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
            document.body.style.overflow = 'hidden';
        } else {
            const timer = setTimeout(() => setIsVisible(false), 300);
            document.body.style.overflow = 'unset';
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    if (!isVisible && !isOpen) return null;

    return createPortal(
        <div className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-all duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            {/* Backdrop */}
            <div
                className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className={`relative bg-white dark:bg-gray-900 w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-300 ${isOpen ? 'scale-100 translate-y-0' : 'scale-95 translate-y-4'}`}>

                {/* Header */}
                <div className="relative bg-vive-500 p-6 text-white overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>

                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors z-10"
                    >
                        <FaTimes className="w-4 h-4" />
                    </button>

                    <div className="flex items-center gap-4 relative z-10">
                        {Icon && (
                            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-inner">
                                <Icon className="w-6 h-6 text-white" />
                            </div>
                        )}
                        <div>
                            <h3 className="text-2xl font-bold font-display">{title}</h3>
                            <div className="h-1 w-12 bg-white/40 rounded-full mt-2"></div>
                        </div>
                    </div>
                </div>

                {/* Body */}
                <div className="p-6 md:p-8">
                    <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 leading-relaxed">
                        {content}
                    </div>

                    <div className="mt-8 flex justify-end">
                        <button
                            onClick={onClose}
                            className="px-6 py-2.5 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-white font-medium rounded-lg transition-colors"
                        >
                            Entendido
                        </button>
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
};

export default InfoModal;
