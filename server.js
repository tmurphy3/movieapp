// import
const express = require("express");
const cors = require("cors");

//configure app
const app = express();

//middleware
app.use(express.json());
app.use(cors());

//enpoints
app.get("/", (req, res) => res.send("M E R N O L I T H"));

//listen
let port = process.env.PORT || 9000;

app.listen(port, console.log("server listening"));
