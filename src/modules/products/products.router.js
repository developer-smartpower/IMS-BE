const express = require("express");
const router = express.Router();

const productController = require("./products.controller");

router.post("/add", productController.addProduct);
router.put("/update/:product_id", productController.updateProductDetails);
router.get("/details/:product_id", productController.getProductDetails);
router.get("/delete/:product_id", productController.deleteProduct);
router.get("/list", productController.getProductList);

module.exports = router;
