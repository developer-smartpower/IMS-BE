const AppError = require("../../utils/AppError");
const purchaseItemModel = require("../purchaseItem/purchaseItem.model");
const stockModel = require("../stock/stock.model");
const purchaseModel = require("./purchases.model");

const addPurchase = async (
  supplier_id,
  updated_by,
  invoice_number,
  invoice_date,
  purchase_date,
  total_amount,
  notes,
  product_items
) => {
  try {
    await purchaseModel.addPurchase(
      supplier_id,
      updated_by,
      invoice_number,
      invoice_date,
      purchase_date,
      total_amount,
      notes
    );

    for (const item of product_items) {
      const { purchase_id, product_id, quantity, purchase_price, total_price } =
        item;
      await purchaseItemModel.addPurchaseItem(
        purchase_id,
        product_id,
        quantity,
        purchase_price,
        total_price
      );

      await stockModel.addStock(product_id, available_quantity, updated_by);
    }

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

const updatePurchaseDetails = async (
  purchase_id,
  supplier_id,
  user_id,
  invoice_number,
  invoice_date,
  purchase_date,
  total_amount,
  notes
) => {
  try {
    const response = await purchaseModel.updatePurchaseDetails(
      purchase_id,
      supplier_id,
      user_id,
      invoice_number,
      invoice_date,
      purchase_date,
      total_amount,
      notes
    );
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
