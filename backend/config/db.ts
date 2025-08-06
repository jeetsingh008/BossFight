import mongoose, { mongo } from "mongoose";

const connectDB = async () => {
  try {
    const conn = mongoose.connect(process.env.MONGO_URI as string);
    console.log(`Mongoose connected: ${mongoose.connection.host}`);
  } catch (error) {
    console.log("MongoDB Connection failed ", error);
    throw error;
  }
};

export default connectDB;
