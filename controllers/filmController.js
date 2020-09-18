let Films = require("../models/Film");

module.exports = {
  all: (req, res) => {
    Films.find({}).then((all) => res.json(all));
  },
  oneFilm: (req, res) => {
    Films.findOne({ _id: req.params.id }).then((film) => res.json(film));
  },
};
