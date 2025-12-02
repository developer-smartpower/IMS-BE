const AppError = require("../../utils/AppError");
const productModel = require("./products.model");

const addProduct = async (
  description,
  name,
  manufacturer,
  supplier_id,
  code_name,
  updated_by
) => {
  try {
    const response = await productModel.addProduct(
      description,
      name,
      manufacturer,
      supplier_id,
      code_name,
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

const updateProductDetails = async () => {
  try {
  } catch (err) {
    if (err instanceof AppError) {
      throw err;
    }
    throw new AppError("Something went wrong");
  }
};
const getProductDetails = async (product_id) => {
  try {
    const response = await productModel.getProductDetails(product_id);
    return response;
  } catch (err) {
    if (err instanceof AppError) {
      throw err;
    }
    throw new AppError("Something went wrong");
  }
};
const deleteProduct = async (product_id) => {
  try {
    const response = await productModel.deleteProduct(product_id);
    return response;
  } catch (err) {
    if (err instanceof AppError) {
      throw err;
    }
    throw new AppError("Something went wrong");
  }
};
const getProductList = async () => {
  try {
    const response = await productModel.getProductList();
    return response;
  } catch (err) {
    if (err instanceof AppError) {
      throw err;
    }
    throw new AppError("Something went wrong");
  }
};

module.exports = {
  addProduct,
  updateProductDetails,
  getProductDetails,
  deleteProduct,
  getProductList,
};
