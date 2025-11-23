const responseHandler = require("../../utils/ResponseHandler");
const stockService = require("./stock.service");

const addStock = async (req, res, next) => {
  try {
    const {
      product_id,
      quantity_in_stock,
      reorder_level,
      unit_of_measure,
      location,
      batch_number,
      expiry_date,
    } = req.body;
    await stockService.addStock(
      product_id,
      quantity_in_stock,
      reorder_level,
      unit_of_measure,
      location,
      batch_number,
      expiry_date
    );
    responseHandler(res, {}, "sucess", 200);
  } catch (err) {
    next(err);
  }
};

const getStockList = async (req, res, next) => {
  try {
    const {} = req.body;
    const response = await stockService.getStockList();
    responseHandler(res, response, "sucess", 200);
  } catch (err) {
    next(err);
  }
};

const viewStockDetails = async (req, res, next) => {
  try {
    const { stock_id } = req.params;
    const response = await stockService.viewStockDetails(stock_id);
    responseHandler(res, response, "success", 200);
  } catch (err) {
    next(err);
  }
};

const deleteStock = async (req, res, next) => {
  try {
    const { stock_id } = req.params;
    const response = await stockService.deleteStock(stock_id);
    responseHandler(res, {}, "sucess", 200);
  } catch (err) {
    next(err);
  }
};

const updateStock = async (req, res, next) => {
  try {
    const { stock_id } = req.params;
    const response = await stockService.updateStock(stock_id);
    responseHandler(res, {}, "sucess", 200);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  addStock,
  getStockList,
  viewStockDetails,
  deleteStock,
  updateStock,
};
