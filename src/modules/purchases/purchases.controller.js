const responseHandler = require("../../utils/ResponseHandler");
const purchaseService = require("./purchases.service");

const addPurchase = async (req, res, next) => {
  try {
    const {
      supplier_id,
      invoice_number,
      invoice_date,
      purchase_date,
      notes,
      product_items,
    } = req.body;

    const user_id = req.user_id;

    await purchaseService.addPurchase(
      supplier_id,
      invoice_number,
      invoice_date,
      purchase_date,
      notes,
      product_items,
      user_id
    );

    responseHandler(res, null, "Success", 200);
  } catch (err) {
    next(err);
  }
};

const getPurchaseList = async (req, res, next) => {
  try {
    const data = await purchaseService.getPurchaseList();
    responseHandler(res, data, "Success", 200);
  } catch (err) {
    next(err);
  }
};

const getPurchaseDetails = async (req, res, next) => {
  try {
    const { purchase_id } = req.params;
    const data = await purchaseService.getPurchaseDetails(purchase_id);
    responseHandler(res, data, "Success", 200);
  } catch (err) {
    next(err);
  }
};

const updatePurchaseDetails = async (req, res, next) => {
  try {
    const {
      supplier_id,
      invoice_number,
      invoice_date,
      purchase_date,
      total_amount,
      notes,
    } = req.body;

    const { purchase_id } = req.params;
    const user_id = req.user_id;

    await purchaseService.updatePurchaseDetails(
      purchase_id,
      supplier_id,
      invoice_number,
      invoice_date,
      purchase_date,
      total_amount,
      notes,
      user_id
    );

    responseHandler(res, null, "Success", 200);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  addPurchase,
  getPurchaseList,
  getPurchaseDetails,
  updatePurchaseDetails,
};
