const express = require("express");
require("dotenv").config();
const connectDB = require("./config/ConnectBD");
const app = express();

//connect to database
connectDB();
//midelwaire global
app.use(express.json());
//midellware rout
//app.use("/api/user", require("./Router/user"));
app.use("/api/patient", require("./Router/Patient"));
app.use("/api/docteur", require("./Router/Docteur"));
app.use("/api/rendezvous", require("./Router/Rendevous"));
app.use("/api/admin", require("./Router/Admin"));

//connect to server
const PORT = process.env.PORT;
app.listen(PORT, (error) =>
  error ? console.log(error) : console.log("server is connected")
);
