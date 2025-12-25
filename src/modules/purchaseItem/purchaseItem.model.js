const db = require("../../config/db");

const addPurchaseItem = async (
  purchase_id,
  product_id,
  quantity,
  purchase_price
) => {
  const query =
    "INSERT INTO purchase_items ( purchase_id, product_id, quantity, purchase_price) VALUES ($1, $2, $3, $4)";
  const values = [purchase_id, product_id, quantity, purchase_price];

  return await db.query(query, values);
};

const updatePurchaseItemDetails = async () => {
  const query = "SELECT * FROM purchases";

  const results = await db.query(query);
  return results.rows;
};

const deletePurchaseItem = async (purchaseItem_id) => {
  const query = "SELECT * FROM purchases WHERE item_id = $1";
  const values = [purchaseItem_id];

  const results = await db.query(query, values);
  return results.rows[0];
};

module.exports = {
  addPurchaseItem,
  updatePurchaseItemDetails,
  deletePurchaseItem,
};
