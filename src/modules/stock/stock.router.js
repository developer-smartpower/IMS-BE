const express = require("express");
const router = express.Router();

const stockController = require("./stock.controller");
const validateToken = require("../../middlewares/validateToken");

router.post("/", validateToken, stockController.addStock);
router.get("/", validateToken, stockController.getStockList);
router.get("/:stock_id", validateToken, stockController.viewStockDetails);
router.put("/:stock_id", validateToken, stockController.updateStock);

module.exports = router;
