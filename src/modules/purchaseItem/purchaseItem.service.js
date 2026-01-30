const AppError = require("../../utils/AppError");
const purchaseItemModel = require("./purchaseItem.model");

const addPurchaseItem = async (
  purchase_id,
  product_id,
  quantity,
  purchase_price,
  updated_by
) => {
  try {
    return await purchaseItemModel.addPurchaseItem(
      purchase_id,
      product_id,
      quantity,
      purchase_price,
      updated_by
    );
  } catch (err) {
    if (err instanceof AppError) throw err;
    throw new AppError();
  }
};

const updatePurchaseItemDetails = async (
  purchase_item_id,
  product_id,
  quantity,
  purchase_price,
  updated_by
) => {
  try {
    return await purchaseItemModel.updatePurchaseItemDetails(
      purchase_item_id,
      product_id,
      quantity,
      purchase_price,
      updated_by
    );
  } catch (err) {
    if (err instanceof AppError) throw err;
    throw new AppError();
  }
};

const deletePurchaseItem = async (purchase_item_id) => {
  try {
    return await purchaseItemModel.deletePurchaseItem(purchase_item_id);
  } catch (err) {
    if (err instanceof AppError) throw err;
    throw new AppError();
  }
};

module.exports = {
  addPurchaseItem,
  updatePurchaseItemDetails,
  deletePurchaseItem,
};
