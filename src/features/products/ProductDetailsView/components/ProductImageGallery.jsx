import React, { useState, useRef } from 'react';
import LazyImage from '@/components/common/Image';
import { FaShare, FaExpandAlt } from 'react-icons/fa';

const ProductImageGallery = ({
    productImages,
    activeImageIndex,
    setActiveImageIndex,
    productName
}) => {
    const [isHovered, setIsHovered] = useState(false);
    const [showLightbox, setShowLightbox] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
    const containerRef = useRef();

    const handleMouseMove = (e) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setMousePos({ x, y });
    };

    return (
        <div className="space-y-4 animate-in fade-in duration-1000">
            {/* 2026 Elite Editorial Stage */}
            <div
                className="relative group cursor-none overflow-hidden"
                onClick={() => setShowLightbox(true)}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                ref={containerRef}
            >
                <div
                    className="relative aspect-square bg-[#F8F8F8] dark:bg-white/[0.02] rounded-[3rem] overflow-hidden flex items-center justify-center transition-all duration-700 shadow-2xl shadow-black/5"
                >
                    {/* Primary Focus Engine */}
                    <div
                        className="absolute inset-0 transition-transform duration-700 ease-out flex items-center justify-center p-8"
                        style={{
                            transform: isHovered ? `scale(1.05) translate(${(50 - mousePos.x) / 15}%, ${(50 - mousePos.y) / 15}%)` : 'scale(1) translate(0,0)'
                        }}
                    >
                        <LazyImage
                            src={productImages[activeImageIndex]}
                            alt={productName}
                            priority={true}
                            className={`max-w-full max-h-full object-contain transition-all duration-700 ${isHovered ? 'blur-[1px] opacity-40' : 'opacity-100'}`}
                        />
                    </div>

                    {/* Hyper-Detail Portal (2026 Lens Effect) */}
                    <div
                        className={`absolute inset-0 pointer-events-none transition-opacity duration-500 overflow-hidden ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                        style={{
                            clipPath: `circle(120px at ${mousePos.x}% ${mousePos.y}%)`,
                            WebkitClipPath: `circle(120px at ${mousePos.x}% ${mousePos.y}%)`,
                        }}
                    >
                        <div
                            className="absolute inset-0 flex items-center justify-center transition-transform duration-150 ease-out"
                            style={{
                                transform: `scale(1.8) translate(${(50 - mousePos.x) / 1.8}%, ${(50 - mousePos.y) / 1.8}%)`
                            }}
                        >
                            <img
                                src={productImages[activeImageIndex]}
                                alt={`${productName} Zoom`}
                                className="max-w-full max-h-full object-contain"
                            />
                        </div>
                        {/* High-End Optics Glow */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent mix-blend-overlay"></div>
                    </div>

                    {/* Custom 2026 Cursor */}
                    <div
                        className={`absolute w-16 h-16 border border-vive-600/30 rounded-full pointer-events-none z-[110] mix-blend-difference items-center justify-center hidden lg:flex transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                        style={{
                            left: `${mousePos.x}%`,
                            top: `${mousePos.y}%`,
                            transform: 'translate(-50%, -50%)',
                        }}
                    >
                        <div className="w-1 h-1 bg-vive-600 rounded-full animate-ping"></div>
                        <span className="absolute -bottom-6 text-[8px] font-black text-white/50 uppercase tracking-[0.3em]">Enfoque_HD</span>
                    </div>

                    {/* Studio Light Highlight Layer */}
                    <div
                        className="absolute inset-0 pointer-events-none bg-gradient-to-br from-white/20 via-transparent to-black/10 opacity-30 mix-blend-overlay transition-transform duration-1000"
                        style={{ transform: `translate(${(mousePos.x - 50) / 20}%, ${(mousePos.y - 50) / 20}%)` }}
                    ></div>

                    {/* Minimal Overlays */}
                    <div className="absolute top-8 right-8 flex flex-col gap-4 z-20">
                        <button
                            className="w-12 h-12 rounded-2xl bg-white/90 dark:bg-black/90 backdrop-blur-2xl flex items-center justify-center text-gray-900 dark:text-white hover:scale-110 shadow-2xl border border-white/10 transition-all group/btn"
                            onClick={(e) => { e.stopPropagation(); }}
                        >
                            <FaShare className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                        </button>
                    </div>

                    {/* Branding Node */}
                    <div className="absolute bottom-8 left-10 opacity-40 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="flex items-center gap-3">
                            <div className="w-1 h-6 bg-vive-600"></div>
                            <span className="text-[10px] font-mono font-bold tracking-[0.4em] text-gray-900 dark:text-white uppercase">Vive // Optical Detail</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Kinetic Thumbnails */}
            <div className="flex gap-4 px-2 overflow-x-auto no-scrollbar pb-2">
                {productImages.map((image, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveImageIndex(index)}
                        className={`flex-shrink-0 w-24 h-24 rounded-[1.5rem] overflow-hidden border-2 transition-all duration-700 p-2 relative group-th ${activeImageIndex === index
                            ? 'border-vive-600 bg-white dark:bg-zinc-900 scale-105 shadow-xl shadow-vive-600/10'
                            : 'border-transparent bg-gray-50 dark:bg-zinc-900/10 hover:bg-gray-100'
                            }`}
                    >
                        <img
                            src={image}
                            alt={`${productName} view ${index + 1}`}
                            className={`w-full h-full object-contain transition-all duration-700 ${activeImageIndex === index ? 'opacity-100 grayscale-0' : 'opacity-40 grayscale group-th:opacity-70 group-th:grayscale-0'}`}
                        />
                        {activeImageIndex === index && (
                            <div className="absolute bottom-1 right-1 w-1.5 h-1.5 bg-vive-600 rounded-full"></div>
                        )}
                    </button>
                ))}
            </div>

            {/* Professional Lightbox Portal */}
            {showLightbox && (
                <div
                    className="fixed inset-0 z-[1000] bg-black/98 backdrop-blur-2xl flex items-center justify-center p-6 md:p-20 animate-in fade-in zoom-in-95 duration-500 cursor-zoom-out"
                    onClick={() => setShowLightbox(false)}
                >
                    <div className="absolute top-10 right-10 flex items-center gap-6">
                        <div className="text-right">
                            <p className="text-[10px] font-black text-vive-600 uppercase tracking-widest">Master View</p>
                            <p className="text-[8px] text-white/30 uppercase tracking-[0.3em]">ESC para salir</p>
                        </div>
                        <button className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
                            <span className="text-xl">×</span>
                        </button>
                    </div>
                    <img
                        src={productImages[activeImageIndex]}
                        alt={productName}
                        className="max-w-full max-h-full object-contain shadow-2xl"
                    />
                </div>
            )}
        </div>
    );
};

export default ProductImageGallery;
