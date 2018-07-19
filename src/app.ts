import express from "express";
import bodyParser from "body-parser";
import * as path from "path";
import mongoose from "mongoose";


// Controllers (route handlers)
import ClientController from "./controllers/client";
const clientController = new ClientController();

// Create Express server
const app = express();

// Connect to MongoDB
const mongoUrl = "mongodb://localhost:27017/usersdb";
mongoose.Promise = global.Promise;
mongoose.connect(mongoUrl, {useMongoClient: true}).then(() => { /** ready to use. The `mongoose.connect()` promise resolves to undefined. */},
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
app.get("/deleteAllClients", clientController.deleteAllClients);
app.get("/clients", clientController.getAllClients);
app.get("/loadClimbingNow", clientController.loadClimbingNow);
app.get("/client/:clientId", clientController.getClientWithID);
app.post("/addClient", clientController.addNewClient);
app.post("/updateClient", clientController.updateClient);
app.post("/deleteClient", clientController.deleteClient);


export default app;