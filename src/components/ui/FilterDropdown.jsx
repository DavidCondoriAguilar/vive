import React, { useState, useRef, useEffect } from 'react';
import { FaChevronDown } from 'react-icons/fa';

/**
 * FilterDropdown - A premium, animated dropdown component for product filters
 */
const FilterDropdown = ({
    label,
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

    const selectedOption = options.find(opt => opt.value === value) || options.find(opt => opt.id === value);
    const displayLabel = selectedOption ? (selectedOption.label || selectedOption.name) : placeholder;

    return (
        <div className={`relative flex-1 min-w-[140px] ${className}`} ref={dropdownRef}>
            {label && (
                <label className="text-[10px] font-black text-vive-500 uppercase tracking-widest block mb-2 ml-1">
                    {label}
                </label>
            )}

            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className={`w-full flex items-center justify-between px-5 py-3.5 bg-white dark:bg-black border rounded-2xl transition-all duration-300 group ${isOpen
                    ? 'border-vive-500 ring-2 ring-vive-500/10 shadow-lg'
                    : 'border-gray-100 dark:border-white/10 hover:border-vive-500/50'
                    }`}
            >
                <div className="flex items-center gap-3 overflow-hidden">
                    {Icon && <Icon className={`w-4 h-4 transition-colors ${isOpen ? 'text-vive-500' : 'text-gray-400 group-hover:text-vive-500'}`} />}
                    <span className={`text-sm font-bold truncate ${isOpen ? 'text-gray-900 dark:text-white' : 'text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'}`}>
                        {displayLabel}
                    </span>
                </div>
                <FaChevronDown className={`w-3 h-3 text-vive-500 transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Options Menu */}
            <div
                className={`absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-900 border border-gray-100 dark:border-white/10 rounded-2xl shadow-2xl z-[100] transition-all duration-500 origin-top overflow-hidden ${isOpen
                    ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
                    : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
                    }`}
            >
                <div className="max-h-60 overflow-y-auto py-2 scrollbar-thin scrollbar-thumb-vive-500 scrollbar-track-transparent">
                    {options.map((option, idx) => {
                        if (option.isGroup) {
                            return (
                                <div key={`group-${idx}`} className="px-5 py-2 text-[10px] font-black text-vive-500 uppercase tracking-[0.2em] bg-gray-50 dark:bg-white/5 mt-2 first:mt-0">
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
                                className={`w-full text-left px-5 py-3 text-sm font-medium transition-all flex items-center justify-between group/opt ${isSelected
                                    ? 'bg-vive-500 text-white'
                                    : 'text-gray-600 dark:text-gray-400 hover:bg-vive-50 dark:hover:bg-vive-500/10 hover:text-vive-500'
                                    }`}
                            >
                                <span className={option.isSubOption ? 'pl-4' : ''}>{optLabel}</span>
                                {isSelected && (
                                    <div className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_white]" />
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
