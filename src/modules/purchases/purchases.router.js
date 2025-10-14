const express = require("express");
const router = express.Router();

const purchaseController = require("./purchases.controller");

router.post("/add", purchaseController.addPurchase);
router.get("/details/:purchase_id", purchaseController.getPurchaseDetails);
router.post("/update/:purchase_id", purchaseController.updatePurchaseDetails);
router.post("/list", purchaseController.getPurchaseList);
router.post("/delete/:purchase_id", purchaseController.deletePurchaseItem);

module.exports = router;
