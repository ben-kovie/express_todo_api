import app from "./app.js"
import dotenv from "dotenv"
dotenv.config({path: "./config.env"})

//create server
const port = process.env.PORT || 3000
app.listen(port, ()=>{
 console.log(`app running on port: ${port}`)
})
