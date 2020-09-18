const express = require("express");

const filmController = require("../controllers/filmController.js");

router = express();

router.get("/", filmController.all);
router.get("/:id", filmController.oneFilm);

module.exports = router;
