import React from 'react';

function SortBar({ sortBy, onSortChange, filterClass, onFilterChange }) {
  const sortOptions = [
    { value: '', label: 'No Sorting' },
    { value: 'health', label: 'Health' },
    { value: 'damage', label: 'Damage' },
    { value: 'armor', label: 'Armor' }
  ];

  const classFilters = [
    'All', 'Support', 'Medic', 'Assault', 'Defender', 'Captain', 'Witch'
  ];

  return (
    <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Sort Section */}
        <div>
          <label className="block text-sm font-semibold text-slate-300 mb-3">
            🔧 Sort Bots By
          </label>
          <div className="flex flex-wrap gap-2">
            {sortOptions.map(option => (
              <button
                key={option.value}
                onClick={() => onSortChange(option.value)}
                className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                  sortBy === option.value
                    ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25'
                    : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {/* Filter Section */}
        <div>
          <label className="block text-sm font-semibold text-slate-300 mb-3">
            🎯 Filter By Class
          </label>
          <div className="flex flex-wrap gap-2">
            {classFilters.map(botClass => (
              <button
                key={botClass}
                onClick={() => onFilterChange(botClass)}
                className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                  filterClass === botClass
                    ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/25'
                    : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                }`}
              >
                {botClass}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SortBar;