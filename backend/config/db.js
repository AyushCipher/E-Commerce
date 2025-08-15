import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";

// Load environment variables from config/config.env
dotenv.config({ path: path.resolve("config/config.env") });

export const connectMongoDatabase = async () => {
    try {
        if (!process.env.DB_URI) {
            throw new Error("DB_URI is not defined in config.env");
        }

        const data = await mongoose.connect(process.env.DB_URI);
        console.log(`✅ MongoDB connected with server: ${data.connection.host}`);
    } catch (error) {
        console.error("❌ Error connecting to MongoDB:", error.message);
        process.exit(1);
    }
};
