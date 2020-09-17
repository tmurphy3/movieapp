// import
const express = require("express");
//require("dotenv").config();
const cors = require("cors");
////const Directors = require("./models/director.js");

//configure app
const app = express();
port = process.env.PORT || 9000;

//middleware
app.use(express.json());
app.use(cors());

//enpoints
app.get("/", (req, res) => res.send("M E R N O L I T H"));
/*
app.get("/directors", (req, res) => {
  Directors.find((err, data) => {
    err ? res.status(500).send(err) : res.status(200).send(data);
  });
});
*/
//listen

app.listen(port, console.log("server listening"));
