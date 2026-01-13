const AppError = require("../../utils/AppError");
const productModel = require("./products.model");

const addProduct = async (
  product_name,
  code_name,
  description,
  manufacturer,
  supplier_id,
  status,
  updated_by
) => {
  try {
    return await productModel.addProduct(
      product_name,
      code_name,
      description,
      manufacturer,
      supplier_id,
      status,
      updated_by
    );
  } catch (err) {
    if (err instanceof AppError) throw err;
    throw new AppError("Something went wrong");
  }
};

const updateProductDetails = async (
  product_id,
  product_name,
  code_name,
  description,
  manufacturer,
  supplier_id,
  status,
  user_id
) => {
  try {
    return await productModel.updateProductDetails(
      product_id,
      product_name,
      code_name,
      description,
      manufacturer,
      supplier_id,
      status,
      user_id
    );
  } catch (err) {
    if (err instanceof AppError) throw err;
    throw new AppError("Something went wrong");
  }
};

const getProductDetails = async (product_id) => {
  try {
    return await productModel.getProductDetails(product_id);
  } catch (err) {
    if (err instanceof AppError) throw err;
    throw new AppError("Something went wrong");
  }
};

const getProductList = async () => {
  try {
    return await productModel.getProductList();
  } catch (err) {
    if (err instanceof AppError) throw err;
    throw new AppError("Something went wrong");
  }
};

const getProductLookUp = async () => {
  try {
    const response = await productModel.getProductLookUp();
    return response;
  } catch (err) {
    console.log("lakhdasjdlkajsldkjasd", err);
    if (err instanceof AppError) throw err;
    throw new AppError("Something went wrong");
  }
};

module.exports = {
  addProduct,
  updateProductDetails,
  getProductDetails,
  getProductList,
  getProductLookUp,
};
