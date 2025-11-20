import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config({path: "./config.env"})


const connectDB = async ()=>{
    try{
     const DB = process.env.MONGO_URL
     .replace('<db_password>', process.env.PASSWORD)
       await mongoose.connect(DB, {})
         console.log("mongoDB connnected")
    }
    catch(err){
         console.log("erro connecting to database")
         process.exit(1)
    }
}

export default connectDB