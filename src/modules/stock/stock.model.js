const db = require("../../config/db");

// CREATE
const addStock = async (product_id, available_quantity, user_id) => {
  const query = `
    INSERT INTO stock (product_id, available_quantity, updated_by)
    VALUES ($1, $2, $3)
  `;
  const values = [product_id, available_quantity, user_id];

  return db.query(query, values);
};

// READ (LIST)
const getStockList = async () => {
  const query = "SELECT stock_id, product_id, available_quantity FROM stock";
  const result = await db.query(query);
  return result.rows;
};

// READ (DETAILS)
const getStockDetails = async (stock_id) => {
  const query = "SELECT * FROM stock WHERE stock_id = $1";
  const values = [stock_id];

  const result = await db.query(query, values);
  return result.rows[0];
};

// UPDATE
const updateStock = async (stock_id, available_quantity, user_id) => {
  const query = `
    UPDATE stock
    SET available_quantity = $1,
        updated_by = $2,
        updated_at = NOW()
    WHERE stock_id = $3
  `;
  const values = [available_quantity, user_id, stock_id];

  return db.query(query, values);
};

// DELETE
const deleteStock = async (stock_id) => {
  const query = "DELETE FROM stock WHERE stock_id = $1";
  const values = [stock_id];

  return db.query(query, values);
};

module.exports = {
  addStock,
  getStockList,
  getStockDetails,
  updateStock,
  deleteStock,
};
