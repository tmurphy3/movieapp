let Directors = require("../models/Director");

module.exports = {
  all: (req, res) => {
    Directors.find({}).then((all) => res.json(all));
  },
  directorMovies: (req, res) => {
    Directors.findOne({ _id: req.params.id }).populate("Film"),
      (err, doc) => {
        if (err) handleError(res, err.message, "failed to get director");
        res.status(200).json(doc);
        console.log(req.params);
      };
  },
};
