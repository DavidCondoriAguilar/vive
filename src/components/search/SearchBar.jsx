import React, { useRef, useEffect } from 'react';
import { useSearch } from '@/hooks/useSearch';
import { MdSearch, MdClose, MdArrowForward } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { sanitizeHTML } from '@/utils/security';

const SearchBar = ({ className = '', placeholder = 'Buscar productos...', fullWidth = false }) => {
  const {
    searchTerm,
    setSearchTerm,
    isOpen,
    setIsOpen,
    selectedIndex,
    setSelectedIndex,
    searchResults,
    handleKeyDown,
    handleProductClick,
    handleViewAllResults,
    resetSearch,
    hasResults
  } = useSearch();

  const searchInputRef = useRef(null);
  const searchContainerRef = useRef(null);

  // Manejar clics fuera del componente
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [setIsOpen]);

  // Focus en el input cuando se abre
  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isOpen]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setIsOpen(value.length > 0);
  };

  const handleInputFocus = () => {
    if (searchTerm.length > 0) {
      setIsOpen(true);
    }
  };

  const handleClearSearch = () => {
    setSearchTerm('');
    setIsOpen(false);
    searchInputRef.current?.focus();
  };

  return (
    <div ref={searchContainerRef} className={`relative w-full ${fullWidth ? 'max-w-none' : 'max-w-44'} ${className}`}>
      {/* Search Input Container */}
      <div className="relative group" style={{ zIndex: 50, position: 'relative' }}>
        {/* Search Icon */}
        <div className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
          <MdSearch className="w-4 h-4" />
        </div>

        {/* Search Input - Desktop Minimalista */}
        <input
          ref={searchInputRef}
          type="text"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setIsOpen(e.target.value.length > 0);
          }}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="w-full pl-10 pr-8 py-2 text-sm font-display"
          style={{
            backgroundColor: 'transparent',
            backgroundImage: 'none',
            color: '#374151',
            WebkitTextFillColor: '#374151',
            WebkitAppearance: 'none',
            MozAppearance: 'textfield',
            appearance: 'none',
            opacity: 1,
            zIndex: 100,
            position: 'relative',
            caretColor: '#374151',
            // Tipografía sofisticada - Space Grotesk
            fontSize: '12px',
            fontFamily: 'Space Grotesk, Playfair Display, sans-serif',
            fontWeight: '500',
            letterSpacing: '-0.01em',
            width: '100%',
            maxWidth: fullWidth ? 'none' : '200px',
            padding: '6px 24px 6px 32px', // Más espacio a la izquierda para la lupa
            border: 'none',
            borderBottom: '1px solid #d1d5db',
            borderRadius: '0',
            outline: 'none',
            transition: 'border-color 0.2s ease',
            isolation: 'isolate'
          }}
          onFocus={(e) => {
            e.target.style.borderBottomColor = '#9ca3af';
            handleInputFocus();
          }}
          onBlur={(e) => {
            e.target.style.borderBottomColor = '#d1d5db';
          }}
          aria-label="Buscar productos"
          role="combobox"
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          aria-activedescendant={`search-result-${selectedIndex}`}
          autoComplete="off"
          autoCorrect="off"
          spellCheck="false"
        />

        {/* Clear Button */}
        {searchTerm && (
          <button
            onClick={handleClearSearch}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
            aria-label="Limpiar búsqueda"
          >
            <MdClose className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Search Results Dropdown - cabecera y botón fijos, solo la lista hace scroll */}
      {isOpen && (
        <div className={`absolute top-full left-0 right-0 mt-1.5 bg-white dark:bg-black border border-gray-200 dark:border-white/10 rounded-xl shadow-2xl z-[70] overflow-hidden flex flex-col max-h-[min(85vh,28rem)] ${fullWidth ? 'w-full min-w-0' : 'min-w-[400px]'}`}>
          {hasResults ? (
            <>
              {/* Cabecera fija */}
              <div className="flex-shrink-0 px-4 py-3 bg-gray-50 dark:bg-white/5 border-b border-gray-200 dark:border-white/10">
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                  {searchResults.length} producto{searchResults.length !== 1 ? 's' : ''} encontrado{searchResults.length !== 1 ? 's' : ''}
                </p>
              </div>

              {/* Lista con scroll: cabecera y botón fijos, solo esta zona hace scroll */}
              <ul role="listbox" className="flex-1 min-h-0 overflow-y-auto py-2 max-h-[13rem] sm:max-h-[18rem]">
                  {searchResults.map((product, index) => {
                    const imageSrc = product.image ?? product.images?.[0];
                    const displayName = product.highlightedName ?? product.name ?? '';
                    const displayCategory = product.highlightedCategory ?? product.subcategory ?? '';
                    return (
                      <li
                        key={product.id}
                        id={`search-result-${index}`}
                        role="option"
                        aria-selected={index === selectedIndex}
                        className={`group cursor-pointer transition-colors duration-200 ${index === selectedIndex
                          ? 'bg-vive-50 dark:bg-vive-500/10'
                          : 'hover:bg-gray-50 dark:hover:bg-white/5'
                          }`}
                        onClick={() => handleProductClick(product)}
                      >
                        <div className="px-4 py-3 flex items-center gap-3">
                          {/* Product Image */}
                          <div className="flex-shrink-0 w-14 h-14 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
                            {imageSrc ? (
                              <img
                                src={typeof imageSrc === 'string' ? imageSrc : (imageSrc?.default ?? imageSrc?.src ?? '')}
                                alt={product.name || 'Producto'}
                                className="w-full h-full object-cover"
                                loading="lazy"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs" aria-hidden>—</div>
                            )}
                          </div>

                          {/* Product Info */}
                          <div className="flex-1 min-w-0">
                            <div className="text-sm font-semibold text-gray-900 dark:text-white truncate">
                              {displayName ? (
                                <span dangerouslySetInnerHTML={{ __html: sanitizeHTML(displayName) }} />
                              ) : (
                                product.name
                              )}
                            </div>
                            {displayCategory && (
                              <div
                                className="text-sm text-gray-600 dark:text-gray-400 truncate mt-1"
                                dangerouslySetInnerHTML={{ __html: sanitizeHTML(displayCategory) }}
                              />
                            )}
                            <div className="text-sm text-vive-600 dark:text-vive-400 font-medium mt-2">
                              Consultar precio
                            </div>
                          </div>

                          {/* Arrow Icon */}
                          <div className="flex-shrink-0 text-gray-400 group-hover:text-vive-500 transition-colors duration-200">
                            <MdArrowForward className="w-5 h-5" />
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>

              {/* Botón "Ver todos" siempre visible abajo */}
              <div className="flex-shrink-0 px-4 py-3 bg-gray-50 dark:bg-white/5 border-t border-gray-200 dark:border-white/10">
                <button
                  onClick={handleViewAllResults}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-vive-500 hover:bg-vive-600 text-white text-sm font-semibold rounded-lg transition-colors duration-200"
                >
                  Ver todos los resultados
                  <MdArrowForward className="w-5 h-5" />
                </button>
              </div>
            </>
          ) : searchTerm.length > 0 ? (
            /* No Results State */
            <div className="px-4 py-10 text-center">
              <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <MdSearch className="w-8 h-8 text-gray-400" />
              </div>
              <p className="text-base font-semibold text-gray-900 dark:text-white mb-2">
                No se encontraron productos
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Intenta con otros términos de búsqueda
              </p>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
