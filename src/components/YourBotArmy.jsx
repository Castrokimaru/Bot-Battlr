import React from 'react';
import BotCard from './BotCard';

const YourBotArmy = ({ army, releaseFromArmy, dischargeBot }) => {
  const totalStats = army.reduce((acc, bot) => ({
    health: acc.health + bot.health,
    damage: acc.damage + bot.damage,
    armor: acc.armor + bot.armor
  }), { health: 0, damage: 0, armor: 0 });

  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow-2xl sticky top-4">
      <h2 className="text-2xl font-bold mb-6 text-center text-green-400">
        Your Bot Army ({army.length})
      </h2>
      
      {army.length > 0 && (
        <div className="mb-6 bg-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-bold mb-3 text-center">Army Stats</h3>
          <div className="grid grid-cols-3 gap-2 text-center">
            <div>
              <div className="text-red-400 font-bold">❤️ {totalStats.health}</div>
              <div className="text-xs text-gray-400">Total Health</div>
            </div>
            <div>
              <div className="text-orange-400 font-bold">⚔️ {totalStats.damage}</div>
              <div className="text-xs text-gray-400">Total Damage</div>
            </div>
            <div>
              <div className="text-blue-400 font-bold">🛡️ {totalStats.armor}</div>
              <div className="text-xs text-gray-400">Total Armor</div>
            </div>
          </div>
        </div>
      )}
      
      <div className="space-y-4 max-h-96 overflow-y-auto">
        {army.map(bot => (
          <BotCard
            key={bot.id}
            bot={bot}
            onRelease={releaseFromArmy}
            onDischarge={dischargeBot}
            showAddButton={false}
          />
        ))}
      </div>
      
      {army.length === 0 && (
        <div className="text-center text-gray-400 py-8">
          <div className="text-6xl mb-4">🤖</div>
          <p>No bots in your army yet!</p>
          <p className="text-sm mt-2">Enlist bots from the collection to build your army.</p>
        </div>
      )}
    </div>
  );
};

export default YourBotArmy;