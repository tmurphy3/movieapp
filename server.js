// import
const express = require("express");

//configure app
const app = express();

//middleware
app.use(express.json());

//listen
let port = process.env.PORT || 9000;

app.listen(port, console.log("server listening"));
