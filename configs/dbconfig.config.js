import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const MONGODB_URI = process.env.DB_URL;

const dbconnect = async () => {
  try {
    if (!MONGODB_URI) {
      throw new Error('Missing DB_URL in environment variables');
    }

    if (mongoose.connections[0].readyState) {
      console.log('MongoDB is already connected');
      return;
    }

    console.log('Connecting to MongoDB...');
    await mongoose.connect(MONGODB_URI);
    console.log('🔵 MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error;
  }
};

// init db connection
const initDbConnection = async () => {
  try {
    console.log('Attempting MongoDB connection...');
    await dbconnect();
    console.log('DB connection initialized from app startup');
  } catch (error) {
    console.error('DB initialization failed:', error.message);
  }
};

export default dbconnect;
export { initDbConnection };
