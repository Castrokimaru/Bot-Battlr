import React from "react";
import BotArmy from "./BotArmy";
import BotCollection from "./BotCollection";
import { useState, useEffect } from "react";
import BottBattlr from "./BottBattlr";

function App() {
  // State variable to store the list of bots fetched from the database
  const [bots, setBots] = useState([]);

  // Fetch the bots from the local JSON server when the component loads
  useEffect(() => {
    fetch("http://localhost:5000/Bots") // Fetch request to the JSON server
      .then((res) => res.json()) // Convert the response to JSON
      .then((data) => setBots(data)) // Save the fetched bots into state
      .catch((err) => console.error("Error fetching bots:", err)); // Handle any errors
  }, []);

  // Log the fetched bots to the console for debugging
  console.log("fetched bots:", bots);

  return (
    // Main container for the entire app
    <div className="bg-purple-400 min-h-screen">
      
      {/* Header section */}
      <header className="bg-black text-white p-10">
        <div className="flex justify-around ml-2 mr-3.5 items-centre max-w-6xl mx-auto">
          {/* App Title */}
          <h1 className="font-semibold text-4xl text-amber-300 tracking-wide">
            BOT ARMY
          </h1>

          {/* Navigation Links */}
          <nav className="space-x-8 text-shadow-lg flex">
            <a href="#home" className="hover:text-amber-300">Home</a>
            <a href="#about" className="hover:text-amber-300">About</a>
            <a href="#resources" className="hover:text-amber-300">Resources</a>
          </nav>

          {/* Get Started Button */}
          <button className="bg-amber-300 text-black font-semibold px-4 py-2 rounded-lg hover:bg-amber-400 transition flex-end">
            Get Started
          </button>
        </div>
      </header>

      {/* Main content area */}
      <main className="flex flex-col md:flex-row gap-4 p-6">
        
        {/* Left section — Bot Collection display */}
        <div className="flex-1">
          <BotCollection bots={bots} />
        </div>

        {/* Middle section — Battle interface */}
        <div>
          <BottBattlr />
        </div>

        {/* Right section — Bot management form */}
        <div className="w-full md:w-1/3">
          <BotArmy />
        </div>

      </main>
    </div>
  );
}

export default App;
