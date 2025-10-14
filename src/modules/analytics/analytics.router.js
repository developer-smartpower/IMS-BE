const express = require("express");
const router = express.Router();
const analyticsController = require("./analytics.controller");

router.post("/summary", analyticsController.getAnalyticsSummary);

module.exports = router;
