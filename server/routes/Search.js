const express = require("express");

const router = express.Router();

const controller = require("../controllers/SearchController");

router.post("/", controller.post);

module.exports = router;
