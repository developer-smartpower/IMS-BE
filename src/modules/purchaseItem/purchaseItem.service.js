const AppError = require("../../utils/AppError");
const purchaseItemModel = require("./purchaseItem.model");

const addPurchaseItem = async (
  purchase_id,
  product_id,
  quantity,
  purchase_price,
  total_price // calculate this
) => {
  try {
    const response = await purchaseItemModel.addPurchaseItem(
      purchase_id,
      product_id,
      quantity,
      purchase_price,
      total_price
    );
    return response;
  } catch (err) {
    if (err instanceof AppError) {
      throw err;
    }
    throw new AppError();
  }
};

const updatePurchaseItemDetails = async () => {
  try {
    const response = await purchaseItemModel.updatePurchaseItemDetails();
    return response;
  } catch (err) {
    if (err instanceof AppError) {
      throw err;
    }
    throw new AppError();
  }
};

const deletePurchaseItem = async (purchaseItem_id) => {
  try {
    const response = await purchaseItemModel.deletePurchaseItem(purchaseItem_id);
    return response;
  } catch (err) {
    if (err instanceof AppError) {
      throw err;
    }
    throw new AppError();
  }
};

module.exports = {
  addPurchaseItem,
  updatePurchaseItemDetails,
  deletePurchaseItem,
};
