import React from 'react';

const BotSpecs = ({ bot, onBack, onEnlist }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
      <div className="flex justify-between items-start mb-6">
        <h2 className="text-3xl font-bold text-gray-800">{bot.name}</h2>
        <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">
          {bot.bot_class}
        </span>
      </div>
      
      <div className="flex flex-col md:flex-row gap-6">
        <img 
          src={bot.avatar_url} 
          alt={bot.name}
          className="w-48 h-48 rounded-lg border-4 border-gray-300 mx-auto"
        />
        
        <div className="flex-1">
          <p className="text-gray-600 mb-4 italic">"{bot.catchphrase}"</p>
          
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-red-100 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-red-600">{bot.health}</div>
              <div className="text-sm text-red-800">Health</div>
            </div>
            <div className="bg-yellow-100 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-yellow-600">{bot.damage}</div>
              <div className="text-sm text-yellow-800">Damage</div>
            </div>
            <div className="bg-blue-100 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-blue-600">{bot.armor}</div>
              <div className="text-sm text-blue-800">Armor</div>
            </div>
          </div>
          
          <div className="text-sm text-gray-500">
            <p>Created: {new Date(bot.created_at).toLocaleDateString()}</p>
            <p>Updated: {new Date(bot.updated_at).toLocaleDateString()}</p>
          </div>
        </div>
      </div>
      
      <div className="flex gap-4 mt-6">
        <button
          onClick={onBack}
          className="flex-1 bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 transition-colors"
        >
          Back to List
        </button>
        <button
          onClick={() => onEnlist(bot)}
          className="flex-1 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors"
        >
          Enlist Bot
        </button>
      </div>
    </div>
  );
};

export default BotSpecs;