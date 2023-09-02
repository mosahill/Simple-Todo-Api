// Import the Express framework
const express = require('express');

// Create an Express application
const app = express();

// Import the userRouter and database functions
const userRouter = require('./router/userRouter');
const database = require('./router/database');

// Load environment variables from a .env file (if present)
require('dotenv').config();

// Use JSON parsing middleware for incoming requests
app.use(express.json());

// Use URL-encoded parsing middleware for incoming requests with extended mode
app.use(express.urlencoded({ extended: true }));

// Connect to the database
database();

// Use the userRouter for handling user-related routes
app.use(userRouter);

// Start the Express server on port 3000
app.listen(3000, () => {
    console.log("Server Started...");
});
