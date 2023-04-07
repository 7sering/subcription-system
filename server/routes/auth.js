const express = require('express');
const router = express.Router();
const {register} = require("../controllers/authController")


router.get("/register", register)

module.exports = router