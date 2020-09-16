const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/movies", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

module.exports = mongoose;
