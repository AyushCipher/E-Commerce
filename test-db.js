import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve("config/config.env") });

console.log("DB_URI from env:", process.env.DB_URI); // Debug line

const testConnection = async () => {
  try {
    console.log("Trying to connect to MongoDB...");

    await mongoose.connect(process.env.DB_URI, {
      serverSelectionTimeoutMS: 5000
    });

    console.log("✅ MongoDB connection successful!");
    process.exit(0);
  } catch (error) {
    console.error("❌ MongoDB connection failed!");
    console.error(error);
    process.exit(1);
  }
};

testConnection();
