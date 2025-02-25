import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 10000, // Increase timeout
    });
    console.log(' MongoDB Connected');
  } catch (error) {
    process.exit(1); // Exit process on failure
  }
};

export default connectDB;