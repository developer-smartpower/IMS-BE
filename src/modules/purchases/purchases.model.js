const db = require("../../config/db");

const addPurchase = async (
  product_id,
  supplier_id,
  quantity,
  purchase_price
) => {
  const query =
    "INSERT INTO purchases (product_id, supplier_id, quantity, purchase_price) VALUES ($1, $2, $3, $4)";
  const values = [product_id, supplier_id, quantity, purchase_price];

  return await db.query(query, values);
};

const getPurchaseList = async () => {
  const query = "SELECT * FROM purchases";

  const results = await db.query(query);
  return results.rows;
};

const getPurchaseDetails = async (purchase_id) => {
  const query = "SELECT * FROM purchases WHERE purchase_id = $1";
  const values = [purchase_id];

  const results = await db.query(query, values);
  return results.rows[0];
};

const updatePurchaseDetails = async () => {
  const query = "";
  const values = [];

  const results = await db.query(query, values);
  return results;
};

module.exports = {
  addPurchase,
  getPurchaseDetails,
  updatePurchaseDetails,
  getPurchaseList,
};
