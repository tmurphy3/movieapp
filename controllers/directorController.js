let directors = require("../models/director.js");

module.exports = {
  all: (req, res) => {
    directors.find({}).then((all) => res.json(all));
  },
};
