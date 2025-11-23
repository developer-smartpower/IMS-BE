const responseHandler = require("../../utils/ResponseHandler");
const purchaseService = require("./purchases.service");

const addPurchase = async (req, res, next) => {
  const { product_id, supplier_id, quantity, purchase_price } = req.body;
  try {
    await purchaseService.addPurchase(
      product_id,
      supplier_id,
      quantity,
      purchase_price
    );
    responseHandler(res, null, "Success", 200);
  } catch (err) {
    next(err);
  }
};

const getPurchaseList = async (req, res, next) => {
  try {
    const response = await purchaseService.getPurchaseList();
    responseHandler(res, null, "Success", 200);
  } catch (err) {
    next(err);
  }
};

const getPurchaseDetails = async (req, res, next) => {
  const { purchase_id } = req.params;
  try {
    const response = await purchaseService.getPurchaseDetails(purchase_id);
    responseHandler(res, null, "Success", 200);
  } catch (err) {
    next(err);
  }
};

const updatePurchaseDetails = async (req, res, next) => {
  const {} = req.body;
  const { purchase_id } = req.params;

  try {
    const response = await purchaseService.updatePurchaseDetails(purchase_id);
    responseHandler(res, null, "Success", 200);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  addPurchase,
  getPurchaseDetails,
  updatePurchaseDetails,
  getPurchaseList,
};
