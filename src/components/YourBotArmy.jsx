import React from 'react';
import BotCard from './BotCard';

const YourBotArmy = ({ army, onRelease, onDischarge }) => {
  return (
    <div className="bg-blue-50 p-6 rounded-lg mb-6">
      <h2 className="text-2xl font-bold mb-4 text-blue-800">Your Bot Army</h2>
      {army.length === 0 ? (
        <p className="text-center text-gray-500 py-8">No bots in your army yet. Click on bots to enlist them!</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {army.map(bot => (
            <BotCard 
              key={bot.id} 
              bot={bot} 
              inArmy={true}
              onRelease={onRelease}
              onDischarge={onDischarge}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default YourBotArmy;