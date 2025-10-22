import React from 'react';

const SortBar = ({ sortBy, onSortChange, filterClass, onFilterChange }) => {
  const botClasses = ["Support", "Medic", "Assault", "Defender", "Captain", "Witch"];

  const handleFilterChange = (className) => {
    const newFilters = filterClass.includes(className)
      ? filterClass.filter(c => c !== className)
      : [...filterClass, className];
    onFilterChange(newFilters);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-6">
      <div className="flex flex-wrap gap-4 items-center">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Sort by:</label>
          <select 
            value={sortBy} 
            onChange={(e) => onSortChange(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">None</option>
            <option value="health">Health</option>
            <option value="damage">Damage</option>
            <option value="armor">Armor</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Filter by class:</label>
          <div className="flex flex-wrap gap-2">
            {botClasses.map(className => (
              <button
                key={className}
                onClick={() => handleFilterChange(className)}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  filterClass.includes(className)
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {className}
              </button>
            ))}
          </div>
        </div>
        
        {filterClass.length > 0 && (
          <button
            onClick={() => onFilterChange([])}
            className="text-red-500 hover:text-red-700 text-sm font-medium"
          >
            Clear Filters
          </button>
        )}
      </div>
    </div>
  );
};

export default SortBar;
