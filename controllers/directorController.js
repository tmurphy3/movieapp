let Directors = require("../models/Director");

module.exports = {
  all: (req, res) => {
    Directors.find({}).then((all) => res.json(all));
  },
  directorMovies: (req, res) => {
    Directors.findOne({ _id: req.params.id })
      .populate("Film")
      .then((director) => res.json(director));
  },
  directorFilms: (req, res) => {
    Directors.findOne({ _id: req.params.id }).then((director) =>
      res.json(director)
    );
  },
  create: (req, res) => {
    Directors.create(req.body).then((director) => res.json(director));
  },
};
