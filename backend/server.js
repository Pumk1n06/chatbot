import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';

dotenv.config();  // Load environment variables from .env file

const app = express();

// Middleware setup
app.use(cors());  // Enable Cross-Origin Resource Sharing
app.use(express.json());  // Parse incoming requests with JSON payload

// Routes setup
app.use('/api/auth', authRoutes);  // Auth routes for registration and login
app.use('/api/user', userRoutes);  // User-related routes (organization setup)

// Connect to MongoDB using async/await
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Database connected');
  } catch (err) {
    console.error('Database connection error:', err.message);
    process.exit(1);  // Exit the process if the DB connection fails
  }
};

connectDB();

// Global error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong on the server' });
});

// Start the server
const startServer = async () => {
  try {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Error starting server:', error);
    process.exit(1);  // Exit the process if the server fails to start
  }
};

startServer();
