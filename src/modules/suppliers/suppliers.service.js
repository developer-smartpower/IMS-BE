const AppError = require("../../utils/AppError");
const supplierModel = require("./suppliers.model");

const addSupplier = async (
  name,
  mobile_number,
  email,
  address,
  partnership
) => {
  try {
    const response = await supplierModel.addSupplier(
      name,
      mobile_number,
      email,
      address,
      partnership
    );
    return response;
  } catch (err) {
    console.log('alskdjklsajd', err)
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

const updateSupplierDetails = async () => {
  try {
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
};
