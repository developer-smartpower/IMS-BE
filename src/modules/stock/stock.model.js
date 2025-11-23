const db = require("../../config/db");

const addStock = async (
  product_id,
  quantity_in_stock,
  reorder_level,
  unit_of_measure,
  location,
  batch_number,
  expiry_date
) => {
  const query =
    "INSERT INTO stocks (product_id, quantity_in_stock, reorder_level, unit_of_measure, location, batch_number) VALUES ($1, $2, $3, $4, $5, $6)";
  const values = [
    product_id,
    quantity_in_stock,
    reorder_level,
    unit_of_measure,
    location,
    batch_number,
  ];

  return await db.query(query, values);
};

const getStockList = async () => {
  const query = "SELECT * FROM stocks";

  const response = await db.query(query);
  return response.rows;
};

const viewStockDetails = async (stock_id) => {
  const query = "SELECT * FROM stocks WHERE stock_id = $1";
  const values = [stock_id];

  const response = await db.query(query, values);
  return response.rows[0];
};

const deleteStock = async (stock_id) => {
  const query = "DELETE FROM stocks WHERE stock_id = $1";
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
