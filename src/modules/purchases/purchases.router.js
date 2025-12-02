const express = require("express");
const router = express.Router();

const purchaseController = require("./purchases.controller");
const validateToken = require("../../middlewares/validateToken");

router.post("/", validateToken, purchaseController.addPurchase);
router.post("/", validateToken, purchaseController.getPurchaseList);
router.get(
  "/:purchase_id",
  validateToken,
  purchaseController.getPurchaseDetails
);
router.put(
  "/:purchase_id",
  validateToken,
  purchaseController.updatePurchaseDetails
);

module.exports = router;
