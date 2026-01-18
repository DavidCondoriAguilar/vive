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

*Minimal design, maximum quality.*
