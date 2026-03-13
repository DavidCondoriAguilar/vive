import React from 'react';

export function ProgressBar({ current, total }) {
    const pct = Math.round((current / total) * 100);
    return (
        <div className="w-full">
            <div className="flex justify-between items-center mb-2">
                <span className="text-[10px] font-mono font-bold text-vive-500 uppercase tracking-widest">
                    Paso {current} de {total}
                </span>
                <span className="text-[10px] font-mono text-gray-400">{pct}% completado</span>
            </div>
            <div className="h-1 w-full bg-gray-100 dark:bg-white/10 rounded-full overflow-hidden">
                <div
                    className="h-full bg-gradient-to-r from-vive-500 to-vive-400 rounded-full transition-all duration-700 ease-out"
                    style={{ width: `${pct}%` }}
                />
            </div>
        </div>
    );
}
