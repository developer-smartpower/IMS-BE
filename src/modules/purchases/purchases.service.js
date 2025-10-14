const AppError = require("../../utils/AppError");
const purchaseModel = require("./purchases.model");

const addPurchase = async () => {
  try {
    const response = await purchaseModel.addPurchase();
    return response;
  } catch (err) {
    if (err instanceof AppError) {
      throw err;
    }
    throw new AppError();
  }
};

const getPurchaseDetails = async () => {
  try {
    const response = await purchaseModel.getPurchaseDetails();
    return response;
  } catch (err) {
    if (err instanceof AppError) {
      throw err;
    }
    throw new AppError();
  }
};

const updatePurchaseDetails = async () => {
  try {
    const response = await purchaseModel.updatePurchaseDetails();
    return response;
  } catch (err) {
    if (err instanceof AppError) {
      throw err;
    }
    throw new AppError();
  }
};

const getPurchaseList = async () => {
  try {
    const response = await purchaseModel.getPurchaseList();
    return response;
  } catch (err) {
    if (err instanceof AppError) {
      throw err;
    }
    throw new AppError();
  }
};

const deletePurchaseItem = async () => {
  try {
    const response = await purchaseModel.deletePurchaseItem();
    return response;
  } catch (err) {
    if (err instanceof AppError) {
      throw err;
    }
    throw new AppError();
  }
};

module.exports = {
  addPurchase,
  getPurchaseDetails,
  updatePurchaseDetails,
  getPurchaseList,
  deletePurchaseItem,
};
