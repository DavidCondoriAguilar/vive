import { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { ENHANCED_CATALOG } from '@/utils/constants';

export const useSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const navigate = useNavigate();

  // Función para resaltar coincidencias (declarada antes de usar)
  const highlightMatch = (text, term) => {
    if (!term) return text;
    const regex = new RegExp(`(${term})`, 'gi');
    return text.replace(regex, '<mark class="bg-vive-500/20 text-vive-600 font-bold px-0.5 rounded">$1</mark>');
  };

  // Algoritmo de búsqueda avanzado con scoring
  const searchResults = useMemo(() => {
    if (!searchTerm.trim()) return [];

    const term = searchTerm.toLowerCase().trim();
    const results = [];

    ENHANCED_CATALOG.forEach(product => {
      let score = 0;
      const searchableText = [
        product.name,
        product.subcategory,
        product.category,
        product.description,
        ...(product.features || [])
      ].join(' ').toLowerCase();

      // Búsqueda exacta (máximo puntaje)
      if (product.name.toLowerCase().includes(term)) {
        score += 100;
      }

      // Búsqueda de palabras individuales
      const searchWords = term.split(' ');
      searchWords.forEach(word => {
        if (product.name.toLowerCase().includes(word)) {
          score += 50;
        }
        if (product.subcategory?.toLowerCase().includes(word)) {
          score += 30;
        }
        if (product.category.toLowerCase().includes(word)) {
          score += 20;
        }
        if (searchableText.includes(word)) {
          score += 10;
        }
      });

      // Búsqueda por características
      product.features?.forEach(feature => {
        if (feature.toLowerCase().includes(term)) {
          score += 25;
        }
      });

      // Búsqueda por tamaños
      product.sizes?.forEach(size => {
        if (size.toLowerCase().includes(term)) {
          score += 15;
        }
      });

      if (score > 0) {
        results.push({
          ...product,
          score,
          highlightedName: highlightMatch(product.name || '', term) || product.name || '',
          highlightedCategory: highlightMatch(product.subcategory || '', term) || product.subcategory || ''
        });
      }
    });

    // Ordenar por score (relevancia) y limitar a 8 resultados
    return results
      .sort((a, b) => b.score - a.score)
      .slice(0, 8);
  }, [searchTerm]);

  // Navegación con teclado
  const handleKeyDown = (e) => {
    if (!isOpen) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(prev => 
          prev < searchResults.length - 1 ? prev + 1 : 0
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(prev => 
          prev > 0 ? prev - 1 : searchResults.length - 1
        );
        break;
      case 'Enter':
        e.preventDefault();
        if (searchResults[selectedIndex]) {
          handleProductClick(searchResults[selectedIndex]);
        }
        break;
      case 'Escape':
        setIsOpen(false);
        break;
    }
  };

  // Click en producto
  const handleProductClick = (product) => {
    navigate(`/producto/${product.id}`);
    setSearchTerm('');
    setIsOpen(false);
    setSelectedIndex(0);
  };

  // Click en "Ver todos los resultados"
  const handleViewAllResults = () => {
    navigate(`/busqueda?q=${encodeURIComponent(searchTerm)}`);
    setSearchTerm('');
    setIsOpen(false);
    setSelectedIndex(0);
  };

  // Resetear búsqueda
  const resetSearch = () => {
    setSearchTerm('');
    setIsOpen(false);
    setSelectedIndex(0);
  };

  // Efecto para manejar el índice seleccionado
  useEffect(() => {
    setSelectedIndex(0);
  }, [searchResults]);

  return {
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
    hasResults: searchResults.length > 0
  };
};
