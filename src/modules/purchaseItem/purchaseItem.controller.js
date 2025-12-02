const responseHandler = require("../../utils/ResponseHandler");
const purchaseItemSevice = require("./purchaseItem.service");

const addPurchaseItem = async (req, res, next) => {
  const { purchase_id, product_id, quantity, purchase_price } = req.body;
  try {
    await purchaseItemSevice.addPurchaseItem(
      purchase_id,
      product_id,
      quantity,
      purchase_price
    );
    responseHandler(res, null, "Success", 200);
  } catch (err) {
    next(err);
  }
};

const updatePurchaseItemDetails = async (req, res, next) => {
  const { purchaseItem_id } = req.params;
  const { purchase_id, product_id, quantity, purchase_price } = req.body;
  try {
    await purchaseItemSevice.updatePurchaseItemDetails(
      purchaseItem_id,
      purchase_id,
      product_id,
      quantity,
      purchase_price
    );
    responseHandler(res, null, "Success", 200);
  } catch (err) {
    next(err);
  }
};

const deletePurchaseItem = async (req, res, next) => {
  const { purchaseItem_id } = req.params;

  try {
    await purchaseItemSevice.deletePurchaseItem(purchaseItem_id);
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
