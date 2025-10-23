import React, { useState, useEffect } from "react";
// This brings in React, and two tools:
// useState (to remember things) and useEffect (to do things when the page loads)

function BottBattlr() {
  // This is our robot playground — a React component

  const [bots, setBots] = useState([]);
  // "bots" is a list that starts empty — we’ll fill it with robot data later.

  const [army, setArmy] = useState([]);
  // "army" is another list that will hold the bots we choose for our team.

  useEffect(() => {
    // This runs one time when the page first shows up.

    fetch("http://localhost:5000/Bots")
      // Go ask our local robot database for all the bots.
      .then(res => res.json())
      // When the robots arrive, turn them into real JavaScript objects.
      .then(setBots)
      // Store the robots in our "bots" memory above.
      .catch(err => console.error("Error fetching bots:", err));
      // If something goes wrong, print an error in the console.
  }, []);
  // The empty [] means “only do this once” when the page loads.

  const addToArmy = bot =>
    !army.find(b => b.id === bot.id) && setArmy([...army, bot]);
  // If the bot is not already in our army, we add it to the list.

  const removeFromArmy = id =>
    setArmy(army.filter(b => b.id !== id));
  // Take away any bot whose id matches the one we clicked on.

  return (
    // This is what we show on the screen.
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-purple-300 to-pink-200 p-6">
      
      {/* Big title at the top */}
      <h1 className="text-3xl font-bold text-purple-900 mb-6 text-center">
        Build an Army
      </h1>

      {/* The grid that shows all the robots */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 max-w-3xl">
        {bots.map(bot => (
          // We make one little box for every robot in our list.
          <div key={bot.id} className="bg-white p-3 rounded-xl shadow hover:shadow-lg w-44 text-center">
            <img
              src={bot.avatar_url || "https://i.pinimg.com/736x/d9/ae/43/d9ae4306877e2b282e6d6935c1e5ebf6.jpg"}
              // Show the robot’s picture — if it doesn’t have one, use a default.
              alt={bot.name}
              className="w-full h-36 object-cover rounded-md mb-2"
            />
            <h2 className="font-semibold text-purple-800">{bot.name}</h2>
            {/* Show the robot’s name */}
            <p className="text-sm text-gray-600">
              ⚔️ {bot.damage} | ❤️ {bot.health}
            </p>
            {/* Show how strong and healthy it is */}
            <button
              onClick={() => addToArmy(bot)}
              // When we click, the robot joins our army.
              className="bg-purple-500 text-white px-2 py-1 rounded mt-1 hover:bg-purple-600 w-full"
            >
              Add
            </button>
          </div>
        ))}
      </div>

      {/* Our army section — it only shows up if we have bots inside */}
      {army.length > 0 && (
        <div className="mt-10 bg-white p-4 rounded-2xl shadow w-full max-w-3xl">
          <h2 className="text-xl font-bold text-purple-800 text-center mb-3">
            Your Army 🛡️
          </h2>

          {/* We line up our army bots here */}
          <div className="flex flex-wrap justify-center gap-3">
            {army.map(bot => (
              // We show each robot in the army
              <div key={bot.id} className="bg-purple-100 p-2 rounded-lg w-24 text-center">
                <img
                  src={bot.avatar_url}
                  alt={bot.name}
                  className="w-full h-16 object-cover rounded mb-1"
                />
                <p className="text-xs font-semibold">{bot.name}</p>
                {/* Robot name */}
                <button
                  onClick={() => removeFromArmy(bot.id)}
                  // Clicking this takes the robot out of the army.
                  className="text-red-500 text-xs"
                >
                  Dismiss
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default BottBattlr;
// This makes our robot playground available to use in other files.
