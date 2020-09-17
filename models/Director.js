//two entirely seperate schemas... when u click on a director it
//will query the movies by that director id...
//you will create new movies and have the id be the director u want
//you can create a new director and then make new movie with the id
//clicking a director routes to /movies/<directorIdQuery>

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
  bio: String,
});

module.exports = mongoose.model("directors", directorSchema);
