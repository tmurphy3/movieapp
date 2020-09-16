let director = require("../models/director");
let film = require("../models/film");

let directorData = require("./directors.json");
let filmData = require("./films.json");

film
  .deleteMany({})
  .then(() => director.deleteMany({}))
  .then(() => director.create(directorData))
  .then((directors) => {
    let newFilmData = [];
    directors.map((director) => {
      filmData.map((film) => {
        if (film.director == director.name) {
          film.director = director._id;
          newFilmData.push(film);
        }
      });
      //console.log(director._id);
      //console.log(director.name);
    });
    film.create(newFilmData).then((res) => console.log(res));
  });
