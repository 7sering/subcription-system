const express = require("express");
const router = express.Router();
const { prices } = require("../controllers/subController");

router.get("/prices", prices);

module.exports = router;
