import React from 'react';

const SortBar = ({ sortBy, setSortBy, filterClass, setFilterClass }) => {
  const botClasses = ["Support", "Medic", "Assault", "Defender", "Captain", "Witch"];

  return (
    <div className="bg-gray-800 rounded-lg p-6 mb-8 shadow-2xl">
      <h3 className="text-lg font-bold mb-4 text-center text-yellow-400">Filter & Sort Bots</h3>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Sort By:
          </label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            <option value="">None</option>
            <option value="health">Health</option>
            <option value="damage">Damage</option>
            <option value="armor">Armor</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Filter by Class:
          </label>
          <select
            value={filterClass}
            onChange={(e) => setFilterClass(e.target.value)}
            className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            <option value="">All Classes</option>
            {botClasses.map(className => (
              <option key={className} value={className}>
                {className}
              </option>
            ))}
          </select>
        </div>
      </div>
      
      {(sortBy || filterClass) && (
        <div className="mt-4 text-center">
          <button
            onClick={() => {
              setSortBy('');
              setFilterClass('');
            }}
            className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded transition-colors"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default SortBar;