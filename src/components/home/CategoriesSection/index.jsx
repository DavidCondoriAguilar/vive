import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';
import ProductNotification from '@/components/ui/ProductNotification';

// Component imports
import CategoriesHeader from './CategoriesHeader';
import UniversalProductFilters from './ProductFilters';
import ProductCarousel from './ProductCarousel';
import { useCategoriesLogic } from './useCategoriesLogic';

const CategoriesSection = () => {
  const { addToCart, getTotalItems } = useCart();
  const {
    selectedType,
    selectedSize,
    currentSlide,
    itemsPerView,
    selectedProduct,
    isModalOpen,
    filteredProducts,
    visibleProducts,
    totalSlides,
    currentSlideIndex,
    nextSlide,
    prevSlide,
    goToSlide,
    openProductModal,
    closeProductModal,
    handleTypeChange,
    handleSizeChange,
    resetCarousel,
    types,
    sizes
  } = useCategoriesLogic();

  return (
    <section className="py-20 premium-section futuristic-lines">
      <div className="container mx-auto px-6 lg:px-20">

        {/* Section Header */}
        <CategoriesHeader />

        {/* Filters */}
        <UniversalProductFilters
          selectedCategory={null}
          selectedSubcategory={selectedType}
          selectedSize={selectedSize}
          sortBy={null}
          categories={null}
          subcategories={types}
          sizes={sizes}
          onCategoryChange={() => { }}
          onSubcategoryChange={handleTypeChange}
          onSizeChange={handleSizeChange}
          onSortChange={() => { }}
          showSort={false}
          showCategory={false}
          compact={true}
        />

        {/* Products Carousel */}
        <ProductCarousel
          products={visibleProducts}
          itemsPerView={itemsPerView}
          currentSlide={currentSlide}
          onNextSlide={nextSlide}
          onPrevSlide={prevSlide}
          selectedSize={selectedSize}
          onAddToCart={addToCart}
          onQuickView={openProductModal}
        />

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Link
            to="/catalogo"
            className="inline-flex items-center gap-2 bg-vive-500 hover:bg-vive-600 text-white px-8 py-3 rounded-lg font-bold transition-all hover:scale-105"
          >
            Ver Catálogo Completo
          </Link>
        </div>
      </div>

      {/* Product Notification */}
      <ProductNotification
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={closeProductModal}
        selectedSize={selectedSize === 'todos' ? null : selectedSize}
      />
    </section>
  );
};

export default CategoriesSection;
