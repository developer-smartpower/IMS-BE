const express = require("express");
const router = express.Router();

const stockController = require("./stock.controller");

router.post("/add", stockController.addStock);
router.get("/list", stockController.getStockList);
router.get("/details/:stock_id", stockController.viewStockDetails);
router.delete("/:stock_id", stockController.deleteStock);
router.put("/update/:stock_id", stockController.updateStock);

module.export = router;
