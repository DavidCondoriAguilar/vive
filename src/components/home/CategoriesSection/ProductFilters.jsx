import React from 'react';
import { FaFilter } from 'react-icons/fa';

const ProductFilters = ({ 
  selectedType, 
  selectedSize, 
  onTypeChange, 
  onSizeChange,
  onFilterChange 
}) => {
  const types = ['todos', 'espuma', 'resorte'];
  const sizes = ['todos', '1 PLZ', '1.5 PLZ', '2 PLZ', 'QUEEN', 'KING'];

  const handleTypeChange = (type) => {
    onTypeChange(type);
    onFilterChange(); // Reset carousel when filter changes
  };

  const handleSizeChange = (size) => {
    onSizeChange(size);
    onFilterChange(); // Reset carousel when filter changes
  };

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {/* Filter Label */}
      <div className="flex items-center gap-2 glass-grid px-4 py-2 rounded-lg">
        <FaFilter className="text-gray-500" />
        <span className="text-sm font-medium text-gray-700">Filtros:</span>
      </div>
      
      {/* Type Filter */}
      <div className="flex flex-wrap gap-2">
        {types.map(type => (
          <button
            key={type}
            onClick={() => handleTypeChange(type)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              selectedType === type
                ? 'bg-gold-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {type === 'todos' ? 'Todos' : type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>

      {/* Size Filter */}
      <div className="flex flex-wrap gap-2">
        {sizes.map(size => (
          <button
            key={size}
            onClick={() => handleSizeChange(size)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              selectedSize === size
                ? 'bg-gold-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {size === 'todos' ? 'Todas las medidas' : size}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductFilters;
