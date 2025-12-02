const responseHandler = require("../../utils/ResponseHandler");
const productService = require("./products.service");

const addProduct = async (req, res, next) => {
  const { description, name, manufacturer, supplier_id, code_name } = req.body;
  const user_id = req.user_id;

  try {
    await productService.addProduct(
      description,
      name,
      manufacturer,
      supplier_id,
      code_name,
      user_id
    );

    responseHandler(res, {}, "Success", 200);
  } catch (err) {
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
    responseHandler(res, response, "Success", 200);
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
