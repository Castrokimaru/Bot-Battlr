import React from "react";

function BotCollection({ bots }) {
  // This component receives a list of bots as a prop and displays them.

  // Check if the "bots" prop is actually an array before trying to display it.
  // If it's not an array, log an error and show a simple message on the screen.
  if (!Array.isArray(bots)) {
    console.error("BotCollection received 'bots' prop that is not an array:", bots);
    return <p>Error: Bots data is not available.</p>; // Display an error message instead of crashing
  }

  return (
    // The main container for displaying all bots
    // It uses Tailwind CSS for layout and spacing.
    // "grid" creates a grid layout, "place-items-center" centers items in each cell.
    <div className="ml-0 p-4 w-full md:w-4/5 grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center">
      
      {/* Loop through each bot in the array and create a card for it */}
      {bots.map((bot) => (
        <div
          key={bot.id} // Each element needs a unique key to help React track changes
          className="bg-red-400 p-4 rounded-xl shadow hover:shadow-lg transition"
        >
          {/* Display the bot's image */}
          <img
            src={
              bot.avatar_url || 
              "https://i.pinimg.com/736x/d9/ae/43/d9ae4306877e2b282e6d6935c1e5ebf6.jpg"
            }
            alt={bot.name}
            className="w-full h-40 object-cover rounded-md mb-3"
          />

          {/* Display the bot's name */}
          <h2 className="text-lg font-semibold text-purple-800">{bot.name}</h2>

          {/* Display the bot's health and damage stats */}
          <p className="text-gray-600">Health: {bot.health}</p>
          <p className="text-gray-600">Damage: {bot.damage}</p>
        </div>
      ))}
    </div>
  );
}

export default BotCollection;
