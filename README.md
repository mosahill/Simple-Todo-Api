<h2 id="prerequisites">Prerequisites</h2>
<p>Before you begin, make sure you have the following installed:</p>
<ul>
<li>Node.js: JavaScript runtime environment.</li>
<li>MongoDB: NoSQL database.</li>
</ul>
<h2 id="setup-instructions">Setup Instructions</h2>
<h4 id="clone-the-repository">Clone the Repository:</h4>
<p>Clone this repository to your local machine using the following command:</p>
<pre><code class="language-sh">git clone https://github.com/mosahill/Simple-Todo-Api.git
</code></pre>
<h4 id="navigate-to-the-project-directory">Navigate to the Project Directory:</h4>
<p>Go to the project folder:</p>
<pre><code class="language-sh">cd Simple-Todo-Api
</code></pre>
<h4 id="install-dependencies">Install Dependencies:</h4>
<p>Install the project dependencies using npm:</p>
<pre><code class="language-sh">npm install express mongoose
</code></pre>
<p>This will add the <strong>express</strong> and <strong>mongoose</strong> packages to your project and update the dependencies section of your <strong>package.json</strong> file.</p>
<h4 id="create-a-env-file">Create a .env File:</h4>
<p>Create a .env file in the project&#39;s root directory and add your MongoDB connection string. Replace YOUR_MONGODB_URI with your actual MongoDB connection string:</p>
<pre><code class="language-sh">DATABASE_URL=YOUR_MONGODB_URI
</code></pre>
<p><strong>For example:</strong></p>
<pre><code>DATABASE_URL=mongodb://localhost:27017/todo-app
</code></pre>
<h4 id="start-the-server">Start the Server:</h4>
<p>Start the Express.js server:</p>
<pre><code>npm start
</code></pre>
<p>The server will run on port 3000 by default.</p>

<h3 id="access-the-todo-api-endpoints">Access the Todo API Endpoints:</h3>
<p>You can now access the Todo API endpoints using tools like Postman or curl, or by making HTTP requests from your applications.</p>
<ul>
<li><h4 id="create-a-todo">Create a Todo:</h4>
</li>
</ul>
<p>Make a POST request to /posttodo with a JSON body containing a &quot;todo&quot; property to create a new Todo item.</p>
<ul>
<li><h4 id="update-a-todo">Update a Todo:</h4>
</li>
</ul>
<p>Make a PUT request to /updatetodo/:id with a JSON body containing an updated &quot;todo&quot; property to update an existing Todo item. Replace :id with the ID of the Todo item you want to update.</p>
<ul>
<li><h4 id="delete-a-todo">Delete a Todo:</h4>
</li>
</ul>
<p>Make a DELETE request to /deletetodo/:id to delete an existing Todo item. Replace :id with the ID of the Todo item you want to delete.</p>
<ul>
<li><h4 id="retrieve-all-todos">Retrieve all Todos:</h4>
</li>
</ul>
<p>Make a GET request to /gettodo to retrieve all Todo items.</p>

<h3 id="access-the-todo-api-endpoints">Access the Todo API Endpoints:</h3>
<p>You can now access the Todo API endpoints using tools like Postman or curl, or by making HTTP requests from your applications.</p>
<ul>
<li><h4 id="create-a-todo">Create a Todo:</h4>
</li>
</ul>
<p>Make a POST request to <strong>/posttodo/someTask</strong> to create a new Todo item. Replace <strong>someTask</strong> with the task you want to add.</p>
<ul>
<li><h4 id="update-a-todo">Update a Todo:</h4>
</li>
</ul>
<p>Make a PUT request to <strong>/updatetodo/todoId/newTask</strong> to update an existing Todo item. Replace <strong>todoId</strong> with the ID of the Todo item you want to update and newTask with the updated task.</p>
<ul>
<li><h4 id="delete-a-todo">Delete a Todo:</h4>
</li>
</ul>
<p>Make a DELETE request to <strong>/deletetodo/todoId</strong> to delete an existing Todo item. Replace <strong>todoId</strong> with the ID of the Todo item you want to delete.</p>
<ul>
<li><h4 id="retrieve-all-todos">Retrieve all Todos:</h4>
</li>
</ul>
<p>Make a GET request to <strong>/gettodo</strong> to retrieve all Todo items.</p>
<h1 id="troubleshooting">Troubleshooting</h1>
<p>If you encounter any issues or errors during setup or while running the application, please check the following:</p>
<ul>
<li>Ensure that MongoDB is running and accessible at the specified connection URL.</li>
<li>Double-check your <strong>.env</strong> file for correct environment variable values.</li>
<li>Review the console output for error messages when running the application.</li>
</ul>

