const responseHandler = require("../../utils/ResponseHandler");
const purchaseService = require("./purchases.service");

const addPurchase = async (req, res, next) => {
  const {
    supplier_id,
    invoice_number,
    invoice_date,
    purchase_date,
    total_amount,
    notes,
    product_items,
  } = req.body;
  const user_id = req.user_id;
  try {
    await purchaseService.addPurchase(
      supplier_id,
      user_id,
      invoice_number,
      invoice_date,
      purchase_date,
      total_amount,
      notes,
      product_items
    );
    responseHandler(res, null, "Success", 200);
  } catch (err) {
    next(err);
  }
};

const getPurchaseList = async (req, res, next) => {
  try {
    const response = await purchaseService.getPurchaseList();
    responseHandler(res, response.data, "Success", 200);
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
  const {
    supplier_id,
    invoice_number,
    invoice_date,
    purchase_date,
    total_amount,
    notes,
  } = req.body;
  const user_id = req.user_id;
  const { purchase_id } = req.params;

  try {
    const response = await purchaseService.updatePurchaseDetails(
      purchase_id,
      supplier_id,
      user_id,
      invoice_number,
      invoice_date,
      purchase_date,
      total_amount,
      notes
    );
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
