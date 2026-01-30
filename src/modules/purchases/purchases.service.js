const AppError = require("../../utils/AppError");
const purchaseItemModel = require("../purchaseItem/purchaseItem.model");
const stockModel = require("../stock/stock.model");
const purchaseModel = require("./purchases.model");

const addPurchase = async (
  supplier_id,
  invoice_number,
  invoice_date,
  purchase_date,
  notes,
  product_items,
  updated_by
) => {
  try {
    let total_amount = 1000; // TODO: calculate dynamically

    const purchaseResult = await purchaseModel.addPurchase(
      supplier_id,
      invoice_number,
      invoice_date,
      purchase_date,
      total_amount,
      notes,
      updated_by
    );

    const purchase_id = purchaseResult.purchase_id;

    for (const item of product_items) {
      const { product_id, quantity, purchase_price } = item;

      await purchaseItemModel.addPurchaseItem(
        purchase_id,
        product_id,
        quantity,
        purchase_price,
        updated_by
      );

      await stockModel.addStock(product_id, quantity, updated_by);
      return;
    }
  } catch (err) {
    if (err instanceof AppError) throw err;
    throw new AppError();
  }
};

const getPurchaseList = async () => {
  try {
    return await purchaseModel.getPurchaseList();
  } catch (err) {
    if (err instanceof AppError) throw err;
    throw new AppError();
  }
};

const getPurchaseDetails = async (purchase_id) => {
  try {
    return await purchaseModel.getPurchaseDetails(purchase_id);
  } catch (err) {
    if (err instanceof AppError) throw err;
    throw new AppError();
  }
};

const updatePurchaseDetails = async (
  purchase_id,
  supplier_id,
  invoice_number,
  invoice_date,
  purchase_date,
  total_amount,
  notes,
  user_id
) => {
  try {
    return await purchaseModel.updatePurchaseDetails(
      purchase_id,
      supplier_id,
      invoice_number,
      invoice_date,
      purchase_date,
      total_amount,
      notes,
      user_id
    );
  } catch (err) {
    if (err instanceof AppError) throw err;
    throw new AppError();
  }
};

module.exports = {
  addPurchase,
  getPurchaseList,
  getPurchaseDetails,
  updatePurchaseDetails,
};
