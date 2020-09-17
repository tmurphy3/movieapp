let Films = require("../models/film.js");

module.exports = {
  all: (req, res) => {
    Films.find({}).then((all) => res.json(all));
  },
};
