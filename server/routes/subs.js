const express = require("express");
const router = express.Router();
const { prices, createSubscription, subscriptionStatus, subscriptions, customerPortal} = require("../controllers/subController");
const {requireSignin} = require("../middlewares/index")

router.get("/prices", prices);
router.post("/create-subscription", requireSignin, createSubscription);
router.get("/subscription-status", requireSignin, subscriptionStatus);    
router.get("/subscriptions", requireSignin, subscriptions);    
router.get("/customer-portal", requireSignin, customerPortal);    

module.exports = router;
