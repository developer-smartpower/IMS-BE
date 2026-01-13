const responseHandler = require("../../utils/ResponseHandler");
const productService = require("./products.service");

const addProduct = async (req, res, next) => {
  const {
    product_name,
    code_name,
    description,
    manufacturer,
    supplier_id,
    status,
  } = req.body;

  const user_id = req.user_id;

  try {
    await productService.addProduct(
      product_name,
      code_name,
      description,
      manufacturer,
      supplier_id,
      status,
      user_id
    );

    responseHandler(res, {}, "Success", 200);
  } catch (err) {
    next(err);
  }
};

const updateProductDetails = async (req, res, next) => {
  const { product_id } = req.params;
  const {
    product_name,
    code_name,
    description,
    manufacturer,
    supplier_id,
    status,
  } = req.body;
  const { user_id } = req;
  try {
    await productService.updateProductDetails(
      product_id,
      product_name,
      code_name,
      description,
      manufacturer,
      supplier_id,
      status,
      user_id
    );
    responseHandler(res, {}, "success", 200);
  } catch (err) {
    next(err);
  }
};

const getProductDetails = async (req, res, next) => {
  const { product_id } = req.params;

  try {
    const response = await productService.getProductDetails(product_id);
    responseHandler(res, response, "Success", 200);
  } catch (err) {
    next(err);
  }
};

const getProductList = async (req, res, next) => {
  try {
    const response = await productService.getProductList();
    responseHandler(res, response, "Success", 200);
  } catch (err) {
    next(err);
  }
};

const getProductLookUp = async (req, res, next) => {
  try {
    const response = await productService.getProductLookUp();
    responseHandler(res, response, "Success", 200);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  addProduct,
  updateProductDetails,
  getProductDetails,
  getProductList,
  getProductLookUp,
};
