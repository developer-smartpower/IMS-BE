const express = require("express");
const router = express.Router();

const purchaseItemController = require("./purchaseItem.controller");
const validateToken = require("../../middlewares/validateToken");

router.post("/purchase_id", validateToken, purchaseItemController.addPurchaseItem);
router.put(
  "/:purchase_item_id",
  validateToken,
  purchaseItemController.updatePurchaseItemDetails
);
router.delete(
  "/:purchase_item_id",
  validateToken,
  purchaseItemController.deletePurchaseItem
);

module.exports = router;
