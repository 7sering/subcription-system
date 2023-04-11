const express = require("express");
const router = express.Router();
const { prices, createSubscription} = require("../controllers/subController");
const {requireSignin} = require("../middlewares/index")

router.get("/prices", prices);
router.post("/create-subscription", requireSignin, createSubscription);

module.exports = router;
