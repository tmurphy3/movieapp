const express = require("express");

const directorController = require("../controllers/directorController.js");

router = express();

router.get("/", directorController.all);
router.get("/:id", directorController.directorMovies);

module.exports = router;
