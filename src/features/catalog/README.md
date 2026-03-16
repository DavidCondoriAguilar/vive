# Feature: Catalog

## Descripción
Módulo de catálogo completo de productos Vive. Permite a los usuarios explorar, filtrar y buscar todos los productos disponibles.

## Estructura
```
catalog/
├── components/          # Componentes exclusivos del feature
├── data/               # Datos estáticos del catálogo
├── hooks/              # Lógica de negocio reutilizable
│   └── useCatalog.js
├── services/           # Servicios y operaciones de negocio
│   └── catalogService.js
├── views/              # Vistas completas (pantallas)
│   └── CatalogView.jsx
├── index.js            # API pública del feature
└── README.md           # Esta documentación
```

## Uso

### Vista Completa
```jsx
import { CatalogView } from '@features/catalog';

function App() {
  return <CatalogView />;
}
```

### Hook (para lógica personalizada)
```jsx
import { useCatalog } from '@features/catalog';

function CustomCatalog() {
  const {
    filteredProducts,
    categories,
    setCategory,
    resetFilters,
  } = useCatalog();
  
  return (
    // tu implementación
  );
}
```

### Servicio (para operaciones de negocio)
```jsx
import { catalogService } from '@features/catalog';

// Obtener todos los productos
const products = catalogService.getAllProducts();

// Buscar producto por ID
const product = catalogService.getProductById('product-123');

// Buscar productos
const results = catalogService.searchProducts('viscoelástico');
```

## API del Hook

### `useCatalog()`

**Retorna:**
- `selectedCategory` (string): Categoría seleccionada
- `selectedSubcategory` (string): Subcategoría seleccionada
- `selectedSize` (string): Talla seleccionada
- `sortBy` (string): Criterio de ordenamiento
- `categories` (array): Lista de categorías disponibles
- `subcategories` (array): Subcategorías disponibles
- `sizes` (array): Tallas disponibles
- `filteredProducts` (array): Productos filtrados y ordenados
- `totalProducts` (number): Total de productos mostrados
- `hasActiveFilters` (boolean): Si hay filtros activos
- `setCategory(category)`: Establecer categoría
- `setSelectedSubcategory(subcategory)`: Establecer subcategoría
- `setSelectedSize(size)`: Establecer talla
- `setSortBy(criteria)`: Establecer ordenamiento
- `resetFilters()`: Resetear todos los filtros
- `getPrettySubcategoryName(value)`: Formatear nombre de subcategoría

## API del Servicio

### `catalogService.getAllProducts()`
Obtener todos los productos del catálogo.

### `catalogService.getProductsByCategory(categoryId)`
Filtrar productos por categoría.

### `catalogService.getProductById(productId)`
Obtener un producto específico por su ID.

### `catalogService.searchProducts(searchTerm)`
Buscar productos por término (nombre, descripción, subcategoría).

### `catalogService.sortProducts(products, sortBy)`
Ordenar productos por criterio.

### `catalogService.filterProducts(products, filters)`
Aplicar múltiples filtros a una lista de productos.

## Datos

Los datos del catálogo se importan desde:
```js
import { ENHANCED_CATALOG, CATEGORIES } from '@core/utils/constants';
```

## Rutas Relacionadas

- `/catalogo` - Vista principal del catálogo
- `/producto/:productId` - Detalle de producto (feature: products)

## Dependencias

### Internas
- `@shared/hooks/useTheme` - Hook `useScrollToTop`
- `@shared/hooks/useScrollReveal` - Hook de animaciones
- `@shared/contexts/CartContext` - Contexto del carrito
- `@core/utils/constants` - Constantes del catálogo

### Externas
- `react-router-dom` - Navegación
- `react-helmet-async` - SEO meta tags
- `react-icons/fa` - Iconos

## Testing

```jsx
import { render, screen } from '@testing-library/react';
import { CatalogView } from '@features/catalog';

describe('CatalogView', () => {
  it('renders catalog title', () => {
    render(<CatalogView />);
    expect(screen.getByText(/Catálogo Oficial 2026/i)).toBeInTheDocument();
  });
  
  it('displays products', () => {
    render(<CatalogView />);
    expect(screen.getAllByRole('article').length).toBeGreaterThan(0);
  });
});
```

## Mejías Futuras

- [ ] Implementar paginación para catálogos grandes
- [ ] Agregar vista de lista además de grid
- [ ] Implementar comparación de productos
- [ ] Agregar filtros por rango de precio (cuando haya precios)
- [ ] Integrar con API real en lugar de datos estáticos

## Notas de Implementación

- El hook `useCatalog` maneja TODA la lógica de filtrado y ordenamiento
- La vista `CatalogView` es "tonta" - solo presenta datos del hook
- El servicio `catalogService` puede evolucionar para consumir APIs
- Los datos vienen de `@core/utils/constants` pero deberían migrar a `./data/`

---

**Responsable del Feature:** Equipo de Desarrollo  
**Última Actualización:** 2026-03-16  
**Versión:** 1.0.0
