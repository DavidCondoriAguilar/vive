# 🎯 Guía de Botones Premium 2026

Sistema de botones reutilizable con estilo premium, moderno y responsivo usando Tailwind CSS.

## 📋 Componentes Disponibles

### 1. **PrimaryButton** - Botón Primario
Usado para acciones principales como "Comprar", "Ver Detalles", "Comprar Ahora".

```jsx
import { PrimaryButton } from '@/components/ui/Buttons';

<PrimaryButton 
  onClick={() => handleAction()}
  className="w-full"
>
  Comprar Ahora
</PrimaryButton>
```

**Características:**
- Fondo: Negro puro (`bg-black`)
- Texto: Blanco, mayúsculas, tracking amplio
- Hover: Cambio de color a gris oscuro con elevación
- Efectos: Transiciones suaves 300ms
- Responsive: Funciona en todos los tamaños
- Arrow: Flecha animada al hacer hover (configurable)

**Props:**
```jsx
{
  children: ReactNode,           // Contenido del botón
  icon?: React.ComponentType,   // Icono opcional (react-icons)
  className?: string,            // Clases adicionales
  showArrow?: boolean,           // Mostrar flecha (default: true)
  disabled?: boolean,
  onClick?: () => void,
  ...rest: HTMLButtonAttributes
}
```

---

### 2. **SecondaryButton** - Botón Secundario
Usado para acciones secundarias como "Ficha Técnica", "Ver Especificaciones".

```jsx
import { SecondaryButton } from '@/components/ui/Buttons';

<SecondaryButton 
  onClick={() => openSpecs()}
  className="w-full"
>
  Ficha Técnica
</SecondaryButton>
```

**Características:**
- Fondo: Transparente
- Borde: Línea fina gris clara
- Texto: Negro, mayúsculas, tracking amplio
- Hover: Fondo gris claro, borde más oscuro
- Efectos: Transiciones suaves
- Dark mode: Soportado

**Props:**
```jsx
{
  children: ReactNode,
  icon?: React.ComponentType,
  className?: string,
  showArrow?: boolean,
  disabled?: boolean,
  onClick?: () => void,
  ...rest: HTMLButtonAttributes
}
```

---

### 3. **WhatsAppButton** - Botón WhatsApp
Contacto directo por WhatsApp con color característico.

```jsx
import { WhatsAppButton } from '@/components/ui/Buttons';

<WhatsAppButton 
  onClick={() => {
    const message = `Hola, me interesa...`;
    window.open(`https://wa.me/51989223448?text=${encodeURIComponent(message)}`, '_blank');
  }}
>
  Contactar por WhatsApp
</WhatsAppButton>
```

**Características:**
- Fondo: Verde WhatsApp (`#25D366`)
- Texto: Blanco, mayúsculas
- Hover: Cambio a verde más oscuro con elevación
- Efectos: Transiciones suaves
- Arrow: Flecha animada (configurable)

**Props:**
```jsx
{
  children?: string,            // Default: "WhatsApp"
  className?: string,
  showArrow?: boolean,
  disabled?: boolean,
  onClick?: () => void,
  ...rest: HTMLButtonAttributes
}
```

---

### 4. **LinkButton** - Botón de Enlace
Estilo texto con efecto hover minimalista.

```jsx
import { LinkButton } from '@/components/ui/Buttons';

<LinkButton 
  onClick={() => navigate('/pagina')}
>
  Ir a Más Detalles
</LinkButton>
```

**Características:**
- Sin fondo
- Texto negro con subrayado animado al hover
- Perfecto para enlaces secundarios
- Efecto minimalista

---

### 5. **CartButton** - Botón Carrito
Para agregar productos al carrito.

```jsx
import { CartButton } from '@/components/ui/Buttons';

<CartButton 
  onClick={() => addToCart(product)}
>
  Agregar al Carrito
</CartButton>
```

**Características:**
- Similar a PrimaryButton
- Fondo negro, texto blanco
- Ideal para e-commerce

---

### 6. **ButtonGroup** - Grupo de Botones
Contenedor con espaciado automático entre botones.

```jsx
import { ButtonGroup, PrimaryButton, SecondaryButton } from '@/components/ui/Buttons';

<ButtonGroup className="mt-6">
  <PrimaryButton>Acción Principal</PrimaryButton>
  <SecondaryButton>Acción Secundaria</SecondaryButton>
</ButtonGroup>

{/* Versión vertical */}
<ButtonGroup direction="col" className="gap-4">
  <PrimaryButton>Opción 1</PrimaryButton>
  <SecondaryButton>Opción 2</SecondaryButton>
</ButtonGroup>
```

---

## 🎨 Propiedades Comunes

### Dimensiones
- **Padding**: `px-8 py-3` (ancho) × (alto moderado)
- **Responsive**: Ajusta automáticamente en móvil

### Tipografía
- **Font**: Inter, Montserrat, sans-serif
- **Weight**: 500 (Medium)
- **Case**: Todas las letras en mayúsculas
- **Size**: 12px (0.75rem)
- **Spacing**: 0.1em (tracking-widest)

### Bordes
- **Radius**: Sin redondeo (`rounded-none`)
- **Grosor**: Muy fino (1px para secondary)

