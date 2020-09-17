const express = require("express");

const filmController = require("../controllers/filmController.js");

router = express();

router.get("/", filmController.all);

module.exports = router;
