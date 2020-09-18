let Directors = require("../models/Director");
let Films = require("../models/Film");

module.exports = {
  allDirectors: (req, res) => {
    Directors.find({}).then((all) => res.json(all));
  },
  allFilms: (req, res) => {
    Films.find({}).then((all) => res.json(all));
  },
  directorMovies: (req, res) => {
    Directors.findOne({ _id: req.params.id })
      .populate("Films")
      .then((director) => res.json(director));
  },
  directorFilms: (req, res) => {
    Directors.findOne({ _id: req.params.id }).then((director) =>
      res.json(director)
    );
  },
};
