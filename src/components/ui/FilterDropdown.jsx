import React, { useState, useRef, useEffect } from 'react';
import { FaChevronDown } from 'react-icons/fa';

/**
 * FilterDropdown - A premium, animated dropdown component for product filters
 */
const FilterDropdown = ({
    label,
    subLabel,
    options,
    value,
    onChange,
    placeholder = 'Seleccionar...',
    icon: Icon,
    className = ''
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const selectedOption = options.find(opt => opt.value === value || opt.id === value);
    const displayLabel = selectedOption ? (selectedOption.label || selectedOption.name) : placeholder;

    return (
        <div className={`relative flex-1 min-w-[220px] ${className}`} ref={dropdownRef}>
            {/* Professional Labeling */}
            <div className="flex flex-col mb-3 ml-2 group/label cursor-default">
                <span className="text-[10px] font-black text-gray-900 dark:text-white uppercase tracking-[0.2em]">
                    {label}
                </span>
                {subLabel && (
                    <span className="text-[8px] font-bold text-gray-400 uppercase tracking-widest mt-0.5">
                        {subLabel}
                    </span>
                )}
            </div>

            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className={`w-full flex items-center justify-between px-6 py-4 bg-gray-50/80 dark:bg-white/[0.04] border border-transparent rounded-2xl transition-all duration-500 group relative z-10 ${isOpen
                    ? 'bg-white dark:bg-white/[0.1] shadow-2xl border-gray-100 dark:border-white/10'
                    : 'hover:bg-white dark:hover:bg-white/[0.08] hover:shadow-xl hover:border-gray-100 dark:hover:border-white/5'
                    }`}
            >
                <div className="flex items-center gap-4 overflow-hidden">
                    {Icon && <Icon className={`w-3.5 h-3.5 transition-all duration-500 ${isOpen ? 'text-vive-600 scale-110' : 'text-gray-400 group-hover:text-vive-600'}`} />}
                    <span className={`text-[11px] font-black uppercase tracking-wider truncate transition-colors duration-500 ${isOpen ? 'text-gray-900 dark:text-white' : 'text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'}`}>
                        {displayLabel}
                    </span>
                </div>
                <FaChevronDown className={`w-2.5 h-2.5 text-vive-600 transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Options Menu - Enhanced Layering */}
            <div
                className={`absolute top-full left-0 right-0 mt-2 bg-white dark:bg-[#0c0c0c] border border-gray-100 dark:border-white/10 rounded-2xl shadow-[0_30px_60px_rgba(0,0,0,0.15)] z-[999] transition-all duration-300 origin-top overflow-hidden ${isOpen
                    ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
                    : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
                    }`}
            >
                <div className="max-h-64 overflow-y-auto py-2 scrollbar-none">
                    {options.map((option, idx) => {
                        if (option.isGroup) {
                            return (
                                <div key={`group-${idx}`} className="px-5 py-2.5 text-[9px] font-black text-vive-600 bg-gray-50/50 dark:bg-white/[0.02] uppercase tracking-[0.2em] border-y border-gray-50 dark:border-white/5 mt-2 first:mt-0">
                                    {option.name}
                                </div>
                            );
                        }

                        const optValue = option.value || option.id;
                        const optLabel = option.label || option.name;
                        const isSelected = optValue === value;

                        return (
                            <button
                                key={optValue || idx}
                                type="button"
                                onClick={() => {
                                    onChange(optValue);
                                    setIsOpen(false);
                                }}
                                className={`w-full text-left px-5 py-3.5 text-[10px] font-black uppercase tracking-widest transition-all flex items-center justify-between group/opt ${isSelected
                                    ? 'bg-black text-white dark:bg-white dark:text-black'
                                    : 'text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-black dark:hover:text-white'
                                    }`}
                            >
                                <span className={option.isSubOption ? 'pl-4 border-l-2 border-transparent hover:border-vive-600 transition-all' : ''}>
                                    {optLabel}
                                </span>
                                {isSelected && (
                                    <div className="w-1.5 h-1.5 rounded-full bg-vive-600 animate-pulse" />
                                )}
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default FilterDropdown;
