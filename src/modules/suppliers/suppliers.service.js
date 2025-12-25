const AppError = require("../../utils/AppError");
const supplierModel = require("./suppliers.model");

const addSupplier = async (
  email,
  address,
  partnership,
  spoc_name,
  company_name,
  mobile_number,
  landline,
  updated_by
) => {
  try {
    const response = await supplierModel.addSupplier(
      email,
      address,
      partnership,
      spoc_name,
      company_name,
      mobile_number,
      landline,
      updated_by
    );
    return response;
  } catch (err) {
    if (err instanceof AppError) {
      throw err;
    }
    throw new AppError("Something went wrong");
  }
};

const getSupplierList = async () => {
  try {
    const response = await supplierModel.getSupplierList();
    return response;
  } catch (err) {
    if (err instanceof AppError) {
      throw err;
    }
    throw new AppError("Something went wrong");
  }
};

const getSupplierDetails = async (supplier_id) => {
  try {
    const response = await supplierModel.getSupplierDetails(supplier_id);
    return response;
  } catch (err) {
    if (err instanceof AppError) {
      throw err;
    }
    throw new AppError("Something went wrong");
  }
};

const updateSupplierDetails = async (
  supplier_id,
  email,
  address,
  partnership,
  spoc_name,
  company_name,
  mobile_number,
  landline,
  updated_by
) => {
  try {
    const response = await supplierModel.updateSupplierDetails(
      supplier_id,
      email,
      address,
      partnership,
      spoc_name,
      company_name,
      mobile_number,
      landline,
      updated_by
    );
    return response;
  } catch (err) {
    if (err instanceof AppError) {
      throw err;
    }
    throw new AppError("Something went wrong");
  }
};

const deActivateSupplier = async (supplier_id, user_id) => {
  try {
    const status = "deActivate";

    const response = await supplierModel.deActivateSupplier(
      supplier_id,
      status,
      user_id
    );
    return response;
  } catch (err) {
    if (err instanceof AppError) {
      throw err;
    }
    throw new AppError("Something went wrong");
  }
};

const getSupplierLookUp = async () => {
  try {
    const response = await supplierModel.getSupplierLookUp();
    return response;
  } catch (err) {
    if (err instanceof AppError) {
      throw err;
    }
    throw new AppError("Something went wrong");
  }
};

module.exports = {
  addSupplier,
  getSupplierList,
  getSupplierDetails,
  updateSupplierDetails,
  deActivateSupplier,
  getSupplierLookUp,
};
