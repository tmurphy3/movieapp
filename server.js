// import
const express = require("express");
require("dotenv").config();
//configure app
const app = express();

//middleware
app.use(express.json());

//endpoints

app.get("/", (req, res) => res.send("welcome to the M E R N O L I T H"));

//listen
let port = process.env.PORT || 9000;

app.listen(port, console.log("server listening"));
