## Bot Army — React Application
## Overview

Bot Army is a React-based web app where users can create, view, and manage a collection of bots.
You can add new bots to your database, display them in a collection, and build your own battle army from the available bots.

This project uses React, Tailwind CSS for styling, and JSON Server as a lightweight mock backend.

## Features

Add Bots: Create new bots with custom names, classes, health, damage, and avatar URLs.

Display Bots: View all bots neatly in a responsive grid layout.

Delete Bots: Remove bots from the database using a simple “Retire Bot” button.

Build an Army: Select bots from your collection to add to your personal battle army.

Dynamic UI: Uses Tailwind CSS for a clean and modern responsive design.

## Technologies Used

React (Frontend Framework)

Tailwind CSS (Styling)

JSON Server (Mock REST API)

Vite (Development environment)

JavaScript (ES6+)

## Project Structure
src/
│
├── components/
│   ├── App.jsx           # Root component rendering layout and main sections
│   ├── BotArmy.jsx       # Handles adding and deleting bots (form & list)
│   ├── BotCollection.jsx # Displays all bots in a grid layout
│   ├── BottBattlr.jsx    # Allows users to preview bots and build an army
│
├── index.css             # Tailwind base styles
├── main.jsx              # App entry point
└── ...

## Setup Instructions
1. Clone the Repository
git clone https://github.com/your-username/bot-army.git
cd bot-army

2. Install Dependencies
npm install

3. Set Up JSON Server

You’ll use db.json to simulate a backend database.

Create a file in the root directory named db.json and add the following example data:

{
  "Bots": [
    {
      "id": 1,
      "name": "BoltTron",
      "class": "Defender",
      "health": 90,
      "damage": 40,
      "avatar_url": "https://i.pinimg.com/736x/d9/ae/43/d9ae4306877e2b282e6d6935c1e5ebf6.jpg"
    }
  ]
}


Then start JSON Server on port 5000:

npx json-server --watch db.json --port 5000


You should now see your mock API running at:

http://localhost:5000/Bots

4. Run the React App
npm run dev


Open the URL shown in your terminal (usually http://localhost:5173/).

## How It Works

BotArmy.jsx:
Handles fetching, adding, and deleting bots from the JSON server.

BotCollection.jsx:
Displays all bots in a responsive grid layout.
Each bot card shows its name, health, and damage.

BottBattlr.jsx:
Lets users build their own army by selecting bots from the list.

App.jsx:
Combines all components and structures the page layout using Tailwind classes.

## Example Commands

Start both the backend and frontend:

# Start the mock API
npx json-server --watch db.json --port 5000

# In another terminal, start the React app
npm run dev

## Tailwind Setup (if not already configured)

If Tailwind CSS isn’t already set up, run:

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p


Then, in your tailwind.config.js, add:

content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],


And in index.css:

@tailwind base;
@tailwind components;
@tailwind utilities;

## Future Improvements

Add bot editing functionality

Implement sorting and filtering by class, health, or damage

Add animations when bots are added or deleted

Connect to a real API backend

## License

This project is open-source and available under the MIT License.