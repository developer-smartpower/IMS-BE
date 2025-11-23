const responseHandler = require("../../utils/ResponseHandler");
const productService = require("./products.service");

const addProduct = async (req, res, next) => {
  const { name, description, unit_price, manufacturer } = req.body;

  try {
    await productService.addProduct(
      name,
      description,
      unit_price,
      manufacturer
    );
    responseHandler(res, {}, "Success", 200);
  } catch (err) {
    console.log("aslkhjdksjadkl", err);

    next(err);
  }
};

const updateProductDetails = async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
};

const getProductDetails = async (req, res, next) => {
  const { product_id } = req.params;

  try {
    const response = await productService.getProductDetails(product_id);
    responseHandler(
      res,
      (data = response),
      (message = "Success"),
      (status = 200)
    );
  } catch (err) {
    next(err);
  }
};

const deleteProduct = async (req, res, next) => {
  const { product_id } = req.params;

  try {
    const response = await productService.deleteProduct(product_id);
    responseHandler(res, (data = null), (message = "Success"), (status = 200));
  } catch (err) {
    next(err);
  }
};

const getProductList = async (req, res, next) => {
  try {
    const response = await productService.getProductList();
    responseHandler(
      res,
      (data = response),
      (message = "Success"),
      (status = 200)
    );
  } catch (err) {
    next(err);
  }
};

module.exports = {
  addProduct,
  updateProductDetails,
  getProductDetails,
  deleteProduct,
  getProductList,
};
