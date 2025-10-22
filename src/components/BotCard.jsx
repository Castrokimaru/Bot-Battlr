import React from 'react';

const BotCard = ({ bot, onEnlist, onRelease, onDischarge, inArmy = false }) => {
  const handleClick = () => {
    if (inArmy) {
      onRelease(bot.id);
    } else {
      onEnlist(bot);
    }
  };

  const handleDischarge = (e) => {
    e.stopPropagation();
    onDischarge(bot.id);
  };

  return (
    <div 
      className={`border rounded-lg p-4 cursor-pointer transition-all duration-200 ${
        inArmy 
          ? 'bg-green-100 border-green-500 shadow-lg transform scale-105' 
          : 'bg-white border-gray-300 hover:shadow-md'
      }`}
      onClick={handleClick}
    >
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-bold text-gray-800">{bot.name}</h3>
        {inArmy && (
          <button
            onClick={handleDischarge}
            className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold hover:bg-red-600"
          >
            ×
          </button>
        )}
      </div>
      
      <img 
        src={bot.avatar_url} 
        alt={bot.name}
        className="w-32 h-32 mx-auto rounded-full border-2 border-gray-300 mb-3"
      />
      
      <div className="text-sm text-gray-600 mb-2">
        <p><span className="font-semibold">Class:</span> {bot.bot_class}</p>
        <p className="italic text-xs">"{bot.catchphrase}"</p>
      </div>
      
      <div className="grid grid-cols-3 gap-2 text-center text-xs">
        <div className="bg-red-100 p-2 rounded">
          <div className="font-bold">❤️ {bot.health}</div>
        </div>
        <div className="bg-yellow-100 p-2 rounded">
          <div className="font-bold">⚡ {bot.damage}</div>
        </div>
        <div className="bg-blue-100 p-2 rounded">
          <div className="font-bold">🛡️ {bot.armor}</div>
        </div>
      </div>
    </div>
  );
};

export default BotCard;