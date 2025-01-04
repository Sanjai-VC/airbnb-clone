const mongoose = require('mongoose');

// Function to connect to the database
const connectDB = async () => {
    try {
        // Connect to the MongoDB database
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected successfully');
    } catch (error) {
        // Log the error and exit the process
        console.error('Database connection error:', error.message);
        process.exit(1);
    }
};

// Export the connectDB function for use in other parts of the application
module.exports = connectDB;
