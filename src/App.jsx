import React, { useState, useEffect } from 'react';
import BotCollection from './Components/BotCollection';
import YourBotArmy from './Components/YourBotArmy';
import SortBar from './Components/SortBar';

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);
  const [sortBy, setSortBy] = useState('');
  const [filterClass, setFilterClass] = useState('All');

  useEffect(() => {
    fetchBots();
  }, []);

  const fetchBots = async () => {
    try {
      const response = await fetch('http://localhost:8001/bots');
      const botData = await response.json();
      setBots(botData);
    } catch (error) {
      console.error('Error fetching bots:', error);
    }
  };

  const addToArmy = (bot) => {
    if (!army.find(b => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  const releaseFromArmy = (botId) => {
    setArmy(army.filter(bot => bot.id !== botId));
  };

  const dischargeBot = async (botId) => {
    try {
      await fetch(`http://localhost:8001/bots/${botId}`, {
        method: 'DELETE'
      });
      setArmy(army.filter(bot => bot.id !== botId));
      setBots(bots.filter(bot => bot.id !== botId));
    } catch (error) {
      console.error('Error discharging bot:', error);
    }
  };

  const getFilteredAndSortedBots = () => {
    let filteredBots = bots;
    
    // Filter by class
    if (filterClass !== 'All') {
      filteredBots = bots.filter(bot => bot.bot_class === filterClass);
    }
    
    // Sort bots
    if (sortBy) {
      filteredBots = [...filteredBots].sort((a, b) => b[sortBy] - a[sortBy]);
    }
    
    return filteredBots;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 border-b border-slate-700">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-5xl font-bold text-center mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Bot Battlr
          </h1>
          <p className="text-xl text-center text-slate-300">
            Build Your Galactic Bot Army!
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Your Bot Army Section */}
        <YourBotArmy 
          army={army} 
          onRelease={releaseFromArmy} 
          onDischarge={dischargeBot}
        />

        {/* Sort and Filter Bar */}
        <SortBar 
          sortBy={sortBy}
          onSortChange={setSortBy}
          filterClass={filterClass}
          onFilterChange={setFilterClass}
        />

        {/* Bot Collection */}
        <BotCollection 
          bots={getFilteredAndSortedBots()}
          onAddToArmy={addToArmy}
          army={army}
        />

        {/* Empty State */}
        {getFilteredAndSortedBots().length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🤖</div>
            <h3 className="text-2xl font-bold text-slate-300 mb-2">
              No Bots Found
            </h3>
            <p className="text-slate-400">
              {filterClass !== 'All' 
                ? `No ${filterClass} class bots available.`
                : 'No bots match your criteria.'
              }
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;