import express from "express";
import taskRouter from "./routes/taskRoute.js";
import userRoute from "./routes/userRoute.js";
import logger from "./middlewares/logger.js";
import notFound from "./middlewares/notfound.js";
import generalErrorHandler from "./middlewares/generalRouteHandler.js";



const app = express();

app.use(express.json());

// custom logger
app.use(logger);

// routes
app.use("/api/v1/tasks", taskRouter);
app.use("/api/v1/auth", userRoute);

// not found middleware
app.use(notFound);

// global error handler
app.use(generalErrorHandler);

export default app;
