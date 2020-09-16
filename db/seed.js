let director = require("../models/director");
let film = require("../models/film");

let directorData = require("./directors.json");
let filmData = require("./films.json");

film
  .deleteMany({})
  .then(film.create(filmData))
  .then((filled) => console.log(filled));

director
  .deleteMany({})
  .then(director.create(directorData))
  .then((filled) => console.log(filled));
