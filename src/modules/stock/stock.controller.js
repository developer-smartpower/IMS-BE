const responseHandler = require("../../utils/ResponseHandler");
const stockService = require("./stock.service");

// CREATE
const addStock = async (req, res, next) => {
  try {
    const { product_id, available_quantity } = req.body;
    const { user_id } = req;

    await stockService.addStock(product_id, available_quantity, user_id);
    responseHandler(res, {}, "success", 200);
  } catch (err) {
    next(err);
  }
};

// READ (LIST)
const getStockList = async (req, res, next) => {
  try {
    const response = await stockService.getStockList();
    responseHandler(res, response, "success", 200);
  } catch (err) {
    next(err);
  }
};

// READ (DETAILS)
const getStockDetails = async (req, res, next) => {
  try {
    const { stock_id } = req.params;
    const response = await stockService.getStockDetails(stock_id);
    responseHandler(res, response, "success", 200);
  } catch (err) {
    next(err);
  }
};

// UPDATE
const updateStock = async (req, res, next) => {
  try {
    const { stock_id } = req.params;
    const { available_quantity } = req.body;
    const user_id = req.user_id;

    await stockService.updateStock(stock_id, available_quantity, user_id);
    responseHandler(res, {}, "success", 200);
  } catch (err) {
    next(err);
  }
};

// DELETE
const deleteStock = async (req, res, next) => {
  try {
    const { stock_id } = req.params;
    await stockService.deleteStock(stock_id);
    responseHandler(res, {}, "success", 200);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  addStock,
  getStockList,
  getStockDetails,
  updateStock,
  deleteStock,
};
