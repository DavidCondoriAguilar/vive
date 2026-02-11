import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaSearch, FaArrowLeft } from 'react-icons/fa';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center px-6 transition-colors duration-700">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-vive-500/[0.02] via-transparent to-blue-500/[0.02] pointer-events-none"></div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-vive-500/[0.03] rounded-full blur-[100px]"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/[0.02] rounded-full blur-[120px]"></div>

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        {/* 404 Number */}
        <div className="mb-12">
          <h1 className="text-[12rem] md:text-[16rem] font-black text-gray-100 dark:text-gray-900 leading-none tracking-tighter">
            404
          </h1>
          <div className="relative -mt-24 md:-mt-32">
            <span className="text-4xl md:text-6xl font-black text-vive-500 leading-none">
              PERDIDO
            </span>
          </div>
        </div>

        {/* Message */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 uppercase tracking-wider">
            Esta página no existe
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 font-medium leading-relaxed max-w-md mx-auto">
            Buscas colchones premium. Has llegado al lugar incorrecto, pero estamos a punto de solucionarlo.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/"
            className="inline-flex items-center gap-3 bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-full font-black text-sm uppercase tracking-widest transition-all hover:bg-vive-500 hover:text-white dark:hover:bg-vive-500 dark:hover:text-white shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:shadow-vive-500/20 hover:-translate-y-1 hover:scale-105"
          >
            <FaHome className="w-4 h-4" />
            Página Principal
          </Link>

          <Link
            to="/catalogo"
            className="inline-flex items-center gap-3 border-2 border-gray-200 dark:border-white/20 text-gray-900 dark:text-white px-8 py-4 rounded-full font-black text-sm uppercase tracking-widest transition-all hover:border-vive-500 hover:text-vive-500 dark:hover:border-vive-500 dark:hover:text-vive-500"
          >
            <FaSearch className="w-4 h-4" />
            Ver Catálogo
          </Link>
        </div>

        {/* Help Text */}
        <div className="mt-16 text-sm text-gray-500 dark:text-gray-500">
          <p className="mb-2">
            ¿Buscabas algo específico?
          </p>
          <p className="text-xs">
            <Link to="/categorias" className="text-vive-500 hover:text-vive-600 transition-colors">
              Ver categorías →
            </Link>
            {' • '}
            <Link to="/contacto" className="text-vive-500 hover:text-vive-600 transition-colors">
              Contactar →
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
