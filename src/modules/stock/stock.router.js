const express = require("express");
const router = express.Router();

const validateToken = require("../../middlewares/validateToken");
const stockController = require("./stock.controller");

router.post("/", validateToken, stockController.addStock);
router.get("/", validateToken, stockController.getStockList);
router.get("/:stock_id", validateToken, stockController.getStockDetails);
router.put("/:stock_id", validateToken, stockController.updateStock);
router.delete("/:stock_id", validateToken, stockController.deleteStock);

module.exports = router;
