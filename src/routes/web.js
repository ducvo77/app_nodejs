const express = require("express");
const router = express.Router();
const { getHomePage } = require("../controllers/homeController");

// define the home page route
router.get("/", getHomePage);

module.exports = router;
