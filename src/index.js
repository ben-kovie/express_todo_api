import dotenv from "dotenv"
import app from "./app.js"
import connectDB from "./connectDB.js"
dotenv.config({path: "./src/config.env"})


const port = process.env.PORT || 3000

//create server
 const startServer = async ()=>{
      await connectDB()
        app.listen(port, ()=>{
           console.log(`app running on port ${port}`)
        })
 }

 startServer()