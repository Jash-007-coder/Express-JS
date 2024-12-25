// Import the express module
const express = require('express');

// Create an instance of Express
const app = express();

// Define the port
const port = 3000;

// Define a simple route for the homepage
app.get('/', (req, res) => {
  res.send('Hello, world! Welcome to my Express server!');
});

// Define a route for another endpoint
app.get('/about', (req, res) => {
  res.send('This is the About page.');
});

// Start the server and make it listen on the specified port
app.listen(port, () => {
  console.log(`Server running at http://127.0.0.1:${port}/`);
});
