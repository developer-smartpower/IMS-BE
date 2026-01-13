const AppError = require("../../utils/AppError");
const stockModel = require("./stock.model");

// CREATE
const addStock = async (product_id, available_quantity, user_id) => {
  try {
    return await stockModel.addStock(product_id, available_quantity, user_id);
  } catch (err) {
    if (err instanceof AppError) throw err;
    throw new AppError();
  }
};

// READ (LIST)
const getStockList = async () => {
  try {
    return await stockModel.getStockList();
  } catch (err) {
    if (err instanceof AppError) throw err;
    throw new AppError();
  }
};

// READ (DETAILS)
const getStockDetails = async (stock_id) => {
  try {
    return await stockModel.getStockDetails(stock_id);
  } catch (err) {
    if (err instanceof AppError) throw err;
    throw new AppError();
  }
};

// UPDATE
const updateStock = async (stock_id, available_quantity, user_id) => {
  try {
    return await stockModel.updateStock(stock_id, available_quantity, user_id);
  } catch (err) {
    if (err instanceof AppError) throw err;
    throw new AppError();
  }
};

// DELETE
const deleteStock = async (stock_id) => {
  try {
    return await stockModel.deleteStock(stock_id);
  } catch (err) {
    if (err instanceof AppError) throw err;
    throw new AppError();
  }
};

module.exports = {
  addStock,
  getStockList,
  getStockDetails,
  updateStock,
  deleteStock,
};
