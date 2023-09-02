const mongoose = require('mongoose');

// Function to establish a database connection
const database = async () => {
    try {
        // Connect to the MongoDB database using the provided URL and options
        await mongoose.connect(process.env.DATABASE_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        // If the connection is successful, log a success message
        console.log('Database connected...');
    } catch (err) {
        // Handle any errors that occur during the connection process
        console.error(err);
    }
};

module.exports = database;
