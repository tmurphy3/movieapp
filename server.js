// import
const express = require("express");
const cors = require("cors");

//configure app
const app = express();
port = process.env.PORT || 9000;

//middleware
app.use(express.json());
app.use(cors());

//enpoints
app.get("/", (req, res) => res.send("M E R N O L I T H"));

//endpoints

app.get("/", (req, res) => res.send("welcome to the M E R N O L I T H"));

//listen

app.listen(port, console.log("server listening"));
