const AppError = require("../../utils/AppError");
const supplierModel = require("./suppliers.model");

const addSupplier = async (
  company_name,
  partnership,
  address,
  spoc_name,
  email,
  mobile_number,
  landline,
  status,
  updated_by
) => {
  try {
    return await supplierModel.addSupplier(
      company_name,
      partnership,
      address,
      spoc_name,
      email,
      mobile_number,
      landline,
      status,
      updated_by
    );
  } catch (err) {
    console.log("aslkjksjdlaksjdlkas", err);
    if (err instanceof AppError) throw err;
    throw new AppError("Something went wrong");
  }
};

const getSupplierList = async () => {
  try {
    return await supplierModel.getSupplierList();
  } catch (err) {
    if (err instanceof AppError) throw err;
    throw new AppError("Something went wrong");
  }
};

const getSupplierDetails = async (supplier_id) => {
  try {
    return await supplierModel.getSupplierDetails(supplier_id);
  } catch (err) {
    if (err instanceof AppError) throw err;
    throw new AppError("Something went wrong");
  }
};

const updateSupplierDetails = async (
  supplier_id,
  company_name,
  partnership,
  address,
  spoc_name,
  email,
  mobile_number,
  landline,
  status,
  updated_by
) => {
  try {
    return await supplierModel.updateSupplierDetails(
      supplier_id,
      company_name,
      partnership,
      address,
      spoc_name,
      email,
      mobile_number,
      landline,
      status,
      updated_by
    );
  } catch (err) {
    if (err instanceof AppError) throw err;
    throw new AppError("Something went wrong");
  }
};

const getSupplierLookUp = async () => {
  try {
    return await supplierModel.getSupplierLookUp();
  } catch (err) {
    if (err instanceof AppError) throw err;
    throw new AppError("Something went wrong");
  }
};

module.exports = {
  addSupplier,
  getSupplierList,
  getSupplierDetails,
  updateSupplierDetails,
  getSupplierLookUp,
};
