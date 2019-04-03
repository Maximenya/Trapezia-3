import express from "express";
import bodyParser from "body-parser";
import * as path from "path";
import mongoose from "mongoose";
import {ApolloServer} from "apollo-server-express";
import {makeExecutableSchema} from "graphql-tools";
import * as fs from "fs";

import router from "./routes/index.route";
import resolvers from "./resolvers/resolvers";

// Create Express server
const app = express();

const typeDefs = fs.readFileSync("./schema/schema.graphql", {encoding: "utf-8"});

const schema = makeExecutableSchema({typeDefs, resolvers});

const server = new ApolloServer({schema});
server.applyMiddleware({app});

// Connect to MongoDB
const mongoUrl = "mongodb://localhost:27017/usersdb";
mongoose.Promise = global.Promise;
mongoose.connect(mongoUrl, {useNewUrlParser: true}).catch(err => {
  console.log("MongoDB connection error. Please make sure MongoDB is running. " + err);
  // process.exit();
});

// Express configuration
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "../views"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

/**
 * Primary app routes.
 */
app.use("/", router);


export default app;
