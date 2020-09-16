const mongoose = require("../db/connection.js");

const filmSchema = new mongoose.Schema({
  title: String,
  directorId: Number,
});

module.exports = mongoose.model("films", filmSchema);
