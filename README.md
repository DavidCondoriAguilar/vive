# 🚀 Vive Web - CI/CD Ready

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)]()
[![Deployment](https://img.shields.io/badge/deployment-automated-blue)]()
[![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?logo=vite)]()
[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react)]()

> E-commerce profesional de colchones premium con despliegue automático a Hostinger

---

## 📋 Tabla de Contenidos

- [🎯 Características](#-características)
- [🏗️ Estructura del Proyecto](#️-estructura-del-proyecto)
- [🚀 Inicio Rápido](#-inicio-rápido)
- [📦 Deployment](#-deployment)
- [🛠️ Scripts Disponibles](#️-scripts-disponibles)
- [🔐 Variables de Entorno](#-variables-de-entorno)
- [📚 Documentación](#-documentación)
- [🤝 Contribución](#-contribución)

---

## 🎯 Características

### Frontend
- ⚛️ **React 19.2.0** - Última versión con mejoras de performance
- ⚡ **Vite 7.2.4** - Build ultrarrápido y HMR instantáneo
- 🎨 **Tailwind CSS 3.4.0** - Diseño moderno y responsive
- 🧭 **React Router 7.12.0** - Navegación SPA optimizada
- 📱 **PWA Ready** - Manifest y service worker configurables

### Optimizaciones
- 🚀 **Code Splitting** - Chunks optimizados para mejor caching
- 📦 **Tree Shaking** - Eliminación de código no utilizado
- 🗜️ **Minificación Terser** - Reducción de tamaño de bundle
- 🧹 **Console Cleanup** - Eliminación de logs en producción
- 🖼️ **Asset Optimization** - Hash automático para cache busting

### DevOps & CI/CD
- 🔄 **GitHub Actions** - Deployment automático a Hostinger
- 🔐 **GitHub Secrets** - Manejo seguro de credenciales
- ✅ **Pre-deployment Validation** - Script de validación automática
- 📊 **Build Metrics** - Análisis de tamaño de bundles

### SEO & Performance
- 🔍 **SEO Optimizado** - Meta tags, Open Graph, Schema.org
- ⚡ **Lighthouse 90+** - Performance optimizado
- 🗺️ **Sitemap.xml** - Indexación mejorada
- 🤖 **Robots.txt** - Control de crawlers

---

## 📁 ESTRUCTURA DEL PROYECTO (Feature-Based Architecture)

```
vive-web/
│
├── .github/
│   └── workflows/
│       └── deploy.yml           # 🚀 GitHub Actions CI/CD
│
├── docs/                        # 📚 Documentación completa
│   ├── README.md                # Índice de documentación
│   ├── START_HERE.md           # ⭐ Empieza aquí
│   ├── CHECKLIST.md            # ✅ Checklist de deployment
│   ├── DEPLOYMENT.md           # 🚀 Guía de despliegue
│   ├── GITHUB_SECRETS.md       # 🔐 Configuración de secrets
│   └── AUDIT.md                # 📊 Reporte de auditoría
│
├── dist/                        # 📦 Build de producción (generado)
│   ├── .htaccess               # ⚙️ Configuración Apache
│   ├── index.html
│   └── assets/                 # JS/CSS con hash
│
├── public/                     # 📁 Assets estáticos
│   ├── favicon.png
│   ├── manifest.json
│   ├── robots.txt
│   ├── sitemap.xml
│   └── images/                 # Imágenes estáticas
│
├── src/                        # 💻 Código fuente
│   ├── core/                   # 🔧 Utilidades globales
│   │   ├── config/             # Configuración de app
│   │   ├── constants/          # Constantes globales
│   │   ├── utils/              # Utilidades puras
│   │   └── legal/              # Contenido legal
│   │
│   ├── shared/                 # 🔄 Código compartido
│   │   ├── components/         # Componentes UI reutilizables
│   │   │   ├── ui/            # Button, Modal, Card, etc.
│   │   │   └── common/        # Logo, Breadcrumbs, etc.
│   │   ├── contexts/          # Contextos globales (Cart, Theme)
│   │   ├── hooks/             # Hooks reutilizables
│   │   └── types/             # Tipos TypeScript
│   │
│   ├── features/               # 🎯 Módulos de negocio
│   │   ├── catalog/           # Catálogo de productos
│   │   │   └── data/          # Datos de productos
│   │   ├── products/          # Detalles de producto
│   │   │   └── services/      # Servicios de productos
│   │   ├── checkout/          # Proceso de compra
│   │   ├── contact/           # Formulario de contacto
│   │   ├── search/            # Búsqueda
│   │   ├── home/              # Página principal
│   │   ├── wholesale/         # Ventas mayoristas
│   │   ├── sleep-test/        # Test de sueño
│   │   ├── guides/            # Guías de descanso
│   │   ├── support/           # Políticas de soporte
│   │   └── categories/        # Vistas de categorías
│   │
│   ├── layouts/               # 🎨 Layouts principales
│   │   └── MainLayout/       # Layout con header/footer
│   │
│   ├── router/                # 🧭 Configuración de rutas
│   │
│   ├── assets/                # 🖼️ Imágenes y recursos
│   │
│   ├── App.jsx                # Componente principal
│   └── main.jsx               # Entry point
│
├── scripts/                   # 🔧 Scripts de utilidad
│   ├── validate-deployment.js
│   └── analyze-images.js
│
├── .env.example               # 📝 Template de variables
├── .env.production           # 🔐 Variables de producción
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── README.md
```

---

## 🏗️ ARQUITECTURA

### Principios de Diseño

| Principio | Descripción |
|-----------|-------------|
| **Feature-Based** | Cada funcionalidad en su propia carpeta |
| **Colocation** | Componentes, hooks, servicios juntos |
| **Shared vs Core** | `shared` = reusable, `core` = utilitarios |
| **Lazy Loading** | Code splitting por ruta |

### Reglas de Imports

```jsx
// ✅ Components UI genéricos
import Button from '@shared/components/ui/Button';
import Modal from '@shared/components/ui/Modal';

// ✅ Contextos globales
import { useCart } from '@shared/contexts/CartContext';

// ✅ Utilidades
import { getWhatsAppLink } from '@core/constants/app';

// ✅ Features
import CatalogView from '@features/catalog/CatalogView';
import ProductDetails from '@features/products/ProductDetailsView';

// ❌ Evitar imports absolutos largos
// import from '@/components/ui/Button'  // NO
```

### Alias Disponibles

| Alias | Destino |
|-------|---------|
| `@core` | `src/core/` |
| `@shared` | `src/shared/` |
| `@features` | `src/features/` |
| `@layouts` | `src/layouts/` |
| `@assets` | `src/assets/` |
| `@components` | `src/components/` |

---

## 🚀 Inicio Rápido

### Prerrequisitos

- **Node.js** 20.x o superior
- **npm** 10.x o superior
- **Git** instalado

### Instalación

```bash
# 1. Clonar el repositorio
git clone https://github.com/TU_USUARIO/vive-web.git
cd vive-web

# 2. Instalar dependencias
npm install

# 3. Copiar variables de entorno
cp .env.example .env.local

# 4. Editar .env.local con tus valores
# (Opcional para desarrollo local)

# 5. Iniciar servidor de desarrollo
npm run dev
```

El sitio estará disponible en: `http://localhost:5173`

---

## 📦 Deployment

### Deployment Automático (GitHub Actions)

1. **Configurar GitHub Secrets** (ver [docs/GITHUB_SECRETS.md](./docs/GITHUB_SECRETS.md))
2. **Hacer push a main**:
   ```bash
   git add .
   git commit -m "feat: your feature"
   git push origin main
   ```
3. **Monitorear en GitHub Actions**: El deployment se ejecuta automáticamente

### Deployment Manual (Opcional)

```bash
# 1. Validar proyecto
npm run validate

# 2. Build de producción
npm run build

# 3. Preview local del build
npm run preview

# 4. Subir manualmente /dist a Hostinger vía FTP
```

---

## 🛠️ Scripts Disponibles

| Script | Descripción |
|--------|-------------|
| `npm run dev` | 🔧 Inicia servidor de desarrollo |
| `npm run build` | 📦 Build de producción |
| `npm run preview` | 👁️ Preview del build local |
| `npm run lint` | 🔍 Ejecuta ESLint |
| `npm run validate` | ✅ Valida configuración pre-deployment |
| `npm run predeploy` | 🚀 Validación + Build (todo en uno) |

---

## 🔐 Variables de Entorno

El proyecto usa variables de entorno prefijadas con `VITE_` para ser expuestas al cliente.

### Variables Requeridas

| Variable | Descripción | Ejemplo |
|----------|-------------|---------|
| `VITE_BRAND_NAME` | Nombre de la marca | `Sueño Dorado` |
| `VITE_BRAND_EMAIL` | Email de contacto | `ventas@suenodorado.pe` |
| `VITE_WHATSAPP_NUMBER` | Número de WhatsApp | `51989223448` |
| `VITE_PRODUCTION_URL` | URL de producción | `https://suenodorado.pe` |
| `VITE_API_URL` | URL de API | `https://api.suenodorado.pe` |

### Variables Opcionales (Analytics)

| Variable | Descripción |
|----------|-------------|
| `VITE_GA_MEASUREMENT_ID` | Google Analytics ID |
| `VITE_FB_PIXEL_ID` | Facebook Pixel ID |

### Configuración

**Desarrollo local**: Crea un archivo `.env.local`

**Producción**: Configurar en GitHub Secrets (ver [docs/GITHUB_SECRETS.md](./docs/GITHUB_SECRETS.md))

---

## 📚 Documentación

📁 **Toda la documentación está en la carpeta [`/docs`](./docs/)** 

### Guías para Deployment

- 📍 **[docs/START_HERE.md](./docs/START_HERE.md)** - **EMPIEZA AQUÍ** - Resumen ejecutivo
- ✅ **[docs/CHECKLIST.md](./docs/CHECKLIST.md)** - Checklist paso a paso de deployment
- 🚀 **[docs/DEPLOYMENT.md](./docs/DEPLOYMENT.md)** - Guía completa de despliegue
- 🔐 **[docs/GITHUB_SECRETS.md](./docs/GITHUB_SECRETS.md)** - Configuración de secrets
- 📊 **[docs/AUDIT.md](./docs/AUDIT.md)** - Reporte técnico de auditoría

### Stack Tecnológico

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| React | 19.2.0 | UI Framework |
| Vite | 7.2.4 | Build Tool |
| Tailwind CSS | 3.4.0 | Styling |
| React Router | 7.12.0 | Routing |
| React Helmet | 6.1.0 | SEO Meta Tags |
| React Icons | 5.5.0 | Iconos |
| jsPDF | 4.0.0 | Generación de PDFs |

---

## 🔧 Configuración de Vite

### Optimizaciones Aplicadas

```javascript
export default defineConfig({
  base: '/',                    // URL base
  build: {
    minify: 'terser',          // Minificación agresiva
    terserOptions: {
      compress: {
        drop_console: true,    // Eliminar console.logs
        drop_debugger: true    // Eliminar debuggers
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': ['react-helmet']
        }
      }
    }
  }
})
```

---

## 🌐 Apache .htaccess

Configuración optimizada para SPA en Hostinger:

- ✅ Redirección de todas las rutas a `index.html`
- ✅ Headers de seguridad (X-Frame-Options, CSP, etc.)
- ✅ Cache optimizado (1 año para assets, 1 hora para HTML)
- ✅ Compresión GZIP
- ✅ Protección de archivos sensibles

---

## 📊 Performance

### Métricas de Build

- **Tiempo de build**: ~10 segundos
- **Vendor chunk**: ~47 KB (gzipped: 16 KB)
- **Main bundle**: ~273 KB (gzipped: 86 KB)
- **Total assets**: Optimizado con code splitting

### Lighthouse Score (Objetivos)

- 🟢 **Performance**: 90+
- 🟢 **Accessibility**: 95+
- 🟢 **Best Practices**: 95+
- 🟢 **SEO**: 100

---

## 🤝 Contribución

### Workflow de Desarrollo

1. Crear una rama desde `main`:
   ```bash
   git checkout -b feature/nombre-feature
   ```

2. Hacer cambios y commit:
   ```bash
   git add .
   git commit -m "feat: descripción del cambio"
   ```

3. Validar antes de push:
   ```bash
   npm run validate
   npm run build
   ```

4. Push y crear Pull Request:
   ```bash
   git push origin feature/nombre-feature
   ```

### Convenciones de Commit

Usamos [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` Nueva funcionalidad
- `fix:` Corrección de bug
- `docs:` Cambios en documentación
- `style:` Cambios de formato (no afectan lógica)
- `refactor:` Refactorización de código
- `test:` Agregar o modificar tests
- `chore:` Tareas de mantenimiento

---

## 🐛 Troubleshooting

### Problema: Build falla

```bash
# Limpiar caché y reinstalar
rm -rf node_modules package-lock.json dist
npm install
npm run build
```

### Problema: Variables de entorno no se cargan

- Verificar que empiecen con `VITE_`
- Reiniciar servidor de desarrollo después de cambiar `.env`
- En producción, verificar GitHub Secrets

### Problema: Página en blanco en producción

- Verificar que `.htaccess` esté en el servidor
- Revisar consola del navegador (F12) para errores
- Confirmar que `base: '/'` esté en `vite.config.js`

---

## 📞 Soporte

- 📧 **Email**: ventas@vive.pe
- 📱 **WhatsApp**: +51 989 223 448
- 🌐 **Sitio Web**: [vive.pe](https://vive.pe)

---

## 📄 Licencia

Este proyecto es privado y confidencial. © 2026 Vive. Todos los derechos reservados.

---

## 🙏 Agradecimientos

- **Vite Team** - Por el increíble build tool
- **React Team** - Por la mejor librería de UI
- **Tailwind CSS** - Por el sistema de diseño
- **Hostinger** - Por el hosting confiable

---

**Desarrollado con ❤️ por el equipo de Vive**

🚀 **Status**: Production Ready | ✅ **CI/CD**: Enabled | 🔐 **Security**: Configured
