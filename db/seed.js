let Director = require("../models/Director");
let Film = require("../models/Film");

let directorData = require("./directors.json");
let filmData = require("./films.json");

Director.deleteMany({})
  .then(() => Film.deleteMany({}))
  .then(() => Film.create(filmData))
  .then((films) => {
    films.map((film) => {
      directorData.map((director) => {
        if (film.director == director.name) {
          director.films.push(film._id);
        }
      });
    });
    Director.create(directorData).then((directors) => console.log(directors));
  });
