const AppError = require("../../utils/AppError");
const productModel = require("./products.model");

const addProduct = async (name, description, manufacturer, unit_price) => {
  try {
    const response = await productModel.addProduct(
      name,
      description,
      manufacturer,
      unit_price
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
