const express = require("express");
require("dotenv").config();
const connectDB = require("./config/ConnectBD");
const app = express();
const path = require("path");
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

if(process.env.NODE_ENV==='production'){
  app.use(express.static('client/build'));
  app.get('*',(req,res)=>{

    res.sendFile(path.resolve(__dirname,'client','build','index.html'))
  })
}

//connect to server
const PORT = process.env.PORT;
app.listen(PORT, (error) =>
  error ? console.log(error) : console.log("server is connected")
);
