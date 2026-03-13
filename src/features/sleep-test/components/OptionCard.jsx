import React from 'react';
import { LuCircleCheck } from 'react-icons/lu';

export function OptionCard({ option, selected, onClick }) {
    return (
        <button
            onClick={() => onClick(option.value)}
            className={`group relative w-full text-left p-5 rounded-2xl border-2 transition-all duration-300 focus:outline-none
                ${selected
                    ? 'border-vive-500 bg-vive-500/5 shadow-lg shadow-vive-500/10'
                    : 'border-gray-100 dark:border-white/10 hover:border-vive-500/40 hover:bg-gray-50 dark:hover:bg-white/5'
                }`}
        >
            {selected && (
                <div className="absolute top-3 right-3 w-5 h-5 rounded-full bg-vive-500 flex items-center justify-center">
                    <LuCircleCheck className="w-3 h-3 text-white" />
                </div>
            )}
            <div className="flex items-center gap-4">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-300
                    ${selected
                        ? 'bg-vive-500/15 scale-110'
                        : 'bg-gray-100 dark:bg-white/8 group-hover:bg-vive-500/10 group-hover:scale-105'
                    }`}>
                    {option.icon}
                </div>
                <div>
                    <div className={`font-bold text-sm transition-colors ${selected ? 'text-vive-600 dark:text-vive-400' : 'text-gray-900 dark:text-white'}`}>
                        {option.label}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{option.desc}</div>
                </div>
            </div>
        </button>
    );
}
