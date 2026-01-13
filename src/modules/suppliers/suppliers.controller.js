const responseHandler = require("../../utils/ResponseHandler");
const supplierService = require("./suppliers.service");

const addSupplier = async (req, res, next) => {
  const {
    company_name,
    partnership,
    address,
    spoc_name,
    email,
    mobile_number,
    landline,
    status,
  } = req.body;

  const user_id = req.user_id;

  try {
    await supplierService.addSupplier(
      company_name,
      partnership,
      address,
      spoc_name,
      email,
      mobile_number,
      landline,
      status,
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
  const { supplier_id } = req.params;

  const {
    company_name,
    partnership,
    address,
    spoc_name,
    email,
    mobile_number,
    landline,
    status,
  } = req.body;



  const { user_id } = req;

  try {
    await supplierService.updateSupplierDetails(
      supplier_id,
      company_name,
      partnership,
      address,
      spoc_name,
      email,
      mobile_number,
      landline,
      status,
      user_id
    );

    responseHandler(res, {}, "Success", 200);
  } catch (err) {
    next(err);
  }
};

const getSupplierLookUp = async (req, res, next) => {
  try {
    const response = await supplierService.getSupplierLookUp();
    responseHandler(res, response, "Success", 200);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  addSupplier,
  getSupplierList,
  getSupplierDetails,
  updateSupplierDetails,
  getSupplierLookUp,
};
