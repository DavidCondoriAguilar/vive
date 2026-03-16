import React from 'react';
import { LuCircleCheck } from 'react-icons/lu';

export function OptionCard({ option, selected, onClick }) {
    return (
        <button
            onClick={() => onClick(option.value)}
            className={`group relative w-full text-left p-4 rounded-2xl border-2 transition-all duration-300 focus:outline-none
                ${selected
                    ? 'border-vive-500 bg-vive-500/5 shadow-lg shadow-vive-500/10'
                    : 'border-gray-100 dark:border-white/10 hover:border-vive-500/40 hover:bg-gray-50 dark:hover:bg-white/5'
                }`}
        >
            {selected && (
                <div className="absolute top-2 right-2 w-4 h-4 rounded-full bg-vive-500 flex items-center justify-center">
                    <LuCircleCheck className="w-2.5 h-2.5 text-white" />
                </div>
            )}
            <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300
                    ${selected
                        ? 'bg-vive-500/15 scale-110'
                        : 'bg-gray-100 dark:bg-white/8 group-hover:bg-vive-500/10'
                    }`}>
                    {option.icon}
                </div>
                <div>
                    <div className={`font-bold text-xs transition-colors ${selected ? 'text-vive-600 dark:text-vive-400' : 'text-gray-900 dark:text-white'}`}>
                        {option.label}
                    </div>
                    <div className="text-[10px] leading-tight text-gray-500 dark:text-gray-400 mt-0.5">{option.desc}</div>
                </div>
            </div>
        </button>
    );
}
