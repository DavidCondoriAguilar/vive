import { useState, useEffect } from 'react';

// Hook para gestionar favoritos
export const useFavorites = () => {
  const [favorites, setFavorites] = useState(() => {
    // Cargar favoritos del localStorage
    const savedFavorites = localStorage.getItem('favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  // Guardar favoritos en localStorage cuando cambien
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  // Alternar favorito
  const toggleFavorite = (productId) => {
    setFavorites(prev => {
      const isFavorite = prev.includes(productId);
      if (isFavorite) {
        // Eliminar de favoritos
        return prev.filter(id => id !== productId);
      } else {
        // Agregar a favoritos
        return [...prev, productId];
      }
    });
  };

  // Verificar si es favorito
  const isFavorite = (productId) => {
    return favorites.includes(productId);
  };

  // Obtener cantidad de favoritos
  const getFavoritesCount = () => {
    return favorites.length;
  };

  // Limpiar todos los favoritos
  const clearFavorites = () => {
    setFavorites([]);
  };

  return {
    favorites,
    toggleFavorite,
    isFavorite,
    getFavoritesCount,
    clearFavorites
  };
};
