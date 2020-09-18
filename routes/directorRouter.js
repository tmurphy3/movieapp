const express = require("express");

const directorController = require("../controllers/directorController.js");

router = express();

router.get("/", directorController.all);
//router.get("/:id", directorController.directorMovies);
router.get("/:id", directorController.directorFilms);
router.post("/", directorController.createDirector);
router.delete("/:id", directorController.deleteDirector);
router.put("/:id", filmController.updateDirector);

module.exports = router;
