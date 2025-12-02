const express = require("express");
const router = express.Router();

const purchaseItemController = require("./purchaseItem.controller");
const validateToken = require("../../middlewares/validateToken");

router.post("/", validateToken, purchaseItemController.addPurchaseItem);
router.put(
  "/:purchaseItem_id",
  validateToken,
  purchaseItemController.updatePurchaseItemDetails
);
router.delete(
  "/:purchaseItem_id",
  validateToken,
  purchaseItemController.deletePurchaseItem
);

module.exports = router;
