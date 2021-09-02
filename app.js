import express from "express";
const app = express();
import morgan from "morgan";

const port = 8000;

//conect to the mongo db

import mongoClient from "./src/config/db.js";
mongoClient();

//midleware
app.use(express.urlencoded());
app.use(express.json());
app.use(morgan("tiny"));

//load modules

import routers from "./src/router.js";

//url endpoint //"use this url endoint for api acess only"
app.use("/api/v1", routers);
//create a router
app.use("/", (req, res) => {
  res.send("You have reched  the API of to do trask list applicatio");
});

app.listen(port, (error) => {
  if (error) {
    return console.log(error);
  }
  console.log(`Server is running at  http://localhost:${port}`);
});
