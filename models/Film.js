const mongoose = require("../db/connection.js");

const filmSchema = new mongoose.Schema({
  title: String,
  description: String,
  releaseDate: Number,
  cinematographer: String,
  still: String,
  poster: String,
  director: String,
  genres: [String],
});

module.exports = mongoose.model("films", filmSchema);
