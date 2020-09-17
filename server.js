// import
const express = require("express");
require("dotenv").config();
const cors = require("cors");

//configure app
const app = express();
port = process.env.PORT || 9000;

//middleware
app.use(express.json());
app.use(cors());

//enpoints
app.get("/", (req, res) => res.send("M E R N O L I T H"));
console.log(process.env);

//listen

app.listen(port, console.log("server listening"));
