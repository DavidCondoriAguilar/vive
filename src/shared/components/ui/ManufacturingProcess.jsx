import React from 'react';

/**
 * Manufacturing Process Section
 * Visual showcase of the complete manufacturing process
 */
const ManufacturingProcess = () => {
  const processSteps = [
    {
      title: "Fabricación de Resortes",
      description: "Acero premium transformado en resortes de máxima durabilidad",
      icon: "🔩"
    },
    {
      title: "Producción de Espumas",
      description: "Fórmulas químicas exclusivas para confort superior",
      icon: "⚗️"
    },
    {
      title: "Tejido de Telas",
      description: "Telas transpirables con tratamientos antibacteriales",
      icon: "🧵"
    },
    {
      title: "Ensamblaje Final",
      description: "Colchones ensamblados con precisión artesanal",
      icon: "🏭"
    }
  ];

  return (
    <div className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-light text-gray-900 dark:text-white mb-4">
          Proceso Industrial
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
          Fabricación completa desde cero
        </p>

        {/* Simple Process Steps */}
        <div className="grid md:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 bg-gray-900 dark:bg-white rounded-full flex items-center justify-center text-white dark:text-black mx-auto mb-4">
                {index + 1}
              </div>
              <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Simple Stats */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-gray-200 dark:border-gray-800">
          <div className="text-center">
            <div className="text-2xl font-light text-gray-900 dark:text-white mb-1">15+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Años</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-light text-gray-900 dark:text-white mb-1">50K+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Colchones</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-light text-gray-900 dark:text-white mb-1">100%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Nacional</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManufacturingProcess;
