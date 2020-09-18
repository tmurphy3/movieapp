const mongoose = require("../db/connection.js");
const Film = require("./Film");
const { Schema } = require("../db/connection.js");

const directorSchema = new mongoose.Schema({
  name: String,
  image: String,
  films: {
    type: [{ type: Schema.Types.ObjectID, ref: Film }],
    required: true,
    default: null,
  },
  bio: String,
});

module.exports = mongoose.model("directors", directorSchema);
