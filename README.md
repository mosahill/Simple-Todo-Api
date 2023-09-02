# Simple-Todo-Api

#Prerequisites
Before you begin, make sure you have the following installed:

Node.js: JavaScript runtime environment.
MongoDB: NoSQL database.
Setup Instructions
Clone the Repository:

Clone this repository to your local machine using the following command:

bash
Copy code
git clone https://github.com/yourusername/your-repo-name.git
Navigate to the Project Directory:

Go to the project folder:

bash
Copy code
cd your-repo-name
Install Dependencies:

Install the project dependencies using npm (Node Package Manager):

bash
Copy code
npm install
Create a .env File:

Create a .env file in the project's root directory and add your MongoDB connection string. Replace YOUR_MONGODB_URI with your actual MongoDB connection string:

env
Copy code
DATABASE_URL=YOUR_MONGODB_URI
For example:

env
Copy code
DATABASE_URL=mongodb://localhost:27017/todo-app
Start the Server:

Start the Express.js server:

bash
Copy code
npm start
The server will run on port 3000 by default.

Access the Todo Application:

Open your web browser and navigate to http://localhost:3000 to use the Todo application.

Routes
Create a Todo:

Make a POST request to /posttodo/someTask to create a new Todo item. Replace someTask with the task you want to add.

Update a Todo:

Make a PUT request to /updatetodo/todoId/newTask to update an existing Todo item. Replace todoId with the ID of the Todo item you want to update and newTask with the updated task.

Delete a Todo:

Make a DELETE request to /deletetodo/todoId to delete an existing Todo item. Replace todoId with the ID of the Todo item you want to delete.

Retrieve all Todos:

Make a GET request to /gettodo to retrieve all Todo items.

Troubleshooting
If you encounter any issues or errors during setup or while running the application, please check the following:

Ensure that MongoDB is running and accessible at the specified connection URL.
Double-check your .env file for correct environment variable values.
Review the console output for error messages when running the applicati
