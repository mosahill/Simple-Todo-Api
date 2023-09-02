const express = require('express');

// Create an Express router
const router = express.Router();

// Import the controller functions for handling todo-related operations
const { postTodo, updateTodo, deleteTodo, getTodo } = require('../controllers/todoControllers');

// Define routes for handling todo operations
// When a POST request is made to "/posttodo/:todo", it will invoke the postTodo function
router.post("/posttodo/:todo", postTodo);

// When a PUT request is made to "/updatetodo/:id/:updatetodo", it will invoke the updateTodo function
router.put("/updatetodo/:id/:updatedtodo", updateTodo);

// When a DELETE request is made to "/deletetodo/:id/:updatetodo", it will invoke the deleteTodo function
router.delete("/deletetodo/:id", deleteTodo);


router.get("/gettodo", getTodo);

// Export the router for use in other parts of the application
module.exports = router;
