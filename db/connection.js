const mongoose = require("mongoose");

let url =
  "mongodb+srv://admin:WuhRCtKqxjGpy6ft@cluster0.6hbqc.mongodb.net/movies?retryWrites=true&w=majority";

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

module.exports = mongoose;
