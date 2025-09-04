// import mongoose from "mongoose";
// import { DB_NAME } from "../constants.js";


// const connectDB = async()=>{
//  try{
//     const connectionInstance = await mongoose.connect
//     (`${process.env.MONGODB_URL}/${DB_NAME}`)
//     console.log(`\n MongoDB connected !!DB HOST: $
//      {connectionInstance.connection.host}`);
//  } catch(error){
//    console.log("MONGODB connection error",error);
//    process.exit(1)
//  } 
// }
// export default connectDB
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const uri = process.env.MONGODB_URL;
    if (!uri) throw new Error("MONGODB_URL not found in .env");

    await mongoose.connect(uri); // mongoose v6+ me extra options ki need nahi hai
    console.log(" MongoDB connected successfully");
  } catch (error) {
    console.error(" MongoDB connection error:", error.message);
    process.exit(1);
  }
};

export default connectDB;
