let Directors = require("../models/Director");
let Films = require("../models/Film");

module.exports = {
  all: (req, res) => {
    Directors.find({}).then((all) => res.json(all));
  },
  directorMovies: (req, res) => {
    Directors.findOne({ id: req.params.id }).populate("film"),
      (err, doc) => {
        if (err) handleError(res, err.message, "failed to get director");
        res.status(200).json(doc);
        console.log(req.params);
      };
  },
};
