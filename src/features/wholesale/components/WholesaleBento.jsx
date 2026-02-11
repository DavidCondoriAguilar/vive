import React from 'react';
import { FaTruck, FaCertificate, FaArrowRight } from 'react-icons/fa';
import { MdVerified } from 'react-icons/md';

const WholesaleBento = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 auto-rows-[350px]">
            {/* Main Brand Card */}
            <div className="lg:col-span-2 row-span-1 bg-white dark:bg-black/40 p-16 flex flex-col justify-center border border-gray-100 dark:border-white/5 relative group overflow-hidden shadow-sm">
                <div className="absolute bottom-0 left-0 w-full h-1 bg-vive-600 dark:bg-vive-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                <h3 className="text-4xl font-display font-black text-gray-900 dark:text-white uppercase mb-4 tracking-tighter">Calidad Certificada</h3>
                <p className="text-gray-500 font-text max-w-sm">Protocolos exhaustivos de resistencia y elasticidad bajo estándares internacionales e INACAL.</p>
                <div className="mt-8 flex items-center gap-4 text-vive-500 font-black text-xs uppercase tracking-widest group-hover:translate-x-4 transition-transform">
                    Quality Assurance Protocol <FaArrowRight />
                </div>
            </div>

            {/* Verification Stats */}
            <div className="bg-vive-600 dark:bg-vive-500 p-12 flex flex-col justify-between group shadow-xl">
                <MdVerified className="text-white dark:text-black text-6xl group-hover:scale-110 transition-transform" />
                <div className="text-white dark:text-black">
                    <span className="text-6xl font-display font-black block tracking-tighter">100%</span>
                    <span className="text-xs font-black uppercase tracking-widest">Malla Peruana Certificada</span>
                </div>
            </div>

            <div className="bg-gray-900 dark:bg-black text-white p-12 border border-white/10 flex flex-col justify-between group shadow-xl transition-colors">
                <FaCertificate className="text-vive-500 text-4xl group-hover:rotate-12 transition-transform" />
                <div>
                    <h4 className="font-display font-black text-sm uppercase tracking-widest mb-2">INACAL Standard</h4>
                    <p className="text-[10px] opacity-40 font-mono tracking-widest uppercase">NTP HO-001 High Transit Certification</p>
                </div>
            </div>

            {/* Logistics Card */}
            <div className="lg:col-span-2 bg-white dark:bg-[#0A0A0A] p-16 border border-gray-100 dark:border-white/5 flex flex-col justify-center overflow-hidden relative group shadow-sm">
                <div className="relative z-10 space-y-4">
                    <h3 className="text-4xl font-display font-black text-gray-900 dark:text-white uppercase tracking-tighter">Logística Pro</h3>
                    <p className="text-gray-400 font-text uppercase text-[10px] tracking-[0.4em]">Flota Especializada // Cero Micro-daños</p>
                </div>
                <FaTruck className="text-gray-100 dark:text-white/5 text-[20rem] absolute -right-20 -bottom-20 transform -rotate-12 group-hover:rotate-0 group-hover:text-vive-600/10 dark:group-hover:text-vive-500/10 transition-all duration-700" />
            </div>
        </div>
    );
};

export default WholesaleBento;
