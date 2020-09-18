let Films = require("../models/Film");

module.exports = {
  all: (req, res) => {
    Films.find({}).then((all) => res.json(all));
  },
  oneFilm: (req, res) => {
    Films.findOne({ _id: req.params.id }).then((film) => res.json(film));
  },
  createFilm: (req, res) => {
    Films.create(req.body).then((film) => res.json(film));
  },
  deleteFilm: (req, res) => {
    Films.findOneAndDelete({ _id: req.params.id }).then((deleted) =>
      res.json(deleted)
    );
  },
  updateFilm: (req, res) => {
    Films.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }
    ).then((updated) => res.json(updated));
  },
};
