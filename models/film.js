const mongoose = require("../db/connection.js");
const { Schema } = require("../db/connection.js");
const Director = require("./director");

const filmSchema = new mongoose.Schema({
  title: String,
  description: String,
  releaseDate: Number,
  cinematographer: String,
  still: String,
  poster: String,
  director: {
    type: [{ type: Schema.Types.ObjectID, ref: Director }],
    required: true,
    default: null,
  },
});

module.exports = mongoose.model("films", filmSchema);
