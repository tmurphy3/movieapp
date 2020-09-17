const mongoose = require("mongoose");
//require("dotenv").config({ path: "../.env" });
require("dotenv").config();

let url = process.env.DB_URL;

console.log(url);

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

module.exports = mongoose;
