const mongoose = require("../db/connection.js");
const { Schema } = require("../db/connection.js");
const director = require("./director");

const filmSchema = new mongoose.Schema({
  title: String,
  description: String,
  releaseDate: Number,
  director: String,
  cinematographer: String,
  still: String,
  poster: String,
  directorID: {
    type: [{ type: Schema.Types.ObjectID, ref: director }],
    required: true,
    default: undefined,
  },
});

module.exports = mongoose.model("films", filmSchema);
