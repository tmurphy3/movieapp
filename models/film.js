const mongoose = require("../db/connection.js");

const filmSchema = new mongoose.Schema({
  title: String,
  description: String,
  releaseDate: Number,
  director: String,
  cinematographer: String,
  still: String,
  poster: String,
  directorID: String,
});

module.exports = mongoose.model("films", filmSchema);
