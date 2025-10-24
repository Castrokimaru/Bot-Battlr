import React from 'react';

const BotSpecs = ({ bot, backToList, addToArmy, isInArmy }) => {
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
    <div className="max-w-4xl mx-auto">
      <button
        onClick={backToList}
        className="mb-6 bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded-lg transition-colors flex items-center"
      >
        ← Back to Collection
      </button>
      
      <div className="bg-gray-800 rounded-lg p-8 shadow-2xl">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <img 
              src={bot.avatar_url} 
              alt={bot.name}
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          
          <div>
            <div className="flex items-start justify-between mb-4">
              <h1 className="text-3xl font-bold text-white">{bot.name}</h1>
              <span className={`px-3 py-1 rounded text-sm font-bold ${getClassColor(bot.bot_class)}`}>
                {bot.bot_class}
              </span>
            </div>
            
            <p className="text-gray-300 text-lg mb-6 italic">"{bot.catchphrase}"</p>
            
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-gray-700 rounded-lg p-4 text-center">
                <div className="text-2xl text-red-400 font-bold">{bot.health}</div>
                <div className="text-sm text-gray-400">Health</div>
              </div>
              <div className="bg-gray-700 rounded-lg p-4 text-center">
                <div className="text-2xl text-orange-400 font-bold">{bot.damage}</div>
                <div className="text-sm text-gray-400">Damage</div>
              </div>
              <div className="bg-gray-700 rounded-lg p-4 text-center">
                <div className="text-2xl text-blue-400 font-bold">{bot.armor}</div>
                <div className="text-sm text-gray-400">Armor</div>
              </div>
            </div>
            
            <div className="bg-gray-700 rounded-lg p-4 mb-6">
              <h3 className="font-bold text-lg mb-2">Bot Details</h3>
              <div className="text-sm text-gray-300 space-y-1">
                <div>ID: {bot.id}</div>
                <div>Created: {new Date(bot.created_at).toLocaleDateString()}</div>
                <div>Updated: {new Date(bot.updated_at).toLocaleDateString()}</div>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <button
                onClick={backToList}
                className="flex-1 bg-gray-600 hover:bg-gray-700 text-white py-3 px-6 rounded-lg transition-colors"
              >
                Back to List
              </button>
              
              {!isInArmy ? (
                <button
                  onClick={() => {
                    addToArmy(bot);
                    backToList();
                  }}
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg transition-colors"
                >
                  Enlist in Army
                </button>
              ) : (
                <button
                  disabled
                  className="flex-1 bg-yellow-600 text-white py-3 px-6 rounded-lg cursor-not-allowed"
                >
                  Already Enlisted
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BotSpecs;