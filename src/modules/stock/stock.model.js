const db = require("../../config/db");

const addStock = async (product_id, available_quantity, user_id) => {
  const query =
    "INSERT INTO stock (product_id, available_quantity, updated_by) VALUES ($1, $2, $3)";
  const values = [product_id, available_quantity, user_id];

  return await db.query(query, values);
};

const getStockList = async () => {
  const query = "SELECT * FROM stock";

  const results = await db.query(query);
  return results.rows;
};

const viewStockDetails = async (stock_id) => {
  const query = "SELECT * FROM stock WHERE stock_id = $1";
  const values = [stock_id];

  const results = await db.query(query, values);
  return results.rows[0];
};

const deleteStock = async (stock_id) => {
  const query = "DELETE FROM stock WHERE stock_id = $1";
  const values = [stock_id];

  return await db.query(query, values);
};

const updateStock = async (stock_id) => {
  const query = "";
  const values = [];

  return await db.query(query, values);
};

module.exports = {
  addStock,
  getStockList,
  viewStockDetails,
  deleteStock,
  updateStock,
};
