const router = require("express").Router();
const cities = require("../controllers/cities.controller.js");

router.get("/cities", cities.findAll);

module.exports = router;