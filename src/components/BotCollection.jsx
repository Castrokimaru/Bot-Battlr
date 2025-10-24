import React from 'react';
import BotCard from './BotCard';

const BotCollection = ({ bots, addToArmy, showBotSpecs, army }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow-2xl">
      <h2 className="text-2xl font-bold mb-6 text-center text-yellow-400">
        Available Bots ({bots.length})
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {bots.map(bot => (
          <BotCard
            key={bot.id}
            bot={bot}
            onAddToArmy={addToArmy}
            onShowSpecs={showBotSpecs}
            isInArmy={army.some(b => b.id === bot.id)}
            showAddButton={true}
          />
        ))}
      </div>
      {bots.length === 0 && (
        <div className="text-center text-gray-400 py-8">
          No bots available. Try changing your filters!
        </div>
      )}
    </div>
  );
};

export default BotCollection;