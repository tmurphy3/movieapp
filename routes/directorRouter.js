const express = require("express");

const directorController = require("../controllers/directorController.js");

router = express();

router.get("/films", directorController.allFilms);
router.get("/directors", directorController.allDirectors);
//router.get("/:id", directorController.directorMovies);
router.get("/directors/:id", directorController.directorFilms);

module.exports = router;
