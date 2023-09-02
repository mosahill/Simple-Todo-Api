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
<p>Install the project dependencies using npm (Node Package Manager):</p>
<pre><code class="language-sh">npm i express
</code></pre>
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
