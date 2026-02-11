import React from 'react';

const CategoriesHeader = () => {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-gray-900 dark:text-white mb-4">
        Nuestros <span className="text-vive-500">Productos</span>
      </h2>
      <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
        Calidad directa de fábrica para tu descanso perfecto
      </p>
    </div>
  );
};

export default CategoriesHeader;
