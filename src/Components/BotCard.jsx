import React from 'react';

function BotCard({ bot, onAddToArmy, onDischarge, inArmy = false }) {
  const { id, name, health, damage, armor, bot_class, catchphrase, avatar_url } = bot;

  const handleAddToArmy = () => {
    onAddToArmy(bot);
  };

  const handleDischarge = (e) => {
    e.stopPropagation();
    onDischarge(id);
  };

  const getClassColor = (botClass) => {
    const colors = {
      Support: 'bg-green-500 text-white',
      Medic: 'bg-blue-500 text-white',
      Assault: 'bg-red-500 text-white',
      Defender: 'bg-yellow-500 text-black',
      Captain: 'bg-purple-500 text-white',
      Witch: 'bg-pink-500 text-white'
    };
    return colors[botClass] || 'bg-gray-500 text-white';
  };

  return (
    <div className={`bot-card ${inArmy ? 'bot-card-army' : ''} group relative overflow-hidden`}>
      {/* Discharge Button */}
      <button
        onClick={handleDischarge}
        className="absolute top-3 right-3 w-8 h-8 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center transition-all duration-200 opacity-0 group-hover:opacity-100 z-10"
        title="Discharge Bot"
      >
        ×
      </button>

      {/* Bot Image */}
      <div className="flex justify-center mb-4">
        <div className="relative">
          <img
            src={avatar_url}
            alt={name}
            className="w-24 h-24 rounded-full border-4 border-slate-600 group-hover:border-blue-400 transition-colors duration-300"
          />
          {inArmy && (
            <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
              Enlisted
            </div>
          )}
        </div>
      </div>

      {/* Bot Info */}
      <div className="text-center mb-4">
        <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
        <p className="text-slate-400 text-sm italic mb-3 line-clamp-2">
          "{catchphrase}"
        </p>
        
        <div className={`class-badge ${getClassColor(bot_class)} inline-block`}>
          {bot_class}
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-2 mb-4">
        <div className="bg-slate-700/50 rounded-lg p-2 text-center">
          <div className="text-red-400 text-sm">❤️ Health</div>
          <div className="stat-value text-red-400">{health}</div>
        </div>
        <div className="bg-slate-700/50 rounded-lg p-2 text-center">
          <div className="text-yellow-400 text-sm">⚔️ Damage</div>
          <div className="stat-value text-yellow-400">{damage}</div>
        </div>
        <div className="bg-slate-700/50 rounded-lg p-2 text-center">
          <div className="text-blue-400 text-sm">🛡️ Armor</div>
          <div className="stat-value text-blue-400">{armor}</div>
        </div>
      </div>

      {/* Action Button */}
      {!inArmy && (
        <button
          onClick={handleAddToArmy}
          className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200 transform hover:scale-105"
        >
          Enlist in Army
        </button>
      )}
      
      {inArmy && (
        <button
          onClick={() => onDischarge?.(id)}
          className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200"
        >
          Enlisted ✓
        </button>
      )}
    </div>
  );
}

export default BotCard;