const mongoose = require("mongoose");
require("dotenv").config({ path: "../.env" });

let url = process.env.DB_URL;

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

module.exports = mongoose;
