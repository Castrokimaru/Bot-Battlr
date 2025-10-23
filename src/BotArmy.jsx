import { useState, useEffect } from 'react';
import BotCollection from './BotCollection';

// This component manages a list of bots: fetching, adding, and deleting them.
function BotArmy() {
  const [bots, setBots] = useState([]);
  // "bots" holds the list of all bots fetched from the database.

  const [newBot, setNewBot] = useState({
    name: "",
    class: "",
    health: "",
    damage: "",
    avatar_url: ""
  });
  // "newBot" stores data entered in the form before being added to the bot list.

  useEffect(() => {
    // This runs once when the component loads to fetch existing bots.
    fetch('http://localhost:5000/Bots')
      .then((res) => res.json())
      .then((data) => setBots(data))
      .catch((err) => console.error("Error fetching bots:", err));
  }, []);
  // The empty dependency array ensures this runs only once on mount.

  const handleAddBot = async (e) => {
    e.preventDefault();
    // Prevents the page from refreshing when submitting the form.

    const res = await fetch('http://localhost:5000/Bots', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newBot),
    });
    // Sends a POST request to add a new bot to the database.

    const added = await res.json();
    // Waits for the newly added bot data to be returned.

    setBots([...bots, added]);
    // Adds the new bot to the current list.

    setNewBot({ name: "", class: "", health: "", damage: "", avatar_url: "" });
    // Clears the form fields after adding a bot.
  };

  const handleDelete = async (id) => {
    await fetch(`http://localhost:5000/Bots/${id}`, { method: "DELETE" });
    // Sends a DELETE request to remove the bot by its ID.

    setBots(bots.filter(bot => bot.id !== id));
    // Updates the state to remove the deleted bot from the displayed list.
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-gray-100 rounded-2xl shadow mr-0">
      {/* Page heading */}
      <h1 className="text-3xl font-bold mb-4 text-center">Bot Infantry</h1>

      {/* Form for adding a new bot */}
      <form onSubmit={handleAddBot} className="space-y-5 mb-4">
        {["name", "class", "health", "damage", "avatar_url"].map(field => (
          <input
            key={field}
            type={
              field === "health" || field === "damage"
                ? "number"
                : field === "avatar"
                ? "url"
                : "text"
            }
            placeholder={field[0].toUpperCase() + field.slice(1)}
            value={newBot[field]}
            onChange={e => setNewBot({ ...newBot, [field]: e.target.value })}
            className="border p-2 w-full rounded"
          />
        ))}
        <button className="bg-blue-600 text-black font-semibold w-full p-2 rounded">
          Add to Service
        </button>
      </form>

      {/* List of all bots */}
      <ul>
        {bots.map(bot => (
          <li
            key={bot.id}
            className="bg-white p-3 mb-2 rounded flex justify-between items-center shadow-sm"
          >
            <span>
              <b>{bot.name}</b> — {bot.class} ( ⚔️ {bot.health}, 🛡️ {bot.damage},)
            </span>
            <button
              onClick={() => handleDelete(bot.id)}
              className="bg-red-500 text-white px-2 py-1 rounded"
            >
              Retire Bot
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BotArmy;
