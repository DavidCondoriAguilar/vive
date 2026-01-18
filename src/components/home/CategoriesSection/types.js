// Type definitions for CategoriesSection components

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number | string;
  image: string;
  type: string;
  sizes: string[];
  badge?: string;
  features?: string[];
  materials?: string[];
  warranty?: string;
  category?: string;
}

export interface FilterOptions {
  selectedType: string;
  selectedSize: string;
}

export interface CarouselState {
  currentSlide: number;
  itemsPerView: number;
  totalSlides: number;
  currentSlideIndex: number;
}

export interface CategoriesSectionProps {
  // Add any props if needed in the future
}

export interface ProductCardProps {
  product: Product;
  selectedSize: string;
  onAddToCart: (product: Product, quantity: number, size?: string) => void;
  onQuickView: (product: Product) => void;
  onToggleFavorite: (productId: string) => void;
  isFavorite: boolean;
}

export interface ProductFiltersProps {
  selectedType: string;
  selectedSize: string;
  onTypeChange: (type: string) => void;
  onSizeChange: (size: string) => void;
  onFilterChange: () => void;
}

export interface ProductCarouselProps {
  products: Product[];
  itemsPerView: number;
  currentSlide: number;
  onNextSlide: () => void;
  onPrevSlide: () => void;
  selectedSize: string;
  onAddToCart: (product: Product, quantity: number, size?: string) => void;
  onQuickView: (product: Product) => void;
  onToggleFavorite: (productId: string) => void;
  favorites: string[];
}
