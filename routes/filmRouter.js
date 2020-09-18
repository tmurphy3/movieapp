const express = require("express");

const filmController = require("../controllers/filmController.js");

router = express();

router.get("/", filmController.all);
router.get("/:id", filmController.oneFilm);
router.post("/", directorController.createFilm);
router.delete("/:id", directorController.deleteFilm);

module.exports = router;
