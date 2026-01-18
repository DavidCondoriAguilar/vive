import { useState, useEffect } from 'react';
import { CATEGORIES, ENHANCED_CATALOG } from '@/utils/constants';

export const useCategoriesLogic = () => {
  // State
  const [selectedType, setSelectedType] = useState('todos');
  const [selectedSize, setSelectedSize] = useState('todos');
  const [favorites, setFavorites] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Responsive items per view
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) setItemsPerView(1);
      else if (window.innerWidth < 768) setItemsPerView(2);
      else if (window.innerWidth < 1024) setItemsPerView(3);
      else if (window.innerWidth < 1280) setItemsPerView(4);
      else setItemsPerView(5);
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  // Filter products
  const filteredProducts = ENHANCED_CATALOG.filter(product => {
    const typeMatch = selectedType === 'todos' || product.type === selectedType;
    const sizeMatch = selectedSize === 'todos' || product.sizes.includes(selectedSize);
    return typeMatch && sizeMatch;
  });

  // Carousel navigation
  const nextSlide = () => {
    const maxSlide = Math.max(0, filteredProducts.length - itemsPerView);
    setCurrentSlide(prev => Math.min(prev + itemsPerView, maxSlide));
  };

  const prevSlide = () => {
    setCurrentSlide(prev => Math.max(prev - itemsPerView, 0));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index * itemsPerView);
  };

  const resetCarousel = () => {
    setCurrentSlide(0);
  };

  // Favorites
  const toggleFavorite = (productId) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  // Modal handlers
  const openProductModal = (product) => {
    console.log('Opening notification for product:', product);
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeProductModal = () => {
    console.log('Closing notification');
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  // Filter handlers
  const handleTypeChange = (type) => {
    setSelectedType(type);
    resetCarousel();
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size);
    resetCarousel();
  };

  // Computed values
  const visibleProducts = filteredProducts.slice(currentSlide, currentSlide + itemsPerView);
  const totalSlides = Math.ceil(filteredProducts.length / itemsPerView);
  const currentSlideIndex = Math.floor(currentSlide / itemsPerView);

  return {
    // State
    selectedType,
    selectedSize,
    favorites,
    currentSlide,
    itemsPerView,
    selectedProduct,
    isModalOpen,
    filteredProducts,
    visibleProducts,
    totalSlides,
    currentSlideIndex,

    // Actions
    setSelectedType,
    setSelectedSize,
    setFavorites,
    setCurrentSlide,
    setSelectedProduct,
    setIsModalOpen,

    // Methods
    nextSlide,
    prevSlide,
    goToSlide,
    toggleFavorite,
    openProductModal,
    closeProductModal,
    handleTypeChange,
    handleSizeChange,
    resetCarousel
  };
};
