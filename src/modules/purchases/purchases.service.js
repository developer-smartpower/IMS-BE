const AppError = require("../../utils/AppError");
const purchaseModel = require("./purchases.model");

const addPurchase = async (
  product_id,
  supplier_id,
  quantity,
  purchase_price
) => {
  try {
    const response = await purchaseModel.addPurchase(
      product_id,
      supplier_id,
      quantity,
      purchase_price
    );
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

const getPurchaseDetails = async (purchase_id) => {
  try {
    const response = await purchaseModel.getPurchaseDetails(purchase_id);
    return response;
  } catch (err) {
    if (err instanceof AppError) {
      throw err;
    }
    throw new AppError();
  }
};

const updatePurchaseDetails = async (purchase_id) => {
  try {
    const response = await purchaseModel.updatePurchaseDetails(purchase_id);
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
};
