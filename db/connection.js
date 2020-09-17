const mongoose = require("mongoose");
let env = require("dotenv").config({ path: "../.env" }).parsed;

console.log(env.DB_URL);

let url = env.DB_URL;

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

module.exports = mongoose;
