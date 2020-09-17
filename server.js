// import
const express = require("express");
//const filmRouter = require("./routes/filmRouter.js");
const directorRouter = require("./routes/directorRouter.js");

const cors = require("cors");
////const Directors = require("./models/director.js");

//configure app
const app = express();

//middleware
app.use(express.json());
app.use(cors());
//app.use("/films", filmRouter);
app.use("/directors", directorRouter);

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
port = process.env.PORT || 9000;

app.listen(port, console.log("server listening"));
