import React, { useEffect, useRef } from 'react';
import { MdClose } from 'react-icons/md';
import SearchBar from './SearchBar';

/**
 * Modal de búsqueda moderno: solo icono en navbar, al hacer clic se abre este modal.
 * Escape cierra, clic fuera cierra, input con foco al abrir.
 */
const SearchModal = ({ isOpen, onClose }) => {
  const overlayRef = useRef(null);
  const panelRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  // Foco en el input al abrir
  useEffect(() => {
    if (!isOpen || !panelRef.current) return;
    const input = panelRef.current.querySelector('input');
    if (input) {
      const t = setTimeout(() => input.focus(), 100);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[60] flex items-start justify-center pt-[15vh] sm:pt-[20vh] px-4 sm:px-6 bg-black/60 backdrop-blur-md animate-fade-in"
      onClick={(e) => e.target === overlayRef.current && onClose()}
      role="dialog"
      aria-modal="true"
      aria-label="Buscar en el catálogo"
    >
      <div
        ref={panelRef}
        className="w-full max-w-2xl bg-white dark:bg-[#0a0a0a] rounded-2xl sm:rounded-3xl border border-gray-200/80 dark:border-white/10 shadow-2xl overflow-visible animate-in fade-in slide-in-from-top-4 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cabecera: título + input + cerrar */}
        <div className="flex items-center gap-3 p-4 sm:p-6 border-b border-gray-100 dark:border-white/5">
          <div className="flex-1 min-w-0">
            <SearchBar
              placeholder="Buscar modelos, categorías..."
              className="w-full"
              fullWidth
            />
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-xl text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
            aria-label="Cerrar búsqueda"
          >
            <MdClose className="w-5 h-5" />
          </button>
        </div>

        <div className="px-4 sm:px-6 py-3 bg-gray-50/50 dark:bg-white/[0.02]">
          <p className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-widest">
            Escribe para buscar en el catálogo · Enter para ver todos
          </p>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
