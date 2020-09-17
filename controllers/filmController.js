let films = require("../models/film.js");

module.exports = {
  all: (req, res) => {
    films.find({}).then((all) => res.json(all));
  },
};
