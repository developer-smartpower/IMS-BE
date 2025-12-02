const AppError = require("../../utils/AppError");
const stockModel = require("./stock.model");

const addStock = async (product_id, available_quantity, user_id) => {
  try {
    const response = await stockModel.addStock(
      product_id,
      available_quantity,
      user_id
    );
    return response;
  } catch (err) {
    if (err instanceof AppError) {
      throw err;
    }
    throw new AppError();
  }
};

const getStockList = async () => {
  try {
    const response = await stockModel.getStockList();
    return response;
  } catch (err) {
    if (err instanceof AppError) {
      throw err;
    }
    throw new AppError();
  }
};

const viewStockDetails = async (stock_id) => {
  try {
    const response = await stockModel.viewStockDetails(stock_id);
    return response;
  } catch (err) {
    if (err instanceof AppError) {
      throw err;
    }
    throw new AppError();
  }
};

const deleteStock = async (stock_id) => {
  try {
    const response = await stockModel.deleteStock(stock_id);
    return response;
  } catch (err) {
    if (err instanceof AppError) {
      throw err;
    }
    throw new AppError();
  }
};

const updateStock = async (stock_id) => {
  try {
    const response = await stockModel.updateStock(stock_id);
    return response;
  } catch (err) {
    if (err instanceof AppError) {
      throw err;
    }
    throw new AppError();
  }
};

module.exports = {
  addStock,
  getStockList,
  viewStockDetails,
  deleteStock,
  updateStock,
};
