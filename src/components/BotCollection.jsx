import React from 'react';
import BotCard from '../BotCard';

const BotCollection = ({ bots, onEnlist, sortBy, filterClass }) => {
  // Filter and sort bots
  const filteredBots = bots.filter(bot => 
    filterClass.length === 0 || filterClass.includes(bot.bot_class)
  );

  const sortedBots = [...filteredBots].sort((a, b) => {
    if (sortBy === 'health') return b.health - a.health;
    if (sortBy === 'damage') return b.damage - a.damage;
    if (sortBy === 'armor') return b.armor - a.armor;
    return 0;
  });

  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Available Bots</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sortedBots.map(bot => (
          <BotCard 
            key={bot.id} 
            bot={bot} 
            onEnlist={onEnlist}
          />
        ))}
      </div>
      {sortedBots.length === 0 && (
        <p className="text-center text-gray-500 py-8">No bots found matching your criteria.</p>
      )}
    </div>
  );
};

export default BotCollection;