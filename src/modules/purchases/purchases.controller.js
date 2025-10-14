const responseHandler = require("../../utils/ResponseHandler");
const purchaseService = require("./purchases.service");

const addPurchase = async (req, res, next) => {
  const {} = req.body;
  try {
    const response = await purchaseService.addPurchase();
    responseHandler(res, null, "Success", 200);
  } catch (err) {
    next(err);
  }
};

const getPurchaseDetails = async (req, res, next) => {
  const {} = req.body;
  try {
    const response = await purchaseService.getPurchaseDetails();
    responseHandler(res, null, "Success", 200);
  } catch (err) {
    next(err);
  }
};

const updatePurchaseDetails = async (req, res, next) => {
  const {} = req.body;
  try {
    const response = await purchaseService.updatePurchaseDetails();
    responseHandler(res, null, "Success", 200);
  } catch (err) {
    next(err);
  }
};

const getPurchaseList = async (req, res, next) => {
  const {} = req.body;
  try {
    const response = await purchaseService.getPurchaseList();
    responseHandler(res, null, "Success", 200);
  } catch (err) {
    next(err);
  }
};

const deletePurchaseItem = async (req, res, next) => {
  const {} = req.body;
  try {
    const response = await purchaseService.deletePurchaseItem();
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
  deletePurchaseItem,
};
