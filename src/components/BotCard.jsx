import React from 'react';

const BotCard = ({ bot, onAddToArmy, onShowSpecs, isInArmy, showAddButton, onRelease, onDischarge }) => {
  const getClassColor = (botClass) => {
    const colors = {
      Support: 'bg-blue-500',
      Medic: 'bg-green-500',
      Assault: 'bg-red-500',
      Defender: 'bg-yellow-500',
      Captain: 'bg-purple-500',
      Witch: 'bg-pink-500'
    };
    return colors[botClass] || 'bg-gray-500';
  };

  return (
    <div className="bg-gray-700 rounded-lg p-4 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-600 hover:border-yellow-400">
      <div className="flex items-start space-x-4">
        <img 
          src={bot.avatar_url} 
          alt={bot.name}
          className="w-20 h-20 rounded-lg object-cover border-2 border-gray-500"
        />
        
        <div className="flex-1">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold text-white">{bot.name}</h3>
            <span className={`px-2 py-1 rounded text-xs font-bold ${getClassColor(bot.bot_class)}`}>
              {bot.bot_class}
            </span>
          </div>
          
          <p className="text-gray-300 text-sm mb-3 italic">"{bot.catchphrase}"</p>
          
          <div className="grid grid-cols-3 gap-2 mb-4">
            <div className="text-center bg-gray-600 rounded p-2">
              <div className="text-red-400 font-bold">❤️ {bot.health}</div>
            </div>
            <div className="text-center bg-gray-600 rounded p-2">
              <div className="text-orange-400 font-bold">⚔️ {bot.damage}</div>
            </div>
            <div className="text-center bg-gray-600 rounded p-2">
              <div className="text-blue-400 font-bold">🛡️ {bot.armor}</div>
            </div>
          </div>
          
          <div className="flex space-x-2">
            {showAddButton && !isInArmy && (
              <button
                onClick={() => onAddToArmy(bot)}
                className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded transition-colors"
              >
                Enlist
              </button>
            )}
            
            {showAddButton && (
              <button
                onClick={() => onShowSpecs(bot)}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition-colors"
              >
                View
              </button>
            )}
            
            {onRelease && (
              <button
                onClick={() => onRelease(bot.id)}
                className="flex-1 bg-yellow-600 hover:bg-yellow-700 text-white py-2 px-4 rounded transition-colors"
              >
                Release
              </button>
            )}
            
            {onDischarge && (
              <button
                onClick={() => onDischarge(bot.id)}
                className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded transition-colors"
              >
                ✕
              </button>
            )}
          </div>
          
          {isInArmy && (
            <div className="mt-2 text-center">
              <span className="bg-yellow-500 text-black px-2 py-1 rounded text-xs font-bold">
                Enlisted
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BotCard;