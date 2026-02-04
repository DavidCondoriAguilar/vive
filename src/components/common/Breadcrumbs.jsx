import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ROUTES } from '@/router/routes';

const Breadcrumbs = () => {
  const location = useLocation();

  // Generate breadcrumbs based on current path
  const generateBreadcrumbs = () => {
    const pathnames = location.pathname.split('/').filter(x => x);

    const breadcrumbs = [
      { name: 'Inicio', path: ROUTES.HOME }
    ];

    // Handle different routes
    if (pathnames.length > 0) {
      pathnames.forEach((pathname, index) => {
        const path = `/${pathnames.slice(0, index + 1).join('/')}`;

        let name = pathname.charAt(0).toUpperCase() + pathname.slice(1);

        // Custom names for specific routes
        switch (pathname) {
          case 'categorias':
            name = 'Categorías';
            break;
          case 'producto':
            name = 'Producto';
            break;
          case 'blog':
            name = 'Blog';
            break;
          case 'ofertas':
            name = 'Ofertas';
            break;
          case 'politica-devoluciones':
            name = 'Política de Devoluciones';
            break;
          default:
            // Try to decode if it's a product/category ID
            if (pathname.length > 10) {
              name = 'Detalle';
            }
            break;
        }

        breadcrumbs.push({ name, path });
      });
    }

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  // Don't show breadcrumbs on home page
  if (location.pathname === ROUTES.HOME || location.pathname === ROUTES.INICIO) {
    return null;
  }

  return (
    <nav className="py-4 px-6 bg-white dark:bg-black border-b border-gray-200 dark:border-white/5">
      <div className="container mx-auto max-w-6xl">
        <ol className="flex items-center space-x-2 text-xs font-medium uppercase tracking-wider">
          {breadcrumbs.map((crumb, index) => (
            <li key={crumb.path} className="flex items-center gap-2">
              {index > 0 && (
                <span className="text-gray-300 dark:text-gray-600">/</span>
              )}
              {index === breadcrumbs.length - 1 ? (
                <span className="text-gray-900 dark:text-white font-bold">
                  {crumb.name}
                </span>
              ) : (
                <Link
                  to={crumb.path}
                  className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-200 hover:underline"
                >
                  {crumb.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumbs;