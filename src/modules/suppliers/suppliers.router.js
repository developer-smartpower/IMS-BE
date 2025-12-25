const express = require("express");
const router = express.Router();

const supplierController = require("./suppliers.controller");
const validateToken = require("../../middlewares/validateToken");

router.post("/", validateToken, supplierController.addSupplier);
router.get("/", validateToken, supplierController.getSupplierList);

router.get("/lookup", validateToken, supplierController.getSupplierLookUp);
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
router.patch(
  "/:supplier_id",
  validateToken,
  supplierController.deActivateSupplier
);

module.exports = router;
