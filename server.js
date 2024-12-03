const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Enable CORS for frontend requests
app.use(cors());

// Serve static files (frontend)
app.use(express.static('public'));

// Random quotes
const quotes = [
  "Life is like a box of chocolates.",
  "To infinity and beyond!",
  "Chaos is a ladder.",
  "Not all those who wander are lost.",
  "You miss 100% of the shots you don't take.",
];

// Endpoint to fetch a random quote
app.get('/api/quote', (req, res) => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  res.json({ quote: randomQuote });
});

// Random animation configuration
app.get('/api/animation', (req, res) => {
  const animations = ['bounce', 'spin', 'fade', 'slide'];
  const randomAnimation = animations[Math.floor(Math.random() * animations.length)];
  const randomDuration = (Math.random() * 3 + 2).toFixed(1) + 's'; // 2s to 5s
  res.json({ animation: randomAnimation, duration: randomDuration });
});

// Game logic: Fetch a random position for the falling object
app.get('/api/falling-object', (req, res) => {
  const randomPosition = Math.floor(Math.random() * 90) + 5; // Between 5% to 95%
  res.json({ position: randomPosition });
});

// Fallback route
app.get('*', (req, res) => {
  res.send("Welcome to the Randomized Website's Backend!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
