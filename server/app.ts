import express from "express";
import bodyParser from "body-parser";
import * as path from "path";
import router from "./routes/index.route";
import mongoose from "mongoose";

// Create Express server
const app = express();

// Connect to MongoDB
const mongoUrl = "mongodb://localhost:27017/usersdb";
mongoose.Promise = global.Promise;
mongoose.connect(mongoUrl, { useNewUrlParser: true }).then(() => { /** ready to use. The `mongoose.connect()` promise resolves to undefined. */ },
).catch(err => {
  console.log("MongoDB connection error. Please make sure MongoDB is running. " + err);
  // process.exit();
});

// Express configuration
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "../views"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/**
 * Primary app routes.
 */
app.use("/", router);


export default app;
