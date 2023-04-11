const express = require("express");
const router = express.Router();
const { prices, createSubscription, subscriptionStatus} = require("../controllers/subController");
const {requireSignin} = require("../middlewares/index")

router.get("/prices", prices);
router.post("/create-subscription", requireSignin, createSubscription);
router.get("/subscription-status", requireSignin, subscriptionStatus);

module.exports = router;
