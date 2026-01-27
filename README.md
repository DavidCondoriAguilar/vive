# Sueño Dorado

E-commerce platform for premium mattresses — direct from factory.

## Architecture

**Frontend Stack**
- React 19 + Vite
- Tailwind CSS + PostCSS
- React Router DOM
- ESLint + Prettier

**Performance**
- HMR for development
- Optimized production builds
- Component-based architecture

## Installation

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Scripts

- `dev` — Development server
- `build` — Production build
- `lint` — Code linting
- `preview` — Production preview

---

## 🎨 Design System & UX Philosophy

This project implements a **Premium "Gold & Black" Aesthetic** designed to position the brand as a leader in quality and luxury, without losing accessibility. The visual language is built on three core pillars:

### 1. The "Gold & Black" Identity
*   **Gold (`text-gold-500`)**: Used strategically for primary actions (CTAs), highlights, and feedback. It symbolizes "Golden Dream" (Sueño Dorado) quality and premium value.
*   **Deep Black & Clean White**: High-contrast backgrounds (`bg-gray-900` vs `bg-white`) create a cinematic, editorial feel that allows product images to pop.
*   **Purpose**: This combination evokes trust, elegance, and exclusivity, moving away from generic e-commerce designs.

### 2. Modern Glassmorphism & Depth
*   We utilize **Glassmorphism** (`backdrop-blur-xl`, `bg-white/95`) in sticky elements like the Navbar and Shopping Cart. This keeps context visible while focusing user attention.
*   **Bento Grids**: Content is organized in asymmetric, grid-based layouts (inspired by Bento design) rather than simple lists, improving information consumption and visual interest.

### 3. Motion & Interaction Design
*   **Fluid Transitions**: All hover states and mode switches (Light/Dark) have smooth durations (`duration-300` to `duration-500`). Nothing "snaps"; everything flows.
*   **Micro-interactions**: Subtle zooms on product cards and sliding underlines in navigation provide immediate, satisfying feedback without overwhelming the user.
*   **Stability**: We follow the "Less is More" principle. Animations are used to guide the eye, not distract it.

### 4. E-commerce Funnel Strategy
*   The layout is psychologically ordered: **Hero (Hook) → Categories (Discovery) → Products (Desire) → Brand Story (Trust)**.
*   This flow ensures users understand *what* is for sale before being asked to invest in the brand story, significantly improving conversion potential.

---

## 🎯 Typography System

### Font Hierarchy 2026
- **Primary Font**: **Inter** + **Manrope** (Clean, modern, highly legible)
- **Display/Headings**: **Space Grotesk** + **Playfair Display** (Bold, premium, authoritative)
- **Brand Elements**: **Playfair Display** (Elegant, sophisticated serif)
- **Fallbacks**: System fonts for reliability

### Typography Features
- **Variable font weights** for perfect contrast ratios
- **Optimized line-height** for readability across devices
- **Letter-spacing optimization** for premium feel
- **Responsive sizing** using `clamp()` for fluid typography

---

## ✨ Animations & Transitions

### Core Animation Library
- **Fade In Up**: Elegant entrance animations (`animate-fade-in-up`)
- **Slide Animations**: Left, Right, Bottom entrances
- **Shimmer Effects**: Premium loading states (`animate-shimmer`)
- **Pulse Variations**: Subtle attention grabbers (`animate-pulse-slow`)
- **Modal Animations**: Smooth, bouncy entrances (`animate-modal-up`)

### Transition System
- **Hover States**: `cubic-bezier(0.4, 0, 0.2, 1)` for natural movement
- **Dark Mode**: Smooth `duration-500` transitions
- **Button Interactions**: Micro-animations with transform effects
- **Card Hovers**: Lift effects with premium shadows

### Advanced Effects
- **Glassmorphism**: Backdrop blur with transparency layers
- **Gradient Animations**: Moving color gradients for depth
- **Grid Patterns**: Subtle animated background patterns
- **Loading States**: Sophisticated skeleton screens

---

## 🎨 Visual Design Elements

### Color Palette
- **Primary Gold**: `#D4AF37` (Premium gold accent)
- **Dark Theme**: Sophisticated blacks with subtle gradients
- **Light Theme**: Clean whites with warm undertones
- **Semantic Colors**: Purpose-driven color system

### Layout Patterns
- **Bento Grid**: Asymmetric, content-focused layouts
- **Professional Sections**: Multi-layered gradient backgrounds
- **Clean Minimal**: Subtle patterns with depth
- **Glass Grid**: Modern glassmorphism with pattern overlays

### Component Styling
- **Premium Cards**: Elevated with custom shadows
- **Button System**: Consistent, animated interactions
- **Form Elements**: Custom-styled with focus states
- **Navigation**: Sticky with glassmorphism effects

---

## 🚀 Performance Features

### Animation Optimization
- **GPU Accelerated**: Transform and opacity animations
- **Reduced Motion**: Respects user preferences
- **Lazy Loading**: Images fade in on load
- **Staggered Animations**: Sequential element reveals

### Responsive Design
- **Mobile-First**: Progressive enhancement approach
- **Fluid Typography**: Scales perfectly across devices
- **Touch-Friendly**: Optimized interaction areas
- **Performance**: Optimized for 60fps animations

---

## 🎭 Interactive Details

### Micro-interactions
- **Button Hover Effects**: Transform + shadow changes
- **Card Interactions**: Lift with gold accent highlights
- **Loading States**: Professional shimmer effects
- **Form Feedback**: Smooth validation animations

### Advanced Features
- **Custom Scrollbars**: Styled to match theme
- **Smooth Scrolling**: Native scroll behavior
- **Dark Mode**: Complete theme system
- **Focus Management**: Accessibility-first interactions

---

*Minimal design, maximum quality.*
