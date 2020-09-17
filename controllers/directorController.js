let Directors = require("../models/director.js");

module.exports = {
  all: (req, res) => {
    Directors.find({}).then((all) => res.json(all));
  },
};
