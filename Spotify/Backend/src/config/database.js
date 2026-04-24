import mongoose from "mongoose";
import { config } from "./config.js";

export const connectDB = async () => {

  try {
    await mongoose.connect(config.MONGO_URI);
    console.log("Connected to db");
  } 
  
  catch (error) {
    console.log("Database connection error: ", error);
  }
};
export default connectDB