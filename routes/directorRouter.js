const express = require("express");

const directorController = require("../controllers/directorController.js");

router = express();

router.get("/", directorController.all);
//router.get("/:id", directorController.directorMovies);
router.get("/:id", directorController.directorFilms);
router.post("/:id", directorController.create);
router.delete("/:id", directorController.delete);

module.exports = router;
