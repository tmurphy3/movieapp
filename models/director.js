const mongoose = require("../db/connection.js");
const Film = require("./film");
const { Schema } = require("../db/connection.js");

const directorSchema = new mongoose.Schema({
  name: String,
  image: String,
  films: {
    type: [{ type: Schema.Types.ObjectID, ref: Film }],
    required: true,
    default: null,
  },
});

module.exports = mongoose.model("directors", directorSchema);
