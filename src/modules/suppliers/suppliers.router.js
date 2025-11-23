const express = require("express");
const router = express.Router();

const supplierController = require("./suppliers.controller");
const validateToken = require("../../middlewares/validateToken");

router.post("/", validateToken, supplierController.addSupplier);
router.get("/", validateToken, supplierController.getSupplierList);
router.get(
  "/:supplier_id",
  validateToken,
  supplierController.getSupplierDetails
);
router.put(
  "/:supplier_id",
  validateToken,
  supplierController.updateSupplierDetails
);

module.exports = router;
