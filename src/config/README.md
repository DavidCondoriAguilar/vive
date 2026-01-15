# Estructura del Proyecto

Esta aplicación sigue una arquitectura basada en features (características) para mejorar la escalabilidad y el mantenimiento.

## 📁 Estructura de Carpetas

```
src/
├── assets/                 # Recursos estáticos
│   ├── images/
│   │   ├── logos/        # Logos de la marca
│   │   ├── products/     # Imágenes de productos
│   │   ├── banners/      # Banners y hero images
│   │   └── icons/        # Iconos pequeños
│   └── styles/           # Estilos globales
├── components/            # Componentes reutilizables
│   ├── common/          # Componentes UI genéricos
│   │   ├── Image.jsx    # Componente de imagen lazy loading
│   │   ├── Modal.jsx    # Modal reutilizable
│   │   ├── CTA.jsx      # Call-to-action
│   │   └── ...
│   └── layout/          # Componentes de layout
│       ├── Navbar.jsx   # Navegación principal
│       └── PromoBar.jsx # Barra de promociones
├── features/            # Módulos por característica
│   ├── home/           # Página principal
│   │   ├── views/      # Vistas principales
│   │   │   └── HomeView.jsx
│   │   └── components/ # Componentes específicos del home
│   ├── products/      # Gestión de productos
│   ├── categories/    # Categorías
│   └── blog/          # Blog
├── hooks/              # Custom React hooks
├── services/           # Llamadas a API y servicios externos
├── utils/              # Funciones utilitarias
├── styles/             # Estilos globales
└── config/             # Configuración de la aplicación
```

## 🎯 Convenciones de Nomenclatura

### Archivos
- **Componentes**: PascalCase (ej: `ProductCard.jsx`)
- **Imágenes**: kebab-case descriptivo (ej: `mattress-premium.png`)
- **Utilidades**: camelCase (ej: `formatPrice.js`)

### Carpetas
- **Features**: Nombre en singular (ej: `home`, `product`, `category`)
- **Componentes**: Nombre descriptivo y simple (ej: `common`, `layout`)
- **Assets**: Categorizado por tipo (ej: `logos`, `products`, `banners`)

## 🔄 Import Paths

Usa alias para importaciones más limpias:

```javascript
// Componentes
import Component from '@/components/common/Component';
import Layout from '@/components/layout/Layout';

// Features
import HomeView from '@/features/home/views/HomeView';

// Assets
import logo from '@/assets/images/logos/logo-main.jpg';
```

## 📦 Módulos Principales

### Home Feature
- **View**: `HomeView.jsx` - Página principal
- **Components**: Componentes específicos del home
  - Hero, Categories, Featured Products, etc.

### Products Feature
- Gestión de catálogo de productos
- Detalles de productos
- Filtros y búsqueda

### Layout Components
- **Navbar**: Navegación principal
- **PromoBar**: Barra de promociones
- **Footer**: Pie de página

### Common Components
- **Image**: Componente con lazy loading
- **Modal**: Modal reutilizable
- **CTA**: Botones de llamada a la acción
- **TrustBadges**: Sellos de confianza

Esta estructura permite:
- ✅ Escalabilidad fácil
- ✅ Mantenimiento simple
- ✅ Reutilización de componentes
- ✅ Navegación intuitiva
- ✅ Separación de responsabilidades
