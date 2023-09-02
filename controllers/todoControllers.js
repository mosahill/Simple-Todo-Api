const Todo = require("../models/TodoSchema");

// Controller to create a new Todo
const postTodo = async (req, res) => {
    try {
        console.log(req.params.todo) // This will log the value of the "todo" route parameter to the console
        // Create a new Todo object using data from the request parameters
        const createTodos = await Todo.create({ todo: req.params.todo });

        // If Todo creation was successful, send a success response
        if (createTodos) {
            res.status(200).send({ "message": "Todo created..." });
        } else {
            // If Todo creation failed, send an error response
            res.status(400).send({ "message": "Todo creation failed..." });
        }
    } catch (err) {
        // Handle any errors that occur during the operation
        console.error(err);
        res.status(500).send({ "message": "Internal server error" });
    }
};

// Controller to update an existing Todo
const updateTodo = async (req, res) => {
    try {
        console.log(req.params.updatedtodo) // This will log the value of the "todo" route parameter to the console
        // Find and update the Todo based on the provided ID and request data
        const updateTodos = await Todo.findByIdAndUpdate(req.params.id, { todo: req.params.updatedtodo });

        // If Todo update was successful, send a success response
        if (updateTodos) {
            res.status(200).send({ "message": "Todo updated..." });
        } else {
            // If Todo update failed, send an error response
            res.status(400).send({ "message": "Todo update failed..." });
        }
    } catch (err) {
        // Handle any errors that occur during the operation
        console.error(err);
        res.status(500).send({ "message": "Internal server error" });
    }
};

// Controller to delete an existing Todo
const deleteTodo = async (req, res) => {
    try {
        console.log("Todo Deleted") // This will log the value of the "todo" route parameter to the console
        // Find and delete the Todo based on the provided ID
        const deleteTodos = await Todo.findByIdAndDelete(req.params.id);

        // If Todo deletion was successful, send a success response
        if (deleteTodos) {
            res.status(200).send({ "message": "Todo deleted..." });
        } else {
            // If Todo deletion failed, send an error response
            res.status(400).send({ "message": "Todo deletion failed..." });
        }
    } catch (err) {
        // Handle any errors that occur during the operation
        console.error(err);
        res.status(500).send({ "message": "Internal server error" });
    }
};

// Controller to retrieve all Todo items
const getTodo = async (req, res) => {
    try {
        // Query the database to find all Todo items
        const getAllTodos = await Todo.find()

        // If there are todos found, send a success response with the data
        if (getAllTodos) {
            res.status(200).send({ getAllTodos, message: "Todos retrieved successfully." });
        } else {
            // If no todos are found, send a 404 response with an appropriate message
            res.status(404).send({ message: "No todos found." });
        }
    } catch (err) {
        // Handle any errors that occur during the operation
        console.error(err);
        res.status(500).send({ message: "Internal server error" });
    }
};

module.exports = { postTodo, updateTodo, deleteTodo, getTodo };