### Transiciones
- **Duration**: 300ms
- **Easing**: cubic-bezier(0.4, 0, 0.2, 1)
- **Efectos**: Color, transform, box-shadow

---

## 📱 Ejemplos de Uso en Componentes

### En CatalogView
```jsx
import { PrimaryButton, WhatsAppButton } from '@/components/ui/Buttons';

<div className="flex gap-3">
  <PrimaryButton
    onClick={() => window.location.href = `/producto/${product.id}`}
    className="flex-1 justify-center"
  >
    Ver Detalles
  </PrimaryButton>
  
  <WhatsAppButton
    onClick={() => {
      const message = `Hola, me interesa: ${product.name}`;
      window.open(`https://wa.me/51989223448?text=${encodeURIComponent(message)}`, '_blank');
    }}
    className="flex-1 justify-center"
  />
</div>
```

### En ProductDetailsView
```jsx
import { PrimaryButton, SecondaryButton } from '@/components/ui/Buttons';

<div className="flex gap-3">
  <PrimaryButton
    onClick={() => handleBuy()}
    className="flex-grow justify-center"
  >
    Comprar Ahora
  </PrimaryButton>
  
  <SecondaryButton 
    onClick={() => setShowSpecs(true)}
    className="justify-center"
  >
    Ficha Técnica
  </SecondaryButton>
</div>
```

### En Modal o Notificación
```jsx
import { PrimaryButton, WhatsAppButton } from '@/components/ui/Buttons';

<div className="flex gap-2">
  <PrimaryButton
    onClick={handleAddToCart}
    className="flex-1 text-sm px-3 py-2 justify-center"
    showArrow={false}
  >
    Agregar
  </PrimaryButton>
  
  <WhatsAppButton
    onClick={handleWhatsApp}
    className="flex-1 text-sm px-3 py-2 justify-center"
    showArrow={false}
  />
</div>
```

---

## 🎯 Estados y Efectos

### Estados Base
- **Default**: Color base sin efectos
- **Hover**: Cambio de color + elevación + flecha animada
- **Active**: Opacidad reducida, elevación mínima
- **Disabled**: Opacidad 50%, cursor no-permitido

### Animaciones
- **Arrow**: Aparece suavemente con desplazamiento horizontal
- **Icon**: Se desplaza hacia la derecha en hover
- **Box Shadow**: Aumenta en hover para efecto de elevación

---

## 🌙 Dark Mode

Todos los botones soportan dark mode automáticamente:

```jsx
// En componentes
<PrimaryButton>Botón que se adapta automáticamente</PrimaryButton>

// El SecondaryButton en dark mode:
// - Borde gris más oscuro
// - Fondo oscuro en hover
// - Texto blanco
```

---

## 🚀 Best Practices

1. **Usa PrimaryButton** para acciones principales (compra, envío, etc.)
2. **Usa SecondaryButton** para acciones alternativas
3. **Usa WhatsAppButton** solo para contacto WhatsApp
4. **Agrupa botones relacionados** con ButtonGroup
5. **Configura showArrow={false}** en botones dentro de modales/notificaciones pequeños
6. **Mantén consistencia** en todo el sitio usando estos componentes
7. **No personalices** estilos más allá del `className` prop
8. **Asegúrate** de que el texto sea breve y significativo

---

## 📚 Importación Recomendada

```jsx
// Importa solo lo que necesites
import { PrimaryButton, SecondaryButton, WhatsAppButton } from '@/components/ui/Buttons';

// O importa todo
import { 
  PrimaryButton, 
  SecondaryButton, 
  WhatsAppButton,
  LinkButton,
  CartButton,
  ButtonGroup 
} from '@/components/ui/Buttons';
```

---

## 🎨 Personalización con Tailwind

Puedes extender los estilos base usando props `className`:

```jsx
// Ancho completo
<PrimaryButton className="w-full">Comprar</PrimaryButton>

// Tamaño pequeño
<PrimaryButton className="px-4 py-2 text-xs">Guardar</PrimaryButton>

// Ancho limitado
<PrimaryButton className="w-40">Siguiente</PrimaryButton>

// Responsive
<PrimaryButton className="w-full sm:w-auto">Responder</PrimaryButton>
```

---

## ✨ Características Especiales

### Arrow Animada
La flecha se muestra automáticamente en hover. Para deshabilitarla:

```jsx
<PrimaryButton showArrow={false}>Sin flecha</PrimaryButton>
```

### Iconos Integrados
Puedes pasar un icono de react-icons:

```jsx
import { FaArrowRight } from 'react-icons/fa';

<PrimaryButton icon={FaArrowRight}>
  Con Icono
</PrimaryButton>
```

---

## 📞 Soporte

Para agregar nuevos tipos de botones o modificar estilos:
1. Edita `/src/components/ui/Buttons.jsx`
2. Agrega estilos en `/src/assets/styles/index.css`
3. Mantén la coherencia con el sistema de diseño

---

**Versión**: 2026.1  
**Última actualización**: Enero 2026  
**Tipografía**: Inter / Montserrat  
**Framework**: React + Tailwind CSS
