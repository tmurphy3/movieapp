let Directors = require("../models/Director");

module.exports = {
  all: (req, res) => {
    Directors.find({}).then((all) => res.json(all));
  },
  directorMovies: (req, res) => {
    Directors.findOne({ _id: req.params.id })
      .populate("Film")
      .then((films) => res.json(films));
  },
};
