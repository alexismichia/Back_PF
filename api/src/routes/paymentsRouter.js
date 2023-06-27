const express = require("express");
const { createSubscription } = require("../controllers/payments/getSuscription");
const subscriptionRouter = express.Router();

subscriptionRouter.post("/", createSubscription);

module.exports = subscriptionRouter;
