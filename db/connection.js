const mongoose = require("mongoose");
//console.log(require("dotenv").config({ path: "../.env" }));
//let url = process.env.DB_URL;
//console.log(process.env.DB_URL);

//let env = require("dotenv").config().parsed;
//let url = env.DB_URL;

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

module.exports = mongoose;
