const mongoose = require("mongoose");

<<<<<<< HEAD
let url =
  "mongodb+srv://admin:WuhRCtKqxjGpy6ft@cluster0.6hbqc.mongodb.net/movies?retryWrites=true&w=majority";
=======
require("dotenv").config();

let url = process.env.DB_URL;
>>>>>>> 87f11c88caecffbd66ece374914fbe962eb70398

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

module.exports = mongoose;
