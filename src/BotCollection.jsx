import React from 'react';
import BotCard from './BotCard';

function YourBotArmy({ army, onRelease, onDischarge }) {
  if (army.length === 0) {
    return (
      <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 mb-8 text-center">
        <div className="text-6xl mb-4">🏰</div>
        <h2 className="text-2xl font-bold text-slate-300 mb-2">
          Your Bot Army Awaits
        </h2>
        <p className="text-slate-400">
          No bots enlisted yet. Click "Enlist in Army" to add bots to your forces!
        </p>
      </div>
    );
  }

  return (
    <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
          Your Bot Army
        </h2>
        <div className="flex items-center gap-4">
          <span className="text-slate-400">
            {army.length} bot{army.length !== 1 ? 's' : ''} enlisted
          </span>
          <div className="flex gap-2">
            {['Support', 'Medic', 'Assault', 'Defender', 'Captain', 'Witch'].map(cls => {
              const count = army.filter(bot => bot.bot_class === cls).length;
              return count > 0 ? (
                <span key={cls} className="bg-slate-700 text-slate-300 text-xs px-2 py-1 rounded">
                  {cls}: {count}
                </span>
              ) : null;
            })}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {army.map(bot => (
          <BotCard
            key={bot.id}
            bot={bot}
            onAddToArmy={() => {}}
            onDischarge={onDischarge}
            inArmy={true}
          />
        ))}
      </div>
    </div>
  );
}

export default YourBotArmy;