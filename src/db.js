import mongoose from "mongoose";
//import { MONGODB_URI } from "./config.js";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://jairosc:serafin123@cluster0.kpfjx.mongodb.net/datos?retryWrites=true&w=majority");
 console.log(">>>>>MongoDB is connected");
  } catch (error) {
    console.error(error);
  }
};