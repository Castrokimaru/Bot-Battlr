# Bot Battlr

A React application for building your custom bot army! Browse available bots, enlist them into your army, and manage your robotic forces.

## Features

- View All Bots: See profiles of all available bots in the BotCollection
- Enlist Bots: Add bots to your army by clicking the "Enlist" button
-Release Bots: Remove bots from your army
- Discharge Bots: Permanently delete bots from both your army and the database
- Responsive Design: Works on desktop and mobile devices

## Setup Instructions

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the JSON server: `json-server --watch db.json --port 8001`
4. Start the React app: `npm start`
5. Open [http://localhost:3000](http://localhost:3000) to view the app

## API Endpoints

- `GET /bots` - Fetch all bots
- `DELETE /bots/:id` - Delete a specific bot

## Core Deliverables Implemented

- ✅ See profiles of all bots rendered in BotCollection
- ✅ Add individual bots to army (only once)
- ✅ Release bots from army
- ✅ Discharge bots permanently from backend and frontend
- ✅ Bots remain in BotCollection when enlisted

## Technologies Used

- React 18
- CSS3 with Grid and Flexbox
- JSON Server for mock backend
- Fetch API for HTTP requests