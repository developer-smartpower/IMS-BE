const express = require("express");
const router = express.Router();
const analyticsController = require("./analytics.controller");
const validateToken = require("../../middlewares/validateToken");

router.post("/summary", validateToken, analyticsController.getAnalyticsSummary);

module.exports = router;
