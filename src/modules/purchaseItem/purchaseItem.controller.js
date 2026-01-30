const responseHandler = require("../../utils/ResponseHandler");
const purchaseItemService = require("./purchaseItem.service");

const addPurchaseItem = async (req, res, next) => {
  try {
    const { purchase_id, product_id, quantity, purchase_price, updated_by } =
      req.body;

    await purchaseItemService.addPurchaseItem(
      purchase_id,
      product_id,
      quantity,
      purchase_price,
      updated_by
    );

    responseHandler(res, null, "Success", 200);
  } catch (err) {
    next(err);
  }
};

const updatePurchaseItemDetails = async (req, res, next) => {
  try {
    const { purchase_item_id } = req.params;
    const { product_id, quantity, purchase_price, updated_by } = req.body;

    await purchaseItemService.updatePurchaseItemDetails(
      purchase_item_id,
      product_id,
      quantity,
      purchase_price,
      updated_by
    );

    responseHandler(res, null, "Success", 200);
  } catch (err) {
    next(err);
  }
};

const deletePurchaseItem = async (req, res, next) => {
  try {
    const { purchase_item_id } = req.params;

    await purchaseItemService.deletePurchaseItem(purchase_item_id);
    responseHandler(res, null, "Success", 200);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  addPurchaseItem,
  updatePurchaseItemDetails,
  deletePurchaseItem,
};
