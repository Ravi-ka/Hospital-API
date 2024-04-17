import mongoose from "mongoose";
import { logger } from "../utils/logger.js";

export const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Connected to MongoDB");
  } catch (error) {
    logger.error("Connected to MongoDB", error);
    console.log("Error while connecting to MongoDB : " + error);
  }
};

// Mongoose DB connection
