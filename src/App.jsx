import React, { useState, useEffect } from 'react';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import SortBar from './components/SortBar';
import BotSpecs from './components/BotSpecs';

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);
  const [sortBy, setSortBy] = useState('');
  const [filterClass, setFilterClass] = useState('');

  useEffect(() => {
    fetchBots();
  }, []);

  const fetchBots = async () => {
    try {
      const response = await fetch('https://json-server-vercel-ytuo.vercel.app/Bots');
      const data = await response.json();
      setBots(data);
    } catch (error) {
      console.error('Error fetching bots:', error);
    }
  };

  const addToArmy = (bot) => {
    if (!army.find(b => b.id === bot.id) && !army.find(b => b.bot_class === bot.bot_class)) {
      setArmy([...army, bot]);
    }
  };

  const releaseFromArmy = (botId) => {
    setArmy(army.filter(bot => bot.id !== botId));
  };

  const dischargeBot = async (botId) => {
    try {
      await fetch(`https://json-server-vercel-ytuo.vercel.app/Bots/${botId}`, {
        method: 'DELETE'
      });
      setArmy(army.filter(bot => bot.id !== botId));
      setBots(bots.filter(bot => bot.id !== botId));
    } catch (error) {
      console.error('Error discharging bot:', error);
    }
  };

  const showBotSpecs = (bot) => {
    setSelectedBot(bot);
  };

  const backToList = () => {
    setSelectedBot(null);
  };

  const sortedAndFilteredBots = () => {
    let filtered = bots;
    
    if (filterClass) {
      filtered = filtered.filter(bot => bot.bot_class === filterClass);
    }
    
    if (sortBy) {
      filtered = [...filtered].sort((a, b) => b[sortBy] - a[sortBy]);
    }
    
    return filtered;
  };

  if (selectedBot) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 text-white">
        <div className="container mx-auto px-4 py-8">
          <BotSpecs 
            bot={selectedBot} 
            backToList={backToList}
            addToArmy={addToArmy}
            isInArmy={army.some(b => b.id === selectedBot.id)}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">
            🤖 Bot Battlr
          </h1>
          <p className="text-xl text-gray-300">Build Your Ultimate Bot Army!</p>
        </header>

        <SortBar 
          sortBy={sortBy}
          setSortBy={setSortBy}
          filterClass={filterClass}
          setFilterClass={setFilterClass}
        />

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <BotCollection 
              bots={sortedAndFilteredBots()}
              addToArmy={addToArmy}
              showBotSpecs={showBotSpecs}
              army={army}
            />
          </div>
          
          <div>
            <YourBotArmy 
              army={army}
              releaseFromArmy={releaseFromArmy}
              dischargeBot={dischargeBot}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;