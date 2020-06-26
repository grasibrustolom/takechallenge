const express = require("express");
const router = express.Router();
const getReposController = require("../controllers/repositories");

router.get("/", getReposController);

module.exports = router;
