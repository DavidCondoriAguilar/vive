import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useScrollToTop } from '@/hooks/useTheme';
import MainLayout from '@/layouts/MainLayout';
import SectionLayout from '@/components/layout/SectionLayout';

/**
 * Full Catalog Page
 * Displays all products in a comprehensive grid layout
 */
const CatalogView = () => {
  useScrollToTop();

  const [filter, setFilter] = useState('todos');
  const [sortBy, setSortBy] = useState('featured');

  // Mock products data with placeholder images - in real app this would come from API
  const allProducts = [
    {
      id: 1,
      name: "Colchón Royal Premium 2 Plazas",
      description: "Colchón viscoelástico de alta gama con 25cm de confort",
      price: 2899,
      originalPrice: 3299,
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80&w=400",
      category: "viscoelasticos",
      badge: "-12%",
      rating: 4.8,
      reviews: 127
    },
    {
      id: 2,
      name: "Colchón Pocket Plus Queen",
      description: "Sistema de muelles ensacados con espuma de alta densidad",
      price: 2199,
      image: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&q=80&w=400",
      category: "pocket",
      badge: "Nuevo",
      rating: 4.7,
      reviews: 89
    },
    {
      id: 3,
      name: "Colchón Spring Comfort 1.5 Plazas",
      description: "Colchón tradicional con sistema de resortes continuo",
      price: 1299,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=400",
      category: "spring",
      rating: 4.5,
      reviews: 156
    },
    {
      id: 4,
      name: "Colchón Luxury King Size",
      description: "Colchón premium con materiales importados de máxima calidad",
      price: 4599,
      image: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&q=80&w=400",
      category: "premium",
      badge: "Premium",
      rating: 4.9,
      reviews: 43
    },
    {
      id: 5,
      name: "Colchón Orthopedic 2 Plazas",
      description: "Diseñado especialmente para problemas de espalda",
      price: 1999,
      image: "https://images.unsplash.com/photo-1631049035182-249067d7618e?auto=format&fit=crop&q=80&w=400",
      category: "ortopedicos",
      badge: "Salud",
      rating: 4.6,
      reviews: 78
    },
    {
      id: 6,
      name: "Colchón Memory Foam Queen",
      description: "Espuma de memoria que se adapta perfectamente a tu cuerpo",
      price: 2499,
      originalPrice: 2799,
      image: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&q=80&w=400",
      category: "viscoelasticos",
      badge: "-11%",
      rating: 4.7,
      reviews: 92
    },
    {
      id: 7,
      name: "Colchón Hybrid 1.5 Plazas",
      description: "La mejor combinación de muelles y espuma viscoelástica",
      price: 1899,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=400",
      category: "hybridos",
      badge: "Recomendado",
      rating: 4.8,
      reviews: 134
    },
    {
      id: 8,
      name: "Colchón Basic 2 Plazas",
      description: "Opción económica sin comprometer la calidad",
      price: 899,
      image: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&q=80&w=400",
      category: "basicos",
      rating: 4.3,
      reviews: 245
    },
    {
      id: 9,
      name: "Colchón Premium Visco 2 Plazas",
      description: "Tecnología viscoelástica avanzada para máxima comodidad",
      price: 3299,
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80&w=400",
      category: "viscoelasticos",
      badge: "Premium",
      rating: 4.9,
      reviews: 67
    },
    {
      id: 10,
      name: "Colchón Pocket Deluxe King",
      description: "Sistema de muelles ensacados premium con base de lujo",
      price: 3999,
      image: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&q=80&w=400",
      category: "pocket",
      badge: "Deluxe",
      rating: 4.8,
      reviews: 89
    },
    {
      id: 11,
      name: "Colchón Spring Plus Queen",
      description: "Colchón tradicional renovado con tecnologías modernas",
      price: 1599,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=400",
      category: "spring",
      rating: 4.6,
      reviews: 134
    },
    {
      id: 12,
      name: "Colchón Luxury Suite King",
      description: "La máxima expresión del confort y elegancia",
      price: 5999,
      image: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&q=80&w=400",
      category: "premium",
      badge: "Suite",
      rating: 5.0,
      reviews: 23
    }
  ];

  const categories = [
    { id: 'todos', name: 'Todos los productos', count: allProducts.length },
    { id: 'viscoelasticos', name: 'Viscoelásticos', count: allProducts.filter(p => p.category === 'viscoelasticos').length },
    { id: 'pocket', name: 'Pocket', count: allProducts.filter(p => p.category === 'pocket').length },
    { id: 'spring', name: 'Spring', count: allProducts.filter(p => p.category === 'spring').length },
    { id: 'hybridos', name: 'Híbridos', count: allProducts.filter(p => p.category === 'hybridos').length },
    { id: 'ortopedicos', name: 'Ortopédicos', count: allProducts.filter(p => p.category === 'ortopedicos').length }
  ];

  // Filter and sort products
  const filteredProducts = filter === 'todos'
    ? allProducts
    : allProducts.filter(product => product.category === filter);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'newest':
        return b.id - a.id;
      default:
        return 0;
    }
  });

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ));
  };

  return (
    <>
      <Helmet>
        <title>Catálogo Completo - Colchones Premium Sueño Dorado | Lima</title>
        <meta name="description" content="Explora nuestro catálogo completo de colchones premium. Viscoelásticos, pocket, spring y ortopédicos. Envío gratis en Lima. Hasta 10 años de garantía." />
        <link rel="canonical" href="https://suenodorado.pe/catalogo" />
      </Helmet>

      <MainLayout>
        <SectionLayout>
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-display font-black text-gray-900 dark:text-white mb-4">
              Catálogo <span className="text-gold-500">Completo</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Descubre toda nuestra colección de colchones premium, diseñados para transformar tu descanso
            </p>
          </div>

          {/* Filters and Sort */}
          <div className="flex flex-col lg:flex-row gap-6 mb-8">
            {/* Category Filters */}
            <div className="flex-1">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setFilter(category.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      filter === category.id
                        ? 'bg-gold-500 text-white'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>

            {/* Sort Options */}
            <div className="lg:w-64">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-gold-500 focus:border-transparent"
              >
                <option value="featured">Destacados</option>
                <option value="price-low">Precio: Menor a Mayor</option>
                <option value="price-high">Precio: Mayor a Menor</option>
                <option value="rating">Mejor Calificados</option>
                <option value="newest">Más Nuevos</option>
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-gray-600 dark:text-gray-400">
              Mostrando {sortedProducts.length} producto{sortedProducts.length !== 1 ? 's' : ''}
              {filter !== 'todos' && ` en ${categories.find(c => c.id === filter)?.name.toLowerCase()}`}
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sortedProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
              >
                {/* Product Image */}
                <div className="relative h-48 overflow-hidden bg-gray-100 dark:bg-gray-700">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.badge && (
                    <div className="absolute top-3 left-3">
                      <span className={`px-2 py-1 text-xs font-bold rounded-full ${
                        product.badge === 'Nuevo' ? 'bg-green-500 text-white' :
                        product.badge === 'Premium' ? 'bg-purple-500 text-white' :
                        product.badge === 'Salud' ? 'bg-blue-500 text-white' :
                        product.badge === 'Recomendado' ? 'bg-orange-500 text-white' :
                        'bg-red-500 text-white'
                      }`}>
                        {product.badge}
                      </span>
                    </div>
                  )}
                  {product.originalPrice && (
                    <div className="absolute top-3 right-3">
                      <span className="px-2 py-1 bg-red-500 text-white text-xs font-bold rounded-full">
                        -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                      </span>
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1 line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
                    {product.description}
                  </p>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex">{renderStars(product.rating)}</div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      ({product.reviews})
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-bold text-gold-600">
                        S/ {product.price.toLocaleString()}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">
                          S/ {product.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>
                    <button className="px-4 py-2 bg-gold-500 hover:bg-gold-600 text-white text-sm font-medium rounded-lg transition-colors">
                      Ver detalles
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More or Pagination could go here */}
          {sortedProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                No se encontraron productos en esta categoría.
              </p>
            </div>
          )}
        </SectionLayout>
      </MainLayout>
    </>
  );
};

export default CatalogView;