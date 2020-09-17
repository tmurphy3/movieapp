let Films = require("../models/Film");

module.exports = {
  all: (req, res) => {
    Films.find({}).then((all) => res.json(all));
  },
};
