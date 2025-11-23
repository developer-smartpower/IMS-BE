const responseHandler = require("../../utils/ResponseHandler");
const supplierService = require("./suppliers.service");

const addSupplier = async (req, res, next) => {
  const { name, mobile_number, email, address, partnership } = req.body;

  try {
    await supplierService.addSupplier(
      name,
      mobile_number,
      email,
      address,
      partnership
    );
    responseHandler(res, {}, "Success", 200);
  } catch (err) {
    next(err);
  }
};

const getSupplierList = async (req, res, next) => {
  try {
    const response = await supplierService.getSupplierList();
    responseHandler(res, response, "Success", 200);
  } catch (err) {
    next(err);
  }
};

const getSupplierDetails = async (req, res, next) => {
  const { supplier_id } = req.params;
  try {
    const response = await supplierService.getSupplierDetails(supplier_id);
    responseHandler(res, response, "Success", 200);
  } catch (err) {
    next(err);
  }
};

const updateSupplierDetails = async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
};

module.exports = {
  addSupplier,
  getSupplierList,
  getSupplierDetails,
  updateSupplierDetails,
};
