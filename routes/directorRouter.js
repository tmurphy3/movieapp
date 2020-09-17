const express = require("express");

const directorController = require("../controllers/directorController.js");

router = express();

router.get("/", directorController.all);

module.exports = router;
