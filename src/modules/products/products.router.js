const express = require("express");
const router = express.Router();

const productController = require("./products.controller");
const validateToken = require("../../middlewares/validateToken");

router.post("/", validateToken, productController.addProduct);

router.get("/lookup", validateToken, productController.getProductLookUp);
router.get("/:product_id", validateToken, productController.getProductDetails);
router.get("/", validateToken, productController.getProductList);
router.put(
  "/:product_id",
  validateToken,
  productController.updateProductDetails
);
router.patch(
  "/:product_id",
  validateToken,
  productController.updateProductStatus
);

module.exports = router;
