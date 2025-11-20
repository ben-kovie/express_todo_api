import express from "express"
import taskRoute from "./routes/taskRoute.js"
import connectDB from "./connectDB.js"
import generalRouteHandler from "./middlewares/generalRouteHandler.js"


const app = express()

// express middleWare
app.use(express.json())

//connect the data base 
connectDB()

//express routes
app.use('/api/v1/tasks', taskRoute)

//general error handler middleWare
app.use(generalRouteHandler)

export default app

//create server
// const port = process.env.PORT || 3000
// app.listen(port, ()=>{
//  console.log(`app running on port: ${port}`)
// })


