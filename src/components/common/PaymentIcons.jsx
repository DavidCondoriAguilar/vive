import React from 'react';

const PaymentIcons = ({ className = "" }) => {
  return (
    <div className={`flex flex-col sm:flex-row items-center gap-4 ${className}`}>
      <span className="text-[10px] text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em] font-bold">
        Pagos Seguros:
      </span>

      <div className="flex items-center gap-3">
        {/* Visa */}
        <div className="group relative h-7 w-11 bg-white dark:bg-zinc-800 rounded border border-gray-100 dark:border-white/10 p-1 shadow-sm flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-blue-500/50">
          <svg viewBox="0 0 45 15" className="h-full w-full">
            <path fill="#1434CB" d="M11.66 14.28L13.72 2h2.57l-2.06 12.28h-2.57zm18.34-11.85c-.47-.22-1.21-.45-2.14-.45-2.36 0-4.02 1.22-4.04 2.97-.02 1.3 1.14 2.02 2.05 2.45.92.45 1.25.72 1.25 1.13-.01.62-.77.9-1.48.9-.99 0-1.52-.15-2.33-.5l-.32-.15-.35 2.11c.58.26 1.66.49 2.78.5 2.51 0 4.14-1.21 4.17-3.08.02-1.03-.63-1.81-2.01-2.45-.84-.42-1.35-.71-1.35-1.14 0-.41.45-.84 1.44-.84.81-.01 1.42.17 1.88.37l.22.1.38-2.12zm9.14 4.5l-1.09 5.35H35.8l2.5-12h2.23l2.87 12H41l-.52-2.35h-3.34zm2.7-2.17l-.88-4.24-1.53 7.37s.21-.01.32-.01h2.09c.01 0 .01-.01.01-.01l.31-2.38s-.32.01-.32.73zm-27.42 2.17l.02.13c.12.5.58.67 1.05.7.12.01.21.01.33 0 1.08-.01 2.01-.48 2.01-.48l.41 1.88s-.86.35-2.34.35c-2.43 0-4.14-1.31-4.14-3.55 0-2.34 2.04-4.28 4.62-4.28 1.41 0 2.44.4 2.44.4l-.36 1.95s-.76-.32-1.63-.32c-1.45 0-2.41 1-2.41 2.44 0 .24.01.45.01.78zM.16 2.13L0 2.15l2.42 6.13-.88 4.14h2.51l3.72-10.28H5.21c-.81 0-1.49.46-1.78 1.14L.16 2.13z" />
          </svg>
        </div>

        {/* Mastercard */}
        <div className="group relative h-7 w-11 bg-white dark:bg-zinc-800 rounded border border-gray-100 dark:border-white/10 p-1 shadow-sm flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-orange-500/50">
          <svg viewBox="0 0 32 24" className="h-full w-full">
            <circle cx="10" cy="12" r="10" fill="#EB001B" />
            <circle cx="22" cy="12" r="10" fill="#FF5F00" />
            <path fill="#F79E1B" d="M16 4.38a9.92 9.92 0 0 0 0 15.24 9.92 9.92 0 0 0 0-15.24z" />
          </svg>
        </div>

        {/* Yape */}
        <div className="group relative h-7 w-11 rounded border border-transparent shadow-sm flex items-center justify-center transition-all duration-300 hover:scale-110 overflow-hidden">
          <div className="absolute inset-0 bg-[#742284]" />
          <svg viewBox="0 0 40 25" className="relative h-5 w-auto">
            <circle cx="20" cy="12.5" r="9" fill="white" fillOpacity="0.1" />
            <path d="M16 10 c0 3 2 5 4 5 s4-2 4-5 V7" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            <circle cx="24" cy="7" r="2.5" fill="white" />
          </svg>
        </div>

        {/* Plin */}
        <div className="group relative h-7 w-11 rounded border border-transparent shadow-sm flex items-center justify-center transition-all duration-300 hover:scale-110 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#00BFA5] to-[#009688]" />
          <div className="relative flex items-center gap-0.5">
            <div className="w-1.5 h-3 bg-white rounded-full opacity-80" />
            <span className="text-white text-[9px] font-black tracking-tighter uppercase leading-none">plin</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentIcons;

