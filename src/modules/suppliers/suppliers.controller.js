const responseHandler = require("../../utils/ResponseHandler");
const supplierService = require("./suppliers.service");

const addSupplier = async (req, res, next) => {
  const {
    email,
    address,
    partnership,
    spoc_name,
    company_name,
    mobile_number,
    landline,
  } = req.body;
  const user_id = req.user_id;

  try {
    await supplierService.addSupplier(
      email,
      address,
      partnership,
      spoc_name,
      company_name,
      mobile_number,
      landline,
      user_id
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
