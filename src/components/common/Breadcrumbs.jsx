import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumbs = () => {
  const location = useLocation();

  // Generate breadcrumbs based on current path
  const generateBreadcrumbs = () => {
    const pathnames = location.pathname.split('/').filter(x => x);

    const breadcrumbs = [
      { name: 'Inicio', path: '/' }
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
  if (location.pathname === '/') {
    return null;
  }

  return (
    <nav className="py-4 px-6 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto max-w-6xl">
        <ol className="flex items-center space-x-2 text-sm">
          {breadcrumbs.map((crumb, index) => (
            <li key={crumb.path} className="flex items-center">
              {index > 0 && (
                <svg
                  className="w-4 h-4 mx-2 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 5l7 7-7 7" />
                </svg>
              )}
              {index === breadcrumbs.length - 1 ? (
                <span className="text-gray-900 dark:text-white font-medium">
                  {crumb.name}
                </span>
              ) : (
                <Link
                  to={crumb.path}
                  className="text-gray-500 dark:text-gray-400 hover:text-gold-500 dark:hover:text-gold-400 transition-colors duration-200"
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