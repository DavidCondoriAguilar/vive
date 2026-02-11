import React from 'react';

const WholesaleStats = ({ stats }) => {
    return (
        <div className="relative z-20 -mt-16 container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 bg-[#0A0A0A]/90 backdrop-blur-xl border border-white/5 shadow-[0_60px_100px_rgba(0,0,0,0.5)] transition-all overflow-hidden rounded-sm">
                {stats.map((stat, idx) => (
                    <div key={idx} className="p-10 border-r border-white/5 last:border-0 flex flex-col items-center group relative overflow-hidden">
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-vive-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                        <span className="text-4xl md:text-5xl font-display font-black text-vive-500 mb-2 group-hover:scale-110 transition-transform duration-500">{stat.value}</span>
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500">{stat.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WholesaleStats;
