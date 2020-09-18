// import
const express = require("express");
const filmRouter = require("./routes/filmRouter.js");
const directorRouter = require("./routes/directorRouter.js");
const cors = require("cors");

//configure app
const app = express();

//middleware
app.use(express.json());
app.use(cors());
app.use("/", filmRouter);
app.use("/", directorRouter);

//enpoints
app.get("/", (req, res) => res.send("M E R N O L I T H"));

//listen
port = process.env.PORT || 9000;

app.listen(port, console.log("server listening"));
