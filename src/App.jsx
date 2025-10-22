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
  const [filterClass, setFilterClass] = useState([]);

  useEffect(() => {
    fetchBots();
  }, []);

  const fetchBots = async () => {
    try {
      const response = await fetch('http://localhost:8001/bots');
      const data = await response.json();
      setBots(data);
    } catch (error) {
      console.error('Error fetching bots:', error);
    }
  };

  const enlistBot = (bot) => {
    // Check if bot is already in army
    if (!army.find(b => b.id === bot.id)) {
      // Advanced: Check if class is already represented
      const classExists = army.some(b => b.bot_class === bot.bot_class);
      if (classExists) {
        alert(`You already have a ${bot.bot_class} in your army!`);
        return;
      }
      
      setArmy([...army, bot]);
      setSelectedBot(null); // Return to list view after enlisting
    }
  };

  const releaseBot = (botId) => {
    setArmy(army.filter(bot => bot.id !== botId));
  };

  const dischargeBot = async (botId) => {
    try {
      await fetch(`http://localhost:8001/bots/${botId}`, {
        method: 'DELETE',
      });
      
      // Remove from both army and main list
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">🤖 Bot Battlr</h1>
          <p className="text-gray-600">Build your ultimate bot army!</p>
        </header>

        <YourBotArmy 
          army={army}
          onRelease={releaseBot}
          onDischarge={dischargeBot}
        />

        {selectedBot ? (
          <BotSpecs 
            bot={selectedBot}
            onBack={backToList}
            onEnlist={enlistBot}
          />
        ) : (
          <>
            <SortBar 
              sortBy={sortBy}
              onSortChange={setSortBy}
              filterClass={filterClass}
              onFilterChange={setFilterClass}
            />
            
            <BotCollection 
              bots={bots}
              onEnlist={showBotSpecs} // For core: change to enlistBot
              sortBy={sortBy}
              filterClass={filterClass}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default App;